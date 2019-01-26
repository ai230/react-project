import React from "react";
import { Link } from "react-router";

const StudentListRow = student => {
  return (
    <tr>
      <td>
        <Link to={"/" + student.value.name}>{student.value.name}</Link>
        {/* <a href="" target="_blank">
          {student.value.name}
        </a> */}
      </td>
      <td>{student.value.courses}</td>
    </tr>
  );
};

export default StudentListRow;
