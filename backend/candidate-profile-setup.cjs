require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const upload = require('./utils/storage');

const router = express.Router();

// Schema
const candidateProfileSchema = new mongoose.Schema({
    personalInfo: {
        firstName: String,
        lastName: String,
        email: { type: String, required: true, unique: true },
        mobile: String,
        location: String,
        company: String,
        nationality: String,
        gender: String,
        profilePhoto: {
            path: String,
            originalName: String
        },
        resume: {
            path: String,
            originalName: String
        },
        introductionVideo: {
            path: String,
            originalName: String,
            duration: Number
        }
    },
    education: [{
        degree: String,
        specialization: String,
        university: String,
        startYear: String,
        endYear: String,
        grades: String,
        institution: String
    }],
    experience: [{
        jobTitle: String,
        employer: String,
        startDate: String,
        endDate: String,
        designation: String,
        employmentType: String,
        location: String,
        experienceSummary: String,
        currentJob: Boolean
    }],
    skills: [String],
    projects: [{
        projectName: String,
        startDate: String,
        endDate: String,
        description: String,
        keySkills: String,
        projectUrl: String
    }],
    profileStatus: { type: String, default: "completed" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const CandidateProfile = mongoose.model('CandidateProfile', candidateProfileSchema);

// POST Candidate Profile with File Uploads
router.post('/',
    upload.fields([
        { name: 'profilePhoto', maxCount: 1 },
        { name: 'resume', maxCount: 1 },
        { name: 'introductionVideo', maxCount: 1 }
    ]),
    async (req, res, next) => {
        try {
            const parsed = JSON.parse(req.body.data);
            const { personalInfo, education, experience, skills, projects } = parsed;

            if (req.files.profilePhoto) {
                personalInfo.profilePhoto = {
                    path: req.files.profilePhoto[0].path,
                    originalName: req.files.profilePhoto[0].originalname
                };
            }

            if (req.files.resume) {
                personalInfo.resume = {
                    path: req.files.resume[0].path,
                    originalName: req.files.resume[0].originalname
                };
            }

            if (req.files.introductionVideo) {
                personalInfo.introductionVideo = {
                    path: req.files.introductionVideo[0].path,
                    originalName: req.files.introductionVideo[0].originalname,
                    duration: personalInfo.introductionVideo?.duration || 0
                };
            }

            const existing = await CandidateProfile.findOne({ 'personalInfo.email': personalInfo.email });
            if (existing) return res.status(400).json({ error: 'Profile already exists' });

            const newProfile = new CandidateProfile({
                personalInfo, education, experience, skills, projects
            });
            await newProfile.save();

            res.status(201).json({ message: 'Profile created', profileId: newProfile._id });
        } catch (err) {
            next(err);
        }
    }
);

// GET All Profiles
router.get('/', async (req, res, next) => {
    try {
        const profiles = await CandidateProfile.find();
        res.json(profiles);
    } catch (err) {
        next(err);
    }
});

// DELETE Profile + Files
router.delete('/:id', async (req, res, next) => {
    try {
        const profile = await CandidateProfile.findById(req.params.id);
        if (!profile) return res.status(404).json({ error: 'Not found' });

        // Delete files
        const email = profile.personalInfo.email;
        const folder = path.join(__dirname, 'user_uploads', email);
        if (fs.existsSync(folder)) {
            fs.rmSync(folder, { recursive: true, force: true });
        }

        await CandidateProfile.findByIdAndDelete(req.params.id);
        res.json({ message: 'Profile deleted with files' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;