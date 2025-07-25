import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function JobSearch() {
    const location = useLocation();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || '');
    const [searchLocation, setSearchLocation] = useState(location.state?.location || '');

    useEffect(() => {
        setLoading(true);
        fetch('https://toc-bac-1.onrender.com/api/jobsearch')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch jobs');
                return res.json();
            })
            .then(data => {
                setJobs(Array.isArray(data) ? data : []);
                setError(null);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setJobs([]);
                setLoading(false);
            });
    }, []);

    const filteredJobs = jobs.filter(job => {
        const matchesTitle = job.title?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCompany = job.company?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSkills = Array.isArray(job.skills) && job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesLocation = searchLocation === '' || (job.location?.toLowerCase().includes(searchLocation.toLowerCase()));
        return (matchesTitle || matchesCompany || matchesSkills) && matchesLocation;
    });

    return (
        <div style={{ fontFamily: 'Montserrat, sans-serif', background: '#f8fafc', minHeight: '100vh', padding: '2rem 0' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f2937', marginBottom: '2rem', textAlign: 'center' }}>Job Search Results</h1>
                {/* Search Bar */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <input
                        type="text"
                        placeholder="Job title, company, or skill"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ padding: '0.75rem 1rem', borderRadius: 8, border: '1px solid #d1d5db', fontSize: '1rem', minWidth: 220 }}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={searchLocation}
                        onChange={e => setSearchLocation(e.target.value)}
                        style={{ padding: '0.75rem 1rem', borderRadius: 8, border: '1px solid #d1d5db', fontSize: '1rem', minWidth: 180 }}
                    />
                </div>
                {loading ? (
                    <div style={{ textAlign: 'center', margin: '3rem 0', fontSize: '1.2rem' }}>Loading jobs...</div>
                ) : error ? (
                    <div style={{ textAlign: 'center', color: 'red', margin: '3rem 0', fontSize: '1.2rem' }}>{error}</div>
                ) : filteredJobs.length === 0 ? (
                    <div style={{ textAlign: 'center', margin: '3rem 0', fontSize: '1.2rem', color: '#6b7280' }}>No jobs found matching your criteria.</div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                        {filteredJobs.map((job, idx) => (
                            <div key={idx} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid #e5e7eb' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    {job.logo ? (
                                        <img src={job.logo} alt={job.company} style={{ width: 56, height: 56, borderRadius: 12, objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                                    ) : (
                                        <div style={{ width: 56, height: 56, borderRadius: 12, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#6366f1', fontWeight: 700 }}>{job.company?.charAt(0) || '?'}</div>
                                    )}
                                    <div>
                                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', margin: 0 }}>{job.title}</h2>
                                        <div style={{ fontSize: '1rem', color: '#6366f1', fontWeight: 600 }}>{job.company}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem', color: '#6b7280', marginBottom: 8 }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><b>Location:</b> {job.location}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><b>Type:</b> {job.type}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><b>Salary:</b> {job.salary}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><b>Experience:</b> {job.experience}</span>
                                </div>
                                <div style={{ marginBottom: 8, color: '#4b5563', fontSize: '1rem', minHeight: 48 }}>{job.description}</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: 8 }}>
                                    {Array.isArray(job.skills) && job.skills.length > 0 ? job.skills.map((skill, i) => (
                                        <span key={i} style={{ background: '#eff6ff', color: '#2563eb', borderRadius: 12, padding: '0.3rem 0.9rem', fontSize: '0.9rem', fontWeight: 500, border: '1px solid #dbeafe' }}>{skill}</span>
                                    )) : <span style={{ color: '#9ca3af' }}>No skills listed</span>}
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: 'auto', textAlign: 'right' }}>
                                    Posted: {job.postedAt ? new Date(job.postedAt).toLocaleDateString() : '-'}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}