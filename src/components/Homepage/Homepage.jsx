"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search, MapPin, Briefcase, Star, ChevronRight, Clock, Heart, Share2, TrendingUp, Users, Award, Shield, Building2, CheckCircle, Target, Globe, Bell, Filter, SortDesc, Bookmark, Eye, Download, Calendar, MapPinIcon, DollarSign, Zap, Lightbulb, Rocket, BarChart3, ArrowRight, Play, ChevronUp, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function JobPortalHomepage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [location, setLocation] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null)
    const [scrolled, setScrolled] = useState(false)

    const navigate = useNavigate();

    // Handle responsive behavior and scroll detection
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleLogin = () => {
        navigate('/signup');
    }

    const isDesktop = () => window.innerWidth >= 1024
    const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024
    const isMobile = () => window.innerWidth < 768

    const jobCategories = [
        { name: "Software Development", count: "25,847", icon: "💻", bgColor: "#eff6ff", iconColor: "#2563eb" },
        { name: "Data Science & Analytics", count: "18,234", icon: "📊", bgColor: "#f0fdf4", iconColor: "#16a34a" },
        { name: "DevOps & Cloud", count: "12,567", icon: "☁️", bgColor: "#fef2f2", iconColor: "#dc2626" },
        { name: "Cybersecurity", count: "9,876", icon: "🔒", bgColor: "#fffbeb", iconColor: "#d97706" },
        { name: "UI/UX Design", count: "15,432", icon: "🎨", bgColor: "#f3e8ff", iconColor: "#9333ea" },
        { name: "Mobile Development", count: "21,098", icon: "📱", bgColor: "#ecfdf5", iconColor: "#059669" },
        { name: "Machine Learning & AI", count: "7,654", icon: "🤖", bgColor: "#fdf2f8", iconColor: "#ec4899" },
        { name: "Quality Assurance", count: "5,321", icon: "🧪", bgColor: "#f0f9ff", iconColor: "#0ea5e9" },
    ]

    const featuredJobs = [
        {
            id: 1,
            title: "Senior Software Engineer",
            company: "Tata Consultancy Services",
            location: "Bangalore, Karnataka",
            salary: "₹15-25 LPA",
            experience: "4-8 years",
            skills: ["React", "Node.js", "AWS", "MongoDB"],
            type: "Full-time",
            posted: "2 days ago",
            applicants: "127",
            logo: "🔷",
            urgent: true,
            remote: false,
        },
        {
            id: 2,
            title: "Product Manager",
            company: "Infosys Limited",
            location: "Pune, Maharashtra",
            salary: "₹20-35 LPA",
            experience: "5-10 years",
            skills: ["Product Strategy", "Analytics", "Agile", "Leadership"],
            type: "Full-time",
            posted: "1 day ago",
            applicants: "89",
            logo: "🔶",
            urgent: false,
            remote: true,
        },
        {
            id: 3,
            title: "Data Scientist",
            company: "Wipro Technologies",
            location: "Hyderabad, Telangana",
            salary: "₹12-20 LPA",
            experience: "3-6 years",
            skills: ["Python", "Machine Learning", "SQL", "Tableau"],
            type: "Full-time",
            posted: "3 days ago",
            applicants: "156",
            logo: "🔸",
            urgent: false,
            remote: true,
        },
        {
            id: 4,
            title: "UI/UX Designer",
            company: "HCL Technologies",
            location: "Chennai, Tamil Nadu",
            salary: "₹8-15 LPA",
            experience: "2-5 years",
            skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
            type: "Full-time",
            posted: "1 day ago",
            applicants: "203",
            logo: "🔹",
            urgent: true,
            remote: false,
        },
        {
            id: 5,
            title: "DevOps Engineer",
            company: "Tech Mahindra",
            location: "Mumbai, Maharashtra",
            salary: "₹14-22 LPA",
            experience: "4-7 years",
            skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
            type: "Full-time",
            posted: "4 days ago",
            applicants: "98",
            logo: "🔺",
            urgent: false,
            remote: true,
        },
        {
            id: 6,
            title: "Business Analyst",
            company: "Accenture",
            location: "Gurgaon, Haryana",
            salary: "₹10-18 LPA",
            experience: "3-6 years",
            skills: ["Business Analysis", "SQL", "Tableau", "Process Improvement"],
            type: "Full-time",
            posted: "2 days ago",
            applicants: "174",
            logo: "🔻",
            urgent: false,
            remote: false,
        },
    ]

    const topCompanies = [
        {
            name: "Tata Consultancy Services",
            jobs: "2,847",
            logo: "🔷",
            rating: "4.1",
            employees: "500K+",
            industry: "IT Services",
        },
        { name: "Infosys", jobs: "1,923", logo: "🔶", rating: "4.0", employees: "250K+", industry: "IT Services" },
        { name: "Wipro", jobs: "1,456", logo: "🔸", rating: "3.9", employees: "200K+", industry: "IT Services" },
        { name: "HCL Technologies", jobs: "1,234", logo: "🔹", rating: "3.8", employees: "180K+", industry: "IT Services" },
        { name: "Tech Mahindra", jobs: "987", logo: "🔺", rating: "3.9", employees: "150K+", industry: "IT Services" },
        { name: "Accenture", jobs: "1,567", logo: "🔻", rating: "4.2", employees: "700K+", industry: "Consulting" },
        { name: "Cognizant", jobs: "1,098", logo: "⭐", rating: "3.7", employees: "300K+", industry: "IT Services" },
        { name: "Capgemini", jobs: "876", logo: "💎", rating: "4.0", employees: "350K+", industry: "Consulting" },
    ]

    const careerInsights = [
        {
            title: "Top 10 Highest Paying Tech Jobs in India 2024",
            category: "Salary Trends",
            readTime: "5 min read",
            image: "📊",
            excerpt:
                "Discover the most lucrative technology roles and their average compensation packages in the Indian market.",
            author: "Career Expert",
            date: "Dec 15, 2024",
        },
        {
            title: "How to Ace Your Technical Interview: A Complete Guide",
            category: "Interview Tips",
            readTime: "8 min read",
            image: "💡",
            excerpt: "Expert strategies, common questions, and preparation tips to help you succeed in technical interviews.",
            author: "HR Specialist",
            date: "Dec 12, 2024",
        },
        {
            title: "Remote Work Revolution: Building Your Perfect Home Office",
            category: "Work Life",
            readTime: "6 min read",
            image: "🏠",
            excerpt:
                "Essential tips for creating a productive and comfortable remote work environment that boosts productivity.",
            author: "Productivity Coach",
            date: "Dec 10, 2024",
        },
    ]

    const quickStats = [
        { label: "Active Jobs", value: "50,000+", icon: "💼" },
        { label: "Companies", value: "12,000+", icon: "🏢" },
        { label: "Job Seekers", value: "2M+", icon: "👥" },
        { label: "Success Stories", value: "500K+", icon: "🎉" },
    ]

    return (
        <div
            style={{
                fontFamily: "Montserrat, sans-serif",
                lineHeight: "1.6",
                color: "#1f2937",
                margin: 0,
                padding: 0,
                backgroundColor: "#ffffff",
                minHeight: "100vh",
                zoom: 0.8
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
                    height: "15vh"
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
                        height: "60px",
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
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                minWidth: 0,
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <span
                                    style={{
                                        fontSize: "1.65rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        lineHeight: "1.1",
                                        whiteSpace: "nowrap",
                                        marginLeft: "-8vw",
                                        marginTop: "1vh",
                                        cursor: "pointer",
                                    }}
                                >
                                    Talent on <span style={{ color: "#6CCED5" }}>Cloud</span>
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "#6b7280",
                                        fontWeight: "400",
                                        marginBottom: "2px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    powered by
                                </span>
                            </div>
                            <img
                                src="https://i.ibb.co/SDgt4CsH/dyn.jpg"
                                alt="Talent on Cloud"
                                style={{
                                    width: "130px",
                                    height: "35px",
                                    objectFit: "cover",
                                    marginLeft: "-10px",
                                    marginTop: "5vw",
                                }}
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div style={{ display: window.innerWidth >= 768 ? "flex" : "none", alignItems: "center", gap: "2rem" }}>
                        <nav
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2rem",
                            }}
                        >
                            {["Home", "Find Jobs", "Companies", "Talent", "Mentorship Program"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    style={{
                                        textDecoration: "none",
                                        color: "#4b5563",
                                        fontSize: "0.95rem",
                                        fontWeight: "500",
                                        padding: "0.5rem 0",
                                        transition: "color 0.2s ease",
                                        borderBottom: "2px solid transparent",
                                        marginTop: "2vw"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = "#6366f1"
                                        e.target.style.borderBottomColor = "#6366f1"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = "#4b5563"
                                        e.target.style.borderBottomColor = "transparent"
                                    }}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Auth Buttons */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                    cursor: "pointer",
                                    transition: "color 0.2s ease",
                                    padding: "0.5rem",
                                    marginTop: "2vw",
                                    whiteSpace: "nowrap"
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                                onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                            >
                                Are you an Employer?
                            </span>
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
                                    marginTop: "2vw",
                                    boxShadow: "0 2px 4px rgba(99, 102, 241, 0.2)",
                                    whiteSpace: "nowrap"
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
                                onClick={handleLogin}>
                                Sign In/ Sign Up
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div style={{ display: window.innerWidth < 768 ? "block" : "none" }}>
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
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
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
                            {["Home", "Find Jobs", "Companies", "Talent", "Mentorship Program"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    style={{
                                        textDecoration: "none",
                                        color: "#4b5563",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                        padding: "0.75rem 0",
                                        borderBottom: "1px solid #f3f4f6",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                                    onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                                >
                                    {item}
                                </a>
                            ))}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    paddingTop: "1rem",
                                    borderTop: "1px solid #f3f4f6",
                                    marginTop: "0.5rem",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        cursor: "pointer",
                                        transition: "color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                                >
                                    Are you are Employer?
                                </span>
                                <button
                                    style={{
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem",
                                        borderRadius: "8px",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "background-color 0.2s ease",
                                        marginTop: "2vw"
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#5856eb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#6366f1")}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                    padding: window.innerWidth < 768 ? "2rem 0" : "4rem 0",
                    minHeight: window.innerWidth < 768 ? "auto" : "600px",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366f1' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        opacity: 0.5,
                    }}
                />

                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        width: "100%",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: window.innerWidth < 768 ? "2rem" : "3rem",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: window.innerWidth < 768 ? "2rem" : "3.5rem",
                                fontWeight: "800",
                                color: "#1f2937",
                                marginBottom: "1rem",
                                lineHeight: "1.1",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Find Your Dream Job from{" "}
                            <span
                                style={{
                                    color: "#6366f1",
                                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                50,000+
                            </span>{" "}
                            Opportunities
                        </h1>
                        <p
                            style={{
                                fontSize: window.innerWidth < 768 ? "1rem" : "1.25rem",
                                color: "#6b7280",
                                marginBottom: "2rem",
                                maxWidth: "700px",
                                margin: "0 auto 2rem",
                                lineHeight: "1.6",
                            }}
                        >
                            Connect with top employers, discover personalized job matches, and accelerate your career growth with
                            India's most trusted job portal.
                        </p>
                    </div>

                    {/* Enhanced Search Bar */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "16px",
                            padding: window.innerWidth < 768 ? "1rem" : "1.5rem",
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            maxWidth: "900px",
                            margin: "0 auto 3rem",
                            border: "1px solid #e5e7eb",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: window.innerWidth < 768 ? "column" : "row",
                                gap: "1rem",
                                alignItems: "stretch",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#f9fafb",
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    flex: "2",
                                    border: "2px solid #e5e7eb",
                                    transition: "border-color 0.2s ease",
                                }}
                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                            >
                                <Search size={20} style={{ color: "#6b7280", marginRight: "0.75rem", flexShrink: 0 }} />
                                <input
                                    type="text"
                                    placeholder="Job title, keywords, or company name"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        border: "none",
                                        outline: "none",
                                        backgroundColor: "transparent",
                                        flex: 1,
                                        fontSize: "1rem",
                                        color: "#1f2937",
                                        fontWeight: "500",
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#f9fafb",
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    flex: "1",
                                    border: "2px solid #e5e7eb",
                                    transition: "border-color 0.2s ease",
                                }}
                                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                            >
                                <MapPin size={20} style={{ color: "#6b7280", marginRight: "0.75rem", flexShrink: 0 }} />
                                <input
                                    type="text"
                                    placeholder="City, state or remote"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    style={{
                                        border: "none",
                                        outline: "none",
                                        backgroundColor: "transparent",
                                        flex: 1,
                                        fontSize: "1rem",
                                        color: "#1f2937",
                                        fontWeight: "500",
                                    }}
                                />
                            </div>

                            <button
                                style={{
                                    backgroundColor: "#6366f1",
                                    color: "white",
                                    border: "none",
                                    padding: window.innerWidth < 768 ? "1rem 2rem" : "1rem 2.5rem",
                                    borderRadius: "12px",
                                    fontSize: "1rem",
                                    fontWeight: "700",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    whiteSpace: "nowrap",
                                    boxShadow: "0 4px 6px rgba(99, 102, 241, 0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#5856eb"
                                    e.target.style.transform = "translateY(-2px)"
                                    e.target.style.boxShadow = "0 8px 12px rgba(99, 102, 241, 0.35)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#6366f1"
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.boxShadow = "0 4px 6px rgba(99, 102, 241, 0.25)"
                                }}
                            >
                                <Search size={18} />
                                Find Jobs
                            </button>
                        </div>

                        {/* Popular Searches */}
                        <div
                            style={{
                                marginTop: "1.5rem",
                                paddingTop: "1.5rem",
                                borderTop: "1px solid #f3f4f6",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                    marginBottom: "0.75rem",
                                    fontWeight: "500",
                                }}
                            >
                                Popular Searches:
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                }}
                            >
                                {["Software Engineer", "Data Scientist", "Product Manager", "UI/UX Designer", "DevOps Engineer"].map(
                                    (term) => (
                                        <span
                                            key={term}
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "#6366f1",
                                                backgroundColor: "#eff6ff",
                                                padding: "0.4rem 0.8rem",
                                                borderRadius: "20px",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                                border: "1px solid #dbeafe",
                                                fontWeight: "500",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#6366f1"
                                                e.target.style.color = "white"
                                                e.target.style.transform = "translateY(-1px)"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#eff6ff"
                                                e.target.style.color = "#6366f1"
                                                e.target.style.transform = "translateY(0)"
                                            }}
                                        >
                                            {term}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                            gap: window.innerWidth < 768 ? "1rem" : "2rem",
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        {quickStats.map((stat, index) => (
                            <div
                                key={index}
                                style={{
                                    textAlign: "center",
                                    padding: "1.5rem 1rem",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(10px)",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "white"
                                    e.target.style.transform = "translateY(-4px)"
                                    e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.boxShadow = "none"
                                }}
                            >
                                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
                                <div
                                    style={{
                                        fontSize: window.innerWidth < 768 ? "1.5rem" : "2rem",
                                        fontWeight: "800",
                                        color: "#6366f1",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        fontWeight: "600",
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Categories */}
            <section
                style={{
                    backgroundColor: "white",
                    padding: window.innerWidth < 768 ? "3rem 0" : "5rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: window.innerWidth < 768 ? "2rem" : "4rem" }}>
                        <h2
                            style={{
                                fontSize: window.innerWidth < 768 ? "2rem" : "2.75rem",
                                fontWeight: "800",
                                color: "#1f2937",
                                marginBottom: "1rem",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Browse Jobs by <span style={{ color: "#6366f1" }}>Category</span>
                        </h2>
                        <p
                            style={{
                                fontSize: window.innerWidth < 768 ? "1rem" : "1.2rem",
                                color: "#6b7280",
                                maxWidth: "600px",
                                margin: "0 auto",
                                lineHeight: "1.6",
                            }}
                        >
                            Explore thousands of opportunities across different industries and find your perfect match
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(1, 1fr)" : "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {jobCategories.map((category, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: category.bgColor,
                                    padding: "2rem 1.5rem",
                                    borderRadius: "16px",
                                    border: "1px solid #e2e8f0",
                                    cursor: "pointer",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    textAlign: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#6366f1"
                                    e.target.style.color = "white"
                                    e.target.style.transform = "translateY(-8px) scale(1.02)"
                                    e.target.style.boxShadow = "0 20px 40px rgba(99, 102, 241, 0.3)"

                                    // Change text colors for child elements
                                    const title = e.target.querySelector("h3")
                                    const count = e.target.querySelector("p")
                                    if (title) title.style.color = "white"
                                    if (count) count.style.color = "rgba(255, 255, 255, 0.9)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = category.bgColor
                                    e.target.style.color = "#1f2937"
                                    e.target.style.transform = "translateY(0) scale(1)"
                                    e.target.style.boxShadow = "none"

                                    // Reset text colors for child elements
                                    const title = e.target.querySelector("h3")
                                    const count = e.target.querySelector("p")
                                    if (title) title.style.color = "#1f2937"
                                    if (count) count.style.color = "#6b7280"
                                }}
                            >
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: "white",
                                        borderRadius: "16px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "2rem",
                                        margin: "0 auto 1.5rem",
                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    {category.icon}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        marginBottom: "0.5rem",
                                        color: "#1f2937",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {category.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#6b7280",
                                        margin: 0,
                                        fontWeight: "600",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {category.count} Jobs
                                </p>

                                {/* Hover effect overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "1rem",
                                        right: "1rem",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease",
                                    }}
                                >
                                    <ChevronRight size={20} color="white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advanced Job Dashboard */}
            <section
                style={{
                    backgroundColor: "#f8fafc",
                    padding: window.innerWidth < 768 ? "2rem 0" : "3rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    {/* Dashboard Analytics Cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {[
                            {
                                icon: <TrendingUp size={24} color="#059669" />,
                                label: "Jobs This Week",
                                value: "1,247",
                                change: "+12%",
                                bgColor: "#ecfdf5",
                                textColor: "#059669"
                            },
                            {
                                icon: <Users size={24} color="#2563eb" />,
                                label: "Active Recruiters",
                                value: "8,934",
                                change: "+8%",
                                bgColor: "#eff6ff",
                                textColor: "#2563eb"
                            },
                            {
                                icon: <Building2 size={24} color="#dc2626" />,
                                label: "New Companies",
                                value: "342",
                                change: "+15%",
                                bgColor: "#fef2f2",
                                textColor: "#dc2626"
                            },
                            {
                                icon: <Award size={24} color="#7c2d12" />,
                                label: "Success Rate",
                                value: "89%",
                                change: "+3%",
                                bgColor: "#fef7ed",
                                textColor: "#7c2d12"
                            },
                        ].map((card, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "white",
                                    padding: "1.5rem",
                                    borderRadius: "16px",
                                    border: "1px solid #e2e8f0",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateY(-4px)"
                                    e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"
                                    e.target.style.borderColor = card.textColor
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.boxShadow = "none"
                                    e.target.style.borderColor = "#e2e8f0"
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: card.bgColor,
                                        borderRadius: "0 16px 0 50px",
                                        opacity: 0.3,
                                    }}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "0.5rem",
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    {card.icon}
                                    <span
                                        style={{
                                            fontSize: "0.8rem",
                                            color: card.textColor,
                                            backgroundColor: card.bgColor,
                                            padding: "0.25rem 0.5rem",
                                            borderRadius: "12px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {card.change}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        fontSize: "1.75rem",
                                        fontWeight: "800",
                                        color: "#1f2937",
                                        marginBottom: "0.25rem",
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    {card.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.85rem",
                                        color: "#6b7280",
                                        fontWeight: "600",
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    {card.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Developer Analytics Section */}
            <section
                style={{
                    backgroundColor: "#f3f4f6",
                    padding: window.innerWidth < 768 ? "2rem 0" : "3rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "1.5rem" : "2.25rem",
                            fontWeight: "800",
                            color: "#1f2937",
                            marginBottom: "2rem",
                            textAlign: "center",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Analytics for Top Developer Roles
                    </h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
                            gap: "2rem",
                        }}
                    >
                        {/* Java Developers */}
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "2rem 1.5rem",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                                textAlign: "center",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>☕</div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1f2937", marginBottom: "0.5rem" }}>Java Developers</h3>
                            <p style={{ fontSize: "1.1rem", color: "#6366f1", fontWeight: "800", marginBottom: "0.5rem" }}>8,200+ Jobs</p>
                            <p style={{ fontSize: "0.95rem", color: "#6b7280", marginBottom: "1rem" }}>Avg. Salary: ₹10-18 LPA</p>
                            <div style={{ fontSize: "0.9rem", color: "#059669", fontWeight: "600" }}>+9% YoY Growth</div>
                        </div>
                        {/* Python Developers */}
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "2rem 1.5rem",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                                textAlign: "center",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🐍</div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1f2937", marginBottom: "0.5rem" }}>Python Developers</h3>
                            <p style={{ fontSize: "1.1rem", color: "#6366f1", fontWeight: "800", marginBottom: "0.5rem" }}>7,500+ Jobs</p>
                            <p style={{ fontSize: "0.95rem", color: "#6b7280", marginBottom: "1rem" }}>Avg. Salary: ₹11-20 LPA</p>
                            <div style={{ fontSize: "0.9rem", color: "#059669", fontWeight: "600" }}>+11% YoY Growth</div>
                        </div>
                        {/* React Developers */}
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "2rem 1.5rem",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                                textAlign: "center",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚛️</div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1f2937", marginBottom: "0.5rem" }}>React Developers</h3>
                            <p style={{ fontSize: "1.1rem", color: "#6366f1", fontWeight: "800", marginBottom: "0.5rem" }}>6,900+ Jobs</p>
                            <p style={{ fontSize: "0.95rem", color: "#6b7280", marginBottom: "1rem" }}>Avg. Salary: ₹9-17 LPA</p>
                            <div style={{ fontSize: "0.9rem", color: "#059669", fontWeight: "600" }}>+13% YoY Growth</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Featured Jobs with Filters */}
            <section
                style={{
                    backgroundColor: "white",
                    padding: window.innerWidth < 768 ? "3rem 0" : "5rem 0",
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
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: window.innerWidth < 768 ? "flex-start" : "center",
                            marginBottom: window.innerWidth < 768 ? "2rem" : "4rem",
                            flexDirection: window.innerWidth < 768 ? "column" : "row",
                            gap: window.innerWidth < 768 ? "1rem" : "0",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    fontSize: window.innerWidth < 768 ? "2rem" : "2.75rem",
                                    fontWeight: "800",
                                    color: "#1f2937",
                                    marginBottom: "1rem",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                <span style={{ color: "#6366f1" }}>Featured</span> Jobs
                            </h2>
                            <p
                                style={{
                                    fontSize: window.innerWidth < 768 ? "1rem" : "1.2rem",
                                    color: "#6b7280",
                                    margin: 0,
                                    lineHeight: "1.6",
                                }}
                            >
                                Hand-picked opportunities from top companies hiring now
                            </p>
                        </div>
                        <button
                            style={{
                                backgroundColor: "transparent",
                                color: "#6366f1",
                                border: "2px solid #6366f1",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "12px",
                                fontSize: "1rem",
                                fontWeight: "700",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#6366f1"
                                e.target.style.color = "white"
                                e.target.style.transform = "translateY(-2px)"
                                e.target.style.boxShadow = "0 8px 16px rgba(99, 102, 241, 0.3)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent"
                                e.target.style.color = "#6366f1"
                                e.target.style.transform = "translateY(0)"
                                e.target.style.boxShadow = "none"
                            }}
                        >
                            View All Jobs <ChevronRight size={18} />
                        </button>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(1, 1fr)" : "repeat(auto-fit, minmax(380px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {featuredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                style={{
                                    backgroundColor: "white",
                                    padding: "2rem",
                                    borderRadius: "16px",
                                    border: "1px solid #e2e8f0",
                                    cursor: "pointer",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)"
                                    e.target.style.transform = "translateY(-4px)"
                                    e.target.style.borderColor = "#6366f1"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "none"
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.borderColor = "#e2e8f0"
                                }}
                            >
                                {/* Urgent Badge */}
                                {job.urgent && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "1rem",
                                            right: "1rem",
                                            backgroundColor: "#ef4444",
                                            color: "white",
                                            padding: "0.25rem 0.75rem",
                                            borderRadius: "20px",
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        Urgent
                                    </div>
                                )}
                                {/* Job Header */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem",
                                            flex: 1,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                backgroundColor: "#f0f9ff",
                                                borderRadius: "12px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "1.75rem",
                                                border: "1px solid #e0f2fe",
                                            }}
                                        >
                                            {job.logo}
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <h3
                                                style={{
                                                    fontSize: "1.25rem",
                                                    fontWeight: "700",
                                                    color: "#1f2937",
                                                    margin: "0 0 0.5rem 0",
                                                    lineHeight: "1.3",
                                                }}
                                            >
                                                {job.title}
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: "1rem",
                                                    color: "#6b7280",
                                                    margin: 0,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {job.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.5rem",
                                            marginLeft: "1rem",
                                        }}
                                    >
                                        <button
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                border: "1px solid #e5e7eb",
                                                backgroundColor: "white",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#6366f1"
                                                e.target.style.borderColor = "#6366f1"
                                                e.target.querySelector("svg").style.color = "white"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "white"
                                                e.target.style.borderColor = "#e5e7eb"
                                                e.target.querySelector("svg").style.color = "#6b7280"
                                            }}
                                        >
                                            <Heart size={16} color="#6b7280" />
                                        </button>
                                        <button
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                border: "1px solid #e5e7eb",
                                                backgroundColor: "white",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#6366f1"
                                                e.target.style.borderColor = "#6366f1"
                                                e.target.querySelector("svg").style.color = "white"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "white"
                                                e.target.style.borderColor = "#e5e7eb"
                                                e.target.querySelector("svg").style.color = "#6b7280"
                                            }}
                                        >
                                            <Share2 size={16} color="#6b7280" />
                                        </button>
                                    </div>
                                </div>

                                {/* Job Details */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "1rem",
                                        marginBottom: "1.5rem",
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <MapPin size={16} />
                                        <span style={{ fontWeight: "500" }}>{job.location}</span>
                                        {job.remote && (
                                            <span
                                                style={{
                                                    backgroundColor: "#dcfce7",
                                                    color: "#166534",
                                                    padding: "0.25rem 0.5rem",
                                                    borderRadius: "12px",
                                                    fontSize: "0.75rem",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                Remote
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <Briefcase size={16} />
                                        <span style={{ fontWeight: "500" }}>{job.experience}</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <Clock size={16} />
                                        <span style={{ fontWeight: "500" }}>{job.posted}</span>
                                    </div>
                                </div>

                                {/* Salary and Type */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: "800",
                                            color: "#059669",
                                        }}
                                    >
                                        {job.salary}
                                    </span>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <span
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "#6366f1",
                                                backgroundColor: "#ede9fe",
                                                padding: "0.4rem 0.8rem",
                                                borderRadius: "20px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {job.type}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "#6b7280",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {job.applicants} applicants
                                        </span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    {job.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "#4b5563",
                                                backgroundColor: "#f9fafb",
                                                padding: "0.4rem 0.8rem",
                                                borderRadius: "20px",
                                                border: "1px solid #e5e7eb",
                                                fontWeight: "500",
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#6366f1"
                                                e.target.style.color = "white"
                                                e.target.style.borderColor = "#6366f1"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#f9fafb"
                                                e.target.style.color = "#4b5563"
                                                e.target.style.borderColor = "#e5e7eb"
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Apply Button */}
                                <button
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.875rem",
                                        borderRadius: "12px",
                                        fontSize: "1rem",
                                        fontWeight: "700",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#5856eb"
                                        e.target.style.transform = "translateY(-1px)"
                                        e.target.style.boxShadow = "0 4px 8px rgba(99, 102, 241, 0.3)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#6366f1"
                                        e.target.style.transform = "translateY(0)"
                                        e.target.style.boxShadow = "none"
                                    }}
                                >
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Companies */}
            <section
                style={{
                    backgroundColor: "white",
                    padding: window.innerWidth < 768 ? "3rem 0" : "5rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: window.innerWidth < 768 ? "2rem" : "4rem" }}>
                        <h2
                            style={{
                                fontSize: window.innerWidth < 768 ? "2rem" : "2.75rem",
                                fontWeight: "800",
                                color: "#1f2937",
                                marginBottom: "1rem",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Top Companies <span style={{ color: "#6366f1" }}>Hiring Now</span>
                        </h2>
                        <p
                            style={{
                                fontSize: window.innerWidth < 768 ? "1rem" : "1.2rem",
                                color: "#6b7280",
                                maxWidth: "600px",
                                margin: "0 auto",
                                lineHeight: "1.6",
                            }}
                        >
                            Join thousands of professionals at leading organizations across India
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(1, 1fr)" : "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {topCompanies.map((company, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#f8fafc",
                                    padding: "2rem",
                                    borderRadius: "16px",
                                    border: "1px solid #e2e8f0",
                                    cursor: "pointer",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "white"
                                    e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)"
                                    e.target.style.transform = "translateY(-4px)"
                                    e.target.style.borderColor = "#6366f1"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#f8fafc"
                                    e.target.style.boxShadow = "none"
                                    e.target.style.transform = "translateY(0)"
                                    e.target.style.borderColor = "#e2e8f0"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "white",
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.75rem",
                                            border: "1px solid #e5e7eb",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                                        }}
                                    >
                                        {company.logo}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3
                                            style={{
                                                fontSize: "1.2rem",
                                                fontWeight: "700",
                                                color: "#1f2937",
                                                margin: "0 0 0.5rem 0",
                                                lineHeight: "1.3",
                                            }}
                                        >
                                            {company.name}
                                        </h3>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                marginBottom: "0.25rem",
                                            }}
                                        >
                                            <Star size={16} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                                            <span
                                                style={{
                                                    fontSize: "0.9rem",
                                                    color: "#6b7280",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {company.rating}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#9ca3af",
                                                }}
                                            >
                                                • {company.employees}
                                            </span>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "#6b7280",
                                                margin: 0,
                                                fontWeight: "500",
                                            }}
                                        >
                                            {company.industry}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#6366f1",
                                            fontWeight: "700",
                                            margin: 0,
                                        }}
                                    >
                                        {company.jobs} Jobs
                                    </p>
                                    <button
                                        style={{
                                            backgroundColor: "transparent",
                                            color: "#6366f1",
                                            border: "1px solid #6366f1",
                                            padding: "0.5rem 1rem",
                                            borderRadius: "8px",
                                            fontSize: "0.85rem",
                                            fontWeight: "600",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
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
                                        View Jobs
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: window.innerWidth < 768 ? "2rem" : "3rem" }}>
                        <button
                            style={{
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                padding: "1rem 2rem",
                                borderRadius: "12px",
                                fontSize: "1rem",
                                fontWeight: "700",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 6px rgba(99, 102, 241, 0.25)",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#5856eb"
                                e.target.style.transform = "translateY(-2px)"
                                e.target.style.boxShadow = "0 8px 12px rgba(99, 102, 241, 0.35)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#6366f1"
                                e.target.style.transform = "translateY(0)"
                                e.target.style.boxShadow = "0 4px 6px rgba(99, 102, 241, 0.25)"
                            }}
                        >
                            View All Companies
                        </button>
                    </div>
                </div>
            </section>

            {/* Career Insights */}
            <section
                style={{
                    backgroundColor: "#f8fafc",
                    padding: window.innerWidth < 768 ? "3rem 0" : "5rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: window.innerWidth < 768 ? "2rem" : "4rem" }}>
                        <h2
                            style={{
                                fontSize: window.innerWidth < 768 ? "2rem" : "2.75rem",
                                fontWeight: "800",
                                color: "#1f2937",
                                marginBottom: "1rem",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Career <span style={{ color: "#6366f1" }}>Insights</span>
                        </h2>
                        <p
                            style={{
                                fontSize: window.innerWidth < 768 ? "1rem" : "1.2rem",
                                color: "#6b7280",
                                maxWidth: "600px",
                                margin: "0 auto",
                                lineHeight: "1.6",
                            }}
                        >
                            Expert advice, industry trends, and career guidance to help you succeed
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(1, 1fr)" : "repeat(auto-fit, minmax(350px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {careerInsights.map((insight, index) => (
                            <article
                                key={index}
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    border: "1px solid #e2e8f0",
                                    cursor: "pointer",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    position: "relative",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)"
                                    e.target.style.transform = "translateY(-6px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "none"
                                    e.target.style.transform = "translateY(0)"
                                }}
                            >
                                <div
                                    style={{
                                        height: "220px",
                                        background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "4rem",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
                                        }}
                                    />
                                    <div style={{ position: "relative", zIndex: 1 }}>{insight.image}</div>
                                </div>
                                <div style={{ padding: "2rem" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "#6366f1",
                                                fontWeight: "700",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.5px",
                                                backgroundColor: "#eff6ff",
                                                padding: "0.4rem 0.8rem",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            {insight.category}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "#6b7280",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {insight.readTime}
                                        </span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: "700",
                                            color: "#1f2937",
                                            marginBottom: "1rem",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        {insight.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#6b7280",
                                            lineHeight: "1.6",
                                            marginBottom: "1.5rem",
                                        }}
                                    >
                                        {insight.excerpt}
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            paddingTop: "1rem",
                                            borderTop: "1px solid #f3f4f6",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                            }}
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
                                                    fontSize: "0.8rem",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {insight.author.charAt(0)}
                                            </div>
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: "0.85rem",
                                                        fontWeight: "600",
                                                        color: "#1f2937",
                                                    }}
                                                >
                                                    {insight.author}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "0.75rem",
                                                        color: "#6b7280",
                                                    }}
                                                >
                                                    {insight.date}
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            style={{
                                                backgroundColor: "transparent",
                                                color: "#6366f1",
                                                border: "none",
                                                padding: "0.5rem",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                                fontSize: "0.85rem",
                                                fontWeight: "600",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#eff6ff"
                                                e.target.style.transform = "translateX(2px)"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "transparent"
                                                e.target.style.transform = "translateX(0)"
                                            }}
                                        >
                                            Read More <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", marginTop: window.innerWidth < 768 ? "2rem" : "3rem" }}>
                        <button
                            style={{
                                backgroundColor: "transparent",
                                color: "#6366f1",
                                border: "2px solid #6366f1",
                                padding: "1rem 2rem",
                                borderRadius: "12px",
                                fontSize: "1rem",
                                fontWeight: "700",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#6366f1"
                                e.target.style.color = "white"
                                e.target.style.transform = "translateY(-2px)"
                                e.target.style.boxShadow = "0 8px 16px rgba(99, 102, 241, 0.3)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent"
                                e.target.style.color = "#6366f1"
                                e.target.style.transform = "translateY(0)"
                                e.target.style.boxShadow = "none"
                            }}
                        >
                            Read More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    padding: window.innerWidth < 768 ? "3rem 0" : "5rem 0",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        opacity: 0.3,
                    }}
                />

                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        textAlign: "center",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "2rem" : "3rem",
                            fontWeight: "800",
                            marginBottom: "1rem",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Ready to Take the Next Step?
                    </h2>
                    <p
                        style={{
                            fontSize: window.innerWidth < 768 ? "1.1rem" : "1.3rem",
                            marginBottom: "2.5rem",
                            opacity: "0.95",
                            maxWidth: "700px",
                            margin: "0 auto 2.5rem",
                            lineHeight: "1.6",
                        }}
                    >
                        Join millions of job seekers who trust Talent on Cloud to find their perfect career match. Start your
                        journey today!
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            flexDirection: window.innerWidth < 768 ? "column" : "row",
                            alignItems: "center",
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: "white",
                                color: "#6366f1",
                                border: "none",
                                padding: "1rem 2.5rem",
                                borderRadius: "12px",
                                fontSize: "1.1rem",
                                fontWeight: "700",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                minWidth: window.innerWidth < 768 ? "100%" : "auto",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#f8fafc"
                                e.target.style.transform = "translateY(-3px)"
                                e.target.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "white"
                                e.target.style.transform = "translateY(0)"
                                e.target.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"
                            }}
                        >
                            Create Your Profile
                        </button>
                        <button
                            style={{
                                backgroundColor: "transparent",
                                color: "white",
                                border: "2px solid white",
                                padding: "1rem 2.5rem",
                                borderRadius: "12px",
                                fontSize: "1.1rem",
                                fontWeight: "700",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                minWidth: window.innerWidth < 768 ? "100%" : "auto",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "white"
                                e.target.style.color = "#6366f1"
                                e.target.style.transform = "translateY(-3px)"
                                e.target.style.boxShadow = "0 8px 16px rgba(255,255,255,0.2)"
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent"
                                e.target.style.color = "white"
                                e.target.style.transform = "translateY(0)"
                                e.target.style.boxShadow = "none"
                            }}
                        >
                            Upload Resume
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    padding: window.innerWidth < 768 ? "2rem 0 1rem" : "4rem 0 2rem",
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
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(1, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: window.innerWidth < 768 ? "2rem" : "3rem",
                            marginBottom: window.innerWidth < 768 ? "2rem" : "3rem",
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
                                {["Browse Jobs", "Job Alerts", "Resume Builder", "Career Advice", "Salary Guide", "Interview Tips"].map(
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
                                        flexDirection: window.innerWidth < 768 ? "column" : "row",
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
                            flexDirection: window.innerWidth < 768 ? "column" : "row",
                            gap: window.innerWidth < 768 ? "1rem" : "0",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "0.95rem",
                                color: "#9ca3af",
                                margin: 0,
                                textAlign: window.innerWidth < 768 ? "center" : "left",
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
                                justifyContent: window.innerWidth < 768 ? "center" : "flex-end",
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