import React, { useEffect, useState } from "react";


const AdminReports = () => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDepartments, setTotalDepartments] = useState(0);

  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const departments =
      JSON.parse(localStorage.getItem("departments")) || [];

    setTotalUsers(users.length);

    setTotalDoctors(
      users.filter(u => u.role === "DOCTOR").length
    );

    setTotalPatients(
      users.filter(u => u.role === "PATIENT").length
    );

    setTotalDepartments(departments.length);

  }, []);


  return (
    <div className="admin-container">

      <h2 className="admin-title">
        System Reports
      </h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>

        <div className="card">
          <h3>Total Doctors</h3>
          <p>{totalDoctors}</p>
        </div>

        <div className="card">
          <h3>Total Patients</h3>
          <p>{totalPatients}</p>
        </div>

        <div className="card">
          <h3>Total Departments</h3>
          <p>{totalDepartments}</p>
        </div>

      </div>

    </div>
  );
};

export default AdminReports;