import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '', remember: true });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://toc-bac-1.onrender.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, password: formData.password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Login failed');

            // Store user id in localStorage
            localStorage.setItem('userId', data.user.id);
            alert(data.message);
            if (data.hasProfile) {
                navigate('/candidate/profile');
            } else {
                navigate('/signup');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <AuthLayout
            title="Login"
            subtitle="Sign in to explore and apply for jobs"
            isLogin={true}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleText="New to the platform? Register here"
            toggleLink="/signup"
        />
    );
};

export default Login;