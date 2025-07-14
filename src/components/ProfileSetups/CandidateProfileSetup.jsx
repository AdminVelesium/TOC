"use client"
import { useState, useEffect, useRef } from "react"
import {
    Menu, X, Plus, User, GraduationCap, Briefcase,
    Award, Code, Camera, FileText, Check,
    ArrowLeft, ArrowRight, Video, Mic, Upload
} from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function CandidateProfileSetup() {
    const [activeStep, setActiveStep] = useState(1)
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate();


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
    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const validTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (!validTypes.includes(file.type)) {
            alert('Please upload a PDF, DOC, or DOCX file');
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

            const formData = new FormData();
            formData.append("data", JSON.stringify(candidateData));

            // Append files if present
            if (personalData.profilePhoto) {
                formData.append("profilePhoto", personalData.profilePhoto);
            }
            if (personalData.resume) {
                formData.append("resume", personalData.resume);
            }
            if (personalData.introductionVideo) {
                formData.append("introductionVideo", personalData.introductionVideo);
            }

            const response = await fetch("http://localhost:5000/api/candidate-profile", {
                method: "POST",
                body: formData,
                // Do NOT set Content-Type header; browser will set it for FormData
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Failed to save profile");

            alert("Profile setup completed successfully!");
            navigate("/candidate/profile");
        } catch (error) {
            console.error("Error submitting candidate profile:", error);
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
        <div style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: "#f8fafc",
            minHeight: "100vh"
        }}>
            {/* Header */}
            <header style={{
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "70px"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{
                            fontSize: isMobile ? "1.25rem" : "1.5rem",
                            fontWeight: "700",
                            color: "#1f2937"
                        }}>
                            Talent on <span style={{ color: "#6366f1" }}>Cloud</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                            <span style={{
                                fontSize: "1rem",
                                fontWeight: "600",
                                color: "#6366f1"
                            }}>
                                Profile Setup
                            </span>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
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
                        </button>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <div style={{
                display: "flex",
                minHeight: "calc(100vh - 70px)",
                flexDirection: isMobile ? "column" : "row"
            }}>
                {/* Sidebar */}
                {!isMobile && (
                    <aside style={{
                        width: "320px",
                        backgroundColor: "white",
                        borderRight: "1px solid #e5e7eb",
                        padding: "2rem 0",
                        position: "sticky",
                        top: "70px",
                        height: "calc(100vh - 70px)",
                        overflowY: "auto"
                    }}>
                        <div style={{ padding: "0 2rem", marginBottom: "2rem" }}>
                            <h2 style={{
                                fontSize: "1.25rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "0.5rem"
                            }}>
                                Profile Setup
                            </h2>
                            <p style={{
                                fontSize: "0.9rem",
                                color: "#6b7280",
                                marginBottom: "1.5rem"
                            }}>
                                Complete your profile to get better job recommendations
                            </p>
                            <div style={{ marginBottom: "1rem" }}>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "0.5rem"
                                }}>
                                    <span style={{
                                        fontSize: "0.85rem",
                                        color: "#6b7280",
                                        fontWeight: "500"
                                    }}>
                                        Progress
                                    </span>
                                    <span style={{
                                        fontSize: "0.85rem",
                                        color: "#6366f1",
                                        fontWeight: "600"
                                    }}>
                                        {activeStep}/{steps.length}
                                    </span>
                                </div>
                                <div style={{
                                    width: "100%",
                                    height: "8px",
                                    backgroundColor: "#f3f4f6",
                                    borderRadius: "4px",
                                    overflow: "hidden"
                                }}>
                                    <div style={{
                                        width: `${(activeStep / steps.length) * 100}%`,
                                        height: "100%",
                                        backgroundColor: "#6366f1",
                                        borderRadius: "4px"
                                    }} />
                                </div>
                            </div>
                        </div>

                        <nav>
                            {steps.map((step) => (
                                <div key={step.id} onClick={() => handleStepClick(step.id)} style={{
                                    padding: "1rem 2rem",
                                    backgroundColor: activeStep === step.id ? "#eff6ff" : "transparent",
                                    borderRight: activeStep === step.id ? "4px solid #6366f1" : "4px solid transparent",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}>
                                    <div style={{
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
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            fontSize: "0.95rem",
                                            fontWeight: activeStep === step.id ? "600" : "500",
                                            color: activeStep === step.id ? "#6366f1" : "#1f2937"
                                        }}>
                                            {step.title}
                                        </div>
                                    </div>
                                    <div style={{
                                        fontSize: "0.8rem",
                                        color: activeStep === step.id ? "#6366f1" : "#9ca3af",
                                        fontWeight: "600"
                                    }}>
                                        {step.id}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </aside>
                )}

                {/* Main Content Area */}
                <main style={{
                    flex: 1,
                    padding: isMobile ? "1rem" : "2rem",
                    backgroundColor: "#f8fafc",
                    minHeight: isMobile ? "auto" : "calc(100vh - 70px)"
                }}>
                    {/* Step 1: Personal Details */}
                    {activeStep === 1 && (
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h1 style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Personal Information
                                </h1>
                                <p style={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Tell us about yourself to create your professional profile
                                </p>
                            </div>

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
                                gap: isMobile ? "2rem" : "3rem",
                                alignItems: "start"
                            }}>
                                {/* Photo Upload */}
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}>
                                    <div onClick={() => photoInputRef.current.click()} style={{
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
                                            <img
                                                src={URL.createObjectURL(personalData.profilePhoto)}
                                                alt="Profile"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <div style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    backgroundColor: "#e5e7eb",
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginBottom: "0.5rem"
                                                }}>
                                                    <User size={24} color="#6b7280" />
                                                </div>
                                                <div style={{
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
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        ref={photoInputRef}
                                        onChange={handlePhotoUpload}
                                        accept="image/*"
                                        style={{ display: "none" }}
                                    />
                                    <span style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        fontWeight: "500"
                                    }}>
                                        {personalData.profilePhoto ? "Change Photo" : "Upload Photo"}
                                    </span>
                                </div>

                                {/* Form Fields */}
                                <div style={{
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
                                            options: ["", "Indian", "American", "British", "Canadian", "Australian"]
                                        },
                                        {
                                            label: "Gender",
                                            key: "gender",
                                            type: "select",
                                            options: ["", "Male", "Female", "Other", "Prefer not to say"]
                                        }
                                    ].map((field) => (
                                        <div key={field.key}>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                {field.label}
                                            </label>
                                            {field.type === "select" ? (
                                                <select
                                                    value={personalData[field.key]}
                                                    onChange={(e) => setPersonalData({
                                                        ...personalData,
                                                        [field.key]: e.target.value
                                                    })}
                                                    style={{
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
                                                        <option key={option} value={option}>
                                                            {option || "Select"}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    value={personalData[field.key]}
                                                    onChange={(e) => setPersonalData({
                                                        ...personalData,
                                                        [field.key]: e.target.value
                                                    })}
                                                    placeholder={`Enter your ${field.key.toLowerCase()}`}
                                                    style={{
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
                                        </div>
                                    ))}

                                    {/* Resume Upload */}
                                    <div style={{ gridColumn: isMobile ? "1" : "1 / -1" }}>
                                        <label style={{
                                            display: "block",
                                            fontSize: "0.9rem",
                                            fontWeight: "600",
                                            color: "#374151",
                                            marginBottom: "0.5rem"
                                        }}>
                                            Upload Resume *
                                        </label>
                                        <div onClick={() => resumeInputRef.current.click()} style={{
                                            border: "3px dashed #d1d5db",
                                            borderRadius: "12px",
                                            padding: "2rem",
                                            textAlign: "center",
                                            backgroundColor: "#f9fafb",
                                            cursor: "pointer"
                                        }}>
                                            {personalData.resume ? (
                                                <div>
                                                    <FileText size={48} color="#6366f1" />
                                                    <p style={{
                                                        fontSize: "1rem",
                                                        fontWeight: "500",
                                                        color: "#1f2937",
                                                        margin: "0.5rem 0"
                                                    }}>
                                                        {personalData.resume.name}
                                                    </p>
                                                    <button onClick={(e) => {
                                                        e.stopPropagation()
                                                        setPersonalData({
                                                            ...personalData,
                                                            resume: null
                                                        })
                                                    }} style={{
                                                        backgroundColor: "#fee2e2",
                                                        color: "#dc2626",
                                                        border: "none",
                                                        padding: "0.5rem 1rem",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        fontSize: "0.85rem"
                                                    }}>
                                                        Remove
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    <div style={{
                                                        width: "48px",
                                                        height: "48px",
                                                        backgroundColor: "#e5e7eb",
                                                        borderRadius: "8px",
                                                        margin: "0 auto 1rem",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}>
                                                        <FileText size={24} color="#6b7280" />
                                                    </div>
                                                    <p style={{
                                                        fontSize: "1rem",
                                                        fontWeight: "500",
                                                        color: "#1f2937",
                                                        marginBottom: "0.5rem"
                                                    }}>
                                                        Drop your resume here or click to browse
                                                    </p>
                                                    <p style={{
                                                        fontSize: "0.85rem",
                                                        color: "#6b7280",
                                                        margin: 0
                                                    }}>
                                                        Supported formats: PDF, DOC, DOCX (Max 5MB)
                                                    </p>
                                                </>
                                            )}
                                            <input
                                                type="file"
                                                ref={resumeInputRef}
                                                onChange={handleResumeUpload}
                                                accept=".pdf,.doc,.docx"
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Education */}
                    {activeStep === 2 && (
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h1 style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Educational Background
                                </h1>
                                <p style={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Add your educational qualifications and achievements
                                </p>
                            </div>
                            {educationData.map((education, index) => (
                                <div key={index} style={{
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #e5e7eb"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <h3 style={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0
                                        }}>
                                            Education {index + 1}
                                        </h3>
                                        {index > 0 && (
                                            <button onClick={() => {
                                                const newEducation = educationData.filter((_, i) => i !== index)
                                                setEducationData(newEducation)
                                            }} style={{
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
                                            </button>
                                        )}
                                    </div>
                                    <div style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                        gap: "1.5rem"
                                    }}>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Degree/Qualification *
                                            </label>
                                            <select
                                                value={education.degree}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].degree = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            >
                                                <option value="">Select Degree</option>
                                                <option value="Bachelor's">Bachelor's Degree</option>
                                                <option value="Master's">Master's Degree</option>
                                                <option value="PhD">PhD</option>
                                                <option value="Diploma">Diploma</option>
                                                <option value="Certificate">Certificate</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Specialization *
                                            </label>
                                            <input
                                                type="text"
                                                value={education.specialization}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].specialization = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="e.g., Computer Science"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                University/Institution *
                                            </label>
                                            <input
                                                type="text"
                                                value={education.university}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].university = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="Enter university name"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Grades/CGPA
                                            </label>
                                            <input
                                                type="text"
                                                value={education.grades}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].grades = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="e.g., 8.5/10 or 85%"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Start Year *
                                            </label>
                                            <input
                                                type="number"
                                                value={education.startYear}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].startYear = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="2020"
                                                min="1950"
                                                max="2030"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                End Year *
                                            </label>
                                            <input
                                                type="number"
                                                value={education.endYear}
                                                onChange={(e) => {
                                                    const newEducation = [...educationData]
                                                    newEducation[index].endYear = e.target.value
                                                    setEducationData(newEducation)
                                                }}
                                                placeholder="2024"
                                                min="1950"
                                                max="2030"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            }}>
                                <button onClick={addEducation} style={{
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
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Work Experience */}
                    {activeStep === 3 && (
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h1 style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Work Experience
                                </h1>
                                <p style={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Share your professional experience and achievements
                                </p>
                            </div>
                            {experienceData.map((experience, index) => (
                                <div key={index} style={{
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #e5e7eb"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <h3 style={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0
                                        }}>
                                            Experience {index + 1}
                                        </h3>
                                        {index > 0 && (
                                            <button onClick={() => {
                                                const newExperience = experienceData.filter((_, i) => i !== index)
                                                setExperienceData(newExperience)
                                            }} style={{
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
                                            </button>
                                        )}
                                    </div>
                                    <div style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                        gap: "1.5rem"
                                    }}>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Job Title *
                                            </label>
                                            <input
                                                type="text"
                                                value={experience.jobTitle}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].jobTitle = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="e.g., Software Engineer"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Company *
                                            </label>
                                            <input
                                                type="text"
                                                value={experience.employer}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].employer = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="Enter company name"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Employment Type *
                                            </label>
                                            <select
                                                value={experience.employmentType}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].employmentType = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            >
                                                <option value="">Select Employment Type</option>
                                                <option value="Full-time">Full-time</option>
                                                <option value="Part-time">Part-time</option>
                                                <option value="Contract">Contract</option>
                                                <option value="Freelance">Freelance</option>
                                                <option value="Internship">Internship</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Location *
                                            </label>
                                            <input
                                                type="text"
                                                value={experience.location}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].location = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="e.g., Bangalore, India"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Start Date *
                                            </label>
                                            <input
                                                type="month"
                                                value={experience.startDate}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].startDate = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                End Date
                                            </label>
                                            <input
                                                type="month"
                                                value={experience.endDate}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].endDate = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                disabled={experience.currentJob}
                                                style={{
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
                                            <div style={{
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
                                            </div>
                                        </div>
                                        <div style={{
                                            gridColumn: isMobile ? "1" : "1 / -1"
                                        }}>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Job Description
                                            </label>
                                            <textarea
                                                value={experience.experienceSummary}
                                                onChange={(e) => {
                                                    const newExperience = [...experienceData]
                                                    newExperience[index].experienceSummary = e.target.value
                                                    setExperienceData(newExperience)
                                                }}
                                                placeholder="Describe your role, responsibilities, and achievements..."
                                                rows={4}
                                                style={{
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
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            }}>
                                <button onClick={addExperience} style={{
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
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Skills */}
                    {activeStep === 4 && (
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h1 style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Skills & Expertise
                                </h1>
                                <p style={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Add your key skills and technical expertise
                                </p>
                            </div>
                            <div style={{ marginBottom: "2rem" }}>
                                <label style={{
                                    display: "block",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#374151",
                                    marginBottom: "0.5rem"
                                }}>
                                    Add Skills
                                </label>
                                <div style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    alignItems: "center",
                                    flexDirection: isMobile ? "column" : "row"
                                }}>
                                    <select
                                        value={selectedSkill}
                                        onChange={(e) => setSelectedSkill(e.target.value)}
                                        style={{
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
                                        <option value="">Select or type a skill</option>
                                        <option value="JavaScript">JavaScript</option>
                                        <option value="Python">Python</option>
                                        <option value="React">React</option>
                                        <option value="Node.js">Node.js</option>
                                        <option value="Java">Java</option>
                                        <option value="Spring Boot">Spring Boot</option>
                                        <option value="SQL">SQL</option>
                                        <option value="MongoDB">MongoDB</option>
                                        <option value="AWS">AWS</option>
                                        <option value="Docker">Docker</option>
                                        <option value="Kubernetes">Kubernetes</option>
                                        <option value="Git">Git</option>
                                        <option value="HTML/CSS">HTML/CSS</option>
                                        <option value="TypeScript">TypeScript</option>
                                        <option value="Angular">Angular</option>
                                        <option value="Vue.js">Vue.js</option>
                                        <option value="PHP">PHP</option>
                                        <option value="C++">C++</option>
                                        <option value="C#">C#</option>
                                        <option value="Go">Go</option>
                                    </select>
                                    <button
                                        onClick={addSkill}
                                        disabled={!selectedSkill}
                                        style={{
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
                                    </button>
                                </div>
                            </div>
                            {skillsData.length > 0 && (
                                <div style={{ marginBottom: "2rem" }}>
                                    <h3 style={{
                                        fontSize: "1.1rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "1rem"
                                    }}>
                                        Your Skills ({skillsData.length})
                                    </h3>
                                    <div style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.75rem"
                                    }}>
                                        {skillsData.map((skill, index) => (
                                            <div key={index} style={{
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
                                                <span>{skill}</span>
                                                <button
                                                    onClick={() => removeSkill(skill)}
                                                    style={{
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
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div style={{
                                backgroundColor: "#f8fafc",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb"
                            }}>
                                <h4 style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "1rem"
                                }}>
                                    Popular Skills in Tech
                                </h4>
                                <div style={{
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
                                        <button
                                            key={skill}
                                            onClick={() => {
                                                if (!skillsData.includes(skill)) {
                                                    setSkillsData([...skillsData, skill])
                                                }
                                            }}
                                            disabled={skillsData.includes(skill)}
                                            style={{
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
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Video Introduction */}
                    {activeStep === 5 && (
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h1 style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Video Introduction
                                </h1>
                                <p style={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Upload a 1-3 minute video introducing yourself
                                </p>
                            </div>

                            <div onClick={() => videoInputRef.current.click()} style={{
                                border: "3px dashed #d1d5db",
                                borderRadius: "12px",
                                padding: "2rem",
                                textAlign: "center",
                                backgroundColor: "#f9fafb",
                                cursor: "pointer",
                                marginBottom: "1.5rem"
                            }}>
                                {personalData.introductionVideo ? (
                                    <div>
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
                                        <p style={{
                                            fontSize: "1rem",
                                            fontWeight: "500",
                                            color: "#1f2937",
                                            margin: "1rem 0"
                                        }}>
                                            {personalData.introductionVideo.name}
                                        </p>
                                        <button onClick={(e) => {
                                            e.stopPropagation()
                                            setPersonalData({
                                                ...personalData,
                                                introductionVideo: null
                                            })
                                        }} style={{
                                            backgroundColor: "#fee2e2",
                                            color: "#dc2626",
                                            border: "none",
                                            padding: "0.5rem 1rem",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "0.85rem"
                                        }}>
                                            Remove Video
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div style={{
                                            width: "48px",
                                            height: "48px",
                                            backgroundColor: "#e5e7eb",
                                            borderRadius: "8px",
                                            margin: "0 auto 1rem",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Video size={24} color="#6b7280" />
                                        </div>
                                        <p style={{
                                            fontSize: "1rem",
                                            fontWeight: "500",
                                            color: "#1f2937",
                                            marginBottom: "0.5rem"
                                        }}>
                                            Click to upload your introduction video
                                        </p>
                                        <p style={{
                                            fontSize: "0.85rem",
                                            color: "#6b7280",
                                            margin: 0
                                        }}>
                                            Supported formats: MP4, MOV (1-3 minutes, max 50MB)
                                        </p>
                                    </>
                                )}
                                <input
                                    type="file"
                                    ref={videoInputRef}
                                    onChange={handleVideoUpload}
                                    accept="video/*"
                                    style={{ display: "none" }}
                                />
                            </div>

                            <div style={{
                                backgroundColor: "#f8fafc",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb"
                            }}>
                                <h4 style={{
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "1rem"
                                }}>
                                    Tips for a great introduction:
                                </h4>
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
                            </div>
                        </div>
                    )}

                    {/* Step 6: Projects */}
                    {activeStep === 6 && (
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb"
                        }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h1 style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem"
                                }}>
                                    Projects & Portfolio
                                </h1>
                                <p style={{
                                    fontSize: "1rem",
                                    color: "#6b7280",
                                    margin: 0
                                }}>
                                    Showcase your best work and projects to stand out
                                </p>
                            </div>
                            {projectsData.map((project, index) => (
                                <div key={index} style={{
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    marginBottom: "1.5rem",
                                    border: "1px solid #e5e7eb"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <h3 style={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0
                                        }}>
                                            Project {index + 1}
                                        </h3>
                                        {index > 0 && (
                                            <button onClick={() => {
                                                const newProjects = projectsData.filter((_, i) => i !== index)
                                                setProjectsData(newProjects)
                                            }} style={{
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
                                            </button>
                                        )}
                                    </div>
                                    <div style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr",
                                        gap: "1.5rem"
                                    }}>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Project Name *
                                            </label>
                                            <input
                                                type="text"
                                                value={project.projectName}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].projectName = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="Enter project name"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div style={{
                                            display: "grid",
                                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                            gap: "1.5rem"
                                        }}>
                                            <div>
                                                <label style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem"
                                                }}>
                                                    Start Date
                                                </label>
                                                <input
                                                    type="month"
                                                    value={project.startDate}
                                                    onChange={(e) => {
                                                        const newProjects = [...projectsData]
                                                        newProjects[index].startDate = e.target.value
                                                        setProjectsData(newProjects)
                                                    }}
                                                    style={{
                                                        width: "100%",
                                                        padding: "0.75rem",
                                                        border: "2px solid #e5e7eb",
                                                        borderRadius: "8px",
                                                        fontSize: "0.95rem",
                                                        outline: "none",
                                                        backgroundColor: "white"
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem"
                                                }}>
                                                    End Date
                                                </label>
                                                <input
                                                    type="month"
                                                    value={project.endDate}
                                                    onChange={(e) => {
                                                        const newProjects = [...projectsData]
                                                        newProjects[index].endDate = e.target.value
                                                        setProjectsData(newProjects)
                                                    }}
                                                    style={{
                                                        width: "100%",
                                                        padding: "0.75rem",
                                                        border: "2px solid #e5e7eb",
                                                        borderRadius: "8px",
                                                        fontSize: "0.95rem",
                                                        outline: "none",
                                                        backgroundColor: "white"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Project Description *
                                            </label>
                                            <textarea
                                                value={project.description}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].description = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="Describe your project, its purpose, and your role..."
                                                rows={4}
                                                style={{
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
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Technologies Used
                                            </label>
                                            <input
                                                type="text"
                                                value={project.keySkills}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].keySkills = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="e.g., React, Node.js, MongoDB, AWS"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem"
                                            }}>
                                                Project URL (Optional)
                                            </label>
                                            <input
                                                type="url"
                                                value={project.projectUrl}
                                                onChange={(e) => {
                                                    const newProjects = [...projectsData]
                                                    newProjects[index].projectUrl = e.target.value
                                                    setProjectsData(newProjects)
                                                }}
                                                placeholder="https://github.com/username/project or live demo URL"
                                                style={{
                                                    width: "100%",
                                                    padding: "0.75rem",
                                                    border: "2px solid #e5e7eb",
                                                    borderRadius: "8px",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                    backgroundColor: "white"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            }}>
                                <button onClick={addProject} style={{
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
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "2rem",
                        gap: "1rem",
                        flexDirection: isMobile ? "column" : "row"
                    }}>
                        <button
                            onClick={handlePrevious}
                            disabled={activeStep === 1}
                            style={{
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
                        </button>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            order: isMobile ? 1 : 2
                        }}>
                            {steps.map((step) => (
                                <div key={step.id} style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    backgroundColor: activeStep >= step.id ? "#6366f1" : "#e5e7eb"
                                }} />
                            ))}
                        </div>

                        {activeStep < steps.length ? (
                            <button
                                onClick={handleNext}
                                style={{
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
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                style={{
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
                            </button>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}