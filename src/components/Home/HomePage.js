import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../actions/studentActions";
import ReactFileReader from "react-file-reader";
import SelectInput from "../common/SelectInput";
import StudentList from "../student/StudentList";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      //   student: Object.assign({}, this.props.student)
      //   students: {
      //     name: "Rob",
      //     courses: ["hi", "hihi"]
      //   }
    };

    this.updateStudentState = this.updateStudentState.bind(this);
  }

  updateStudentState(event) {
    const field = event.target.name;
    let student = this.state.student;
    student[field] = event.target.value;
    return this.setState({ student: student });
  }

  handleFiles(files) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let csvData = reader.result;
      let studentNameList = new Array();
      studentNameList = csvData.split(",");
      this.props.actions.loadStudents(studentNameList);
    };
    reader.readAsText(files[0]);
  }

  render() {
    let students = ["Paul Molive", "Anna Mull", "Gail Forcewind"];
    return (
      <div>
        <h1>Select CSV with secret Death Star statistics</h1>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={".csv"}>
          <button className="btn">Upload</button>
        </ReactFileReader>
        <StudentList students={students} />
      </div>

      //   <StudentList />
      //   <SelectInput
      //     name="studentId"
      //     label="Student"
      //     value="value"
      //     defaultOption="Select Student"
      //     options={students}
      //     onChange={this.updateStudentState}
      //   />
    );
  }
}

HomePage.propTypes = {
  student: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    students: state.students
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
