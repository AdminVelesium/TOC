"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    Search,
    Filter,
    Plus,
    Bell,
    Users,
    Settings,
    LogOut,
    Eye,
    Mail,
    MapPin,
    Briefcase,
    MoreVertical,
    ChevronDown,
    Grid,
    List,
    Download,
    Building,
    Clock,
    Bookmark,
    MessageCircle,
    Phone,
    TrendingUp,
} from "lucide-react"

export default function OtherCompaniesCandidates() {
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

    // Sample candidates from other companies
    const otherCompaniesCandidates = [
        {
            id: "1",
            name: "Rajesh Kumar",
            email: "rajesh.kumar@techcorp.com",
            phone: "+91 98765 43210",
            currentRole: "Senior Software Engineer",
            currentCompany: "TechCorp Solutions",
            companyLogo: "/placeholder.svg?height=40&width=40",
            department: "Engineering",
            skills: ["React", "Node.js", "AWS", "TypeScript", "GraphQL", "Docker", "Kubernetes", "Python"],
            experience: "8 years",
            location: "Bangalore, India",
            currentSalary: "₹25 LPA",
            expectedSalary: "₹35-40 LPA",
            noticePeriod: "60 days",
            availability: "Open to Opportunities",
            availabilityColor: "#10b981",
            rating: 4.8,
            projects: 25,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "2 hours ago",
            education: "B.Tech Computer Science, IIT Delhi",
            certifications: ["AWS Solutions Architect", "React Expert", "Kubernetes Certified"],
            linkedinUrl: "#",
            portfolioUrl: "#",
            isBookmarked: false,
            matchScore: 95,
            companySize: "1000+ employees",
            industryType: "Technology",
            workMode: "Hybrid",
            keyAchievements: [
                "Led team of 12 developers",
                "Reduced system latency by 40%",
                "Architected microservices platform",
            ],
        },
        {
            id: "2",
            name: "Priya Sharma",
            email: "priya.sharma@innovatelab.com",
            phone: "+91 87654 32109",
            currentRole: "Product Manager",
            currentCompany: "Innovate Labs",
            companyLogo: "/placeholder.svg?height=40&width=40",
            department: "Product",
            skills: [
                "Product Strategy",
                "Agile",
                "Market Research",
                "Jira",
                "Roadmapping",
                "Analytics",
                "Scrum",
                "A/B Testing",
            ],
            experience: "6 years",
            location: "Mumbai, India",
            currentSalary: "₹22 LPA",
            expectedSalary: "₹30-35 LPA",
            noticePeriod: "90 days",
            availability: "Actively Looking",
            availabilityColor: "#f59e0b",
            rating: 4.6,
            projects: 18,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "1 day ago",
            education: "MBA, IIM Ahmedabad",
            certifications: ["PMP", "Agile Certified", "Google Analytics"],
            linkedinUrl: "#",
            portfolioUrl: "#",
            isBookmarked: true,
            matchScore: 88,
            companySize: "500-1000 employees",
            industryType: "Fintech",
            workMode: "Remote",
            keyAchievements: [
                "Launched 3 successful products",
                "Increased user engagement by 60%",
                "Managed $2M product budget",
            ],
        },
        {
            id: "3",
            name: "Arjun Patel",
            email: "arjun.patel@designstudio.com",
            phone: "+91 76543 21098",
            currentRole: "Senior UX Designer",
            currentCompany: "Creative Design Studio",
            companyLogo: "/placeholder.svg?height=40&width=40",
            department: "Design",
            skills: [
                "Figma",
                "Sketch",
                "User Research",
                "Prototyping",
                "Adobe XD",
                "Design Systems",
                "Usability Testing",
                "Wireframing",
            ],
            experience: "7 years",
            location: "Pune, India",
            currentSalary: "₹18 LPA",
            expectedSalary: "₹25-30 LPA",
            noticePeriod: "30 days",
            availability: "Open to Opportunities",
            availabilityColor: "#10b981",
            rating: 4.7,
            projects: 32,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "30 minutes ago",
            education: "M.Des, NID Ahmedabad",
            certifications: ["Google UX Design", "Adobe Certified Expert", "Design Thinking"],
            linkedinUrl: "#",
            portfolioUrl: "#",
            isBookmarked: false,
            matchScore: 92,
            companySize: "100-500 employees",
            industryType: "Design Agency",
            workMode: "Hybrid",
            keyAchievements: [
                "Redesigned flagship product",
                "Improved conversion rate by 45%",
                "Built design system for 50+ components",
            ],
        },
        {
            id: "4",
            name: "Sneha Reddy",
            email: "sneha.reddy@datatech.com",
            phone: "+91 65432 10987",
            currentRole: "Data Science Manager",
            currentCompany: "DataTech Analytics",
            companyLogo: "/placeholder.svg?height=40&width=40",
            department: "Analytics",
            skills: ["Python", "R", "Machine Learning", "SQL", "Tableau", "TensorFlow", "Deep Learning", "Big Data"],
            experience: "9 years",
            location: "Hyderabad, India",
            currentSalary: "₹28 LPA",
            expectedSalary: "₹40-45 LPA",
            noticePeriod: "90 days",
            availability: "Considering Offers",
            availabilityColor: "#3b82f6",
            rating: 4.9,
            projects: 22,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "3 hours ago",
            education: "PhD Statistics, ISI Kolkata",
            certifications: ["Google Cloud ML", "Tableau Expert", "AWS ML Specialty"],
            linkedinUrl: "#",
            portfolioUrl: "#",
            isBookmarked: true,
            matchScore: 96,
            companySize: "1000+ employees",
            industryType: "Analytics",
            workMode: "Remote",
            keyAchievements: [
                "Built ML models serving 10M+ users",
                "Led data science team of 15",
                "Published 8 research papers",
            ],
        },
        {
            id: "5",
            name: "Vikram Singh",
            email: "vikram.singh@marketpro.com",
            phone: "+91 54321 09876",
            currentRole: "Marketing Director",
            currentCompany: "MarketPro Agency",
            companyLogo: "/placeholder.svg?height=40&width=40",
            department: "Marketing",
            skills: [
                "Digital Marketing",
                "SEO",
                "Content Strategy",
                "Social Media",
                "Analytics",
                "PPC",
                "Brand Strategy",
                "Growth Hacking",
            ],
            experience: "10 years",
            location: "Delhi, India",
            currentSalary: "₹30 LPA",
            expectedSalary: "₹40-50 LPA",
            noticePeriod: "60 days",
            availability: "Open to Opportunities",
            availabilityColor: "#10b981",
            rating: 4.5,
            projects: 45,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "1 hour ago",
            education: "MBA Marketing, FMS Delhi",
            certifications: ["Google Ads", "HubSpot Certified", "Facebook Blueprint"],
            linkedinUrl: "#",
            portfolioUrl: "#",
            isBookmarked: false,
            matchScore: 85,
            companySize: "200-500 employees",
            industryType: "Marketing Agency",
            workMode: "Hybrid",
            keyAchievements: ["Grew agency revenue by 300%", "Managed campaigns worth ₹50Cr", "Built team of 25 marketers"],
        },
        {
            id: "6",
            name: "Anita Gupta",
            email: "anita.gupta@cloudbridge.com",
            phone: "+91 43210 98765",
            currentRole: "DevOps Architect",
            currentCompany: "CloudBridge Solutions",
            companyLogo: "/placeholder.svg?height=40&width=40",
            department: "Engineering",
            skills: ["Kubernetes", "Docker", "CI/CD", "Azure", "Terraform", "Jenkins", "Monitoring", "Security"],
            experience: "8 years",
            location: "Chennai, India",
            currentSalary: "₹26 LPA",
            expectedSalary: "₹35-40 LPA",
            noticePeriod: "45 days",
            availability: "Actively Looking",
            availabilityColor: "#f59e0b",
            rating: 4.6,
            projects: 28,
            avatar: "/placeholder.svg?height=150&width=150",
            lastActive: "2 days ago",
            education: "B.Tech Computer Science, Anna University",
            certifications: ["Azure DevOps Expert", "Kubernetes Certified", "AWS DevOps"],
            linkedinUrl: "#",
            portfolioUrl: "#",
            isBookmarked: false,
            matchScore: 90,
            companySize: "500-1000 employees",
            industryType: "Cloud Services",
            workMode: "Remote",
            keyAchievements: [
                "Reduced deployment time by 80%",
                "Architected multi-cloud infrastructure",
                "Implemented zero-downtime deployments",
            ],
        },
    ]

    const navigationItems = [
        { id: "dashboard", name: "Dashboard", icon: <Users size={20} />, active: false },
        { id: "internal", name: "Internal Candidates", icon: <Building size={20} />, active: false },
        { id: "external", name: "Other Companies", icon: <TrendingUp size={20} />, active: true },
        { id: "applications", name: "External Applications", icon: <Briefcase size={20} /> },
    ]

    const availabilityFilters = [
        { id: "all", name: "All Candidates", count: otherCompaniesCandidates.length },
        { id: "open", name: "Open to Opportunities", count: 3 },
        { id: "active", name: "Actively Looking", count: 2 },
        { id: "considering", name: "Considering Offers", count: 1 },
    ]

    const filteredCandidates = otherCompaniesCandidates.filter((candidate) => {
        const matchesSearch =
            candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.currentRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.currentCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
            candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "open" && candidate.availability === "Open to Opportunities") ||
            (activeFilter === "active" && candidate.availability === "Actively Looking") ||
            (activeFilter === "considering" && candidate.availability === "Considering Offers")

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
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontSize: "0.9rem",
                                fontWeight: "700",
                            }}
                        >
                            T
                        </div>
                        <div
                            style={{
                                fontSize: isMobile ? "1.25rem" : "1.5rem",
                                fontWeight: "700",
                                color: "#1f2937",
                            }}
                        >
                            Talent on <span style={{ color: "#667eea" }}>Cloud</span>
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
                                onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                            >
                                Dashboard
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
                                onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                            >
                                Internal Candidates
                            </a>
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    color: "#667eea",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    padding: "0.5rem 0",
                                    borderBottom: "2px solid #667eea",
                                }}
                            >
                                Other Companies
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
                                onMouseEnter={(e) => (e.target.style.color = "#667eea")}
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
                                    placeholder="Search professionals, companies..."
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
                                    onFocus={(e) => (e.target.style.borderColor = "#667eea")}
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
                                    backgroundColor: "#667eea",
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
                                placeholder="Search professionals, companies..."
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
                                        color: item.active ? "#667eea" : "#4b5563",
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
                                        color: item.active ? "#667eea" : "#4b5563",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontSize: "0.95rem",
                                        fontWeight: item.active ? "600" : "500",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        textAlign: "left",
                                        width: "100%",
                                        marginBottom: "0.5rem",
                                        borderLeft: item.active ? "3px solid #667eea" : "3px solid transparent",
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
                                Other Companies Candidates
                            </h1>
                            <button
                                style={{
                                    backgroundColor: "#667eea",
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
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#5a67d8")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#667eea")}
                            >
                                <Plus size={16} />
                                Add External Candidate
                            </button>
                        </div>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#6b7280",
                                margin: 0,
                            }}
                        >
                            Discover and recruit talented professionals from other companies to expand your team.
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
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    fontSize: "1.5rem",
                                }}
                            >
                                👥
                            </div>
                            <div
                                style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                187
                            </div>
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Total External Candidates
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                From 50+ companies
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
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    fontSize: "1.5rem",
                                }}
                            >
                                💼
                            </div>
                            <div
                                style={{
                                    fontSize: isMobile ? "1.75rem" : "2rem",
                                    fontWeight: "700",
                                    color: "#10b981",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                45
                            </div>
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Open to Opportunities
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                Ready for new roles
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
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    fontSize: "1.5rem",
                                }}
                            >
                                ⭐
                            </div>
                            <div
                                style={{
                                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                                    fontWeight: "700",
                                    color: "#667eea",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                8.5 Years
                            </div>
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Average Experience
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                Senior professionals
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
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    fontSize: "1.5rem",
                                }}
                            >
                                📊
                            </div>
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
                                New This Week
                            </div>
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                Fresh profiles added
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
                                    <option>All Companies</option>
                                    <option>TechCorp Solutions</option>
                                    <option>Innovate Labs</option>
                                    <option>DataTech Analytics</option>
                                    <option>MarketPro Agency</option>
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
                                    <option>All Roles</option>
                                    <option>Software Engineer</option>
                                    <option>Product Manager</option>
                                    <option>Data Scientist</option>
                                    <option>UX Designer</option>
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
                                    <option>5-7 years</option>
                                    <option>8-10 years</option>
                                    <option>10+ years</option>
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
                                        color: "#667eea",
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
                                        <Grid size={16} color={viewMode === "grid" ? "#667eea" : "#6b7280"} />
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
                                        <List size={16} color={viewMode === "list" ? "#667eea" : "#6b7280"} />
                                    </button>
                                </div>

                                {selectedCandidates.length > 0 && (
                                    <button
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            padding: "0.5rem 0.75rem",
                                            backgroundColor: "#667eea",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            fontSize: "0.9rem",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#5a67d8")}
                                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#667eea")}
                                    >
                                        <Download size={16} />
                                        Export ({selectedCandidates.length})
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Availability Filters */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                            marginBottom: "1.5rem",
                            overflowX: "auto",
                            paddingBottom: "0.5rem",
                        }}
                    >
                        {availabilityFilters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.75rem 1rem",
                                    backgroundColor: activeFilter === filter.id ? "#667eea" : "#f3f4f6",
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
                                    Professional Candidates
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    {filteredCandidates.length} experienced professionals from other companies
                                </p>
                            </div>
                        </div>

                        {/* Grid View */}
                        {viewMode === "grid" && (
                            <div
                                style={{
                                    padding: "1.5rem",
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(420px, 1fr))",
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
                                                        {candidate.currentRole}
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
                                                    color={candidate.isBookmarked ? "#667eea" : "#6b7280"}
                                                    fill={candidate.isBookmarked ? "#667eea" : "none"}
                                                />
                                            </button>
                                        </div>

                                        {/* Company Info */}
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
                                            <img
                                                src={candidate.companyLogo || "/placeholder.svg"}
                                                alt={candidate.currentCompany}
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    borderRadius: "4px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <div style={{ flex: 1 }}>
                                                <div
                                                    style={{
                                                        fontSize: "0.9rem",
                                                        fontWeight: "600",
                                                        color: "#1f2937",
                                                    }}
                                                >
                                                    {candidate.currentCompany}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "0.8rem",
                                                        color: "#6b7280",
                                                    }}
                                                >
                                                    {candidate.companySize} • {candidate.industryType}
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
                                                <span style={{ fontSize: "0.8rem", color: "#667eea", marginLeft: "auto" }}>
                                                    {candidate.workMode}
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
                                                <Briefcase size={14} color="#6b7280" />
                                                <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>{candidate.experience} experience</span>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
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
                                                            color: "#667eea",
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

                                        {/* Salary Info */}
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
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: "0.8rem",
                                                        color: "#0369a1",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    Current: {candidate.currentSalary}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "0.8rem",
                                                        color: "#0369a1",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    Notice: {candidate.noticePeriod}
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "600",
                                                    color: "#0c4a6e",
                                                }}
                                            >
                                                Expected: {candidate.expectedSalary}
                                            </div>
                                        </div>

                                        {/* Key Achievements */}
                                        <div
                                            style={{
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#6b7280",
                                                    fontWeight: "500",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                Key Achievements:
                                            </div>
                                            <ul
                                                style={{
                                                    margin: 0,
                                                    paddingLeft: "1rem",
                                                    fontSize: "0.8rem",
                                                    color: "#4b5563",
                                                }}
                                            >
                                                {candidate.keyAchievements.slice(0, 2).map((achievement, index) => (
                                                    <li key={index} style={{ marginBottom: "0.25rem" }}>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
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
                                                    backgroundColor: "#667eea",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "500",
                                                    cursor: "pointer",
                                                    transition: "all 0.2s ease",
                                                }}
                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#5a67d8")}
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#667eea")}
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
                                                    <Phone size={16} color="#6b7280" />
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
                                                        accentColor: "#667eea",
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
                                                Current Company
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
                                                Experience
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
                                                Availability
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
                                                Expected Salary
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
                                                            accentColor: "#667eea",
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
                                                                {candidate.currentRole}
                                                            </div>
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
                                                            alignItems: "center",
                                                            gap: "0.5rem",
                                                        }}
                                                    >
                                                        <img
                                                            src={candidate.companyLogo || "/placeholder.svg"}
                                                            alt={candidate.currentCompany}
                                                            style={{
                                                                width: "24px",
                                                                height: "24px",
                                                                borderRadius: "4px",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                        <div>
                                                            <div
                                                                style={{
                                                                    fontWeight: "500",
                                                                    color: "#1f2937",
                                                                    marginBottom: "0.25rem",
                                                                }}
                                                            >
                                                                {candidate.currentCompany}
                                                            </div>
                                                            <div
                                                                style={{
                                                                    fontSize: "0.8rem",
                                                                    color: "#6b7280",
                                                                }}
                                                            >
                                                                {candidate.companySize}
                                                            </div>
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
                                                                    color: "#667eea",
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
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontWeight: "500",
                                                                color: "#1f2937",
                                                                marginBottom: "0.25rem",
                                                            }}
                                                        >
                                                            {candidate.experience}
                                                        </div>
                                                        <div
                                                            style={{
                                                                fontSize: "0.8rem",
                                                                color: "#6b7280",
                                                            }}
                                                        >
                                                            {candidate.noticePeriod} notice
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
                                                            backgroundColor: `${candidate.availabilityColor}20`,
                                                            color: candidate.availabilityColor,
                                                            borderRadius: "12px",
                                                            fontSize: "0.8rem",
                                                            fontWeight: "600",
                                                            border: `1px solid ${candidate.availabilityColor}40`,
                                                        }}
                                                    >
                                                        {candidate.availability}
                                                    </span>
                                                </td>
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
                                                            {candidate.expectedSalary}
                                                        </div>
                                                        <div
                                                            style={{
                                                                fontSize: "0.8rem",
                                                                color: "#6b7280",
                                                            }}
                                                        >
                                                            Current: {candidate.currentSalary}
                                                        </div>
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
                                                                color={candidate.isBookmarked ? "#667eea" : "#6b7280"}
                                                                fill={candidate.isBookmarked ? "#667eea" : "none"}
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
                                Showing {filteredCandidates.length} of {otherCompaniesCandidates.length} external candidates
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
                                                backgroundColor: page === 1 ? "#667eea" : "transparent",
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
                                Talent on <span style={{ color: "#667eea" }}>Cloud</span>
                            </div>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#d1d5db",
                                    lineHeight: "1.7",
                                    marginBottom: "2rem",
                                }}
                            >
                                India's most trusted recruitment platform connecting top employers with experienced professionals from
                                leading companies.
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
                                {["Talent Acquisition", "Executive Search", "Competitive Intelligence", "Salary Benchmarking"].map(
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
                                                    e.target.style.color = "#667eea"
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
                                                e.target.style.color = "#667eea"
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
