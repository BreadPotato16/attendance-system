import React, { useState, useEffect } from "react";


function AttendanceForm({ onSave, editRecord }) {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");

  // Load record into form when editing
  useEffect(() => {
    if (editRecord) {
      setName(editRecord.name);
      setStudentId(editRecord.studentId);
      setCourse(editRecord.course);
    } else {
      setName("");
      setStudentId("");
      setCourse("");
    }
  }, [editRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentId || !course) return alert("All fields are required!");

    onSave({
      name,
      studentId,
      course,
      date: new Date().toLocaleDateString(),
      timeIn: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timeOut: "",
      status: "Present",
    });

    // Clear form after submit
    setName("");
    setStudentId("");
    setCourse("");
  };

  return (
    <div className="card">
      <h2>{editRecord ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit} className="attendance-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="text"
            placeholder="2025-001"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Course:</label>
          <input
            type="text"
            placeholder="BS Information Technology"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <button type="submit" className="btn primary">
          {editRecord ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AttendanceForm;
