import React, { PropTypes } from "react";
import StudentListRow from "./StudentListRow";

const StudentList = ({ students }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Courses</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <StudentListRow key={student.id} value={student} />
        ))}
      </tbody>
    </table>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired
};

export default StudentList;
