"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    Search,
    Filter,
    MapPin,
    Briefcase,
    Clock,
    DollarSign,
    Building,
    Users,
    Calendar,
    Star,
    Bookmark,
    Share2,
    ChevronRight,
    Bell,
    User,
    ChevronDown,
    CheckCircle,
} from "lucide-react"

export default function AllJobs() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [locationFilter, setLocationFilter] = useState("")
    const [selectedJob, setSelectedJob] = useState(null)
    const [bookmarkedJobs, setBookmarkedJobs] = useState([])
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

    // Sample jobs data
    const jobs = [
        {
            id: "1",
            title: "Senior Software Engineer",
            company: "TechCorp Solutions",
            companyLogo: "/placeholder.svg?height=60&width=60",
            location: "Bangalore, India",
            workType: "Full-time",
            workMode: "Hybrid",
            salary: "₹15-25 LPA",
            experience: "4-7 years",
            postedDate: "2 days ago",
            applicants: 45,
            description:
                "We are looking for a Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining scalable web applications using modern technologies.",
            requirements: [
                "Bachelor's degree in Computer Science or related field",
                "4+ years of experience in software development",
                "Proficiency in React, Node.js, and TypeScript",
                "Experience with cloud platforms (AWS/Azure)",
                "Strong problem-solving and communication skills",
            ],
            skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"],
            benefits: [
                "Health Insurance",
                "Flexible Working Hours",
                "Learning & Development",
                "Performance Bonus",
                "Work from Home",
            ],
            companySize: "500-1000 employees",
            industry: "Technology",
            rating: 4.2,
            reviews: 156,
            isUrgent: false,
            isFeatured: true,
            applicationDeadline: "15 Dec 2024",
        },
        {
            id: "2",
            title: "Product Manager",
            company: "Innovate Labs",
            companyLogo: "/placeholder.svg?height=60&width=60",
            location: "Mumbai, India",
            workType: "Full-time",
            workMode: "Remote",
            salary: "₹20-30 LPA",
            experience: "5-8 years",
            postedDate: "1 day ago",
            applicants: 32,
            description:
                "Join our product team to drive innovation and strategy. You'll work closely with engineering, design, and business teams to deliver exceptional products that delight our customers.",
            requirements: [
                "MBA or equivalent experience in product management",
                "5+ years of product management experience",
                "Experience with Agile methodologies",
                "Strong analytical and data-driven mindset",
                "Excellent communication and leadership skills",
            ],
            skills: ["Product Strategy", "Agile", "Analytics", "Roadmapping", "Jira", "Figma"],
            benefits: [
                "Stock Options",
                "Health Insurance",
                "Flexible PTO",
                "Remote Work",
                "Learning Budget",
                "Gym Membership",
            ],
            companySize: "200-500 employees",
            industry: "Fintech",
            rating: 4.5,
            reviews: 89,
            isUrgent: true,
            isFeatured: false,
            applicationDeadline: "20 Dec 2024",
        },
        {
            id: "3",
            title: "Data Scientist",
            company: "DataTech Analytics",
            companyLogo: "/placeholder.svg?height=60&width=60",
            location: "Hyderabad, India",
            workType: "Full-time",
            workMode: "On-site",
            salary: "₹18-28 LPA",
            experience: "3-6 years",
            postedDate: "3 days ago",
            applicants: 67,
            description:
                "We're seeking a talented Data Scientist to join our analytics team. You'll work on cutting-edge machine learning projects and help drive data-driven decision making across the organization.",
            requirements: [
                "Master's degree in Data Science, Statistics, or related field",
                "3+ years of experience in data science",
                "Proficiency in Python, R, and SQL",
                "Experience with machine learning frameworks",
                "Strong statistical analysis skills",
            ],
            skills: ["Python", "R", "SQL", "Machine Learning", "TensorFlow", "Tableau", "Statistics"],
            benefits: ["Health Insurance", "Research Budget", "Conference Attendance", "Flexible Hours", "Meal Allowance"],
            companySize: "1000+ employees",
            industry: "Analytics",
            rating: 4.1,
            reviews: 234,
            isUrgent: false,
            isFeatured: true,
            applicationDeadline: "25 Dec 2024",
        },
        {
            id: "4",
            title: "UX/UI Designer",
            company: "Creative Studio X",
            companyLogo: "/placeholder.svg?height=60&width=60",
            location: "Pune, India",
            workType: "Full-time",
            workMode: "Hybrid",
            salary: "₹12-18 LPA",
            experience: "2-5 years",
            postedDate: "4 days ago",
            applicants: 28,
            description:
                "Join our design team to create beautiful and intuitive user experiences. You'll work on diverse projects ranging from web applications to mobile apps, collaborating with product and engineering teams.",
            requirements: [
                "Bachelor's degree in Design or related field",
                "2+ years of UX/UI design experience",
                "Proficiency in Figma, Sketch, and Adobe Creative Suite",
                "Strong portfolio demonstrating design thinking",
                "Understanding of user-centered design principles",
            ],
            skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
            benefits: ["Creative Freedom", "Design Tools Budget", "Health Insurance", "Flexible Hours", "Team Outings"],
            companySize: "50-200 employees",
            industry: "Design Agency",
            rating: 4.3,
            reviews: 67,
            isUrgent: false,
            isFeatured: false,
            applicationDeadline: "30 Dec 2024",
        },
        {
            id: "5",
            title: "DevOps Engineer",
            company: "CloudBridge Solutions",
            companyLogo: "/placeholder.svg?height=60&width=60",
            location: "Chennai, India",
            workType: "Full-time",
            workMode: "Remote",
            salary: "₹16-24 LPA",
            experience: "3-6 years",
            postedDate: "5 days ago",
            applicants: 41,
            description:
                "We're looking for a DevOps Engineer to help us scale our infrastructure and improve our deployment processes. You'll work with cutting-edge cloud technologies and automation tools.",
            requirements: [
                "Bachelor's degree in Computer Science or related field",
                "3+ years of DevOps experience",
                "Experience with AWS/Azure and Kubernetes",
                "Proficiency in CI/CD tools and automation",
                "Strong scripting skills (Python, Bash)",
            ],
            skills: ["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform", "Python", "Monitoring"],
            benefits: ["Cloud Certifications", "Health Insurance", "Remote Work", "Learning Budget", "Performance Bonus"],
            companySize: "500-1000 employees",
            industry: "Cloud Services",
            rating: 4.4,
            reviews: 123,
            isUrgent: true,
            isFeatured: true,
            applicationDeadline: "18 Dec 2024",
        },
        {
            id: "6",
            title: "Marketing Manager",
            company: "BrandBoost Agency",
            companyLogo: "/placeholder.svg?height=60&width=60",
            location: "Delhi, India",
            workType: "Full-time",
            workMode: "Hybrid",
            salary: "₹14-20 LPA",
            experience: "4-7 years",
            postedDate: "1 week ago",
            applicants: 52,
            description:
                "Lead our marketing initiatives and drive brand growth. You'll develop and execute comprehensive marketing strategies across digital and traditional channels.",
            requirements: [
                "MBA in Marketing or equivalent experience",
                "4+ years of marketing experience",
                "Experience with digital marketing and analytics",
                "Strong project management skills",
                "Creative thinking and strategic mindset",
            ],
            skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics", "Social Media", "PPC"],
            benefits: ["Marketing Budget", "Health Insurance", "Flexible Hours", "Team Events", "Professional Development"],
            companySize: "100-500 employees",
            industry: "Marketing",
            rating: 4.0,
            reviews: 78,
            isUrgent: false,
            isFeatured: false,
            applicationDeadline: "22 Dec 2024",
        },
    ]

    const jobCategories = [
        { id: "all", name: "All Jobs", count: jobs.length },
        { id: "technology", name: "Technology", count: 3 },
        { id: "design", name: "Design", count: 1 },
        { id: "marketing", name: "Marketing", count: 1 },
        { id: "analytics", name: "Analytics", count: 1 },
    ]

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesLocation = locationFilter === "" || job.location.toLowerCase().includes(locationFilter.toLowerCase())

        const matchesCategory =
            activeFilter === "all" ||
            (activeFilter === "technology" && job.industry === "Technology") ||
            (activeFilter === "design" && job.industry === "Design Agency") ||
            (activeFilter === "marketing" && job.industry === "Marketing") ||
            (activeFilter === "analytics" && job.industry === "Analytics")

        return matchesSearch && matchesLocation && matchesCategory
    })

    const toggleBookmark = (jobId) => {
        setBookmarkedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
    }

    const handleJobClick = (job) => {
        setSelectedJob(job)
        alert('working');
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
                        >
                        </div>
                        <div
                            style={{
                                fontSize: isMobile ? "1.25rem" : "1.5rem",
                                fontWeight: "700",
                                color: "#1f2937",
                            }}
                        >
                            Talent on <span style={{ color: "#7C7FF3" }}>Cloud</span>
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
                                    color: "#3b82f6",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    padding: "0.5rem 0",
                                    borderBottom: "2px solid #3b82f6",
                                }}
                            >
                                Find Jobs
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
                                onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                            >
                                Company Reviews
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
                                onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                            >
                                Salary Guide
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
                                onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                            >
                                Career Advice
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
                                    backgroundColor: "#3b82f6",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                }}
                            >
                                <User size={16} />
                            </div>
                            {!isMobile && (
                                <>
                                    <span style={{ fontSize: "0.9rem", fontWeight: "500", color: "#4b5563" }}>John Doe</span>
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
                        {/* Mobile Navigation */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#3b82f6",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    padding: "0.75rem",
                                    backgroundColor: "#eff6ff",
                                    borderRadius: "8px",
                                }}
                            >
                                Find Jobs
                            </a>
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#4b5563",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    padding: "0.75rem",
                                    borderRadius: "8px",
                                    transition: "background-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                Company Reviews
                            </a>
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#4b5563",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    padding: "0.75rem",
                                    borderRadius: "8px",
                                    transition: "background-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                Salary Guide
                            </a>
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#4b5563",
                                    fontSize: "0.95rem",
                                    fontWeight: "500",
                                    padding: "0.75rem",
                                    borderRadius: "8px",
                                    transition: "background-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                Career Advice
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* Search Section */}
            <section
                style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: isMobile ? "2rem 1rem" : "3rem 1rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            fontSize: isMobile ? "2rem" : "3rem",
                            fontWeight: "700",
                            marginBottom: "1rem",
                            margin: 0,
                        }}
                    >
                        Find Your Dream Job
                    </h1>
                    <p
                        style={{
                            fontSize: isMobile ? "1rem" : "1.25rem",
                            marginBottom: "2rem",
                            opacity: 0.9,
                        }}
                    >
                        Discover thousands of job opportunities from top companies across India
                    </p>

                    {/* Search Form */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            padding: "1rem",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                flex: 1,
                                width: "100%",
                            }}
                        >
                            <Search
                                size={20}
                                style={{
                                    position: "absolute",
                                    left: "12px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "#6b7280",
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Job title, keywords, or company"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 0.75rem 0.75rem 3rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    color: "#1f2937",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                position: "relative",
                                flex: 1,
                                width: "100%",
                            }}
                        >
                            <MapPin
                                size={20}
                                style={{
                                    position: "absolute",
                                    left: "12px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "#6b7280",
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 0.75rem 0.75rem 3rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    outline: "none",
                                    color: "#1f2937",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>

                        <button
                            style={{
                                backgroundColor: "#3b82f6",
                                color: "white",
                                border: "none",
                                padding: "0.75rem 2rem",
                                borderRadius: "8px",
                                fontSize: "1rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "background-color 0.2s ease",
                                whiteSpace: "nowrap",
                                width: isMobile ? "100%" : "auto",
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
                        >
                            Search Jobs
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: isMobile ? "1rem" : "2rem",
                    display: "flex",
                    gap: "2rem",
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                {/* Sidebar Filters */}
                {!isMobile && (
                    <aside
                        style={{
                            width: "300px",
                            backgroundColor: "white",
                            borderRadius: "12px",
                            padding: "1.5rem",
                            border: "1px solid #e5e7eb",
                            height: "fit-content",
                            position: "sticky",
                            top: "90px",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "1.25rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Filter Jobs
                        </h3>

                        {/* Job Categories */}
                        <div style={{ marginBottom: "2rem" }}>
                            <h4
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#374151",
                                    marginBottom: "1rem",
                                }}
                            >
                                Categories
                            </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {jobCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveFilter(category.id)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "0.75rem",
                                            backgroundColor: activeFilter === category.id ? "#eff6ff" : "transparent",
                                            color: activeFilter === category.id ? "#3b82f6" : "#4b5563",
                                            border: "none",
                                            borderRadius: "8px",
                                            fontSize: "0.9rem",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            textAlign: "left",
                                            width: "100%",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeFilter !== category.id) {
                                                e.target.style.backgroundColor = "#f9fafb"
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeFilter !== category.id) {
                                                e.target.style.backgroundColor = "transparent"
                                            }
                                        }}
                                    >
                                        <span>{category.name}</span>
                                        <span
                                            style={{
                                                backgroundColor: activeFilter === category.id ? "#3b82f6" : "#e5e7eb",
                                                color: activeFilter === category.id ? "white" : "#6b7280",
                                                padding: "0.25rem 0.5rem",
                                                borderRadius: "12px",
                                                fontSize: "0.8rem",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Filters */}
                        <div style={{ marginBottom: "2rem" }}>
                            <h4
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#374151",
                                    marginBottom: "1rem",
                                }}
                            >
                                Quick Filters
                            </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <label
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        fontSize: "0.9rem",
                                        color: "#4b5563",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input type="checkbox" style={{ accentColor: "#3b82f6" }} />
                                    Remote Jobs
                                </label>
                                <label
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        fontSize: "0.9rem",
                                        color: "#4b5563",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input type="checkbox" style={{ accentColor: "#3b82f6" }} />
                                    Urgent Hiring
                                </label>
                                <label
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        fontSize: "0.9rem",
                                        color: "#4b5563",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input type="checkbox" style={{ accentColor: "#3b82f6" }} />
                                    Featured Jobs
                                </label>
                                <label
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        fontSize: "0.9rem",
                                        color: "#4b5563",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input type="checkbox" style={{ accentColor: "#3b82f6" }} />
                                    High Salary
                                </label>
                            </div>
                        </div>
                    </aside>
                )}

                {/* Job Listings */}
                <div style={{ flex: 1 }}>
                    {/* Results Header */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "1.5rem",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "1rem" : "0",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    fontSize: isMobile ? "1.5rem" : "1.75rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                {filteredJobs.length} Jobs Found
                            </h2>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                    margin: 0,
                                }}
                            >
                                Showing the best opportunities for you
                            </p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
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
                                <option>Sort by: Relevance</option>
                                <option>Sort by: Date Posted</option>
                                <option>Sort by: Salary</option>
                                <option>Sort by: Company</option>
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
                                    color: "#4b5563",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                <Filter size={16} />
                                Filters
                            </button>
                        </div>
                    </div>

                    {/* Job Cards */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => handleJobClick(job)}
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)"
                                    e.target.style.transform = "translateY(-2px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"
                                    e.target.style.transform = "translateY(0)"
                                }}
                            >
                                {/* Job Badges */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "1rem",
                                        right: "1rem",
                                        display: "flex",
                                        gap: "0.5rem",
                                    }}
                                >
                                    {job.isUrgent && (
                                        <span
                                            style={{
                                                backgroundColor: "#fef3c7",
                                                color: "#d97706",
                                                padding: "0.25rem 0.5rem",
                                                borderRadius: "12px",
                                                fontSize: "0.75rem",
                                                fontWeight: "600",
                                                border: "1px solid #fbbf24",
                                            }}
                                        >
                                            Urgent
                                        </span>
                                    )}
                                    {job.isFeatured && (
                                        <span
                                            style={{
                                                backgroundColor: "#dbeafe",
                                                color: "#2563eb",
                                                padding: "0.25rem 0.5rem",
                                                borderRadius: "12px",
                                                fontSize: "0.75rem",
                                                fontWeight: "600",
                                                border: "1px solid #93c5fd",
                                            }}
                                        >
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Job Header */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "1rem",
                                        marginBottom: "1rem",
                                        paddingRight: "6rem",
                                    }}
                                >
                                    <img
                                        src={job.companyLogo || "/placeholder.svg"}
                                        alt={job.company}
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "8px",
                                            objectFit: "cover",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <h3
                                            style={{
                                                fontSize: "1.25rem",
                                                fontWeight: "700",
                                                color: "#1f2937",
                                                marginBottom: "0.5rem",
                                                lineHeight: "1.3",
                                            }}
                                        >
                                            {job.title}
                                        </h3>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "1.1rem",
                                                    fontWeight: "600",
                                                    color: "#3b82f6",
                                                }}
                                            >
                                                {job.company}
                                            </span>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.25rem",
                                                }}
                                            >
                                                <Star size={14} color="#fbbf24" fill="#fbbf24" />
                                                <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                                                    {job.rating} ({job.reviews} reviews)
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "1rem",
                                                flexWrap: "wrap",
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                <MapPin size={14} />
                                                {job.location}
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                <Briefcase size={14} />
                                                {job.experience}
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                <Clock size={14} />
                                                {job.workType} • {job.workMode}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#4b5563",
                                        lineHeight: "1.6",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    {job.description}
                                </p>

                                {/* Skills */}
                                <div style={{ marginBottom: "1rem" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        {job.skills.slice(0, 6).map((skill, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    padding: "0.25rem 0.75rem",
                                                    backgroundColor: "#f0f9ff",
                                                    color: "#0369a1",
                                                    borderRadius: "12px",
                                                    fontSize: "0.8rem",
                                                    fontWeight: "500",
                                                    border: "1px solid #e0f2fe",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {job.skills.length > 6 && (
                                            <span
                                                style={{
                                                    padding: "0.25rem 0.75rem",
                                                    backgroundColor: "#f3f4f6",
                                                    color: "#6b7280",
                                                    borderRadius: "12px",
                                                    fontSize: "0.8rem",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                +{job.skills.length - 6} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Job Footer */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        paddingTop: "1rem",
                                        borderTop: "1px solid #f3f4f6",
                                        flexDirection: isMobile ? "column" : "row",
                                        gap: isMobile ? "1rem" : "0",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1.5rem",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                                fontSize: "1rem",
                                                fontWeight: "600",
                                                color: "#059669",
                                            }}
                                        >
                                            <DollarSign size={16} />
                                            {job.salary}
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <Users size={14} />
                                            {job.applicants} applicants
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <Calendar size={14} />
                                            Posted {job.postedDate}
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                        }}
                                    >
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleBookmark(job.id)
                                            }}
                                            style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                padding: "0.5rem",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                transition: "background-color 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                        >
                                            <Bookmark
                                                size={18}
                                                color={bookmarkedJobs.includes(job.id) ? "#3b82f6" : "#6b7280"}
                                                fill={bookmarkedJobs.includes(job.id) ? "#3b82f6" : "none"}
                                            />
                                        </button>

                                        <button
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                padding: "0.5rem",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                transition: "background-color 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                        >
                                            <Share2 size={18} color="#6b7280" />
                                        </button>

                                        <button
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                backgroundColor: "#3b82f6",
                                                color: "white",
                                                border: "none",
                                                padding: "0.75rem 1.5rem",
                                                borderRadius: "8px",
                                                fontSize: "0.9rem",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
                                        >
                                            Apply Now
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "3rem",
                            gap: "0.5rem",
                        }}
                    >
                        <button
                            style={{
                                padding: "0.75rem 1rem",
                                backgroundColor: "transparent",
                                border: "1px solid #d1d5db",
                                borderRadius: "8px",
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
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: page === 1 ? "#3b82f6" : "transparent",
                                    color: page === 1 ? "white" : "#4b5563",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
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
                        <button
                            style={{
                                padding: "0.75rem 1rem",
                                backgroundColor: "transparent",
                                border: "1px solid #d1d5db",
                                borderRadius: "8px",
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
            </main>

            {/* Job Detail Modal */}
            {selectedJob && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 2000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                    }}
                    onClick={() => setSelectedJob(null)}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            maxWidth: "800px",
                            width: "100%",
                            maxHeight: "90vh",
                            overflow: "auto",
                            position: "relative",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div
                            style={{
                                padding: "2rem",
                                borderBottom: "1px solid #e5e7eb",
                                position: "sticky",
                                top: 0,
                                backgroundColor: "white",
                                borderRadius: "12px 12px 0 0",
                            }}
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    backgroundColor: "transparent",
                                    border: "none",
                                    padding: "0.5rem",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    transition: "background-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                            >
                                <X size={24} color="#6b7280" />
                            </button>

                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                                <img
                                    src={selectedJob.companyLogo || "/placeholder.svg"}
                                    alt={selectedJob.company}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "12px",
                                        objectFit: "cover",
                                        border: "1px solid #e5e7eb",
                                    }}
                                />
                                <div>
                                    <h2
                                        style={{
                                            fontSize: "1.75rem",
                                            fontWeight: "700",
                                            color: "#1f2937",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {selectedJob.title}
                                    </h2>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "1.25rem",
                                                fontWeight: "600",
                                                color: "#3b82f6",
                                            }}
                                        >
                                            {selectedJob.company}
                                        </span>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                            }}
                                        >
                                            <Star size={16} color="#fbbf24" fill="#fbbf24" />
                                            <span style={{ fontSize: "1rem", color: "#6b7280" }}>
                                                {selectedJob.rating} ({selectedJob.reviews} reviews)
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem",
                                            flexWrap: "wrap",
                                            fontSize: "1rem",
                                            color: "#6b7280",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                            <MapPin size={16} />
                                            {selectedJob.location}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                            <Briefcase size={16} />
                                            {selectedJob.experience}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                            <DollarSign size={16} />
                                            {selectedJob.salary}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                <button
                                    style={{
                                        backgroundColor: "#3b82f6",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem 2rem",
                                        borderRadius: "8px",
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
                                >
                                    Apply Now
                                </button>
                                <button
                                    onClick={() => toggleBookmark(selectedJob.id)}
                                    style={{
                                        backgroundColor: bookmarkedJobs.includes(selectedJob.id) ? "#eff6ff" : "transparent",
                                        color: bookmarkedJobs.includes(selectedJob.id) ? "#3b82f6" : "#6b7280",
                                        border: "1px solid #d1d5db",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <Bookmark size={16} fill={bookmarkedJobs.includes(selectedJob.id) ? "#3b82f6" : "none"} />
                                    {bookmarkedJobs.includes(selectedJob.id) ? "Saved" : "Save Job"}
                                </button>
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "#6b7280",
                                        border: "1px solid #d1d5db",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                >
                                    <Share2 size={16} />
                                    Share
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div style={{ padding: "2rem" }}>
                            {/* Job Overview */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Job Overview
                                </h3>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                                        gap: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: "1rem",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <div style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.25rem" }}>Work Type</div>
                                        <div style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937" }}>
                                            {selectedJob.workType} • {selectedJob.workMode}
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            padding: "1rem",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <div style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.25rem" }}>Company Size</div>
                                        <div style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937" }}>
                                            {selectedJob.companySize}
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            padding: "1rem",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <div style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.25rem" }}>Industry</div>
                                        <div style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937" }}>{selectedJob.industry}</div>
                                    </div>
                                    <div
                                        style={{
                                            padding: "1rem",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <div style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.25rem" }}>
                                            Application Deadline
                                        </div>
                                        <div style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937" }}>
                                            {selectedJob.applicationDeadline}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Job Description */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Job Description
                                </h3>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#4b5563",
                                        lineHeight: "1.7",
                                    }}
                                >
                                    {selectedJob.description}
                                </p>
                            </div>

                            {/* Requirements */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Requirements
                                </h3>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    {selectedJob.requirements.map((requirement, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "0.5rem",
                                                marginBottom: "0.75rem",
                                                fontSize: "1rem",
                                                color: "#4b5563",
                                                lineHeight: "1.6",
                                            }}
                                        >
                                            <CheckCircle size={16} color="#10b981" style={{ marginTop: "0.125rem", flexShrink: 0 }} />
                                            {requirement}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Skills */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Required Skills
                                </h3>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                    }}
                                >
                                    {selectedJob.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                padding: "0.5rem 1rem",
                                                backgroundColor: "#eff6ff",
                                                color: "#2563eb",
                                                borderRadius: "12px",
                                                fontSize: "0.9rem",
                                                fontWeight: "500",
                                                border: "1px solid #dbeafe",
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Benefits & Perks
                                </h3>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                                        gap: "0.75rem",
                                    }}
                                >
                                    {selectedJob.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                padding: "0.75rem",
                                                backgroundColor: "#f0fdf4",
                                                borderRadius: "8px",
                                                border: "1px solid #dcfce7",
                                                fontSize: "0.9rem",
                                                color: "#166534",
                                            }}
                                        >
                                            <CheckCircle size={16} color="#16a34a" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Company Info */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    About {selectedJob.company}
                                </h3>
                                <div
                                    style={{
                                        padding: "1.5rem",
                                        backgroundColor: "#f8fafc",
                                        borderRadius: "12px",
                                        border: "1px solid #e5e7eb",
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
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <Building size={16} />
                                            {selectedJob.industry}
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <Users size={16} />
                                            {selectedJob.companySize}
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <Star size={16} color="#fbbf24" fill="#fbbf24" />
                                            {selectedJob.rating} ({selectedJob.reviews} reviews)
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#4b5563",
                                            lineHeight: "1.6",
                                            margin: 0,
                                        }}
                                    >
                                        {selectedJob.company} is a leading company in the {selectedJob.industry.toLowerCase()} industry,
                                        committed to innovation and excellence. We provide a collaborative work environment where talented
                                        professionals can grow their careers and make a meaningful impact.
                                    </p>
                                </div>
                            </div>

                            {/* Application Stats */}
                            <div
                                style={{
                                    padding: "1.5rem",
                                    backgroundColor: "#fef3c7",
                                    borderRadius: "12px",
                                    border: "1px solid #fbbf24",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "1.1rem",
                                        fontWeight: "600",
                                        color: "#92400e",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    ⚡ {selectedJob.applicants} people have already applied
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#a16207",
                                    }}
                                >
                                    Application deadline: {selectedJob.applicationDeadline}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    padding: isMobile ? "2rem 0 1rem" : "3rem 0 2rem",
                    marginTop: "4rem",
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
                                Job<span style={{ color: "#3b82f6" }}>Portal</span>
                            </div>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#d1d5db",
                                    lineHeight: "1.7",
                                    marginBottom: "2rem",
                                }}
                            >
                                India's leading job portal connecting talented professionals with top companies across all industries.
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
                                {["Browse Jobs", "Career Advice", "Resume Builder", "Salary Guide", "Interview Tips"].map(
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
                                                    e.target.style.color = "#3b82f6"
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
                                {["Post Jobs", "Search Resumes", "Employer Branding", "Recruitment Solutions", "Pricing"].map(
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
                                                    e.target.style.color = "#3b82f6"
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
                                {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "About Us"].map((item, index) => (
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
                                                e.target.style.color = "#3b82f6"
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
                            © 2024 Talent On Cloud. All rights reserved. Made with ❤️ in India.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}