import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../redux/actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
  componentDidMount() {
    this.props.actions
      .loadCourses()
      .catch((error) => alert('Loading courses failed' + error));
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
