import AttendanceForm from "./components/attendanceForm";
import AttendanceList from "./components/attendanceList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Attendance System</h1>
      <AttendanceForm />
      <AttendanceList />
    </div>
  );
}

export default App;
