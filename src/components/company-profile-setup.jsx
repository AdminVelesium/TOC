"use client"

import { useState } from "react"
import { Layout, Card, Input, Button, Typography, Row, Col, Form, Upload, message, Select, Steps, Divider } from "antd"
import { SettingOutlined, CheckCircleOutlined, CloudUploadOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const { Header, Sider, Content } = Layout
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select
const { Step } = Steps



const EmployerProfileSetup1 = ({ onNavigate, formData, setFormData }) => {
  const [form] = Form.useForm()
  const [logoFile, setLogoFile] = useState(null)

  const navigate = useNavigate();

  const handleStep2 = () => {
    navigate("/employer-profile-setup-1")
  }

  // Initialize form with existing data
  useState(() => {
    if (formData) {
      form.setFieldsValue({
        companyName: formData.companyName || "React Job Portal",
        companyDescription:
          formData.companyDescription ||
          "React Job Portal is a cutting-edge platform designed to simplify and enhance the hiring process for businesses worldwide. We connect talented individuals with innovative companies, offering robust tools for job posting, applicant tracking, and seamless communication. Our mission is to empower recruiters and job seekers alike, fostering efficient and successful matches in a dynamic professional landscape.",
        industryType: formData.industryType || "Software Development & HR Tech",
        companyWebsite: formData.companyWebsite || "https://www.reactjobportal.com",
      })
    }
  }, [formData])

  const containerStyle = {
    minHeight: "100vh",
    background: "#f5f5f5",
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
  }

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "#fff",
    padding: "clamp(12px, 1.5vw, 16px) clamp(16px, 2vw, 24px)",
    borderBottom: "1px solid #f0f0f0",
    display: "flex",
    alignItems: "center",
    gap: "clamp(12px, 1.5vw, 16px)",
    flexWrap: "wrap",
  }

  const logoStyle = {
    width: "clamp(28px, 3vw, 32px)",
    height: "clamp(28px, 3vw, 32px)",
    background: "linear-gradient(135deg, #1890ff, #722ed1)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "clamp(14px, 1.2vw, 16px)",
  }

  const siderStyle = {
    background: "#fff",
    borderRight: "1px solid #f0f0f0",
    minHeight: "100vh",
    position: "fixed",
    left: 0,
    top: "clamp(56px, 7vw, 64px)",
    bottom: 0,
    width: "clamp(200px, 15vw, 240px)",
    zIndex: 100,
    overflow: "auto",
  }

  const contentStyle = {
    marginLeft: "clamp(200px, 15vw, 240px)",
    marginTop: "clamp(56px, 7vw, 64px)",
    padding: "clamp(24px, 3vw, 32px)",
    minHeight: "calc(100vh - clamp(56px, 7vw, 64px))",
    background: "#f5f5f5",
  }

  const cardStyle = {
    borderRadius: "clamp(8px, 1vw, 12px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "clamp(16px, 2vw, 24px)",
    fontSize: "clamp(14px, 1.2vw, 16px)",
  }

  const uploadProps = {
    name: "logo",
    multiple: false,
    accept: "image/*",
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/")
      if (!isImage) {
        message.error("You can only upload image files!")
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        message.error("Image must be smaller than 2MB!")
        return false
      }
      setLogoFile(file)
      message.success(`${file.name} uploaded successfully`)
      return false // Prevent auto upload
    },
    onRemove: () => {
      setLogoFile(null)
      message.success("Logo removed successfully")
    },
  }

  const handleSaveAndContinue = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedData = { ...formData, ...values, logo: logoFile }
        setFormData(updatedData)
        message.success("Profile data saved successfully!")
        if (onNavigate) {
          onNavigate(2)
        }
      })
      .catch((errorInfo) => {
        message.error("Please fix the errors in the form")
      })
  }

  const handleCancel = () => {
    form.resetFields()
    setLogoFile(null)
    message.info("Form reset successfully")
  }

  const handleRemoveLogo = () => {
    setLogoFile(null)
    message.success("Logo removed successfully")
  }

  const industryOptions = [
    "Software Development & HR Tech",
    "Information Technology",
    "Healthcare",
    "Finance & Banking",
    "Education",
    "Manufacturing",
    "Retail & E-commerce",
    "Consulting",
    "Media & Entertainment",
    "Other",
  ]

  return (
    <div style={containerStyle}>
      {/* Fixed Header */}
      <Header style={headerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 16px)" }}>
          <div style={logoStyle}>🎯</div>
          <Text strong style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }}>
            Talent on cloud
          </Text>
        </div>
        {/* <div style={{ marginLeft: "auto", display: "flex", gap: "clamp(16px, 2vw, 24px)" }}>
          <Text
            strong
            style={{
              color: "#1890ff",
              fontSize: "clamp(14px, 1.2vw, 16px)",
              cursor: "pointer",
              borderBottom: "2px solid #1890ff",
              paddingBottom: "4px",
            }}
          >
            Profile Setup 1
          </Text>
          <Text
            style={{
              color: "#999",
              fontSize: "clamp(14px, 1.2vw, 16px)",
              cursor: "pointer",
            }}
            onClick={() => onNavigate && onNavigate(2)}
          >
            Profile Setup 2
          </Text>
        </div> */}
      </Header>

      {/* Sidebar */}
      <Sider style={siderStyle}>
        <div style={{ padding: "clamp(16px, 2vw, 24px) clamp(12px, 1.5vw, 16px)" }}>
          <div
            style={{
              background: "#1890ff",
              color: "#fff",
              padding: "clamp(10px, 1.2vw, 12px) clamp(12px, 1.5vw, 16px)",
              borderRadius: "clamp(4px, 0.8vw, 6px)",
              marginBottom: "clamp(8px, 1vw, 12px)",
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 1vw, 12px)",
              cursor: "pointer",
              fontSize: "clamp(13px, 1.1vw, 14px)",
            }}
          >
            <div
              style={{
                width: "clamp(6px, 0.8vw, 8px)",
                height: "clamp(6px, 0.8vw, 8px)",
                background: "#fff",
                borderRadius: "50%",
              }}
            />
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: "inherit" }}>Profile Setup 1</Text>
          </div>

          <div
            style={{
              color: "#999",
              padding: "clamp(10px, 1.2vw, 12px) clamp(12px, 1.5vw, 16px)",
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 1vw, 12px)",
              cursor: "pointer",
              borderRadius: "clamp(4px, 0.8vw, 6px)",
              transition: "all 0.3s ease",
              fontSize: "clamp(13px, 1.1vw, 14px)",
            }}
            onClick={() => onNavigate && onNavigate(2)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0f0f0"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
            }}
          >
            <div
              style={{
                width: "clamp(6px, 0.8vw, 8px)",
                height: "clamp(6px, 0.8vw, 8px)",
                border: "1px solid #d9d9d9",
                borderRadius: "50%",
              }}
            />
            <Text style={{ color: "#999", fontSize: "inherit" }}>Profile Setup 2</Text>
          </div>
        </div>

        <Divider style={{ margin: "0" }} />

        <div style={{ padding: "clamp(16px, 2vw, 24px) clamp(12px, 1.5vw, 16px)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 1vw, 12px)",
              color: "#999",
              cursor: "pointer",
              padding: "clamp(8px, 1vw, 12px)",
              borderRadius: "clamp(4px, 0.8vw, 6px)",
              transition: "all 0.3s ease",
              fontSize: "clamp(13px, 1.1vw, 14px)",
            }}
            onClick={() => message.info("Settings functionality coming soon!")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0f0f0"
              e.currentTarget.style.color = "#666"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = "#999"
            }}
          >
            <SettingOutlined style={{ fontSize: "clamp(14px, 1.2vw, 16px)" }} />
            <Text style={{ color: "inherit", fontSize: "inherit" }}>Settings</Text>
          </div>
        </div>
      </Sider>

      {/* Main Content */}
      <Content style={contentStyle}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Page Header */}
          <div style={{ marginBottom: "clamp(32px, 4vw, 40px)" }}>
            <Title
              level={1}
              style={{
                fontSize: "clamp(28px, 3.5vw, 36px)",
                marginBottom: "clamp(8px, 1vw, 12px)",
                color: "#333",
              }}
            >
              Set Up Your Company Profile
            </Title>
            <Paragraph
              style={{
                fontSize: "clamp(14px, 1.2vw, 16px)",
                color: "#666",
                marginBottom: "clamp(32px, 4vw, 40px)",
                lineHeight: "1.6",
              }}
            >
              Establish your brand identity within the React Job Portal by setting up your logo, brand colors, and basic
              company information.
            </Paragraph>

            {/* Progress Steps */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "clamp(40px, 5vw, 80px)",
                marginBottom: "clamp(40px, 5vw, 48px)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "clamp(40px, 4vw, 48px)",
                    height: "clamp(40px, 4vw, 48px)",
                    borderRadius: "50%",
                    background: "#1890ff",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(16px, 1.8vw, 20px)",
                    fontWeight: "bold",
                    margin: "0 auto clamp(8px, 1vw, 12px) auto",
                    boxShadow: "0 4px 12px rgba(24,144,255,0.3)",
                  }}
                >
                  1
                </div>
                <Text strong style={{ color: "#1890ff", fontSize: "clamp(12px, 1vw, 14px)" }}>
                  Branding
                </Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "clamp(40px, 4vw, 48px)",
                    height: "clamp(40px, 4vw, 48px)",
                    borderRadius: "50%",
                    background: "#f0f0f0",
                    color: "#999",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(16px, 1.8vw, 20px)",
                    fontWeight: "bold",
                    margin: "0 auto clamp(8px, 1vw, 12px) auto",
                    border: "2px solid #d9d9d9",
                  }}
                >
                  2
                </div>
                <Text style={{ color: "#999", fontSize: "clamp(12px, 1vw, 14px)" }}>Legal/Contacts</Text>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <Row gutter={[32, 32]}>
            {/* Company Logo Section */}
            <Col xs={24} lg={10}>
              <Card
                title={
                  <Text strong style={{ fontSize: "clamp(18px, 2vw, 20px)", color: "#333" }}>
                    Company Logo
                  </Text>
                }
                style={cardStyle}
              >
                <Form.Item
                  label={<Text style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#666" }}>Company Logo</Text>}
                  style={{ marginBottom: "clamp(20px, 2.5vw, 24px)" }}
                >
                  <div
                    style={{
                      border: "2px dashed #d9d9d9",
                      borderRadius: "clamp(8px, 1vw, 12px)",
                      padding: "clamp(40px, 5vw, 60px) clamp(20px, 2.5vw, 24px)",
                      textAlign: "center",
                      background: "#fafafa",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#1890ff"
                      e.currentTarget.style.background = "#f0f9ff"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#d9d9d9"
                      e.currentTarget.style.background = "#fafafa"
                    }}
                  >
                    <Upload {...uploadProps} showUploadList={false}>
                      <div>
                        <CloudUploadOutlined
                          style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            color: "#999",
                            marginBottom: "clamp(12px, 1.5vw, 16px)",
                          }}
                        />
                        <div>
                          <Text style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#666" }}>
                            Click or drag file to this area to upload
                          </Text>
                        </div>
                        <div>
                          <Text style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#999" }}>
                            Support for a single upload. PNG, JPG files up to 2MB
                          </Text>
                        </div>
                      </div>
                    </Upload>
                  </div>
                </Form.Item>

                {logoFile && (
                  <div
                    style={{
                      background: "#f6ffed",
                      border: "1px solid #b7eb8f",
                      borderRadius: "clamp(6px, 1vw, 8px)",
                      padding: "clamp(12px, 1.5vw, 16px)",
                      marginBottom: "clamp(16px, 2vw, 20px)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <Text strong style={{ color: "#52c41a", fontSize: "clamp(14px, 1.2vw, 16px)" }}>
                          {logoFile.name}
                        </Text>
                        <div style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#666" }}>
                          {(logoFile.size / 1024).toFixed(1)} KB
                        </div>
                      </div>
                      <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "clamp(16px, 1.4vw, 18px)" }} />
                    </div>
                  </div>
                )}

                <Button
                  type="text"
                  danger
                  onClick={handleRemoveLogo}
                  style={{
                    fontSize: "clamp(13px, 1.1vw, 14px)",
                    padding: "clamp(4px, 0.5vw, 6px) clamp(8px, 1vw, 12px)",
                  }}
                >
                  Remove Logo
                </Button>
              </Card>
            </Col>

            {/* Basic Company Information Section */}
            <Col xs={24} lg={14}>
              <Card
                title={
                  <Text strong style={{ fontSize: "clamp(18px, 2vw, 20px)", color: "#333" }}>
                    Basic Company Information
                  </Text>
                }
                style={cardStyle}
              >
                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    companyName: "React Job Portal",
                    companyDescription:
                      "React Job Portal is a cutting-edge platform designed to simplify and enhance the hiring process for businesses worldwide. We connect talented individuals with innovative companies, offering robust tools for job posting, applicant tracking, and seamless communication. Our mission is to empower recruiters and job seekers alike, fostering efficient and successful matches in a dynamic professional landscape.",
                    industryType: "Software Development & HR Tech",
                    companyWebsite: "https://www.reactjobportal.com",
                  }}
                >
                  <Form.Item
                    label={<Text style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#333" }}>Company Name</Text>}
                    name="companyName"
                    rules={[
                      { required: true, message: "Please enter your company name!" },
                      { min: 2, message: "Company name must be at least 2 characters!" },
                    ]}
                    style={{ marginBottom: "clamp(20px, 2.5vw, 24px)" }}
                  >
                    <Input
                      placeholder="Enter your company name"
                      style={{
                        padding: "clamp(8px, 1vw, 12px)",
                        fontSize: "clamp(14px, 1.2vw, 16px)",
                        borderRadius: "clamp(6px, 0.8vw, 8px)",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#333" }}>Company Description</Text>
                    }
                    name="companyDescription"
                    rules={[
                      { required: true, message: "Please enter your company description!" },
                      { min: 50, message: "Description must be at least 50 characters!" },
                    ]}
                    style={{ marginBottom: "clamp(20px, 2.5vw, 24px)" }}
                  >
                    <TextArea
                      rows={6}
                      placeholder="Describe your company, mission, and what makes you unique..."
                      style={{
                        resize: "none",
                        fontSize: "clamp(14px, 1.2vw, 16px)",
                        borderRadius: "clamp(6px, 0.8vw, 8px)",
                        padding: "clamp(8px, 1vw, 12px)",
                      }}
                      showCount
                      maxLength={1000}
                    />
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#333" }}>Industry type</Text>}
                    name="industryType"
                    rules={[{ required: true, message: "Please select your industry type!" }]}
                    style={{ marginBottom: "clamp(20px, 2.5vw, 24px)" }}
                  >
                    <Select
                      placeholder="Select industry"
                      style={{
                        fontSize: "clamp(14px, 1.2vw, 16px)",
                      }}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                      {industryOptions.map((industry) => (
                        <Option key={industry} value={industry}>
                          {industry}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#333" }}>Company Website</Text>}
                    name="companyWebsite"
                    rules={[
                      { required: true, message: "Please enter your company website!" },
                      { type: "url", message: "Please enter a valid URL!" },
                    ]}
                    style={{ marginBottom: "0" }}
                  >
                    <Input
                      placeholder="https://www.yourcompany.com"
                      style={{
                        padding: "clamp(8px, 1vw, 12px)",
                        fontSize: "clamp(14px, 1.2vw, 16px)",
                        borderRadius: "clamp(6px, 0.8vw, 8px)",
                      }}
                    />
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "clamp(12px, 1.5vw, 16px)",
              marginTop: "clamp(32px, 4vw, 40px)",
              flexWrap: "wrap",
            }}
          >
            <Button
              size="large"
              onClick={handleCancel}
              style={{
                minWidth: "clamp(80px, 10vw, 100px)",
                fontSize: "clamp(14px, 1.2vw, 16px)",
                height: "clamp(36px, 4vw, 40px)",
                borderRadius: "clamp(6px, 0.8vw, 8px)",
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={handleStep2}
              style={{
                minWidth: "clamp(120px, 12vw, 140px)",
                fontSize: "clamp(14px, 1.2vw, 16px)",
                height: "clamp(36px, 4vw, 40px)",
                borderRadius: "clamp(6px, 0.8vw, 8px)",
                background: "#1890ff",
                borderColor: "#1890ff",
              }}
            >
              Save & Continue
            </Button>
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: "left",
              marginTop: "clamp(40px, 5vw, 60px)",
              padding: "clamp(16px, 2vw, 20px) 0",
              color: "#999",
              fontSize: "clamp(12px, 1vw, 14px)",
              borderTop: "1px solid #f0f0f0",
            }}
          >
            Made with <span style={{ color: "#1890ff", fontWeight: "bold" }}>Visily</span>
          </div>
        </div>
      </Content>
    </div>
  )
}
export default EmployerProfileSetup1