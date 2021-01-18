import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  colleges: [],
  results: 0,
  loading: false,
};

const fetchChartsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchChartsSuccess = (state, action) => {
  return updateObject(state, {
    colleges: action.colleges,
    results: action.results,
    loading: false,
  });
};

const fetchChartsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_CHARTS_START:
      return fetchChartsStart(state, action);

    case actions.FETCH_CHARTS_SUCCESS:
      return fetchChartsSuccess(state, action);

    case actions.FETCH_CHARTS_FAIL:
      return fetchChartsFail(state, action);

    default:
      return state;
  }
};

export default reducer;
