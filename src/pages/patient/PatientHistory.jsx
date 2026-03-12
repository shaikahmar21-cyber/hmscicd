import React, { useEffect, useState } from "react";

const PatientHistory = () => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const stored =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(
      stored.filter(
        a => a.patientEmail === currentUser.email
      )
    );

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        Medical History
      </h2>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {appointments.map((a, index) => (

            <tr key={index}>
              <td>{a.doctor}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default PatientHistory;