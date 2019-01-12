import React, { PropTypes } from "react";

const CourseListRow = ({ course, onClickDelete }) => {
  return (
    <tr>
      <td>{course.title}</td>
      <td>
        <button onClick={() => onClickDelete(course.title)}>Delete</button>
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: React.PropTypes.object.isRequired,
  onClickDelete: React.PropTypes.func.isRequired
};

export default CourseListRow;
