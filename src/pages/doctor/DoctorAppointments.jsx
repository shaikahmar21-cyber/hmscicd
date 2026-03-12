import React, { useEffect, useState } from "react";


const DoctorAppointments = () => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    const stored =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(stored);

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        My Appointments
      </h2>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>

          {appointments.map((appt, index) => (
            <tr key={index}>
              <td>{appt.patient}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DoctorAppointments;