"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search, Filter, Plus, Bell, Users, Settings, LogOut, Eye, Mail, MapPin, Briefcase, Star, MoreVertical, ChevronDown, Grid, List, Download, Share2, Heart, GraduationCap, Clock, Bookmark, MessageCircle, Calendar, Award } from 'lucide-react'

export default function ExternalCandidates() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [viewMode, setViewMode] = useState("grid")
    const [selectedCandidates, setSelectedCandidates] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState("all")

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

    // Sample external candidates data (freshers and job seekers)
    const externalCandidates = [
        {
            id: "1",
            name: "Priya Sharma",
            email: "priya.sharma@gmail.com",
            phone: "+91 98765 43210",
            appliedFor: "Software Developer Trainee",
            education: "B.Tech Computer Science",
            college: "IIT Delhi",
            graduationYear: "2024",
            cgpa: "8.5",
            skills: ["Java", "Python", "React", "SQL", "Git", "HTML/CSS"],
            experience: "Fresher",
            location: "Delhi, India",
            availability: "Immediately Available",
            availabilityColor: "#10b981",
            expectedSalary: "₹4-6 LPA",
            internships: 2,
            projects: 5,
            avatar: "/placeholder.svg?height=150&width=150",
            appliedDate: "2 days ago",
            status: "Under Review",
            statusColor: "#f59e0b",
            certifications: ["Oracle Java Certified", "AWS Cloud Practitioner"],
            portfolioUrl: "#",
            githubUrl: "#",
            linkedinUrl: "#",
            isBookmarked: false,
            matchScore: 92,
            resumeUrl: "#",
        },
        {
            id: "2",
            name: "Rahul Kumar",
            email: "rahul.kumar@gmail.com",
            phone: "+91 87654 32109",
            appliedFor: "Data Analyst",
            education: "B.Sc Statistics",
            college: "Delhi University",
            graduationYear: "2023",
            cgpa: "7.8",
            skills: ["Python", "R", "SQL", "Excel", "Tableau", "Power BI"],
            experience: "6 months internship",
            location: "Mumbai, India",
            availability: "Immediately Available",
            availabilityColor: "#10b981",
            expectedSalary: "₹3.5-5 LPA",
            internships: 1,
            projects: 3,
            avatar: "/placeholder.svg?height=150&width=150",
            appliedDate: "1 day ago",
            status: "Shortlisted",
            statusColor: "#10b981",
            certifications: ["Google Data Analytics", "Microsoft Excel Expert"],
            portfolioUrl: "#",
            githubUrl: "#",
            linkedinUrl: "#",
            isBookmarked: true,
            matchScore: 88,
            resumeUrl: "#",
        },
        {
            id: "3",
            name: "Sneha Patel",
            email: "sneha.patel@gmail.com",
            phone: "+91 76543 21098",
            appliedFor: "UI/UX Designer",
            education: "B.Des Visual Communication",
            college: "NIFT Mumbai",
            graduationYear: "2024",
            cgpa: "8.2",
            skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "Prototyping"],
            experience: "Fresher",
            location: "Bangalore, India",
            availability: "Available in 1 month",
            availabilityColor: "#f59e0b",
            expectedSalary: "₹3-4.5 LPA",
            internships: 3,
            projects: 8,
            avatar: "/placeholder.svg?height=150&width=150",
            appliedDate: "3 days ago",
            status: "Interview Scheduled",
            statusColor: "#3b82f6",
            certifications: ["Google UX Design", "Adobe Certified Expert"],
            portfolioUrl: "#",
            githubUrl: "#",
            linkedinUrl: "#",
            isBookmarked: false,
            matchScore: 95,
            resumeUrl: "#",
        },
        {
            id: "4",
            name: "Arjun Singh",
            email: "arjun.singh@gmail.com",
            phone: "+91 65432 10987",
            appliedFor: "Digital Marketing Executive",
            education: "MBA Marketing",
            college: "Symbiosis Pune",
            graduationYear: "2024",
            cgpa: "8.0",
            skills: ["SEO", "Google Ads", "Social Media", "Content Writing", "Analytics", "Email Marketing"],
            experience: "1 year internship",
            location: "Pune, India",
            availability: "Immediately Available",
            availabilityColor: "#10b981",
            expectedSalary: "₹4-6 LPA",
            internships: 2,
            projects: 4,
            avatar: "/placeholder.svg?height=150&width=150",
            appliedDate: "5 days ago",
            status: "Under Review",
            statusColor: "#f59e0b",
            certifications: ["Google Ads Certified", "HubSpot Content Marketing"],
            portfolioUrl: "#",
            githubUrl: "#",
            linkedinUrl: "#",
            isBookmarked: true,
            matchScore: 85,
            resumeUrl: "#",
        },
        {
            id: "5",
            name: "Kavya Reddy",
            email: "kavya.reddy@gmail.com",
            phone: "+91 54321 09876",
            appliedFor: "Business Analyst Trainee",
            education: "B.Com with Computer Applications",
            college: "Christ University Bangalore",
            graduationYear: "2023",
            cgpa: "8.7",
            skills: ["SQL", "Excel", "Power BI", "Business Analysis", "Process Mapping", "Documentation"],
            experience: "Fresher",
            location: "Hyderabad, India",
            availability: "Immediately Available",
            availabilityColor: "#10b981",
            expectedSalary: "₹3.5-5 LPA",
            internships: 1,
            projects: 2,
            avatar: "/placeholder.svg?height=150&width=150",
            appliedDate: "1 week ago",
            status: "Rejected",
            statusColor: "#ef4444",
            certifications: ["Microsoft Excel Expert", "CBAP Foundation"],
            portfolioUrl: "#",
            githubUrl: "#",
            linkedinUrl: "#",
            isBookmarked: false,
            matchScore: 78,
            resumeUrl: "#",
        },
        {
            id: "6",
            name: "Vikash Gupta",
            email: "vikash.gupta@gmail.com",
            phone: "+91 43210 98765",
            appliedFor: "Quality Assurance Trainee",
            education: "B.Tech Information Technology",
            college: "VIT Vellore",
            graduationYear: "2024",
            cgpa: "7.9",
            skills: ["Manual Testing", "Selenium", "Java", "API Testing", "Bug Tracking", "Test Cases"],
            experience: "6 months internship",
            location: "Chennai, India",
            availability: "Available in 2 weeks",
            availabilityColor: "#f59e0b",
            expectedSalary: "₹3-4.5 LPA",
            internships: 1,
            projects: 3,
            avatar: "/placeholder.svg?height=150&width=150",
            appliedDate: "4 days ago",
            status: "Under Review",
            statusColor: "#f59e0b",
            certifications: ["ISTQB Foundation", "Selenium WebDriver"],
            portfolioUrl: "#",
            githubUrl: "#",
            linkedinUrl: "#",
            isBookmarked: false,
            matchScore: 82,
            resumeUrl: "#",
        },
    ]

    const navigationItems = [
        { id: "dashboard", name: "Dashboard", icon: <Users size={20} />, active: false },
        { id: "external", name: "External Candidates", icon: <GraduationCap size={20} />, active: true },
        { id: "applications", name: "Job Applications", icon: <Briefcase size={20} /> },
        { id: "interviews", name: "Interview Schedule", icon: <Calendar size={20} /> },
    ]

    const statusFilters = [
        { id: "all", name: "All Applications", count: externalCandidates.length },
        { id: "review", name: "Under Review", count: 3 },
        { id: "shortlisted", name: "Shortlisted", count: 1 },
        { id: "interview", name: "Interview Scheduled", count: 1 },
        { id: "rejected", name: "Rejected", count: 1 },
    ]

    const filteredCandidates = externalCandidates.filter((candidate) => {
        const matchesSearch =
            candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.appliedFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "review" && candidate.status === "Under Review") ||
            (activeFilter === "shortlisted" && candidate.status === "Shortlisted") ||
            (activeFilter === "interview" && candidate.status === "Interview Scheduled") ||
            (activeFilter === "rejected" && candidate.status === "Rejected")

        return matchesSearch && matchesFilter
    })

    const handleCandidateSelect = (candidateId) => {
        setSelectedCandidates((prev) =>
            prev.includes(candidateId) ? prev.filter((id) => id !== candidateId) : [...prev, candidateId],
        )
    }

    const toggleBookmark = (candidateId) => {
        // In a real app, this would update the backend
        console.log("Toggle bookmark for candidate:", candidateId)
    }

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
                zoom: 0.9
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
                        maxWidth: "1400px",
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
                                width: "32px",
                                height: "32px",
                                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontSize: "0.9rem",
                                fontWeight: "700",
                            }}
                        >
                            <Heart size={16} />
                        </div>
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
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#4b5563",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    padding: "0.5rem 0",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#6366f1",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    padding: "0.5rem 0",
                                    borderBottom: "2px solid #6366f1",
                                }}
                            >
                                External Candidates
                            </a>
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#4b5563",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    padding: "0.5rem 0",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                            >
                                Applications
                            </a>
                        </nav>
                    )}

                    {/* Right Side Actions */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: isMobile ? "0.5rem" : "1rem",
                        }}
                    >
                        {/* Search - Hidden on mobile */}
                        {!isMobile && (
                            <div
                                style={{
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Search
                                    size={16}
                                    style={{
                                        position: "absolute",
                                        left: "12px",
                                        color: "#6b7280",
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Search candidates, skills, colleges..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        width: "300px",
                                        padding: "0.5rem 0.5rem 0.5rem 2.5rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "8px",
                                        fontSize: "0.9rem",
                                        outline: "none",
                                        transition: "border-color 0.2s ease",
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                                />
                            </div>
                        )}

                        {/* Notifications */}
                        <div
                            style={{
                                position: "relative",
                                cursor: "pointer",
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    padding: "0.5rem",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "background-color 0.2s ease",
                                    position: "relative",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                <Bell size={20} color="#4b5563" />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "6px",
                                        right: "6px",
                                        width: "8px",
                                        height: "8px",
                                        backgroundColor: "#ef4444",
                                        borderRadius: "50%",
                                        border: "2px solid white",
                                    }}
                                />
                            </button>
                        </div>

                        {/* User Profile */}
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
                                HR
                            </div>
                            {!isMobile && (
                                <>
                                    <span style={{ fontSize: "0.9rem", fontWeight: "500", color: "#4b5563" }}>HR Manager</span>
                                    <ChevronDown size={16} color="#6b7280" />
                                </>
                            )}
                        </div>

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
                        {/* Mobile Search */}
                        <div
                            style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "1rem",
                            }}
                        >
                            <Search
                                size={16}
                                style={{
                                    position: "absolute",
                                    left: "12px",
                                    color: "#6b7280",
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search candidates, skills, colleges..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 0.75rem 0.75rem 2.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                }}
                            />
                        </div>

                        {/* Mobile Navigation */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            {navigationItems.map((item) => (
                                <button
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.75rem",
                                        backgroundColor: item.active ? "#eff6ff" : "transparent",
                                        color: item.active ? "#6366f1" : "#4b5563",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontSize: "0.95rem",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        textAlign: "left",
                                        width: "100%",
                                    }}
                                >
                                    {item.icon}
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Main Layout */}
            <div
                style={{
                    display: "flex",
                    minHeight: "calc(100vh - 70px)",
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                {/* Desktop Sidebar */}
                {!isMobile && (
                    <aside
                        style={{
                            width: "280px",
                            backgroundColor: "white",
                            borderRight: "1px solid #e5e7eb",
                            padding: "2rem 0",
                            position: "sticky",
                            top: "70px",
                            height: "calc(100vh - 70px)",
                            overflowY: "auto",
                        }}
                    >
                        <nav
                            style={{
                                padding: "0 1rem",
                            }}
                        >
                            {navigationItems.map((item) => (
                                <button
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.75rem 1rem",
                                        backgroundColor: item.active ? "#eff6ff" : "transparent",
                                        color: item.active ? "#6366f1" : "#4b5563",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontSize: "0.95rem",
                                        fontWeight: item.active ? "600" : "500",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        textAlign: "left",
                                        width: "100%",
                                        marginBottom: "0.5rem",
                                        borderLeft: item.active ? "3px solid #6366f1" : "3px solid transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!item.active) {
                                            e.target.style.backgroundColor = "#f9fafb"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!item.active) {
                                            e.target.style.backgroundColor = "transparent"
                                        }
                                    }}
                                >
                                    {item.icon}
                                    {item.name}
                                </button>
                            ))}
                        </nav>

                        {/* Sidebar Footer */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "2rem",
                                left: "1rem",
                                right: "1rem",
                            }}
                        >
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.75rem 1rem",
                                    backgroundColor: "transparent",
                                    color: "#4b5563",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    textAlign: "left",
                                    width: "100%",
                                    marginBottom: "0.5rem",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                <Settings size={20} />
                                Settings
                            </button>
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.75rem 1rem",
                                    backgroundColor: "transparent",
                                    color: "#4b5563",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    textAlign: "left",
                                    width: "100%",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                <LogOut size={20} />
                                Logout
                            </button>
                        </div>
                    </aside>
                )}

                {/* Main Content */}
                <main
                    style={{
                        flex: 1,
                        padding: isMobile ? "1rem" : "2rem",
                        backgroundColor: "#f8fafc",
                        minHeight: "calc(100vh - 70px)",
                    }}
                >
                    {/* Page Header */}
                    <div
                        style={{
                            marginBottom: "2rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "0.5rem",
                                flexDirection: isMobile ? "column" : "row",
                                gap: isMobile ? "1rem" : "0",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    margin: 0,
                                }}
                            >
                                External Candidates
                            </h1>
                            <button
                                style={{
                                    backgroundColor: "#6366f1",
                                    color: "white",
                                    border: "none",
                                    padding: "0.6rem 1.2rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#5856eb")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#6366f1")}
                            >
                                <Plus size={16} />
                                Post New Job
                            </button>
                        </div>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#6b7280",
                                margin: 0,
                            }}
                        >
                            Fresh talent and job seekers applying for positions at your company.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                156
                            </div>
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Total Applications
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                This month
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#10b981",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                89
                            </div>
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Fresh Graduates
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                2023-2024 batch
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                                    fontWeight: "700",
                                    color: "#6366f1",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                Tech
                            </div>
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Top Applied Domain
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                65% of applications
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#f59e0b",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                23
                            </div>
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                New Today
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                Fresh applications
                            </div>
                        </div>
                    </div>

                    {/* Filters and Actions */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            padding: "1.5rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: isMobile ? "column" : "row",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                    flex: 1,
                                }}
                            >
                                <select
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        outline: "none",
                                        backgroundColor: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    <option>All Skills</option>
                                    <option>Java</option>
                                    <option>Python</option>
                                    <option>React</option>
                                    <option>SQL</option>
                                </select>

                                <select
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        outline: "none",
                                        backgroundColor: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    <option>All Colleges</option>
                                    <option>IIT</option>
                                    <option>NIT</option>
                                    <option>Private Engineering</option>
                                    <option>University</option>
                                </select>

                                <select
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        outline: "none",
                                        backgroundColor: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    <option>All Graduation Years</option>
                                    <option>2024</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                </select>

                                <button
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.5rem 0.75rem",
                                        backgroundColor: "transparent",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        color: "#6366f1",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                >
                                    <Filter size={16} />
                                    More Filters
                                </button>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#f3f4f6",
                                        borderRadius: "6px",
                                        padding: "2px",
                                    }}
                                >
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        style={{
                                            padding: "0.5rem",
                                            backgroundColor: viewMode === "grid" ? "white" : "transparent",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        <Grid size={16} color={viewMode === "grid" ? "#6366f1" : "#6b7280"} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        style={{
                                            padding: "0.5rem",
                                            backgroundColor: viewMode === "list" ? "white" : "transparent",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        <List size={16} color={viewMode === "list" ? "#6366f1" : "#6b7280"} />
                                    </button>
                                </div>

                                {selectedCandidates.length > 0 && (
                                    <button
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            padding: "0.5rem 0.75rem",
                                            backgroundColor: "#6366f1",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            fontSize: "0.9rem",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#5856eb")}
                                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#6366f1")}
                                    >
                                        <Download size={16} />
                                        Export ({selectedCandidates.length})
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Status Filters */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                            marginBottom: "1.5rem",
                            overflowX: "auto",
                            paddingBottom: "0.5rem",
                        }}
                    >
                        {statusFilters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.75rem 1rem",
                                    backgroundColor: activeFilter === filter.id ? "#6366f1" : "#f3f4f6",
                                    color: activeFilter === filter.id ? "white" : "#4b5563",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    whiteSpace: "nowrap",
                                }}
                                onMouseEnter={(e) => {
                                    if (activeFilter !== filter.id) {
                                        e.target.style.backgroundColor = "#e5e7eb"
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeFilter !== filter.id) {
                                        e.target.style.backgroundColor = "#f3f4f6"
                                    }
                                }}
                            >
                                {filter.name}
                                <span
                                    style={{
                                        backgroundColor: activeFilter === filter.id ? "rgba(255,255,255,0.2)" : "#d1d5db",
                                        color: activeFilter === filter.id ? "white" : "#6b7280",
                                        padding: "0.25rem 0.5rem",
                                        borderRadius: "12px",
                                        fontSize: "0.8rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    {filter.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Candidates Content */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            overflow: "hidden",
                        }}
                    >
                        {/* Content Header */}
                        <div
                            style={{
                                padding: "1.5rem",
                                borderBottom: "1px solid #e5e7eb",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    Job Applications
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    {filteredCandidates.length} fresh candidates and job seekers
                                </p>
                            </div>
                        </div>

                        {/* Grid View */}
                        {viewMode === "grid" && (
                            <div
                                style={{
                                    padding: "1.5rem",
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(380px, 1fr))",
                                    gap: "1.5rem",
                                }}
                            >
                                {filteredCandidates.map((candidate) => (
                                    <div
                                        key={candidate.id}
                                        style={{
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "12px",
                                            padding: "1.5rem",
                                            border: "1px solid #e5e7eb",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                            position: "relative",
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
                                        {/* Match Score Badge */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "1rem",
                                                right: "1rem",
                                                backgroundColor: "#10b981",
                                                color: "white",
                                                padding: "0.25rem 0.5rem",
                                                borderRadius: "12px",
                                                fontSize: "0.75rem",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {candidate.matchScore}% Match
                                        </div>

                                        {/* Candidate Header */}
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.75rem",
                                                }}
                                            >
                                                <img
                                                    src={candidate.avatar || "/placeholder.svg"}
                                                    alt={candidate.name}
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <div>
                                                    <h4
                                                        style={{
                                                            fontSize: "1.1rem",
                                                            fontWeight: "600",
                                                            color: "#1f2937",
                                                            marginBottom: "0.25rem",
                                                        }}
                                                    >
                                                        {candidate.name}
                                                    </h4>
                                                    <p
                                                        style={{
                                                            fontSize: "0.9rem",
                                                            color: "#6b7280",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        Applied for {candidate.appliedFor}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleBookmark(candidate.id)}
                                                style={{
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    padding: "0.5rem",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    transition: "background-color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                            >
                                                <Bookmark
                                                    size={16}
                                                    color={candidate.isBookmarked ? "#6366f1" : "#6b7280"}
                                                    fill={candidate.isBookmarked ? "#6366f1" : "none"}
                                                />
                                            </button>
                                        </div>

                                        {/* Education Info */}
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                marginBottom: "1rem",
                                                padding: "0.75rem",
                                                backgroundColor: "white",
                                                borderRadius: "8px",
                                                border: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <GraduationCap size={20} color="#6366f1" />
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: "0.9rem",
                                                        fontWeight: "600",
                                                        color: "#1f2937",
                                                    }}
                                                >
                                                    {candidate.education}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "0.8rem",
                                                        color: "#6b7280",
                                                    }}
                                                >
                                                    {candidate.college} • {candidate.graduationYear} • CGPA: {candidate.cgpa}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div
                                            style={{
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                <MapPin size={14} color="#6b7280" />
                                                <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>{candidate.location}</span>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                <Clock size={14} color="#6b7280" />
                                                <span
                                                    style={{
                                                        fontSize: "0.9rem",
                                                        color: candidate.availabilityColor,
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {candidate.availability}
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <Award size={14} color="#f59e0b" />
                                                <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                                                    {candidate.internships} internships • {candidate.projects} projects
                                                </span>
                                            </div>
                                        </div>

                                        {/* Skills */}
                                        <div
                                            style={{
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                {candidate.skills.slice(0, 4).map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        style={{
                                                            padding: "0.25rem 0.5rem",
                                                            backgroundColor: "#eff6ff",
                                                            color: "#6366f1",
                                                            borderRadius: "12px",
                                                            fontSize: "0.75rem",
                                                            fontWeight: "500",
                                                            border: "1px solid #dbeafe",
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {candidate.skills.length > 4 && (
                                                    <span
                                                        style={{
                                                            padding: "0.25rem 0.5rem",
                                                            backgroundColor: "#f3f4f6",
                                                            color: "#6b7280",
                                                            borderRadius: "12px",
                                                            fontSize: "0.75rem",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        +{candidate.skills.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Expected Salary */}
                                        <div
                                            style={{
                                                marginBottom: "1rem",
                                                padding: "0.75rem",
                                                backgroundColor: "#f0f9ff",
                                                borderRadius: "8px",
                                                border: "1px solid #e0f2fe",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#0369a1",
                                                    fontWeight: "500",
                                                    marginBottom: "0.25rem",
                                                }}
                                            >
                                                Expected Salary
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "600",
                                                    color: "#0c4a6e",
                                                }}
                                            >
                                                {candidate.expectedSalary}
                                            </div>
                                        </div>

                                        {/* Status */}
                                        <div
                                            style={{
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    padding: "0.25rem 0.75rem",
                                                    backgroundColor: `${candidate.statusColor}20`,
                                                    color: candidate.statusColor,
                                                    borderRadius: "12px",
                                                    fontSize: "0.8rem",
                                                    fontWeight: "600",
                                                    border: `1px solid ${candidate.statusColor}40`,
                                                }}
                                            >
                                                {candidate.status}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#6b7280",
                                                    marginLeft: "0.5rem",
                                                }}
                                            >
                                                Applied {candidate.appliedDate}
                                            </span>
                                        </div>

                                        {/* Actions */}
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                paddingTop: "1rem",
                                                borderTop: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <button
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    padding: "0.5rem 1rem",
                                                    backgroundColor: "#6366f1",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "500",
                                                    cursor: "pointer",
                                                    transition: "all 0.2s ease",
                                                }}
                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#5856eb")}
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#6366f1")}
                                            >
                                                <Eye size={16} />
                                                View Profile
                                            </button>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <button
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        padding: "0.5rem",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        transition: "background-color 0.2s ease",
                                                    }}
                                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
                                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                >
                                                    <Mail size={16} color="#6b7280" />
                                                </button>
                                                <button
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        padding: "0.5rem",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        transition: "background-color 0.2s ease",
                                                    }}
                                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
                                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                >
                                                    <Download size={16} color="#6b7280" />
                                                </button>
                                                <button
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        padding: "0.5rem",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        transition: "background-color 0.2s ease",
                                                    }}
                                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
                                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                >
                                                    <MessageCircle size={16} color="#6b7280" />
                                                </button>
                                                <button
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        padding: "0.5rem",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        transition: "background-color 0.2s ease",
                                                    }}
                                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
                                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                >
                                                    <MoreVertical size={16} color="#6b7280" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* List View */}
                        {viewMode === "list" && (
                            <div
                                style={{
                                    overflowX: "auto",
                                }}
                            >
                                <table
                                    style={{
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    <thead>
                                        <tr
                                            style={{
                                                backgroundColor: "#f8fafc",
                                                borderBottom: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <th
                                                style={{
                                                    padding: "0.75rem",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    fontSize: "0.85rem",
                                                    width: "50px",
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    style={{
                                                        width: "16px",
                                                        height: "16px",
                                                        accentColor: "#6366f1",
                                                    }}
                                                />
                                            </th>
                                            <th
                                                style={{
                                                    padding: "0.75rem",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                Candidate
                                            </th>
                                            <th
                                                style={{
                                                    padding: "0.75rem",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                Education
                                            </th>
                                            <th
                                                style={{
                                                    padding: "0.75rem",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                Skills
                                            </th>
                                            <th
                                                style={{
                                                    padding: "0.75rem",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                Status
                                            </th>
                                            <th
                                                style={{
                                                    padding: "0.75rem",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                Applied Date
                                            </th>
                                            <th
                                                style={{
                                                    padding: "0.75rem",
                                                    textAlign: "center",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCandidates.map((candidate) => (
                                            <tr
                                                key={candidate.id}
                                                style={{
                                                    borderBottom: "1px solid #f3f4f6",
                                                    transition: "background-color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                            >
                                                <td style={{ padding: "1rem 0.75rem" }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedCandidates.includes(candidate.id)}
                                                        onChange={() => handleCandidateSelect(candidate.id)}
                                                        style={{
                                                            width: "16px",
                                                            height: "16px",
                                                            accentColor: "#6366f1",
                                                        }}
                                                    />
                                                </td>
                                                <td style={{ padding: "1rem 0.75rem" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                                        <img
                                                            src={candidate.avatar || "/placeholder.svg"}
                                                            alt={candidate.name}
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                                borderRadius: "50%",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                        <div>
                                                            <div style={{ fontWeight: "600", color: "#1f2937", marginBottom: "0.25rem" }}>
                                                                {candidate.name}
                                                            </div>
                                                            <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                                                                Applied for {candidate.appliedFor}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ padding: "1rem 0.75rem" }}>
                                                    <div>
                                                        <div style={{ fontWeight: "500", color: "#1f2937", marginBottom: "0.25rem" }}>
                                                            {candidate.education}
                                                        </div>
                                                        <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                                                            {candidate.college} • {candidate.graduationYear}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ padding: "1rem 0.75rem" }}>
                                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                                                        {candidate.skills.slice(0, 3).map((skill, index) => (
                                                            <span
                                                                key={index}
                                                                style={{
                                                                    padding: "0.25rem 0.5rem",
                                                                    backgroundColor: "#eff6ff",
                                                                    color: "#6366f1",
                                                                    borderRadius: "12px",
                                                                    fontSize: "0.75rem",
                                                                    fontWeight: "500",
                                                                    border: "1px solid #dbeafe",
                                                                }}
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                        {candidate.skills.length > 3 && (
                                                            <span
                                                                style={{
                                                                    padding: "0.25rem 0.5rem",
                                                                    backgroundColor: "#f3f4f6",
                                                                    color: "#6b7280",
                                                                    borderRadius: "12px",
                                                                    fontSize: "0.75rem",
                                                                    fontWeight: "500",
                                                                }}
                                                            >
                                                                +{candidate.skills.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td style={{ padding: "1rem 0.75rem" }}>
                                                    <span
                                                        style={{
                                                            padding: "0.25rem 0.75rem",
                                                            backgroundColor: `${candidate.statusColor}20`,
                                                            color: candidate.statusColor,
                                                            borderRadius: "12px",
                                                            fontSize: "0.8rem",
                                                            fontWeight: "600",
                                                            border: `1px solid ${candidate.statusColor}40`,
                                                        }}
                                                    >
                                                        {candidate.status}
                                                    </span>
                                                </td>
                                                <td style={{ padding: "1rem 0.75rem", color: "#6b7280" }}>
                                                    <div>
                                                        <div style={{ fontWeight: "500", color: "#1f2937" }}>{candidate.appliedDate}</div>
                                                        <div style={{ fontSize: "0.8rem" }}>Match: {candidate.matchScore}%</div>
                                                    </div>
                                                </td>
                                                <td style={{ padding: "1rem 0.75rem", textAlign: "center" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                                        <button
                                                            style={{
                                                                backgroundColor: "transparent",
                                                                border: "none",
                                                                padding: "0.25rem",
                                                                borderRadius: "4px",
                                                                cursor: "pointer",
                                                                transition: "background-color 0.2s ease",
                                                            }}
                                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                        >
                                                            <Eye size={16} color="#6b7280" />
                                                        </button>
                                                        <button
                                                            style={{
                                                                backgroundColor: "transparent",
                                                                border: "none",
                                                                padding: "0.25rem",
                                                                borderRadius: "4px",
                                                                cursor: "pointer",
                                                                transition: "background-color 0.2s ease",
                                                            }}
                                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                        >
                                                            <Mail size={16} color="#6b7280" />
                                                        </button>
                                                        <button
                                                            onClick={() => toggleBookmark(candidate.id)}
                                                            style={{
                                                                backgroundColor: "transparent",
                                                                border: "none",
                                                                padding: "0.25rem",
                                                                borderRadius: "4px",
                                                                cursor: "pointer",
                                                                transition: "background-color 0.2s ease",
                                                            }}
                                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                        >
                                                            <Bookmark
                                                                size={16}
                                                                color={candidate.isBookmarked ? "#6366f1" : "#6b7280"}
                                                                fill={candidate.isBookmarked ? "#6366f1" : "none"}
                                                            />
                                                        </button>
                                                        <button
                                                            style={{
                                                                backgroundColor: "transparent",
                                                                border: "none",
                                                                padding: "0.25rem",
                                                                borderRadius: "4px",
                                                                cursor: "pointer",
                                                                transition: "background-color 0.2s ease",
                                                            }}
                                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                        >
                                                            <MoreVertical size={16} color="#6b7280" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Pagination */}
                        <div
                            style={{
                                padding: "1.5rem",
                                borderTop: "1px solid #e5e7eb",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: isMobile ? "column" : "row",
                                gap: isMobile ? "1rem" : "0",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                }}
                            >
                                Showing {filteredCandidates.length} of {externalCandidates.length} job applications
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                <button
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        backgroundColor: "transparent",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        color: "#4b5563",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                >
                                    Previous
                                </button>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.25rem",
                                    }}
                                >
                                    {[1, 2, 3].map((page) => (
                                        <button
                                            key={page}
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                backgroundColor: page === 1 ? "#6366f1" : "transparent",
                                                color: page === 1 ? "white" : "#4b5563",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "6px",
                                                fontSize: "0.9rem",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (page !== 1) {
                                                    e.target.style.backgroundColor = "#f9fafb"
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (page !== 1) {
                                                    e.target.style.backgroundColor = "transparent"
                                                }
                                            }}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    style={{
                                        padding: "0.5rem 0.75rem",
                                        backgroundColor: "transparent",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        color: "#4b5563",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
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
                        maxWidth: "1400px",
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
                                India's most trusted job portal connecting fresh talent with top employers across all industries.
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
                                For Employers
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                {["Fresh Talent", "Campus Hiring", "Internship Programs", "Graduate Recruitment"].map(
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