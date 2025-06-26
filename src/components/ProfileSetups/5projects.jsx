"use client"

import { useState } from "react"

export default function Projects({ onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    projectName: "",
    startDate: "From",
    endDate: "To",
    description: "Describe...",
    keySkills: "",
    projectUrl: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleComplete = () => {
    // Perform any form submission logic here if needed
    window.location.href = "/candidate/profile"
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
          <span style={{ color: "#6b7280", fontSize: "14px" }}>Projects/Portfolio</span>
        </div>

        <h3
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "8px",
          }}
        >
          Projects
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "40px",
          }}
        >
          Showcase your talent with the best projects you have worked on
        </p>

        {/* Form Fields */}
        <div style={{ maxWidth: "800px" }}>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Project name
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginBottom: "24px",
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
                Start Date
              </label>
              <input
                type="text"
                name="startDate"
                placeholder="From"
                value={formData.startDate}
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
                End Date
              </label>
              <input
                type="text"
                name="endDate"
                placeholder="To"
                value={formData.endDate}
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
          </div>

          <div style={{ marginBottom: "24px" }}>
            <textarea
              name="description"
              placeholder="Describe..."
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Key skills used in the project (optional)
            </label>
            <input
              type="text"
              name="keySkills"
              value={formData.keySkills}
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

          <div style={{ marginBottom: "40px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Project URL (optional)
            </label>
            <input
              type="url"
              name="projectUrl"
              value={formData.projectUrl}
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
        </div>

        {/* Add More Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "60px",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "2px solid #d1d5db",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "white",
            }}
          >
            <span style={{ fontSize: "24px", color: "#6b7280", fontWeight: "bold" }}>+</span>
          </div>
          <span style={{ fontSize: "14px", color: "#6b7280" }}>Add more</span>
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
            onClick={onPrevious}
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
            Previous
          </button>
          <button
            onClick={handleComplete}
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
            Complete
          </button>
        </div>
      </div>

      {/* Footer */}

    </div>
  )
}