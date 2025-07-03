"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    Plus,
    User,
    GraduationCap,
    Briefcase,
    Award,
    Code,
    Camera,
    FileText,
    Check,
    ArrowLeft,
    ArrowRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function CandidateProfileSetup() {
    const [activeStep, setActiveStep] = useState(1)
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate = useNavigate();

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Form data states
    const [personalData, setPersonalData] = useState({
        firstName: "",
        lastName: "",
        email: "example@gmail.com",
        mobile: "",
        location: "Bangalore",
        company: "",
        nationality: "",
        gender: "",
        profilePhoto: null,
        resume: null,
    })

    const [educationData, setEducationData] = useState([
        {
            degree: "",
            specialization: "",
            university: "",
            startYear: "",
            endYear: "",
            grades: "",
            institution: "",
        },
    ])

    const [experienceData, setExperienceData] = useState([
        {
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            designation: "",
            employmentType: "",
            location: "",
            experienceSummary: "",
            currentJob: false,
        },
    ])

    const [skillsData, setSkillsData] = useState([])
    const [selectedSkill, setSelectedSkill] = useState("")

    const [projectsData, setProjectsData] = useState([
        {
            projectName: "",
            startDate: "",
            endDate: "",
            description: "",
            keySkills: "",
            projectUrl: "",
        },
    ])

    const steps = [
        {
            id: 1,
            title: "Personal Details",
            icon: <User size={16} />,
            description: "Basic information about you",
        },
        {
            id: 2,
            title: "Education",
            icon: <GraduationCap size={16} />,
            description: "Your educational background",
        },
        {
            id: 3,
            title: "Work Experience",
            icon: <Briefcase size={16} />,
            description: "Your professional experience",
        },
        {
            id: 4,
            title: "Skills",
            icon: <Award size={16} />,
            description: "Your key skills and expertise",
        },
        {
            id: 5,
            title: "Projects",
            icon: <Code size={16} />,
            description: "Showcase your best work",
        },
    ]

    const handleNext = () => {
        if (activeStep < 5) {
            setActiveStep(activeStep + 1)
        }
    }

    const handlePrevious = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1)
        }
    }

    const handleStepClick = (stepId) => {
        setActiveStep(stepId)
    }

    const addEducation = () => {
        setEducationData([
            ...educationData,
            {
                degree: "",
                specialization: "",
                university: "",
                startYear: "",
                endYear: "",
                grades: "",
                institution: "",
            },
        ])
    }

    const addExperience = () => {
        setExperienceData([
            ...experienceData,
            {
                jobTitle: "",
                employer: "",
                startDate: "",
                endDate: "",
                designation: "",
                employmentType: "",
                location: "",
                experienceSummary: "",
                currentJob: false,
            },
        ])
    }

    const addProject = () => {
        setProjectsData([
            ...projectsData,
            {
                projectName: "",
                startDate: "",
                endDate: "",
                description: "",
                keySkills: "",
                projectUrl: "",
            },
        ])
    }

    const addSkill = () => {
        if (selectedSkill && !skillsData.includes(selectedSkill)) {
            setSkillsData([...skillsData, selectedSkill])
            setSelectedSkill("")
        }
    }

    const removeSkill = (skillToRemove) => {
        setSkillsData(skillsData.filter((skill) => skill !== skillToRemove))
    }

    const handleComplete = () => {
        // Handle form completion
        alert("Profile setup completed successfully!");
        navigate('/candidate/profile');
    };


    return (
        <div
            style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                lineHeight: "1.6",
                color: "#1f2937",
                margin: 0,
                padding: 0,
                backgroundColor: "#f8fafc",
                minHeight: "100vh",
            }}
        >
            {/* Header */}
            <header
                style={{
                    backgroundColor: "#ffffff",
                    borderBottom: "1px solid #e5e7eb",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "70px",
                    }}
                >
                    {/* Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                fontSize: isMobile ? "1.25rem" : "1.5rem",
                                fontWeight: "700",
                                color: "#1f2937",
                            }}
                        >
                            Talent on <span style={{ color: "#6366f1" }}>Cloud</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2rem",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#6366f1",
                                }}
                            >
                                Profile Setup
                            </span>
                        </nav>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "44px",
                                height: "44px",
                                border: "none",
                                backgroundColor: "transparent",
                                cursor: "pointer",
                                borderRadius: "8px",
                                transition: "background-color 0.2s ease",
                                color: "#4b5563",
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}
                {isMobile && isMenuOpen && (
                    <div
                        style={{
                            backgroundColor: "white",
                            borderTop: "1px solid #e5e7eb",
                            padding: "1rem",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#6366f1",
                                    padding: "0.75rem 0",
                                }}
                            >
                                Profile Setup
                            </span>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <div
                style={{
                    display: "flex",
                    minHeight: "calc(100vh - 70px)",
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                {/* Sidebar */}
                {!isMobile && (
                    <aside
                        style={{
                            width: "320px",
                            backgroundColor: "white",
                            borderRight: "1px solid #e5e7eb",
                            padding: "2rem 0",
                            position: "sticky",
                            top: "70px",
                            height: "calc(100vh - 70px)",
                            overflowY: "auto",
                        }}
                    >
                        {/* Progress Overview */}
                        <div
                            style={{
                                padding: "0 2rem",
                                marginBottom: "2rem",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                Profile Setup
                            </h2>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Complete your profile to get better job recommendations
                            </p>

                            {/* Progress Bar */}
                            <div
                                style={{
                                    marginBottom: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.85rem",
                                            color: "#6b7280",
                                            fontWeight: "500",
                                        }}
                                    >
                                        Progress
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.85rem",
                                            color: "#6366f1",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {activeStep}/5
                                    </span>
                                </div>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "8px",
                                        backgroundColor: "#f3f4f6",
                                        borderRadius: "4px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: `${(activeStep / 5) * 100}%`,
                                            height: "100%",
                                            backgroundColor: "#6366f1",
                                            borderRadius: "4px",
                                            transition: "width 0.3s ease",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step Navigation */}
                        <nav>
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    onClick={() => handleStepClick(step.id)}
                                    style={{
                                        padding: "1rem 2rem",
                                        backgroundColor: activeStep === step.id ? "#eff6ff" : "transparent",
                                        borderRight: activeStep === step.id ? "4px solid #6366f1" : "4px solid transparent",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeStep !== step.id) {
                                            e.target.style.backgroundColor = "#f9fafb"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeStep !== step.id) {
                                            e.target.style.backgroundColor = "transparent"
                                        }
                                    }}
                                >
                                    {/* Step Icon */}
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor:
                                                activeStep === step.id ? "#6366f1" : activeStep > step.id ? "#10b981" : "#f3f4f6",
                                            borderRadius: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: activeStep >= step.id ? "white" : "#6b7280",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        {activeStep > step.id ? <Check size={16} /> : step.icon}
                                    </div>

                                    {/* Step Info */}
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div
                                            style={{
                                                fontSize: "0.95rem",
                                                fontWeight: activeStep === step.id ? "600" : "500",
                                                color: activeStep === step.id ? "#6366f1" : "#1f2937",
                                                marginBottom: "0.25rem",
                                            }}
                                        >
                                            {step.title}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "#6b7280",
                                                lineHeight: "1.3",
                                            }}
                                        >
                                            {step.description}
                                        </div>
                                    </div>

                                    {/* Step Number */}
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            color: activeStep === step.id ? "#6366f1" : "#9ca3af",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {step.id}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </aside>
                )}

                {/* Mobile Step Indicator */}
                {isMobile && (
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            borderBottom: "1px solid #e5e7eb",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "1rem",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    margin: 0,
                                }}
                            >
                                {steps[activeStep - 1]?.title}
                            </h2>
                            <span
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6366f1",
                                    fontWeight: "600",
                                }}
                            >
                                {activeStep}/5
                            </span>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                height: "6px",
                                backgroundColor: "#f3f4f6",
                                borderRadius: "3px",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width: `${(activeStep / 5) * 100}%`,
                                    height: "100%",
                                    backgroundColor: "#6366f1",
                                    borderRadius: "3px",
                                    transition: "width 0.3s ease",
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <main
                    style={{
                        flex: 1,
                        padding: isMobile ? "1rem" : "2rem",
                        backgroundColor: "#f8fafc",
                        minHeight: isMobile ? "auto" : "calc(100vh - 70px)",
                    }}
                >
                    {/* Step 1: Personal Details */}
                    {activeStep === 1 && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: isMobile ? "1.5rem" : "2rem",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: "2rem",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: isMobile ? "1.75rem" : "2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Personal Information
                                </h1>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    Tell us about yourself to create your professional profile
                                </p>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
                                    gap: isMobile ? "2rem" : "3rem",
                                    alignItems: "start",
                                }}
                            >
                                {/* Photo Upload Section */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
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
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = "#6366f1"
                                            e.target.style.backgroundColor = "#eff6ff"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = "#d1d5db"
                                            e.target.style.backgroundColor = "#f9fafb"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                backgroundColor: "#e5e7eb",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            <User size={24} color="#6b7280" />
                                        </div>
                                        <div
                                            style={{
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
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <Camera size={16} color="white" />
                                        </div>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: "0.9rem",
                                            color: "#6b7280",
                                            fontWeight: "500",
                                        }}
                                    >
                                        Upload Photo
                                    </span>
                                </div>

                                {/* Form Fields */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                        gap: "1.5rem",
                                    }}
                                >
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={personalData.firstName}
                                            onChange={(e) => setPersonalData({ ...personalData, firstName: e.target.value })}
                                            placeholder="Enter your first name"
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={personalData.lastName}
                                            onChange={(e) => setPersonalData({ ...personalData, lastName: e.target.value })}
                                            placeholder="Enter your last name"
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            value={personalData.email}
                                            onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
                                            placeholder="Enter your email"
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Mobile Number *
                                        </label>
                                        <input
                                            type="tel"
                                            value={personalData.mobile}
                                            onChange={(e) => setPersonalData({ ...personalData, mobile: e.target.value })}
                                            placeholder="Enter your mobile number"
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Location *
                                        </label>
                                        <select
                                            value={personalData.location}
                                            onChange={(e) => setPersonalData({ ...personalData, location: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        >
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                            <option value="Chennai">Chennai</option>
                                            <option value="Pune">Pune</option>
                                            <option value="Remote">Remote</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Current Company
                                        </label>
                                        <input
                                            type="text"
                                            value={personalData.company}
                                            onChange={(e) => setPersonalData({ ...personalData, company: e.target.value })}
                                            placeholder="Enter your current company"
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Nationality
                                        </label>
                                        <select
                                            value={personalData.nationality}
                                            onChange={(e) => setPersonalData({ ...personalData, nationality: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        >
                                            <option value="">Select Nationality</option>
                                            <option value="Indian">Indian</option>
                                            <option value="American">American</option>
                                            <option value="British">British</option>
                                            <option value="Canadian">Canadian</option>
                                            <option value="Australian">Australian</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Gender
                                        </label>
                                        <select
                                            value={personalData.gender}
                                            onChange={(e) => setPersonalData({ ...personalData, gender: e.target.value })}
                                            style={{
                                                width: "100%",
                                                padding: "0.75rem",
                                                border: "2px solid #e5e7eb",
                                                borderRadius: "8px",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "border-color 0.2s ease",
                                                backgroundColor: "white",
                                            }}
                                            onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                            <option value="Prefer not to say">Prefer not to say</option>
                                        </select>
                                    </div>

                                    {/* Resume Upload */}
                                    <div
                                        style={{
                                            gridColumn: isMobile ? "1" : "1 / -1",
                                        }}
                                    >
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                color: "#374151",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            Upload Resume *
                                        </label>
                                        <div
                                            style={{
                                                border: "3px dashed #d1d5db",
                                                borderRadius: "12px",
                                                padding: "2rem",
                                                textAlign: "center",
                                                backgroundColor: "#f9fafb",
                                                cursor: "pointer",
                                                transition: "all 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.borderColor = "#6366f1"
                                                e.target.style.backgroundColor = "#eff6ff"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.borderColor = "#d1d5db"
                                                e.target.style.backgroundColor = "#f9fafb"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "48px",
                                                    height: "48px",
                                                    backgroundColor: "#e5e7eb",
                                                    borderRadius: "8px",
                                                    margin: "0 auto 1rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <FileText size={24} color="#6b7280" />
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "500",
                                                    color: "#1f2937",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                Drop your resume here or click to browse
                                            </p>
                                            <p
                                                style={{
                                                    fontSize: "0.85rem",
                                                    color: "#6b7280",
                                                    margin: 0,
                                                }}
                                            >
                                                Supported formats: PDF, DOC, DOCX (Max 5MB)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Education */}
                    {activeStep === 2 && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: isMobile ? "1.5rem" : "2rem",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: "2rem",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: isMobile ? "1.75rem" : "2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Educational Background
                                </h1>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    Add your educational qualifications and achievements
                                </p>
                            </div>

                            {educationData.map((education, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: "#f8fafc",
                                        borderRadius: "12px",
                                        padding: "1.5rem",
                                        marginBottom: "1.5rem",
                                        border: "1px solid #e5e7eb",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: "600",
                                                color: "#1f2937",
                                                margin: 0,
                                            }}
                                        >
                                            Education {index + 1}
                                        </h3>
                                        {index > 0 && (
                                            <button
                                                onClick={() => {
                                                    const newEducation = educationData.filter((_, i) => i !== index)
                                                    setEducationData(newEducation)
                                                }}
                                                style={{
                                                    backgroundColor: "#fee2e2",
                                                    color: "#dc2626",
                                                    border: "none",
                                                    padding: "0.5rem",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    fontSize: "0.8rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                            gap: "1.5rem",
                                        }}
                                    >
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
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
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Add More Education Button */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <button
                                    onClick={addEducation}
                                    style={{
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
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#eff6ff"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "transparent"
                                    }}
                                >
                                    <Plus size={16} />
                                    Add Another Education
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Work Experience */}
                    {activeStep === 3 && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: isMobile ? "1.5rem" : "2rem",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: "2rem",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: isMobile ? "1.75rem" : "2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Work Experience
                                </h1>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    Share your professional experience and achievements
                                </p>
                            </div>

                            {experienceData.map((experience, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: "#f8fafc",
                                        borderRadius: "12px",
                                        padding: "1.5rem",
                                        marginBottom: "1.5rem",
                                        border: "1px solid #e5e7eb",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: "600",
                                                color: "#1f2937",
                                                margin: 0,
                                            }}
                                        >
                                            Experience {index + 1}
                                        </h3>
                                        {index > 0 && (
                                            <button
                                                onClick={() => {
                                                    const newExperience = experienceData.filter((_, i) => i !== index)
                                                    setExperienceData(newExperience)
                                                }}
                                                style={{
                                                    backgroundColor: "#fee2e2",
                                                    color: "#dc2626",
                                                    border: "none",
                                                    padding: "0.5rem",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    fontSize: "0.8rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                            gap: "1.5rem",
                                        }}
                                    >
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
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
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: experience.currentJob ? "#f3f4f6" : "white",
                                                    opacity: experience.currentJob ? 0.6 : 1,
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    marginTop: "0.5rem",
                                                }}
                                            >
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
                                                        accentColor: "#6366f1",
                                                    }}
                                                />
                                                <label
                                                    htmlFor={`current-job-${index}`}
                                                    style={{
                                                        fontSize: "0.85rem",
                                                        color: "#6b7280",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    I currently work here
                                                </label>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                gridColumn: isMobile ? "1" : "1 / -1",
                                            }}
                                        >
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                    fontFamily: "inherit",
                                                    resize: "vertical",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Add More Experience Button */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <button
                                    onClick={addExperience}
                                    style={{
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
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#eff6ff"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "transparent"
                                    }}
                                >
                                    <Plus size={16} />
                                    Add Another Experience
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Skills */}
                    {activeStep === 4 && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: isMobile ? "1.5rem" : "2rem",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: "2rem",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: isMobile ? "1.75rem" : "2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Skills & Expertise
                                </h1>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    Add your key skills and technical expertise
                                </p>
                            </div>

                            {/* Skills Input */}
                            <div
                                style={{
                                    marginBottom: "2rem",
                                }}
                            >
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#374151",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Add Skills
                                </label>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "0.75rem",
                                        alignItems: "center",
                                        flexDirection: isMobile ? "column" : "row",
                                    }}
                                >
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
                                            transition: "border-color 0.2s ease",
                                            backgroundColor: "white",
                                            width: isMobile ? "100%" : "auto",
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
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
                                            transition: "all 0.2s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            whiteSpace: "nowrap",
                                            width: isMobile ? "100%" : "auto",
                                            justifyContent: "center",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedSkill) {
                                                e.target.style.backgroundColor = "#5856eb"
                                                e.target.style.transform = "translateY(-1px)"
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedSkill) {
                                                e.target.style.backgroundColor = "#6366f1"
                                                e.target.style.transform = "translateY(0)"
                                            }
                                        }}
                                    >
                                        <Plus size={16} />
                                        Add Skill
                                    </button>
                                </div>
                            </div>

                            {/* Selected Skills */}
                            {skillsData.length > 0 && (
                                <div
                                    style={{
                                        marginBottom: "2rem",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        Your Skills ({skillsData.length})
                                    </h3>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "0.75rem",
                                        }}
                                    >
                                        {skillsData.map((skill, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    backgroundColor: "#eff6ff",
                                                    color: "#1e40af",
                                                    padding: "0.5rem 0.75rem",
                                                    borderRadius: "20px",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "500",
                                                    border: "1px solid #dbeafe",
                                                    transition: "all 0.2s ease",
                                                }}
                                            >
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
                                                        borderRadius: "50%",
                                                        transition: "all 0.2s ease",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = "#fee2e2"
                                                        e.target.style.color = "#dc2626"
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = "transparent"
                                                        e.target.style.color = "#6b7280"
                                                    }}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Skills Suggestions */}
                            <div
                                style={{
                                    backgroundColor: "#f8fafc",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                <h4
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Popular Skills in Tech
                                </h4>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                    }}
                                >
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
                                                cursor: skillsData.includes(skill) ? "not-allowed" : "pointer",
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!skillsData.includes(skill)) {
                                                    e.target.style.backgroundColor = "#6366f1"
                                                    e.target.style.color = "white"
                                                    e.target.style.borderColor = "#6366f1"
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!skillsData.includes(skill)) {
                                                    e.target.style.backgroundColor = "white"
                                                    e.target.style.color = "#374151"
                                                    e.target.style.borderColor = "#d1d5db"
                                                }
                                            }}
                                        >
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Projects */}
                    {activeStep === 5 && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: isMobile ? "1.5rem" : "2rem",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: "2rem",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: isMobile ? "1.75rem" : "2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Projects & Portfolio
                                </h1>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    Showcase your best work and projects to stand out
                                </p>
                            </div>

                            {projectsData.map((project, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: "#f8fafc",
                                        borderRadius: "12px",
                                        padding: "1.5rem",
                                        marginBottom: "1.5rem",
                                        border: "1px solid #e5e7eb",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: "600",
                                                color: "#1f2937",
                                                margin: 0,
                                            }}
                                        >
                                            Project {index + 1}
                                        </h3>
                                        {index > 0 && (
                                            <button
                                                onClick={() => {
                                                    const newProjects = projectsData.filter((_, i) => i !== index)
                                                    setProjectsData(newProjects)
                                                }}
                                                style={{
                                                    backgroundColor: "#fee2e2",
                                                    color: "#dc2626",
                                                    border: "none",
                                                    padding: "0.5rem",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    fontSize: "0.8rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr",
                                            gap: "1.5rem",
                                        }}
                                    >
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                                gap: "1.5rem",
                                            }}
                                        >
                                            <div>
                                                <label
                                                    style={{
                                                        display: "block",
                                                        fontSize: "0.9rem",
                                                        fontWeight: "600",
                                                        color: "#374151",
                                                        marginBottom: "0.5rem",
                                                    }}
                                                >
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
                                                        transition: "border-color 0.2s ease",
                                                        backgroundColor: "white",
                                                    }}
                                                    onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    style={{
                                                        display: "block",
                                                        fontSize: "0.9rem",
                                                        fontWeight: "600",
                                                        color: "#374151",
                                                        marginBottom: "0.5rem",
                                                    }}
                                                >
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
                                                        transition: "border-color 0.2s ease",
                                                        backgroundColor: "white",
                                                    }}
                                                    onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                    fontFamily: "inherit",
                                                    resize: "vertical",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
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
                                                    transition: "border-color 0.2s ease",
                                                    backgroundColor: "white",
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Add More Project Button */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <button
                                    onClick={addProject}
                                    style={{
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
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#eff6ff"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "transparent"
                                    }}
                                >
                                    <Plus size={16} />
                                    Add Another Project
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "2rem",
                            gap: "1rem",
                            flexDirection: isMobile ? "column" : "row",
                        }}
                    >
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
                                transition: "all 0.2s ease",
                                order: isMobile ? 2 : 1,
                                width: isMobile ? "100%" : "auto",
                                justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                                if (activeStep !== 1) {
                                    e.target.style.backgroundColor = "#f9fafb"
                                    e.target.style.borderColor = "#d1d5db"
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeStep !== 1) {
                                    e.target.style.backgroundColor = "white"
                                    e.target.style.borderColor = "#e5e7eb"
                                }
                            }}
                        >
                            <ArrowLeft size={16} />
                            Previous
                        </button>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                order: isMobile ? 1 : 2,
                            }}
                        >
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        backgroundColor: activeStep >= step.id ? "#6366f1" : "#e5e7eb",
                                        transition: "all 0.2s ease",
                                    }}
                                />
                            ))}
                        </div>

                        {activeStep < 5 ? (
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
                                    transition: "all 0.2s ease",
                                    boxShadow: "0 2px 4px rgba(99, 102, 241, 0.2)",
                                    order: isMobile ? 3 : 3,
                                    width: isMobile ? "100%" : "auto",
                                    justifyContent: "center",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#5856eb"
                                    e.target.style.transform = "translateY(-1px)"
                                    e.target.style.boxShadow = "0 4px 8px rgba(99, 102, 241, 0.3)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#6366f1"
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.boxShadow = "0 2px 4px rgba(99, 102, 241, 0.2)"
                                }}
                            >
                                Next
                                <ArrowRight size={16} />
                            </button>
                        ) : (
                            <button
                                onClick={handleComplete}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    backgroundColor: "#10b981",
                                    color: "white",
                                    border: "none",
                                    padding: "0.75rem 2rem",
                                    borderRadius: "8px",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    boxShadow: "0 2px 4px rgba(16, 185, 129, 0.2)",
                                    order: isMobile ? 3 : 3,
                                    width: isMobile ? "100%" : "auto",
                                    justifyContent: "center",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#059669"
                                    e.target.style.transform = "translateY(-1px)"
                                    e.target.style.boxShadow = "0 4px 8px rgba(16, 185, 129, 0.3)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#10b981"
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.boxShadow = "0 2px 4px rgba(16, 185, 129, 0.2)"
                                }}
                            >
                                <Check size={16} />
                                Complete Profile
                            </button>
                        )}
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    padding: isMobile ? "2rem 0 1rem" : "3rem 0 2rem",
                    marginTop: "3rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: isMobile ? "2rem" : "3rem",
                            marginBottom: isMobile ? "2rem" : "3rem",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "1.75rem",
                                    fontWeight: "800",
                                    marginBottom: "1rem",
                                }}
                            >
                                Talent on <span style={{ color: "#6366f1" }}>Cloud</span>
                            </div>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#d1d5db",
                                    lineHeight: "1.7",
                                    marginBottom: "2rem",
                                }}
                            >
                                India's most trusted job portal connecting talented professionals with top employers across all industries.
                            </p>
                        </div>

                        <div>
                            <h4
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "700",
                                    marginBottom: "1.5rem",
                                    color: "#f9fafb",
                                }}
                            >
                                For Job Seekers
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                {["Browse Jobs", "Job Alerts", "Resume Builder", "Career Advice"].map((item, index) => (
                                    <li key={index} style={{ marginBottom: "0.75rem" }}>
                                        <a
                                            href="#"
                                            style={{
                                                color: "#d1d5db",
                                                textDecoration: "none",
                                                fontSize: "1rem",
                                                transition: "all 0.2s ease",
                                                display: "block",
                                                padding: "0.25rem 0",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = "#6366f1"
                                                e.target.style.paddingLeft = "0.5rem"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = "#d1d5db"
                                                e.target.style.paddingLeft = "0"
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "700",
                                    marginBottom: "1.5rem",
                                    color: "#f9fafb",
                                }}
                            >
                                Support
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((item, index) => (
                                    <li key={index} style={{ marginBottom: "0.75rem" }}>
                                        <a
                                            href="#"
                                            style={{
                                                color: "#d1d5db",
                                                textDecoration: "none",
                                                fontSize: "1rem",
                                                transition: "all 0.2s ease",
                                                display: "block",
                                                padding: "0.25rem 0",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = "#6366f1"
                                                e.target.style.paddingLeft = "0.5rem"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = "#d1d5db"
                                                e.target.style.paddingLeft = "0"
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        style={{
                            borderTop: "1px solid #374151",
                            paddingTop: "2rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "1rem" : "0",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "0.95rem",
                                color: "#9ca3af",
                                margin: 0,
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            © 2024 Talent on Cloud. All rights reserved. Made with ❤️ in India.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}