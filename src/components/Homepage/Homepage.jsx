"use client"

import { useState } from "react"
import { TfiTwitter } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';




export default function Homepage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [location, setLocation] = useState("Location")

    const navigate = useNavigate();

    const handlehome = () => {
        navigate('/')
    }

    const jobCategories = [
        { name: "Finance", count: "2.5k Jobs", color: "#8B5CF6", bgColor: "#F3F4F6" },
        { name: "Education", count: "1.2k Jobs", color: "#EC4899", bgColor: "#FDF2F8" },
        { name: "IT", count: "3.1k Jobs", color: "#10B981", bgColor: "#F0FDF4" },
        { name: "Marketing", count: "800 Jobs", color: "#8B5CF6", bgColor: "#F5F3FF" },
    ]

    const latestJobs = [
        {
            title: "UI / UX Designer",
            company: "TCS",
            location: "Bangalore, India",
            type: "Full-time",
            logo: "🎨",
            color: "#3B82F6",
        },
        {
            title: "C# Developer",
            company: "TCS",
            location: "Remote, India",
            type: "Full-time",
            logo: "💻",
            color: "#EF4444",
        },
        {
            title: "ReactJS Developer",
            company: "Infosys",
            location: "Pune, India",
            type: "Full-time",
            logo: "⚛️",
            color: "#10B981",
        },
        {
            title: "UI / UX Designer",
            company: "HCL",
            location: "Hyderabad, India",
            type: "Full-time",
            logo: "🎨",
            color: "#3B82F6",
        },
        {
            title: "IT Director",
            company: "Wipro",
            location: "Chennai, India",
            type: "Full-time",
            logo: "👔",
            color: "#F59E0B",
        },
        {
            title: "Product Manager",
            company: "Tech Mahindra",
            location: "Mumbai, India",
            type: "Full-time",
            logo: "📊",
            color: "#EF4444",
        },
    ]

    const companies = [
        { name: "ALQ", logo: "📊" },
        { name: "EDGE LOGISTIX", logo: "🔺" },
        { name: "LABORUM", logo: "⚪" },
        { name: "DESIGNHUT", logo: "🏠" },
    ]

    const careerAdvice = [
        {
            title: "Building scalable, efficient, problem-solving applications.",
            category: "Data Innovation",
            image: "👥",
        },
        {
            title: "Driving innovation through cutting-edge technology and transformative",
            category: "Data Innovation",
            image: "🤝",
        },
        {
            title: "Planning, executing, and delivering projects efficiently",
            category: "Data Innovation",
            image: "👩‍💼",
        },
    ]

    return (
        <div
            style={{
                fontFamily: ' Poppins, sans-serif',
                lineHeight: "1.6",
                color: "#333",
                margin: 0,
                padding: 0,
            }}
        >
            {/* Header */}
            <header
                style={{
                    backgroundColor: "#fff",
                    padding: "1rem 0",
                    borderBottom: "1px solid #e5e7eb",
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
                        flexWrap: "nowrap",
                        gap: "1rem",
                        minHeight: "80px",
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
                                    fontSize: "1.65rem",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                    lineHeight: "1.1",
                                    whiteSpace: "nowrap",
                                    marginLeft: "-8vw",
                                    marginTop: "-4vh"
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
                    <div
                        style={{
                            width: "1px",           // thin line
                            height: "40px",         // adjust height as needed
                            backgroundColor: "#d1d5db", // light gray (Tailwind gray-300)
                            margin: "0 20px",       // optional horizontal spacing
                        }}
                    ></div>

                    <nav
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "-1rem",
                            flexWrap: "nowrap", // prevent nav from wrapping
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "2rem",
                                flexWrap: "nowrap", // prevent nav links from wrapping
                            }}
                        >
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                                Home
                            </a>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                                Job Alerts
                            </a>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                                Companies
                            </a>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                                Partner Bench
                            </a>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "0.9rem" }}>
                                Mentorship Program
                            </a>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <span style={{ fontSize: "0.9rem", color: "#6b7280", paddingLeft: "2vw", cursor: "pointer" }}>Are you an Employer?</span>
                            <button
                                onClick={() => navigate('/signup')}
                                style={{
                                    backgroundColor: "#6366f1",
                                    color: "white",
                                    border: "none",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "6px",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                Signup / Login
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                    padding: "4rem 0",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "3rem",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <h1
                            style={{
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                fontWeight: "700",
                                color: "#1f2937",
                                marginBottom: "1rem",
                                lineHeight: "1.2",
                            }}
                        >
                            <span style={{ color: "#6366f1" }}>16,780 Jobs</span> For You
                        </h1>
                        <p
                            style={{
                                fontSize: "1.1rem",
                                color: "#6b7280",
                                marginBottom: "2rem",
                                maxWidth: "500px",
                            }}
                        >
                            An advanced platform connecting top job seekers, employers, recruiters and related technology. Explore
                            personalized job matches, seamless application processes, and career advancement opportunities.
                        </p>
                        <button
                            style={{
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                padding: "0.75rem 2rem",
                                borderRadius: "8px",
                                fontSize: "1rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Explore now
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
                        {/* Floating Job Cards */}
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: "400px",
                            }}
                        >
                            {/* Background Circle */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "300px",
                                    height: "300px",
                                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                    borderRadius: "50%",
                                    opacity: "0.1",
                                }}
                            ></div>

                            {/* Job Card 1 */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    backgroundColor: "white",
                                    padding: "1rem",
                                    borderRadius: "12px",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                    minWidth: "200px",
                                    zIndex: 2,
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
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor: "#fef3c7",
                                            borderRadius: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.2rem",
                                        }}
                                    >
                                        🎨
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: "600" }}>UI/UX Designer</h4>
                                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280" }}>Full-time • TCS</p>
                                    </div>
                                </div>
                            </div>

                            {/* Job Card 2 */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "60px",
                                    left: "20px",
                                    backgroundColor: "white",
                                    padding: "1rem",
                                    borderRadius: "12px",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                    minWidth: "200px",
                                    zIndex: 2,
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
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor: "#fecaca",
                                            borderRadius: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.2rem",
                                        }}
                                    >
                                        💻
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: "600" }}>Java Developer</h4>
                                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280" }}>4-6 yrs • 50 LPA</p>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Images */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "50px",
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    backgroundColor: "#ddd6fe",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.5rem",
                                }}
                            >
                                👨‍💼
                            </div>

                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "60px",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    backgroundColor: "#fed7d7",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.2rem",
                                }}
                            >
                                👩‍💼
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Search Section */}
            <section
                style={{
                    backgroundColor: "white",
                    padding: "3rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        textAlign: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                            fontWeight: "600",
                            color: "#1f2937",
                            marginBottom: "2rem",
                        }}
                    >
                        Explore more <span style={{ color: "#6366f1" }}>jobs</span>
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            marginBottom: "3rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#f9fafb",
                                borderRadius: "8px",
                                padding: "0.5rem",
                                minWidth: "300px",
                                flex: "1",
                                maxWidth: "400px",
                            }}
                        >
                            <span style={{ padding: "0 0.5rem", color: "#6b7280" }}>🔍</span>
                            <input
                                type="text"
                                placeholder="Search jobs, companies, skills..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "transparent",
                                    flex: 1,
                                    padding: "0.5rem",
                                    fontSize: "0.9rem",
                                }}
                            />
                        </div>

                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={{
                                padding: "0.75rem 1rem",
                                border: "1px solid #d1d5db",
                                borderRadius: "8px",
                                backgroundColor: "white",
                                fontSize: "0.9rem",
                                minWidth: "120px",
                            }}
                        >
                            <option>Location</option>
                            <option>Bangalore</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            <option>Pune</option>
                        </select>

                        <button
                            style={{
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                padding: "0.75rem 2rem",
                                borderRadius: "8px",
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Search
                        </button>
                    </div>

                    {/* Job Categories */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1.5rem",
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        {jobCategories.map((category, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: category.bgColor,
                                    padding: "2rem 1rem",
                                    borderRadius: "12px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.2s",
                                    border: "1px solid #f3f4f6",
                                }}
                            >
                                <div
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: category.color,
                                        borderRadius: "50%",
                                        margin: "0 auto 1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    {category.name === "Finance" && "💰"}
                                    {category.name === "Education" && "📚"}
                                    {category.name === "IT" && "💻"}
                                    {category.name === "Marketing" && "📈"}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.1rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: "0 0 0.5rem 0",
                                    }}
                                >
                                    {category.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#6b7280",
                                        margin: 0,
                                    }}
                                >
                                    {category.count}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Jobs Section */}
            <section
                style={{
                    backgroundColor: "#f9fafb",
                    padding: "4rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2
                            style={{
                                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                                fontWeight: "600",
                                color: "#1f2937",
                                marginBottom: "0.5rem",
                            }}
                        >
                            <span style={{ color: "#6366f1" }}>Latest jobs</span>
                        </h2>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#6b7280",
                            }}
                        >
                            Find your dream job from thousands of job postings
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "1.5rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {latestJobs.map((job, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "white",
                                    padding: "1.5rem",
                                    borderRadius: "12px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                    border: "1px solid #f3f4f6",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            backgroundColor: job.color + "20",
                                            borderRadius: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.5rem",
                                        }}
                                    >
                                        {job.logo}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: "600",
                                                color: "#1f2937",
                                                margin: "0 0 0.5rem 0",
                                            }}
                                        >
                                            {job.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: "0.9rem",
                                                color: "#6b7280",
                                                margin: "0 0 0.5rem 0",
                                            }}
                                        >
                                            {job.company}
                                        </p>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "1rem",
                                                fontSize: "0.8rem",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <span>📍 {job.location}</span>
                                            <span>💼 {job.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button
                            style={{
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                padding: "0.75rem 2rem",
                                borderRadius: "8px",
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            See more
                        </button>
                    </div>
                </div>
            </section>

            {/* Top Companies Section */}
            <section
                style={{
                    backgroundColor: "white",
                    padding: "4rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        textAlign: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                            fontWeight: "600",
                            color: "#1f2937",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Top <span style={{ color: "#6366f1" }}>IT companies</span>
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#6b7280",
                            marginBottom: "3rem",
                        }}
                    >
                        Explore career opportunities from top companies
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#f9fafb",
                                    padding: "2rem 1rem",
                                    borderRadius: "12px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.2s",
                                    border: "1px solid #f3f4f6",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "3rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    {company.logo}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.1rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0,
                                    }}
                                >
                                    {company.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <button
                        style={{
                            backgroundColor: "#6366f1",
                            color: "white",
                            border: "none",
                            padding: "0.75rem 2rem",
                            borderRadius: "8px",
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            fontWeight: "500",
                        }}
                    >
                        See more
                    </button>
                </div>
            </section>

            {/* Build Profile Section */}
            <section
                style={{
                    backgroundColor: "#f9fafb",
                    padding: "4rem 0",
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
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                                    fontWeight: "700",
                                    marginBottom: "1rem",
                                    lineHeight: "1.2",
                                }}
                            >
                                Build a great profile
                            </h2>
                            <p
                                style={{
                                    fontSize: "1.1rem",
                                    marginBottom: "2rem",
                                    opacity: "0.9",
                                }}
                            >
                                Do consectetur proident proident id incididunt consequat consectetur proident qui ex ut. Lorem ipsum
                                dolor sit amet consectetur.
                            </p>
                            <button
                                style={{
                                    backgroundColor: "white",
                                    color: "#6366f1",
                                    border: "none",
                                    padding: "0.75rem 2rem",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                }}
                            >
                                Get started
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
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "4rem",
                                }}
                            >
                                👩‍💼
                            </div>

                            {/* Floating profile cards */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    backgroundColor: "white",
                                    padding: "0.5rem",
                                    borderRadius: "8px",
                                    fontSize: "2rem",
                                }}
                            >
                                📍
                            </div>

                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    left: "20px",
                                    backgroundColor: "white",
                                    padding: "0.5rem",
                                    borderRadius: "50%",
                                    fontSize: "1.5rem",
                                }}
                            >
                                👨‍💼
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Advice Section */}
            <section
                style={{
                    backgroundColor: "white",
                    padding: "4rem 0",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 1rem",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2
                            style={{
                                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                                fontWeight: "600",
                                color: "#1f2937",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Career advices from HR Insiders
                        </h2>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "2rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {careerAdvice.map((advice, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#f9fafb",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                }}
                            >
                                <div
                                    style={{
                                        height: "200px",
                                        backgroundColor: "#e5e7eb",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "4rem",
                                    }}
                                >
                                    {advice.image}
                                </div>
                                <div style={{ padding: "1.5rem" }}>
                                    <span
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "#6366f1",
                                            fontWeight: "500",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        {advice.category}
                                    </span>
                                    <h3
                                        style={{
                                            fontSize: "1.1rem",
                                            fontWeight: "600",
                                            color: "#1f2937",
                                            margin: "0.5rem 0",
                                            lineHeight: "1.4",
                                        }}
                                    >
                                        {advice.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <button
                            style={{
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                padding: "0.75rem 2rem",
                                borderRadius: "8px",
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Read more articles
                        </button>
                    </div>
                </div>
            </section>

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
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                            <div style={{ marginBottom: "1rem" }}>
                                <h4 style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>English</h4>
                            </div>
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
                                        Job Alerts
                                    </a>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Companies
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
                                        Help Center
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
                                        Team
                                    </a>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <a href="#" style={{ color: "#d1d5db", textDecoration: "none", fontSize: "0.9rem" }}>
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem" }}>Subscribe to our newsletter</h4>
                            <p style={{ fontSize: "0.9rem", color: "#d1d5db", marginBottom: "1rem" }}>
                                The latest jobs, articles, and resources, sent to your inbox weekly.
                            </p>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
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
                            © 2025 Talent on Cloud Inc. Privacy • Terms • Sitemap
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