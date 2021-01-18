import * as actions from './actionTypes';
import axios from '../../axios-instance';

export const fetchChartsSuccess = (results, colleges) => {
  return {
    type: actions.FETCH_CHARTS_SUCCESS,
    results,
    colleges,
  };
};

export const fetchChartsFail = (error) => {
  return {
    type: actions.FETCH_CHARTS_FAIL,
    error,
  };
};

export const fetchChartsStart = () => {
  return {
    type: actions.FETCH_CHARTS_START,
  };
};

export const fetchCharts = (urls) => {
  return (dispatch) => {
    dispatch(fetchChartsStart());

    urls = urls.map((eachURL) => {
      return '/colleges' + eachURL;
    });

    const fetchJson = (url) => axios.get(url);

    Promise.all(urls.map(fetchJson))
      .then(([chart1, chart2, chart3]) => {
        const fetchedColleges = [
          { chart: chart1.data.colleges, results: chart1.data.results, type: 'doughnut' },
          { chart: chart2.data.data.colleges, results: chart2.data.results, type: 'pie' },
          { chart: chart3.data.data.colleges, results: chart3.data.results, type: 'bar' },
        ];
        let results = 0;
        fetchedColleges.forEach((item) => (results += item.results));

        dispatch(fetchChartsSuccess(results, fetchedColleges));
      })

      .catch((err) => {
        dispatch(fetchChartsFail(err));
      });
  };
};
