import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/candidate/profile');
    };

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
                <h2 style={{ textAlign: 'center' }}>Sign in</h2>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label>
                        <input type="checkbox" defaultChecked />
                        Remember me
                    </label>
                    <a href="#" style={{ color: '#6b73ff', fontSize: 13 }}>Forgot password?</a>
                </div>
                <button style={buttonStyle} onClick={handleSignInClick}>
                    Sign in
                </button>
                <div style={{ textAlign: 'center', margin: '20px 0' }}>Or sign in with</div>
                <div style={socialContainer}>
                    <button style={socialButton}>G</button>
                    <button style={socialButton}>f</button>
                    <button style={socialButton}></button>
                </div>
            </div>
        </div>
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

export default SignIn;
