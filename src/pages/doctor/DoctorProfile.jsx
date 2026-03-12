import React, { useEffect, useState } from "react";


const DoctorProfile = () => {

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    setDoctor(currentUser);

  }, []);

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        My Profile
      </h2>

      <div className="report-box">

        <p><strong>Name:</strong> {doctor?.name}</p>

        <p><strong>Email:</strong> {doctor?.email}</p>

        <p><strong>Role:</strong> {doctor?.role}</p>

      </div>

    </div>
  );
};

export default DoctorProfile;