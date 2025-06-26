"use client"

import { useState } from "react"
import { Layout, Input, Button, Typography, Row, Col, Select, Avatar, Space } from "antd"
import {
    SearchOutlined,
    BellOutlined,
    UserOutlined,
    PlusOutlined,
    FilterOutlined,
    ShareAltOutlined,
    MoreOutlined,
    EyeOutlined,
} from "@ant-design/icons"

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography
const { Option } = Select

const ExternalCandidates = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        skills: "Skills",
        experience: "Experience",
        availability: "Availability",
    })

    const containerStyle = {
        minHeight: "100vh",
        background: "#f8fafc",
        width: "100vw",
        maxWidth: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
    }

    const headerStyle = {
        background: "#fff",
        padding: "0 clamp(16px, 2vw, 24px)",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "clamp(56px, 7vw, 64px)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
    }

    const logoStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(8px, 1vw, 12px)",
        fontSize: "clamp(16px, 1.4vw, 18px)",
        fontWeight: "600",
        color: "#1a1a1a",
    }

    const logoIconStyle = {
        width: "clamp(24px, 2.5vw, 28px)",
        height: "clamp(24px, 2.5vw, 28px)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "clamp(12px, 1.2vw, 14px)",
        fontWeight: "bold",
    }

    const navStyle = {
        display: "flex",
        gap: "clamp(24px, 3vw, 32px)",
        alignItems: "center",
    }

    const navItemStyle = {
        fontSize: "clamp(14px, 1.2vw, 15px)",
        color: "#666",
        cursor: "pointer",
        padding: "clamp(8px, 1vw, 10px) 0",
        borderBottom: "2px solid transparent",
        transition: "all 0.3s ease",
    }

    const activeNavItemStyle = {
        ...navItemStyle,
        color: "#667eea",
        borderBottomColor: "#667eea",
        fontWeight: "500",
    }

    const headerActionsStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
    }

    const siderStyle = {
        background: "#fff",
        borderRight: "1px solid #f0f0f0",
        width: "clamp(200px, 15vw, 240px)",
        minHeight: "100vh",
        position: "fixed",
        left: 0,
        top: "clamp(56px, 7vw, 64px)",
        zIndex: 50,
        overflow: "auto",
    }

    const siderMenuStyle = {
        padding: "clamp(16px, 2vw, 20px) 0",
    }

    const menuItemStyle = {
        padding: "clamp(10px, 1.2vw, 12px) clamp(16px, 2vw, 20px)",
        display: "flex",
        alignItems: "center",
        gap: "clamp(8px, 1vw, 12px)",
        fontSize: "clamp(13px, 1.1vw, 14px)",
        color: "#666",
        cursor: "pointer",
        transition: "all 0.3s ease",
        borderRadius: "0 20px 20px 0",
        margin: "0 clamp(8px, 1vw, 12px) clamp(4px, 0.5vw, 6px) 0",
    }

    const activeMenuItemStyle = {
        ...menuItemStyle,
        background: "#667eea",
        color: "#fff",
        fontWeight: "500",
    }

    const contentStyle = {
        marginLeft: "clamp(200px, 15vw, 240px)",
        marginTop: "clamp(56px, 7vw, 64px)",
        padding: "clamp(20px, 2.5vw, 24px)",
        minHeight: "calc(100vh - clamp(56px, 7vw, 64px))",
        background: "#f8fafc",
    }

    const titleSectionStyle = {
        marginBottom: "clamp(24px, 3vw, 32px)",
    }

    const statsRowStyle = {
        marginBottom: "clamp(24px, 3vw, 32px)",
    }

    const statCardStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        padding: "clamp(16px, 2vw, 20px)",
        border: "1px solid #f0f0f0",
        textAlign: "center",
        height: "100%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
    }

    const statNumberStyle = {
        fontSize: "clamp(24px, 3vw, 32px)",
        fontWeight: "700",
        color: "#1a1a1a",
        marginBottom: "clamp(4px, 0.5vw, 6px)",
        display: "block",
    }

    const statLabelStyle = {
        fontSize: "clamp(12px, 1vw, 13px)",
        color: "#666",
        fontWeight: "500",
    }

    const statDescStyle = {
        fontSize: "clamp(11px, 0.9vw, 12px)",
        color: "#999",
        marginTop: "clamp(4px, 0.5vw, 6px)",
    }

    const filterSectionStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        padding: "clamp(16px, 2vw, 20px)",
        marginBottom: "clamp(20px, 2.5vw, 24px)",
        border: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
        flexWrap: "wrap",
    }

    const candidateCardStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        padding: "clamp(16px, 2vw, 20px)",
        border: "1px solid #f0f0f0",
        height: "100%",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
    }

    const candidateHeaderStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
        marginBottom: "clamp(12px, 1.5vw, 16px)",
    }

    const candidateInfoStyle = {
        flex: 1,
    }

    const candidateNameStyle = {
        fontSize: "clamp(15px, 1.3vw, 16px)",
        fontWeight: "600",
        color: "#1a1a1a",
        marginBottom: "clamp(2px, 0.3vw, 4px)",
    }

    const candidateTitleStyle = {
        fontSize: "clamp(13px, 1.1vw, 14px)",
        color: "#666",
        marginBottom: "clamp(4px, 0.5vw, 6px)",
    }

    const candidateMetaStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(8px, 1vw, 12px)",
        marginBottom: "clamp(12px, 1.5vw, 16px)",
        fontSize: "clamp(12px, 1vw, 13px)",
    }

    const skillsStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(4px, 0.5vw, 6px)",
        marginBottom: "clamp(12px, 1.5vw, 16px)",
    }

    const skillTagStyle = {
        fontSize: "clamp(11px, 0.9vw, 12px)",
        padding: "2px 8px",
        borderRadius: "12px",
        background: "#f0f4ff",
        color: "#667eea",
        border: "1px solid #e6f0ff",
    }

    const cardActionsStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "clamp(8px, 1vw, 12px)",
        borderTop: "1px solid #f0f0f0",
    }

    const candidates = [
        {
            id: 1,
            name: "Olivia Chen",
            title: "Senior Software Engineer at Innovative Solutions",
            experience: "7 years",
            availability: "Immediately Available",
            availabilityColor: "green",
            skills: ["React", "Node.js", "AWS", "PostgreSQL"],
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 2,
            name: "Marcus Thorne",
            title: "Product Manager at Synergy Corp",
            experience: "5 years",
            availability: "2 Weeks Notice",
            availabilityColor: "orange",
            skills: ["Agile", "Market Research", "Roadmapping", "SaaS"],
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 3,
            name: "Sophia Rodriguez",
            title: "UX/UI Designer at Design Studio",
            experience: "4 years",
            availability: "Immediately Available",
            availabilityColor: "green",
            skills: ["Figma", "Sketch", "User Research", "Prototyping"],
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 4,
            name: "David Kim",
            title: "Data Scientist at Quantify Analytics",
            experience: "6 years",
            availability: "Negotiable",
            availabilityColor: "blue",
            skills: ["Python", "R", "Machine Learning", "Big Data"],
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 5,
            name: "Elena Petrova",
            title: "Marketing Director at BrandBoost Agency",
            experience: "8 years",
            availability: "Immediately Available",
            availabilityColor: "green",
            skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 6,
            name: "Daniel Lee",
            title: "DevOps Engineer at CloudBridge Solutions",
            experience: "5 years",
            availability: "2 Weeks Notice",
            availabilityColor: "orange",
            skills: ["Kubernetes", "Docker", "CI/CD", "Azure"],
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 7,
            name: "Jessica Wong",
            title: "Customer Success Manager at ClientCare Inc.",
            experience: "5 years",
            availability: "Immediately Available",
            availabilityColor: "green",
            skills: ["CRM", "Client Relations", "Onboarding", "SaaS"],
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 8,
            name: "Arthur Miller",
            title: "Senior Quality Assurance Engineer at Precision Testing Labs",
            experience: "7 years",
            availability: "Negotiable",
            availabilityColor: "blue",
            skills: ["Automated Testing", "Manual Testing", "Jira", "TestRail"],
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 9,
            name: "Chloe Dubois",
            title: "Financial Analyst at Global Finance Partners",
            experience: "4 years",
            availability: "2 Weeks Notice",
            availabilityColor: "orange",
            skills: ["Financial Modeling", "Data Analysis", "Excel", "SAP"],
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 10,
            name: "Ben Carter",
            title: "Sales Executive at GrowthForge Solutions",
            experience: "6 years",
            availability: "Immediately Available",
            availabilityColor: "green",
            skills: ["B2B Sales", "Lead Generation", "Negotiation", "CRM"],
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        },
    ]

    const getAvailabilityColor = (color) => {
        const colors = {
            green: "#52c41a",
            orange: "#fa8c16",
            blue: "#1890ff",
        }
        return colors[color] || "#666"
    }

    return (
        <Layout style={containerStyle}>
            {/* Header */}
            <Header style={headerStyle}>
                {/* Logo Section from Homepage.jsx */}
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
                                marginTop: "-4vh",
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
                            marginTop: "2vw",
                        }}
                    />
                </div>

                {/* <div style={navStyle}>
                    <div style={navItemStyle}>Dashboard</div>
                    <div style={activeNavItemStyle}>External</div>
                    <div style={navItemStyle}>Applications</div>
                </div> */}

                <div style={headerActionsStyle}>
                    <Button type="text" icon={<BellOutlined />} style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }} />
                    <Button type="text" icon={<UserOutlined />} style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }} />
                    <Avatar
                        size={32}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </Header>

            <Layout>
                {/* Sidebar */}
                <Sider style={siderStyle} width="clamp(200px, 15vw, 240px)">
                    <div style={siderMenuStyle}>
                        <div style={menuItemStyle}>
                            <UserOutlined />
                            <span>Dashboard</span>
                        </div>
                        <div style={activeMenuItemStyle}>
                            <UserOutlined />
                            <span>External Candidates</span>
                        </div>
                        <div style={menuItemStyle}>
                            <UserOutlined />
                            <span>External Applications</span>
                        </div>
                    </div>
                </Sider>

                {/* Main Content */}
                <Content style={contentStyle}>
                    {/* Title Section */}
                    <div style={titleSectionStyle}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "clamp(8px, 1vw, 12px)",
                                flexWrap: "wrap",
                                gap: "clamp(12px, 1.5vw, 16px)",
                            }}
                        >
                            <Title
                                level={2}
                                style={{
                                    fontSize: "clamp(20px, 2.5vw, 24px)",
                                    fontWeight: "600",
                                    color: "#1a1a1a",
                                    margin: 0,
                                }}
                            >
                                External Candidates
                            </Title>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                                style={{
                                    background: "#667eea",
                                    borderColor: "#667eea",
                                    borderRadius: "6px",
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                    height: "clamp(32px, 3.5vw, 36px)",
                                }}
                            >
                                Add New External Candidate
                            </Button>
                        </div>
                        <Text
                            style={{
                                fontSize: "clamp(14px, 1.2vw, 15px)",
                                color: "#666",
                            }}
                        >
                            A detailed list of candidates from other companies, showcasing their skills, experience, and availability
                            for potential job openings.
                        </Text>
                    </div>

                    {/* Stats Row */}
                    <Row gutter={[16, 16]} style={statsRowStyle}>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <span style={statNumberStyle}>245</span>
                                <div style={statLabelStyle}>Total External Candidates</div>
                                <div style={statDescStyle}>Current pool of external talents</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <span style={statNumberStyle}>68</span>
                                <div style={statLabelStyle}>Immediately Available</div>
                                <div style={statDescStyle}>Ready to start new roles</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <span style={statNumberStyle}>AI/ML Devs</span>
                                <div style={statLabelStyle}>Top Skill Demand</div>
                                <div style={statDescStyle}>Most frequently searched skill</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <span style={statNumberStyle}>12</span>
                                <div style={statLabelStyle}>New Candidates This Week</div>
                                <div style={statDescStyle}>Fresh profiles added recently</div>
                            </div>
                        </Col>
                    </Row>

                    {/* Filter Section */}
                    <div style={filterSectionStyle}>
                        <Input
                            placeholder="Search candidates by name or skill..."
                            prefix={<SearchOutlined style={{ color: "#999" }} />}
                            style={{
                                flex: 1,
                                maxWidth: "clamp(200px, 25vw, 300px)",
                                borderRadius: "6px",
                                fontSize: "clamp(13px, 1.1vw, 14px)",
                            }}
                        />
                        <Select
                            defaultValue="Skills"
                            style={{
                                width: "clamp(100px, 12vw, 120px)",
                                fontSize: "clamp(13px, 1.1vw, 14px)",
                            }}
                            suffixIcon={<FilterOutlined />}
                        >
                            <Option value="skills">Skills</Option>
                            <Option value="react">React</Option>
                            <Option value="python">Python</Option>
                            <Option value="aws">AWS</Option>
                        </Select>
                        <Select
                            defaultValue="Experience"
                            style={{
                                width: "clamp(100px, 12vw, 120px)",
                                fontSize: "clamp(13px, 1.1vw, 14px)",
                            }}
                        >
                            <Option value="experience">Experience</Option>
                            <Option value="junior">Junior (0-2 years)</Option>
                            <Option value="mid">Mid (3-5 years)</Option>
                            <Option value="senior">Senior (5+ years)</Option>
                        </Select>
                        <Select
                            defaultValue="Availability"
                            style={{
                                width: "clamp(100px, 12vw, 120px)",
                                fontSize: "clamp(13px, 1.1vw, 14px)",
                            }}
                        >
                            <Option value="availability">Availability</Option>
                            <Option value="immediate">Immediately Available</Option>
                            <Option value="notice">2 Weeks Notice</Option>
                            <Option value="negotiable">Negotiable</Option>
                        </Select>
                        <Button
                            type="text"
                            style={{
                                fontSize: "clamp(13px, 1.1vw, 14px)",
                                color: "#667eea",
                            }}
                        >
                            Clear Filters
                        </Button>
                    </div>

                    {/* Candidates Grid */}
                    <div
                        style={{
                            marginBottom: "clamp(20px, 2.5vw, 24px)",
                        }}
                    >
                        <Title
                            level={4}
                            style={{
                                fontSize: "clamp(16px, 1.4vw, 18px)",
                                fontWeight: "600",
                                color: "#1a1a1a",
                                marginBottom: "clamp(16px, 2vw, 20px)",
                            }}
                        >
                            All External Profiles
                        </Title>

                        <Row gutter={[16, 16]}>
                            {candidates.map((candidate) => (
                                <Col xs={24} sm={12} lg={8} key={candidate.id}>
                                    <div
                                        style={candidateCardStyle}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"
                                            e.currentTarget.style.transform = "translateY(-2px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)"
                                            e.currentTarget.style.transform = "translateY(0)"
                                        }}
                                    >
                                        <div style={candidateHeaderStyle}>
                                            <Avatar
                                                size={48}
                                                src={candidate.avatar}
                                                style={{
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <div style={candidateInfoStyle}>
                                                <div style={candidateNameStyle}>{candidate.name}</div>
                                                <div style={candidateTitleStyle}>{candidate.title}</div>
                                            </div>
                                        </div>

                                        <div style={candidateMetaStyle}>
                                            <div>
                                                <strong>Experience:</strong> {candidate.experience}
                                            </div>
                                            <div>
                                                <strong>Availability:</strong>{" "}
                                                <span style={{ color: getAvailabilityColor(candidate.availabilityColor) }}>
                                                    {candidate.availability}
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <div
                                                style={{
                                                    fontSize: "clamp(12px, 1vw, 13px)",
                                                    fontWeight: "500",
                                                    color: "#1a1a1a",
                                                    marginBottom: "clamp(6px, 0.8vw, 8px)",
                                                }}
                                            >
                                                Skills:
                                            </div>
                                            <div style={skillsStyle}>
                                                {candidate.skills.map((skill, index) => (
                                                    <span key={index} style={skillTagStyle}>
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div style={cardActionsStyle}>
                                            <Button
                                                type="link"
                                                icon={<EyeOutlined />}
                                                style={{
                                                    padding: 0,
                                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                                    color: "#667eea",
                                                }}
                                            >
                                                View Profile
                                            </Button>
                                            <Space>
                                                <Button
                                                    type="text"
                                                    icon={<ShareAltOutlined />}
                                                    size="small"
                                                    style={{ fontSize: "clamp(12px, 1vw, 14px)" }}
                                                />
                                                <Button
                                                    type="text"
                                                    icon={<MoreOutlined />}
                                                    size="small"
                                                    style={{ fontSize: "clamp(12px, 1vw, 14px)" }}
                                                />
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ExternalCandidates
