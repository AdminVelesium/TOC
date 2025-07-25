"use client"

import { useState } from "react"
import { Form, Input, Button, Checkbox, Typography, Space, Divider } from "antd"
import { EyeInvisibleOutlined, EyeTwoTone, GoogleOutlined, FacebookOutlined, AppleOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const { Title, Text, Link } = Typography

const EmployerSignUp = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handlesignin = () => {
        navigate("/employer-signin")
    }

    const handleSignup = () => {
        navigate("/employer-profile-setup-1")
    }

    const containerStyle = {
        minHeight: "100vh",
        background: "#f8fafc",
        display: "flex",
        padding: 0,
        margin: 0,
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
    }

    const leftPanelStyle = {
        flex: 1,
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        color: "white",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
    }

    const rightPanelStyle = {
        width: "50%",
        minWidth: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
    }

    const decorativeCircle1Style = {
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "400px",
        height: "400px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
    }

    const decorativeCircle2Style = {
        position: "absolute",
        bottom: "-150px",
        left: "-150px",
        width: "500px",
        height: "500px",
        background: "rgba(255, 255, 255, 0.05)",
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

    const formCardStyle = {
        background: "#fff",
        borderRadius: "16px",
        padding: "48px",
        width: "100%",
        maxWidth: "520px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        position: "relative",
    }

    const titleStyle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#1a1a1a",
        textAlign: "center",
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
        width: "48px",
        height: "48px",
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
        padding: "16px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        transition: "all 0.3s ease",
    }

    const featureIconStyle = {
        width: "40px",
        height: "40px",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "16px",
        flexShrink: 0,
    }

    const onFinish = async (values) => {
        setLoading(true)
        try {
            const response = await fetch('https://toc-bac-1.onrender.com/api/auth/employer-signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            if (response.ok) {
                if (data && data.employer && data.employer.id) {
                    localStorage.setItem('employerId', data.employer.id);
                }
                navigate('/employer-profile-setup-1');
            } else {
                form.setFields([{
                    name: 'email',
                    errors: [data.message || 'Signup failed']
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
            {/* Left Panel - Information Section */}
            <div style={leftPanelStyle}>
                <div style={decorativeCircle1Style} />
                <div style={decorativeCircle2Style} />

                <div style={{ maxWidth: "600px", margin: "0 auto", zIndex: 2 }}>
                    <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "24px" }}>
                        Find the Best Talent for Your Company
                    </Title>

                    <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "40px", display: "block" }}>
                        Join thousands of employers who have found their perfect candidates through our platform.
                    </Text>

                    <div style={featureItemStyle}>
                        <div style={featureIconStyle}>🔍</div>
                        <div>
                            <Text strong style={{ color: "white", display: "block", marginBottom: "4px" }}>Advanced Candidate Search</Text>
                            <Text style={{ color: "rgba(255,255,255,0.8)" }}>Filter through thousands of profiles to find your ideal candidate</Text>
                        </div>
                    </div>

                    <div style={featureItemStyle}>
                        <div style={featureIconStyle}>📊</div>
                        <div>
                            <Text strong style={{ color: "white", display: "block", marginBottom: "4px" }}>Performance Analytics</Text>
                            <Text style={{ color: "rgba(255,255,255,0.8)" }}>Track applicant metrics and hiring success rates</Text>
                        </div>
                    </div>

                    <div style={featureItemStyle}>
                        <div style={featureIconStyle}>🤝</div>
                        <div>
                            <Text strong style={{ color: "white", display: "block", marginBottom: "4px" }}>Dedicated Support</Text>
                            <Text style={{ color: "rgba(255,255,255,0.8)" }}>Our team is here to help you through every step of the hiring process</Text>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Form Section */}
            <div style={rightPanelStyle}>
                <div style={formCardStyle}>
                    <Title level={2} style={titleStyle}>
                        Create Employer Account
                    </Title>

                    <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                        <Form.Item
                            label={
                                <span style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}>Email</span>
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
                                <span style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}>Password</span>
                            }
                            name="password"
                            rules={[
                                { required: true, message: "Please enter your password!" },
                                { min: 8, message: "Password must be at least 8 characters!" },
                            ]}
                            style={{ marginBottom: "20px" }}
                        >
                            <Input.Password
                                placeholder="Enter at least 8+ characters"
                                style={inputStyle}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <span style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}>
                                    Confirm Password
                                </span>
                            }
                            name="confirmPassword"
                            dependencies={["password"]}
                            rules={[
                                { required: true, message: "Please confirm your password!" },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve()
                                        }
                                        return Promise.reject(new Error("Passwords do not match!"))
                                    },
                                }),
                            ]}
                            style={{ marginBottom: "24px" }}
                        >
                            <Input.Password
                                placeholder="Enter at least 8+ characters"
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
                            <Button type="primary" htmlType="submit" loading={loading} style={buttonStyle} onClick={handleSignup}>
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>

                    <Divider style={{ fontSize: "14px", color: "#999" }}>Or sign up with</Divider>

                    <Space size="large" style={{ justifyContent: "center", width: "100%", marginBottom: "24px" }}>
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

                    <div style={{ textAlign: "center", marginTop: "24px" }}>
                        <Text style={{ color: "#666", marginRight: "8px" }}>Already have an account?</Text>
                        <Link onClick={handlesignin} style={{ color: "#4f46e5", fontWeight: "500" }}>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerSignUp
