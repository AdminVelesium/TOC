"use client"

import { useState } from "react"
import { TfiTwitter } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

export default function CompanyProfile() {

    const navigate = useNavigate();

    const handlehome = () => {
        navigate('/')
    }
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const officeImages = [
        { id: 1, alt: "Modern office space" },
        { id: 2, alt: "Team collaboration" },
        { id: 3, alt: "Library workspace" },
    ]

    const reviews = [
        {
            id: 1,
            name: "Jay Rutherford",
            timeAgo: "1d ago",
            rating: 5,
            comment: "The compensation & benefit are amazing",
            avatar: "👨‍💼",
            bgColor: "#6366f1",
        },
        {
            id: 2,
            name: "Anna",
            timeAgo: "3d ago",
            rating: 5,
            comment: "It's a high growth company & an amazing workplace in term of culture, mission and interesting work.",
            avatar: "👩‍💼",
            bgColor: "#ec4899",
        },
        {
            id: 3,
            name: "Kenneth",
            timeAgo: "3d ago",
            rating: 5,
            comment: "I'm fresh graduate & I receive great leadership & guidance from seniors",
            avatar: "👨‍💻",
            bgColor: "#06b6d4",
        },
    ]

    const jobOpenings = [
        {
            id: 1,
            title: "C# Developer",
            salary: "₹8L - ₹15L",
            location: "Noida, India",
            type: "Remote",
            badge: "Bonus",
            badgeColor: "#ec4899",
        },
        {
            id: 2,
            title: "Product Manager",
            salary: "₹4L - ₹10L",
            location: "Mumbai, India",
            type: "Remote",
            badge: null,
        },
        {
            id: 3,
            title: "UI / UX Designer",
            salary: "₹6L - ₹10L",
            location: "Bangalore, India",
            type: "Remote",
            badge: null,
        },
        {
            id: 4,
            title: "Full-Stacked Dev",
            salary: "₹4L - ₹15L",
            location: "Bangalore, India",
            type: "Remote",
            badge: null,
        },
    ]

    const followers = [
        { id: 1, avatar: "👨‍💼", bgColor: "#6366f1" },
        { id: 2, avatar: "👩‍💼", bgColor: "#ec4899" },
        { id: 3, avatar: "👨‍💻", bgColor: "#10b981" },
        { id: 4, avatar: "👩‍💻", bgColor: "#f59e0b" },
        { id: 5, avatar: "👨‍🎨", bgColor: "#8b5cf6" },
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
                        <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                            All Jobs
                        </a>
                        <a href="#" style={{ textDecoration: "none", color: "#6366f1", fontSize: "0.9rem", fontWeight: "500" }}>
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
                            💬
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
                                S
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

            {/* Hero Banner */}
            <div
                style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    position: "relative",
                    overflow: "hidden",
                    height: "300px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    {/* Company Logo */}
                    <div
                        style={{
                            position: "absolute",
                            left: "2rem",
                            top: "2rem",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                    >
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.5rem",
                            }}
                        >
                            🔷
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div
                        style={{
                            color: "white",
                            zIndex: 2,
                            marginLeft: "120px",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: "700",
                                margin: "0 0 0.5rem 0",
                                lineHeight: "1.2",
                            }}
                        >
                            Get your
                        </h1>
                        <h1
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: "700",
                                margin: "0",
                                lineHeight: "1.2",
                            }}
                        >
                            DREAM JOB with us
                        </h1>
                    </div>

                    {/* Hero Images */}
                    <div
                        style={{
                            position: "absolute",
                            right: "2rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            display: "flex",
                            gap: "1rem",
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                width: "120px",
                                height: "150px",
                                backgroundColor: "#f97316",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "4rem",
                            }}
                        >
                            👨‍💼
                        </div>
                        <div
                            style={{
                                width: "120px",
                                height: "150px",
                                backgroundColor: "#ffffff",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "4rem",
                            }}
                        >
                            👩‍💼
                        </div>
                    </div>

                    {/* Background Shapes */}
                    <div
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "300px",
                            width: "200px",
                            height: "200px",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderRadius: "50%",
                        }}
                    ></div>
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-50px",
                            left: "200px",
                            width: "150px",
                            height: "150px",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderRadius: "50%",
                        }}
                    ></div>
                    <div
                        style={{
                            position: "absolute",
                            top: "50px",
                            right: "50px",
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#fbbf24",
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

            {/* Main Content */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "2rem 1rem",
                }}
            >
                {/* Company Header */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "3rem",
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                marginBottom: "0.5rem",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "2rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                    margin: 0,
                                }}
                            >
                                LABORUM
                            </h1>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    backgroundColor: "#fef2f2",
                                    color: "#dc2626",
                                    padding: "0.25rem 0.75rem",
                                    borderRadius: "20px",
                                    fontSize: "0.8rem",
                                    fontWeight: "500",
                                }}
                            >
                                <span>🏆</span>
                                Top IT company
                            </div>
                        </div>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#6b7280",
                                margin: "0 0 1.5rem 0",
                            }}
                        >
                            Software development
                        </p>

                        {/* Company Details */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "1.5rem",
                                fontSize: "0.9rem",
                                color: "#6b7280",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>🌐</span>
                                <span style={{ color: "#6366f1" }}>laborum.com</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>🏢</span>
                                <span>Hybrid</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>👥</span>
                                <span>500 followers</span>
                                <div style={{ display: "flex", marginLeft: "0.5rem" }}>
                                    {followers.map((follower, index) => (
                                        <div
                                            key={follower.id}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                backgroundColor: follower.bgColor,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.7rem",
                                                marginLeft: index > 0 ? "-8px" : "0",
                                                border: "2px solid white",
                                                zIndex: followers.length - index,
                                            }}
                                        >
                                            {follower.avatar}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>📍</span>
                                <span>Bangalore, India</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>📅</span>
                                <span>Monday - Friday</span>
                            </div>
                            <div></div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>👥</span>
                                <span>100 - 300 employees</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>⏰</span>
                                <span>No OT</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "center",
                        }}
                    >
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
                            ⋯
                        </button>
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "1px solid #d1d5db",
                                borderRadius: "6px",
                                padding: "0.5rem 1rem",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                fontSize: "0.8rem",
                                color: "#6b7280",
                            }}
                        >
                            📤 Share
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
                                display: "flex",
                                alignItems: "center",
                                gap: "0.25rem",
                            }}
                        >
                            ➕ Follow
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr",
                        gap: "3rem",
                    }}
                >
                    {/* Left Column */}
                    <div>
                        {/* About Us */}
                        <div style={{ marginBottom: "3rem" }}>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "1rem",
                                }}
                            >
                                About us
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                    lineHeight: "1.6",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Laborum Company is a dynamic UI/UX design firm dedicated to creating user-centric digital solutions that
                                elevate brand experiences. Combining innovation with research-backed design, Laborum crafts intuitive
                                interfaces that simplify complexity and delight users across devices.
                            </p>

                            <h4
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                Why choosing us
                            </h4>
                            <ul
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#6b7280",
                                    lineHeight: "1.6",
                                    paddingLeft: "1.25rem",
                                    margin: "0 0 1rem 0",
                                }}
                            >
                                <li style={{ marginBottom: "0.5rem" }}>
                                    We deliver user-first designs that enhance engagement and drive conversions.
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    Our team blends creativity with data-driven insights for impactful solutions.
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    We ensure seamless experiences across all devices with responsive, accessible design.
                                </li>
                                <li>We prioritize collaboration and transparency to align perfectly with your goals.</li>
                            </ul>

                            <button
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "#6366f1",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    padding: 0,
                                }}
                            >
                                Read more
                            </button>
                        </div>

                        {/* Life at Laborum */}
                        <div style={{ marginBottom: "3rem" }}>
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
                                        fontSize: "1.25rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0,
                                    }}
                                >
                                    Life at Laborum
                                </h3>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                    <button
                                        onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            backgroundColor: "#f3f4f6",
                                            border: "none",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={() => setCurrentImageIndex(Math.min(officeImages.length - 1, currentImageIndex + 1))}
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            backgroundColor: "#f3f4f6",
                                            border: "none",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        →
                                    </button>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        height: "200px",
                                        backgroundColor: "#f3f4f6",
                                        borderRadius: "12px",
                                        backgroundImage: `linear-gradient(45deg, #f3f4f6 25%, transparent 25%), 
                                     linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), 
                                     linear-gradient(45deg, transparent 75%, #f3f4f6 75%), 
                                     linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)`,
                                        backgroundSize: "20px 20px",
                                        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "3rem",
                                    }}
                                >
                                    🏢
                                </div>
                                <div
                                    style={{
                                        height: "200px",
                                        backgroundColor: "#fef3c7",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "3rem",
                                    }}
                                >
                                    👥
                                </div>
                                <div
                                    style={{
                                        height: "200px",
                                        backgroundColor: "#ecfdf5",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "3rem",
                                    }}
                                >
                                    📚
                                </div>
                            </div>
                        </div>

                        {/* Recent Job Openings */}
                        <div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Recent job openings
                            </h3>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "1rem",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {jobOpenings.map((job) => (
                                    <div
                                        key={job.id}
                                        style={{
                                            backgroundColor: "white",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "12px",
                                            padding: "1.5rem",
                                            position: "relative",
                                        }}
                                    >
                                        {job.badge && (
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    top: "1rem",
                                                    right: "1rem",
                                                    backgroundColor: job.badgeColor,
                                                    color: "white",
                                                    fontSize: "0.7rem",
                                                    padding: "0.25rem 0.5rem",
                                                    borderRadius: "4px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {job.badge}
                                            </span>
                                        )}
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "0.75rem",
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
                                                    borderRadius: "6px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "1.2rem",
                                                }}
                                            >
                                                🔷
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
                                                        margin: 0,
                                                    }}
                                                >
                                                    {job.salary}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "0.8rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                <span>📍</span>
                                                <span>{job.location}</span>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                <span>💼</span>
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ textAlign: "center" }}>
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
                                    View all jobs
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        {/* Overall Rating */}
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "1px solid #e5e7eb",
                                borderRadius: "12px",
                                padding: "1.5rem",
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
                                Overall Rating
                            </h3>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                    }}
                                >
                                    4.8
                                </span>
                                <span
                                    style={{
                                        fontSize: "1.2rem",
                                        color: "#6b7280",
                                    }}
                                >
                                    /5
                                </span>
                                <div style={{ display: "flex", marginLeft: "0.5rem" }}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            style={{
                                                color: star <= 4 ? "#fbbf24" : "#d1d5db",
                                                fontSize: "1.2rem",
                                            }}
                                        >
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {[
                                    { label: "Compensation", value: 85 },
                                    { label: "Career development", value: 78 },
                                    { label: "Culture", value: 92 },
                                    { label: "Workspace", value: 88 },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: "0.25rem",
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <span>{item.label}</span>
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
                                                    width: `${item.value}%`,
                                                    height: "100%",
                                                    backgroundColor: "#fbbf24",
                                                    borderRadius: "3px",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Preview */}
                        <div
                            style={{
                                backgroundColor: "white",
                                border: "1px solid #e5e7eb",
                                borderRadius: "12px",
                                padding: "1.5rem",
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
                                Preview
                            </h3>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {reviews.slice(0, 3).map((review) => (
                                    <div key={review.id}>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: review.bgColor,
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "0.9rem",
                                                }}
                                            >
                                                {review.avatar}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "0.9rem",
                                                            fontWeight: "600",
                                                            color: "#1f2937",
                                                        }}
                                                    >
                                                        {review.name}
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontSize: "0.8rem",
                                                            color: "#9ca3af",
                                                        }}
                                                    >
                                                        {review.timeAgo}
                                                    </span>
                                                </div>
                                                <div style={{ display: "flex", marginTop: "0.25rem" }}>
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span
                                                            key={star}
                                                            style={{
                                                                color: star <= review.rating ? "#fbbf24" : "#d1d5db",
                                                                fontSize: "0.8rem",
                                                            }}
                                                        >
                                                            ⭐
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "#6b7280",
                                                lineHeight: "1.4",
                                                margin: 0,
                                            }}
                                        >
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div style={{ textAlign: "center", marginTop: "1rem" }}>
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
                                    View more
                                </button>
                            </div>
                        </div>

                        {/* Upgrade Banner */}
                        <div
                            style={{
                                background: "linear-gradient(135deg, #ec4899, #f97316)",
                                borderRadius: "12px",
                                padding: "1.5rem",
                                color: "white",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <h4
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    margin: "0 0 0.5rem 0",
                                }}
                            >
                                Unlock more
                            </h4>
                            <h4
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    margin: "0 0 0.5rem 0",
                                }}
                            >
                                company
                            </h4>
                            <h4
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    margin: "0 0 1rem 0",
                                }}
                            >
                                insights
                            </h4>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    opacity: "0.9",
                                    margin: "0 0 1rem 0",
                                }}
                            >
                                mmm iq
                            </p>
                            <button
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                    color: "white",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "6px",
                                    fontSize: "0.8rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                Upgrade to Premium
                            </button>

                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-20px",
                                    right: "-20px",
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "3rem",
                                }}
                            >
                                📊
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