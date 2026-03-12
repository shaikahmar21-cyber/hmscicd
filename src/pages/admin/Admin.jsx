import React, { useEffect, useState } from "react";


const Admin = () => {

  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {

    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    setUsers(storedUsers);

    setDoctors(
      storedUsers.filter(user => user.role === "DOCTOR")
    );

    setPatients(
      storedUsers.filter(user => user.role === "PATIENT")
    );

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">Admin Dashboard</h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>

        <div className="card">
          <h3>Total Doctors</h3>
          <p>{doctors.length}</p>
        </div>

        <div className="card">
          <h3>Total Patients</h3>
          <p>{patients.length}</p>
        </div>

      </div>

    </div>
  );
};

export default Admin;