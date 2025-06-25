"use client"

import { useState } from "react"

export default function PersonalDetails({ onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "example@gmail.com",
    mobile: "",
    location: "Bangalore",
    company: "Company name",
    nationality: "Select Nationality",
    gender: "Select gender...",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#1f2937",
              margin: 0,
            }}
          >
            Candidate Profile
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "40px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "30px",
          }}
        >
          Profile setup
        </h2>

        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "#3b82f6",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: "12px" }}>✓</span>
          </div>
          <span style={{ color: "#3b82f6", fontSize: "14px", fontWeight: "500" }}>Profile Setup</span>
          <span style={{ color: "#d1d5db" }}>{">"}</span>
          <span style={{ color: "#6b7280", fontSize: "14px" }}>Personal Details</span>
        </div>

        <h3
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "40px",
          }}
        >
          Personal info
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Photo Upload */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                border: "2px solid #d1d5db",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f9fafb",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#e5e7eb",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#9ca3af",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>+</span>
              </div>
            </div>
            <span style={{ fontSize: "14px", color: "#6b7280" }}>Upload Photo</span>
          </div>

          {/* Form Fields */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  color: "#9ca3af",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your phone number"
                value={formData.mobile}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "white",
                }}
              >
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Company
              </label>
              <select
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "white",
                }}
              >
                <option>Company name</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Nationality
              </label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "white",
                }}
              >
                <option>Select Nationality</option>
                <option>Indian</option>
                <option>American</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "white",
                }}
              >
                <option>Select gender...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Upload Resume
              </label>
              <div
                style={{
                  border: "2px dashed #d1d5db",
                  borderRadius: "6px",
                  padding: "40px",
                  textAlign: "center",
                  backgroundColor: "#f9fafb",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "4px",
                    margin: "0 auto 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>📄</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "60px",
          }}
        >
          <button
            style={{
              padding: "12px 24px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              backgroundColor: "white",
              color: "#6b7280",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onNext}
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#3b82f6",
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          fontSize: "12px",
          color: "#9ca3af",
        }}
      >
      </div>
    </div>
  )
}