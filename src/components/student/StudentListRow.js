import React from "react";

const StudentListRow = student => {
  return (
    <tr>
      <td>
        <a href="" target="_blank">
          {student.value.name}
        </a>
      </td>
      <td>{student.value.courses}</td>
    </tr>
  );
};

export default StudentListRow;
