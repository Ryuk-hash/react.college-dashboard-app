import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ShowColleges.module.css';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Table from '../../components/UI/Table/Table';
import Modal from '../../components/UI/Modal/Modal';
import College from './College/College';

class ShowColleges extends Component {
  state = {
    collegeSelected: false,
    selectedCollege: null,
  };

  componentDidMount() {
    this.props.onFetchColleges();
  }

  collegeSelectedHandler = (id) => {
    this.setState({ collegeSelected: true, selectedCollege: id });
  };

  collegeUnselectHandler = () => {
    this.setState({ collegeSelected: false, selectedCollege: null });
  };

  render() {
    let colleges = <Spinner />;
    let college = null;

    if (!this.props.loading && this.props.colleges) {
      const tableSettings = {
        striped: true,
        bordered: true,
        hover: true,
        size: 'lg',
        responsive: true,
      };

      const tableHeaders = ['#', 'Name', '# Students', 'Foundation Year', 'Country'];

      const tableData = this.props.colleges.map((elem) => {
        return {
          id: elem.id,
          name: elem.name,
          students: elem.students,
          year: elem.year,
          country: elem.address.country,
        };
      });

      colleges = (
        <Table
          tableSettings={tableSettings}
          tableHeaders={tableHeaders}
          tableData={tableData}
          results={this.props.results}
          clicked={this.collegeSelectedHandler}
        />
      );

      if (this.state.selectedCollege) {
        college = (
          <Modal show={this.state.collegeSelected} modalClosed={this.collegeUnselectHandler}>
            <College college={this.props.colleges[this.state.selectedCollege]} />
          </Modal>
        );
      }
    }

    return (
      <section className={classes.Settings}>
        {college}
        {colleges}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    colleges: state.colleges.colleges,
    results: state.colleges.results,
    loading: state.colleges.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchColleges: () => dispatch(actions.fetchColleges()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ShowColleges, axios));
