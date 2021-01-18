import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Dashboard.module.css';
import * as actions from '../../store/actions/index';
import Chart from '../../components/DashboardItems/Chart/Chart';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-instance';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Dashboard extends Component {
  state = {
    finalLinks: [
      '/60020f692816eb02a46c0d15/colleges-within/264/unit/km/having-students/300',
      '?students[gt]=400',
      '?courses=BBA',
    ],
  };

  componentDidMount() {
    this.props.onFetchCharts(this.state.finalLinks);
  }

  // handleChartClick = (element) => {
  //   const { datasets, labels } = element[0]._chart.tooltip._data;
  //   const datasetIndex = element[0]._datasetIndex;
  //   const dataIndex = element[0]._index;

  //   alert(`${labels[dataIndex]}: ${datasets[datasetIndex].data[dataIndex]}`);

  //   const selectedLabel = labels[dataIndex];
  //   const selectedLabelValue = datasets[datasetIndex].data[dataIndex];

  //   this.setState({ selectedRecord: { selectedLabel, selectedLabelValue } });
  // };

  render() {
    let charts = <Spinner />;
    if (!this.props.loading) {
      charts = this.props.charts.map(({ chart, type }, index) => {
        return (
          <div key={index} className={classes.DashboardItem}>
            <Chart data={chart} type={type} clicked={this.handleChartClick} />
          </div>
        );
      });
    }

    return <section className={classes.Dashboard}>{charts}</section>;
  }
}

const mapStateToProps = (state) => {
  return {
    charts: state.charts.colleges,
    results: state.charts.results,
    loading: state.charts.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCharts: (links) => dispatch(actions.fetchCharts(links)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Dashboard, axios));
