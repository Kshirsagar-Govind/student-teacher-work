import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import StudentDashboardMain from "./Student Side/dashboard-main";
import StudentLogin from "./Student Side/Pages/student-login";
import DashboardMain from "./Teacher Side/dashboard-main";
import TeacherLogin from "./Teacher Side/Pages/teacher-login";

export default function Test() {
  return (
    <div>
      <Routes>
        <Route path="/student/*" element={<StudentDashboardMain />} />
        <Route path="/teacher/*" element={<DashboardMain />} />
      </Routes>
    </div>
  );
}
