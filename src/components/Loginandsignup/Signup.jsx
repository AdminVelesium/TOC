import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        remember: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('https://toc-bac-1.onrender.com/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        email: formData.email,
                        password: formData.password
                    }
                ),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Signup failed');

            // Store user id in localStorage
            localStorage.setItem('userId', data.user.id);
            alert(data.message);
            navigate('/profile-setup');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <AuthLayout
            title="Sign Up"
            subtitle="Register to start applying for the best opportunities"
            isLogin={false}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleText="Already have an account? Login"
            toggleLink="/login"
        />
    );
};

export default Signup;