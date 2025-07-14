const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const router = express.Router();

// Safe model export (avoid overwrite errors in dev mode)
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken: String,
    resetTokenExpiry: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}));

// Email transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// JWT generator
const generateToken = (userId) => jwt.sign(
    { userId },
    process.env.JWT_SECRET || 'iu!O9RInieEINfin309hWinf08vIM0ojfubejnfuwksmiufwuw.jdiapeihknSKiwjaoksn',
    { expiresIn: '7d' }
);

// Send reset email
const sendPasswordResetEmail = async (email, resetToken) => {
    const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`;

    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: email,
        subject: 'Password Reset Request',
        html: `
            <h2>Password Reset Request</h2>
            <p>You requested a password reset for your account.</p>
            <a href="${resetUrl}" style="background-color: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Reset Password
            </a>
            <p>If you didn't request this, ignore this email.</p>
            <p>This link will expire in 1 hour.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Email error:', error);
        return false;
    }
};

// === ROUTES ===

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });
        if (password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters' });

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        const token = generateToken(newUser._id);
        res.status(201).json({ message: 'User registered', token, user: { id: newUser._id, email: newUser.email } });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: 'Server error during signup' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password)))
            return res.status(401).json({ message: 'Invalid credentials' });

        const token = generateToken(user._id);
        res.json({ message: 'Login successful', token, user: { id: user._id, email: user.email } });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Errors found in this "api/forgot-password"
// Forgot Password
// router.('/forgot-password', async (req, res) => {
//     try {
//         const { email } = req.body;
//         if (!email) return res.status(400).json({ message: 'Email is required' });

//         const user = await User.findOne({ email });
//         if (!user) return res.json({ message: 'If account exists, reset link sent' });

//         const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'iu!O9RInieEINfin309hWinf08vIM0ojfubejnfuwksmiufwuw.jdiapeihknSKiwjaoksn', { expiresIn: '1h' });
//         user.resetToken = resetToken;
//         user.resetTokenExpiry = Date.now() + 3600000;
//         await user.save();

//         const emailSent = await sendPasswordResetEmail(email, resetToken);
//         if (emailSent) {
//             res.json({ message: 'If account exists, reset link sent' });
//         } else {
//             res.status(500).json({ message: 'Failed to send email' });
//         }
//     } catch (err) {
//         console.error('Forgot password error:', err);
//         res.status(500).json({ message: 'Server error during password reset request' });
//     }
// });

// Reset Password
router.post('/reset-password', async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !newPassword) return res.status(400).json({ message: 'Token and new password required' });
        if (newPassword.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'iu!O9RInieEINfin309hWinf08vIM0ojfubejnfuwksmiufwuw.jdiapeihknSKiwjaoksn');

        const user = await User.findOne({
            _id: decoded.userId,
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() }
        });

        if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

        user.password = await bcrypt.hash(newPassword, 12);
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.json({ message: 'Password reset successful' });
    } catch (err) {
        console.error('Reset password error:', err);
        if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }
        res.status(500).json({ message: 'Server error during password reset' });
    }
});

// JWT-Expriry-Extend

// router.get('/api/jwt-extend', async (req, res) => {
//     try {
//         const token = JWT_SECRET.req.headers.authorization?.split('')[1];
//         if (!token) return.res.status(401).json({ message: 'JWT Expiry has extended' });

//         const JWT_SECRET = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded.userId).select('-password');
//     }
// })

// Token Verification
router.get('/verify-token', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'No token provided' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'iu!O9RInieEINfin309hWinf08vIM0ojfubejnfuwksmiufwuw.jdiapeihknSKiwjaoksn');
        const user = await User.findById(decoded.userId).select('-password');

        if (!user) return res.status(401).json({ message: 'Invalid token' });

        res.json({ message: 'Token is valid', user });
    } catch (err) {
        console.error('Verify token error:', err);
        res.status(401).json({ message: 'Invalid token' });
    }
});

module.exports = router;