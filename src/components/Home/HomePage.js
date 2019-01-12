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
      students: [
        {
          name: "Paul Molive",
          courses: []
        },
        {
          name: "Anna Mull",
          courses: ["Hi", "Hihi"]
        },
        {
          name: "Gail Forcewind",
          courses: []
        }
      ]
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
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={".csv"}>
          <button className="btn">Upload</button>
        </ReactFileReader>
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

HomePage.propTypes = {
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
