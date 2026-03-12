import React, { useEffect, useState } from "react";


const PatientProfile = () => {

  const [patient, setPatient] = useState(null);

  useEffect(() => {

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    setPatient(currentUser);

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        My Profile
      </h2>

      <div className="report-box">

        <p><strong>Name:</strong> {patient?.name}</p>

        <p><strong>Email:</strong> {patient?.email}</p>

        <p><strong>Role:</strong> {patient?.role}</p>

      </div>

    </div>
  );
};

export default PatientProfile;