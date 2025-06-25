import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import PersonalDetails from "./components/ProfileSetups/1personal-details";
import Education from "./components/ProfileSetups/2education";
import WorkExperience from "./components/ProfileSetups/3work-experience";
import Skills from "./components/ProfileSetups/4skills";
import Projects from "./components/ProfileSetups/5projects";
import Setup from "./components/ProfileSetups/setup";
import Jobs from "./components/Jobs/Jobs";
import CompanyProfile from "./components/company/CompanyProfile";
import Signup from "./components/Loginandsignup/Signup"
import Signin from "./components/Loginandsignup/Login"
import CandidateProfile from "./components/candidate/candidate-profile"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/company/profile" element={<CompanyProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/candidate/profile" element={<CandidateProfile />} />
          {/* Profile Setup Routes */}
          <Route path="/profile-setup" element={<Setup />} />
          <Route path="/profile-setup/:step" element={<Setup />} />
          {/* Redirect legacy/old step routes to /profile-setup */}
          <Route path="/personal-details" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/education" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/work-experience" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/skills" element={<Navigate to="/profile-setup" replace />} />
          <Route path="/projects" element={<Navigate to="/profile-setup" replace />} />
          {/* Catch-all for 404s */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;