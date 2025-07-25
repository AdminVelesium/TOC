import React from 'react';

export default function MentorshipProgram() {
    return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#6366f1', marginBottom: '1rem' }}>Mentorship Program</h1>
            <p style={{ fontSize: '1.2rem', color: '#374151', marginBottom: '2rem', maxWidth: 500, textAlign: 'center' }}>
                Our Mentorship Program will connect you with industry experts to accelerate your career growth. Stay tuned for updates and early access!
            </p>
            <button disabled style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 8, padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 700, opacity: 0.6, cursor: 'not-allowed' }}>
                Sign Up (Coming Soon)
            </button>
        </div>
    );
} 