const CREATE_COURSE = 'CREATE_COURSE';

const createCourse = (course) => {
  return { type: CREATE_COURSE, course };
};

export { CREATE_COURSE, createCourse };
