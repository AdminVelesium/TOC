"use client"

import { useState } from "react"

export default function Education({ onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    degree: "",
    specialization: "",
    university: "",
    startEndYear: "Oct 10, 2022",
    grades: "",
    institution: "",
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
          <span style={{ color: "#6b7280", fontSize: "14px" }}>Education</span>
        </div>

        <h3
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "40px",
          }}
        >
          Educational info
        </h3>

        {/* Form Fields */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            maxWidth: "800px",
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
              Degree/Qualification
            </label>
            <select
              name="degree"
              value={formData.degree}
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
              <option value="">Select Degree</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
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
              Specialization
            </label>
            <select
              name="specialization"
              value={formData.specialization}
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
              <option value="">Select Specialization</option>
              <option>Computer Science</option>
              <option>Engineering</option>
              <option>Business</option>
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
              University Name
            </label>
            <input
              type="text"
              name="university"
              value={formData.university}
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
              Start & End Year
            </label>
            <input
              type="text"
              name="startEndYear"
              value={formData.startEndYear}
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
              Grades/CGPA (optional)
            </label>
            <select
              name="grades"
              value={formData.grades}
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
              <option value="">Select Grade</option>
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
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
              Institution Name
            </label>
            <select
              name="institution"
              value={formData.institution}
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
              <option value="">Select Institution</option>
              <option>University A</option>
              <option>University B</option>
              <option>University C</option>
            </select>
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

    </div>
  )
}
