import React from "react";
import SelectInput from "../common/SelectInput";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      student: Object.assign({}, this.props.student)
    };

    this.updateStudentState = this.updateStudentState.bind(this);
  }

  updateStudentState(event) {
    const field = event.target.name;
    let student = this.state.student;
    student[field] = event.target.value;
    return this.setState({ student: student });
  }

  render() {
    let students = ["Paul Molive", "Anna Mull", "Gail Forcewind"];
    return (
      <SelectInput
        name="studentId"
        label="Student"
        value="value"
        defaultOption="Select Student"
        options={students}
        onChange={this.updateStudentState}
      />
    );
  }
}

export default HomePage;
