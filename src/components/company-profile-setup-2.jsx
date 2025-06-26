"use client"

import { useState } from "react"
import { Card, Input, Button, Typography, Row, Col, Form, Tabs, Tag, message, Modal, Popconfirm } from "antd"
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
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"


const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs

const EmployerProfileSetup2 = ({ onNavigate, formData, setFormData }) => {
  const [form] = Form.useForm()
  const [contactForm] = Form.useForm()
  const navigate = useNavigate()

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

  // Initialize form with existing data
  useState(() => {
    if (formData) {
      form.setFieldsValue({
        pan: formData.pan || "ABCDE1234F",
        gstin: formData.gstin || "22AAAAA0000A1Z5",
        address: formData.address || "123 Main Street, Suite 400, New York, NY 10001, USA",
        primaryContactName: formData.primaryContactName || "Sarah Chen",
        primaryContactEmail: formData.primaryContactEmail || "sarah.chen@example.com",
        primaryContactPhone: formData.primaryContactPhone || "+1 (555) 123-4567",
        primaryContactRole: formData.primaryContactRole || "Head of HR",
      })
    }
  }, [formData])

  const headerStyle = {
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

  const handleContactModalOk = () => {
    contactForm
      .validateFields()
      .then((values) => {
        if (editingContact) {
          // Update existing contact
          setAdditionalContacts((prev) =>
            prev.map((contact) => (contact.id === editingContact.id ? { ...contact, ...values } : contact)),
          )
          message.success("Contact updated successfully!")
        } else {
          // Add new contact
          const newContact = {
            id: Date.now(),
            ...values,
          }
          setAdditionalContacts((prev) => [...prev, newContact])
          message.success("Contact added successfully!")
        }
        setIsContactModalVisible(false)
        contactForm.resetFields()
      })
      .catch((errorInfo) => {
        message.error("Please fix the errors in the form")
      })
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


  const handleComplete = () => {
    navigate("/company-profile");
  };



  const handleCancel = () => {
    Modal.confirm({
      title: "Are you sure you want to cancel?",
      content: "Any unsaved changes will be lost.",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        onNavigate(1)
      },
    })
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
      {/* Header */}
      <Card style={{ ...cardStyle, marginBottom: "0" }}>
        <div style={headerStyle}>
          <div style={logoStyle}>T</div>
          <Text strong style={{ fontSize: "16px" }}>
            Talent on cloud
          </Text>
          <div style={{ marginLeft: "auto", display: "flex", gap: "24px" }}>
            <Text style={{ color: "#999", cursor: "pointer" }} onClick={() => onNavigate(1)}>
              Profile Setup 1
            </Text>
            <Text strong style={{ color: "#1890ff" }}>
              Profile Setup 2
            </Text>
          </div>
        </div>
      </Card>

      <Row
        gutter={[
          { xs: 16, sm: 20, md: 24, lg: 24 },
          { xs: 16, sm: 20, md: 24, lg: 24 },
        ]}
        style={{ marginTop: "clamp(16px, 2vw, 24px)" }}
      >
        {/* Left Column */}
        <Col xs={24} lg={14}>
          <Card style={cardStyle}>
            <Title level={3} style={{ marginBottom: "24px" }}>
              Company Profile Setup
            </Title>

            <Tabs defaultActiveKey="legal" style={{ marginBottom: "24px" }}>
              <TabPane tab="General Info" key="general" />
              <TabPane tab="Legal & Contacts" key="legal" />
            </Tabs>

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
          </Card>
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

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "clamp(8px, 1vw, 12px)",
          marginTop: "clamp(16px, 2vw, 24px)",
          flexWrap: "wrap",
          "@media (max-width: 768px)": {
            flexDirection: "column-reverse",
            gap: "8px",
          },
        }}
      >
        <Button
          size="large"
          style={{ minWidth: "clamp(80px, 10vw, 100px)", fontSize: "clamp(14px, 1.2vw, 16px)" }}
          onClick={handleCancel}
        >
          Cancel
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