import DashboardMain from "./Components/Teacher Side/dashboard-main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeacherLogin from "./Components/Teacher Side/Pages/teacher-login";
import StudentLogin from "./Components/Student Side/Pages/student-login";
import Test from "./Components/test";
import StudentDashboardMain from "./Components/Student Side/dashboard-main";
import StudentsList from "./Components/Teacher Side/Pages/students-list";
import StudentProfile from "./Components/Teacher Side/Pages/student-profile";
import HomeWorkPage from "./Components/Student Side/Pages/home-wrok-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<TeacherLogin />} />
          <Route path="/student-login-page" exact element={<StudentLogin />} />
          <Route path="/*" exact element={<Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
