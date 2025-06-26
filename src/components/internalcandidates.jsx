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
    Tabs,
} from "antd"
import {
    SearchOutlined,
    BellOutlined,
    UserOutlined,
    PlusOutlined,
    FilterOutlined,
    SettingOutlined,
    LogoutOutlined,
    EyeOutlined,
    MailOutlined,
    PhoneOutlined,
    AppstoreOutlined,
    HeartOutlined,
} from "@ant-design/icons"

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography
const { Option } = Select
const { TabPane } = Tabs

const InternalCandidates = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [activeTab, setActiveTab] = useState("available")

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

    const siderBottomStyle = {
        position: "absolute",
        bottom: "clamp(16px, 2vw, 20px)",
        left: 0,
        right: 0,
        padding: "0 clamp(16px, 2vw, 20px)",
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

    const filterLeftStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
        flex: 1,
        flexWrap: "wrap",
    }

    const statusTabsStyle = {
        marginBottom: "clamp(20px, 2.5vw, 24px)",
    }

    const statusTabStyle = {
        background: "#f5f5f5",
        color: "#666",
        border: "1px solid #e6e6e6",
        borderRadius: "clamp(6px, 0.8vw, 8px)",
        padding: "clamp(8px, 1vw, 12px) clamp(16px, 2vw, 20px)",
        fontSize: "clamp(13px, 1.1vw, 14px)",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
        minWidth: "clamp(100px, 12vw, 120px)",
        textAlign: "center",
    }

    const activeStatusTabStyle = {
        ...statusTabStyle,
        background: "#667eea",
        color: "#fff",
        borderColor: "#667eea",
    }

    const tableContainerStyle = {
        background: "#fff",
        borderRadius: "clamp(8px, 1vw, 12px)",
        border: "1px solid #f0f0f0",
        overflow: "hidden",
    }

    const tableHeaderStyle = {
        padding: "clamp(16px, 2vw, 20px)",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }

    const paginationStyle = {
        padding: "clamp(16px, 2vw, 20px)",
        borderTop: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
    }

    const candidates = [
        {
            key: "1",
            name: "Alice Johnson",
            email: "alice.j@example.com",
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
            name: "Jessica Garcia",
            email: "jessica.g@example.com",
            role: "Full Stack Developer",
            skills: ["Python", "Django", "React", "PostgreSQL"],
            status: "On Hold",
            statusColor: "orange",
            experience: "6 years",
            location: "Seattle, WA",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "9",
            name: "Sarah Parker",
            email: "sarah.p@example.com",
            role: "DevOps Engineer",
            skills: ["Docker", "Kubernetes", "Terraform", "CI/CD"],
            status: "Engaged",
            statusColor: "blue",
            experience: "7 years",
            location: "Austin, TX",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        },
        {
            key: "10",
            name: "Robert Smith",
            email: "robert.s@example.com",
            role: "Product Manager",
            skills: ["Agile", "Market Research", "Jira", "Roadmapping"],
            status: "Engaged",
            statusColor: "blue",
            experience: "10 years",
            location: "New York, NY",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
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
            title: "Action",
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

    return (
        <Layout style={containerStyle}>
            {/* Header */}
            <Header style={headerStyle}>
                <div style={logoStyle}>
                    <div style={heartIconStyle}>
                        <HeartOutlined />
                    </div>
                    <span>Talent on Cloud</span>
                </div>

                {/* <div style={navStyle}>
                    <div style={activeNavItemStyle}>Internal Candidates</div>
                    <div style={navItemStyle}>Other Companies</div>
                    <div style={navItemStyle}>External Apps</div>
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
                    <Button type="text" icon={<UserOutlined />} style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }} />
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
                        <div style={activeMenuItemStyle}>
                            <UserOutlined />
                            <span>Internal Candidates</span>
                        </div>
                        <div style={menuItemStyle}>
                            <UserOutlined />
                            <span>Other Companies</span>
                        </div>
                        <div style={menuItemStyle}>
                            <UserOutlined />
                            <span>External Apps</span>
                        </div>
                    </div>

                    <div style={siderBottomStyle}>
                        <div style={menuItemStyle}>
                            <SettingOutlined />
                            <span>Settings</span>
                        </div>
                        <div style={menuItemStyle}>
                            <LogoutOutlined />
                            <span>Logout</span>
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
                            Internal Candidates Overview
                        </Title>
                        <Text
                            style={{
                                fontSize: "clamp(14px, 1.2vw, 15px)",
                                color: "#666",
                            }}
                        >
                            A comprehensive view of your internal talent pool, categorized by their current status.
                        </Text>
                    </div>

                    {/* Filter Section */}
                    <div style={filterSectionStyle}>
                        <div style={filterLeftStyle}>
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
                                defaultValue="Experience Level"
                                style={{
                                    width: "clamp(140px, 16vw, 160px)",
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                }}
                            >
                                <Option value="experience">Experience Level</Option>
                                <Option value="junior">Junior (0-2 years)</Option>
                                <Option value="mid">Mid (3-5 years)</Option>
                                <Option value="senior">Senior (5+ years)</Option>
                            </Select>
                            <Select
                                defaultValue="Department"
                                style={{
                                    width: "clamp(120px, 14vw, 140px)",
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                }}
                            >
                                <Option value="department">Department</Option>
                                <Option value="engineering">Engineering</Option>
                                <Option value="product">Product</Option>
                                <Option value="design">Design</Option>
                            </Select>
                            <Button
                                type="text"
                                icon={<FilterOutlined />}
                                style={{
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                    color: "#667eea",
                                }}
                            >
                                More Filters
                            </Button>
                        </div>
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
                            Add New Candidate
                        </Button>
                    </div>

                    {/* Status Tabs */}
                    <div style={statusTabsStyle}>
                        <Row gutter={[8, 8]}>
                            <Col xs={8} sm={6} md={4}>
                                <div
                                    style={activeTab === "available" ? activeStatusTabStyle : statusTabStyle}
                                    onClick={() => setActiveTab("available")}
                                >
                                    Available
                                </div>
                            </Col>
                            <Col xs={8} sm={6} md={4}>
                                <div
                                    style={activeTab === "soft-locked" ? activeStatusTabStyle : statusTabStyle}
                                    onClick={() => setActiveTab("soft-locked")}
                                >
                                    Soft Locked
                                </div>
                            </Col>
                            <Col xs={8} sm={6} md={4}>
                                <div
                                    style={activeTab === "assigned" ? activeStatusTabStyle : statusTabStyle}
                                    onClick={() => setActiveTab("assigned")}
                                >
                                    Assigned to client
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Candidates Table */}
                    <div style={tableContainerStyle}>
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
                            <Button
                                type="text"
                                icon={<AppstoreOutlined />}
                                style={{
                                    fontSize: "clamp(14px, 1.2vw, 16px)",
                                    color: "#666",
                                }}
                            />
                        </div>

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
                        <div style={paginationStyle}>
                            <Pagination
                                current={1}
                                total={20}
                                pageSize={10}
                                showSizeChanger={false}
                                style={{
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                }}
                                itemRender={(current, type, originalElement) => {
                                    if (type === "prev") {
                                        return (
                                            <Button
                                                type="text"
                                                style={{
                                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                                    color: "#666",
                                                }}
                                            >
                                                Previous
                                            </Button>
                                        )
                                    }
                                    if (type === "next") {
                                        return (
                                            <Button
                                                type="text"
                                                style={{
                                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                                    color: "#666",
                                                }}
                                            >
                                                Next
                                            </Button>
                                        )
                                    }
                                    return originalElement
                                }}
                            />
                        </div>
                    </div>

                    {/* Footer */}

                </Content>
            </Layout>
        </Layout>
    )
}

export default InternalCandidates