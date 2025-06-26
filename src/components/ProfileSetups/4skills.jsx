"use client"

import { useState } from "react"

export default function Skills({ onNext, onPrevious }) {
  const [selectedSkill, setSelectedSkill] = useState("Node.js")
  const [skills, setSkills] = useState(["Python", "React", "Java", "Springboot"])

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
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
          <span style={{ color: "#6b7280", fontSize: "14px" }}>Skills</span>
        </div>

        <h3
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "40px",
          }}
        >
          Key skills
        </h3>

        {/* Skills Selection */}
        <div style={{ maxWidth: "600px" }}>
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
              Select or Type
            </label>

            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  paddingRight: "50px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "white",
                  appearance: "none",
                }}
              >
                <option>Node.js</option>
                <option>React</option>
                <option>Python</option>
                <option>Java</option>
                <option>JavaScript</option>
              </select>

              <div
                style={{
                  position: "absolute",
                  right: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#1f2937",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Skills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "20px",
                  fontSize: "14px",
                  color: "#374151",
                }}
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#6b7280",
                    cursor: "pointer",
                    fontSize: "16px",
                    padding: "0",
                    width: "16px",
                    height: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "200px",
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
