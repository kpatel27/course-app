import * as authorAPI from '../../api/authorApi';

const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';

const loadAuthorsSuccess = (authors) => {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
};

const loadAuthors = () => {
  return function (dispatch) {
    return authorAPI
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export { LOAD_AUTHORS_SUCCESS, loadAuthors };
