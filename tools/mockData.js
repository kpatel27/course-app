const courses = [
  {
    id: 1,
    title: 'Learn React for Beginners',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 2,
    title: 'Learn JavaScript for Beginners',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 3,
    title: 'Learn jQuery for Beginners',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 4,
    title: 'Learn Redux for Beginners',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 5,
    title: 'Write Clean & Modular Code',
    authorId: 2,
    category: 'Software Practices',
  },
  {
    id: 6,
    title: 'Writing Data Intensive Apps',
    authorId: 2,
    category: 'Software Architecture',
  },
  {
    id: 7,
    title: 'Learn Ruby for Beginners',
    authorId: 2,
    category: 'Ruby',
  },
];

const authors = [
  { id: 1, name: 'Krunal Patel' },
  { id: 2, name: 'John Smith' },
];

const newCourse = {
  id: null,
  title: '',
  authorId: null,
  category: '',
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
