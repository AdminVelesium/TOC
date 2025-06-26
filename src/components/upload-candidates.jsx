import {
    Layout,
    Menu,
    Card,
    Table,
    Button,
    Input,
    Avatar,
    Badge,
    Row,
    Col,
    Form,
    Select,
    Upload,
    Tag,
    Dropdown,
} from "antd"
import { SearchOutlined, BellOutlined, EyeOutlined, PlusOutlined, InboxOutlined } from "@ant-design/icons"

const { Header, Content } = Layout
const { Search } = Input
const { Option } = Select
const { Dragger } = Upload
const { TextArea } = Input

const UploadCandidates = () => {
    const [form] = Form.useForm()

    // Sample data for recent uploads table
    const recentUploadsData = [
        {
            key: "1",
            name: "Alice Johnson",
            role: "Software Engineer",
            status: "Internal Bench",
            uploadDate: "2024-07-20",
            statusColor: "#52c41a",
        },
        {
            key: "2",
            name: "Bob Williams",
            role: "Data Scientist",
            status: "Available for Project",
            uploadDate: "2024-07-19",
            statusColor: "#1890ff",
        },
        {
            key: "3",
            name: "Charlie Brown",
            role: "Product Manager",
            status: "Internal Bench",
            uploadDate: "2024-07-18",
            statusColor: "#52c41a",
        },
        {
            key: "4",
            name: "Bulk Upload (Marketing Team)",
            role: "Various",
            status: "Success",
            uploadDate: "2024-07-17",
            statusColor: "#52c41a",
        },
        {
            key: "5",
            name: "Diana Prince",
            role: "UX Designer",
            status: "Internal Bench",
            uploadDate: "2024-07-16",
            statusColor: "#52c41a",
        },
        {
            key: "6",
            name: "Edward Lee",
            role: "DevOps Engineer",
            status: "Available for Project",
            uploadDate: "2024-07-15",
            statusColor: "#1890ff",
        },
        {
            key: "7",
            name: "Bulk Upload (Sales Interns)",
            role: "Intern",
            status: "Error - Invalid Format",
            uploadDate: "2024-07-14",
            statusColor: "#f5222d",
        },
        {
            key: "8",
            name: "Fiona Green",
            role: "Business Analyst",
            status: "Internal Bench",
            uploadDate: "2024-07-13",
            statusColor: "#52c41a",
        },
    ]

    const columns = [
        {
            title: "Candidate Name",
            dataIndex: "name",
            key: "name",
            width: "25%",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            width: "20%",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: "25%",
            render: (status, record) => <Tag color={record.statusColor}>{status}</Tag>,
        },
        {
            title: "Upload Date",
            dataIndex: "uploadDate",
            key: "uploadDate",
            width: "20%",
        },
        {
            title: "Actions",
            key: "actions",
            width: "10%",
            render: () => <Button type="text" icon={<EyeOutlined />} size="small" />,
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

    const uploadProps = {
        name: "file",
        multiple: false,
        accept: ".pdf,.doc,.docx",
        beforeUpload: () => false, // Prevent auto upload
        onChange: (info) => {
            console.log("File upload:", info)
        },
    }

    const additionalDocUploadProps = {
        name: "file",
        multiple: true,
        accept: ".pdf,.doc,.docx,.jpg,.png",
        beforeUpload: () => false,
        onChange: (info) => {
            console.log("Additional docs upload:", info)
        },
    }

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
                            color: "#1890ff",
                            marginRight: "clamp(24px, 5vw, 48px)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        Talent on Cloud
                    </div>

                    <Menu
                        mode="horizontal"
                        selectedKeys={["candidates"]}
                        style={{
                            border: "none",
                            background: "transparent",
                            fontSize: "clamp(12px, 2vw, 14px)",
                        }}
                    >
                        <Menu.Item key="dashboard">Dashboard</Menu.Item>
                        <Menu.Item key="candidates" style={{ color: "#1890ff", fontWeight: "500" }}>
                            Candidates
                        </Menu.Item>
                        <Menu.Item key="jobs">Jobs</Menu.Item>
                        <Menu.Item key="analytics">Analytics</Menu.Item>
                    </Menu>
                </div>

                {/* Right side - Search, Notifications, Profile */}
                <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 16px)" }}>
                    <Button type="text" icon={<SearchOutlined />} style={{ fontSize: "clamp(16px, 3vw, 18px)" }} />

                    <Badge count={2}>
                        <Button type="text" icon={<BellOutlined />} style={{ fontSize: "clamp(16px, 3vw, 18px)" }} />
                    </Badge>

                    <Dropdown overlay={userMenu} trigger={["click"]}>
                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <Avatar
                                style={{
                                    backgroundColor: "#87d068",
                                    fontSize: "clamp(12px, 2vw, 14px)",
                                }}
                            >
                                A
                            </Avatar>
                        </div>
                    </Dropdown>
                </div>
            </Header>

            {/* Main Content */}
            <Content
                style={{
                    marginTop: "clamp(56px, 7vw, 64px)",
                    padding: "clamp(20px, 4vw, 40px) clamp(16px, 3vw, 24px)",
                    background: "#f5f5f5",
                    minHeight: "calc(100vh - clamp(56px, 7vw, 64px))",
                    overflow: "auto",
                }}
            >
                {/* Page Header */}
                <div style={{ marginBottom: "clamp(24px, 4vw, 32px)" }}>
                    <h1
                        style={{
                            fontSize: "clamp(24px, 4vw, 32px)",
                            fontWeight: "bold",
                            color: "#262626",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Upload Candidates
                    </h1>
                    <p
                        style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            color: "#8c8c8c",
                            margin: 0,
                        }}
                    >
                        Streamline your recruitment by adding internal bench or new candidates to your talent pool.
                    </p>
                </div>

                {/* Upload Method Buttons */}
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "clamp(24px, 4vw, 32px)",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            background: "#1890ff",
                            borderColor: "#1890ff",
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            height: "clamp(36px, 5vw, 40px)",
                            padding: "0 clamp(16px, 3vw, 24px)",
                        }}
                    >
                        Upload Manually
                    </Button>
                    <Button
                        size="large"
                        style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            height: "clamp(36px, 5vw, 40px)",
                            padding: "0 clamp(16px, 3vw, 24px)",
                        }}
                    >
                        Bulk Upload
                    </Button>
                </div>

                {/* Upload Form */}
                <Card
                    style={{
                        borderRadius: "8px",
                        marginBottom: "clamp(24px, 4vw, 32px)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    bodyStyle={{ padding: "clamp(20px, 4vw, 32px)" }}
                >
                    <Form form={form} layout="vertical">
                        <Row gutter={[24, 16]}>
                            {/* Candidate Information */}
                            <Col xs={24} lg={8}>
                                <div
                                    style={{
                                        fontSize: "clamp(16px, 3vw, 18px)",
                                        fontWeight: "600",
                                        color: "#262626",
                                        marginBottom: "clamp(16px, 3vw, 20px)",
                                    }}
                                >
                                    Candidate Information
                                </div>

                                <Form.Item label="Full Name" name="fullName" style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                                    <Input
                                        placeholder="John Doe"
                                        style={{
                                            fontSize: "clamp(14px, 2.5vw, 16px)",
                                            height: "clamp(36px, 5vw, 40px)",
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item label="Email Address" name="email" style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                                    <Input
                                        placeholder="john.doe@example.com"
                                        style={{
                                            fontSize: "clamp(14px, 2.5vw, 16px)",
                                            height: "clamp(36px, 5vw, 40px)",
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item label="Phone Number" name="phone" style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                                    <Input
                                        placeholder="+1 (555) 123-4567"
                                        style={{
                                            fontSize: "clamp(14px, 2.5vw, 16px)",
                                            height: "clamp(36px, 5vw, 40px)",
                                        }}
                                    />
                                </Form.Item>
                            </Col>

                            {/* Role & Status */}
                            <Col xs={24} lg={8}>
                                <div
                                    style={{
                                        fontSize: "clamp(16px, 3vw, 18px)",
                                        fontWeight: "600",
                                        color: "#262626",
                                        marginBottom: "clamp(16px, 3vw, 20px)",
                                    }}
                                >
                                    Role & Status
                                </div>

                                <Form.Item label="Desired Role" name="desiredRole" style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                                    <Input
                                        placeholder="e.g., Software Engineer, Product Manager"
                                        style={{
                                            fontSize: "clamp(14px, 2.5vw, 16px)",
                                            height: "clamp(36px, 5vw, 40px)",
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Years of Experience"
                                    name="experience"
                                    style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}
                                >
                                    <Input
                                        placeholder="e.g., 5"
                                        style={{
                                            fontSize: "clamp(14px, 2.5vw, 16px)",
                                            height: "clamp(36px, 5vw, 40px)",
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item label="Candidate Status" name="status" style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                                    <Select
                                        placeholder="Select status"
                                        style={{
                                            fontSize: "clamp(14px, 2.5vw, 16px)",
                                        }}
                                        size="large"
                                    >
                                        <Option value="internal-bench">Internal Bench</Option>
                                        <Option value="available-project">Available for Project</Option>
                                        <Option value="on-project">On Project</Option>
                                        <Option value="notice-period">Notice Period</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Skills" name="skills" style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                                    <TextArea
                                        placeholder="Type or select skills..."
                                        rows={3}
                                        style={{
                                            fontSize: "clamp(14px, 2.5vw, 16px)",
                                        }}
                                    />
                                </Form.Item>
                            </Col>

                            {/* Documents */}
                            <Col xs={24} lg={8}>
                                <div
                                    style={{
                                        fontSize: "clamp(16px, 3vw, 18px)",
                                        fontWeight: "600",
                                        color: "#262626",
                                        marginBottom: "clamp(16px, 3vw, 20px)",
                                    }}
                                >
                                    Documents
                                </div>

                                <Form.Item
                                    label="Resume/CV (PDF, DOCX)"
                                    name="resume"
                                    style={{ marginBottom: "clamp(20px, 4vw, 24px)" }}
                                >
                                    <Dragger
                                        {...uploadProps}
                                        style={{
                                            background: "#fafafa",
                                            border: "2px dashed #d9d9d9",
                                            borderRadius: "6px",
                                            padding: "clamp(16px, 3vw, 20px)",
                                        }}
                                    >
                                        <p style={{ margin: "8px 0" }}>
                                            <InboxOutlined style={{ fontSize: "clamp(24px, 4vw, 32px)", color: "#8c8c8c" }} />
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "clamp(14px, 2.5vw, 16px)",
                                                color: "#262626",
                                                margin: "8px 0 4px",
                                            }}
                                        >
                                            Drag & drop your resume here, or click to browse
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "clamp(12px, 2vw, 14px)",
                                                color: "#8c8c8c",
                                                margin: "0 0 8px",
                                            }}
                                        >
                                            (Max 10MB)
                                        </p>
                                    </Dragger>
                                </Form.Item>

                                <Form.Item
                                    label="Additional Documents (Certificates, Portfolio)"
                                    name="additionalDocs"
                                    style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <Button
                                            type="dashed"
                                            icon={<PlusOutlined />}
                                            style={{
                                                fontSize: "clamp(14px, 2.5vw, 16px)",
                                                height: "clamp(36px, 5vw, 40px)",
                                                width: "100%",
                                            }}
                                        >
                                            Add Another Document
                                        </Button>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>

                {/* Recent Uploads */}
                <Card
                    title={
                        <span
                            style={{
                                fontSize: "clamp(18px, 3vw, 20px)",
                                fontWeight: "600",
                                color: "#262626",
                            }}
                        >
                            Recent Uploads
                        </span>
                    }
                    style={{
                        borderRadius: "8px",
                        marginBottom: "clamp(24px, 4vw, 32px)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    bodyStyle={{ padding: 0 }}
                >
                    <Table
                        columns={columns}
                        dataSource={recentUploadsData}
                        pagination={{
                            pageSize: 8,
                            showSizeChanger: false,
                            style: { padding: "16px" },
                        }}
                        size="middle"
                        scroll={{ x: 800 }}
                    />
                </Card>

                {/* Action Buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "12px",
                        marginBottom: "clamp(24px, 4vw, 32px)",
                    }}
                >
                    <Button
                        size="large"
                        style={{
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            height: "clamp(36px, 5vw, 40px)",
                            padding: "0 clamp(16px, 3vw, 24px)",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            background: "#1890ff",
                            borderColor: "#1890ff",
                            fontSize: "clamp(14px, 2.5vw, 16px)",
                            height: "clamp(36px, 5vw, 40px)",
                            padding: "0 clamp(16px, 3vw, 24px)",
                        }}
                    >
                        Submit Candidate
                    </Button>
                </div>

                {/* Footer */}

            </Content>
        </Layout>
    )
}

// Helper function for responsive values
function clamp(min, vw, max) {
    return `clamp(${min}px, ${vw}vw, ${max}px)`
}

export default UploadCandidates