import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateProfile = () => {

    const navigate = useNavigate();

    const handlejobs = () => {
        navigate('/jobs');
    }
    const tagStyle = {
        fontSize: '0.75rem',
        backgroundColor: '#f3f4f6',
        padding: '0.25rem 0.5rem',
        margin: '0.25rem',
        borderRadius: '4px'
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '1rem'
    };

    const sectionTitle = {
        marginBottom: '0.75rem',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#111827'
    };

    const infoText = {
        fontSize: '0.875rem',
        color: '#4b5563'
    };
    const handlehome = () => {
        navigate('/');
    }

    return (
        <div style={{ fontFamily: '"Segoe UI", sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            {/* Header */}
            <header style={{ backgroundColor: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginLeft: "18vw" }}>
                    {/* Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                minWidth: 0,
                            }}
                        >
                            <div></div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <span
                                    style={{
                                        fontSize: "1.75rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        lineHeight: "1.1",
                                        whiteSpace: "nowrap",
                                        marginLeft: "-8vw",
                                        marginTop: "-4vh",
                                        fontFamily: " montserrat, sans-serif"
                                    }}
                                    onClick={handlehome}
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

                    </div>
                </div>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem' }}>
                        <a href="#" style={{ color: '#6366f1', fontWeight: '500', textDecoration: 'none' }}>All Jobs</a>
                        <a href="#" style={{ color: '#374151', textDecoration: 'none' }}>Companies</a>
                        <a href="#" style={{ color: '#374151', textDecoration: 'none' }}>People</a>
                        <a href="#" style={{ color: '#374151', textDecoration: 'none' }}>Mentorship Program</a>
                    </nav>
                    <button style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}>Logout</button>
                </div>
            </header>
            <main style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
                {/* Left Column */}
                <aside style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ ...cardStyle, textAlign: 'center' }}>
                        <div style={{ backgroundColor: '#e0e7ff', borderRadius: '50%', width: '80px', height: '80px', margin: '0 auto' }}></div>
                        <h3 style={{ marginTop: '1rem', fontSize: '1.1rem', fontWeight: '600', color: '#111827' }}>Jay Rutherford</h3>
                        <p style={infoText}>UX/UI Designer</p>
                        <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', sflexWrap: 'wrap' }}>
                            <span style={tagStyle}>UX Research</span>
                            <span style={tagStyle}>UI Design</span>
                            <span style={tagStyle}>Web Design</span>
                        </div>
                        <button style={{ backgroundColor: '#6366f1', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginTop: '1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Update/Download Resume</button>
                        <input style={{ width: '100%', marginTop: '1rem', padding: '0.5rem', fontSize: '0.85rem', borderRadius: '6px', border: '1px solid #e5e7eb' }} placeholder="https://www.profilelink.com" />
                        <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>+50 Connections</div>
                        <button style={{ marginTop: '1rem', backgroundColor: '#e0e7ff', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Edit Profile</button>
                    </div>

                    <div style={{ backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>Looking for a new job?</p>
                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Reprehenderit nulla proident ullamco velit exceptur</p>
                        <button style={{ marginTop: '0.5rem', backgroundColor: '#6366f1', color: '#fff', padding: '0.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }} onClick={handlejobs}>Start Browsing</button>
                    </div>
                </aside>
                {/* Right Column */}
                <section style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ ...cardStyle, flex: 1, marginRight: '1rem' }}>
                            <h4 style={sectionTitle}>Analytics this month</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                                <div>Profile views<br /><b style={{ fontSize: '1rem' }}>200</b></div>
                                <div>Impressions<br /><b style={{ fontSize: '1rem' }}>100</b></div>
                                <div>Searches<br /><b style={{ fontSize: '1rem' }}>70</b></div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'center' }}>
                            <span style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: '500' }}>Open to work</span>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <h4 style={sectionTitle}>About</h4>
                        <p style={infoText}>Jay Rutherford brings strong expertise in UX research, conducting user interviews, and testing to uncover actionable insights...</p>
                    </div>
                    <div style={cardStyle}>
                        <h4 style={sectionTitle}>Working Experience</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.875rem', color: '#374151' }}>
                            <li style={{ marginBottom: '1rem' }}><b>Senior UX UI Designer</b> – ByteDance (Jan 2021 - Present)</li>
                            <li style={{ marginBottom: '1rem' }}><b>Junior UX UI Designer</b> – ConocoPhillips (Aug 2018 - Nov 2020)</li>
                            <li><b>UX UI Designer</b> – Brex (Jun 2017 - May 2018)</li>
                        </ul>
                    </div>

                    <div style={cardStyle}>
                        <h4 style={sectionTitle}>Skills</h4>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['Design Software - 5 years', 'Research - 3 years', 'User Experience - 3 years', 'UI Design - 5 years'].map(skill => (
                                <li key={skill} style={{ backgroundColor: '#f3f4f6', padding: '0.5rem', borderRadius: '6px' }}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div style={cardStyle}>
                        <h4 style={sectionTitle}>Projects</h4>
                        <ul style={{ fontSize: '0.875rem', color: '#374151' }}>
                            <li><b>Smart Finance App Redesign:</b> Redesigned a finance app to improve UI, navigation, and retention.</li>
                            <li><b>EcoRide Bike Sharing Platform:</b> Designed interface and map tracking for a bike sharing service.</li>
                        </ul>
                    </div>

                    <div style={cardStyle}>
                        <h4 style={sectionTitle}>Education</h4>
                        <ul style={infoText}>
                            <li><b>Crestwood College of Arts and Sciences, USA</b> – Master in Technology (2014 - 2017)</li>
                            <li><b>Green Valley Institute of Technology, USA</b> – Bachelor in Technology (2012 - 2014)</li>
                        </ul>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer style={{ backgroundColor: '#111827', color: '#9ca3af', padding: '2rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 'bold' }}>Talent on Cloud</div>
                        <p style={{ marginTop: '1rem' }}>© 2025 Talent on Cloud, Inc.</p>
                    </div>
                    <div>
                        <b style={{ color: '#fff' }}>Product</b>
                        <p>All Jobs</p>
                        <p>Companies</p>
                        <p>Candidates</p>
                    </div>
                    <div>
                        <b style={{ color: '#fff' }}>Resources</b>
                        <p>Blog</p>
                        <p>User Guides</p>
                        <p>Webinars</p>
                    </div>
                    <div>
                        <b style={{ color: '#fff' }}>Subscribe to our newsletter</b>
                        <input style={{ padding: '0.5rem', marginTop: '0.5rem', width: '200px', borderRadius: '6px', border: '1px solid #e5e7eb' }} placeholder="Input your email" />
                        <button style={{ display: 'block', marginTop: '0.5rem', backgroundColor: '#6366f1', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', fontWeight: '500' }}>Subscribe</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CandidateProfile;