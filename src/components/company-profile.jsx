"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Logo from "./Logo";

export default function CompanyProfile() {
  const [companyProfile, setCompanyProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('employerId');
    localStorage.removeItem('token');
    navigate('/employer-signin');
  };

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const employerId = localStorage.getItem('employerId');
        const token = localStorage.getItem('token');
        if (!employerId || !token) {
          throw new Error('No employer id found. Please login again.');
        }
        const response = await fetch(`https://toc-bac-1.onrender.com/api/company-profile/${employerId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include'
        });
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to fetch company profile');
        }
        const profileData = await response.json();
        setCompanyProfile(profileData);
        localStorage.setItem('companyProfile', JSON.stringify(profileData));
      } catch (err) {
        setError(err.message);
        if (err.message.includes('login again')) {
          localStorage.clear();
          navigate('/employer-signin');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  function uint8ToBase64(u8Arr) {
    let CHUNK_SIZE = 0x8000;
    let index = 0;
    let length = u8Arr.length;
    let result = '';
    let slice;
    while (index < length) {
      slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
      result += String.fromCharCode.apply(null, slice);
      index += CHUNK_SIZE;
    }
    return btoa(result);
  }

  // Utility to get the correct company logo URL (for static serving or base64)
  function getCompanyLogoUrl(logo) {
    if (!logo) return null;
    // If logo is stored as base64 (buffer), use data URL
    if (logo.data && logo.mimetype) {
      // logo.data may be an array or a base64 string
      let base64 = '';
      if (Array.isArray(logo.data)) {
        base64 = btoa(String.fromCharCode.apply(null, logo.data));
      } else if (logo.data.data) {
        base64 = uint8ToBase64(new Uint8Array(logo.data.data));
      } else if (typeof logo.data === 'string') {
        base64 = logo.data;
      }
      return `data:${logo.mimetype};base64,${base64}`;
    }
    // If logo is a static file path (future-proofing)
    if (logo.path) {
      const normPath = logo.path.replace(/\\/g, '/');
      const idx = normPath.toLowerCase().indexOf('company_uploads/');
      if (idx !== -1) {
        return `https://toc-bac-1.onrender.com/${normPath.substring(idx)}`;
      }
      return `https://toc-bac-1.onrender.com/${normPath}`;
    }
    return null;
  }

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '4rem' }}>Loading company profile...</div>;
  }
  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '4rem', color: 'red' }}>{error}</div>;
  }
  if (!companyProfile) {
    return <div style={{ textAlign: 'center', marginTop: '4rem' }}>No company profile found.</div>;
  }

  // Navigation items for company
  const navigationItems = [
    { name: "Dashboard", href: "/company-profile", active: true },
    { name: "Jobs", href: "/jobs", active: false },
    { name: "Candidates", href: "/candidates", active: false },
  ];

  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        lineHeight: "1.6",
        color: "#1f2937",
        margin: 0,
        padding: 0,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        zoom: 0.95,
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          height: "110px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          {/* Logo */}
          <Logo />
          {/* Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: item.active ? "#6366f1" : "#4b5563",
                  fontSize: "0.95rem",
                  fontWeight: item.active ? "600" : "500",
                  padding: "0.5rem 0",
                  transition: "color 0.2s ease",
                  borderBottom: item.active ? "2px solid #6366f1" : "2px solid transparent",
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* User Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => navigate('/company-profile-setup-1')}
              style={{
                backgroundColor: "#6366f1",
                color: "white",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={e => { e.target.style.backgroundColor = "#5856eb"; e.target.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.target.style.backgroundColor = "#6366f1"; e.target.style.transform = "translateY(0)"; }}
            >
              <EditIcon style={{ fontSize: 18 }} /> Edit Profile
            </button>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={e => { e.target.style.backgroundColor = "#dc2626"; e.target.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.target.style.backgroundColor = "#ef4444"; e.target.style.transform = "translateY(0)"; }}
            >
              <LogoutIcon style={{ fontSize: 18 }} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
        }}
      >
        {/* Sidebar */}
        <aside style={{ width: "340px", flexShrink: 0 }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "2rem",
              marginBottom: "1.5rem",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            {/* Company Logo */}
            <div style={{ marginBottom: "1.5rem" }}>
              {companyProfile.logo && getCompanyLogoUrl(companyProfile.logo) ? (
                <img
                  src={getCompanyLogoUrl(companyProfile.logo)}
                  alt="Company Logo"
                  style={{ width: 120, height: 120, borderRadius: "16px", objectFit: "cover", border: "4px solid #e0e7ff", margin: "0 auto", background: '#f3f4f6' }}
                />
              ) : (
                <div style={{ width: 120, height: 120, background: "#6366f1", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2.5rem", fontWeight: 700, margin: "0 auto", border: "4px solid #e0e7ff" }}>
                  <BusinessIcon style={{ fontSize: 60 }} />
                </div>
              )}
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1f2937", marginBottom: "0.5rem", margin: 0 }}>{companyProfile.companyName}</h1>
            <p style={{ fontSize: "1.1rem", color: "#6b7280", marginBottom: "0.5rem", fontWeight: 500 }}>{companyProfile.industryType}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "#6b7280", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              <LocationOnIcon style={{ fontSize: 18 }} />
              <span>{companyProfile.address}</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#dcfce7", color: "#166534", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem" }}>
              <div style={{ width: 8, height: 8, backgroundColor: "#10b981", borderRadius: "50%" }} />
              Verified Company
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <a href={companyProfile.companyWebsite} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", color: "#6366f1", textDecoration: "none", fontWeight: 600 }}>
                {companyProfile.companyWebsite}
              </a>
            </div>
            <div style={{ textAlign: "left", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "8px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "#6b7280" }}>
                <EmailIcon style={{ fontSize: 16 }} />
                <span>{companyProfile.email || '-'}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "#6b7280" }}>
                <InsertDriveFileIcon style={{ fontSize: 16 }} />
                <span>PAN: {companyProfile.pan || '-'}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6b7280" }}>
                <InsertDriveFileIcon style={{ fontSize: 16 }} />
                <span>GSTIN: {companyProfile.gstin || '-'}</span>
              </div>
            </div>
          </div>
        </aside>
        {/* Main Content Area */}
        <section style={{ flex: 1, minWidth: 0 }}>
          {/* About Section */}
          <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>About</h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: "1.7", margin: 0 }}>{companyProfile.companyDescription}</p>
          </div>
          {/* Legal & Business Details */}
          <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1f2937", marginBottom: "1.5rem", margin: 0 }}>Legal & Business Details</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: "#6366f1", marginBottom: 4 }}>PAN Number</div>
                <div style={{ color: "#374151", fontSize: "1rem" }}>{companyProfile.pan || '-'}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: "#6366f1", marginBottom: 4 }}>GSTIN</div>
                <div style={{ color: "#374151", fontSize: "1rem" }}>{companyProfile.gstin || '-'}</div>
              </div>
              <div style={{ flex: 2 }}>
                <div style={{ fontWeight: 600, color: "#6366f1", marginBottom: 4 }}>Registered Address</div>
                <div style={{ color: "#374151", fontSize: "1rem" }}>{companyProfile.address || '-'}</div>
              </div>
            </div>
          </div>
          {/* Contacts */}
          <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1f2937", marginBottom: "1.5rem", margin: 0 }}>Contact Information</h2>
            {companyProfile.primaryContact && (
              <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 16, border: "1px solid #bbf7d0", marginBottom: 16 }}>
                <div style={{ fontWeight: 600, color: "#166534", marginBottom: 8 }}>Primary Contact</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                  {Object.entries(companyProfile.primaryContact).map(([key, value]) => (
                    <div key={key} style={{ flex: 1, minWidth: 120, color: "#374151", fontSize: "1rem" }}>
                      <span style={{ fontWeight: 600 }}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value || "-"}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {companyProfile.additionalContacts && companyProfile.additionalContacts.length > 0 && (
              <div>
                <div style={{ fontWeight: 600, color: "#6366f1", marginBottom: 8 }}>Additional Contacts</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                  {companyProfile.additionalContacts.map((contact, idx) => (
                    <div key={idx} style={{ background: "#f8fafc", borderRadius: 8, padding: 16, border: "1px solid #e2e8f0", minWidth: 120, flex: 1 }}>
                      {Object.entries(contact).map(([key, value]) => (
                        <div key={key} style={{ color: "#374151", fontSize: "1rem", marginBottom: 4 }}>
                          <span style={{ fontWeight: 600 }}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value || "-"}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Documents */}
          <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "2rem", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1f2937", marginBottom: "1.5rem", margin: 0 }}>Company Documents</h2>
            {companyProfile.documents && companyProfile.documents.length > 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {companyProfile.documents.map((doc, idx) => {
                  const file = doc.file;
                  let thumbnail = null;
                  if (file && file.data && file.data.data && file.mimetype && file.mimetype.startsWith('image/')) {
                    const base64 = uint8ToBase64(new Uint8Array(file.data.data));
                    thumbnail = (
                      <img
                        src={`data:${file.mimetype};base64,${base64}`}
                        alt={file.originalName || doc.name}
                        style={{ width: 64, height: 64, borderRadius: 8, border: '1px solid #e2e8f0', objectFit: 'cover', marginRight: 16 }}
                      />
                    );
                  }
                  return (
                    <div key={idx} style={{ background: "#f8fafc", borderRadius: 8, padding: 16, border: "1px solid #e2e8f0", minWidth: 220, flex: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
                      {thumbnail || (
                        <div style={{ width: 64, height: 64, background: "#eef2ff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5" }}>
                          <InsertDriveFileIcon style={{ fontSize: 32 }} />
                        </div>
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, color: "#1e293b", marginBottom: 4 }}>{doc.name || file?.originalName || 'Document'}</div>
                        <div style={{ fontSize: 12, color: '#6366f1', marginBottom: 4 }}>{doc.status || '-'}</div>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button
                            style={{ background: 'none', border: 'none', color: '#6366f1', cursor: 'pointer', fontWeight: 600, fontSize: 14, padding: 0 }}
                            onClick={() => {
                              const blob = new Blob([new Uint8Array(file.data.data)], { type: file.mimetype })
                              const url = URL.createObjectURL(blob)
                              window.open(url, "_blank")
                            }}
                          >View</button>
                          <button
                            style={{ background: 'none', border: 'none', color: '#6366f1', cursor: 'pointer', fontWeight: 600, fontSize: 14, padding: 0 }}
                            onClick={() => {
                              const blob = new Blob([new Uint8Array(file.data.data)], { type: file.mimetype })
                              const url = URL.createObjectURL(blob)
                              const a = document.createElement("a")
                              a.href = url
                              a.download = file.originalName || doc.name
                              a.click()
                              setTimeout(() => URL.revokeObjectURL(url), 1000)
                            }}
                          >Download</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ background: '#f8fafc', borderRadius: 8, padding: 24, textAlign: 'center', color: '#64748b' }}>
                No documents have been uploaded yet.
              </div>
            )}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer style={{ backgroundColor: "#1f2937", color: "white", padding: "3rem 0 1.5rem", marginTop: "3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ borderTop: "1px solid #374151", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: "0.95rem", color: "#9ca3af", margin: 0 }}>© {new Date().getFullYear()} Talent on Cloud. All rights reserved.</p>
            <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((item, index) => (
                <a key={index} href="#" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.2s ease" }} onMouseEnter={e => e.target.style.color = "#6366f1"} onMouseLeave={e => e.target.style.color = "#9ca3af"}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}