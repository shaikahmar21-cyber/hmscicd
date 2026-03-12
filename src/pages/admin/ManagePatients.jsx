import React, { useEffect, useState } from "react";


const ManagePatients = () => {

  const [patients, setPatients] = useState([]);

  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    setPatients(
      users.filter(user => user.role === "PATIENT")
    );

  }, []);


  const deletePatient = (email) => {

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    users =
      users.filter(user => user.email !== email);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setPatients(
      users.filter(user => user.role === "PATIENT")
    );
  };


  return (
    <div className="admin-container">

      <h2 className="admin-title">Manage Patients</h2>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {patients.map((patient) => (

            <tr key={patient.email}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>

              <td>
                <button
                  className="btn btn-delete"
                  onClick={() =>
                    deletePatient(patient.email)
                  }
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ManagePatients;