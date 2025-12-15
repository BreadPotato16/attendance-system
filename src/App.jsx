import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

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
      <main className="container">
        {/* Student Info Card */}
        <div className="card">
          <h2>Student Information</h2>
          <div className="info-grid">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Student ID:</strong> 2025-001</p>
            <p><strong>Course:</strong> BS Information Technology</p>
          </div>
        </div>

        {/* Attendance Actions */}
        <div className="card actions">
          <button className="btn primary">⏰ Time In</button>
          <button className="btn secondary">⏳ Time Out</button>
        </div>

        {/* Attendance Table */}
        <div className="card">
          <h2>Attendance Record</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-01-10</td>
                  <td>08:02 AM</td>
                  <td>05:00 PM</td>
                  <td className="status present">Present</td>
                </tr>
                <tr>
                  <td>2025-01-11</td>
                  <td>—</td>
                  <td>—</td>
                  <td className="status absent">Absent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
