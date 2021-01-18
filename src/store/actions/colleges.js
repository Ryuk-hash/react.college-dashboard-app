import * as actions from './actionTypes';
import axios from '../../axios-instance';

export const fetchCollegesSuccess = (results, colleges) => {
  return {
    type: actions.FETCH_COLLEGES_SUCCESS,
    results,
    colleges,
  };
};

export const fetchCollegesFail = (error) => {
  return {
    type: actions.FETCH_COLLEGES_FAIL,
    error,
  };
};

export const fetchCollegesStart = () => {
  return {
    type: actions.FETCH_COLLEGES_START,
  };
};

export const fetchColleges = () => {
  return (dispatch) => {
    dispatch(fetchCollegesStart());

    let url = '/colleges';

    axios
      .get(url)
      .then((res) => {
        const fetchedColleges = [];

        for (let key in res.data.data.colleges) {
          let finalobj = { ...res.data.data.colleges[key], id: key };

          delete finalobj._id;

          fetchedColleges.push(finalobj);
        }

        dispatch(fetchCollegesSuccess(res.data.results, fetchedColleges));
      })
      .catch((err) => {
        dispatch(fetchCollegesFail(err));
      });
  };
};

// export const fetchColleges = (hasParams, urls) => {
//   return (dispatch) => {
//     dispatch(fetchCollegesStart());

//     let url = '/colleges';

//     switch (hasParams) {
//       case true:
//         urls = urls.map((eachURL) => {
//           return url + eachURL;
//         });

//         const fetchJson = (url) => axios.get(url);

//         Promise.all(urls.map(fetchJson))
//           .then(([chart1, chart2, chart3]) => {
//             const fetchedColleges = [
//               { chart: chart1.data.colleges, results: chart1.data.results, type: 'doughnut' },
//               { chart: chart2.data.data.colleges, results: chart2.data.results, type: 'pie' },
//               { chart: chart3.data.data.colleges, results: chart3.data.results, type: 'doughnut' },
//             ];
//             let results = 0;
//             fetchedColleges.forEach((item) => (results += item.results));

//             dispatch(fetchCollegesSuccess(results, fetchedColleges));
//           })

//           .catch((err) => {
//             dispatch(fetchCollegesFail(err));
//           });
//         break;

//       default:
//         axios
//           .get(url)
//           .then((res) => {
//             const fetchedColleges = [];

//             for (let key in res.data.data.colleges) {
//               let finalobj = { ...res.data.data.colleges[key], id: key };

//               delete finalobj._id;

//               fetchedColleges.push(finalobj);
//             }
//             dispatch(fetchCollegesSuccess(res.data.results, fetchedColleges));
//           })
//           .catch((err) => {
//             dispatch(fetchCollegesFail(err));
//           });
//     }
//   };
// };
