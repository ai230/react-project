import React from "react";
import { Link } from "react-router";

const StudentListRow = student => {
  return (
    <tr>
      <td>{student.value.id}</td>
      <td>
        <Link to={"/" + student.value.id + "/" + student.value.name}>
          {student.value.name}
        </Link>
      </td>
      <td>{student.value.courses}</td>
    </tr>
  );
};

export default StudentListRow;
