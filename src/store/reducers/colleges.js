import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  colleges: null,
  results: 0,
  loading: false,
};

const fetchCollegesStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchCollegesSuccess = (state, action) => {
  return updateObject(state, {
    colleges: action.colleges,
    results: action.results,
    loading: false,
  });
};

const fetchCollegesFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_COLLEGES_START:
      return fetchCollegesStart(state, action);

    case actions.FETCH_COLLEGES_SUCCESS:
      return fetchCollegesSuccess(state, action);

    case actions.FETCH_COLLEGES_FAIL:
      return fetchCollegesFail(state, action);

    default:
      return state;
  }
};

export default reducer;
