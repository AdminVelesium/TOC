"use client"

import { useState, useEffect } from "react"
import Logo from "./Logo"
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

// Helper to map backend candidate profile to name
function extractCandidateName(data) {
    if (!data) return '';
    const pi = data.personalInfo || {};
    return `${pi.firstName || ''} ${pi.lastName || ''}`.trim() || pi.email || 'User';
}

export default function AllJobs() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [locationFilter, setLocationFilter] = useState("")
    const [selectedJob, setSelectedJob] = useState(null)
    const [bookmarkedJobs, setBookmarkedJobs] = useState([])
    const [activeFilter, setActiveFilter] = useState("all")
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // State for candidate name
    const [candidateName, setCandidateName] = useState('');
    const [candidateLoading, setCandidateLoading] = useState(true);

    // Fetch candidate name on mount
    useEffect(() => {
        setCandidateLoading(true);
        fetch('https://toc-bac-1.onrender.com/api/candidate-profile')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch candidate profile');
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    const latest = data[data.length - 1];
                    setCandidateName(extractCandidateName(latest));
                } else {
                    setCandidateName('User');
                }
                setCandidateLoading(false);
            })
            .catch(() => {
                setCandidateName('User');
                setCandidateLoading(false);
            });
    }, []);

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

    // Fetch jobs from backend (job.js via /jobposting/jobs-alt)
    useEffect(() => {
        setLoading(true);
        fetch('https://toc-bac-1.onrender.com/api/jobs/alljobs')
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log('Fetched jobs from backend:', data);
                if (!Array.isArray(data)) {
                    setError('Jobs API did not return an array.');
                    setJobs([]);
                } else if (data.length === 0) {
                    setError('No jobs found.');
                    setJobs([]);
                } else {
                    setJobs(
                        data.map(job => ({
                            id: job.id || job._id,
                            title: job.title || job.jobTitle,
                            company: job.company || job.companyName,
                            companyLogo: job.companyLogo || "/placeholder.svg?height=60&width=60",
                            location: job.location,
                            workType: job.workType || "Full-time",
                            workMode: job.workMode || "On-site",
                            salary: job.salary || "Not specified",
                            experience: job.experience || job.experienceLevel || "2+ years",
                            postedDate: job.postedDate || "",
                            applicants: job.applicants || 0,
                            description: job.description || "",
                            requirements: Array.isArray(job.requirements) ? job.requirements : [],
                            skills: Array.isArray(job.skills) ? job.skills : [],
                            benefits: Array.isArray(job.benefits) ? job.benefits : [],
                            companySize: job.companySize || "51-200",
                            industry: job.industry || "Technology",
                            rating: job.rating || 4.2,
                            reviews: job.reviews || 50,
                            isUrgent: !!job.isUrgent,
                            isFeatured: !!job.isFeatured,
                            applicationDeadline: job.applicationDeadline || "",
                        }))
                    );
                    setError(null);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setJobs([]);
                setLoading(false);
            });
    }, []);
    // Update jobCategories to use jobs from state
    const jobCategories = [
        { id: "all", name: "All Jobs", count: jobs.length },
        { id: "technology", name: "Technology", count: jobs.filter(j => j.industry === "Technology").length },
        { id: "design", name: "Design", count: jobs.filter(j => j.industry === "Design Agency").length },
        { id: "marketing", name: "Marketing", count: jobs.filter(j => j.industry === "Marketing").length },
        { id: "analytics", name: "Analytics", count: jobs.filter(j => j.industry === "Analytics").length },
    ]

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (job.skills && job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())))

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
                    height: "110px",
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
                    <Logo />

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
                                    <span style={{ fontSize: "0.9rem", fontWeight: "500", color: "#4b5563" }}>
                                        {candidateLoading ? '...' : candidateName}
                                    </span>
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
                        {loading ? (
                            <div style={{ textAlign: 'center', margin: '2rem 0' }}>Loading jobs...</div>
                        ) : error ? (
                            <div style={{ textAlign: 'center', color: 'red', margin: '2rem 0' }}>{error}</div>
                        ) : filteredJobs.length === 0 ? (
                            <div style={{ textAlign: 'center', margin: '2rem 0' }}>No jobs available.</div>
                        ) : (
                            filteredJobs.map((job) => (
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
                                            src={job.companyLogo}
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
                                    {Array.isArray(job.skills) && job.skills.length > 0 && (
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
                                    )}

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
                                                {job.salary.replace('$', '₹')}
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
                            ))
                        )}
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
                                    // Use the backend-provided companyLogo, which is either a data URL or '/static/placeholder-logo.png'
                                    src={selectedJob.companyLogo}
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
                                            {selectedJob.salary.replace('$', '₹')}
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
                                {Array.isArray(selectedJob.requirements) && selectedJob.requirements.length > 0 ? (
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
                                ) : (
                                    <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: "1.7" }}>
                                        {(() => {
                                            const title = selectedJob.title ? selectedJob.title.toLowerCase() : "";
                                            if (title.includes("frontend")) {
                                                return "To excel as a Frontend Developer, you should have experience with modern JavaScript frameworks, responsive design, and cross-browser compatibility.";
                                            } else if (title.includes("backend")) {
                                                return "A Backend Developer should be skilled in server-side languages, database management, and API development.";
                                            } else if (title.includes("designer")) {
                                                return "A Designer should have a strong portfolio, proficiency in design tools, and a keen eye for detail.";
                                            } else if (title.includes("marketing")) {
                                                return "A Marketing Specialist should have experience in digital campaigns, analytics, and content creation.";
                                            } else if (title.includes("analyst")) {
                                                return "An Analyst should be comfortable with data analysis, reporting tools, and critical thinking.";
                                            } else {
                                                return `To succeed in this role, you should have relevant experience and skills as a ${selectedJob.title || "professional"}.`;
                                            }
                                        })()}
                                    </p>
                                )}
                            </div>

                            {/* Required Key Skills */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Required Key Skills
                                </h3>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                    }}
                                >
                                    {Array.isArray(selectedJob.skills) && selectedJob.skills.length > 0 ? (
                                        selectedJob.skills.map((skill, index) => (
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
                                        ))
                                    ) : (
                                        <span style={{ color: "#6b7280" }}>No key skills specified.</span>
                                    )}
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
                                    {Array.isArray(selectedJob.benefits) && selectedJob.benefits.map((benefit, index) => (
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
