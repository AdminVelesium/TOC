import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        remember: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log(isLogin ? 'Logging in...' : 'Registering...', formData);

        setTimeout(() => {
            if (isLogin) {
                alert('Login successful (demo)');
                navigate('/candidate/profile');
            } else {
                alert('Registration successful (demo)');
                navigate('/profile-setup');
            }
        }, 1000);
    };

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            width: '100%',
            fontFamily: 'Montserrat, sans-serif',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {/* Left Section */}
            <div style={{
                flex: 1,
                backgroundColor: '#007BFF', // Or any shade of blue you like
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                minHeight: '40vh'
            }}>
                <div style={{ textAlign: 'center', maxWidth: '500px' }}>
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 3rem)',
                        marginBottom: '1rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        {isLogin ? 'Welcome Back' : 'Join the Job Portal'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                        {isLogin
                            ? 'Explore top opportunities by logging in'
                            : 'Create an account to apply and grow your career'}
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div style={{
                flex: 1,
                backgroundColor: 'white',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                margin: 'auto'
            }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: 'none',
                        border: 'none',
                        color: '#666',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}
                >
                    ← Back to Home
                </button>

                <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        marginBottom: '0.5rem',
                        color: '#333'
                    }}>
                        {isLogin ? 'Login' : 'Sign Up'}
                    </h2>

                    <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
                        {isLogin
                            ? 'Sign in to explore and apply for jobs'
                            : 'Register to start applying for the best opportunities'}
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example.email@gmail.com"
                                style={inputStyle}
                                required
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={labelStyle}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter at least 8+ characters"
                                style={inputStyle}
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={labelStyle}>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    style={inputStyle}
                                    required
                                />
                            </div>
                        )}

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.9rem',
                            marginBottom: '1rem'
                        }}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                /> Remember me
                            </label>
                            <a href="#" style={{ color: '#6b73ff', fontSize: 13 }}>Forgot password?</a>
                        </div>

                        <button type="submit" style={submitButton}>
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    <button
                        onClick={() => setIsLogin(prev => !prev)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#FF6B6B',
                            marginTop: '1.5rem',
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            textDecoration: 'underline'
                        }}
                    >
                        {isLogin
                            ? "New to the platform? Register here"
                            : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid #e1e1e1',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    background: 'white'
};

const submitButton = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#FF6B6B',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
};

const labelStyle = {
    display: 'block',
    marginBottom: '0.3rem',
    fontWeight: 500,
    fontSize: '0.95rem',
    color: '#444'
};

export default Auth;
