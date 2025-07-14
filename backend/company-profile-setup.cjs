require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const { getUpload } = require('./utils/storage');

const router = express.Router();

// --- SCHEMA ---
const contactSchema = new mongoose.Schema({
    name: String,
    role: String,
    email: String,
    phone: String
}, { _id: false });

const documentSchema = new mongoose.Schema({
    name: String,
    status: String,
    file: {
        data: Buffer, // Store file content
        mimetype: String, // Store file mimetype
        originalName: String
    },
    color: String
}, { _id: false });

const companyProfileSchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true },
    companyDescription: String,
    industryType: String,
    companyWebsite: { type: String, required: true, unique: true },
    logo: {
        data: Buffer, // Store logo content
        mimetype: String, // Store logo mimetype
        originalName: String
    },
    pan: String,
    gstin: String,
    address: String,
    primaryContact: contactSchema,
    additionalContacts: [contactSchema],
    documents: [documentSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);

// --- FILE UPLOAD MIDDLEWARE ---
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// --- ROUTES ---

// POST: Create company profile
router.post('/',
    upload.fields([
        { name: 'logo', maxCount: 1 },
        { name: 'documents', maxCount: 10 }
    ]),
    async (req, res, next) => {
        try {
            const data = JSON.parse(req.body.data);
            // Check for duplicate by companyName or website
            const existing = await CompanyProfile.findOne({
                $or: [
                    { companyName: data.companyName },
                    { companyWebsite: data.companyWebsite }
                ]
            });
            if (existing) return res.status(400).json({ error: 'Company profile already exists' });

            // Build profile object
            const profile = { ...data };

            // Attach logo file
            if (req.files.logo && req.files.logo[0]) {
                profile.logo = {
                    data: req.files.logo[0].buffer,
                    mimetype: req.files.logo[0].mimetype,
                    originalName: req.files.logo[0].originalname
                };
            }
            // Attach document files
            if (req.files.documents) {
                profile.documents = (profile.documents || []).map((doc, idx) => ({
                    ...doc,
                    file: req.files.documents[idx] ? {
                        data: req.files.documents[idx].buffer,
                        mimetype: req.files.documents[idx].mimetype,
                        originalName: req.files.documents[idx].originalname
                    } : undefined
                }));
            }

            const newProfile = new CompanyProfile(profile);
            await newProfile.save();

            res.status(201).json({ message: 'Company profile created', id: newProfile._id });
        } catch (err) {
            next(err);
        }
    }
);

// GET: All company profiles
router.get('/', async (req, res, next) => {
    try {
        const profiles = await CompanyProfile.find();
        res.json(profiles);
    } catch (err) {
        next(err);
    }
});

// DELETE: Remove a company profile and its files
router.delete('/:id', async (req, res, next) => {
    try {
        const profile = await CompanyProfile.findById(req.params.id);
        if (!profile) return res.status(404).json({ error: 'Not found' });
        // Delete files folder
        if (profile.companyName) {
            const folder = path.join(__dirname, '../Company_uploads', profile.companyName.replace(/[^a-zA-Z0-9_-]/g, '_'));
            if (fs.existsSync(folder)) {
                fs.rmSync(folder, { recursive: true, force: true });
            }
        }
        await CompanyProfile.findByIdAndDelete(req.params.id);
        res.json({ message: 'Company profile deleted' });
    } catch (err) {
        next(err);
    }
});

module.exports = router; 