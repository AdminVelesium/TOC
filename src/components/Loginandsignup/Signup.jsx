import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();

    const handleprofile = () => {
        navigate('/profile-setup');
    }
    return (
        <div style={{
            fontFamily: 'sans-serif',
            height: '100vh',
            backgroundColor: '#ef7fa4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div style={{
                width: 400,
                padding: 40,
                backgroundColor: 'white',
                borderRadius: 10,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 2
            }}>
                <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
                <div style={{ marginBottom: 15 }}>
                    <label>Email</label>
                    <input type="email" placeholder="example.email@gmail.com"
                        style={inputStyle} />
                </div>
                <div style={{ marginBottom: 15 }}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter at least 8+ characters"
                        style={inputStyle} />
                </div>
                <div style={{ marginBottom: 15 }}>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password"
                        style={inputStyle} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label>
                        <input type="checkbox" defaultChecked />
                        Remember me
                    </label>
                    <a href="#" style={{ color: '#6b73ff', fontSize: 13 }}>Forgot password?</a>
                </div>
                <button style={buttonStyle} onClick={handleprofile}>Sign Up</button>
                <div style={{ textAlign: 'center', margin: '20px 0' }}>Have an account?<a href='/signin' style={{ textDecoration: 'none' }}>Signin</a></div>
            </div>
        </div >
    );
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: 5,
    marginTop: 5
};

const buttonStyle = {
    width: '100%',
    padding: 10,
    backgroundColor: '#6b73ff',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    marginTop: 20
};

const socialContainer = {
    display: 'flex',
    justifyContent: 'space-around'
};

const socialButton = {
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: 10,
    backgroundColor: 'white'
};

export default SignUp;
