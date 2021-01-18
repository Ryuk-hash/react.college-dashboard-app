import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  students: [],
  results: 0,
  loading: false,
};

const fetchStudentsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchStudentsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    students: action.students,
    results: action.results,
  });
};

const fetchStudentsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STUDENTS_START:
      return fetchStudentsStart(state, action);

    case actions.FETCH_STUDENTS_SUCCESS:
      return fetchStudentsSuccess(state, action);

    case actions.FETCH_STUDENTS_FAIL:
      return fetchStudentsFail(state, action);

    default:
      return state;
  }
};

export default reducer;
