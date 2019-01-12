import React from "react";
import StudentListRow from "./StudentListRow";
import CoursesPage from "../course/CoursesPage";

const StudentList = ({ students }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Courses</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <StudentListRow key={student.name} value={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
