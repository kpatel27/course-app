import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../redux/actions/courseActions';

class CoursesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: '',
      },
    };
  }

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };

  displayCourses = () => {
    return this.props.courses.map((course, idx) => (
      <div key={idx}>{course.title}</div>
    ));
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Courses</h2>
        <h3>Add New Course</h3>
        <input
          type='text'
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type='submit' value='Add' />
        {this.displayCourses()}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CoursesPage);
