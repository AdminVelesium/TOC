"use client"

import { useState } from "react"
import { Form, Input, Button, Checkbox, Typography, Space } from "antd"
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
        navigate("/employer-dashboard")
    }


    const containerStyle = {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #8B8B8B 0%, #6B6B6B 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px, 2vw, 24px)",
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
    }

    const decorativeCircle1Style = {
        position: "absolute",
        top: "clamp(60px, 8vw, 100px)",
        right: "clamp(-50px, -5vw, -30px)",
        width: "clamp(200px, 25vw, 350px)",
        height: "clamp(200px, 25vw, 350px)",
        background: "#2DD4BF",
        borderRadius: "50%",
        zIndex: 1,
    }

    const decorativeCircle2Style = {
        position: "absolute",
        bottom: "clamp(-50px, -5vw, -30px)",
        right: "clamp(60px, 8vw, 120px)",
        width: "clamp(180px, 22vw, 300px)",
        height: "clamp(180px, 22vw, 300px)",
        background: "#2DD4BF",
        borderRadius: "50%",
        zIndex: 1,
    }

    const headerStyle = {
        position: "absolute",
        top: "clamp(20px, 3vw, 32px)",
        left: "clamp(20px, 3vw, 32px)",
        right: "clamp(20px, 3vw, 32px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
    }

    const logoStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(8px, 1vw, 12px)",
        color: "#fff",
        fontSize: "clamp(18px, 2vw, 22px)",
        fontWeight: "600",
    }

    const logoIconStyle = {
        width: "clamp(28px, 3vw, 32px)",
        height: "clamp(28px, 3vw, 32px)",
        background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "clamp(16px, 1.8vw, 20px)",
        fontWeight: "bold",
    }

    const headerRightStyle = {
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 16px)",
        color: "#fff",
        fontSize: "clamp(14px, 1.2vw, 16px)",
    }

    const formCardStyle = {
        background: "#fff",
        borderRadius: "clamp(12px, 1.5vw, 16px)",
        padding: "clamp(32px, 4vw, 48px)",
        width: "100%",
        maxWidth: "clamp(400px, 45vw, 480px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        zIndex: 5,
        position: "relative",
    }

    const titleStyle = {
        fontSize: "clamp(24px, 3vw, 32px)",
        fontWeight: "700",
        color: "#1a1a1a",
        textAlign: "center",
        marginBottom: "clamp(24px, 3vw, 32px)",
    }

    const inputStyle = {
        height: "clamp(44px, 5vw, 48px)",
        borderRadius: "clamp(6px, 0.8vw, 8px)",
        fontSize: "clamp(14px, 1.2vw, 16px)",
        border: "1px solid #e6e6e6",
        background: "#f8f9fa",
    }

    const buttonStyle = {
        height: "clamp(44px, 5vw, 48px)",
        borderRadius: "clamp(6px, 0.8vw, 8px)",
        fontSize: "clamp(14px, 1.2vw, 16px)",
        fontWeight: "600",
        background: "#667eea",
        borderColor: "#667eea",
        width: "100%",
    }

    const socialButtonStyle = {
        width: "clamp(48px, 5vw, 52px)",
        height: "clamp(48px, 5vw, 52px)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #e6e6e6",
        background: "#fff",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "clamp(18px, 2vw, 20px)",
    }

    const checkboxRowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "clamp(20px, 2.5vw, 24px)",
        flexWrap: "wrap",
        gap: "clamp(8px, 1vw, 12px)",
    }

    const onFinish = async (values) => {
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            console.log("Sign in values:", values)
            setLoading(false)
        }, 2000)
    }

    return (
        <div style={containerStyle}>
            {/* Decorative Circles */}
            <div style={decorativeCircle1Style} />
            <div style={decorativeCircle2Style} />

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

            {/* Form Card */}
            <div style={formCardStyle}>
                <Title level={2} style={titleStyle}>
                    Employer Sign in
                </Title>

                <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                    <Form.Item
                        label={
                            <span style={{ fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: "500", color: "#333" }}>Email</span>
                        }
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email!" },
                            { type: "email", message: "Please enter a valid email!" },
                        ]}
                        style={{ marginBottom: "clamp(16px, 2vw, 20px)" }}
                    >
                        <Input placeholder="example.email@gmail.com" style={inputStyle} />
                    </Form.Item>

                    <Form.Item
                        label={
                            <span style={{ fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: "500", color: "#333" }}>Password</span>
                        }
                        name="password"
                        rules={[{ required: true, message: "Please enter your password!" }]}
                        style={{ marginBottom: "clamp(20px, 2.5vw, 24px)" }}
                    >
                        <Input.Password
                            placeholder="Enter at least 8+ characters"
                            style={inputStyle}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>

                    <div style={checkboxRowStyle}>
                        <Form.Item name="remember" valuePropName="checked" style={{ margin: 0 }}>
                            <Checkbox style={{ fontSize: "clamp(13px, 1.1vw, 14px)", color: "#666" }}>Remember me</Checkbox>
                        </Form.Item>
                        <Link style={{ fontSize: "clamp(13px, 1.1vw, 14px)", color: "#667eea" }}>Forgot password?</Link>
                    </div>

                    <Form.Item style={{ marginBottom: "clamp(24px, 3vw, 32px)" }}>
                        <Button type="primary" htmlType="submit" loading={loading} style={buttonStyle} onClick={handleSignin}>
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: "center" }}>
                    <Text style={{ fontSize: "clamp(13px, 1.1vw, 14px)", color: "#666", marginBottom: "clamp(16px, 2vw, 20px)", display: "block" }}>
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

            {/* Footer */}
            <div
                style={{
                    position: "absolute",
                    bottom: "clamp(16px, 2vw, 24px)",
                    left: "clamp(16px, 2vw, 24px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(6px, 0.8vw, 8px)",
                    color: "#999",
                    fontSize: "clamp(12px, 1vw, 13px)",
                    zIndex: 10,
                }}
            >
                <span>Made with</span>
                <div
                    style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "#fff",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontSize: "clamp(10px, 0.9vw, 12px)",
                        fontWeight: "600",
                    }}
                >
                    Visily
                </div>
            </div>
        </div>
    )
}

export default EmployerSignIn