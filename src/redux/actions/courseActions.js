import * as courseAPI from '../../api/courseApi';

const CREATE_COURSE = 'CREATE_COURSE';
const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

const createCourse = (course) => {
  return { type: CREATE_COURSE, course };
};

const loadCourseSuccess = (courses) => {
  return { type: LOAD_COURSES_SUCCESS, courses };
};

const loadCourses = () => {
  return function (dispatch) {
    return courseAPI
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export {
  CREATE_COURSE,
  createCourse,
  LOAD_COURSES_SUCCESS,
  loadCourses,
  loadCourseSuccess,
};
