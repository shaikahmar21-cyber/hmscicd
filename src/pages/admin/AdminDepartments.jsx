import React, { useState, useEffect } from "react";


const AdminDepartments = () => {

  const [departments, setDepartments] = useState([]);
  const [newDept, setNewDept] = useState("");

  useEffect(() => {

    const storedDepts =
      JSON.parse(localStorage.getItem("departments")) || [];

    setDepartments(storedDepts);

  }, []);


  const addDepartment = () => {

    if (!newDept.trim()) return;

    const updated = [...departments, newDept];

    localStorage.setItem(
      "departments",
      JSON.stringify(updated)
    );

    setDepartments(updated);
    setNewDept("");
  };


  const deleteDepartment = (dept) => {

    const updated =
      departments.filter(d => d !== dept);

    localStorage.setItem(
      "departments",
      JSON.stringify(updated)
    );

    setDepartments(updated);
  };


  return (
    <div className="admin-container">

      <h2 className="admin-title">
        Manage Departments
      </h2>

      <div>

        <input
          className="admin-input"
          value={newDept}
          onChange={(e) =>
            setNewDept(e.target.value)
          }
          placeholder="Enter Department Name"
        />

        <button
          className="btn btn-add"
          onClick={addDepartment}
        >
          Add Department
        </button>

      </div>


      <ul className="dept-list">

        {departments.map((dept, index) => (

          <li key={index}>

            {dept}

            <button
              className="btn btn-delete"
              onClick={() =>
                deleteDepartment(dept)
              }
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default AdminDepartments;