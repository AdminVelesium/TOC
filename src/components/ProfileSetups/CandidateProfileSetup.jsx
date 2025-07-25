"use client"
import React, { useState, useEffect, useRef } from "react";
import Logo from "../Logo";
import {
    Menu, X, Plus, User, GraduationCap, Briefcase,
    Award, Code, Camera, FileText, Check,
    ArrowLeft, ArrowRight, Video, Mic, Upload
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function CandidateProfileSetup() {
    const [activeStep, setActiveStep] = useState(1)
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate();
    // Redirect to /signup if userId is not present
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            navigate('/signup');
        }
    }, [navigate]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [transcribing, setTranscribing] = useState(false);


    // Refs for file inputs
    const photoInputRef = useRef(null)
    const resumeInputRef = useRef(null)
    const videoInputRef = useRef(null)

    // Form data states
    const [personalData, setPersonalData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        location: "",
        company: "",
        nationality: "",
        gender: "",
        profilePhoto: null,
        resume: null,
        introductionVideo: null
    })

    const [educationData, setEducationData] = useState([{
        degree: "",
        specialization: "",
        university: "",
        startYear: "",
        endYear: "",
        grades: "",
        institution: "",
    }])

    const [experienceData, setExperienceData] = useState([{
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        designation: "",
        employmentType: "",
        location: "",
        experienceSummary: "",
        currentJob: false,
    }])

    const [skillsData, setSkillsData] = useState([])
    const [selectedSkill, setSelectedSkill] = useState("")
    const [projectsData, setProjectsData] = useState([{
        projectName: "",
        startDate: "",
        endDate: "",
        description: "",
        keySkills: "",
        projectUrl: "",
    }])

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) setIsMenuOpen(false)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Handle photo upload
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file')
            return
        }

        if (file.size > 2 * 1024 * 1024) {
            alert('Photo size should be less than 2MB')
            return
        }

        setPersonalData({
            ...personalData,
            profilePhoto: file
        });
    }

    // Handle resume upload
    // In handleResumeUpload function
    const handleResumeUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const validTypes = [
            'application/pdf'
        ];

        if (!validTypes.includes(file.type)) {
            alert('Please upload a PDF file');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('Resume size should be less than 5MB');
            return;
        }

        setPersonalData({
            ...personalData,
            resume: file
        });

        // === Autofill logic: call backend microservice ===
        try {
            const formData = new FormData();
            formData.append('resume', file);
            const response = await fetch('https://toc-bac-1.onrender.com/api/candidate-profile/extract-resume-fields', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) throw new Error('Could not extract details from resume');
            const data = await response.json();
            setPersonalData(prev => ({
                ...prev,
                firstName: data.firstName || prev.firstName,
                lastName: data.lastName || prev.lastName,
                email: data.email || prev.email,
                mobile: data.mobile || prev.mobile
            }));
        } catch {
            alert('Could not extract details from resume. You can fill them manually.');
        }
    };

    // Handle video upload
    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('video/')) {
            alert('Please upload a video file');
            return;
        }

        if (file.size > 50 * 1024 * 1024) {
            alert('Video size should be less than 50MB');
            return;
        }

        setPersonalData({
            ...personalData,
            introductionVideo: file
        });
    };

    // Handle form submission
    const handleSubmit = async () => {
        setIsSubmitting(true);
        setUploadProgress(0);
        setTranscribing(false);
        try {
            // Prepare the data object (excluding files)
            const candidateData = {
                personalInfo: {
                    ...personalData,
                    profilePhoto: undefined, // Remove file from JSON
                    resume: undefined,
                    introductionVideo: undefined
                },
                education: educationData.filter(edu => edu.degree || edu.specialization || edu.university),
                experience: experienceData.filter(exp => exp.jobTitle || exp.employer),
                skills: skillsData,
                projects: projectsData.filter(project => project.projectName || project.description),
                profileStatus: "completed"
            };

            // Get userId from localStorage
            const userId = localStorage.getItem('userId');
            if (!userId) throw new Error('User ID not found. Please sign up again.');

            // Use FormData to send files and JSON data
            const formData = new FormData();
            formData.append('data', JSON.stringify(candidateData));
            if (personalData.profilePhoto) formData.append('profilePhoto', personalData.profilePhoto);
            if (personalData.resume) formData.append('resume', personalData.resume);
            if (personalData.introductionVideo) formData.append('introductionVideo', personalData.introductionVideo);

            // Always use /api/user/:id/profile for profile setup
            const response = await fetch(`https://toc-bac-1.onrender.com/api/user/${userId}/profile`, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Failed to save profile');

            setUploadProgress(100);
            setTranscribing(false);
            alert('Profile setup completed successfully!');
            // Remove userId from localStorage after profile setup
            localStorage.removeItem('userId');
            navigate('/login');
        } catch (error) {
            setTranscribing(false);
            setUploadProgress(0);
            console.error('Error submitting candidate profile:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Steps configuration
    const steps = [
        { id: 1, title: "Personal Details", icon: <User size={16} /> },
        { id: 2, title: "Education", icon: <GraduationCap size={16} /> },
        { id: 3, title: "Work Experience", icon: <Briefcase size={16} /> },
        { id: 4, title: "Skills", icon: <Award size={16} /> },
        { id: 5, title: "Video Introduction", icon: <Video size={16} /> },
        { id: 6, title: "Projects", icon: <Code size={16} /> }
    ]

    // Navigation functions
    const handleNext = () => activeStep < steps.length && setActiveStep(activeStep + 1)
    const handlePrevious = () => activeStep > 1 && setActiveStep(activeStep - 1)
    const handleStepClick = (stepId) => setActiveStep(stepId)

    // Helper functions
    const addEducation = () => setEducationData([...educationData, {
        degree: "", specialization: "", university: "",
        startYear: "", endYear: "", grades: "", institution: ""
    }])

    const addExperience = () => setExperienceData([...experienceData, {
        jobTitle: "", employer: "", startDate: "", endDate: "",
        designation: "", employmentType: "", location: "",
        experienceSummary: "", currentJob: false
    }])

    const addProject = () => setProjectsData([...projectsData, {
        projectName: "", startDate: "", endDate: "",
        description: "", keySkills: "", projectUrl: ""
    }])

    const addSkill = () => {
        if (selectedSkill && !skillsData.includes(selectedSkill)) {
            setSkillsData([...skillsData, selectedSkill])
            setSelectedSkill("")
        }
    }

    const removeSkill = (skillToRemove) => {
        setSkillsData(skillsData.filter(skill => skill !== skillToRemove))
    }

    return (
        <Box sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: "#f8fafc",
            minHeight: "100vh"
        }}>
            {/* Header */}
            <Box sx={{
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
                <Box sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100px",
                }}>
                    <Box sx={{ marginTop: "-50px" }}>
                        <Logo />
                    </Box>

                    {!isMobile && (
                        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                            <Typography sx={{
                                fontSize: "1rem",
                                fontWeight: "600",
                                color: "#6366f1"
                            }}>
                            </Typography>
                        </Box>
                    )}

                    {isMobile && (
                        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)} sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "44px",
                            height: "44px",
                            border: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            borderRadius: "8px"
                        }}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </IconButton>
                    )}
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{
                display: "flex",
                minHeight: "calc(100vh - 70px)",
                flexDirection: isMobile ? "column" : "row"
            }}>
                {/* Sidebar */}
                {!isMobile && (
                    <Box sx={{
                        width: "320px",
                        backgroundColor: "white",
                        borderRight: "1px solid #e5e7eb",
                        padding: "2rem 0",
                        position: "sticky",
                        top: "70px",
                        height: "calc(100vh - 70px)",
                        overflowY: "auto"
                    }}>
                        <Box sx={{ padding: "0 2rem", marginBottom: "2rem" }}>
                            <Typography sx={{
                                fontSize: "1.25rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "0.5rem"
                            }}>
                                Profile Setup
                            </Typography>
                            <Typography sx={{
                                fontSize: "0.9rem",
                                color: "#6b7280",
                                marginBottom: "1.5rem"
                            }}>
                                Complete your profile to get better job recommendations
                            </Typography>
                            <Box sx={{ marginBottom: "1rem" }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "0.5rem"
                                }}>
                                    <Typography sx={{
                                        fontSize: "0.85rem",
                                        color: "#6b7280",
                                        fontWeight: "500"
                                    }}>
                                        Progress
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "0.85rem",
                                        color: "#6366f1",
                                        fontWeight: "600"
                                    }}>
                                        {activeStep}/{steps.length}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: "100%",
                                    height: "8px",
                                    backgroundColor: "#f3f4f6",
                                    borderRadius: "4px",
                                    overflow: "hidden"
                                }}>
                                    <Box sx={{
                                        width: `${(activeStep / steps.length) * 100}%`,
                                        height: "100%",
                                        backgroundColor: "#6366f1",
                                        borderRadius: "4px"
                                    }} />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{}}>
                            {steps.map((step) => (
                                <Box key={step.id} onClick={() => handleStepClick(step.id)} sx={{
                                    padding: "1rem 2rem",
                                    backgroundColor: activeStep === step.id ? "#eff6ff" : "transparent",
                                    borderRight: activeStep === step.id ? "4px solid #6366f1" : "4px solid transparent",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}>
                                    <Box sx={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: activeStep === step.id ? "#6366f1" :
                                            activeStep > step.id ? "#10b981" : "#f3f4f6",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: activeStep >= step.id ? "white" : "#6b7280"
                                    }}>
                                        {activeStep > step.id ? <Check size={16} /> : step.icon}
                                    </Box>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography sx={{
                                            fontSize: "0.95rem",
                                            fontWeight: activeStep === step.id ? "600" : "500",
                                            color: activeStep === step.id ? "#6366f1" : "#1f2937"
                                        }}>
                                            {step.title}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{
                                        fontSize: "0.8rem",
                                        color: activeStep === step.id ? "#6366f1" : "#9ca3af",
                                        fontWeight: "600"
                                    }}>
                                        {step.id}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* Main Content Area */}
                <Box sx={{
                    flex: 1,
                    padding: isMobile ? "1rem" : "2rem",
                    backgroundColor: "#f8fafc",
                    minHeight: isMobile ? "auto" : "calc(100vh - 70px)"
                }}>
                    {/* Step 1: Personal Details */}
                    {activeStep === 1 && (
                        <Paper sx={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Personal Information
                                </Typography>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Tell us about yourself to create your professional profile
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
                                gap: isMobile ? "2rem" : "3rem",
                                alignItems: "start"
                            }}>
                                {/* Photo Upload */}
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}>
                                    <Box onClick={() => photoInputRef.current.click()} sx={{
                                        position: "relative",
                                        width: "140px",
                                        height: "140px",
                                        border: "3px dashed #d1d5db",
                                        borderRadius: "12px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#f9fafb",
                                        cursor: "pointer",
                                        overflow: "hidden"
                                    }}>
                                        {personalData.profilePhoto ? (
                                            <Avatar
                                                src={URL.createObjectURL(personalData.profilePhoto)}
                                                alt="Profile"
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <Avatar sx={{
                                                    width: "50px",
                                                    height: "50px",
                                                    backgroundColor: "#e5e7eb",
                                                    marginBottom: "0.5rem"
                                                }}>
                                                    <User size={24} color="#6b7280" />
                                                </Avatar>
                                                <Box sx={{
                                                    position: "absolute",
                                                    bottom: "12px",
                                                    right: "12px",
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: "#6366f1",
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                                }}>
                                                    <Camera size={16} color="white" />
                                                </Box>
                                            </>
                                        )}
                                    </Box>
                                    <input
                                        type="file"
                                        ref={photoInputRef}
                                        onChange={handlePhotoUpload}
                                        accept="image/*"
                                        style={{ display: "none" }}
                                    />
                                    <Typography sx={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        fontWeight: "500"
                                    }}>
                                        {personalData.profilePhoto ? "Change Photo" : "Upload Photo"}
                                    </Typography>
                                </Box>

                                {/* Form Fields */}
                                <Box sx={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                    gap: "1.5rem"
                                }}>
                                    {[
                                        { label: "First Name *", key: "firstName", type: "text" },
                                        { label: "Last Name *", key: "lastName", type: "text" },
                                        { label: "Email Address *", key: "email", type: "email" },
                                        { label: "Mobile Number *", key: "mobile", type: "tel" },
                                        {
                                            label: "Location *",
                                            key: "location",
                                            type: "select",
                                            options: ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune", "Remote"]
                                        },
                                        { label: "Current Company", key: "company", type: "text" },
                                        {
                                            label: "Nationality",
                                            key: "nationality",
                                            type: "select",
                                            options: ["", "Indian"]
                                        },
                                        {
                                            label: "Gender",
                                            key: "gender",
                                            type: "select",
                                            options: ["", "Male", "Female", "Other", "Prefer not to say"]
                                        }
                                    ].map((field) => (
                                        <Box key={field.key}>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                {field.label}
                                            </InputLabel>
                                            {field.type === "select" ? (
                                                <Select
                                                    value={personalData[field.key]}
                                                    onChange={(e) => setPersonalData({
                                                        ...personalData,
                                                        [field.key]: e.target.value
                                                    })}
                                                    sx={{
                                                        width: "100%",
                                                        padding: "0.75rem",
                                                        border: "2px solid #e5e7eb",
                                                        borderRadius: "8px",
                                                        fontSize: "0.95rem",
                                                        outline: "none",
                                                        backgroundColor: "white"
                                                    }}
                                                >
                                                    {field.options.map(option => (
                                                        <MenuItem key={option} value={option}>
                                                            {option || "Select"}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            ) : (
                                                <TextField
                                                    type={field.type}
                                                    value={personalData[field.key]}
                                                    onChange={(e) => setPersonalData({
                                                        ...personalData,
                                                        [field.key]: e.target.value
                                                    })}
                                                    placeholder={`Enter your ${field.key.toLowerCase()}`}
                                                    sx={{
                                                        width: "100%",
                                                        padding: "0.75rem",
                                                        border: "2px solid #e5e7eb",
                                                        borderRadius: "8px",
                                                        fontSize: "0.95rem",
                                                        outline: "none",
                                                        backgroundColor: "white"
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    ))}

                                    {/* Resume Upload */}
                                    <Box sx={{ gridColumn: isMobile ? "1" : "1 / -1" }}>
                                        <InputLabel sx={{
                                            display: "block",
                                            fontSize: "0.9rem",
                                            fontWeight: "600",
                                            color: "#374151",
                                            marginBottom: "0.5rem"
                                        }}>
                                            Upload Resume *
                                        </InputLabel>
                                        <Box onClick={() => resumeInputRef.current.click()} sx={{
                                            border: "3px dashed #d1d5db",
                                            borderRadius: "12px",
                                            padding: "2rem",
                                            textAlign: "center",
                                            backgroundColor: "#f9fafb",
                                            cursor: "pointer"
                                        }}>
                                            {personalData.resume ? (
                                                <Box>
                                                    <FileText size={48} color="#6366f1" />
                                                    <Typography sx={{
                                                        fontSize: "1rem",
                                                        fontWeight: "500",
                                                        color: "#1f2937",
                                                        margin: "0.5rem 0"
                                                    }}>
                                                        {personalData.resume.name}
                                                    </Typography>
                                                    <Button onClick={(e) => {
                                                        e.stopPropagation()
                                                        setPersonalData({
                                                            ...personalData,
                                                            resume: null
                                                        })
                                                    }} sx={{
                                                        backgroundColor: "#fee2e2",
                                                        color: "#dc2626",
                                                        border: "none",
                                                        padding: "0.5rem 1rem",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        fontSize: "0.85rem"
                                                    }}>
                                                        Remove
                                                    </Button>
                                                </Box>
                                            ) : (
                                                <>
                                                    <Avatar sx={{
                                                        width: "48px",
                                                        height: "48px",
                                                        backgroundColor: "#e5e7eb",
                                                        margin: "0 auto 1rem",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}>
                                                        <FileText size={24} color="#6b7280" />
                                                    </Avatar>
                                                    <Typography sx={{
                                                        fontSize: "1rem",
                                                        fontWeight: "500",
                                                        color: "#1f2937",
                                                        marginBottom: "0.5rem"
                                                    }}>
                                                        Drop your resume here or click to browse
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontSize: "0.85rem",
                                                        color: "#6b7280",
                                                        margin: 0
                                                    }}>
                                                        Supported formats: PDF (Max 5MB)
                                                    </Typography>
                                                </>
                                            )}
                                            <input
                                                type="file"
                                                ref={resumeInputRef}
                                                onChange={handleResumeUpload}
                                                accept=".pdf"
                                                style={{ display: "none" }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    )}

                    {/* Step 2: Education */}
                    {activeStep === 2 && (
                        <Paper sx={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Educational Background
                                </Typography>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Add your educational qualifications and achievements
                                </Typography>
                            </Box>
                            {educationData.map((education, index) => (
                                <Paper sx={{
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #e5e7eb"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <Typography sx={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0
                                        }}>
                                            Education {index + 1}
                                        </Typography>
                                        {index > 0 && (
                                            <Button onClick={() => {
                                                const newEducation = educationData.filter((_, i) => i !== index)
                                                setEducationData(newEducation)
                                            }} sx={{
                                                backgroundColor: "#fee2e2",
                                                color: "#dc2626",
                                                border: "none",
                                                padding: "0.5rem",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "0.8rem",
                                                fontWeight: "500"
                                            }}>
                                                Remove
                                            </Button>
                                        )}
                                    </Box>
                                    <Box sx={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                        gap: "1.5rem"
                                    }}>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Degree/Qualification *
                                            </InputLabel>
                                            <Select
                                                value={education.degree}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].degree = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            >
                                                <MenuItem value="">Select Degree</MenuItem>
                                                <MenuItem value="Bachelor's">Bachelor's Degree</MenuItem>
                                                <MenuItem value="Master's">Master's Degree</MenuItem>
                                                <MenuItem value="PhD">PhD</MenuItem>
                                                <MenuItem value="Diploma">Diploma</MenuItem>
                                                <MenuItem value="Certificate">Certificate</MenuItem>
                                            </Select>
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Specialization *
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={education.specialization}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].specialization = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="e.g., Computer Science"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                University/Institution *
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={education.university}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].university = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="Enter university name"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Grades/CGPA
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={education.grades}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].grades = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="e.g., 8.5/10 or 85%"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Start Year *
                                            </InputLabel>
                                            <TextField
                                                type="number"
                                                value={education.startYear}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].startYear = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="2020"
                                                inputProps={{ min: "1950", max: "2030" }}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                End Year *
                                            </InputLabel>
                                            <TextField
                                                type="number"
                                                value={education.endYear}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].endYear = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="2024"
                                                inputProps={{ min: "1950", max: "2030" }}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Paper>
                            ))}
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            }}>
                                <Button onClick={addEducation} sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    backgroundColor: "transparent",
                                    color: "#6366f1",
                                    border: "2px dashed #6366f1",
                                    padding: "0.75rem 1.5rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}>
                                    <Plus size={16} />
                                    Add Another Education
                                </Button>
                            </Box>
                        </Paper>
                    )}

                    {/* Step 3: Work Experience */}
                    {activeStep === 3 && (
                        <Paper sx={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Work Experience
                                </Typography>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Share your professional experience and achievements
                                </Typography>
                            </Box>
                            {experienceData.map((experience, index) => (
                                <Paper sx={{
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #e5e7eb"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <Typography sx={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0
                                        }}>
                                            Experience {index + 1}
                                        </Typography>
                                        {index > 0 && (
                                            <Button onClick={() => {
                                                const newExperience = experienceData.filter((_, i) => i !== index)
                                                setExperienceData(newExperience)
                                            }} sx={{
                                                backgroundColor: "#fee2e2",
                                                color: "#dc2626",
                                                border: "none",
                                                padding: "0.5rem",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "0.8rem",
                                                fontWeight: "500"
                                            }}>
                                                Remove
                                            </Button>
                                        )}
                                    </Box>
                                    <Box sx={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                        gap: "1.5rem"
                                    }}>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Job Title *
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={experience.jobTitle}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].jobTitle = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="e.g., Software Engineer"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Company *
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={experience.employer}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].employer = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="Enter company name"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Employment Type *
                                            </InputLabel>
                                            <Select
                                                value={experience.employmentType}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].employmentType = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            >
                                                <MenuItem value="">Select Employment Type</MenuItem>
                                                <MenuItem value="Full-time">Full-time</MenuItem>
                                                <MenuItem value="Part-time">Part-time</MenuItem>
                                                <MenuItem value="Contract">Contract</MenuItem>
                                                <MenuItem value="Freelance">Freelance</MenuItem>
                                                <MenuItem value="Internship">Internship</MenuItem>
                                            </Select>
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Location *
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={experience.location}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].location = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="e.g., Bangalore, India"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Start Date *
                                            </InputLabel>
                                            <TextField
                                                type="month"
                                                value={experience.startDate}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].startDate = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                End Date
                                            </InputLabel>
                                            <TextField
                                                type="month"
                                                value={experience.endDate}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].endDate = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                disabled={experience.currentJob}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: experience.currentJob ? "#f3f4f6" : "white",
                                                    opacity: experience.currentJob ? 0.6 : 1
                                                }}
                                            />
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                marginTop: "0.5rem"
                                            }}>
                                                <input
                                                    type="checkbox"
                                                    id={`current-job-${index}`}
                                                    checked={experience.currentJob}
                                                    onChange={(e) => {
                                                        const newExperience = [...experienceData]
                                                        newExperience[index].currentJob = e.target.checked
                                                        if (e.target.checked) {
                                                            newExperience[index].endDate = ""
                                                        }
                                                        setExperienceData(newExperience)
                                                    }}
                                                    style={{
                                                        width: "16px",
                                                        height: "16px",
                                                        accentColor: "#6366f1"
                                                    }}
                                                />
                                                <label htmlFor={`current-job-${index}`} style={{
                                                    fontSize: "0.85rem",
                                                    color: "#6b7280",
                                                    cursor: "pointer"
                                                }}>
                                                    I currently work here
                                                </label>
                                            </Box>
                                        </Box>
                                        <Box sx={{ gridColumn: isMobile ? "1" : "1 / -1" }}>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Job Description
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={experience.experienceSummary}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].experienceSummary = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="Describe your role, responsibilities, and achievements..."
                                                multiline
                                                rows={4}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white",
                                                    fontFamily: "inherit",
                                                    resize: "vertical"
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Paper>
                            ))}
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            }}>
                                <Button onClick={addExperience} sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    backgroundColor: "transparent",
                                    color: "#6366f1",
                                    border: "2px dashed #6366f1",
                                    padding: "0.75rem 1.5rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}>
                                    <Plus size={16} />
                                    Add Another Experience
                                </Button>
                            </Box>
                        </Paper>
                    )}

                    {/* Step 4: Skills */}
                    {activeStep === 4 && (
                        <Paper sx={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Skills & Expertise
                                </Typography>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Add your key skills and technical expertise
                                </Typography>
                            </Box>
                            <Box sx={{ marginBottom: "2rem" }}>
                                <InputLabel sx={{
                                    display: "block",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#374151",
                                    marginBottom: "0.5rem"
                                }}>
                                    Add Skills
                                </InputLabel>
                                <Box sx={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    alignItems: "center",
                                    flexDirection: isMobile ? "column" : "row"
                                }}>
                                    <Select
                                        value={selectedSkill}
                                        onChange={(e) => setSelectedSkill(e.target.value)}
                                        sx={{
                                            flex: 1,
                                            padding: "0.75rem",
                                            border: "2px solid #e5e7eb",
                                            borderRadius: "8px",
                                            fontSize: "0.95rem",
                                            outline: "none",
                                            backgroundColor: "white",
                                            width: isMobile ? "100%" : "auto"
                                        }}
                                    >
                                        <MenuItem value="">Select or type a skill</MenuItem>
                                        <MenuItem value="JavaScript">JavaScript</MenuItem>
                                        <MenuItem value="Python">Python</MenuItem>
                                        <MenuItem value="React">React</MenuItem>
                                        <MenuItem value="Node.js">Node.js</MenuItem>
                                        <MenuItem value="Java">Java</MenuItem>
                                        <MenuItem value="Spring Boot">Spring Boot</MenuItem>
                                        <MenuItem value="SQL">SQL</MenuItem>
                                        <MenuItem value="MongoDB">MongoDB</MenuItem>
                                        <MenuItem value="AWS">AWS</MenuItem>
                                        <MenuItem value="Docker">Docker</MenuItem>
                                        <MenuItem value="Kubernetes">Kubernetes</MenuItem>
                                        <MenuItem value="Git">Git</MenuItem>
                                        <MenuItem value="HTML/CSS">HTML/CSS</MenuItem>
                                        <MenuItem value="TypeScript">TypeScript</MenuItem>
                                        <MenuItem value="Angular">Angular</MenuItem>
                                        <MenuItem value="Vue.js">Vue.js</MenuItem>
                                        <MenuItem value="PHP">PHP</MenuItem>
                                        <MenuItem value="C++">C++</MenuItem>
                                        <MenuItem value="C#">C#</MenuItem>
                                        <MenuItem value="Go">Go</MenuItem>
                                    </Select>
                                    <Button
                                        onClick={addSkill}
                                        disabled={!selectedSkill}
                                        sx={{
                                            backgroundColor: selectedSkill ? "#6366f1" : "#d1d5db",
                                            color: "white",
                                            border: "none",
                                            padding: "0.75rem 1.5rem",
                                            borderRadius: "8px",
                                            fontSize: "0.9rem",
                                            fontWeight: "600",
                                            cursor: selectedSkill ? "pointer" : "not-allowed",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            whiteSpace: "nowrap",
                                            width: isMobile ? "100%" : "auto",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Plus size={16} />
                                        Add Skill
                                    </Button>
                                </Box>
                            </Box>
                            {skillsData.length > 0 && (
                                <Box sx={{ marginBottom: "2rem" }}>
                                    <Typography sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "1rem"
                                    }}>
                                        Your Skills ({skillsData.length})
                                    </Typography>
                                    <Box sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.75rem"
                                    }}>
                                        {skillsData.map((skill, index) => (
                                            <Box key={index} sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                backgroundColor: "#eff6ff",
                                                color: "#1e40af",
                                                padding: "0.5rem 0.75rem",
                                                borderRadius: "20px",
                                                fontSize: "0.9rem",
                                                fontWeight: "500",
                                                border: "1px solid #dbeafe"
                                            }}>
                                                <Typography>{skill}</Typography>
                                                <IconButton
                                                    onClick={() => removeSkill(skill)}
                                                    sx={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "#6b7280",
                                                        cursor: "pointer",
                                                        fontSize: "1.2rem",
                                                        padding: "0",
                                                        width: "20px",
                                                        height: "20px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        borderRadius: "50%"
                                                    }}
                                                >
                                                    ×
                                                </IconButton>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            <Paper sx={{
                                backgroundColor: "#f8fafc",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb"
                            }}>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "1rem"
                                }}>
                                    Popular Skills in Tech
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem"
                                }}>
                                    {[
                                        "Machine Learning",
                                        "Data Analysis",
                                        "UI/UX Design",
                                        "DevOps",
                                        "Cybersecurity",
                                        "Blockchain",
                                        "Mobile Development",
                                        "Cloud Computing",
                                        "Artificial Intelligence",
                                        "Project Management",
                                    ].map((skill) => (
                                        <Button
                                            key={skill}
                                            onClick={() => {
                                                if (!skillsData.includes(skill)) {
                                                    setSkillsData([...skillsData, skill])
                                                }
                                            }}
                                            disabled={skillsData.includes(skill)}
                                            sx={{
                                                backgroundColor: skillsData.includes(skill) ? "#d1d5db" : "white",
                                                color: skillsData.includes(skill) ? "#6b7280" : "#374151",
                                                border: "1px solid #d1d5db",
                                                padding: "0.4rem 0.8rem",
                                                borderRadius: "16px",
                                                fontSize: "0.85rem",
                                                fontWeight: "500",
                                                cursor: skillsData.includes(skill) ? "not-allowed" : "pointer"
                                            }}
                                        >
                                            {skill}
                                        </Button>
                                    ))}
                                </Box>
                            </Paper>
                        </Paper>
                    )}

                    {/* Step 5: Video Introduction */}
                    {activeStep === 5 && (
                        <Paper sx={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Video Introduction
                                </Typography>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Upload a 1-3 minute video introducing yourself
                                </Typography>
                            </Box>

                            <Box onClick={() => videoInputRef.current.click()} sx={{
                                border: "3px dashed #d1d5db",
                                borderRadius: "12px",
                                padding: "2rem",
                                textAlign: "center",
                                backgroundColor: "#f9fafb",
                                cursor: "pointer",
                                marginBottom: "1.5rem"
                            }}>
                                {personalData.introductionVideo ? (
                                    <Box>
                                        <video
                                            controls
                                            src={URL.createObjectURL(personalData.introductionVideo)}
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "300px",
                                                margin: "0 auto",
                                                display: "block"
                                            }}
                                        />
                                        <Typography sx={{
                                            fontSize: "1rem",
                                            fontWeight: "500",
                                            color: "#1f2937",
                                            margin: "1rem 0"
                                        }}>
                                            {personalData.introductionVideo.name}
                                        </Typography>
                                        <Button onClick={(e) => {
                                            e.stopPropagation()
                                            setPersonalData({
                                                ...personalData,
                                                introductionVideo: null
                                            })
                                        }} sx={{
                                            backgroundColor: "#fee2e2",
                                            color: "#dc2626",
                                            border: "none",
                                            padding: "0.5rem 1rem",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "0.85rem"
                                        }}>
                                            Remove Video
                                        </Button>
                                    </Box>
                                ) : (
                                    <>
                                        <Avatar sx={{
                                            width: "48px",
                                            height: "48px",
                                            backgroundColor: "#e5e7eb",
                                            margin: "0 auto 1rem",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Video size={24} color="#6b7280" />
                                        </Avatar>
                                        <Typography sx={{
                                            fontSize: "1rem",
                                            fontWeight: "500",
                                            color: "#1f2937",
                                            marginBottom: "0.5rem"
                                        }}>
                                            Click to upload your introduction video
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: "0.85rem",
                                            color: "#6b7280",
                                            margin: 0
                                        }}>
                                            Supported formats: MP4, MOV (1-3 minutes, max 50MB)
                                        </Typography>
                                    </>
                                )}
                                <input
                                    type="file"
                                    ref={videoInputRef}
                                    onChange={handleVideoUpload}
                                    accept="video/*"
                                    style={{ display: "none" }}
                                />
                            </Box>

                            <Paper sx={{
                                backgroundColor: "#f8fafc",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb"
                            }}>
                                <Typography sx={{
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "1rem"
                                }}>
                                    Tips for a great introduction:
                                </Typography>
                                <ul style={{
                                    listStyleType: "disc",
                                    paddingLeft: "1.5rem",
                                    color: "#6b7280",
                                    lineHeight: "1.6"
                                }}>
                                    <li>Introduce yourself and your background</li>
                                    <li>Highlight your key skills and experiences</li>
                                    <li>Share your career goals and aspirations</li>
                                    <li>Keep it professional but personable</li>
                                    <li>Ensure good lighting and clear audio</li>
                                    <li>Maintain eye contact with the camera</li>
                                    <li>Practice beforehand to stay within 1-3 minutes</li>
                                </ul>
                            </Paper>
                        </Paper>
                    )}

                    {/* Step 6: Projects */}
                    {activeStep === 6 && (
                        <Paper sx={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Projects & Portfolio
                                </Typography>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Showcase your best work and projects to stand out
                                </Typography>
                            </Box>
                            {projectsData.map((project, index) => (
                                <Paper sx={{
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #e5e7eb"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <Typography sx={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0
                                        }}>
                                            Project {index + 1}
                                        </Typography>
                                        {index > 0 && (
                                            <Button onClick={() => {
                                                const newProjects = projectsData.filter((_, i) => i !== index)
                                                setProjectsData(newProjects)
                                            }} sx={{
                                                backgroundColor: "#fee2e2",
                                                color: "#dc2626",
                                                border: "none",
                                                padding: "0.5rem",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "0.8rem",
                                                fontWeight: "500"
                                            }}>
                                                Remove
                                            </Button>
                                        )}
                                    </Box>
                                    <Box sx={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr",
                                        gap: "1.5rem"
                                    }}>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Project Name *
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={project.projectName}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].projectName = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="Enter project name"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{
                                            display: "grid",
                                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                            gap: "1.5rem"
                                        }}>
                                            <Box>
                                                <InputLabel sx={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem"
                                                }}>
                                                    Start Date
                                                </InputLabel>
                                                <TextField
                                                    type="month"
                                                    value={project.startDate}
                                                    onChange={(e) => {
                                                        const newProjects = [...projectsData]
                                                        newProjects[index].startDate = e.target.value
                                                        setProjectsData(newProjects)
                                                    }}
                                                    sx={{
                                                        width: "100%",
                                                        padding: "0.75rem",
                                                        border: "2px solid #e5e7eb",
                                                        borderRadius: "8px",
                                                        fontSize: "0.95rem",
                                                        outline: "none",
                                                        backgroundColor: "white"
                                                    }}
                                                />
                                            </Box>
                                            <Box>
                                                <InputLabel sx={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem"
                                                }}>
                                                    End Date
                                                </InputLabel>
                                                <TextField
                                                    type="month"
                                                    value={project.endDate}
                                                    onChange={(e) => {
                                                        const newProjects = [...projectsData]
                                                        newProjects[index].endDate = e.target.value
                                                        setProjectsData(newProjects)
                                                    }}
                                                    sx={{
                                                        width: "100%",
                                                        padding: "0.75rem",
                                                        border: "2px solid #e5e7eb",
                                                        borderRadius: "8px",
                                                        fontSize: "0.95rem",
                                                        outline: "none",
                                                        backgroundColor: "white"
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Project Description *
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={project.description}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].description = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="Describe your project, its purpose, and your role..."
                                                multiline
                                                rows={4}
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white",
                                                    fontFamily: "inherit",
                                                    resize: "vertical"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Technologies Used
                                            </InputLabel>
                                            <TextField
                                                type="text"
                                                value={project.keySkills}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].keySkills = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="e.g., React, Node.js, MongoDB, AWS"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <InputLabel sx={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Project URL (Optional)
                                            </InputLabel>
                                            <TextField
                                                type="url"
                                                value={project.projectUrl}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].projectUrl = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="https://github.com/username/project or live demo URL"
                                                sx={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Paper>
                            ))}
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            }}>
                                <Button onClick={addProject} sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    backgroundColor: "transparent",
                                    color: "#6366f1",
                                    border: "2px dashed #6366f1",
                                    padding: "0.75rem 1.5rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}>
                                    <Plus size={16} />
                                    Add Another Project
                                </Button>
                            </Box>
                        </Paper>
                    )}

                    {/* Navigation Buttons */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "2rem",
                        gap: "1rem",
                        flexDirection: isMobile ? "column" : "row"
                    }}>
                        <Button
                            onClick={handlePrevious}
                            disabled={activeStep === 1}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                backgroundColor: activeStep === 1 ? "#f3f4f6" : "white",
                                color: activeStep === 1 ? "#9ca3af" : "#6b7280",
                                border: "2px solid #e5e7eb",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "8px",
                                fontSize: "0.95rem",
                                fontWeight: "600",
                                cursor: activeStep === 1 ? "not-allowed" : "pointer",
                                order: isMobile ? 2 : 1,
                                width: isMobile ? "100%" : "auto"
                            }}
                        >
                            <ArrowLeft size={16} />
                            Previous
                        </Button>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            order: isMobile ? 1 : 2
                        }}>
                            {steps.map((step) => (
                                <Box key={step.id} sx={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    backgroundColor: activeStep >= step.id ? "#6366f1" : "#e5e7eb"
                                }} />
                            ))}
                        </Box>

                        {activeStep < steps.length ? (
                            <Button
                                onClick={handleNext}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    backgroundColor: "#6366f1",
                                    color: "white",
                                    border: "none",
                                    padding: "0.75rem 1.5rem",
                                    borderRadius: "8px",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    boxShadow: "0 2px 4px rgba(99, 102, 241, 0.2)",
                                    order: isMobile ? 3 : 3,
                                    width: isMobile ? "100%" : "auto"
                                }}
                            >
                                Next
                                <ArrowRight size={16} />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    backgroundColor: isSubmitting ? "#9ca3af" : "#10b981",
                                    color: "white",
                                    border: "none",
                                    padding: "0.75rem 2rem",
                                    borderRadius: "8px",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                    boxShadow: "0 2px 4px rgba(16, 185, 129, 0.2)",
                                    order: isMobile ? 3 : 3,
                                    width: isMobile ? "100%" : "auto"
                                }}
                            >
                                <Check size={16} />
                                {isSubmitting ? "Saving..." : "Complete Profile"}
                            </Button>
                        )}
                    </Box>
                    {uploadProgress > 0 && uploadProgress < 100 && (<Typography>Uploading: {uploadProgress}%</Typography>)}
                    {transcribing && <Typography>Transcribing... Please wait.</Typography>}
                </Box>
            </Box>
        </Box>
    )
}
