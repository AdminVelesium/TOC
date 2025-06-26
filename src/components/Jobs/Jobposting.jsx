"use client"

import React, { useState } from "react"
import { Form } from "antd"
import {
    Card,
    Input,
    Button,
    Typography,
    Row,
    Col,
    Select,
    Upload,
    Steps,
    Divider,
    InputNumber,
    message,
    Space,
    Tag,
} from "antd"
import {
    SearchOutlined,
    MessageOutlined,
    BellOutlined,
    BoldOutlined,
    ItalicOutlined,
    UnderlineOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
    LinkOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    UserOutlined,
} from "@ant-design/icons"

const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select
const { Step } = Steps

const JobPostingForm = () => {
    const [form] = Form.useForm()
    const [currentStep, setCurrentStep] = useState(0)
    const [jobDescription, setJobDescription] = useState(
        `We are seeking a highly skilled and motivated Senior Frontend Engineer to join our dynamic team. You will be responsible for developing and maintaining user-facing applications, ensuring high performance and responsiveness to requests. This role requires a deep understanding of modern JavaScript frameworks, state management, and API integration. You will collaborate closely with product managers, UX/UI designers, and backend engineers to deliver exceptional user experiences. A strong passion for clean code, test-driven development, and continuous improvement is essential.`,
    )

    const [responsibilities, setResponsibilities] =
        useState(`- Develop and maintain responsive web applications using React and TypeScript.
- Implement robust and scalable features, ensuring cross-browser compatibility.
- Collaborate with designers to translate UI/UX wireframes into high-quality code.
- Optimize applications for maximum speed and scalability.
- Participate in code reviews, ensuring code quality and adherence to best practices.
- Contribute to architectural discussions and technology stack decisions.
- Mentor junior developers and foster a collaborative team environment.`)

    const containerStyle = {
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "0",
        width: "100vw",
        maxWidth: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
    }

    const headerStyle = {
        background: "#fff",
        padding: "clamp(12px, 1.5vw, 16px) clamp(20px, 2.5vw, 32px)",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
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

    const searchStyle = {
        width: "clamp(200px, 25vw, 300px)",
        borderRadius: "8px",
    }

    const headerActionsStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
    }

    const mainContentStyle = {
        padding: "clamp(20px, 2.5vw, 32px)",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
    }

    const titleSectionStyle = {
        textAlign: "center",
        marginBottom: "clamp(32px, 4vw, 48px)",
    }

    const stepsStyle = {
        marginBottom: "clamp(32px, 4vw, 48px)",
        padding: "0 clamp(16px, 2vw, 24px)",
    }

    const cardStyle = {
        borderRadius: "clamp(12px, 1.5vw, 16px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        border: "1px solid #f0f0f0",
        marginBottom: "clamp(20px, 2.5vw, 24px)",
    }

    const sectionTitleStyle = {
        fontSize: "clamp(18px, 2vw, 20px)",
        fontWeight: "600",
        color: "#1a1a1a",
        marginBottom: "clamp(8px, 1vw, 12px)",
    }

    const sectionSubtitleStyle = {
        fontSize: "clamp(14px, 1.2vw, 15px)",
        color: "#666",
        marginBottom: "clamp(20px, 2.5vw, 24px)",
    }

    const formItemStyle = {
        marginBottom: "clamp(16px, 2vw, 20px)",
    }

    const inputStyle = {
        borderRadius: "8px",
        fontSize: "clamp(14px, 1.2vw, 15px)",
        padding: "clamp(8px, 1vw, 10px) clamp(12px, 1.5vw, 14px)",
    }

    const previewCardStyle = {
        background: "linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)",
        border: "2px solid #e6f0ff",
        borderRadius: "clamp(12px, 1.5vw, 16px)",
        padding: "clamp(20px, 2.5vw, 24px)",
        position: "sticky",
        top: "clamp(100px, 12vw, 120px)",
    }

    const uploadAreaStyle = {
        background: "#fafbfc",
        border: "2px dashed #d1d5db",
        borderRadius: "8px",
        padding: "clamp(24px, 3vw, 32px)",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
    }

    const toolbarStyle = {
        display: "flex",
        gap: "clamp(4px, 0.5vw, 6px)",
        marginBottom: "clamp(8px, 1vw, 12px)",
        padding: "clamp(8px, 1vw, 10px)",
        background: "#f8f9fa",
        borderRadius: "6px",
        border: "1px solid #e9ecef",
    }

    const toolbarButtonStyle = {
        border: "none",
        background: "transparent",
        padding: "clamp(4px, 0.5vw, 6px) clamp(6px, 0.8vw, 8px)",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "clamp(12px, 1.1vw, 14px)",
        color: "#666",
        transition: "all 0.2s ease",
    }

    const actionButtonsStyle = {
        display: "flex",
        justifyContent: "flex-end",
        gap: "clamp(12px, 1.5vw, 16px)",
        marginTop: "clamp(32px, 4vw, 40px)",
        padding: "clamp(20px, 2.5vw, 24px) 0",
        borderTop: "1px solid #f0f0f0",
        flexWrap: "wrap",
    }

    const handleUpload = (info) => {
        message.success("Company logo uploaded successfully!")
    }

    const handleSaveDraft = () => {
        message.success("Job posting saved as draft!")
    }

    const handlePostJob = () => {
        form
            .validateFields()
            .then(() => {
                message.success("Job posted successfully!")
            })
            .catch(() => {
                message.error("Please fill in all required fields")
            })
    }

    const steps = [
        { title: "Job Details", icon: "1" },
        { title: "Company Info", icon: "2" },
        { title: "Requirements", icon: "3" },
        { title: "Review & Post", icon: "4" },
    ]

    return (
        <div style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={logoStyle}>
                    <div style={logoIconStyle}>T</div>
                    <span>Talent on Cloud</span>
                </div>

                <Input
                    placeholder="Search jobs, applicants..."
                    prefix={<SearchOutlined style={{ color: "#999" }} />}
                    style={searchStyle}
                />

                <div style={headerActionsStyle}>
                    <Button type="text" icon={<MessageOutlined />} style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }} />
                    <Button type="text" icon={<BellOutlined />} style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }} />
                    <div
                        style={{
                            width: "clamp(32px, 3.5vw, 36px)",
                            height: "clamp(32px, 3.5vw, 36px)",
                            borderRadius: "50%",
                            background: "#667eea",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: "clamp(14px, 1.3vw, 16px)",
                            fontWeight: "600",
                        }}
                    >
                        A
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={mainContentStyle}>
                {/* Title Section */}
                <div style={titleSectionStyle}>
                    <Title
                        level={1}
                        style={{
                            fontSize: "clamp(24px, 3vw, 32px)",
                            fontWeight: "700",
                            color: "#1a1a1a",
                            marginBottom: "clamp(8px, 1vw, 12px)",
                        }}
                    >
                        Create New Job Posting
                    </Title>
                    <Text
                        style={{
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            color: "#666",
                        }}
                    >
                        Fill out the form below to create a new job opening and attract top talent.
                    </Text>
                </div>

                {/* Steps */}
                <div style={stepsStyle}>
                    <Steps
                        current={0}
                        size="small"
                        responsive={false}
                        style={{
                            fontSize: "clamp(12px, 1vw, 14px)",
                        }}
                    >
                        {steps.map((step, index) => (
                            <Step
                                key={index}
                                title={step.title}
                                icon={
                                    <div
                                        style={{
                                            width: "clamp(24px, 2.5vw, 28px)",
                                            height: "clamp(24px, 2.5vw, 28px)",
                                            borderRadius: "50%",
                                            background: index === 0 ? "#667eea" : "#f0f0f0",
                                            color: index === 0 ? "#fff" : "#999",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "clamp(12px, 1.1vw, 14px)",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {step.icon}
                                    </div>
                                }
                            />
                        ))}
                    </Steps>
                </div>

                {/* Main Form Layout */}
                <Row gutter={[32, 32]}>
                    {/* Left Column - Form */}
                    <Col xs={24} lg={14}>
                        <Form form={form} layout="vertical">
                            {/* Job Details Section */}
                            <Card style={cardStyle}>
                                <Title level={3} style={sectionTitleStyle}>
                                    Job Details
                                </Title>
                                <Text style={sectionSubtitleStyle}>Provide the core information about the job opening.</Text>

                                <Row gutter={[16, 0]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label="Job Title"
                                            name="jobTitle"
                                            rules={[{ required: true, message: "Please enter job title" }]}
                                            style={formItemStyle}
                                        >
                                            <Input placeholder="Senior Frontend Engineer" style={inputStyle} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label="Location"
                                            name="location"
                                            rules={[{ required: true, message: "Please enter location" }]}
                                            style={formItemStyle}
                                        >
                                            <Input
                                                placeholder="Remote (Global)"
                                                style={inputStyle}
                                                prefix={<EnvironmentOutlined style={{ color: "#999" }} />}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row gutter={[16, 0]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label="Employment Type"
                                            name="employmentType"
                                            rules={[{ required: true, message: "Please select employment type" }]}
                                            style={formItemStyle}
                                        >
                                            <Select
                                                placeholder="Full-time"
                                                style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}
                                                suffixIcon={<ClockCircleOutlined style={{ color: "#999" }} />}
                                            >
                                                <Option value="full-time">Full-time</Option>
                                                <Option value="part-time">Part-time</Option>
                                                <Option value="contract">Contract</Option>
                                                <Option value="freelance">Freelance</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label="Job Category"
                                            name="jobCategory"
                                            rules={[{ required: true, message: "Please select job category" }]}
                                            style={formItemStyle}
                                        >
                                            <Select placeholder="Software Development" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
                                                <Option value="software-development">Software Development</Option>
                                                <Option value="design">Design</Option>
                                                <Option value="marketing">Marketing</Option>
                                                <Option value="sales">Sales</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row gutter={[16, 0]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item label="Salary Range (Annual)" style={formItemStyle}>
                                            <Space.Compact style={{ width: "100%" }}>
                                                <InputNumber
                                                    placeholder="130,000"
                                                    style={{ width: "50%", ...inputStyle }}
                                                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                                                />
                                                <InputNumber
                                                    placeholder="150,000"
                                                    style={{ width: "50%", ...inputStyle }}
                                                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                                                />
                                            </Space.Compact>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label="Experience Level"
                                            name="experienceLevel"
                                            rules={[{ required: true, message: "Please select experience level" }]}
                                            style={formItemStyle}
                                        >
                                            <Select
                                                placeholder="5+ Years"
                                                style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}
                                                suffixIcon={<UserOutlined style={{ color: "#999" }} />}
                                            >
                                                <Option value="entry">Entry Level</Option>
                                                <Option value="mid">Mid Level (2-5 years)</Option>
                                                <Option value="senior">Senior Level (5+ years)</Option>
                                                <Option value="lead">Lead/Principal</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>

                            {/* Company Information Section */}
                            <Card style={cardStyle}>
                                <Title level={3} style={sectionTitleStyle}>
                                    Company Information
                                </Title>
                                <Text style={sectionSubtitleStyle}>Details about your company that candidates will see.</Text>

                                <Form.Item
                                    label="Company Name"
                                    name="companyName"
                                    rules={[{ required: true, message: "Please enter company name" }]}
                                    style={formItemStyle}
                                >
                                    <Input placeholder="Innovate Solutions Inc." style={inputStyle} />
                                </Form.Item>

                                <Form.Item label="Upload Company Logo" style={formItemStyle}>
                                    <div style={uploadAreaStyle}>
                                        <Upload
                                            name="logo"
                                            listType="picture"
                                            showUploadList={false}
                                            beforeUpload={() => false}
                                            onChange={handleUpload}
                                        >
                                            <div>
                                                <div
                                                    style={{
                                                        width: "clamp(80px, 8vw, 100px)",
                                                        height: "clamp(60px, 6vw, 80px)",
                                                        background: "#f0f4ff",
                                                        borderRadius: "8px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        margin: "0 auto clamp(12px, 1.5vw, 16px) auto",
                                                        border: "2px solid #e6f0ff",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            fontSize: "clamp(24px, 3vw, 32px)",
                                                            color: "#667eea",
                                                        }}
                                                    >
                                                        📄
                                                    </div>
                                                </div>
                                                <Text
                                                    style={{
                                                        fontSize: "clamp(14px, 1.2vw, 16px)",
                                                        color: "#667eea",
                                                        fontWeight: "500",
                                                        display: "block",
                                                        marginBottom: "clamp(4px, 0.5vw, 6px)",
                                                    }}
                                                >
                                                    Upload Company Logo
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: "clamp(12px, 1vw, 14px)",
                                                        color: "#999",
                                                    }}
                                                >
                                                    Drag and drop or click to upload
                                                </Text>
                                            </div>
                                        </Upload>
                                    </div>
                                </Form.Item>
                            </Card>

                            {/* Job Description Section */}
                            <Card style={cardStyle}>
                                <Title level={3} style={sectionTitleStyle}>
                                    Job Description
                                </Title>
                                <Text style={sectionSubtitleStyle}>
                                    A comprehensive overview of the role's purpose, duties, and impact.
                                </Text>

                                <Form.Item label="Job Description" name="jobDescription" style={formItemStyle}>
                                    <div>
                                        <div style={toolbarStyle}>
                                            <button style={toolbarButtonStyle} type="button">
                                                <BoldOutlined />
                                            </button>
                                            <button style={toolbarButtonStyle} type="button">
                                                <ItalicOutlined />
                                            </button>
                                            <button style={toolbarButtonStyle} type="button">
                                                <UnderlineOutlined />
                                            </button>
                                            <Divider type="vertical" style={{ margin: "0 4px" }} />
                                            <button style={toolbarButtonStyle} type="button">
                                                <UnorderedListOutlined />
                                            </button>
                                            <button style={toolbarButtonStyle} type="button">
                                                <OrderedListOutlined />
                                            </button>
                                            <Divider type="vertical" style={{ margin: "0 4px" }} />
                                            <button style={toolbarButtonStyle} type="button">
                                                <LinkOutlined />
                                            </button>
                                        </div>
                                        <TextArea
                                            rows={8}
                                            value={jobDescription}
                                            onChange={(e) => setJobDescription(e.target.value)}
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical",
                                                minHeight: "clamp(120px, 15vw, 160px)",
                                            }}
                                        />
                                    </div>
                                </Form.Item>
                            </Card>

                            {/* Responsibilities Section */}
                            <Card style={cardStyle}>
                                <Title level={3} style={sectionTitleStyle}>
                                    Responsibilities
                                </Title>
                                <Text style={sectionSubtitleStyle}>
                                    Outline the key duties and responsibilities required for this position.
                                </Text>

                                <Form.Item label="Key Responsibilities" name="responsibilities" style={formItemStyle}>
                                    <div>
                                        <div style={toolbarStyle}>
                                            <button style={toolbarButtonStyle} type="button">
                                                <BoldOutlined />
                                            </button>
                                            <button style={toolbarButtonStyle} type="button">
                                                <ItalicOutlined />
                                            </button>
                                            <button style={toolbarButtonStyle} type="button">
                                                <UnderlineOutlined />
                                            </button>
                                            <Divider type="vertical" style={{ margin: "0 4px" }} />
                                            <button style={toolbarButtonStyle} type="button">
                                                <UnorderedListOutlined />
                                            </button>
                                            <button style={toolbarButtonStyle} type="button">
                                                <OrderedListOutlined />
                                            </button>
                                            <Divider type="vertical" style={{ margin: "0 4px" }} />
                                            <button style={toolbarButtonStyle} type="button">
                                                <LinkOutlined />
                                            </button>
                                        </div>
                                        <TextArea
                                            rows={6}
                                            value={responsibilities}
                                            onChange={(e) => setResponsibilities(e.target.value)}
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical",
                                                minHeight: "clamp(100px, 12vw, 140px)",
                                            }}
                                        />
                                    </div>
                                </Form.Item>
                            </Card>

                            {/* Application Settings Section */}
                            <Card style={cardStyle}>
                                <Title level={3} style={sectionTitleStyle}>
                                    Application Settings
                                </Title>
                                <Text style={sectionSubtitleStyle}>
                                    Configure how candidates apply and optional application requirements.
                                </Text>

                                <Form.Item
                                    label="Application Email"
                                    name="applicationEmail"
                                    rules={[
                                        { required: true, message: "Please enter application email" },
                                        { type: "email", message: "Please enter a valid email" },
                                    ]}
                                    style={formItemStyle}
                                >
                                    <Input placeholder="e.g., careers@yourcompany.com" style={inputStyle} />
                                </Form.Item>
                                <Text
                                    style={{
                                        fontSize: "clamp(12px, 1vw, 13px)",
                                        color: "#999",
                                        display: "block",
                                        marginTop: "-12px",
                                        marginBottom: "16px",
                                    }}
                                >
                                    Applications will be sent to this email address.
                                </Text>

                                <Form.Item label="Screening Questions (Optional)" name="screeningQuestions" style={formItemStyle}>
                                    <TextArea
                                        rows={3}
                                        placeholder="Add comma-separated questions to screen candidates (e.g., 'Years of experience in React?', 'Familiar with TypeScript?')"
                                        style={{
                                            ...inputStyle,
                                            resize: "vertical",
                                        }}
                                    />
                                </Form.Item>
                                <Text
                                    style={{
                                        fontSize: "clamp(12px, 1vw, 13px)",
                                        color: "#999",
                                        display: "block",
                                        marginTop: "-12px",
                                    }}
                                >
                                    These questions will be asked during the application process.
                                </Text>
                            </Card>
                        </Form>
                    </Col>

                    {/* Right Column - Preview */}
                    <Col xs={24} lg={10}>
                        <div style={previewCardStyle}>
                            <Title
                                level={4}
                                style={{
                                    fontSize: "clamp(16px, 1.4vw, 18px)",
                                    color: "#1a1a1a",
                                    marginBottom: "clamp(8px, 1vw, 12px)",
                                }}
                            >
                                Job Posting Preview
                            </Title>
                            <Text
                                style={{
                                    fontSize: "clamp(13px, 1.1vw, 14px)",
                                    color: "#666",
                                    display: "block",
                                    marginBottom: "clamp(20px, 2.5vw, 24px)",
                                }}
                            >
                                This is how your job posting will appear to candidates.
                            </Text>

                            {/* Preview Content */}
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "clamp(8px, 1vw, 12px)",
                                    padding: "clamp(16px, 2vw, 20px)",
                                    border: "1px solid #e6f0ff",
                                }}
                            >
                                {/* Company Logo and Title */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "clamp(12px, 1.5vw, 16px)",
                                        marginBottom: "clamp(16px, 2vw, 20px)",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "clamp(48px, 5vw, 56px)",
                                            height: "clamp(48px, 5vw, 56px)",
                                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                            borderRadius: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            fontSize: "clamp(20px, 2.5vw, 24px)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        📊
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <Title
                                            level={4}
                                            style={{
                                                fontSize: "clamp(16px, 1.4vw, 18px)",
                                                color: "#1a1a1a",
                                                marginBottom: "clamp(4px, 0.5vw, 6px)",
                                                lineHeight: "1.3",
                                            }}
                                        >
                                            Senior Frontend Engineer
                                        </Title>
                                        <Text
                                            style={{
                                                fontSize: "clamp(13px, 1.1vw, 14px)",
                                                color: "#667eea",
                                                display: "block",
                                                marginBottom: "clamp(2px, 0.3vw, 4px)",
                                            }}
                                        >
                                            Innovate Solutions Inc.
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: "clamp(12px, 1vw, 13px)",
                                                color: "#999",
                                            }}
                                        >
                                            Remote • Software Development
                                        </Text>
                                    </div>
                                </div>

                                {/* Job Details */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "clamp(8px, 1vw, 12px)",
                                        marginBottom: "clamp(16px, 2vw, 20px)",
                                    }}
                                >
                                    <Tag
                                        color="blue"
                                        style={{
                                            fontSize: "clamp(11px, 1vw, 12px)",
                                            padding: "2px 8px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        🕒 Full-time
                                    </Tag>
                                    <Tag
                                        color="green"
                                        style={{
                                            fontSize: "clamp(11px, 1vw, 12px)",
                                            padding: "2px 8px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        💰 $130,000 - $150,000
                                    </Tag>
                                    <Tag
                                        color="purple"
                                        style={{
                                            fontSize: "clamp(11px, 1vw, 12px)",
                                            padding: "2px 8px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        👨‍💻 5+ Years Experience
                                    </Tag>
                                </div>

                                {/* Job Description Preview */}
                                <div style={{ marginBottom: "clamp(16px, 2vw, 20px)" }}>
                                    <Title
                                        level={5}
                                        style={{
                                            fontSize: "clamp(14px, 1.2vw, 16px)",
                                            color: "#1a1a1a",
                                            marginBottom: "clamp(8px, 1vw, 12px)",
                                        }}
                                    >
                                        Job Description
                                    </Title>
                                    <Paragraph
                                        style={{
                                            fontSize: "clamp(13px, 1.1vw, 14px)",
                                            color: "#555",
                                            lineHeight: "1.5",
                                            margin: 0,
                                        }}
                                        ellipsis={{ rows: 4, expandable: false }}
                                    >
                                        {jobDescription}
                                    </Paragraph>
                                </div>

                                {/* Responsibilities Preview */}
                                <div>
                                    <Title
                                        level={5}
                                        style={{
                                            fontSize: "clamp(14px, 1.2vw, 16px)",
                                            color: "#1a1a1a",
                                            marginBottom: "clamp(8px, 1vw, 12px)",
                                        }}
                                    >
                                        Responsibilities
                                    </Title>
                                    <div
                                        style={{
                                            fontSize: "clamp(13px, 1.1vw, 14px)",
                                            color: "#555",
                                            lineHeight: "1.5",
                                        }}
                                    >
                                        {responsibilities
                                            .split("\n")
                                            .slice(0, 3)
                                            .map((item, index) => (
                                                <div key={index} style={{ marginBottom: "4px" }}>
                                                    {item}
                                                </div>
                                            ))}
                                        {responsibilities.split("\n").length > 3 && (
                                            <Text style={{ color: "#999", fontSize: "clamp(12px, 1vw, 13px)" }}>...and more</Text>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Action Buttons */}
                <div style={actionButtonsStyle}>
                    <Button
                        size="large"
                        style={{
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            height: "clamp(40px, 4.5vw, 48px)",
                            minWidth: "clamp(80px, 10vw, 100px)",
                            borderRadius: "8px",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        size="large"
                        onClick={handleSaveDraft}
                        style={{
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            height: "clamp(40px, 4.5vw, 48px)",
                            minWidth: "clamp(120px, 15vw, 140px)",
                            borderRadius: "8px",
                            background: "#f8f9fa",
                            borderColor: "#d1d5db",
                        }}
                    >
                        Save as Draft
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        onClick={handlePostJob}
                        style={{
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            height: "clamp(40px, 4.5vw, 48px)",
                            minWidth: "clamp(100px, 12vw, 120px)",
                            borderRadius: "8px",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            border: "none",
                            fontWeight: "600",
                        }}
                    >
                        Post Job
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default JobPostingForm