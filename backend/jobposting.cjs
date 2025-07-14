require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Job Post Schema
const jobPostSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    location: { type: String, required: true },
    employmentType: { type: String, required: true },
    jobCategory: { type: String, required: true },
    salaryRange: {
        min: Number,
        max: Number
    },
    experienceLevel: { type: String, required: true },
    companyName: { type: String, required: true },
    companyLogo: String,
    jobDescription: String,
    responsibilities: String,
    applicationEmail: { type: String, required: true },
    screeningQuestions: [String],
    postedAt: { type: Date, default: Date.now }
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

// API Routes
router.post('/', async (req, res) => {
    try {
        // Extract screening questions if provided as comma-separated string
        const screeningQuestions = req.body.screeningQuestions
            ? req.body.screeningQuestions.split(',').map(q => q.trim())
            : [];

        const jobPost = new JobPost({
            ...req.body,
            screeningQuestions
        });
        await jobPost.save();
        res.status(201).json(jobPost);
    } catch (error) {
        console.error('Error creating job post:', error);
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const jobPosts = await JobPost.find().sort({ postedAt: -1 });
        res.json(jobPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const jobPost = await JobPost.findById(req.params.id);
        if (!jobPost) {
            return res.status(404).json({ error: 'Job post not found' });
        }
        res.json(jobPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;