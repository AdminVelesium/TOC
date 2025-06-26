import {
    Layout,
    Menu,
    Card,
    Table,
    Button,
    Input,
    Avatar,
    Badge,
    Progress,
    Row,
    Col,
    Statistic,
    Timeline,
    Tag,
    Space,
    Dropdown,
} from "antd"
import {
    DashboardOutlined,
    FileTextOutlined,
    UserOutlined,
    TeamOutlined,
    SettingOutlined,
    SearchOutlined,
    PlusOutlined,
    BellOutlined,
    FilterOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const { Header, Sider, Content } = Layout
const { Search } = Input

const EmployerDashboard = () => {

    const navigate = useNavigate();

    // Sample data for charts and tables
    const pipelineData = [
        { stage: "New Applications", count: 450, color: "#6366f1" },
        { stage: "Screening", count: 280, color: "#6366f1" },
        { stage: "Interview", count: 120, color: "#6366f1" },
        { stage: "Offer Extended", count: 45, color: "#6366f1" },
        { stage: "Hired", count: 15, color: "#6366f1" },
    ]

    const handlejobpost = () => {
        navigate('/jobposting');
    }

    const jobPostsData = [
        {
            key: "1",
            id: "JP001",
            title: "Senior Software Engineer",
            status: "Active",
            applicants: 125,
            views: 3450,
            actions: ["edit", "view", "delete"],
        },
        {
            key: "2",
            id: "JP002",
            title: "Product Manager",
            status: "Active",
            applicants: 89,
            views: 2800,
            actions: ["edit", "view", "delete"],
        },
        {
            key: "3",
            id: "JP003",
            title: "UX/UI Designer",
            status: "Paused",
            applicants: 60,
            views: 1900,
            actions: ["edit", "view", "delete"],
        },
        {
            key: "4",
            id: "JP004",
            title: "Data Scientist",
            status: "Active",
            applicants: 95,
            views: 3100,
            actions: ["edit", "view", "delete"],
        },
        {
            key: "5",
            id: "JP005",
            title: "Marketing Specialist",
            status: "Closed",
            applicants: 45,
            views: 1500,
            actions: ["edit", "view", "delete"],
        },
        {
            key: "6",
            id: "JP006",
            title: "DevOps Engineer",
            status: "Active",
            applicants: 70,
            views: 2300,
            actions: ["edit", "view", "delete"],
        },
        {
            key: "7",
            id: "JP007",
            title: "Frontend Developer",
            status: "Active",
            applicants: 110,
            views: 3200,
            actions: ["edit", "view", "delete"],
        },
    ]

    const recentActivities = [
        {
            icon: "👤",
            text: "Alice Johnson's status changed to Available.",
            time: "5 minutes ago",
        },
        {
            icon: "👤",
            text: "New candidate, Sam White (Backend Dev), added to database.",
            time: "30 minutes ago",
        },
        {
            icon: "🔒",
            text: "Diana Miller's soft lock extended for 2 weeks.",
            time: "1 hour ago",
        },
        {
            icon: "📋",
            text: "Henry King's assignment to Deloitte confirmed.",
            time: "3 hours ago",
        },
        {
            icon: "📅",
            text: "Review meeting scheduled for upcoming talent pool.",
            time: "Yesterday",
        },
        {
            icon: "📋",
            text: "Updated skills for Bob Williams to include 'AI Prototyping'.",
            time: "2 days ago",
        },
    ]

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: "10%",
        },
        {
            title: "Job Title",
            dataIndex: "title",
            key: "title",
            width: "30%",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: "15%",
            render: (status) => {
                const color = status === "Active" ? "#52c41a" : status === "Paused" ? "#faad14" : "#f5222d"
                return <Tag color={color}>{status}</Tag>
            },
        },
        {
            title: "Applicants",
            dataIndex: "applicants",
            key: "applicants",
            width: "15%",
        },
        {
            title: "Views",
            dataIndex: "views",
            key: "views",
            width: "15%",
        },
        {
            title: "Actions",
            key: "actions",
            width: "15%",
            render: () => (
                <Space>
                    <Button type="text" icon={<EditOutlined />} size="small" />
                    <Button type="text" icon={<EyeOutlined />} size="small" />
                    <Button type="text" icon={<DeleteOutlined />} size="small" />
                </Space>
            ),
        },
    ]

    const userMenu = (
        <Menu>
            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="settings">Settings</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
    )

    return (
        <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
            {/* Fixed Header */}
            <Header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: "#fff",
                    padding: "0 clamp(16px, 3vw, 24px)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "clamp(56px, 7vw, 64px)",
                }}
            >
                {/* Left side - Logo and Navigation */}
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div
                        style={{
                            fontSize: "clamp(16px, 2.5vw, 20px)",
                            fontWeight: "bold",
                            color: "#6366f1",
                            marginRight: "clamp(24px, 5vw, 48px)",
                        }}
                    >
                        Talent on Cloud
                    </div>

                    <Menu
                        mode="horizontal"
                        selectedKeys={["overview"]}
                        style={{
                            border: "none",
                            background: "transparent",
                            fontSize: "clamp(12px, 2vw, 14px)",
                        }}
                    >
                        <Menu.Item key="overview">Overview</Menu.Item>
                        <Menu.Item key="candidates">Candidates</Menu.Item>
                        <Menu.Item key="reports">Reports</Menu.Item>
                    </Menu>
                </div>

                {/* Right side - Search, Actions, Profile */}
                <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 16px)" }}>
                    <Search
                        placeholder="Search jobs, applicants..."
                        style={{
                            width: "clamp(200px, 25vw, 300px)",
                            display: window.innerWidth > 768 ? "block" : "none",
                        }}
                        prefix={<SearchOutlined />}
                    />
                    <Button
                        onClick={handlejobpost}
                        type="primary"
                        icon={<PlusOutlined />}
                        style={{
                            background: "#6366f1",
                            borderColor: "#6366f1",
                            fontSize: "clamp(12px, 2vw, 14px)",
                            height: "clamp(32px, 5vw, 36px)",
                        }}
                    >
                        <span style={{ display: window.innerWidth > 576 ? "inline" : "none" }} >Post New Job</span>
                    </Button>

                    <Badge count={3}>
                        <Button type="text" icon={<BellOutlined />} style={{ fontSize: "clamp(16px, 3vw, 18px)" }} />
                    </Badge>

                    <Dropdown overlay={userMenu} trigger={["click"]}>
                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <Avatar
                                style={{
                                    backgroundColor: "#f56a00",
                                    fontSize: "clamp(12px, 2vw, 14px)",
                                }}
                            >
                                JS
                            </Avatar>
                        </div>
                    </Dropdown>
                </div>
            </Header>
            <Layout style={{ marginTop: "clamp(56px, 7vw, 64px)" }}>
                {/* Fixed Sidebar */}
                <Sider
                    width={clamp(200, 25, 280)}
                    style={{
                        position: "fixed",
                        left: 0,
                        top: "clamp(56px, 7vw, 64px)",
                        bottom: 0,
                        background: "#fff",
                        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
                        overflow: "auto",
                        zIndex: 999,
                    }}
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <Menu
                        mode="inline"
                        selectedKeys={["dashboard"]}
                        style={{
                            height: "100%",
                            borderRight: 0,
                            padding: "clamp(8px, 2vw, 16px) 0",
                            fontSize: "clamp(12px, 2vw, 14px)",
                        }}
                    >
                        <Menu.Item
                            key="dashboard"
                            icon={<DashboardOutlined />}
                            style={{
                                background: "#6366f1",
                                color: "#fff",
                                margin: "4px clamp(8px, 2vw, 12px)",
                                borderRadius: "6px",
                            }}
                        >
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="job-posts" icon={<FileTextOutlined />}>
                            Job Posts
                        </Menu.Item>
                        <Menu.Item key="applicants" icon={<UserOutlined />}>
                            Applicants
                        </Menu.Item>
                        <Menu.Item key="candidates-other" icon={<TeamOutlined />}>
                            Candidates from other emp
                        </Menu.Item>
                        <Menu.Item key="settings" icon={<SettingOutlined />}>
                            Settings
                        </Menu.Item>
                        <Menu.Item key="candidate-management" icon={<TeamOutlined />}>
                            Candidate Management
                        </Menu.Item>
                        <Menu.Item key="external-candidates" icon={<UserOutlined />}>
                            External Candidates
                        </Menu.Item>
                    </Menu>
                </Sider>

                {/* Main Content */}
                <Layout style={{ marginLeft: "clamp(200px, 25vw, 280px)" }}>
                    <Content
                        style={{
                            padding: "clamp(16px, 3vw, 24px)",
                            background: "#f5f5f5",
                            minHeight: "calc(100vh - clamp(56px, 7vw, 64px))",
                            overflow: "auto",
                        }}
                    >
                        {/* Page Title */}
                        <h1
                            style={{
                                fontSize: "clamp(20px, 4vw, 28px)",
                                fontWeight: "bold",
                                color: "#262626",
                                marginBottom: "clamp(16px, 3vw, 24px)",
                                margin: 0,
                            }}
                        >
                            Employer Dashboard
                        </h1>

                        {/* Stats Cards */}
                        <Row gutter={[16, 16]} style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
                            <Col xs={24} sm={12} lg={6}>
                                <Card style={{ textAlign: "center", borderRadius: "8px" }}>
                                    <Statistic
                                        title="Total Job Posts"
                                        value={24}
                                        valueStyle={{
                                            color: "#262626",
                                            fontSize: "clamp(24px, 5vw, 32px)",
                                            fontWeight: "bold",
                                        }}
                                    />
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#8c8c8c",
                                            marginTop: "4px",
                                        }}
                                    >
                                        Active Jobs
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#52c41a",
                                            marginTop: "4px",
                                        }}
                                    >
                                        ↗ +3 vs previous period
                                    </div>
                                </Card>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <Card style={{ textAlign: "center", borderRadius: "8px" }}>
                                    <Statistic
                                        title="Total Applicants"
                                        value="1,234"
                                        valueStyle={{
                                            color: "#262626",
                                            fontSize: "clamp(24px, 5vw, 32px)",
                                            fontWeight: "bold",
                                        }}
                                    />
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#8c8c8c",
                                            marginTop: "4px",
                                        }}
                                    >
                                        New applicants this month
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#52c41a",
                                            marginTop: "4px",
                                        }}
                                    >
                                        ↗ +18% vs previous period
                                    </div>
                                </Card>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <Card style={{ textAlign: "center", borderRadius: "8px" }}>
                                    <Statistic
                                        title="Avg. Days to Hire"
                                        value={28}
                                        valueStyle={{
                                            color: "#262626",
                                            fontSize: "clamp(24px, 5vw, 32px)",
                                            fontWeight: "bold",
                                        }}
                                    />
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#8c8c8c",
                                            marginTop: "4px",
                                        }}
                                    >
                                        Avg. across all hires
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#f5222d",
                                            marginTop: "4px",
                                        }}
                                    >
                                        ↗ -2 days vs previous period
                                    </div>
                                </Card>
                            </Col>

                            <Col xs={24} sm={12} lg={6}>
                                <Card style={{ textAlign: "center", borderRadius: "8px" }}>
                                    <Statistic
                                        title="Interview Scheduled"
                                        value={12}
                                        valueStyle={{
                                            color: "#262626",
                                            fontSize: "clamp(24px, 5vw, 32px)",
                                            fontWeight: "bold",
                                        }}
                                    />
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#8c8c8c",
                                            marginTop: "4px",
                                        }}
                                    >
                                        Upcoming interviews
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "clamp(11px, 2vw, 12px)",
                                            color: "#8c8c8c",
                                            marginTop: "4px",
                                        }}
                                    >
                                        Same as last week vs. previous period
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        {/* Charts Row */}
                        <Row gutter={[16, 16]} style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
                            {/* Applicant Pipeline */}
                            <Col xs={24} lg={12}>
                                <Card
                                    title="Applicant Pipeline"
                                    style={{ borderRadius: "8px", height: "100%" }}
                                    bodyStyle={{ padding: "clamp(16px, 3vw, 24px)" }}
                                >
                                    <div style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "#8c8c8c", marginBottom: "16px" }}>
                                        Number of applicants in each stage of the hiring process
                                    </div>
                                    {pipelineData.map((item, index) => (
                                        <div key={index} style={{ marginBottom: "12px" }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                <span style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>{item.stage}</span>
                                                <span style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: "bold" }}>{item.count}</span>
                                            </div>
                                            <Progress
                                                percent={(item.count / 450) * 100}
                                                showInfo={false}
                                                strokeColor={item.color}
                                                style={{ height: "8px" }}
                                            />
                                        </div>
                                    ))}
                                </Card>
                            </Col>

                            {/* Job Post Views Chart */}
                            <Col xs={24} lg={12}>
                                <Card
                                    title="Job Post Views Over Time"
                                    style={{ borderRadius: "8px", height: "100%" }}
                                    bodyStyle={{ padding: "clamp(16px, 3vw, 24px)" }}
                                >
                                    <div style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "#8c8c8c", marginBottom: "16px" }}>
                                        Monthly trend of job post views
                                    </div>
                                    <div
                                        style={{
                                            height: "200px",
                                            background: "linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)",
                                            borderRadius: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Simulated line chart */}
                                        <svg width="100%" height="100%" style={{ position: "absolute" }}>
                                            <path
                                                d="M 20 150 Q 80 120 140 100 T 260 80 T 380 70"
                                                stroke="#ec4899"
                                                strokeWidth="3"
                                                fill="none"
                                                strokeLinecap="round"
                                            />
                                            <circle cx="20" cy="150" r="4" fill="#ec4899" />
                                            <circle cx="80" cy="120" r="4" fill="#ec4899" />
                                            <circle cx="140" cy="100" r="4" fill="#ec4899" />
                                            <circle cx="200" cy="90" r="4" fill="#ec4899" />
                                            <circle cx="260" cy="80" r="4" fill="#ec4899" />
                                            <circle cx="320" cy="75" r="4" fill="#ec4899" />
                                            <circle cx="380" cy="70" r="4" fill="#ec4899" />
                                        </svg>
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: "10px",
                                                left: "20px",
                                                right: "20px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "clamp(10px, 1.5vw, 12px)",
                                                color: "#8c8c8c",
                                            }}
                                        >
                                            <span>Jan</span>
                                            <span>Feb</span>
                                            <span>Mar</span>
                                            <span>Apr</span>
                                            <span>May</span>
                                            <span>Jun</span>
                                            <span>Jul</span>
                                            <span>Aug</span>
                                            <span>Sep</span>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        {/* Job Posts Table and Pie Chart */}
                        <Row gutter={[16, 16]} style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
                            {/* Job Post Status Table */}
                            <Col xs={24} lg={16}>
                                <Card
                                    title={
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span>Job Post Status</span>
                                            <Button type="text" icon={<FilterOutlined />} />
                                        </div>
                                    }
                                    style={{ borderRadius: "8px" }}
                                    bodyStyle={{ padding: 0 }}
                                >
                                    <Table
                                        columns={columns}
                                        dataSource={jobPostsData}
                                        pagination={false}
                                        size="small"
                                        scroll={{ x: 800 }}
                                    />
                                    <div
                                        style={{
                                            textAlign: "center",
                                            padding: "clamp(12px, 2vw, 16px)",
                                            borderTop: "1px solid #f0f0f0",
                                        }}
                                    >
                                        <Button type="link" style={{ color: "#6366f1" }}>
                                            View All Job Posts
                                        </Button>
                                    </div>
                                </Card>
                            </Col>

                            {/* Applicant Source Breakdown */}
                            <Col xs={24} lg={8}>
                                <Card
                                    title="Applicant Source Breakdown"
                                    style={{ borderRadius: "8px", height: "100%" }}
                                    bodyStyle={{ padding: "clamp(16px, 3vw, 24px)" }}
                                >
                                    <div style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "#8c8c8c", marginBottom: "16px" }}>
                                        Where your applicants are coming from
                                    </div>
                                    <div
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            margin: "0 auto 16px",
                                            position: "relative",
                                        }}
                                    >
                                        {/* Simulated pie chart */}
                                        <svg width="200" height="200" style={{ transform: "rotate(-90deg)" }}>
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="80"
                                                fill="none"
                                                stroke="#6366f1"
                                                strokeWidth="40"
                                                strokeDasharray="125.6 251.2"
                                                strokeDashoffset="0"
                                            />
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="80"
                                                fill="none"
                                                stroke="#ec4899"
                                                strokeWidth="40"
                                                strokeDasharray="94.2 251.2"
                                                strokeDashoffset="-125.6"
                                            />
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="80"
                                                fill="none"
                                                stroke="#d1d5db"
                                                strokeWidth="40"
                                                strokeDasharray="62.8 251.2"
                                                strokeDashoffset="-219.8"
                                            />
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="80"
                                                fill="none"
                                                stroke="#6b7280"
                                                strokeWidth="40"
                                                strokeDasharray="31.4 251.2"
                                                strokeDashoffset="-282.6"
                                            />
                                        </svg>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                <div
                                                    style={{ width: "12px", height: "12px", background: "#6366f1", borderRadius: "2px" }}
                                                ></div>
                                                <span style={{ fontSize: "clamp(11px, 2vw, 12px)" }}>Bangalore</span>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                <div
                                                    style={{ width: "12px", height: "12px", background: "#ec4899", borderRadius: "2px" }}
                                                ></div>
                                                <span style={{ fontSize: "clamp(11px, 2vw, 12px)" }}>Noida</span>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                <div
                                                    style={{ width: "12px", height: "12px", background: "#d1d5db", borderRadius: "2px" }}
                                                ></div>
                                                <span style={{ fontSize: "clamp(11px, 2vw, 12px)" }}>Mumbai</span>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                <div
                                                    style={{ width: "12px", height: "12px", background: "#6b7280", borderRadius: "2px" }}
                                                ></div>
                                                <span style={{ fontSize: "clamp(11px, 2vw, 12px)" }}>Kolkata</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        {/* Recent Activities */}
                        <Card
                            title="Recent Activities"
                            style={{ borderRadius: "8px", marginBottom: "clamp(20px, 4vw, 32px)" }}
                            bodyStyle={{ padding: "clamp(16px, 3vw, 24px)" }}
                        >
                            <Timeline>
                                {recentActivities.map((activity, index) => (
                                    <Timeline.Item key={index} dot={<span style={{ fontSize: "16px" }}>{activity.icon}</span>}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                            <span style={{ fontSize: "clamp(12px, 2vw, 14px)", flex: 1 }}>{activity.text}</span>
                                            <span
                                                style={{
                                                    fontSize: "clamp(11px, 2vw, 12px)",
                                                    color: "#8c8c8c",
                                                    marginLeft: "16px",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {activity.time}
                                            </span>
                                        </div>
                                    </Timeline.Item>
                                ))}
                            </Timeline>
                        </Card>

                        {/* Optimize Recruitment Banner */}
                        <Card
                            style={{
                                borderRadius: "8px",
                                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                                border: "none",
                                marginBottom: "clamp(20px, 4vw, 32px)",
                            }}
                            bodyStyle={{ padding: "clamp(16px, 3vw, 24px)" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                    gap: "16px",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                    <div style={{ fontSize: "32px" }}>🚀</div>
                                    <div>
                                        <h3 style={{ color: "#fff", margin: 0, fontSize: "clamp(16px, 3vw, 18px)" }}>
                                            Optimize Your Recruitment
                                        </h3>
                                        <p
                                            style={{ color: "rgba(255,255,255,0.8)", margin: "4px 0 0", fontSize: "clamp(12px, 2vw, 14px)" }}
                                        >
                                            Discover advanced features to streamline your hiring process and find the best talent faster.
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={{
                                        background: "#fff",
                                        color: "#6366f1",
                                        border: "none",
                                        fontWeight: "bold",
                                        fontSize: "clamp(12px, 2vw, 14px)",
                                    }}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </Card>

                        {/* Footer */}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

// Helper function for responsive values
function clamp(min, vw, max) {
    return `clamp(${min}px, ${vw}vw, ${max}px)`
}

export default EmployerDashboard
