"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    MapPin,
    Briefcase,
    Clock,
    Edit3,
    Download,
    Eye,
    Award,
    Calendar,
    Mail,
    Phone,
    Globe,
    Plus,
    ExternalLink,
    Building,
    GraduationCap,
    Code,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CandidateProfile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [activeTab, setActiveTab] = useState("overview")

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

    const handleBrowseJobs = () => {
        navigate('/all-jobs')
    }

    const profileData = {
        name: "Jay Rutherford",
        title: "Senior UX/UI Designer",
        location: "San Francisco, CA",
        experience: "5+ years",
        email: "jay.rutherford@email.com",
        phone: "+1 (555) 123-4567",
        website: "www.jayrutherford.com",
        linkedin: "linkedin.com/in/jayrutherford",
        github: "github.com/jayrutherford",
        profileViews: 1247,
        searchAppearances: 89,
        recruiterViews: 156,
        skills: [
            { name: "UX Research", years: 5, level: "Expert" },
            { name: "UI Design", years: 5, level: "Expert" },
            { name: "Figma", years: 4, level: "Advanced" },
            { name: "Adobe XD", years: 3, level: "Advanced" },
            { name: "Prototyping", years: 4, level: "Advanced" },
            { name: "User Testing", years: 3, level: "Intermediate" },
            { name: "Design Systems", years: 2, level: "Intermediate" },
            { name: "HTML/CSS", years: 3, level: "Intermediate" },
        ],
        experience: [
            {
                title: "Senior UX/UI Designer",
                company: "ByteDance",
                location: "San Francisco, CA",
                duration: "Jan 2021 - Present",
                type: "Full-time",
                description:
                    "Lead design initiatives for TikTok's creator tools, improving user engagement by 40%. Manage a team of 3 junior designers and collaborate with cross-functional teams.",
                achievements: [
                    "Redesigned creator dashboard resulting in 40% increase in user engagement",
                    "Led design system implementation across 5 product teams",
                    "Mentored 3 junior designers and established design review processes",
                ],
            },
            {
                title: "UX/UI Designer",
                company: "ConocoPhillips",
                location: "Houston, TX",
                duration: "Aug 2018 - Dec 2020",
                type: "Full-time",
                description:
                    "Designed internal tools and dashboards for energy sector operations, focusing on data visualization and workflow optimization.",
                achievements: [
                    "Improved operational efficiency by 25% through dashboard redesign",
                    "Conducted user research with 50+ field operators",
                    "Created comprehensive design documentation and guidelines",
                ],
            },
            {
                title: "Junior UX/UI Designer",
                company: "Brex",
                location: "San Francisco, CA",
                duration: "Jun 2017 - Jul 2018",
                type: "Full-time",
                description: "Worked on fintech products focusing on expense management and corporate card interfaces.",
                achievements: [
                    "Designed onboarding flow that reduced drop-off by 30%",
                    "Created mobile-first designs for expense tracking features",
                    "Collaborated with engineering team on design system components",
                ],
            },
        ],
        projects: [
            {
                title: "Smart Finance App Redesign",
                description:
                    "Complete redesign of a personal finance application focusing on improved user experience, simplified navigation, and enhanced data visualization.",
                technologies: ["Figma", "Principle", "User Research", "A/B Testing"],
                link: "https://dribbble.com/shots/finance-app",
                image: "💰",
            },
            {
                title: "EcoRide Bike Sharing Platform",
                description:
                    "End-to-end design of a bike sharing platform including mobile app, web dashboard, and IoT device interfaces.",
                technologies: ["Sketch", "InVision", "User Journey Mapping", "Prototyping"],
                link: "https://behance.net/gallery/ecoride",
                image: "🚲",
            },
            {
                title: "Healthcare Dashboard System",
                description:
                    "Complex data visualization dashboard for healthcare professionals to monitor patient metrics and treatment outcomes.",
                technologies: ["Adobe XD", "Data Visualization", "User Testing", "Accessibility"],
                link: "https://portfolio.com/healthcare-dashboard",
                image: "🏥",
            },
        ],
        education: [
            {
                degree: "Master of Design",
                field: "Human-Computer Interaction",
                school: "Stanford University",
                location: "Stanford, CA",
                duration: "2015 - 2017",
                gpa: "3.8/4.0",
            },
            {
                degree: "Bachelor of Arts",
                field: "Graphic Design",
                school: "UC Berkeley",
                location: "Berkeley, CA",
                duration: "2011 - 2015",
                gpa: "3.6/4.0",
            },
        ],
        certifications: [
            {
                name: "Google UX Design Professional Certificate",
                issuer: "Google",
                date: "2023",
                credentialId: "ABC123XYZ",
            },
            {
                name: "Certified Usability Analyst (CUA)",
                issuer: "Human Factors International",
                date: "2022",
                credentialId: "CUA-2022-456",
            },
        ],
    }

    const navigationItems = [
        { name: "Find Jobs", href: "/all-jobs", active: false },
        { name: "Companies", href: "#", active: false },
        { name: "My Profile", href: "#", active: true },
    ]

    return (
        <div
            style={{
                fontFamily: "Montserrat, sans-serif",
                lineHeight: "1.6",
                color: "#1f2937",
                margin: 0,
                padding: 0,
                backgroundColor: "#f8fafc",
                minHeight: "100vh",
                zoom: 0.9,
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
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    style={{
                                        textDecoration: "none",
                                        color: item.active ? "#6366f1" : "#4b5563",
                                        fontSize: "0.95rem",
                                        fontWeight: item.active ? "600" : "500",
                                        padding: "0.5rem 0",
                                        transition: "color 0.2s ease",
                                        borderBottom: item.active ? "2px solid #6366f1" : "2px solid transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!item.active) {
                                            e.target.style.color = "#6366f1"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!item.active) {
                                            e.target.style.color = "#4b5563"
                                        }
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    )}

                    {/* Desktop User Menu */}
                    {!isMobile && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    cursor: "pointer",
                                    padding: "0.5rem",
                                    borderRadius: "8px",
                                    transition: "background-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                <div
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        backgroundColor: "#6366f1",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    JR
                                </div>
                                <span style={{ fontSize: "0.9rem", fontWeight: "500", color: "#4b5563" }}>Jay Rutherford</span>
                            </div>
                            <button
                                style={{
                                    backgroundColor: "#ef4444",
                                    color: "white",
                                    border: "none",
                                    padding: "0.6rem 1.2rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#dc2626"
                                    e.target.style.transform = "translateY(-1px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#ef4444"
                                    e.target.style.transform = "translateY(0)"
                                }}
                            >
                                Logout
                            </button>
                        </div>
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
                            {/* User Info */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.75rem 0",
                                    borderBottom: "1px solid #f3f4f6",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "#6366f1",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    JR
                                </div>
                                <div>
                                    <div style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937" }}>Jay Rutherford</div>
                                    <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>Senior UX/UI Designer</div>
                                </div>
                            </div>

                            {/* Navigation Items */}
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    style={{
                                        textDecoration: "none",
                                        color: item.active ? "#6366f1" : "#4b5563",
                                        fontSize: "1rem",
                                        fontWeight: item.active ? "600" : "500",
                                        padding: "0.75rem 0",
                                        borderBottom: "1px solid #f3f4f6",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!item.active) {
                                            e.target.style.color = "#6366f1"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!item.active) {
                                            e.target.style.color = "#4b5563"
                                        }
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}

                            {/* Logout Button */}
                            <button
                                style={{
                                    backgroundColor: "#ef4444",
                                    color: "white",
                                    border: "none",
                                    padding: "0.75rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    marginTop: "1rem",
                                    transition: "background-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#dc2626")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#ef4444")}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "1rem" : "2rem",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: "2rem",
                }}
            >
                {/* Left Sidebar */}
                <aside
                    style={{
                        width: isMobile ? "100%" : "320px",
                        flexShrink: 0,
                    }}
                >
                    {/* Profile Card */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: "2rem",
                            marginBottom: "1.5rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            textAlign: "center",
                        }}
                    >
                        {/* Profile Avatar */}
                        <div
                            style={{
                                position: "relative",
                                display: "inline-block",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    backgroundColor: "#6366f1",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "2.5rem",
                                    fontWeight: "700",
                                    margin: "0 auto",
                                    border: "4px solid #e0e7ff",
                                }}
                            >
                                JR
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "8px",
                                    right: "8px",
                                    width: "24px",
                                    height: "24px",
                                    backgroundColor: "#10b981",
                                    borderRadius: "50%",
                                    border: "3px solid white",
                                }}
                                title="Available for work"
                            />
                        </div>

                        {/* Profile Info */}
                        <h1
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "0.5rem",
                                margin: 0,
                            }}
                        >
                            {profileData.name}
                        </h1>
                        <p
                            style={{
                                fontSize: "1.1rem",
                                color: "#6b7280",
                                marginBottom: "0.5rem",
                                fontWeight: "500",
                            }}
                        >
                            {profileData.title}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.5rem",
                                color: "#6b7280",
                                fontSize: "0.9rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <MapPin size={16} />
                            <span>{profileData.location}</span>
                        </div>

                        {/* Status Badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                backgroundColor: "#dcfce7",
                                color: "#166534",
                                padding: "0.5rem 1rem",
                                borderRadius: "20px",
                                fontSize: "0.85rem",
                                fontWeight: "600",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: "#10b981",
                                    borderRadius: "50%",
                                }}
                            />
                            Open to work
                        </div>

                        {/* Top Skills */}
                        <div style={{ marginBottom: "1.5rem" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                    justifyContent: "center",
                                }}
                            >
                                {profileData.skills.slice(0, 3).map((skill, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontSize: "0.8rem",
                                            backgroundColor: "#eff6ff",
                                            color: "#1e40af",
                                            padding: "0.4rem 0.8rem",
                                            borderRadius: "20px",
                                            fontWeight: "500",
                                            border: "1px solid #dbeafe",
                                        }}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: "#6366f1",
                                    color: "white",
                                    border: "none",
                                    padding: "0.75rem 1rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#5856eb"
                                    e.target.style.transform = "translateY(-1px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#6366f1"
                                    e.target.style.transform = "translateY(0)"
                                }}
                            >
                                <Download size={16} />
                                Download Resume
                            </button>
                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#6366f1",
                                    border: "2px solid #6366f1",
                                    padding: "0.75rem 1rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#6366f1"
                                    e.target.style.color = "white"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent"
                                    e.target.style.color = "#6366f1"
                                }}
                            >
                                <Edit3 size={16} />
                                Edit Profile
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div
                            style={{
                                textAlign: "left",
                                padding: "1rem",
                                backgroundColor: "#f8fafc",
                                borderRadius: "8px",
                                fontSize: "0.85rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginBottom: "0.5rem",
                                    color: "#6b7280",
                                }}
                            >
                                <Mail size={14} />
                                <span>{profileData.email}</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginBottom: "0.5rem",
                                    color: "#6b7280",
                                }}
                            >
                                <Phone size={14} />
                                <span>{profileData.phone}</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    color: "#6b7280",
                                }}
                            >
                                <Globe size={14} />
                                <span>{profileData.website}</span>
                            </div>
                        </div>
                    </div>

                    {/* Profile Analytics */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            marginBottom: "1.5rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "1rem",
                                margin: 0,
                            }}
                        >
                            Profile Analytics
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "1rem",
                            }}
                        >
                            <div style={{ textAlign: "center", flex: 1 }}>
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        color: "#6366f1",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {profileData.profileViews}
                                </div>
                                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Profile Views</div>
                            </div>
                            <div style={{ textAlign: "center", flex: 1 }}>
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        color: "#10b981",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {profileData.searchAppearances}
                                </div>
                                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Search Results</div>
                            </div>
                            <div style={{ textAlign: "center", flex: 1 }}>
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        color: "#f59e0b",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {profileData.recruiterViews}
                                </div>
                                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Recruiter Views</div>
                            </div>
                        </div>
                    </div>

                    {/* Job Alert CTA */}
                    <div
                        style={{
                            backgroundColor: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        <h4
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: "700",
                                marginBottom: "0.5rem",
                                margin: 0,
                            }}
                        >
                            Looking for new opportunities?
                        </h4>
                        <p
                            style={{
                                fontSize: "0.9rem",
                                marginBottom: "1rem",
                                opacity: 0.9,
                                lineHeight: "1.4",
                            }}
                        >
                            Get personalized job recommendations based on your profile
                        </p>
                        <button
                            style={{
                                backgroundColor: "white",
                                color: "#6366f1",
                                border: "none",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "8px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#f8fafc"
                                e.target.style.transform = "translateY(-1px)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "white"
                                e.target.style.transform = "translateY(0)"
                            }}
                            onClick={handleBrowseJobs}>
                            Browse Jobs
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <section
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    {/* Tab Navigation */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: "1rem",
                            marginBottom: "1.5rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "0.5rem",
                                overflowX: "auto",
                                paddingBottom: "0.5rem",
                            }}
                        >
                            {[
                                { id: "overview", label: "Overview", icon: <Eye size={16} /> },
                                { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
                                { id: "projects", label: "Projects", icon: <Code size={16} /> },
                                { id: "skills", label: "Skills", icon: <Award size={16} /> },
                                { id: "education", label: "Education", icon: <GraduationCap size={16} /> },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        border: "none",
                                        backgroundColor: activeTab === tab.id ? "#6366f1" : "transparent",
                                        color: activeTab === tab.id ? "white" : "#6b7280",
                                        fontSize: "0.9rem",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeTab !== tab.id) {
                                            e.target.style.backgroundColor = "#f3f4f6"
                                            e.target.style.color = "#1f2937"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeTab !== tab.id) {
                                            e.target.style.backgroundColor = "transparent"
                                            e.target.style.color = "#6b7280"
                                        }
                                    }}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "overview" && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {/* About Section */}
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "16px",
                                    padding: "2rem",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
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
                                    <h2
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: "700",
                                            color: "#1f2937",
                                            margin: 0,
                                        }}
                                    >
                                        About
                                    </h2>
                                    <button
                                        style={{
                                            backgroundColor: "transparent",
                                            color: "#6366f1",
                                            border: "1px solid #6366f1",
                                            padding: "0.5rem",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#6366f1"
                                            e.target.querySelector("svg").style.color = "white"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent"
                                            e.target.querySelector("svg").style.color = "#6366f1"
                                        }}
                                    >
                                        <Edit3 size={16} />
                                    </button>
                                </div>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#4b5563",
                                        lineHeight: "1.7",
                                        margin: 0,
                                    }}
                                >
                                    Jay Rutherford brings strong expertise in UX research, conducting user interviews, and testing to
                                    uncover actionable insights that drive product decisions. With over 5 years of experience in the tech
                                    industry, Jay has worked with leading companies to create user-centered designs that improve
                                    engagement and conversion rates. Passionate about creating inclusive and accessible digital
                                    experiences that make a real impact on users' lives.
                                </p>
                            </div>

                            {/* Recent Activity */}
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "16px",
                                    padding: "2rem",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1.5rem",
                                        margin: 0,
                                    }}
                                >
                                    Recent Activity
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {[
                                        {
                                            action: "Updated profile summary",
                                            time: "2 hours ago",
                                            icon: <Edit3 size={16} />,
                                            color: "#6366f1",
                                        },
                                        {
                                            action: "Added new project: Healthcare Dashboard",
                                            time: "1 day ago",
                                            icon: <Plus size={16} />,
                                            color: "#10b981",
                                        },
                                        {
                                            action: "Received profile view from Google recruiter",
                                            time: "2 days ago",
                                            icon: <Eye size={16} />,
                                            color: "#f59e0b",
                                        },
                                        {
                                            action: "Updated work experience at ByteDance",
                                            time: "1 week ago",
                                            icon: <Briefcase size={16} />,
                                            color: "#8b5cf6",
                                        },
                                    ].map((activity, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "1rem",
                                                padding: "1rem",
                                                backgroundColor: "#f8fafc",
                                                borderRadius: "8px",
                                                border: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    backgroundColor: activity.color,
                                                    borderRadius: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "white",
                                                }}
                                            >
                                                {activity.icon}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div
                                                    style={{
                                                        fontSize: "0.95rem",
                                                        fontWeight: "500",
                                                        color: "#1f2937",
                                                        marginBottom: "0.25rem",
                                                    }}
                                                >
                                                    {activity.action}
                                                </div>
                                                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>{activity.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "experience" && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "2rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        margin: 0,
                                    }}
                                >
                                    Work Experience
                                </h2>
                                <button
                                    style={{
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#5856eb"
                                        e.target.style.transform = "translateY(-1px)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#6366f1"
                                        e.target.style.transform = "translateY(0)"
                                    }}
                                >
                                    <Plus size={16} />
                                    Add Experience
                                </button>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                {profileData.experience.map((exp, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            position: "relative",
                                            paddingLeft: isMobile ? "0" : "3rem",
                                            paddingBottom: index < profileData.experience.length - 1 ? "2rem" : "0",
                                            borderLeft: isMobile
                                                ? "none"
                                                : index < profileData.experience.length - 1
                                                    ? "2px solid #e5e7eb"
                                                    : "none",
                                        }}
                                    >
                                        {!isMobile && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: "-9px",
                                                    top: "0",
                                                    width: "16px",
                                                    height: "16px",
                                                    backgroundColor: "#6366f1",
                                                    borderRadius: "50%",
                                                    border: "3px solid white",
                                                    boxShadow: "0 0 0 3px #e5e7eb",
                                                }}
                                            />
                                        )}

                                        <div
                                            style={{
                                                backgroundColor: "#f8fafc",
                                                padding: "1.5rem",
                                                borderRadius: "12px",
                                                border: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-start",
                                                    marginBottom: "1rem",
                                                    flexDirection: isMobile ? "column" : "row",
                                                    gap: isMobile ? "0.5rem" : "0",
                                                }}
                                            >
                                                <div>
                                                    <h3
                                                        style={{
                                                            fontSize: "1.2rem",
                                                            fontWeight: "700",
                                                            color: "#1f2937",
                                                            marginBottom: "0.25rem",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {exp.title}
                                                    </h3>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.5rem",
                                                            marginBottom: "0.5rem",
                                                        }}
                                                    >
                                                        <Building size={16} style={{ color: "#6366f1" }} />
                                                        <span
                                                            style={{
                                                                fontSize: "1rem",
                                                                fontWeight: "600",
                                                                color: "#6366f1",
                                                            }}
                                                        >
                                                            {exp.company}
                                                        </span>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "1rem",
                                                            fontSize: "0.9rem",
                                                            color: "#6b7280",
                                                        }}
                                                    >
                                                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                            <MapPin size={14} />
                                                            {exp.location}
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                            <Calendar size={14} />
                                                            {exp.duration}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span
                                                    style={{
                                                        backgroundColor: "#dcfce7",
                                                        color: "#166534",
                                                        padding: "0.4rem 0.8rem",
                                                        borderRadius: "20px",
                                                        fontSize: "0.8rem",
                                                        fontWeight: "600",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {exp.type}
                                                </span>
                                            </div>

                                            <p
                                                style={{
                                                    fontSize: "0.95rem",
                                                    color: "#4b5563",
                                                    lineHeight: "1.6",
                                                    marginBottom: "1rem",
                                                }}
                                            >
                                                {exp.description}
                                            </p>

                                            <div>
                                                <h4
                                                    style={{
                                                        fontSize: "0.9rem",
                                                        fontWeight: "600",
                                                        color: "#1f2937",
                                                        marginBottom: "0.5rem",
                                                    }}
                                                >
                                                    Key Achievements:
                                                </h4>
                                                <ul
                                                    style={{
                                                        margin: 0,
                                                        paddingLeft: "1.5rem",
                                                        fontSize: "0.9rem",
                                                        color: "#4b5563",
                                                        lineHeight: "1.6",
                                                    }}
                                                >
                                                    {exp.achievements.map((achievement, achIndex) => (
                                                        <li key={achIndex} style={{ marginBottom: "0.25rem" }}>
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "projects" && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "2rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        margin: 0,
                                    }}
                                >
                                    Projects
                                </h2>
                                <button
                                    style={{
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#5856eb"
                                        e.target.style.transform = "translateY(-1px)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#6366f1"
                                        e.target.style.transform = "translateY(0)"
                                    }}
                                >
                                    <Plus size={16} />
                                    Add Project
                                </button>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
                                    gap: "1.5rem",
                                }}
                            >
                                {profileData.projects.map((project, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "12px",
                                            padding: "1.5rem",
                                            border: "1px solid #e5e7eb",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                                            e.target.style.transform = "translateY(-2px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.boxShadow = "none"
                                            e.target.style.transform = "translateY(0)"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "1rem",
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    backgroundColor: "white",
                                                    borderRadius: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "1.5rem",
                                                    border: "1px solid #e5e7eb",
                                                }}
                                            >
                                                {project.image}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h3
                                                    style={{
                                                        fontSize: "1.1rem",
                                                        fontWeight: "700",
                                                        color: "#1f2937",
                                                        marginBottom: "0.25rem",
                                                        margin: 0,
                                                    }}
                                                >
                                                    {project.title}
                                                </h3>
                                                <a
                                                    href={project.link}
                                                    style={{
                                                        fontSize: "0.85rem",
                                                        color: "#6366f1",
                                                        textDecoration: "none",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.25rem",
                                                    }}
                                                    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                                                    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                                                >
                                                    View Project <ExternalLink size={12} />
                                                </a>
                                            </div>
                                        </div>

                                        <p
                                            style={{
                                                fontSize: "0.9rem",
                                                color: "#4b5563",
                                                lineHeight: "1.6",
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            {project.description}
                                        </p>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "0.5rem",
                                            }}
                                        >
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    style={{
                                                        fontSize: "0.75rem",
                                                        backgroundColor: "#eff6ff",
                                                        color: "#1e40af",
                                                        padding: "0.3rem 0.6rem",
                                                        borderRadius: "12px",
                                                        fontWeight: "500",
                                                        border: "1px solid #dbeafe",
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "skills" && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "2rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        margin: 0,
                                    }}
                                >
                                    Skills & Expertise
                                </h2>
                                <button
                                    style={{
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#5856eb"
                                        e.target.style.transform = "translateY(-1px)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#6366f1"
                                        e.target.style.transform = "translateY(0)"
                                    }}
                                >
                                    <Plus size={16} />
                                    Add Skill
                                </button>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                                    gap: "1.5rem",
                                }}
                            >
                                {profileData.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "12px",
                                            padding: "1.5rem",
                                            border: "1px solid #e5e7eb",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                                            e.target.style.transform = "translateY(-2px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.boxShadow = "none"
                                            e.target.style.transform = "translateY(0)"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    fontSize: "1.1rem",
                                                    fontWeight: "700",
                                                    color: "#1f2937",
                                                    margin: 0,
                                                }}
                                            >
                                                {skill.name}
                                            </h3>
                                            <span
                                                style={{
                                                    fontSize: "0.8rem",
                                                    backgroundColor:
                                                        skill.level === "Expert" ? "#dcfce7" : skill.level === "Advanced" ? "#fef3c7" : "#e0f2fe",
                                                    color:
                                                        skill.level === "Expert" ? "#166534" : skill.level === "Advanced" ? "#92400e" : "#0c4a6e",
                                                    padding: "0.3rem 0.6rem",
                                                    borderRadius: "12px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {skill.level}
                                            </span>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                marginBottom: "0.75rem",
                                            }}
                                        >
                                            <Clock size={14} style={{ color: "#6b7280" }} />
                                            <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>{skill.years} years experience</span>
                                        </div>

                                        {/* Skill Level Bar */}
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "6px",
                                                backgroundColor: "#e5e7eb",
                                                borderRadius: "3px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: skill.level === "Expert" ? "90%" : skill.level === "Advanced" ? "75%" : "60%",
                                                    height: "100%",
                                                    backgroundColor:
                                                        skill.level === "Expert" ? "#10b981" : skill.level === "Advanced" ? "#f59e0b" : "#6366f1",
                                                    borderRadius: "3px",
                                                    transition: "width 0.3s ease",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "education" && (
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "2rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        margin: 0,
                                    }}
                                >
                                    Education & Certifications
                                </h2>
                                <button
                                    style={{
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#5856eb"
                                        e.target.style.transform = "translateY(-1px)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#6366f1"
                                        e.target.style.transform = "translateY(0)"
                                    }}
                                >
                                    <Plus size={16} />
                                    Add Education
                                </button>
                            </div>

                            {/* Education */}
                            <div style={{ marginBottom: "3rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1.5rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <GraduationCap size={20} style={{ color: "#6366f1" }} />
                                    Education
                                </h3>

                                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                    {profileData.education.map((edu, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundColor: "#f8fafc",
                                                borderRadius: "12px",
                                                padding: "1.5rem",
                                                border: "1px solid #e5e7eb",
                                                transition: "all 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                                                e.target.style.transform = "translateY(-2px)"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.boxShadow = "none"
                                                e.target.style.transform = "translateY(0)"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-start",
                                                    marginBottom: "1rem",
                                                    flexDirection: isMobile ? "column" : "row",
                                                    gap: isMobile ? "0.5rem" : "0",
                                                }}
                                            >
                                                <div>
                                                    <h4
                                                        style={{
                                                            fontSize: "1.1rem",
                                                            fontWeight: "700",
                                                            color: "#1f2937",
                                                            marginBottom: "0.25rem",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {edu.degree}
                                                    </h4>
                                                    <p
                                                        style={{
                                                            fontSize: "0.95rem",
                                                            color: "#6366f1",
                                                            fontWeight: "600",
                                                            marginBottom: "0.5rem",
                                                        }}
                                                    >
                                                        {edu.field}
                                                    </p>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "1rem",
                                                            fontSize: "0.9rem",
                                                            color: "#6b7280",
                                                        }}
                                                    >
                                                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                            <Building size={14} />
                                                            {edu.school}
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                            <MapPin size={14} />
                                                            {edu.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ textAlign: isMobile ? "left" : "right" }}>
                                                    <div
                                                        style={{
                                                            fontSize: "0.9rem",
                                                            color: "#6b7280",
                                                            marginBottom: "0.25rem",
                                                        }}
                                                    >
                                                        {edu.duration}
                                                    </div>
                                                    <div
                                                        style={{
                                                            fontSize: "0.9rem",
                                                            fontWeight: "600",
                                                            color: "#10b981",
                                                        }}
                                                    >
                                                        GPA: {edu.gpa}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div>
                                <h3
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1.5rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <Award size={20} style={{ color: "#6366f1" }} />
                                    Certifications
                                </h3>

                                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {profileData.certifications.map((cert, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundColor: "#f8fafc",
                                                borderRadius: "12px",
                                                padding: "1.5rem",
                                                border: "1px solid #e5e7eb",
                                                transition: "all 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                                                e.target.style.transform = "translateY(-2px)"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.boxShadow = "none"
                                                e.target.style.transform = "translateY(0)"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-start",
                                                    marginBottom: "1rem",
                                                    flexDirection: isMobile ? "column" : "row",
                                                    gap: isMobile ? "0.5rem" : "0",
                                                }}
                                            >
                                                <div>
                                                    <h4
                                                        style={{
                                                            fontSize: "1.1rem",
                                                            fontWeight: "700",
                                                            color: "#1f2937",
                                                            marginBottom: "0.25rem",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {cert.name}
                                                    </h4>
                                                    <p
                                                        style={{
                                                            fontSize: "0.95rem",
                                                            color: "#6366f1",
                                                            fontWeight: "600",
                                                            marginBottom: "0.5rem",
                                                        }}
                                                    >
                                                        {cert.issuer}
                                                    </p>
                                                    <div
                                                        style={{
                                                            fontSize: "0.85rem",
                                                            color: "#6b7280",
                                                        }}
                                                    >
                                                        Credential ID: {cert.credentialId}
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        backgroundColor: "#dcfce7",
                                                        color: "#166534",
                                                        padding: "0.4rem 0.8rem",
                                                        borderRadius: "20px",
                                                        fontSize: "0.8rem",
                                                        fontWeight: "600",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {cert.date}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    padding: isMobile ? "2rem 0 1rem" : "4rem 0 2rem",
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
                                India's most trusted job portal connecting talented professionals with top employers across all
                                industries. Your career success is our mission.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                }}
                            >
                                {["📘", "🐦", "💼", "📸"].map((icon, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            width: "44px",
                                            height: "44px",
                                            backgroundColor: "#374151",
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            fontSize: "1.2rem",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#6366f1"
                                            e.target.style.transform = "translateY(-2px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "#374151"
                                            e.target.style.transform = "translateY(0)"
                                        }}
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>
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
                                {["Browse Jobs", "Job Alerts", "Resume Builder", "Career Advice", "Talent", "Interview Tips"].map(
                                    (item, index) => (
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
                                    ),
                                )}
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
                                For Employers
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                {[
                                    "Post Jobs",
                                    "Search Resumes",
                                    "Employer Branding",
                                    "Recruitment Solutions",
                                    "Pricing Plans",
                                    "Success Stories",
                                ].map((item, index) => (
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
                                Company
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    marginBottom: "2rem",
                                }}
                            >
                                {["About Us", "Contact", "Privacy Policy", "Terms of Service", "Help Center", "Careers"].map(
                                    (item, index) => (
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
                                    ),
                                )}
                            </ul>

                            {/* Newsletter Signup */}
                            <div>
                                <h5
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        marginBottom: "1rem",
                                        color: "#f9fafb",
                                    }}
                                >
                                    Stay Updated
                                </h5>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#d1d5db",
                                        marginBottom: "1rem",
                                        lineHeight: "1.5",
                                    }}
                                >
                                    Get the latest jobs and career tips delivered to your inbox.
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "0.5rem",
                                        flexDirection: isMobile ? "column" : "row",
                                    }}
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        style={{
                                            flex: 1,
                                            padding: "0.75rem",
                                            border: "1px solid #4b5563",
                                            borderRadius: "8px",
                                            backgroundColor: "#374151",
                                            color: "white",
                                            fontSize: "0.9rem",
                                            outline: "none",
                                            transition: "border-color 0.2s ease",
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                        onBlur={(e) => (e.target.style.borderColor = "#4b5563")}
                                    />
                                    <button
                                        style={{
                                            backgroundColor: "#6366f1",
                                            color: "white",
                                            border: "none",
                                            padding: "0.75rem 1.5rem",
                                            borderRadius: "8px",
                                            fontSize: "0.9rem",
                                            fontWeight: "600",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            whiteSpace: "nowrap",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#5856eb"
                                            e.target.style.transform = "translateY(-1px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "#6366f1"
                                            e.target.style.transform = "translateY(0)"
                                        }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
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
                        <div
                            style={{
                                display: "flex",
                                gap: "2rem",
                                fontSize: "0.9rem",
                                flexWrap: "wrap",
                                justifyContent: isMobile ? "center" : "flex-end",
                            }}
                        >
                            {["Privacy", "Terms", "Cookies", "Sitemap"].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    style={{
                                        color: "#9ca3af",
                                        textDecoration: "none",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                                    onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
