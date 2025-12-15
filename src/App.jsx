
import React, { useState } from "react";
import "./App.css";
import AttendanceForm from "./components/attendanceForm";
import AttendanceList from "./components/attendanceList";

function App() {
  const [theme, setTheme] = useState("light");

  // State for all attendance records
  const [records, setRecords] = useState([]);

  // State for editing
  const [editRecord, setEditRecord] = useState(null);

  // Add or update record
  const handleSave = (record) => {
    if (editRecord) {
      // Update existing record
      setRecords((prev) =>
        prev.map((r) => (r.id === editRecord.id ? { ...r, ...record } : r))
      );
      setEditRecord(null);
    } else {
      // Add new record with unique id
      setRecords((prev) => [...prev, { ...record, id: Date.now() }]);
    }
  };

  // Delete record
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setRecords((prev) => prev.filter((r) => r.id !== id));
    }
  };

  // Edit record
  const handleEdit = (record) => {
    setEditRecord(record);
  };

  return (
    <div className={`app ${theme}`}>
      {/* Header */}
      <header className="header">
        <h1>Student Attendance System</h1>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </header>

      {/* Main Content */}
      <main>
        {/* Attendance Form */}
        <AttendanceForm onSave={handleSave} editRecord={editRecord} />

        {/* Attendance List */}
        <AttendanceList
          data={records}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App;