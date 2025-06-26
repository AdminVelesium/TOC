"use client"

import { useState } from "react"
import { Layout, Input, Button, Typography, Avatar, Space, Dropdown, Menu } from "antd"
import {
    SearchOutlined,
    FilterOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
    MoreOutlined,
    MessageOutlined,
    FileTextOutlined,
    UserOutlined,
} from "@ant-design/icons"

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography

const ExternalApplications = () => {
    const [viewMode, setViewMode] = useState("grid")

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

    const heartIconStyle = {
        width: "clamp(20px, 2vw, 24px)",
        height: "clamp(20px, 2vw, 24px)",
        background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "clamp(10px, 1vw, 12px)",
        marginRight: "clamp(8px, 1vw, 12px)",
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

    const heroSectionStyle = {
        background: "linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%)",
        borderRadius: "clamp(12px, 1.5vw, 16px)",
        padding: "clamp(32px, 4vw, 48px)",
        marginBottom: "clamp(24px, 3vw, 32px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
    }

    const titleSectionStyle = {
        marginBottom: "clamp(24px, 3vw, 32px)",
    }

    const filterSectionStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        padding: "clamp(16px, 2vw, 20px)",
        marginBottom: "clamp(20px, 2.5vw, 24px)",
        border: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "clamp(12px, 1.5vw, 16px)",
        flexWrap: "wrap",
    }

    const kanbanContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 30vw, 320px), 1fr))",
        gap: "clamp(16px, 2vw, 24px)",
        marginBottom: "clamp(24px, 3vw, 32px)",
    }

    const columnStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        border: "1px solid #f0f0f0",
        minHeight: "clamp(400px, 50vw, 600px)",
    }

    const columnHeaderStyle = {
        padding: "clamp(16px, 2vw, 20px)",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }

    const columnContentStyle = {
        padding: "clamp(12px, 1.5vw, 16px)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(12px, 1.5vw, 16px)",
    }

    const candidateCardStyle = {
        background: "#fff",
        border: "1px solid #f0f0f0",
        borderRadius: "clamp(8px, 1vw, 12px)",
        padding: "clamp(16px, 2vw, 20px)",
        transition: "all 0.3s ease",
        cursor: "pointer",
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

    const candidateRoleStyle = {
        fontSize: "clamp(13px, 1.1vw, 14px)",
        color: "#666",
        marginBottom: "clamp(4px, 0.5vw, 6px)",
    }

    const candidateMetaStyle = {
        fontSize: "clamp(12px, 1vw, 13px)",
        color: "#999",
        marginBottom: "clamp(8px, 1vw, 12px)",
    }

    const skillsStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(4px, 0.5vw, 6px)",
        marginBottom: "clamp(12px, 1.5vw, 16px)",
    }

    const skillTagStyle = {
        fontSize: "clamp(11px, 0.9vw, 12px)",
        padding: "2px 6px",
        borderRadius: "10px",
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

    const applications = {
        pending: [
            {
                id: 1,
                name: "Olivia Carter",
                role: "Senior Software Engineer at Tech Solutions Inc.",
                date: "2024-03-15",
                contact: "olivia.carter@example.com",
                skills: ["Remote", "Full-time", "Java"],
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            },
            {
                id: 2,
                name: "Michael Sophia Wright",
                role: "Data Analyst at Analytics Pro",
                date: "2024-03-14",
                contact: "michael.wright@example.com",
                skills: ["Remote", "Full-time"],
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            },
        ],
        awaiting: [
            {
                id: 3,
                name: "Daniel Lee",
                role: "DevOps Engineer at CloudWorks",
                date: "2024-03-08",
                contact: "daniel.lee@example.com",
                skills: ["Remote", "AWS", "Kubernetes"],
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            },
            {
                id: 4,
                name: "Michael Johnson",
                role: "Marketing Specialist at Brand Builders",
                date: "2024-03-07",
                contact: "michael.johnson@example.com",
                skills: ["Remote", "Full-time"],
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            },
        ],
        interview: [
            {
                id: 5,
                name: "Jessica Garcia",
                role: "Human Resources Manager at People First",
                date: "2024-03-14",
                contact: "jessica.g@example.com",
                skills: ["On-site", "Recruitment", "Employee Relations"],
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            },
            {
                id: 6,
                name: "William Rodriguez",
                role: "Backend Developer at",
                date: "2024-03-13",
                contact: "william.r@example.com",
                skills: ["Remote", "Full-time"],
                avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
            },
        ],
        hired: [
            {
                id: 7,
                name: "David Wilson",
                role: "Sales Executive at Growth Solutions",
                date: "2024-03-09",
                contact: "david.w@example.com",
                skills: ["On-site", "CRM", "Lead Generation"],
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
            },
        ],
    }

    const userMenu = (
        <Menu>
            <Menu.Item key="profile">
                <Avatar
                    size={24}
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    style={{ marginRight: "8px" }}
                />
                Profile
            </Menu.Item>
        </Menu>
    )

    const renderCandidateCard = (candidate) => (
        <div
            key={candidate.id}
            style={candidateCardStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"
                e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none"
                e.currentTarget.style.transform = "translateY(0)"
            }}
        >
            <div style={candidateHeaderStyle}>
                <Avatar size={48} src={candidate.avatar} />
                <div style={candidateInfoStyle}>
                    <div style={candidateNameStyle}>{candidate.name}</div>
                    <div style={candidateRoleStyle}>{candidate.role}</div>
                </div>
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item key="view">View Profile</Menu.Item>
                            <Menu.Item key="contact">Contact</Menu.Item>
                            <Menu.Item key="schedule">Schedule Interview</Menu.Item>
                        </Menu>
                    }
                    placement="bottomRight"
                >
                    <Button type="text" icon={<MoreOutlined />} size="small" />
                </Dropdown>
            </div>

            <div style={candidateMetaStyle}>
                <div>Application Date: {candidate.date}</div>
                <div>Contact: {candidate.contact}</div>
            </div>

            <div style={skillsStyle}>
                {candidate.skills.map((skill, index) => (
                    <span key={index} style={skillTagStyle}>
                        {skill}
                    </span>
                ))}
            </div>

            <div style={cardActionsStyle}>
                <Space>
                    <Button type="text" icon={<MessageOutlined />} size="small" />
                    <Button type="text" icon={<FileTextOutlined />} size="small" />
                </Space>
            </div>
        </div>
    )

    return (
        <Layout style={containerStyle}>
            {/* Header */}
            <Header style={headerStyle}>
                <div style={logoStyle}>
                    <div style={heartIconStyle}>♥</div>
                    <span>Talent on Cloud</span>
                </div>

                {/* <div style={navStyle}>
                    <div style={navItemStyle}>Dashboard</div>
                    <div style={navItemStyle}>External</div>
                    <div style={activeNavItemStyle}>Applications</div>
                </div> */}

                <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 16px)" }}>
                    <Dropdown overlay={userMenu} placement="bottomRight">
                        <Avatar
                            size={32}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                            style={{ cursor: "pointer" }}
                        />
                    </Dropdown>
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
                        <div style={menuItemStyle}>
                            <UserOutlined />
                            <span>External Candidates</span>
                        </div>
                        <div style={activeMenuItemStyle}>
                            <UserOutlined />
                            <span>External Applications</span>
                        </div>
                    </div>
                </Sider>

                {/* Main Content */}
                <Content style={contentStyle}>
                    {/* Hero Section */}
                    <div style={heroSectionStyle}>
                        <Title
                            level={2}
                            style={{
                                fontSize: "clamp(24px, 3vw, 32px)",
                                fontWeight: "700",
                                color: "#1a1a1a",
                                margin: 0,
                                marginBottom: "clamp(8px, 1vw, 12px)",
                            }}
                        >
                            External Applications
                        </Title>
                        <Text
                            style={{
                                fontSize: "clamp(14px, 1.2vw, 16px)",
                                color: "#666",
                            }}
                        >
                            A screen displaying candidates who have applied externally, including their application status and
                            relevant qualifications.
                        </Text>
                    </div>

                    {/* Filter Section */}
                    <div style={filterSectionStyle}>
                        <Input
                            placeholder="Search applications..."
                            prefix={<SearchOutlined style={{ color: "#999" }} />}
                            style={{
                                width: "clamp(200px, 25vw, 300px)",
                                borderRadius: "6px",
                                fontSize: "clamp(13px, 1.1vw, 14px)",
                            }}
                        />
                        <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 1vw, 12px)" }}>
                            <Button
                                icon={<FilterOutlined />}
                                style={{
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                    borderRadius: "6px",
                                }}
                            >
                                Filter
                            </Button>
                            <div style={{ display: "flex", gap: "4px" }}>
                                <Button
                                    type={viewMode === "grid" ? "primary" : "default"}
                                    icon={<AppstoreOutlined />}
                                    size="small"
                                    onClick={() => setViewMode("grid")}
                                />
                                <Button
                                    type={viewMode === "list" ? "primary" : "default"}
                                    icon={<UnorderedListOutlined />}
                                    size="small"
                                    onClick={() => setViewMode("list")}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Kanban Board */}
                    <div style={kanbanContainerStyle}>
                        {/* Pending Review Column */}
                        <div style={columnStyle}>
                            <div style={columnHeaderStyle}>
                                <Title
                                    level={4}
                                    style={{
                                        fontSize: "clamp(16px, 1.4vw, 18px)",
                                        fontWeight: "600",
                                        color: "#1a1a1a",
                                        margin: 0,
                                    }}
                                >
                                    Pending Review ({applications.pending.length})
                                </Title>
                            </div>
                            <div style={columnContentStyle}>{applications.pending.map(renderCandidateCard)}</div>
                        </div>

                        {/* Awaiting Information Column */}
                        <div style={columnStyle}>
                            <div style={columnHeaderStyle}>
                                <Title
                                    level={4}
                                    style={{
                                        fontSize: "clamp(16px, 1.4vw, 18px)",
                                        fontWeight: "600",
                                        color: "#1a1a1a",
                                        margin: 0,
                                    }}
                                >
                                    Awaiting Information ({applications.awaiting.length})
                                </Title>
                            </div>
                            <div style={columnContentStyle}>{applications.awaiting.map(renderCandidateCard)}</div>
                        </div>

                        {/* Interview Scheduled Column */}
                        <div style={columnStyle}>
                            <div style={columnHeaderStyle}>
                                <Title
                                    level={4}
                                    style={{
                                        fontSize: "clamp(16px, 1.4vw, 18px)",
                                        fontWeight: "600",
                                        color: "#1a1a1a",
                                        margin: 0,
                                    }}
                                >
                                    Interview Scheduled ({applications.interview.length})
                                </Title>
                            </div>
                            <div style={columnContentStyle}>{applications.interview.map(renderCandidateCard)}</div>
                        </div>

                        {/* Hired Column */}
                        <div style={columnStyle}>
                            <div style={columnHeaderStyle}>
                                <Title
                                    level={4}
                                    style={{
                                        fontSize: "clamp(16px, 1.4vw, 18px)",
                                        fontWeight: "600",
                                        color: "#1a1a1a",
                                        margin: 0,
                                    }}
                                >
                                    Hired ({applications.hired.length})
                                </Title>
                            </div>
                            <div style={columnContentStyle}>{applications.hired.map(renderCandidateCard)}</div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "clamp(32px, 4vw, 40px)",
                            padding: "clamp(16px, 2vw, 20px)",
                            color: "#999",
                            fontSize: "clamp(12px, 1vw, 13px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "clamp(6px, 0.8vw, 8px)",
                        }}
                    >
                        <span>Made with</span>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "#fff",
                                padding: "2px 6px",
                                borderRadius: "4px",
                                fontSize: "clamp(10px, 0.9vw, 12px)",
                                fontWeight: "600",
                            }}
                        >
                            Visily
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ExternalApplications