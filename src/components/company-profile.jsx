"use client"

import { useState } from "react"
import { Layout, Button, Typography, Row, Col, Card, Avatar, Tag, Space, Divider } from "antd"
import {
  SettingOutlined,
  EditOutlined,
  FileTextOutlined,
  MessageOutlined,
  TeamOutlined,
  BarChartOutlined,
  EyeOutlined,
  DownloadOutlined,
  CheckCircleOutlined,
  BulbOutlined,
  TrophyOutlined,
  HeartOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const { Header, Sider, Content } = Layout
const { Title, Text, Paragraph } = Typography

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState("company-profile")
  const navigate = useNavigate()

  const handleDashboard = () => {
    navigate('/employer-dashboard')
  }

  const handlejobpost = () => {
    navigate('/jobposting')
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
    position: "sticky",
    top: 0,
    zIndex: 100,
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
    background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "clamp(12px, 1.2vw, 14px)",
    fontWeight: "bold",
  }

  const navTabsStyle = {
    display: "flex",
    gap: "clamp(24px, 3vw, 32px)",
    alignItems: "center",
  }

  const tabStyle = {
    fontSize: "clamp(14px, 1.2vw, 15px)",
    color: "#666",
    cursor: "pointer",
    padding: "clamp(8px, 1vw, 10px) 0",
    borderBottom: "2px solid transparent",
    transition: "all 0.3s ease",
  }

  const activeTabStyle = {
    ...tabStyle,
    color: "#1890ff",
    borderBottomColor: "#1890ff",
    fontWeight: "500",
  }

  const siderStyle = {
    background: "#fff",
    borderRight: "1px solid #f0f0f0",
    width: "clamp(200px, 15vw, 240px)",
    minHeight: "calc(100vh - clamp(56px, 7vw, 64px))",
    position: "fixed",
    left: 0,
    top: "clamp(56px, 7vw, 64px)",
    zIndex: 50,
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
    background: "#1890ff",
    color: "#fff",
    fontWeight: "500",
  }

  const contentStyle = {
    marginLeft: "clamp(200px, 15vw, 240px)",
    padding: "clamp(20px, 2.5vw, 24px)",
    minHeight: "calc(100vh - clamp(56px, 7vw, 64px))",
    background: "#f8fafc",
  }

  const titleSectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "clamp(24px, 3vw, 32px)",
    flexWrap: "wrap",
    gap: "clamp(12px, 1.5vw, 16px)",
  }

  const cardStyle = {
    borderRadius: "clamp(8px, 1vw, 12px)",
    border: "1px solid #f0f0f0",
    marginBottom: "clamp(20px, 2.5vw, 24px)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
  }

  const sectionTitleStyle = {
    fontSize: "clamp(18px, 2vw, 20px)",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "clamp(16px, 2vw, 20px)",
  }

  const officeIllustrationStyle = {
    background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    borderRadius: "clamp(8px, 1vw, 12px)",
    padding: "clamp(24px, 3vw, 32px)",
    marginBottom: "clamp(20px, 2.5vw, 24px)",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    minHeight: "clamp(200px, 25vw, 280px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const serviceCardStyle = {
    textAlign: "center",
    padding: "clamp(20px, 2.5vw, 24px)",
    borderRadius: "clamp(8px, 1vw, 12px)",
    border: "1px solid #f0f0f0",
    background: "#fff",
    height: "100%",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }

  const serviceIconStyle = {
    width: "clamp(48px, 5vw, 56px)",
    height: "clamp(48px, 5vw, 56px)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto clamp(12px, 1.5vw, 16px) auto",
    fontSize: "clamp(20px, 2.5vw, 24px)",
    color: "#fff",
  }

  const valueTagStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "clamp(6px, 0.8vw, 8px)",
    padding: "clamp(6px, 0.8vw, 8px) clamp(12px, 1.5vw, 16px)",
    background: "#fff",
    borderRadius: "20px",
    border: "1px solid #e6f0ff",
    margin: "clamp(4px, 0.5vw, 6px)",
    fontSize: "clamp(12px, 1vw, 14px)",
    fontWeight: "500",
    color: "#1890ff",
  }

  const partnerLogoStyle = {
    width: "clamp(48px, 5vw, 56px)",
    height: "clamp(48px, 5vw, 56px)",
    borderRadius: "clamp(8px, 1vw, 12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "clamp(6px, 0.8vw, 8px)",
    fontSize: "clamp(20px, 2.5vw, 24px)",
    color: "#fff",
    fontWeight: "bold",
  }

  const services = [
    {
      icon: <FileTextOutlined />,
      title: "Smart Applicant Tracking",
      description:
        "Streamline your hiring process with our AI-powered Applicant Tracking System, designed for efficiency.",
      bgColor: "#1890ff",
    },
    {
      icon: <MessageOutlined />,
      title: "Customizable Job Listings",
      description:
        "Create compelling job descriptions and visually appealing listings that attract top talent, tailored to your needs.",
      bgColor: "#52c41a",
    },
    {
      icon: <TeamOutlined />,
      title: "Integrated Communication Tools",
      description:
        "Communicate seamlessly with candidates through built-in messaging, scheduling, and feedback systems.",
      bgColor: "#722ed1",
    },
    {
      icon: <BarChartOutlined />,
      title: "Performance Analytics",
      description:
        "Gain actionable insights into your recruitment pipeline with comprehensive analytics and reporting.",
      bgColor: "#fa8c16",
    },
  ]

  const partners = [
    { name: "A", bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { name: "M", bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { name: "A", bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { name: "O", bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { name: "M", bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { name: "J", bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
    { name: "E", bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
    { name: "C", bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
  ]

  const documents = [
    { name: "Company Registration Certificate", status: "Verified", color: "success" },
    { name: "Memorandum of Association", status: "Uploaded", color: "processing" },
    { name: "Articles of Association", status: "Uploaded", color: "processing" },
  ]

  return (
    <Layout style={containerStyle}>
      {/* Header */}
      <Header style={headerStyle}>
        {/* Logo Section from Homepage.jsx */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            minWidth: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                fontSize: "1.65rem",
                fontWeight: "600",
                color: "#1f2937",
                lineHeight: "1.1",
                whiteSpace: "nowrap",
                marginLeft: "-8vw",
                marginTop: "-4vh",
                cursor: "pointer",
              }}
            >
              Talent on <span style={{ color: "#6CCED5" }}>Cloud</span>
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                fontWeight: "400",
                marginBottom: "2px",
                whiteSpace: "nowrap",
              }}
            >
              powered by
            </span>
          </div>
          <img
            src="https://i.ibb.co/SDgt4CsH/dyn.jpg"
            alt="Talent on Cloud"
            style={{
              width: "130px",
              height: "35px",
              objectFit: "cover",
              marginLeft: "-10px",
              marginTop: "2vw",
            }}
          />
        </div>

        {/* <div style={navTabsStyle}>
          <div style={tabStyle}>Profile Setup 1</div>
          <div style={tabStyle}>Profile Setup 2</div>
          <div style={activeTabStyle}>Company Profile</div>
        </div> */}

        <Button
          onClick={handlejobpost}
          type="primary"
          style={{
            background: "#1890ff",
            borderColor: "#1890ff",
            borderRadius: "6px",
            fontSize: "clamp(13px, 1.1vw, 14px)",
            height: "clamp(32px, 3.5vw, 36px)",
          }}
        >
          Post a Job
        </Button>
      </Header>

      <Layout>
        {/* Sidebar */}
        <Sider style={siderStyle} width="clamp(200px, 15vw, 240px)">
          <div style={siderMenuStyle}>
            <div style={menuItemStyle}>
              <UserOutlined />
              <span>Profile Setup 1</span>
            </div>
            <div style={menuItemStyle}>
              <UserOutlined />
              <span>Profile Setup 2</span>
            </div>
            <div style={activeMenuItemStyle}>
              <CheckCircleOutlined />
              <span>Company Profile</span>
            </div>
          </div>

          <Divider style={{ margin: "0" }} />

          <div style={{ padding: "clamp(16px, 2vw, 20px)" }}>
            <div style={menuItemStyle}>
              <SettingOutlined />
              <span>Settings</span>
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
              }}
            >
              Company Profile
            </Title>
            <Button
              type="primary"
              icon={<EditOutlined />}
              style={{
                background: "#1890ff",
                borderColor: "#1890ff",
                borderRadius: "6px",
                fontSize: "clamp(13px, 1.1vw, 14px)",
                height: "clamp(32px, 3.5vw, 36px)",
              }}
            >
              Edit Profile
            </Button>
          </div>

          <Row gutter={[24, 24]}>
            {/* Left Column */}
            <Col xs={24} lg={16}>
              {/* About Section */}
              <Card style={cardStyle}>
                <Title level={3} style={sectionTitleStyle}>
                  About React Job Portal
                </Title>

                <div style={officeIllustrationStyle}>
                  {/* Office Illustration */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "clamp(16px, 2vw, 24px)",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Team Members */}
                    {[
                      { bg: "#ff6b6b", emoji: "👩‍💼" },
                      { bg: "#4ecdc4", emoji: "👨‍💻" },
                      { bg: "#45b7d1", emoji: "👩‍💻" },
                      { bg: "#f9ca24", emoji: "👨‍💼" },
                      { bg: "#6c5ce7", emoji: "👩‍🎨" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        style={{
                          width: "clamp(48px, 5vw, 60px)",
                          height: "clamp(48px, 5vw, 60px)",
                          borderRadius: "50%",
                          background: person.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "clamp(20px, 2.5vw, 24px)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        }}
                      >
                        {person.emoji}
                      </div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div
                    style={{
                      position: "absolute",
                      left: "clamp(16px, 2vw, 24px)",
                      bottom: "clamp(16px, 2vw, 24px)",
                      fontSize: "clamp(24px, 3vw, 32px)",
                    }}
                  >
                    🌿
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: "clamp(16px, 2vw, 24px)",
                      bottom: "clamp(16px, 2vw, 24px)",
                      fontSize: "clamp(24px, 3vw, 32px)",
                    }}
                  >
                    🌱
                  </div>
                </div>

                <Paragraph
                  style={{
                    fontSize: "clamp(14px, 1.2vw, 16px)",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: 0,
                  }}
                >
                  React Job Portal is dedicated to revolutionizing the hiring landscape. We empower companies to
                  efficiently manage their recruitment processes, from brand building to applicant tracking. Our
                  intuitive platform ensures a seamless experience for both employers and job seekers, fostering
                  successful connections worldwide. We believe in innovation, user-centric design, and building strong,
                  lasting connections within the professional community.
                </Paragraph>
              </Card>

              {/* Legal Compliance Section */}
              <Card style={cardStyle}>
                <Title level={3} style={sectionTitleStyle}>
                  Legal Compliance & Business Details
                </Title>

                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <div style={{ marginBottom: "clamp(16px, 2vw, 20px)" }}>
                      <Text strong style={{ display: "block", marginBottom: "4px" }}>
                        Permanent Account Number (PAN)
                      </Text>
                      <Text style={{ color: "#666" }}>XXXXXXXXX</Text>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div style={{ marginBottom: "clamp(16px, 2vw, 20px)" }}>
                      <Text strong style={{ display: "block", marginBottom: "4px" }}>
                        Company Website
                      </Text>
                      <Text style={{ color: "#1890ff" }}>https://www.reactjobportal.com</Text>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div style={{ marginBottom: "clamp(16px, 2vw, 20px)" }}>
                      <Text strong style={{ display: "block", marginBottom: "4px" }}>
                        Goods and Services Tax Identification Number (GSTIN)
                      </Text>
                      <Text style={{ color: "#666" }}>22AAAAAAAAAAA1Z5</Text>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div>
                      <Text strong style={{ display: "block", marginBottom: "4px" }}>
                        Registered Company Address
                      </Text>
                      <Text style={{ color: "#666" }}>123 Main Street, Suite 400, New York, NY 10001, USA</Text>
                    </div>
                  </Col>
                </Row>
              </Card>

              {/* HR & Communication Contacts */}
              <Card style={cardStyle}>
                <Title level={3} style={sectionTitleStyle}>
                  HR & Communication Contacts
                </Title>
                <Text style={{ color: "#666", marginBottom: "clamp(20px, 2.5vw, 24px)", display: "block" }}>
                  Manage key personnel for official communications and job applications.
                </Text>

                <div
                  style={{
                    background: "#f6ffed",
                    padding: "clamp(16px, 2vw, 20px)",
                    borderRadius: "clamp(8px, 1vw, 12px)",
                    border: "1px solid #b7eb8f",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <UserOutlined style={{ color: "#52c41a" }} />
                    <Text strong>Primary HR Contact</Text>
                  </div>

                  <Row gutter={[16, 8]}>
                    <Col xs={24} md={12}>
                      <Text strong style={{ display: "block" }}>
                        Full Name
                      </Text>
                      <Text>Sarah Chen</Text>
                    </Col>
                    <Col xs={24} md={12}>
                      <Text strong style={{ display: "block" }}>
                        Email Address
                      </Text>
                      <Text>sarah.chen@example.com</Text>
                    </Col>
                    <Col xs={24} md={12}>
                      <Text strong style={{ display: "block" }}>
                        Phone Number
                      </Text>
                      <Text>+1 (555) 123-4567</Text>
                    </Col>
                    <Col xs={24} md={12}>
                      <Text strong style={{ display: "block" }}>
                        Role/Designation
                      </Text>
                      <Text>Head of HR</Text>
                    </Col>
                  </Row>
                </div>
              </Card>

              {/* Our Services */}
              <Card style={cardStyle}>
                <Title level={3} style={sectionTitleStyle}>
                  Our Services
                </Title>

                <Row gutter={[16, 16]}>
                  {services.map((service, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <div
                        style={serviceCardStyle}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"
                          e.currentTarget.style.transform = "translateY(-2px)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "none"
                          e.currentTarget.style.transform = "translateY(0)"
                        }}
                      >
                        <div style={{ ...serviceIconStyle, background: service.bgColor }}>{service.icon}</div>
                        <Title
                          level={4}
                          style={{
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            fontWeight: "600",
                            marginBottom: "clamp(8px, 1vw, 12px)",
                          }}
                        >
                          {service.title}
                        </Title>
                        <Text
                          style={{
                            fontSize: "clamp(12px, 1vw, 14px)",
                            color: "#666",
                            lineHeight: "1.5",
                            display: "block",
                            marginBottom: "clamp(12px, 1.5vw, 16px)",
                          }}
                        >
                          {service.description}
                        </Text>
                        <Button
                          type="link"
                          style={{
                            padding: 0,
                            fontSize: "clamp(12px, 1vw, 14px)",
                            color: service.bgColor,
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card>

              {/* Our Culture & Values */}
              <Card style={cardStyle}>
                <Title level={3} style={sectionTitleStyle}>
                  Our Culture & Values
                </Title>

                <div style={officeIllustrationStyle}>
                  {/* Culture Illustration */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "clamp(12px, 1.5vw, 16px)",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      { bg: "#ff6b6b", emoji: "👩‍💼" },
                      { bg: "#4ecdc4", emoji: "👨‍💻" },
                      { bg: "#45b7d1", emoji: "👩‍💻" },
                      { bg: "#f9ca24", emoji: "👨‍💼" },
                      { bg: "#6c5ce7", emoji: "👩‍🎨" },
                      { bg: "#e17055", emoji: "👨‍🔬" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        style={{
                          width: "clamp(40px, 4vw, 48px)",
                          height: "clamp(40px, 4vw, 48px)",
                          borderRadius: "50%",
                          background: person.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "clamp(16px, 2vw, 20px)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        }}
                      >
                        {person.emoji}
                      </div>
                    ))}
                  </div>
                </div>

                <Paragraph
                  style={{
                    fontSize: "clamp(14px, 1.2vw, 16px)",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "clamp(16px, 2vw, 20px)",
                  }}
                >
                  At React Job Portal, we foster an environment of collaboration, innovation, and continuous learning.
                  We believe in empowering our team members to achieve their full potential while creating impactful
                  solutions for our users. Our core values include transparency, integrity, and a passion for
                  excellence, driving us to build a better future for recruitment.
                </Paragraph>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(6px, 0.8vw, 8px)" }}>
                  <div style={valueTagStyle}>
                    <BulbOutlined />
                    <span>Innovation</span>
                  </div>
                  <div style={valueTagStyle}>
                    <TrophyOutlined />
                    <span>Excellence</span>
                  </div>
                  <div style={valueTagStyle}>
                    <TeamOutlined />
                    <span>Collaboration</span>
                  </div>
                  <div style={valueTagStyle}>
                    <HeartOutlined />
                    <span>User-Centricity</span>
                  </div>
                  <div style={valueTagStyle}>
                    <GlobalOutlined />
                    <span>Global Impact</span>
                  </div>
                </div>
              </Card>

              {/* Our Esteemed Partners */}
              <Card style={cardStyle}>
                <Title level={3} style={sectionTitleStyle}>
                  Our Esteemed Partners
                </Title>

                <div
                  style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(8px, 1vw, 12px)" }}
                >
                  {partners.map((partner, index) => (
                    <div key={index} style={{ ...partnerLogoStyle, background: partner.bg }}>
                      {partner.name}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>

            {/* Right Column */}
            <Col xs={24} lg={8}>
              {/* Company Logo */}
              <Card style={cardStyle}>
                <Title level={4} style={sectionTitleStyle}>
                  Company Logo
                </Title>
                <div style={{ textAlign: "center" }}>
                  <Avatar
                    size={120}
                    style={{
                      background: "#f0f0f0",
                      color: "#999",
                      fontSize: "clamp(14px, 1.2vw, 16px)",
                      marginBottom: "clamp(12px, 1.5vw, 16px)",
                    }}
                  >
                  </Avatar>
                </div>
              </Card>

              {/* Legal Documents */}
              <Card style={cardStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <FileTextOutlined style={{ color: "#1890ff" }} />
                  <Title level={4} style={{ margin: 0, fontSize: "clamp(16px, 1.4vw, 18px)" }}>
                    Legal Documents
                  </Title>
                </div>
                <Text style={{ color: "#666", marginBottom: "16px", display: "block" }}>
                  Quick access to essential company documents.
                </Text>

                {/* Document Thumbnails */}
                <div
                  style={{
                    display: "flex",
                    gap: "clamp(8px, 1vw, 12px)",
                    marginBottom: "clamp(16px, 2vw, 20px)",
                    justifyContent: "center",
                  }}
                >
                  {[
                    { bg: "#f6ffed", border: "#b7eb8f" },
                    { bg: "#f0f9ff", border: "#91d5ff" },
                    { bg: "#fff2e8", border: "#ffd591" },
                  ].map((doc, index) => (
                    <div
                      key={index}
                      style={{
                        width: "clamp(48px, 5vw, 56px)",
                        height: "clamp(48px, 5vw, 56px)",
                        background: doc.bg,
                        borderRadius: "clamp(6px, 1vw, 8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${doc.border}`,
                      }}
                    >
                      <FileTextOutlined style={{ color: "#1890ff", fontSize: "clamp(20px, 2.5vw, 24px)" }} />
                    </div>
                  ))}
                </div>

                {documents.map((doc, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "clamp(8px, 1vw, 12px) 0",
                      borderBottom: index < documents.length - 1 ? "1px solid #f0f0f0" : "none",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <Text
                        strong
                        style={{
                          display: "block",
                          fontSize: "clamp(13px, 1.1vw, 14px)",
                          marginBottom: "4px",
                        }}
                      >
                        {doc.name}
                      </Text>
                      <Tag color={doc.color} size="small">
                        {doc.status}
                      </Tag>
                    </div>
                    <Space>
                      <Button type="text" size="small" icon={<EyeOutlined />} />
                      <Button type="text" size="small" icon={<DownloadOutlined />} />
                    </Space>
                  </div>
                ))}
              </Card>

              {/* Continue to Dashboard Button */}
              <div style={{ textAlign: "center", marginTop: "clamp(24px, 3vw, 32px)" }}>
                <Button
                  onClick={handleDashboard}
                  type="primary"
                  size="large"
                  style={{
                    background: "#1890ff",
                    borderColor: "#1890ff",
                    borderRadius: "6px",
                    fontSize: "clamp(14px, 1.2vw, 16px)",
                    height: "clamp(40px, 4.5vw, 48px)",
                    minWidth: "clamp(160px, 18vw, 200px)",
                  }}
                >
                  Continue to dashboard
                </Button>
              </div>
            </Col>
          </Row>

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
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default CompanyProfile