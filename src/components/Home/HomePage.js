import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../actions/studentActions";
import ReactFileReader from "react-file-reader";
import SelectInput from "../common/SelectInput";
import StudentList from "../student/StudentList";
import RadioButton from "../common/RadioButton";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: "option1",
      students: []
    };

    this.updateStudentState = this.updateStudentState.bind(this);
    this.handleRadioOptionChange = this.handleRadioOptionChange.bind(this);
    this.fetchStudents = this.fetchStudents.bind(this);
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.props.actions.loadStudents(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.props.actions.loadStudents(value);
          this.setState({ [key]: value });
        }
      }
    }
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
      this.props.actions.fetchStudents(studentNameList);
    };
    reader.readAsText(files[0]);
  }

  handleRadioOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  fetchStudents() {
    let temp = [
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
    ];
    let students_copy = this.state.students;
    temp.map(item => {
      students_copy.push(item);
    });
    this.setState({ students: students_copy });
    this.props.actions.fetchStudents(this.state.students);
  }

  render() {
    return (
      <div>
        <StudentList students={this.state.students} />
        <RadioButton
          selectedOption={this.state.selectedOption}
          onChange={this.handleRadioOptionChange}
        />
        {this.state.selectedOption === "option1" ? (
          <button className="btn btn-primary" onClick={this.fetchStudents}>
            Upload
          </button>
        ) : (
          <div />
        )}
        {this.state.selectedOption === "option2" ? (
          <ReactFileReader handleFiles={this.handleFiles} fileTypes={".csv"}>
            <button className="btn btn-primary">Upload</button>
          </ReactFileReader>
        ) : (
          <div />
        )}
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
