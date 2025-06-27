"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    Search,
    Filter,
    Plus,
    Bell,
    User,
    Users,
    Settings,
    LogOut,
    Eye,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Star,
    MoreVertical,
    ChevronDown,
    Grid,
    List,
    Download,
    Share2,
    Heart,
} from "lucide-react"

export default function InternalCandidates() {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("available")
    const [viewMode, setViewMode] = useState("table")
    const [selectedCandidates, setSelectedCandidates] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

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

    // Sample candidates data
    const candidates = [
        {
            id: "1",
            name: "Alice Johnson",
            email: "alice.johnson@company.com",
            phone: "+1 (555) 123-4567",
            role: "Senior Software Engineer",
            department: "Engineering",
            skills: ["React", "Node.js", "AWS", "TypeScript", "Python"],
            status: "Available",
            statusColor: "#10b981",
            experience: "8 years",
            location: "San Francisco, CA",
            joinDate: "2019-03-15",
            rating: 4.8,
            projects: 12,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "2 hours ago",
            availability: "Immediate",
        },
        {
            id: "2",
            name: "Robert Smith",
            email: "robert.smith@company.com",
            phone: "+1 (555) 234-5678",
            role: "Product Manager",
            department: "Product",
            skills: ["Agile", "Market Research", "Jira", "Roadmapping", "Analytics"],
            status: "Engaged",
            statusColor: "#3b82f6",
            experience: "10 years",
            location: "New York, NY",
            joinDate: "2017-08-22",
            rating: 4.9,
            projects: 18,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "1 day ago",
            availability: "2 weeks notice",
        },
        {
            id: "3",
            name: "Emily Chen",
            email: "emily.chen@company.com",
            phone: "+1 (555) 345-6789",
            role: "Data Scientist",
            department: "Analytics",
            skills: ["Python", "SQL", "Machine Learning", "Tableau", "R"],
            status: "Available",
            statusColor: "#10b981",
            experience: "6 years",
            location: "Boston, MA",
            joinDate: "2020-01-10",
            rating: 4.7,
            projects: 9,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "30 minutes ago",
            availability: "Immediate",
        },
        {
            id: "4",
            name: "David Lee",
            email: "david.lee@company.com",
            phone: "+1 (555) 456-7890",
            role: "UX/UI Designer",
            department: "Design",
            skills: ["Figma", "Sketch", "User Research", "Prototyping", "Adobe XD"],
            status: "Not Interested",
            statusColor: "#ef4444",
            experience: "4 years",
            location: "Los Angeles, CA",
            joinDate: "2021-06-05",
            rating: 4.5,
            projects: 7,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "1 week ago",
            availability: "Not available",
        },
        {
            id: "5",
            name: "Sarah Parker",
            email: "sarah.parker@company.com",
            phone: "+1 (555) 567-8901",
            role: "DevOps Engineer",
            department: "Engineering",
            skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS"],
            status: "Soft Locked",
            statusColor: "#f59e0b",
            experience: "7 years",
            location: "Austin, TX",
            joinDate: "2018-11-12",
            rating: 4.6,
            projects: 14,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "3 days ago",
            availability: "1 month notice",
        },
        {
            id: "6",
            name: "Michael Brown",
            email: "michael.brown@company.com",
            phone: "+1 (555) 678-9012",
            role: "Business Analyst",
            department: "Operations",
            skills: ["SQL", "Data Modeling", "Requirements Gathering", "Power BI", "Excel"],
            status: "Available",
            statusColor: "#10b981",
            experience: "5 years",
            location: "Chicago, IL",
            joinDate: "2020-09-18",
            rating: 4.4,
            projects: 11,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "1 hour ago",
            availability: "Immediate",
        },
    ]

    const statusTabs = [
        { id: "available", name: "Available", count: 3 },
        { id: "soft-locked", name: "Soft Locked", count: 1 },
        { id: "assigned", name: "Assigned to Client", count: 1 },
        { id: "not-interested", name: "Not Interested", count: 1 },
    ]

    const navigationItems = [
        { id: "internal", name: "Internal Candidates", icon: <User size={20} />, active: true },
        { id: "external", name: "External Candidates", icon: <Users size={20} /> },
        { id: "contractors", name: "Contractors", icon: <Briefcase size={20} /> },
        { id: "alumni", name: "Alumni Network", icon: <Star size={20} /> },
    ]

    const filteredCandidates = candidates.filter((candidate) => {
        const matchesSearch =
            candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesStatus =
            activeTab === "available"
                ? candidate.status === "Available"
                : activeTab === "soft-locked"
                    ? candidate.status === "Soft Locked"
                    : activeTab === "assigned"
                        ? candidate.status === "Assigned to Client"
                        : activeTab === "not-interested"
                            ? candidate.status === "Not Interested"
                            : true

        return matchesSearch && matchesStatus
    })

    const handleCandidateSelect = (candidateId) => {
        setSelectedCandidates((prev) =>
            prev.includes(candidateId) ? prev.filter((id) => id !== candidateId) : [...prev, candidateId],
        )
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
                                    color: "#6366f1",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    padding: "0.5rem 0",
                                    borderBottom: "2px solid #6366f1",
                                }}
                            >
                                Internal Candidates
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
                                External Apps
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
                                Other Companies
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
                                    placeholder="Search candidates..."
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
                                placeholder="Search candidates..."
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
                        <h1
                            style={{
                                fontSize: isMobile ? "1.75rem" : "2rem",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Internal Candidates Overview
                        </h1>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#6b7280",
                                margin: 0,
                            }}
                        >
                            A comprehensive view of your internal talent pool, categorized by their current status.
                        </p>
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
                                    <option>React</option>
                                    <option>Python</option>
                                    <option>AWS</option>
                                    <option>Node.js</option>
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
                                    <option>All Departments</option>
                                    <option>Engineering</option>
                                    <option>Product</option>
                                    <option>Design</option>
                                    <option>Analytics</option>
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
                                    <option>All Experience</option>
                                    <option>0-2 years</option>
                                    <option>3-5 years</option>
                                    <option>5+ years</option>
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
                                        onClick={() => setViewMode("table")}
                                        style={{
                                            padding: "0.5rem",
                                            backgroundColor: viewMode === "table" ? "white" : "transparent",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        <List size={16} color={viewMode === "table" ? "#6366f1" : "#6b7280"} />
                                    </button>
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
                                </div>

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
                                    Add Candidate
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Status Tabs */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                            marginBottom: "1.5rem",
                            overflowX: "auto",
                            paddingBottom: "0.5rem",
                        }}
                    >
                        {statusTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.75rem 1rem",
                                    backgroundColor: activeTab === tab.id ? "#6366f1" : "#f3f4f6",
                                    color: activeTab === tab.id ? "white" : "#4b5563",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    whiteSpace: "nowrap",
                                }}
                                onMouseEnter={(e) => {
                                    if (activeTab !== tab.id) {
                                        e.target.style.backgroundColor = "#e5e7eb"
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeTab !== tab.id) {
                                        e.target.style.backgroundColor = "#f3f4f6"
                                    }
                                }}
                            >
                                {tab.name}
                                <span
                                    style={{
                                        backgroundColor: activeTab === tab.id ? "rgba(255,255,255,0.2)" : "#d1d5db",
                                        color: activeTab === tab.id ? "white" : "#6b7280",
                                        padding: "0.25rem 0.5rem",
                                        borderRadius: "12px",
                                        fontSize: "0.8rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    {tab.count}
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
                        {/* Table Header */}
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
                                    Candidate Profiles
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    {filteredCandidates.length} candidates found
                                </p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                {selectedCandidates.length > 0 && (
                                    <>
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
                                            <Download size={16} />
                                            Export
                                        </button>
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
                                            <Share2 size={16} />
                                            Share
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Table/Grid Content */}
                        {viewMode === "table" ? (
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
                                                Role & Department
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
                                                Experience
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
                                                <td
                                                    style={{
                                                        padding: "1rem 0.75rem",
                                                    }}
                                                >
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
                                                <td
                                                    style={{
                                                        padding: "1rem 0.75rem",
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
                                                                width: "40px",
                                                                height: "40px",
                                                                borderRadius: "50%",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                        <div>
                                                            <div
                                                                style={{
                                                                    fontWeight: "600",
                                                                    color: "#1f2937",
                                                                    marginBottom: "0.25rem",
                                                                }}
                                                            >
                                                                {candidate.name}
                                                            </div>
                                                            <div
                                                                style={{
                                                                    fontSize: "0.8rem",
                                                                    color: "#6b7280",
                                                                }}
                                                            >
                                                                {candidate.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1rem 0.75rem",
                                                    }}
                                                >
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontWeight: "500",
                                                                color: "#1f2937",
                                                                marginBottom: "0.25rem",
                                                            }}
                                                        >
                                                            {candidate.role}
                                                        </div>
                                                        <div
                                                            style={{
                                                                fontSize: "0.8rem",
                                                                color: "#6b7280",
                                                            }}
                                                        >
                                                            {candidate.department}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1rem 0.75rem",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            gap: "0.25rem",
                                                        }}
                                                    >
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
                                                <td
                                                    style={{
                                                        padding: "1rem 0.75rem",
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
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1rem 0.75rem",
                                                        color: "#6b7280",
                                                    }}
                                                >
                                                    <div>
                                                        <div style={{ fontWeight: "500", color: "#1f2937" }}>{candidate.experience}</div>
                                                        <div style={{ fontSize: "0.8rem" }}>{candidate.projects} projects</div>
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
                                                            <Mail size={16} color="#6b7280" />
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
                                                            <Phone size={16} color="#6b7280" />
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
                        ) : (
                            /* Grid View */
                            <div
                                style={{
                                    padding: "1.5rem",
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(350px, 1fr))",
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
                                                        {candidate.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={selectedCandidates.includes(candidate.id)}
                                                onChange={() => handleCandidateSelect(candidate.id)}
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    accentColor: "#6366f1",
                                                }}
                                            />
                                        </div>

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
                                                <Briefcase size={14} color="#6b7280" />
                                                <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                                                    {candidate.department} • {candidate.experience}
                                                </span>
                                            </div>
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
                                                }}
                                            >
                                                <Star size={14} color="#f59e0b" fill="#f59e0b" />
                                                <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                                                    {candidate.rating} rating • {candidate.projects} projects
                                                </span>
                                            </div>
                                        </div>

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

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
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
                                                    <Eye size={16} color="#6b7280" />
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
                                                    <Phone size={16} color="#6b7280" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                                Showing {filteredCandidates.length} of {candidates.length} candidates
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
                                {["Internal Candidates", "External Recruitment", "Talent Analytics", "HR Solutions"].map(
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