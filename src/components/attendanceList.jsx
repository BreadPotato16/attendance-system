import React from "react";


function AttendanceList({ data, onDelete, onEdit }) {
  if (!data || data.length === 0) {
    return (
      <div className="card">
        <h2>Attendance Record</h2>
        <p>No records yet.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Attendance Record</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Student ID</th>
              <th>Course</th>
              <th>Date</th>
              <th>Time In</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.studentId}</td>
                <td>{record.course}</td>
                <td>{record.date}</td>
                <td>{record.timeIn}</td>
                <td className={`status ${record.status.toLowerCase()}`}>
                  {record.status}
                </td>
                <td>
                  <button
                    className="btn primary"
                    onClick={() => onEdit(record)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn secondary"
                    onClick={() => onDelete(record.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceList;