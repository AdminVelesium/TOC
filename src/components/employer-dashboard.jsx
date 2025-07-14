"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    Plus,
    Bell,
    Search,
    Filter,
    Eye,
    Edit3,
    Trash2,
    BarChart3,
    Users,
    FileText,
    Settings,
    TrendingUp,
    TrendingDown,
    Calendar,
    MapPin,
    Clock,
    Target,
    ChevronDown,
} from "lucide-react"

export default function EmployerDashboard() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("dashboard")

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

    // Sample data
    const statsData = [
        {
            title: "Total Job Posts",
            value: "24",
            change: "+3",
            changeType: "positive",
            description: "Active Jobs",
            icon: <FileText size={24} />,
        },
        {
            title: "Total Applicants",
            value: "1,234",
            change: "+18%",
            changeType: "positive",
            description: "New applicants this month",
            icon: <Users size={24} />,
        },
        {
            title: "Avg. Days to Hire",
            value: "28",
            change: "-2 days",
            changeType: "positive",
            description: "Avg. across all hires",
            icon: <Clock size={24} />,
        },
        {
            title: "Interviews Scheduled",
            value: "12",
            change: "Same",
            changeType: "neutral",
            description: "Upcoming interviews",
            icon: <Calendar size={24} />,
        },
    ]

    const pipelineData = [
        { stage: "New Applications", count: 450, percentage: 100 },
        { stage: "Screening", count: 280, percentage: 62 },
        { stage: "Interview", count: 120, percentage: 27 },
        { stage: "Offer Extended", count: 45, percentage: 10 },
        { stage: "Hired", count: 15, percentage: 3 },
    ]

    const jobPostsData = [
        {
            id: "JP001",
            title: "Senior Software Engineer",
            status: "Active",
            applicants: 125,
            views: 3450,
            location: "Bangalore",
            posted: "2 days ago",
        },
        {
            id: "JP002",
            title: "Product Manager",
            status: "Active",
            applicants: 89,
            views: 2800,
            location: "Mumbai",
            posted: "5 days ago",
        },
        {
            id: "JP003",
            title: "UX/UI Designer",
            status: "Paused",
            applicants: 60,
            views: 1900,
            location: "Delhi",
            posted: "1 week ago",
        },
        {
            id: "JP004",
            title: "Data Scientist",
            status: "Active",
            applicants: 95,
            views: 3100,
            location: "Hyderabad",
            posted: "3 days ago",
        },
        {
            id: "JP005",
            title: "Marketing Specialist",
            status: "Closed",
            applicants: 45,
            views: 1500,
            location: "Pune",
            posted: "2 weeks ago",
        },
    ]

    const recentActivities = [
        {
            icon: "👤",
            text: "Alice Johnson applied for Senior Software Engineer position",
            time: "5 minutes ago",
            type: "application",
        },
        {
            icon: "📋",
            text: "New job post 'Frontend Developer' was published",
            time: "30 minutes ago",
            type: "job_post",
        },
        {
            icon: "🔒",
            text: "Interview scheduled with Sam White for Product Manager role",
            time: "1 hour ago",
            type: "interview",
        },
        {
            icon: "📅",
            text: "Henry King was hired for Data Scientist position",
            time: "3 hours ago",
            type: "hire",
        },
        {
            icon: "📊",
            text: "Weekly recruitment report generated",
            time: "Yesterday",
            type: "report",
        },
    ]

    const navigationItems = [
        { id: "dashboard", name: "Dashboard", icon: <BarChart3 size={20} /> },
        { id: "job-posts", name: "Job Posts", icon: <FileText size={20} /> },
        { id: "applicants", name: "Applicants", icon: <Users size={20} /> },
        { id: "candidates", name: "Candidate Management", icon: <Target size={20} /> },
        { id: "settings", name: "Settings", icon: <Settings size={20} /> },
    ]

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
                                    color: "#6366f1",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    padding: "0.5rem 0",
                                    borderBottom: "2px solid #6366f1",
                                }}
                            >
                                Overview
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
                                Candidates
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
                                Reports
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
                                    placeholder="Search jobs, applicants..."
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

                        {/* Post Job Button */}
                        <button
                            style={{
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                padding: isMobile ? "0.5rem" : "0.6rem 1.2rem",
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
                            {!isMobile && "Post New Job"}
                        </button>

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
                                JS
                            </div>
                            {!isMobile && (
                                <>
                                    <span style={{ fontSize: "0.9rem", fontWeight: "500", color: "#4b5563" }}>John Smith</span>
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
                                placeholder="Search jobs, applicants..."
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
                                    onClick={() => setActiveTab(item.id)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.75rem",
                                        backgroundColor: activeTab === item.id ? "#eff6ff" : "transparent",
                                        color: activeTab === item.id ? "#6366f1" : "#4b5563",
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
                                    onClick={() => setActiveTab(item.id)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.75rem 1rem",
                                        backgroundColor: activeTab === item.id ? "#eff6ff" : "transparent",
                                        color: activeTab === item.id ? "#6366f1" : "#4b5563",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontSize: "0.95rem",
                                        fontWeight: activeTab === item.id ? "600" : "500",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        textAlign: "left",
                                        width: "100%",
                                        marginBottom: "0.5rem",
                                        borderLeft: activeTab === item.id ? "3px solid #6366f1" : "3px solid transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeTab !== item.id) {
                                            e.target.style.backgroundColor = "#f9fafb"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeTab !== item.id) {
                                            e.target.style.backgroundColor = "transparent"
                                        }
                                    }}
                                >
                                    {item.icon}
                                    {item.name}
                                </button>
                            ))}
                        </nav>
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
                        <h1
                            style={{
                                fontSize: isMobile ? "1.75rem" : "2rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Employer Dashboard
                        </h1>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#6b7280",
                                margin: 0,
                            }}
                        >
                            Monitor your recruitment activities and manage job postings
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {statsData.map((stat, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                                    e.target.style.transform = "translateY(-2px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"
                                    e.target.style.transform = "translateY(0)"
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
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            backgroundColor: "#eff6ff",
                                            borderRadius: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#6366f1",
                                        }}
                                    >
                                        {stat.icon}
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                            fontSize: "0.85rem",
                                            fontWeight: "600",
                                            color:
                                                stat.changeType === "positive"
                                                    ? "#10b981"
                                                    : stat.changeType === "negative"
                                                        ? "#ef4444"
                                                        : "#6b7280",
                                        }}
                                    >
                                        {stat.changeType === "positive" && <TrendingUp size={14} />}
                                        {stat.changeType === "negative" && <TrendingDown size={14} />}
                                        {stat.change}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {stat.title}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.8rem",
                                        color: "#6b7280",
                                    }}
                                >
                                    {stat.description}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts and Analytics */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
                            gap: "1.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {/* Applicant Pipeline */}
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        margin: 0,
                                    }}
                                >
                                    Applicant Pipeline
                                </h3>
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "1px solid #d1d5db",
                                        padding: "0.5rem",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                >
                                    <Filter size={16} color="#6b7280" />
                                </button>
                            </div>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Number of applicants in each stage of the hiring process
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                {pipelineData.map((item, index) => (
                                    <div key={index}>
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
                                                    fontSize: "0.9rem",
                                                    fontWeight: "500",
                                                    color: "#1f2937",
                                                }}
                                            >
                                                {item.stage}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#6366f1",
                                                }}
                                            >
                                                {item.count}
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
                                                    width: `${item.percentage}%`,
                                                    height: "100%",
                                                    backgroundColor: "#6366f1",
                                                    borderRadius: "4px",
                                                    transition: "width 0.3s ease",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "1.5rem",
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
                                }}
                            >
                                Quick Actions
                            </h3>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                {[
                                    { icon: <Plus size={16} />, text: "Post New Job", color: "#6366f1" },
                                    { icon: <Users size={16} />, text: "View All Applicants", color: "#10b981" },
                                    { icon: <Calendar size={16} />, text: "Schedule Interview", color: "#f59e0b" },
                                    { icon: <BarChart3 size={16} />, text: "Generate Report", color: "#8b5cf6" },
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            padding: "0.75rem",
                                            backgroundColor: "transparent",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                            fontSize: "0.9rem",
                                            fontWeight: "500",
                                            color: "#1f2937",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            textAlign: "left",
                                            width: "100%",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#f9fafb"
                                            e.target.style.borderColor = action.color
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent"
                                            e.target.style.borderColor = "#e5e7eb"
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: action.color,
                                            }}
                                        >
                                            {action.icon}
                                        </div>
                                        {action.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Job Posts Table */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            padding: "1.5rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            marginBottom: "2rem",
                        }}
                    >
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
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    margin: 0,
                                }}
                            >
                                Recent Job Posts
                            </h3>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "1px solid #d1d5db",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        fontWeight: "500",
                                        color: "#4b5563",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                >
                                    <Filter size={16} />
                                    Filter
                                </button>
                                <button
                                    style={{
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#5856eb")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#6366f1")}
                                >
                                    View All
                                </button>
                            </div>
                        </div>

                        {/* Table */}
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
                                            }}
                                        >
                                            Job Title
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
                                            Applicants
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
                                            Views
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
                                            Location
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
                                    {jobPostsData.map((job, index) => (
                                        <tr
                                            key={job.id}
                                            style={{
                                                borderBottom: "1px solid #f3f4f6",
                                                transition: "background-color 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                        >
                                            <td
                                                style={{
                                                    padding: "1rem 0.75rem",
                                                }}
                                            >
                                                <div>
                                                    <div
                                                        style={{
                                                            fontWeight: "600",
                                                            color: "#1f2937",
                                                            marginBottom: "0.25rem",
                                                        }}
                                                    >
                                                        {job.title}
                                                    </div>
                                                    <div
                                                        style={{
                                                            fontSize: "0.8rem",
                                                            color: "#6b7280",
                                                        }}
                                                    >
                                                        {job.id} • Posted {job.posted}
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    padding: "1rem 0.75rem",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        padding: "0.25rem 0.75rem",
                                                        borderRadius: "12px",
                                                        fontSize: "0.8rem",
                                                        fontWeight: "600",
                                                        backgroundColor:
                                                            job.status === "Active" ? "#dcfce7" : job.status === "Paused" ? "#fef3c7" : "#fee2e2",
                                                        color:
                                                            job.status === "Active" ? "#166534" : job.status === "Paused" ? "#92400e" : "#dc2626",
                                                    }}
                                                >
                                                    {job.status}
                                                </span>
                                            </td>
                                            <td
                                                style={{
                                                    padding: "1rem 0.75rem",
                                                    fontWeight: "600",
                                                    color: "#1f2937",
                                                }}
                                            >
                                                {job.applicants}
                                            </td>
                                            <td
                                                style={{
                                                    padding: "1rem 0.75rem",
                                                    color: "#6b7280",
                                                }}
                                            >
                                                {job.views.toLocaleString()}
                                            </td>
                                            <td
                                                style={{
                                                    padding: "1rem 0.75rem",
                                                    color: "#6b7280",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.25rem",
                                                    }}
                                                >
                                                    <MapPin size={14} />
                                                    {job.location}
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    padding: "1rem 0.75rem",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "0.5rem",
                                                    }}
                                                >
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
                                                        <Edit3 size={16} color="#6b7280" />
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
                                                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#fee2e2")}
                                                        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                                    >
                                                        <Trash2 size={16} color="#ef4444" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Recent Activities and Promotion Banner */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
                            gap: "1.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {/* Recent Activities */}
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                padding: "1.5rem",
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
                                }}
                            >
                                Recent Activities
                            </h3>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                {recentActivities.map((activity, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "0.75rem",
                                            padding: "0.75rem",
                                            borderRadius: "8px",
                                            transition: "background-color 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                                        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                                    >
                                        <div
                                            style={{
                                                fontSize: "1.25rem",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {activity.icon}
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <p
                                                style={{
                                                    fontSize: "0.9rem",
                                                    color: "#1f2937",
                                                    marginBottom: "0.25rem",
                                                    lineHeight: "1.4",
                                                }}
                                            >
                                                {activity.text}
                                            </p>
                                            <p
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#6b7280",
                                                    margin: 0,
                                                }}
                                            >
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Promotion Banner */}
                        <div
                            style={{
                                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                minHeight: "300px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "3rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                🚀
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    marginBottom: "0.75rem",
                                    margin: 0,
                                }}
                            >
                                Optimize Your Recruitment
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    opacity: 0.9,
                                    marginBottom: "1.5rem",
                                    lineHeight: "1.5",
                                }}
                            >
                                Discover advanced features to streamline your hiring process and find the best talent faster.
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
                            >
                                Learn More
                            </button>
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
                                India's most trusted job portal connecting talented professionals with top employers across all
                                industries.
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
                                {["Post Jobs", "Search Resumes", "Employer Branding", "Recruitment Solutions"].map((item, index) => (
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