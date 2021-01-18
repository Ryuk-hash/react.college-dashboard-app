import * as actions from './actionTypes';
import axios from '../../axios-instance';

export const fetchStudentsSuccess = (results, students) => {
  return {
    type: actions.FETCH_STUDENTS_SUCCESS,
    results,
    students,
  };
};

export const fetchStudentsFail = (error) => {
  return {
    type: actions.FETCH_STUDENTS_FAIL,
    error,
  };
};

export const fetchStudentsStart = () => {
  return {
    type: actions.FETCH_STUDENTS_START,
  };
};

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(fetchStudentsStart());

    axios
      .get('/students')
      .then((res) => {
        const fetchedStudents = [];

        for (let key in res.data.data.students) {
          let finalobj = { ...res.data.data.students[key], id: key };

          delete finalobj._id;

          fetchedStudents.push(finalobj);
        }

        dispatch(fetchStudentsSuccess(res.data.results, fetchedStudents));
      })
      .catch((err) => {
        dispatch(fetchStudentsFail(err));
      });
  };
};
