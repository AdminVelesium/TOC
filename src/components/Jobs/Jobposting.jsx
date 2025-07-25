"use client"

import React, { useState } from "react"
import { Form } from "antd"
import Logo from "../Logo"
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
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select
const { Step } = Steps

const JobPostingForm = () => {
    const [form] = Form.useForm()
    const [jobDescription, setJobDescription] = useState("")
    const [responsibilities, setResponsibilities] = useState("")
    const [salaryMin, setSalaryMin] = useState("")
    const [salaryMax, setSalaryMax] = useState("")
    const [logoFile, setLogoFile] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);
    const [screeningQuestions, setScreeningQuestions] = useState("")
    const [keySkills, setKeySkills] = useState("");
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    // Prompt section state
    const [prompt, setPrompt] = useState("");
    const [generating, setGenerating] = useState(false);

    // Helper to check if a value is filled
    const isFilled = v => v && (typeof v === 'string' ? v.trim() !== '' : true);

    // Helper to auto-fill all fields from Gemini response
    const autoFillFromGemini = (data) => {
        if (data.jobDescription) {
            form.setFieldsValue({ jobDescription: data.jobDescription });
            setJobDescription(data.jobDescription);
        }
        if (data.responsibilities) {
            form.setFieldsValue({ responsibilities: data.responsibilities });
            setResponsibilities(data.responsibilities);
        }
        if (data.keySkills) {
            form.setFieldsValue({ keySkills: data.keySkills });
            setKeySkills(data.keySkills);
        }
    };

    // Handler for generating job post from prompt
    const handleGenerateFromPrompt = async () => {
        if (!prompt.trim()) return;
        setGenerating(true);
        try {
            const res = await fetch('https://toc-bac-1.onrender.com/api/generate-job-post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });
            if (!res.ok) throw new Error('Failed to generate job post');
            const data = await res.json();
            autoFillFromGemini(data);
        } catch (err) {
            message.error(err.message || 'Failed to generate job post');
        } finally {
            setGenerating(false);
        }
    };

    // Real-time timeline progress logic
    React.useEffect(() => {
        // Step 1: Job Details
        const jobDetailsFilled = [
            form.getFieldValue('jobTitle'),
            form.getFieldValue('location'),
            form.getFieldValue('employmentType'),
            form.getFieldValue('jobCategory'),
            salaryMin,
            salaryMax,
            form.getFieldValue('experienceLevel')
        ].every(isFilled);

        // Step 2: Company Info
        const companyInfoFilled = jobDetailsFilled && [
            form.getFieldValue('companyName'),
            logoFile
        ].every(isFilled);

        // Step 3: Requirements
        const requirementsFilled = companyInfoFilled && [
            jobDescription,
            responsibilities,
            keySkills
        ].every(isFilled);

        // Step 4: Application Settings
        const applicationSettingsFilled = requirementsFilled && [
            form.getFieldValue('applicationEmail')
        ].every(isFilled);

        // Set current step based on progress
        let step = 0;
        if (jobDetailsFilled) step = 1;
        if (companyInfoFilled) step = 2;
        if (requirementsFilled) step = 3;
        if (applicationSettingsFilled) step = 4;
        setCurrentStep(step);
    }, [form, salaryMin, salaryMax, logoFile, jobDescription, responsibilities, keySkills]);

    // Clean up object URL when logoFile changes or is removed
    React.useEffect(() => {
        return () => {
            if (logoPreview) URL.revokeObjectURL(logoPreview);
        };
    }, [logoPreview]);

    // Restore draft on mount
    React.useEffect(() => {
        const draft = localStorage.getItem('jobDraft');
        if (draft) {
            try {
                const data = JSON.parse(draft);
                // Restore AntD form fields
                form.setFieldsValue({
                    jobTitle: data.jobTitle || '',
                    location: data.location || '',
                    employmentType: data.employmentType || '',
                    jobCategory: data.jobCategory || '',
                    experienceLevel: data.experienceLevel || '',
                    companyName: data.companyName || '',
                    jobDescription: data.jobDescription || '',
                    responsibilities: data.responsibilities || '',
                    applicationEmail: data.applicationEmail || '',
                    keySkills: data.keySkills || '',
                    screeningQuestions: data.screeningQuestions || '',
                });
                setJobDescription(data.jobDescription || '');
                setResponsibilities(data.responsibilities || '');
                setSalaryMin(data.salaryMin || '');
                setSalaryMax(data.salaryMax || '');
                setKeySkills(data.keySkills || '');
                setScreeningQuestions(data.screeningQuestions || '');
                // Logo file cannot be restored for security reasons
                if (data.logoFileName) {
                    message.info(`Please re-upload your company logo: ${data.logoFileName}`);
                }
            } catch {
                // Ignore parse errors
            }
        }
    }, [form]);

    // Save as Draft handler (save all fields)
    const handleSaveDraft = () => {
        const values = form.getFieldsValue();
        const draft = {
            ...values,
            jobDescription,
            responsibilities,
            salaryMin,
            salaryMax,
            keySkills,
            screeningQuestions,
            logoFileName: logoFile ? logoFile.name : null,
        };
        localStorage.setItem('jobDraft', JSON.stringify(draft));
        message.success('Job posting saved as draft!');
    };

    // Clear Draft handler
    const handleClearDraft = () => {
        localStorage.removeItem('jobDraft');
        form.resetFields();
        setJobDescription("");
        setResponsibilities("");
        setSalaryMin("");
        setSalaryMax("");
        setLogoFile(null);
        setLogoPreview(null);
        setKeySkills("");
        setScreeningQuestions("");
        message.success('Draft cleared!');
    };

    const handlePostJob = async () => {
        try {
            const values = await form.validateFields();
            const formData = new FormData();
            // Append all form fields
            Object.entries(values).forEach(([key, value]) => {
                if (key !== 'logo' && key !== 'salaryMin' && key !== 'salaryMax' && key !== 'screeningQuestions') {
                    formData.append(key, value);
                }
            });
            // Append salaryMin and salaryMax as numbers if provided
            if (salaryMin !== "" && !isNaN(Number(salaryMin))) {
                formData.append('salaryMin', Number(salaryMin));
            }
            if (salaryMax !== "" && !isNaN(Number(salaryMax))) {
                formData.append('salaryMax', Number(salaryMax));
            }
            // Append jobDescription and responsibilities
            formData.append('jobDescription', jobDescription);
            formData.append('responsibilities', responsibilities);
            // Append screeningQuestions as comma-separated string
            formData.append('screeningQuestions', screeningQuestions);
            // Append logo file if present
            if (logoFile) {
                formData.append('logo', logoFile);
            }
            formData.append('keySkills', keySkills);
            const res = await fetch('https://toc-bac-1.onrender.com/api/jobs', {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) {
                let errorMsg = 'Failed to post job';
                try {
                    const errorData = await res.json();
                    if (errorData && errorData.error) errorMsg = errorData.error;
                } catch { /* ignore */ }
                throw new Error(errorMsg);
            }
            message.success('Job posted successfully!');
            form.resetFields();
            setJobDescription("");
            setResponsibilities("");
            setSalaryMin("");
            setSalaryMax("");
            setLogoFile(null);
            setLogoPreview(null); // Clear preview on successful post
            setScreeningQuestions("");
            navigate('/all-jobs');
        } catch (err) {
            message.error(err.message || 'Please fill in all required fields');
        }
    }

    const handleCancel = () => {
        form.resetFields();
        setJobDescription("");
        setResponsibilities("");
        navigate('/all-jobs'); // or wherever the jobs list is
    }

    const steps = [
        { title: "Job Details", icon: "1" },
        { title: "Company Info", icon: "2" },
        { title: "Requirements", icon: "3" },
        { title: "Review & Post", icon: "4" },
    ]

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
        position: "absolute",
        top: "6px",            // reduced from 32px
        left: "12vw",           // reduced from 32px
        right: "16px",          // reduced from 32px
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
    }

    // const searchStyle = {
    //     width: "clamp(200px, 25vw, 300px)",
    //     borderRadius: "8px",
    // }

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

    // New handler for file input
    const handleLogoInputChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            message.error('Only image files are allowed!');
            setLogoFile(null);
            setLogoPreview(null);
            return;
        }
        setLogoFile(file);
        const previewUrl = URL.createObjectURL(file);
        setLogoPreview(previewUrl);
        message.success('Company logo selected!');
    };

    const handleRemoveLogo = () => {
        setLogoFile(null);
        setLogoPreview(null);
    };

    return (
        <div style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <Logo />

                {/*                 <Input
                    placeholder="Search jobs, applicants..."
                    prefix={<SearchOutlined style={{ color: "#999" }} />}
                    style={searchStyle}
                /> */}

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
                        current={currentStep}
                        size="small"
                        responsive={false}
                        style={{ fontSize: "clamp(12px, 1vw, 14px)" }}
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
                                            background: index === currentStep ? "#667eea" : "#f0f0f0",
                                            color: index === currentStep ? "#fff" : "#999",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "clamp(12px, 1.1vw, 14px)",
                                            fontWeight: "600",
                                            display: "flex"
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
                                                    value={salaryMin}
                                                    onChange={setSalaryMin}
                                                    formatter={(value) => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    parser={(value) => value.replace(/₹\s?|,*/g, "")}
                                                />
                                                <InputNumber
                                                    placeholder="150,000"
                                                    style={{ width: "50%", ...inputStyle }}
                                                    value={salaryMax}
                                                    onChange={setSalaryMax}
                                                    formatter={(value) => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    parser={(value) => value.replace(/₹\s?|,*/g, "")}
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

                                <Form.Item label="Upload Company Logo" required style={formItemStyle}>
                                    <div style={uploadAreaStyle}>
                                        {logoPreview ? (
                                            <div style={{ textAlign: 'center', marginBottom: 12 }}>
                                                <img src={logoPreview} alt="Logo Preview" style={{ maxWidth: 100, maxHeight: 80, borderRadius: 8, marginBottom: 8 }} />
                                                <div style={{ fontSize: 13, color: '#333' }}>{logoFile?.name} ({logoFile ? (logoFile.size / 1024).toFixed(1) : 0} KB)</div>
                                                <Button size="small" danger onClick={handleRemoveLogo} style={{ marginTop: 8 }}>Remove</Button>
                                            </div>
                                        ) : (
                                            <>
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
                                                    <div style={{ fontSize: "clamp(24px, 3vw, 32px)", color: "#667eea" }}>📄</div>
                                                </div>
                                                <Text style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#667eea", fontWeight: "500", display: "block", marginBottom: "clamp(4px, 0.5vw, 6px)" }}>
                                                    Upload Company Logo
                                                </Text>
                                                <Text style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#999" }}>
                                                    Drag and drop or click to upload (JPG, PNG, GIF)
                                                </Text>
                                                <input
                                                    type="file"
                                                    accept="image/png,image/jpeg,image/jpg,image/gif"
                                                    onChange={handleLogoInputChange}
                                                    style={{ marginTop: 12 }}
                                                />
                                            </>
                                        )}
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

                            {/* Required Key Skills Section */}
                            <Card style={cardStyle}>
                                <Title level={3} style={sectionTitleStyle}>Required Key Skills</Title>
                                <Text style={sectionSubtitleStyle}>List the essential skills required for this job (comma-separated).</Text>
                                <Form.Item label="Required Key Skills" name="keySkills" rules={[{ required: true, message: "Please enter required key skills" }]} style={formItemStyle}>
                                    <Input
                                        placeholder="e.g. React, Node.js, MongoDB"
                                        value={keySkills}
                                        onChange={e => setKeySkills(e.target.value)}
                                        style={inputStyle}
                                    />
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

                                <Form.Item label="Screening Questions (Optional)" style={formItemStyle}>
                                    <TextArea
                                        rows={3}
                                        placeholder="Add comma-separated questions to screen candidates (e.g., 'Years of experience in React?', 'Familiar with TypeScript?')"
                                        value={screeningQuestions}
                                        onChange={e => setScreeningQuestions(e.target.value)}
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
                                    {logoPreview ? (
                                        <img src={logoPreview} alt="Logo Preview" style={{ width: 56, height: 56, borderRadius: 8, objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                                    ) : (
                                        <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24, flexShrink: 0 }}>
                                            📊
                                        </div>
                                    )}
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
                                            {form.getFieldValue('jobTitle')}
                                        </Title>
                                        <Text
                                            style={{
                                                fontSize: "clamp(13px, 1.1vw, 14px)",
                                                color: "#667eea",
                                                display: "block",
                                                marginBottom: "clamp(2px, 0.3vw, 4px)",
                                            }}
                                        >
                                            {form.getFieldValue('companyName')}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: "clamp(12px, 1vw, 13px)",
                                                color: "#999",
                                            }}
                                        >
                                            {form.getFieldValue('location')} • {form.getFieldValue('jobCategory')}
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
                                        🕒 {form.getFieldValue('employmentType')}
                                    </Tag>
                                    <Tag
                                        color="green"
                                        style={{
                                            fontSize: "clamp(11px, 1vw, 12px)",
                                            padding: "2px 8px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        💰 ₹{salaryMin} - ₹{salaryMax}
                                    </Tag>
                                    <Tag
                                        color="purple"
                                        style={{
                                            fontSize: "clamp(11px, 1vw, 12px)",
                                            padding: "2px 8px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        👨‍💻 {form.getFieldValue('experienceLevel')} Experience
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

                                {/* Required Key Skills Preview */}
                                <div style={{ marginTop: "clamp(16px, 2vw, 20px)" }}>
                                    <Title
                                        level={5}
                                        style={{
                                            fontSize: "clamp(14px, 1.2vw, 16px)",
                                            color: "#1a1a1a",
                                            marginBottom: "clamp(8px, 1vw, 12px)",
                                        }}
                                    >
                                        Required Key Skills
                                    </Title>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                                        {keySkills.split(',').map((skill, idx) => skill.trim() && (
                                            <span key={idx} style={{
                                                padding: '0.25rem 0.75rem',
                                                backgroundColor: '#f0f9ff',
                                                color: '#0369a1',
                                                borderRadius: '12px',
                                                fontSize: '0.8rem',
                                                fontWeight: '500',
                                                border: '1px solid #e0f2fe',
                                                marginRight: 4,
                                                marginBottom: 4
                                            }}>{skill.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Prompt Section (moved below preview) */}
                        <div style={{
                            maxWidth: 700,
                            margin: '32px auto 0 auto',
                            background: '#fff',
                            borderRadius: 12,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                            padding: 32,
                            border: '1px solid #e5e7eb',
                        }}>
                            <Typography.Title level={4} style={{ marginBottom: 12 }}>Generate Job Post from Prompt</Typography.Title>
                            <Typography.Text style={{ color: '#666', fontSize: 15 }}>Describe the job you want to post. Example: "I want to hire a React developer for a fintech startup in Bangalore with 3+ years experience..."</Typography.Text>
                            <TextArea
                                rows={4}
                                value={prompt}
                                onChange={e => setPrompt(e.target.value)}
                                placeholder="Enter your job post prompt here..."
                                style={{ marginTop: 16, marginBottom: 16, fontSize: 16, borderRadius: 8 }}
                                disabled={generating}
                            />
                            <Button
                                type="primary"
                                loading={generating}
                                onClick={handleGenerateFromPrompt}
                                style={{ borderRadius: 8, fontWeight: 600, fontSize: 16 }}
                                disabled={!prompt.trim() || generating}
                            >
                                Generate from Prompt
                            </Button>
                        </div>
                    </Col>
                </Row>

                {/* Action Buttons */}
                <div style={actionButtonsStyle}>
                    <Button
                        size="large"
                        onClick={handleCancel}
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
                        size="large"
                        onClick={handleClearDraft}
                        style={{
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            height: "clamp(40px, 4.5vw, 48px)",
                            minWidth: "clamp(120px, 15vw, 140px)",
                            borderRadius: "8px",
                            background: "#fff0f0",
                            borderColor: "#f0c0c0",
                            color: "#d32f2f",
                        }}
                    >
                        Clear Draft
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
