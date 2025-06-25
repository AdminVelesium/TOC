"use client"

import { useState } from "react"
import { TfiTwitter } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";



export default function Jobs() {
    const [searchTerm, setSearchTerm] = useState("UX UI Designer")
    const [selectedJob, setSelectedJob] = useState(0)

    const navigate = useNavigate();

    const handlehome = () => {
        navigate('/')
    }

    const handleprofile = () => {
        navigate('/company/profile')
    }

    const jobListings = [
        {
            id: 1,
            title: "UI / UX Designer",
            company: "TGL",
            salary: "₹6L - ₹10L",
            location: "Laborum",
            city: "Bangalore, India",
            type: "Onsite",
            logo: "🔷",
            color: "#6366f1",
        },
        {
            id: 2,
            title: "Senior UI/UX Designer",
            company: "Parakur",
            salary: "₹ 11.0L - ₹20L",
            location: "Parakur",
            city: "Columbus, OH",
            type: "Hybrid",
            logo: "🎯",
            color: "#10b981",
        },
        {
            id: 3,
            title: "UX Copywriter",
            company: "Aliq",
            salary: "₹ 5.0L - ₹9.5L",
            location: "Aliq",
            city: "Noida, India",
            type: "Remote",
            logo: "🎨",
            color: "#06b6d4",
        },
        {
            id: 4,
            title: "UI / UX Designer",
            company: "Deserunt",
            salary: "₹ 3L - ₹ 7L",
            location: "Deserunt",
            city: "Pune, India",
            type: "Onsite",
            logo: "💚",
            color: "#10b981",
        },
    ]

    return (
        <div
            style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                backgroundColor: "#ffffff",
                minHeight: "100vh",
            }}
        >
            {/* Header */}
            <header
                style={{
                    backgroundColor: "#ffffff",
                    borderBottom: "1px solid #e5e7eb",
                    padding: "1rem 0",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
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
                    }}
                >
                    {/* Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
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
                            <div></div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <span
                                    style={{
                                        fontSize: "1.75rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        lineHeight: "1.1",
                                        whiteSpace: "nowrap",
                                        marginLeft: "-8vw",
                                        marginTop: "-4vh",
                                        fontFamily: " montserrat, sans-serif"
                                    }}
                                    onClick={handlehome}
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
                                    marginTop: "2vw",
                                }}
                            />
                        </div>

                    </div>


                    {/* Navigation */}
                    <nav
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                    >
                        <a href="/" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                            Home
                        </a>
                        <a href="#" style={{ textDecoration: "none", color: "#6366f1", fontSize: "0.9rem", fontWeight: "500" }}>
                            All Jobs
                        </a>
                        <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                            Companies
                        </a>
                        <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                            People
                        </a>
                        <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                            Mentorship Program
                        </a>
                    </nav>

                    {/* Right side icons */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <div
                            style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#f3f4f6",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                        >
                            🔍
                        </div>
                        <div
                            style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#f3f4f6",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                        >
                            🔔
                        </div>
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
                                }}
                            >
                                👤
                            </div>
                            <button
                                style={{
                                    backgroundColor: "#ef4444",
                                    color: "white",
                                    border: "none",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "6px",
                                    fontSize: "0.8rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "2rem 1rem",
                }}
            >
                {/* Search Jobs Header */}
                <div style={{ marginBottom: "2rem" }}>
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "700",
                            color: "#1f2937",
                            marginBottom: "2rem",
                        }}
                    >
                        Search <span style={{ color: "#6366f1" }}>Jobs</span>
                    </h1>

                    {/* Search and Filters */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "1rem",
                        }}
                    >
                        <div style={{ flex: 1, marginRight: "2rem" }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                Search
                            </h3>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    fontSize: "0.9rem",
                                    backgroundColor: "#f9fafb",
                                    outline: "none",
                                }}
                            />
                        </div>

                        <div style={{ flex: 2 }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Filters
                                </h3>
                                <button
                                    style={{
                                        background: "none",
                                        border: "none",
                                        color: "#6366f1",
                                        fontSize: "0.9rem",
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Clear filter
                                </button>
                            </div>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    gap: "1rem",
                                }}
                            >
                                <select
                                    style={{
                                        padding: "0.75rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        backgroundColor: "white",
                                    }}
                                >
                                    <option>Location</option>
                                </select>
                                <select
                                    style={{
                                        padding: "0.75rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        backgroundColor: "white",
                                    }}
                                >
                                    <option>Job type</option>
                                </select>
                                <select
                                    style={{
                                        padding: "0.75rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        backgroundColor: "white",
                                    }}
                                >
                                    <option>Experience level</option>
                                </select>
                                <select
                                    style={{
                                        padding: "0.75rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        backgroundColor: "white",
                                    }}
                                >
                                    <option>Company type</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "350px 1fr",
                        gap: "2rem",
                        alignItems: "start",
                    }}
                >
                    {/* Left Sidebar - Job Listings */}
                    <div>
                        <p
                            style={{
                                fontSize: "0.9rem",
                                color: "#6b7280",
                                marginBottom: "1rem",
                            }}
                        >
                            <strong>32 results for</strong> <span style={{ color: "#6366f1" }}>'UX UI Designer'</span>
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {jobListings.map((job, index) => (
                                <div
                                    key={job.id}
                                    onClick={() => setSelectedJob(index)}
                                    style={{
                                        backgroundColor: selectedJob === index ? "#eff6ff" : "white",
                                        border: selectedJob === index ? "2px solid #6366f1" : "1px solid #e5e7eb",
                                        borderRadius: "8px",
                                        padding: "1rem",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "0.75rem",
                                            marginBottom: "0.75rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                backgroundColor: job.color + "20",
                                                borderRadius: "6px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "1.2rem",
                                            }}
                                        >
                                            {job.logo}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "600",
                                                    color: "#1f2937",
                                                    margin: "0 0 0.25rem 0",
                                                }}
                                            >
                                                {job.title}
                                            </h4>
                                            <p
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#6b7280",
                                                    margin: "0 0 0.25rem 0",
                                                }}
                                            >
                                                {job.salary}
                                            </p>
                                        </div>
                                        {index === 0 && (
                                            <span
                                                style={{
                                                    backgroundColor: "#fecaca",
                                                    color: "#dc2626",
                                                    fontSize: "0.7rem",
                                                    padding: "0.25rem 0.5rem",
                                                    borderRadius: "4px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Hot
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.25rem",
                                            fontSize: "0.8rem",
                                            color: "#6b7280",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <span>🏢</span>
                                            <span>{job.location}</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <span>📍</span>
                                            <span>{job.city}</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <span>💼</span>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    padding: "0.75rem",
                                    color: "#6b7280",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    marginTop: "1rem",
                                }}
                            >
                                Show more
                            </button>
                        </div>
                    </div>

                    {/* Right Panel - Job Details */}
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            border: "1px solid #e5e7eb",
                        }}
                    >
                        {/* Header Image */}
                        <div
                            style={{
                                height: "200px",
                                background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "20px",
                                    display: "flex",
                                    gap: "10px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                        borderRadius: "8px",
                                        backdropFilter: "blur(10px)",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                        borderRadius: "8px",
                                        backdropFilter: "blur(10px)",
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                        borderRadius: "8px",
                                        backdropFilter: "blur(10px)",
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Job Details */}
                        <div style={{ padding: "1.5rem" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "1rem",
                                }}
                            >
                                <div>
                                    <h2
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: "0 0 0.5rem 0",
                                        }}
                                    >
                                        UI / UX Designer
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#6366f1",
                                            fontWeight: "600",
                                            margin: "0 0 0.5rem 0",
                                        }}
                                    >
                                        ₹6L - ₹10L
                                    </p>
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                    <button
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "1px solid #d1d5db",
                                            borderRadius: "6px",
                                            padding: "0.5rem",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                            fontSize: "0.8rem",
                                            color: "#6b7280",
                                        }}
                                    >
                                        ❤️ Save
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: "#6366f1",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            padding: "0.5rem 1rem",
                                            cursor: "pointer",
                                            fontSize: "0.8rem",
                                            fontWeight: "500",
                                        }}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    marginBottom: "1rem",
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                    <span>🏢</span>
                                    <span>Laborum</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                    <span>📍</span>
                                    <span>Bangalore, India</span>
                                </div>
                            </div>

                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#9ca3af",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Posted 1h ago
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "0.5rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                <span
                                    style={{
                                        backgroundColor: "#f3f4f6",
                                        color: "#6b7280",
                                        fontSize: "0.8rem",
                                        padding: "0.25rem 0.75rem",
                                        borderRadius: "20px",
                                    }}
                                >
                                    Mid Senior level
                                </span>
                                <span
                                    style={{
                                        backgroundColor: "#f3f4f6",
                                        color: "#6b7280",
                                        fontSize: "0.8rem",
                                        padding: "0.25rem 0.75rem",
                                        borderRadius: "20px",
                                    }}
                                >
                                    Full-time
                                </span>
                                <span
                                    style={{
                                        backgroundColor: "#f3f4f6",
                                        color: "#6b7280",
                                        fontSize: "0.8rem",
                                        padding: "0.25rem 0.75rem",
                                        borderRadius: "20px",
                                    }}
                                >
                                    Remote
                                </span>
                            </div>

                            {/* Contact Recruiter */}
                            <div
                                style={{
                                    backgroundColor: "#f9fafb",
                                    borderRadius: "8px",
                                    padding: "1rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                <h4
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    Contact recruiter
                                </h4>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <div
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                backgroundColor: "#fecaca",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "1.2rem",
                                            }}
                                        >
                                            👩
                                        </div>
                                        <div>
                                            <h5
                                                style={{
                                                    fontSize: "0.9rem",
                                                    fontWeight: "600",
                                                    color: "#1f2937",
                                                    margin: "0 0 0.25rem 0",
                                                }}
                                            >
                                                Romy Murray{" "}
                                                <span
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        color: "#ef4444",
                                                        backgroundColor: "#fef2f2",
                                                        padding: "0.125rem 0.375rem",
                                                        borderRadius: "4px",
                                                        marginLeft: "0.5rem",
                                                    }}
                                                >
                                                    Job poster
                                                </span>
                                            </h5>
                                            <p
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#6b7280",
                                                    margin: 0,
                                                }}
                                            >
                                                Hiring Manager
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        style={{
                                            backgroundColor: "#6366f1",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            padding: "0.5rem 1rem",
                                            cursor: "pointer",
                                            fontSize: "0.8rem",
                                            fontWeight: "500",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                        }}
                                    >
                                        💬 Message
                                    </button>
                                </div>
                            </div>

                            {/* Job Description */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h4
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    Job Description
                                </h4>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        lineHeight: "1.6",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    We are looking for a creative and user-focused UI/UX Designer to join our team. You will be
                                    responsible for designing intuitive and engaging digital experiences that delight our users and
                                    support our product goals. The ideal candidate has a strong portfolio demonstrating expertise in
                                    user-centered design, visual aesthetics, and collaboration with cross-functional teams.
                                </p>

                                <h5
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    Responsibilities
                                </h5>
                                <ul
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        lineHeight: "1.6",
                                        paddingLeft: "1.25rem",
                                    }}
                                >
                                    <li style={{ marginBottom: "0.25rem" }}>
                                        Design user-centered interfaces through wireframes, prototypes, and high-fidelity visuals
                                    </li>
                                    <li style={{ marginBottom: "0.25rem" }}>
                                        Collaborate with product managers, developers, and stakeholders to translate
                                    </li>
                                    <li>Conduct user research and usability testing to continuously improve the user experience</li>
                                </ul>
                            </div>

                            {/* About Company */}
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    <h4
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0,
                                        }}
                                    >
                                        About company
                                    </h4>
                                    <button
                                        style={{
                                            background: "none",
                                            border: "none",
                                            color: "#6366f1",
                                            fontSize: "0.8rem",
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                        }}
                                        onClick={handleprofile}
                                    >
                                        View company profile
                                    </button>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor: "#6366f1",
                                            borderRadius: "6px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.2rem",
                                        }}
                                    >
                                        🔷
                                    </div>
                                    <h5
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: 0,
                                        }}
                                    >
                                        LABORUM COMPANY
                                    </h5>
                                </div>

                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        lineHeight: "1.6",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Laborum Company is a dynamic UI/UX design firm dedicated to creating user-centric digital solutions
                                    that elevate brand experiences.
                                </p>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "1rem",
                                        fontSize: "0.8rem",
                                        color: "#6b7280",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <span>🏢</span>
                                        <span>Outsource</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <span>👥</span>
                                        <span>100 - 300 employees</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <span>📍</span>
                                        <span>Bangalore, India</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <span>📅</span>
                                        <span>Mon - Fri</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Complete Profile Section */}
            <div
                style={{
                    backgroundColor: "#f9fafb",
                    padding: "4rem 0",
                    marginTop: "4rem",
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
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            borderRadius: "20px",
                            padding: "3rem",
                            display: "grid",
                            gridTemplateColumns: "1fr 300px",
                            gap: "2rem",
                            alignItems: "center",
                            color: "white",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    fontSize: "2rem",
                                    fontWeight: "700",
                                    marginBottom: "1rem",
                                    lineHeight: "1.2",
                                }}
                            >
                                Complete your profile
                            </h2>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    marginBottom: "2rem",
                                    opacity: "0.9",
                                }}
                            >
                                Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem
                                reprehenderit.
                            </p>
                            <button
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                    color: "white",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    padding: "0.75rem 2rem",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                Update profile
                            </button>
                        </div>

                        <div
                            style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "4rem",
                                    position: "relative",
                                }}
                            >
                                👤
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "-10px",
                                        right: "-10px",
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: "#ef4444",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    💡
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    padding: "3rem 0 1rem",
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
                            gridTemplateColumns: "300px repeat(3, 1fr) 300px",
                            gap: "2rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        background: "linear-gradient(45deg, #ff6b35, #f7931e)",
                                        borderRadius: "4px",
                                    }}
                                ></div>
                                <span
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    Talent on Cloud
                                </span>
                            </div>
                            <select
                                style={{
                                    backgroundColor: "#374151",
                                    color: "white",
                                    border: "1px solid #4b5563",
                                    borderRadius: "6px",
                                    padding: "0.5rem",
                                    fontSize: "0.9rem",
                                }}
                            >
                                <option>English</option>
                            </select>
                        </div>

                        <div>
                            <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem" }}>Product</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        All Jobs
                                    </a>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Companies
                                    </a>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Candidates
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem" }}>Resources</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Blog
                                    </a>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        User guides
                                    </a>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Webinars
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem" }}>Company</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        About
                                    </a>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Join us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem", color: "#6366f1" }}>
                                Subscribe to our newsletter
                            </h4>
                            <p style={{ fontSize: "0.9rem", color: "#d1d5db", marginBottom: "1rem" }}>
                                For product announcements and exclusive insights
                            </p>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <input
                                    type="email"
                                    placeholder="Input your email"
                                    style={{
                                        flex: 1,
                                        padding: "0.5rem",
                                        border: "1px solid #4b5563",
                                        borderRadius: "6px",
                                        backgroundColor: "#374151",
                                        color: "white",
                                        fontSize: "0.9rem",
                                    }}
                                />
                                <button
                                    style={{
                                        backgroundColor: "#6366f1",
                                        color: "white",
                                        border: "none",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "6px",
                                        fontSize: "0.9rem",
                                        cursor: "pointer",
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            borderTop: "1px solid #4b5563",
                            paddingTop: "1rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "1rem",
                        }}
                    >
                        <p style={{ fontSize: "0.8rem", color: "#9ca3af", margin: 0 }}>
                            © 2025 Talent on Cloud, Inc. • Privacy • Terms • Sitemap
                        </p>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <a href="#" style={{ color: "#6366f1", fontSize: "1.2rem" }}>
                                <TfiTwitter />
                            </a>
                            <a href="#" style={{ color: "#6366f1", fontSize: "1.2rem" }}>
                                <CiFacebook />
                            </a>
                            <a href="#" style={{ color: "#6366f1", fontSize: "1.2rem" }}>
                                <CiLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}