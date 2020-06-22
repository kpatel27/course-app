import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../redux/actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import * as authorActions from '../redux/actions/authorsAction';

class CoursesPage extends Component {
  componentDidMount() {
    this.props.actions
      .loadCourses()
      .catch((error) => alert('Loading courses failed' + error));

    this.props.actions
      .loadAuthors()
      .catch((error) => alert('Loading authors failed' + error));
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
  function mapAuthorNameToCourse() {
    if (state.authors.length === 0) return [];

    return state.courses.map((course) => {
      return {
        ...course,
        authorName: state.authors.find(
          (author) => author.id === course.authorId
        ).name,
      };
    });
  }

  return {
    courses: mapAuthorNameToCourse(),
    authors: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
