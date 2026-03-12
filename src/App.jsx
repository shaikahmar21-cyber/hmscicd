import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import HomePage from "./components/HomePage";

// Public pages
import Home from "./pages/Home";
import AboutHospital from "./pages/AboutHospital";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Admin pages
import AdminDashboard from "./pages/admin/Admin";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManagePatients from "./pages/admin/ManagePatients";
import AdminDepartments from "./pages/admin/AdminDepartments";
import AdminReports from "./pages/admin/AdminReports";

// Doctor pages
import DoctorDashboard from "./pages/doctor/Doctor";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorPatients from "./pages/doctor/DoctorPatients";
import DoctorProfile from "./pages/doctor/DoctorProfile";

// Patient pages
import PatientDashboard from "./pages/patient/Patient";
import BookAppointment from "./pages/patient/BookAppointment";
import PatientHistory from "./pages/patient/PatientHistory";
import PatientProfile from "./pages/patient/PatientProfile";


// ============================
// Protected Route Component
// ============================
const ProtectedRoute = ({ children, role }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (role && currentUser.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};


// ============================
// Main App Component
// ============================
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route path="/" element={<HomePage />}>

          {/* PUBLIC ROUTES */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutHospital />} />
          <Route path="contact" element={<Contact />} />
          <Route path="departments" element={<Departments />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />


          {/* ================= ADMIN ROUTES ================= */}
          <Route
            path="admin"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="admin/doctors"
            element={
              <ProtectedRoute role="ADMIN">
                <ManageDoctors />
              </ProtectedRoute>
            }
          />

          <Route
            path="admin/patients"
            element={
              <ProtectedRoute role="ADMIN">
                <ManagePatients />
              </ProtectedRoute>
            }
          />

          <Route
            path="admin/departments"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminDepartments />
              </ProtectedRoute>
            }
          />

          <Route
            path="admin/reports"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminReports />
              </ProtectedRoute>
            }
          />


          {/* ================= DOCTOR ROUTES ================= */}
          <Route
            path="doctor"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="doctor/appointments"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorAppointments />
              </ProtectedRoute>
            }
          />

          <Route
            path="doctor/patients"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorPatients />
              </ProtectedRoute>
            }
          />

          <Route
            path="doctor/profile"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorProfile />
              </ProtectedRoute>
            }
          />


          {/* ================= PATIENT ROUTES ================= */}
          <Route
            path="patient"
            element={
              <ProtectedRoute role="PATIENT">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="patient/book"
            element={
              <ProtectedRoute role="PATIENT">
                <BookAppointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="patient/history"
            element={
              <ProtectedRoute role="PATIENT">
                <PatientHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="patient/profile"
            element={
              <ProtectedRoute role="PATIENT">
                <PatientProfile />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;