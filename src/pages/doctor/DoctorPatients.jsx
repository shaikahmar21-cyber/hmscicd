import React, { useEffect, useState } from "react";


const DoctorPatients = () => {

  const [patients, setPatients] = useState([]);

  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    setPatients(
      users.filter(u => u.role === "PATIENT")
    );

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        Patient List
      </h2>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>

          {patients.map(patient => (

            <tr key={patient.email}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DoctorPatients;