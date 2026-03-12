import React, { useEffect, useState } from "react";


const Doctor = () => {

  const [doctor, setDoctor] = useState(null);
  const [totalPatients, setTotalPatients] = useState(0);

  useEffect(() => {

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const patients =
      users.filter(u => u.role === "PATIENT");

    setDoctor(currentUser);
    setTotalPatients(patients.length);

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        Doctor Dashboard
      </h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Welcome</h3>
          <p>{doctor?.name || doctor?.email}</p>
        </div>

        <div className="card">
          <h3>Total Patients</h3>
          <p>{totalPatients}</p>
        </div>

      </div>

    </div>
  );
};

export default Doctor;