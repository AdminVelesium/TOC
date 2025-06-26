"use client"

import { useState } from "react"
import {
    Layout,
    Input,
    Button,
    Typography,
    Row,
    Col,
    Select,
    Avatar,
    Tag,
    Table,
    Space,
    Checkbox,
    Pagination,
    Dropdown,
    Menu,
} from "antd"
import {
    SearchOutlined,
    BellOutlined,
    UserOutlined,
    PlusOutlined,
    DownloadOutlined,
    SettingOutlined,
    LogoutOutlined,
    EyeOutlined,
    MailOutlined,
    PhoneOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography
const { Option } = Select

const OtherCompaniesCandidates = () => {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState("grid")
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const handleInternal = () => {
        navigate('/internal-candidates')
    }

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
        height: "100%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
        position: "relative",
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

    const statIconStyle = {
        position: "absolute",
        top: "clamp(12px, 1.5vw, 16px)",
        right: "clamp(12px, 1.5vw, 16px)",
        fontSize: "clamp(20px, 2.5vw, 24px)",
        color: "#e6f0ff",
    }

    const filterSectionStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        padding: "clamp(16px, 2vw, 20px)",
        marginBottom: "clamp(20px, 2.5vw, 24px)",
        border: "1px solid #f0f0f0",
    }

    const filterRowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "clamp(12px, 1.5vw, 16px)",
        flexWrap: "wrap",
    }

    const filterLeftStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
        flex: 1,
        flexWrap: "wrap",
    }

    const filterRightStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(8px, 1vw, 12px)",
    }

    const tableHeaderStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        padding: "clamp(16px, 2vw, 20px)",
        border: "1px solid #f0f0f0",
        marginBottom: "clamp(16px, 2vw, 20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }

    const viewToggleStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(4px, 0.5vw, 6px)",
        background: "#f8f9fa",
        borderRadius: "6px",
        padding: "2px",
    }

    const viewButtonStyle = {
        border: "none",
        background: "transparent",
        padding: "clamp(6px, 0.8vw, 8px)",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "clamp(14px, 1.2vw, 16px)",
        color: "#666",
        transition: "all 0.2s ease",
    }

    const activeViewButtonStyle = {
        ...viewButtonStyle,
        background: "#fff",
        color: "#667eea",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    }

    const candidates = [
        {
            key: "1",
            name: "Alice Johnson",
            email: "alice.j@example.com",
            company: "Tech Solutions Inc.",
            role: "Senior Software Engineer",
            skills: ["React", "Node.js", "AWS", "TypeScript"],
            status: "Available",
            statusColor: "green",
            experience: "8 years",
            location: "San Francisco, CA",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "2",
            name: "Robert Smith",
            email: "robert.s@example.com",
            company: "Global Innovations",
            role: "Product Manager",
            skills: ["Agile", "Market Research", "Jira", "Roadmapping"],
            status: "Engaged",
            statusColor: "blue",
            experience: "10 years",
            location: "New York, NY",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "3",
            name: "Emily Chen",
            email: "emily.c@example.com",
            company: "Fintech Dynamics",
            role: "Data Scientist",
            skills: ["Python", "SQL", "Machine Learning", "Tableau"],
            status: "Available",
            statusColor: "green",
            experience: "6 years",
            location: "Boston, MA",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "4",
            name: "David Lee",
            email: "david.l@example.com",
            company: "Creative Studio X",
            role: "UX/UI Designer",
            skills: ["Figma", "Sketch", "User Research", "Prototyping"],
            status: "Not Interested",
            statusColor: "red",
            experience: "4 years",
            location: "Los Angeles, CA",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "5",
            name: "Sarah Parker",
            email: "sarah.p@example.com",
            company: "HealthTech Innovations",
            role: "DevOps Engineer",
            skills: ["Docker", "Kubernetes", "Terraform", "CI/CD"],
            status: "Engaged",
            statusColor: "blue",
            experience: "7 years",
            location: "Austin, TX",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "6",
            name: "Michael Brown",
            email: "michael.b@example.com",
            company: "Retail Solutions Co.",
            role: "Business Analyst",
            skills: ["SQL", "Data Modeling", "Requirements Gathering", "Power BI"],
            status: "Available",
            statusColor: "green",
            experience: "5 years",
            location: "Chicago, IL",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "7",
            name: "Jessica Garcia",
            email: "jessica.g@example.com",
            company: "EduServe Systems",
            role: "Full Stack Developer",
            skills: ["Python", "Django", "React", "PostgreSQL"],
            status: "On Hold",
            statusColor: "orange",
            experience: "6 years",
            location: "Seattle, WA",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "8",
            name: "Daniel White",
            email: "daniel.w@example.com",
            company: "Logistics Pro",
            role: "Supply Chain Specialist",
            skills: ["SAP", "Logistics Management", "Forecasting", "Excel"],
            status: "Available",
            statusColor: "green",
            experience: "9 years",
            location: "Dallas, TX",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
        },
    ]

    const getStatusColor = (color) => {
        const colors = {
            green: "#52c41a",
            blue: "#1890ff",
            red: "#ff4d4f",
            orange: "#fa8c16",
        }
        return colors[color] || "#666"
    }

    const columns = [
        {
            title: "",
            dataIndex: "checkbox",
            width: 50,
            render: (_, record) => <Checkbox />,
        },
        {
            title: "Candidate",
            dataIndex: "candidate",
            key: "candidate",
            render: (_, record) => (
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Avatar size={40} src={record.avatar} />
                    <div>
                        <div style={{ fontWeight: "500", fontSize: "clamp(13px, 1.1vw, 14px)" }}>{record.name}</div>
                        <div style={{ color: "#666", fontSize: "clamp(12px, 1vw, 13px)" }}>{record.email}</div>
                    </div>
                </div>
            ),
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
            render: (text) => <span style={{ fontSize: "clamp(13px, 1.1vw, 14px)" }}>{text}</span>,
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            render: (text) => <span style={{ fontSize: "clamp(13px, 1.1vw, 14px)" }}>{text}</span>,
        },
        {
            title: "Skills",
            dataIndex: "skills",
            key: "skills",
            render: (skills) => (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                    {skills.slice(0, 3).map((skill, index) => (
                        <Tag
                            key={index}
                            style={{
                                fontSize: "clamp(11px, 0.9vw, 12px)",
                                padding: "2px 6px",
                                borderRadius: "10px",
                                background: "#f0f4ff",
                                color: "#667eea",
                                border: "1px solid #e6f0ff",
                            }}
                        >
                            {skill}
                        </Tag>
                    ))}
                    {skills.length > 3 && (
                        <Tag
                            style={{
                                fontSize: "clamp(11px, 0.9vw, 12px)",
                                padding: "2px 6px",
                                borderRadius: "10px",
                                background: "#f5f5f5",
                                color: "#999",
                                border: "1px solid #e6e6e6",
                            }}
                        >
                            +{skills.length - 3}
                        </Tag>
                    )}
                </div>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status, record) => (
                <Tag
                    color={record.statusColor}
                    style={{
                        fontSize: "clamp(11px, 0.9vw, 12px)",
                        padding: "2px 8px",
                        borderRadius: "12px",
                    }}
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: "Experience",
            dataIndex: "experience",
            key: "experience",
            render: (text) => <span style={{ fontSize: "clamp(13px, 1.1vw, 14px)" }}>{text}</span>,
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            render: (text) => <span style={{ fontSize: "clamp(13px, 1.1vw, 14px)" }}>{text}</span>,
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button type="text" icon={<EyeOutlined />} size="small" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
                        View Profile
                    </Button>
                    <Button type="text" icon={<MailOutlined />} size="small" />
                    <Button type="text" icon={<PhoneOutlined />} size="small" />
                </Space>
            ),
        },
    ]

    const userMenu = (
        <Menu>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                Log Out
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout style={containerStyle}>
            {/* Header */}
            <Header style={headerStyle}>
                <div style={logoStyle}>
                    <div style={logoIconStyle}>T</div>
                    <span>Talent on Cloud</span>
                </div>

                {/* <div style={navStyle}>
                    <div style={navItemStyle}>Internal Candidates</div>
                    <div style={activeNavItemStyle}>Other Companies</div>
                    <div style={navItemStyle}>External Applications</div>
                </div> */}

                <div style={headerActionsStyle}>
                    <Input
                        placeholder="Search candidates..."
                        prefix={<SearchOutlined style={{ color: "#999" }} />}
                        style={{
                            width: "clamp(200px, 20vw, 250px)",
                            borderRadius: "6px",
                            fontSize: "clamp(13px, 1.1vw, 14px)",
                        }}
                    />
                    <Button type="text" icon={<BellOutlined />} style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }} />
                    <Button type="text" icon={<SettingOutlined />} style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }} />
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
                            <span onClick={handleInternal}>Internal Candidates</span>
                        </div>
                        <div style={activeMenuItemStyle}>
                            <UserOutlined />
                            <span>Other Companies</span>
                        </div>
                        <div style={menuItemStyle}>
                            <UserOutlined />
                            <span>External Apps</span>
                        </div>
                    </div>
                </Sider>

                {/* Main Content */}
                <Content style={contentStyle}>
                    {/* Title Section */}
                    <div style={titleSectionStyle}>
                        <Title
                            level={2}
                            style={{
                                fontSize: "clamp(20px, 2.5vw, 24px)",
                                fontWeight: "600",
                                color: "#1a1a1a",
                                margin: 0,
                                marginBottom: "clamp(8px, 1vw, 12px)",
                            }}
                        >
                            Other Companies Candidates
                        </Title>
                    </div>

                    {/* Stats Row */}
                    <Row gutter={[16, 16]} style={statsRowStyle}>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <div style={statIconStyle}>👥</div>
                                <span style={statNumberStyle}>10</span>
                                <div style={statLabelStyle}>Total External Candidates</div>
                                <div style={statDescStyle}>Currently listed from all partners</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <div style={statIconStyle}>💼</div>
                                <span style={statNumberStyle}>32</span>
                                <div style={statLabelStyle}>Active Engagements</div>
                                <div style={statDescStyle}>Candidates in active interview processes</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <div style={statIconStyle}>➕</div>
                                <span style={statNumberStyle}>187</span>
                                <div style={statLabelStyle}>Recently Added</div>
                                <div style={statDescStyle}>New profiles added in the last 30 days</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div style={statCardStyle}>
                                <div style={statIconStyle}>📊</div>
                                <span style={statNumberStyle}>React, Python, SQL</span>
                                <div style={statLabelStyle}>Top Skills Identified</div>
                                <div style={statDescStyle}>Most demanded skills among candidates</div>
                            </div>
                        </Col>
                    </Row>

                    {/* Filter Section */}
                    <div style={filterSectionStyle}>
                        <div style={filterRowStyle}>
                            <div style={filterLeftStyle}>
                                <Input
                                    placeholder="Search candidates..."
                                    prefix={<SearchOutlined style={{ color: "#999" }} />}
                                    style={{
                                        width: "clamp(200px, 25vw, 300px)",
                                        borderRadius: "6px",
                                        fontSize: "clamp(13px, 1.1vw, 14px)",
                                    }}
                                />
                                <Select
                                    defaultValue="All Companies"
                                    style={{
                                        width: "clamp(120px, 15vw, 150px)",
                                        fontSize: "clamp(13px, 1.1vw, 14px)",
                                    }}
                                >
                                    <Option value="all">All Companies</Option>
                                    <Option value="tech">Tech Solutions Inc.</Option>
                                    <Option value="global">Global Innovations</Option>
                                    <Option value="fintech">Fintech Dynamics</Option>
                                </Select>
                                <Select
                                    defaultValue="All Roles"
                                    style={{
                                        width: "clamp(120px, 15vw, 150px)",
                                        fontSize: "clamp(13px, 1.1vw, 14px)",
                                    }}
                                >
                                    <Option value="all">All Roles</Option>
                                    <Option value="engineer">Software Engineer</Option>
                                    <Option value="manager">Product Manager</Option>
                                    <Option value="designer">UX/UI Designer</Option>
                                </Select>
                                <Select
                                    defaultValue="All Statuses"
                                    style={{
                                        width: "clamp(120px, 15vw, 150px)",
                                        fontSize: "clamp(13px, 1.1vw, 14px)",
                                    }}
                                >
                                    <Option value="all">All Statuses</Option>
                                    <Option value="available">Available</Option>
                                    <Option value="engaged">Engaged</Option>
                                    <Option value="not-interested">Not Interested</Option>
                                </Select>
                            </div>
                            <div style={filterRightStyle}>
                                <Button
                                    icon={<DownloadOutlined />}
                                    style={{
                                        fontSize: "clamp(13px, 1.1vw, 14px)",
                                        borderRadius: "6px",
                                    }}
                                >
                                    Download
                                </Button>
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    style={{
                                        background: "#667eea",
                                        borderColor: "#667eea",
                                        borderRadius: "6px",
                                        fontSize: "clamp(13px, 1.1vw, 14px)",
                                    }}
                                >
                                    Add New Candidate
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Table Header */}
                    <div style={tableHeaderStyle}>
                        <Title
                            level={4}
                            style={{
                                fontSize: "clamp(16px, 1.4vw, 18px)",
                                fontWeight: "600",
                                color: "#1a1a1a",
                                margin: 0,
                            }}
                        >
                            Candidate Profiles
                        </Title>
                        <div style={viewToggleStyle}>
                            <button
                                style={viewMode === "grid" ? activeViewButtonStyle : viewButtonStyle}
                                onClick={() => setViewMode("grid")}
                            >
                                <AppstoreOutlined />
                            </button>
                            <button
                                style={viewMode === "list" ? activeViewButtonStyle : viewButtonStyle}
                                onClick={() => setViewMode("list")}
                            >
                                <UnorderedListOutlined />
                            </button>
                        </div>
                    </div>

                    {/* Candidates Table */}
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "clamp(8px, 1vw, 12px)",
                            border: "1px solid #f0f0f0",
                            overflow: "hidden",
                        }}
                    >
                        <Table
                            columns={columns}
                            dataSource={candidates}
                            pagination={false}
                            rowSelection={{
                                selectedRowKeys,
                                onChange: setSelectedRowKeys,
                            }}
                            style={{
                                fontSize: "clamp(13px, 1.1vw, 14px)",
                            }}
                        />

                        {/* Pagination */}
                        <div
                            style={{
                                padding: "clamp(16px, 2vw, 20px)",
                                borderTop: "1px solid #f0f0f0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "clamp(12px, 1.5vw, 16px)",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                    color: "#666",
                                }}
                            >
                                Showing 1 to 8 of 10 results
                            </Text>
                            <Pagination
                                current={1}
                                total={10}
                                pageSize={8}
                                showSizeChanger={false}
                                style={{
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                }}
                            />
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default OtherCompaniesCandidates