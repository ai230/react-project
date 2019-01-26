import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../actions/studentActions";
import SelectInput from "../common/SelectInput";

class SelectCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: ""
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.onSave = this.onSave.bind(this);
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
          this.props.actions.loadAvailableCourses(value);
          //   this.setState({ [key]: value });
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

  onSave() {
    debugger;
    this.props.actions.registerCourses(this.state.course);
    console.log("Saved!!");
  }

  render() {
    // const Courses = [
    //   { id: 1, title: "aaa" },
    //   { id: 2, title: "bbb" },
    //   { id: 3, title: "ccc" }
    // ];
    return (
      <div>
        <h1>Select courses</h1>
        <h2>{this.props.params.name}</h2>
        <SelectInput
          name="course"
          label="Courses"
          onChange={this.updateCourseState}
          defaultOption="Select Course"
          options={this.props.students} // takes courses?
          value={this.state.course}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value={"Register"}
          onClick={this.onSave}
        />
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
