import React, { useEffect, useState } from "react";

const ManageDoctors = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const doctorList =
      users.filter(user => user.role === "DOCTOR");

    setDoctors(doctorList);

  }, []);


  const deleteDoctor = (email) => {

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    users =
      users.filter(user => user.email !== email);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setDoctors(
      users.filter(user => user.role === "DOCTOR")
    );
  };


  return (
    <div className="admin-container">

      <h2 className="admin-title">Manage Doctors</h2>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {doctors.map((doc) => (

            <tr key={doc.email}>
              <td>{doc.name}</td>
              <td>{doc.email}</td>

              <td>
                <button
                  className="btn btn-delete"
                  onClick={() =>
                    deleteDoctor(doc.email)
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

export default ManageDoctors;