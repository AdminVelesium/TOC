import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import PersonalDetails from "./components/ProfileSetups/1personal-details";
import Education from "./components/ProfileSetups/2education";
import WorkExperience from "./components/ProfileSetups/3work-experience";
import Skills from "./components/ProfileSetups/4skills";
import Projects from "./components/ProfileSetups/5projects";
import Setup from "./components/ProfileSetups/setup";
import Signup from "./components/Loginandsignup/Signup";
import Signin from "./components/Loginandsignup/Login";
import CandidateProfile from "./components/candidate/candidate-profile";
import CompanyProfile from "./components/company-profile";
import EmployerProfileSetup1 from "./components/company-profile-setup";
import EmployerProfileSetup2 from "./components/company-profile-setup-2";
import JobPostingForm from "./components/Jobs/Jobposting";
import OtherCompaniesCandidates from "./components/other-companies-candidates";
import ExternalCandidates from "./components/external-candidates";
import InternalCandidates from "./components/internalcandidates";
import EmployerSignIn from "./components/employer-signin";
import EmployerSignUp from "./components/employer-signup";
import EmployerDashboard from "./components/employer-dashboard";
import ExternalApplications from "./components/external-applications";
import UploadCandidates from "./components/upload-candidates";

// 🔹 Floating Route Dialog Component
const RouteDialog = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(true);

  const routes = [
    { path: "/", label: "Homepage" },
    { path: "/signup", label: "Candidate Signup" },
    { path: "/signin", label: "Candidate Signin" },
    { path: "/candidate/profile", label: "Candidate Profile" },
    { path: "/profile-setup", label: "Profile Setup" },
    { path: "/company-profile", label: "Company Profile" },
    { path: "/employer-profile-setup", label: "Employer Profile Setup" },
    { path: "/employer-profile-setup-1", label: "Employer Profile Setup 1" },
    { path: "/jobposting", label: "Job Posting" },
    { path: "/other-companies-candidates", label: "Other Companies' Candidates" },
    { path: "/external-candidates", label: "External Candidates" },
    { path: "/internal-candidates", label: "Internal Candidates" },
    { path: "/employer-signin", label: "Employer Signin" },
    { path: "/employer-signup", label: "Employer Signup" },
    { path: "/employer-dashboard", label: "Employer Dashboard" },
    { path: "/external-applications", label: "External Applications" },
    { path: "/upload-candidates", label: "Upload Candidates" },
  ];

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        style={{
          position: "fixed",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          padding: "0.5rem 1rem",
          backgroundColor: "#1d4ed8",
          color: "#fff",
          border: "none",
          borderRadius: "0.375rem 0 0 0.375rem",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        Open Routes
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "10%",
        right: 0,
        width: "300px",
        maxHeight: "80%",
        overflowY: "auto",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px 0 0 8px",
        padding: "1rem",
        zIndex: 9999,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <strong>Navigate</strong>
        <button onClick={() => setVisible(false)} style={{ border: "none", background: "none", cursor: "pointer" }}>
          ❌
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {routes.map(({ path, label }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            style={{
              padding: "0.5rem",
              backgroundColor: "#1d4ed8",
              color: "#fff",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* 🔹 Floating Route Navigation Dialog */}
        <RouteDialog />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs" element={<JobPostingForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/candidate/profile" element={<CandidateProfile />} />
          <Route path="/profile-setup" element={<Setup />} />
          <Route path="/profile-setup/:step" element={<Setup />} />
          <Route path="/personal-details" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/education" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/work-experience" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/skills" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/projects" element={<Navigate to="/profile-setup" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/employer-profile-setup" element={<EmployerProfileSetup1 />} />
          <Route path="/employer-profile-setup-1" element={<EmployerProfileSetup2 />} />
          <Route path="/jobposting" element={<JobPostingForm />} />
          <Route path="/other-companies-candidates" element={<OtherCompaniesCandidates />} />
          <Route path="/external-candidates" element={<ExternalCandidates />} />
          <Route path="/internal-candidates" element={<InternalCandidates />} />
          <Route path="/employer-signin" element={<EmployerSignIn />} />
          <Route path="/employer-signup" element={<EmployerSignUp />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/external-applications" element={<ExternalApplications />} />
          <Route path="/upload-candidates" element={<UploadCandidates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
