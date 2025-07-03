"use client"

import { useState } from "react"
import { Card, Input, Button, Typography, Row, Col, Form, Tabs, Tag, message, Modal, Popconfirm, Steps, Upload } from "antd"
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  DownloadOutlined,
  SafetyOutlined,
  ExclamationCircleOutlined,
  CloudUploadOutlined,
  SettingOutlined
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { Select } from 'antd';



const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
const { Step } = Steps
const { TextArea } = Input;

// Extracted GeneralInfoTab component from EmployerProfileSetup21
const GeneralInfoTab = ({ formData, setFormData, setActiveTab }) => {
  const [form] = Form.useForm()
  const [logoFile, setLogoFile] = useState(null)

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

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedData = { ...formData, ...values, logo: logoFile }
        setFormData(updatedData)
        message.success("General info saved successfully!")
        // Switch to next tab after successful validation
        if (typeof setActiveTab === "function") {
          setActiveTab("legal");
        }
      })
      .catch((errorInfo) => {
        message.error("Please fix the errors in the form")
      })
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
    <div>
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
        </div>
        <div style={{ textAlign: "center" }}>

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
            style={{
              borderRadius: "clamp(8px, 1vw, 12px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              marginBottom: "clamp(16px, 2vw, 24px)",
              fontSize: "clamp(14px, 1.2vw, 16px)",
            }}
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
            style={{
              borderRadius: "clamp(8px, 1vw, 12px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              marginBottom: "clamp(16px, 2vw, 24px)",
              fontSize: "clamp(14px, 1.2vw, 16px)",
            }}
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
          type="primary"
          size="large"
          onClick={handleSave}
          style={{
            minWidth: "clamp(120px, 12vw, 140px)",
            fontSize: "clamp(14px, 1.2vw, 16px)",
            height: "clamp(36px, 4vw, 40px)",
            borderRadius: "clamp(6px, 0.8vw, 8px)",
            background: "#1890ff",
            borderColor: "#1890ff",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// Main component with both tabs
const EmployerProfileSetup2 = ({ onNavigate, formData, setFormData }) => {
  const [form] = Form.useForm()
  const [contactForm] = Form.useForm()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState("general")
  const [additionalContacts, setAdditionalContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "HR Manager",
      email: "john.doe@example.com",
      phone: "+1 (555) 765-4321",
    },
    {
      id: 2,
      name: "Emily White",
      role: "Recruitment Specialist",
      email: "emily.white@example.com",
      phone: "+1 (555) 987-6543",
    },
  ])
  const [isContactModalVisible, setIsContactModalVisible] = useState(false)
  const [editingContact, setEditingContact] = useState(null)
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Company Registration Certificate",
      status: "verified",
      color: "#52c41a",
    },
    {
      id: 2,
      name: "Memorandum of Association",
      status: "pending",
      color: "#faad14",
    },
    {
      id: 3,
      name: "Articles of Association",
      status: "reviewed",
      color: "#1890ff",
    },
    {
      id: 4,
      name: "Tax Compliance Report 2023",
      status: "pending",
      color: "#ff4d4f",
    },
  ])

  const containerStyle = {
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "clamp(16px, 2vw, 24px)",
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    "@media (max-width: 768px)": {
      padding: "clamp(12px, 2vw, 16px)",
    },
  }

  const cardStyle = {
    borderRadius: "clamp(8px, 1vw, 12px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "clamp(16px, 2vw, 24px)",
    fontSize: "clamp(14px, 1.2vw, 16px)",
  }

  const sectionHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "clamp(6px, 1vw, 8px)",
    marginBottom: "clamp(12px, 1.5vw, 16px)",
    flexWrap: "wrap",
  }

  const contactCardStyle = {
    border: "1px solid #f0f0f0",
    borderRadius: "clamp(6px, 1vw, 8px)",
    padding: "clamp(12px, 1.5vw, 16px)",
    marginBottom: "clamp(8px, 1vw, 12px)",
    background: "#fafafa",
    fontSize: "clamp(13px, 1.1vw, 14px)",
  }

  const documentItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "clamp(10px, 1.2vw, 12px) clamp(12px, 1.5vw, 16px)",
    border: "1px solid #f0f0f0",
    borderRadius: "clamp(4px, 0.8vw, 6px)",
    marginBottom: "clamp(6px, 1vw, 8px)",
    background: "#fff",
    fontSize: "clamp(13px, 1.1vw, 14px)",
  }

  const complianceCardStyle = {
    background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
    border: "1px solid #bae6fd",
    borderRadius: "clamp(6px, 1vw, 8px)",
    padding: "clamp(16px, 2vw, 20px)",
    marginBottom: "clamp(16px, 2vw, 24px)",
    fontSize: "clamp(13px, 1.1vw, 14px)",
  }

  const securityCardStyle = {
    background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
    border: "1px solid #bbf7d0",
    borderRadius: "clamp(6px, 1vw, 8px)",
    padding: "clamp(16px, 2vw, 20px)",
    fontSize: "clamp(13px, 1.1vw, 14px)",
  }

  const handleValidatePAN = () => {
    const panValue = form.getFieldValue("pan")
    if (!panValue) {
      message.error("Please enter PAN number first")
      return
    }

    // Simulate API call
    message.loading("Validating PAN...", 2)
    setTimeout(() => {
      message.success("PAN validated successfully!")
    }, 2000)
  }

  const handleValidateGSTIN = () => {
    const gstinValue = form.getFieldValue("gstin")
    if (!gstinValue) {
      message.error("Please enter GSTIN number first")
      return
    }

    // Simulate API call
    message.loading("Validating GSTIN...", 2)
    setTimeout(() => {
      message.success("GSTIN validated successfully!")
    }, 2000)
  }

  const handleAddContact = () => {
    setEditingContact(null)
    contactForm.resetFields()
    setIsContactModalVisible(true)
  }

  const handleEditContact = (contact) => {
    setEditingContact(contact)
    contactForm.setFieldsValue(contact)
    setIsContactModalVisible(true)
  }

  const handleDeleteContact = (contactId) => {
    setAdditionalContacts((prev) => prev.filter((contact) => contact.id !== contactId))
    message.success("Contact deleted successfully!")
  }

  const handleUploadDocument = () => {
    message.info("Document upload functionality will be implemented")
  }

  const handleViewDocument = (docName) => {
    message.info(`Viewing ${docName}`)
  }

  const handleDownloadDocument = (docName) => {
    message.success(`Downloading ${docName}`)
  }

  const handleContactModalOk = () => {
    contactForm.validateFields().then((values) => {
      if (editingContact) {
        setAdditionalContacts(prev =>
          prev.map(contact =>
            contact.id === editingContact.id ? { ...values, id: contact.id } : contact
          )
        )
        message.success('Contact updated successfully!')
      } else {
        const newContact = {
          ...values,
          id: Date.now()
        }
        setAdditionalContacts(prev => [...prev, newContact])
        message.success('Contact added successfully!')
      }
      setIsContactModalVisible(false)
      contactForm.resetFields()
    })
  }

  const handleComplete = () => {
    navigate("/company-profile")
  }

  const handleCancel = () => {
    setActiveTab("general")
  }

  const getStatusTag = (status) => {
    const statusConfig = {
      verified: { color: "success", text: "Verified" },
      pending: { color: "processing", text: "Pending" },
      reviewed: { color: "processing", text: "Reviewed" },
      error: { color: "error", text: "Pending" },
    }
    const config = statusConfig[status] || statusConfig.pending
    return (
      <Tag color={config.color} size="small">
        {config.text}
      </Tag>
    )
  }

  return (
    <div
      style={{
        ...containerStyle,
        boxSizing: "border-box",
      }}
    >
      <Card style={{ ...cardStyle, marginBottom: "0" }}>
        <Title level={3} style={{ marginBottom: "24px" }}>
          Company Profile Setup
        </Title>

        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab} // This handles manual tab changes
          style={{ marginBottom: "24px" }}
        >
          <TabPane tab="General Info" key="general">
            <GeneralInfoTab
              formData={formData}
              setFormData={setFormData}
              setActiveTab={setActiveTab} // Make sure this is passed
            />
          </TabPane>
          <TabPane tab="Legal & Contacts" key="legal">
            <Row
              gutter={[
                { xs: 16, sm: 20, md: 24, lg: 24 },
                { xs: 16, sm: 20, md: 24, lg: 24 },
              ]}
              style={{ marginTop: "clamp(16px, 2vw, 24px)" }}
            >
              {/* Left Column */}
              <Col xs={24} lg={14}>
                {/* Legal Compliance Section */}
                <div style={{ marginBottom: "32px" }}>
                  <div style={sectionHeaderStyle}>
                    <FileTextOutlined style={{ color: "#1890ff" }} />
                    <Title level={4} style={{ margin: 0 }}>
                      Legal Compliance & Business Details
                    </Title>
                  </div>
                  <Text style={{ color: "#666", marginBottom: "24px", display: "block" }}>
                    Verify your company's official identification numbers and registered address for compliance.
                  </Text>
                  <Form form={form} layout="vertical">
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={16}>
                        <Form.Item
                          label="Permanent Account Number (PAN)"
                          name="pan"
                          rules={[
                            { required: true, message: "Please enter PAN number!" },
                            { pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, message: "Please enter a valid PAN number!" },
                          ]}
                        >
                          <Input
                            placeholder="ABCDE1234F"
                            style={{ padding: "8px 12px" }}
                            maxLength={10}
                            style={{ textTransform: "uppercase" }}
                          />
                        </Form.Item>
                        <Text style={{ color: "#999", fontSize: "12px" }}>
                          Required for tax and legal identification purposes.
                        </Text>
                      </Col>
                      <Col xs={24} md={8}>
                        <div style={{ paddingTop: "32px" }}>
                          <Button type="primary" ghost size="small" onClick={handleValidatePAN}>
                            Validate
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
                      <Col xs={24} md={16}>
                        <Form.Item
                          label="Goods and Services Tax Identification Number (GSTIN)"
                          name="gstin"
                          rules={[
                            { required: true, message: "Please enter GSTIN number!" },
                            { len: 15, message: "GSTIN must be exactly 15 characters!" },
                          ]}
                        >
                          <Input
                            placeholder="22AAAAA0000A1Z5"
                            style={{ padding: "8px 12px" }}
                            maxLength={15}
                            style={{ textTransform: "uppercase" }}
                          />
                        </Form.Item>
                        <Text style={{ color: "#999", fontSize: "12px" }}>
                          Essential for GST compliance and business operations.
                        </Text>
                      </Col>
                      <Col xs={24} md={8}>
                        <div style={{ paddingTop: "32px" }}>
                          <Button type="primary" ghost size="small" onClick={handleValidateGSTIN}>
                            Validate
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <Form.Item
                      label="Registered Company Address"
                      name="address"
                      rules={[
                        { required: false, message: "Please enter company address!" },
                        { min: 10, message: "Address must be at least 10 characters!" },
                      ]}
                      style={{ marginTop: "16px" }}
                    >
                      <Input.TextArea
                        placeholder="123 Main Street, Suite 400, New York, NY 10001, USA"
                        style={{ padding: "8px 12px" }}
                        rows={3}
                        showCount
                        maxLength={200}
                      />
                      <Text style={{ color: "#999", fontSize: "12px", marginTop: "4px", display: "block" }}>
                        This address is officially linked to your PAN/GST registration.
                      </Text>
                    </Form.Item>
                  </Form>
                </div>

                {/* HR & Communication Contacts */}
                <div>
                  <div style={sectionHeaderStyle}>
                    <UserOutlined style={{ color: "#1890ff" }} />
                    <Title level={4} style={{ margin: 0 }}>
                      HR & Communication Contacts
                    </Title>
                  </div>
                  <Text style={{ color: "#666", marginBottom: "24px", display: "block" }}>
                    Manage key personnel for official communications and job applications.
                  </Text>

                  {/* Primary HR Contact */}
                  <div style={{ marginBottom: "24px" }}>
                    <div style={sectionHeaderStyle}>
                      <UserOutlined style={{ color: "#52c41a" }} />
                      <Text strong>Primary HR Contact</Text>
                    </div>

                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Full Name"
                          name="primaryContactName"
                          rules={[
                            { required: true, message: "Please enter contact name!" },
                            { min: 2, message: "Name must be at least 2 characters!" },
                          ]}
                        >
                          <Input placeholder="Sarah Chen" style={{ padding: "8px 12px" }} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Email Address"
                          name="primaryContactEmail"
                          rules={[
                            { required: true, message: "Please enter email address!" },
                            { type: "email", message: "Please enter a valid email!" },
                          ]}
                        >
                          <Input placeholder="sarah.chen@example.com" style={{ padding: "8px 12px" }} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Phone Number"
                          name="primaryContactPhone"
                          rules={[
                            { required: true, message: "Please enter phone number!" },
                            { pattern: /^[+]?[1-9][\d]{0,15}$/, message: "Please enter a valid phone number!" },
                          ]}
                        >
                          <Input placeholder="+1 (555) 123-4567" style={{ padding: "8px 12px" }} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Role/Designation"
                          name="primaryContactRole"
                          rules={[{ required: true, message: "Please enter role/designation!" }]}
                        >
                          <Input placeholder="Head of HR" style={{ padding: "8px 12px" }} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>

                  {/* Additional Contacts */}
                  <div>
                    <div style={sectionHeaderStyle}>
                      <UserOutlined style={{ color: "#1890ff" }} />
                      <Text strong>Additional Contacts</Text>
                    </div>

                    {additionalContacts.map((contact) => (
                      <div key={contact.id} style={contactCardStyle}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div>
                            <Text strong>{contact.name}</Text>
                            <div style={{ color: "#666", fontSize: "14px" }}>{contact.role}</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                              <MailOutlined style={{ fontSize: "12px", color: "#999" }} />
                              <Text style={{ fontSize: "12px", color: "#666" }}>{contact.email}</Text>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                              <PhoneOutlined style={{ fontSize: "12px", color: "#999" }} />
                              <Text style={{ fontSize: "12px", color: "#666" }}>{contact.phone}</Text>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <Button
                              type="text"
                              size="small"
                              icon={<EditOutlined />}
                              onClick={() => handleEditContact(contact)}
                            />
                            <Popconfirm
                              title="Delete Contact"
                              description="Are you sure you want to delete this contact?"
                              onConfirm={() => handleDeleteContact(contact.id)}
                              okText="Yes"
                              cancelText="No"
                            >
                              <Button type="text" size="small" icon={<DeleteOutlined />} danger />
                            </Popconfirm>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      type="dashed"
                      icon={<PlusOutlined />}
                      style={{ width: "100%", marginTop: "12px" }}
                      onClick={handleAddContact}
                    >
                      Add New Contact
                    </Button>
                  </div>
                </div>
              </Col>

              {/* Right Column */}
              <Col xs={24} lg={10}>
                {/* Ensuring Legal Compliance */}
                <div style={complianceCardStyle}>
                  <div style={sectionHeaderStyle}>
                    <CheckCircleOutlined style={{ color: "#1890ff" }} />
                    <Text strong>Ensuring Legal Compliance</Text>
                  </div>
                  <Text style={{ color: "#666", fontSize: "14px", marginBottom: "16px", display: "block" }}>
                    Key information about your legal obligations and best practices.
                  </Text>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      borderRadius: "8px",
                      padding: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <Text strong style={{ display: "block", marginBottom: "8px" }}>
                      Compliance Checklist
                    </Text>
                    <div style={{ fontSize: "12px", color: "#666" }}>
                      ✓ Maintaining accurate PAN and GST details is crucial for seamless financial transactions, tax
                      compliance, and avoiding legal discrepancies. Always keep your information up-to-date.
                    </div>
                  </div>

                  <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.5" }}>
                    <div>• Ensure PAN and GST details precisely match official government records</div>
                    <div>• Update contact information promptly to ensure smooth official communication</div>
                    <div>• Maintain easily accessible and organized records of all legal documents</div>
                  </div>
                </div>

                {/* Legal Documents */}
                <Card title="Legal Documents" style={cardStyle}>
                  <Text style={{ color: "#666", fontSize: "14px", marginBottom: "16px", display: "block" }}>
                    Upload and manage key company documents and their verification status.
                  </Text>

                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        background: "linear-gradient(135deg, #f6ffed, #f6ffed)",
                        borderRadius: "8px",
                        padding: "12px",
                        marginBottom: "16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <FileTextOutlined style={{ color: "#52c41a" }} />
                        <Text strong style={{ fontSize: "14px" }}>
                          Document Management
                        </Text>
                      </div>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <div
                          style={{
                            background: "#fff",
                            borderRadius: "4px",
                            padding: "8px",
                            flex: 1,
                            textAlign: "center",
                          }}
                        >
                          <FileTextOutlined style={{ fontSize: "24px", color: "#999", marginBottom: "4px" }} />
                        </div>
                        <div
                          style={{
                            background: "#fff",
                            borderRadius: "4px",
                            padding: "8px",
                            flex: 1,
                            textAlign: "center",
                          }}
                        >
                          <FileTextOutlined style={{ fontSize: "24px", color: "#999", marginBottom: "4px" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {documents.map((doc) => (
                    <div key={doc.id} style={documentItemStyle}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <FileTextOutlined style={{ color: doc.color }} />
                        <div>
                          <Text strong style={{ display: "block" }}>
                            {doc.name}
                          </Text>
                          {getStatusTag(doc.status)}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <Button
                          type="text"
                          size="small"
                          icon={<EyeOutlined />}
                          onClick={() => handleViewDocument(doc.name)}
                        />
                        <Button
                          type="text"
                          size="small"
                          icon={<DownloadOutlined />}
                          onClick={() => handleDownloadDocument(doc.name)}
                        />
                      </div>
                    </div>
                  ))}

                  <Button
                    type="dashed"
                    icon={<UploadOutlined />}
                    style={{ width: "100%", marginTop: "16px" }}
                    onClick={handleUploadDocument}
                  >
                    Upload New Document
                  </Button>
                </Card>

                {/* Your Data is Secure */}
                <div style={securityCardStyle}>
                  <div style={sectionHeaderStyle}>
                    <SafetyOutlined style={{ color: "#52c41a" }} />
                    <Text strong>Your Data is Secure</Text>
                  </div>
                  <Text style={{ color: "#666", fontSize: "14px", marginBottom: "16px", display: "block" }}>
                    We prioritize the protection of your sensitive information.
                  </Text>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      borderRadius: "8px",
                      padding: "16px",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    <SafetyOutlined style={{ fontSize: "48px", color: "#52c41a", marginBottom: "12px" }} />
                    <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.5" }}>
                      All your company details, including legal and contact information, are protected with advanced
                      encryption and stored securely on our platform. Your trust is our priority.
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircleOutlined style={{ color: "#52c41a" }} />
                    <Text style={{ fontSize: "12px", color: "#666" }}>Industry-leading security measures in place</Text>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Card>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "clamp(8px, 1vw, 12px)",
          marginTop: "clamp(16px, 2vw, 24px)",
          flexWrap: "wrap",
        }}
      >
        <Button
          size="large"
          style={{ minWidth: "clamp(80px, 10vw, 100px)", fontSize: "clamp(14px, 1.2vw, 16px)" }}
          onClick={handleCancel}
        >
          Previous
        </Button>
        <Button
          type="primary"
          size="large"
          style={{ minWidth: "clamp(100px, 12vw, 120px)", fontSize: "clamp(14px, 1.2vw, 16px)" }}
          onClick={handleComplete}
        >
          Complete
        </Button>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "32px",
          padding: "16px",
          color: "#999",
          fontSize: "12px",
        }}
      >
        © 2024 JobPortal Inc. All rights reserved.
      </div>

      {/* Contact Modal */}
      <Modal
        title={editingContact ? "Edit Contact" : "Add New Contact"}
        open={isContactModalVisible}
        onOk={handleContactModalOk}
        onCancel={() => setIsContactModalVisible(false)}
        width={600}
      >
        <Form form={contactForm} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  { required: true, message: "Please enter contact name!" },
                  { min: 2, message: "Name must be at least 2 characters!" },
                ]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Role/Designation"
                name="role"
                rules={[{ required: true, message: "Please enter role!" }]}
              >
                <Input placeholder="HR Manager" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please enter email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="john.doe@example.com" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: "Please enter phone number!" }]}
              >
                <Input placeholder="+1 (555) 123-4567" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  )
}

export default EmployerProfileSetup2