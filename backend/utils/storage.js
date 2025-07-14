const fs = require('fs');
const path = require('path');
const multer = require('multer');

const createUserFolder = (email) => {
    const userDir = path.join(__dirname, '..', 'user_uploads', email);
    if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir, { recursive: true });
    }
    return userDir;
};

const createCompanyFolder = (companyName) => {
    const safeName = companyName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const companyDir = path.join(__dirname, '..', 'Company_uploads', safeName);
    if (!fs.existsSync(companyDir)) {
        fs.mkdirSync(companyDir, { recursive: true });
    }
    return companyDir;
};

function getStorage(type = 'user') {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            let uploadPath;
            if (type === 'company') {
                let companyName = 'unknown_company';
                try {
                    if (req.body && req.body.data) {
                        const parsed = JSON.parse(req.body.data);
                        if (parsed.companyName) {
                            companyName = parsed.companyName;
                        }
                    }
                } catch (e) { }
                uploadPath = createCompanyFolder(companyName);
            } else {
                let email = 'unknown';
                try {
                    if (req.body && req.body.data) {
                        const parsed = JSON.parse(req.body.data);
                        if (parsed.personalInfo && parsed.personalInfo.email) {
                            email = parsed.personalInfo.email;
                        }
                    }
                } catch (e) { }
                uploadPath = createUserFolder(email);
            }
            cb(null, uploadPath);
        },
        filename: function (req, file, cb) {
            let base = 'unknown';
            let suffix = '';
            if (type === 'company') {
                try {
                    if (req.body && req.body.data) {
                        const parsed = JSON.parse(req.body.data);
                        if (parsed.companyName) {
                            base = parsed.companyName.replace(/[^a-zA-Z0-9_-]/g, '_');
                        }
                    }
                } catch (e) { }
                if (file.fieldname === 'logo') {
                    suffix = 'logo';
                } else if (file.fieldname === 'documents') {
                    suffix = 'doc_' + Date.now();
                } else {
                    suffix = file.fieldname;
                }
            } else {
                try {
                    if (req.body && req.body.data) {
                        const parsed = JSON.parse(req.body.data);
                        if (parsed.personalInfo && parsed.personalInfo.email) {
                            base = parsed.personalInfo.email;
                        }
                    }
                } catch (e) { }
                if (file.fieldname === 'profilePhoto') {
                    suffix = 'profile';
                } else if (file.fieldname === 'resume') {
                    suffix = 'resume';
                } else if (file.fieldname === 'introductionVideo') {
                    suffix = 'introvideo';
                } else {
                    suffix = file.fieldname;
                }
            }
            const ext = path.extname(file.originalname);
            cb(null, `${base}_${suffix}${ext}`);
        }
    });
}

function getUpload(type = 'user') {
    return multer({
        storage: getStorage(type),
        limits: {
            fileSize: 50 * 1024 * 1024 // 50 MB per file
        }
    });
}

// Default export for user uploads (backward compatibility)
const upload = getUpload('user');

module.exports = upload;
module.exports.getUpload = getUpload;