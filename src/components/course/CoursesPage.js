import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import { bindActionCreators } from "redux";
import CourseListRow from "./CourseListRow";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { id: 0, title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
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
          this.props.actions.loadCourses(value);
          //   this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.props.actions.loadCourses(value);
          //   this.setState({ [key]: value });
        }
      }
    }
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.id = this.props.courses.length;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
    this.setState({ course: { title: "" } });
  }

  onClickDelete(id) {
    this.props.actions.deleteCourse(id);
  }

  render() {
    return (
      <div>
        <h1>Managing courses</h1>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" onClick={this.onClickSave} />
        <table className="table">
          <thead>
            <tr>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {this.props.courses.map(course => (
              <CourseListRow
                key={course.id}
                course={course}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
