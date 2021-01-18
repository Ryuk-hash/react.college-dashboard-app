import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ShowStudents.module.css';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Table from '../../components/UI/Table/Table';
import Modal from '../../components/UI/Modal/Modal';
import Student from './Student/Student';

class ShowStudents extends Component {
  state = {
    studentSelected: false,
    selectedStudent: null,
  };

  componentDidMount() {
    this.props.onFetchStudents();
  }

  studentSelectedHandler = (id) => {
    this.setState({ studentSelected: true, selectedStudent: id });
  };

  studentUnselectHandler = () => {
    this.setState({ studentSelected: false, selectedStudent: null });
  };

  filterOut = (array) => {};

  render() {
    let students = <Spinner />;
    let student = null;

    if (!this.props.loading) {
      const tableSettings = {
        striped: true,
        bordered: true,
        hover: true,
        size: 'lg',
        responsive: true,
      };
      const tableHeaders = ['#', 'Name', 'College', 'Batch'];
      const tableData = this.props.students.map((elem) => {
        return {
          id: elem.id,
          name: elem.name,
          college: elem.college.name,
          year: elem.batchyear,
        };
      });

      students = (
        <Table
          tableSettings={tableSettings}
          tableHeaders={tableHeaders}
          tableData={tableData}
          results={this.props.results}
          clicked={this.studentSelectedHandler}
        />
      );

      if (this.state.selectedStudent) {
        let modifiedStudentProps = { ...this.props.students[this.state.selectedStudent] };
        modifiedStudentProps['college'] = modifiedStudentProps.college.name;

        student = (
          <Modal show={this.state.studentSelected} modalClosed={this.studentUnselectHandler}>
            <Student student={modifiedStudentProps} />
          </Modal>
        );
      }
    }

    return (
      <section className={classes.Settings}>
        {student}
        {students}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students.students,
    results: state.students.results,
    loading: state.students.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStudents: () => dispatch(actions.fetchStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ShowStudents, axios));
