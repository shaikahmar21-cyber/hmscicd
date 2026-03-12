import React, { useState } from "react";


const BookAppointment = () => {

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const newAppointment = {

      patientName: currentUser.name,
      patientEmail: currentUser.email,
      doctor,
      date,
      time,
      status: "Pending"

    };

    appointments.push(newAppointment);

    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );

    alert("Appointment Booked");

    setDoctor("");
    setDate("");
    setTime("");
  };

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        Book Appointment
      </h2>

      <div className="report-box">

        <input
          className="admin-input"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) =>
            setDoctor(e.target.value)
          }
        />

        <br /><br />

        <input
          type="date"
          className="admin-input"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <br /><br />

        <input
          type="time"
          className="admin-input"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
        />

        <br /><br />

        <button
          className="btn btn-add"
          onClick={handleBook}
        >
          Book
        </button>

      </div>

    </div>
  );
};

export default BookAppointment;