import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../actions/studentActions";
import SelectInput from "../common/SelectInput";
import CourseListRow from "./../course/CourseListRow";

class SelectCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: "",
      courses: [],
      students: [],
      selectedCourses: [],
      selectedStudent: []
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.selectCourse = this.selectCourse.bind(this);
    this.registerCourses = this.registerCourses.bind(this);
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
          if (key == "courses") {
            this.props.actions.loadAvailableCourses(value);
          } else if (key == "students") {
            this.props.actions.loadStudents(value);
          }
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.props.actions.loadAvailableCourses(value);
          //   this.setState({ [key]: value });
        }
      }
    }
  }

  updateCourseState(event) {
    this.setState({ course: event.target.value });
  }

  selectCourse() {
    if (this.state.selectedCourses.length < 4) {
      const courses_copy = this.state.selectedCourses;
      const course = { id: 0, title: "" };
      course.id = courses_copy.length;
      course.title = this.state.course;
      courses_copy.push(course);
      this.setState({ selectedCourses: courses_copy });
      console.log("selected!!");
    } else {
      console.log("Selected 4 course");
    }
  }

  registerCourses() {
    this.props.actions.registerCourses(
      this.state.selectedCourses,
      this.props.params.id,
      this.state.students
    );
    this.setState({ selectedCourses: [] });
    console.log("Saved!!");
  }

  render() {
    return (
      <div>
        <h1>Select courses</h1>
        <h2>{this.props.params.name}</h2>
        <SelectInput
          name="course"
          label="Courses"
          onChange={this.updateCourseState}
          defaultOption="Select Course"
          options={this.state.courses} // takes courses?
          value={this.state.course}
        />

        <input
          type="submit"
          className="btn btn-primary"
          value={"Select"}
          onClick={this.selectCourse}
        />

        <input
          type="submit"
          className="btn btn-primary"
          value={"Register"}
          onClick={this.registerCourses}
        />

        <table className="table">
          <thead>
            <tr>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.selectedCourses.map(course => (
              <CourseListRow
                key={course.id}
                course={course}
                // onClickDelete={this.onClickDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

SelectCoursePage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
    courses: state.courses
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
)(SelectCoursePage);
