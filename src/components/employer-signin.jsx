"use client"

import { useState } from "react"
import { Form, Input, Button, Checkbox, Typography, Space, Card } from "antd"
import { EyeInvisibleOutlined, EyeTwoTone, GoogleOutlined, FacebookOutlined, AppleOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const { Title, Text, Link } = Typography

const EmployerSignIn = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSignup = () => {
        navigate("/employer-signup")
    }
    const handleSignin = () => {
        navigate("/company-profile")
    }

    const containerStyle = {
        minHeight: "100vh",
        background: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        maxWidth: "100%",
    }

    const layoutStyle = {
        display: "flex",
        width: "100%",
        maxWidth: "1200px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
    }

    const leftPanelStyle = {
        flex: 1,
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        padding: "60px 40px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
    }

    const rightPanelStyle = {
        flex: 1,
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }

    const decorativeCircle1Style = {
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "400px",
        height: "400px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%",
    }

    const decorativeCircle2Style = {
        position: "absolute",
        bottom: "-150px",
        left: "-100px",
        width: "500px",
        height: "500px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "50%",
    }

    const headerStyle = {
        position: "absolute",
        top: "32px",
        left: "32px",
        right: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
    }

    const logoStyle = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: "#fff",
        fontSize: "22px",
        fontWeight: "600",
    }

    const logoIconStyle = {
        width: "32px",
        height: "32px",
        background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
    }

    const headerRightStyle = {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        color: "#fff",
        fontSize: "16px",
    }

    const titleStyle = {
        fontSize: "32px",
        fontWeight: "700",
        color: "#1a1a1a",
        marginBottom: "32px",
    }

    const inputStyle = {
        height: "48px",
        borderRadius: "8px",
        fontSize: "16px",
        border: "1px solid #e6e6e6",
        background: "#f8f9fa",
    }

    const buttonStyle = {
        height: "48px",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "600",
        background: "#4f46e5",
        borderColor: "#4f46e5",
        width: "100%",
    }

    const socialButtonStyle = {
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #e6e6e6",
        background: "#fff",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "20px",
    }

    const checkboxRowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "24px",
        flexWrap: "wrap",
        gap: "12px",
    }

    const featureItemStyle = {
        display: "flex",
        alignItems: "center",
        marginBottom: "24px",
        zIndex: 2,
        position: "relative",
    }

    const featureIconStyle = {
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "16px",
        flexShrink: 0,
    }

    const onFinish = async (values) => {
        setLoading(true)
        try {
            const response = await fetch('https://toc-bac-1.onrender.com/api/auth/employer-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            if (response.ok) {
                // Store employer id for later use
                if (data && data.employerId) {
                    localStorage.setItem('employerId', data.employerId);
                }
                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                }
                // Navigate based on profile status
                if (data && data.hasProfile) {
                    navigate('/company-profile');
                } else {
                    navigate('/employer-profile-setup-1');
                }
            } else {
                // Show error message
                form.setFields([{
                    name: 'email',
                    errors: [data.message || 'Login failed']
                }]);
            }
        } catch {
            form.setFields([{
                name: 'email',
                errors: ['Network error, please try again']
            }]);
        }
        setLoading(false)
    }

    return (
        <div style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={logoStyle}>
                    <div style={logoIconStyle}>⚡</div>
                    <span>Talent on Cloud</span>
                </div>
                <div style={headerRightStyle}>
                    <Text style={{ color: "#fff", fontSize: "inherit" }}>Don't have an account?</Text>
                    <Link style={{ color: "#fff", fontSize: "inherit", textDecoration: "underline" }} onClick={handleSignup}>Sign up</Link>
                </div>
            </div>

            <div style={layoutStyle}>
                {/* Left Panel - Information */}
                <div style={leftPanelStyle}>
                    <div style={decorativeCircle1Style} />
                    <div style={decorativeCircle2Style} />

                    <Title level={2} style={{ color: "#fff", fontSize: "36px", marginBottom: "40px", zIndex: 2 }}>
                        Find the Best Talent for Your Company
                    </Title>

                    <div style={featureItemStyle}>
                        <div style={featureIconStyle}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <Text strong style={{ color: "#fff", fontSize: "18px", display: "block" }}>Access Top Candidates</Text>
                            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px" }}>Connect with qualified professionals actively looking for opportunities.</Text>
                        </div>
                    </div>

                    <div style={featureItemStyle}>
                        <div style={featureIconStyle}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 8V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <Text strong style={{ color: "#fff", fontSize: "18px", display: "block" }}>Save Time</Text>
                            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px" }}>Our smart matching system helps you find the right fit faster.</Text>
                        </div>
                    </div>

                    <div style={featureItemStyle}>
                        <div style={featureIconStyle}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <Text strong style={{ color: "#fff", fontSize: "18px", display: "block" }}>Advanced Tools</Text>
                            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px" }}>Powerful analytics and collaboration tools for your hiring team.</Text>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div style={rightPanelStyle}>
                    <Title level={2} style={titleStyle}>
                        Welcome Back
                    </Title>
                    <Text style={{ color: "#666", fontSize: "16px", marginBottom: "32px" }}>
                        Sign in to manage your hiring process and access your dashboard.
                    </Text>

                    <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                        <Form.Item
                            label={
                                <span style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}>Email</span>
                            }
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email!" },
                                { type: "email", message: "Please enter a valid email!" },
                            ]}
                            style={{ marginBottom: "20px" }}
                        >
                            <Input placeholder="example.email@gmail.com" style={inputStyle} />
                        </Form.Item>

                        <Form.Item
                            label={
                                <span style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}>Password</span>
                            }
                            name="password"
                            rules={[{ required: true, message: "Please enter your password!" }]}
                            style={{ marginBottom: "24px" }}
                        >
                            <Input.Password
                                placeholder="Enter your password"
                                style={inputStyle}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <div style={checkboxRowStyle}>
                            <Form.Item name="remember" valuePropName="checked" style={{ margin: 0 }}>
                                <Checkbox style={{ fontSize: "14px", color: "#666" }}>Remember me</Checkbox>
                            </Form.Item>
                            <Link style={{ fontSize: "14px", color: "#4f46e5" }}>Forgot password?</Link>
                        </div>

                        <Form.Item style={{ marginBottom: "32px" }}>
                            <Button type="primary" htmlType="submit" loading={loading} style={buttonStyle}>
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>

                    <div style={{ textAlign: "center" }}>
                        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px", display: "block" }}>
                            Or sign in with
                        </Text>

                        <Space size="large" style={{ justifyContent: "center", width: "100%" }}>
                            <div
                                style={{ ...socialButtonStyle, color: "#db4437" }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 4px 12px rgba(219,68,55,0.3)"
                                    e.target.style.transform = "translateY(-2px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "none"
                                    e.target.style.transform = "translateY(0)"
                                }}
                            >
                                <GoogleOutlined />
                            </div>
                            <div
                                style={{ ...socialButtonStyle, color: "#4267B2" }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 4px 12px rgba(66,103,178,0.3)"
                                    e.target.style.transform = "translateY(-2px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "none"
                                    e.target.style.transform = "translateY(0)"
                                }}
                            >
                                <FacebookOutlined />
                            </div>
                            <div
                                style={{ ...socialButtonStyle, color: "#000" }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)"
                                    e.target.style.transform = "translateY(-2px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = "none"
                                    e.target.style.transform = "translateY(0)"
                                }}
                            >
                                <AppleOutlined />
                            </div>
                        </Space>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerSignIn
