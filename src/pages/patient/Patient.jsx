import React, { useEffect, useState } from "react";


const Patient = () => {

  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const myAppointments =
      storedAppointments.filter(
        a => a.patientEmail === currentUser.email
      );

    setPatient(currentUser);
    setAppointments(myAppointments);

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        Patient Dashboard
      </h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Welcome</h3>
          <p>{patient?.name}</p>
        </div>

        <div className="card">
          <h3>My Appointments</h3>
          <p>{appointments.length}</p>
        </div>

      </div>

    </div>
  );
};

export default Patient;