"use client"

import { useState } from "react"
import PersonalDetails from "./1personal-details"
import Education from "./2education"
import WorkExperience from "./3work-experience"
import Skills from "./4skills"
import Projects from "./5projects"
import { useNavigate } from "react-router-dom"

export default function Setup() {

    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(1)

    const handlehome = () => {
        navigate('/')
    }

    const tabs = [
        { id: 1, name: "Personal Details", component: PersonalDetails },
        { id: 2, name: "Education", component: Education },
        { id: 3, name: "Work Experience", component: WorkExperience },
        { id: 4, name: "Skills", component: Skills },
        { id: 5, name: "Projects / Portfolio", component: Projects },
    ]

    const handleTabClick = (tabId) => {
        setActiveTab(tabId)
    }

    const handleNext = () => {
        if (activeTab < 5) {
            setActiveTab(activeTab + 1)
        }
    }

    const handlePrevious = () => {
        if (activeTab > 1) {
            setActiveTab(activeTab - 1)
        }
    }

    const renderActiveComponent = () => {
        const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component
        if (ActiveComponent) {
            return <ActiveComponent onNext={handleNext} onPrevious={handlePrevious} />
        }
        return null
    }

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                backgroundColor: "#f8f9fa",
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
        >
            {/* Sidebar */}
            <div
                style={{
                    width: "250px",
                    backgroundColor: "white",
                    borderRight: "1px solid #e5e7eb",
                    padding: "20px 0",
                    position: "fixed",
                    height: "100vh",
                    overflowY: "auto",
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
                                    marginTop: "-4vh",
                                    fontFamily: " montserrat, sans-serif",
                                    marginLeft: "0.5vw"
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
                                    paddingLeft: "2vw",
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
                                marginLeft: "-8vw",
                                marginTop: "2vw",
                            }}
                        />
                    </div>

                </div>
                {/* Navigation */}
                <nav>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            style={{
                                padding: "12px 20px",
                                backgroundColor: activeTab === tab.id ? "#eff6ff" : "transparent",
                                borderRight: activeTab === tab.id ? "3px solid #3b82f6" : "3px solid transparent",
                                color: activeTab === tab.id ? "#3b82f6" : "#6b7280",
                                fontSize: "14px",
                                fontWeight: activeTab === tab.id ? "500" : "400",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== tab.id) {
                                    e.target.style.backgroundColor = "#f9fafb"
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== tab.id) {
                                    e.target.style.backgroundColor = "transparent"
                                }
                            }}
                        >
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: activeTab === tab.id ? "#3b82f6" : "#f3f4f6",
                                    borderRadius: "4px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <div
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        backgroundColor: activeTab === tab.id ? "white" : "#d1d5db",
                                        borderRadius: "2px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "8px",
                                        fontWeight: "bold",
                                        color: activeTab === tab.id ? "#3b82f6" : "white",
                                    }}
                                >
                                    {activeTab === tab.id ? "✓" : tab.id}
                                </div>
                            </div>
                            {tab.name}
                        </div>
                    ))}
                </nav>
                {/* Progress Indicator */}
                <div
                    style={{
                        padding: "20px",
                        marginTop: "20px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "12px",
                            color: "#6b7280",
                            marginBottom: "8px",
                        }}
                    >
                        Progress: {activeTab}/5
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
                                width: `${(activeTab / 5) * 100}%`,
                                height: "100%",
                                backgroundColor: "#3b82f6",
                                borderRadius: "3px",
                                transition: "width 0.3s ease",
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div
                style={{
                    flex: 1,
                    marginLeft: "250px",
                    minHeight: "100vh",
                }}
            >
                {renderActiveComponent()}
            </div>
        </div>
    )
}
