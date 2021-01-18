import React from 'react';
import { Bar, Pie, Doughnut, Polar, defaults } from 'react-chartjs-2';
import classes from './Chart.module.css';

import settings from './settings';

const Chart = ({ data, type, clicked }) => {
  let chart = null;

  const chartProps = settings(data, type);

  defaults.global.legend = false;
  defaults.global.maintainAspectRatio = false;
  defaults.global.title.display = true;
  defaults.global.responsive = true;
  defaults.global.title.fontSize = 18;
  defaults.global.title.fontColor = '#333';

  switch (type) {
    case 'pie':
      chart = (
        <Pie data={chartProps.data} {...chartProps.otherSettings} getElementAtEvent={clicked} />
      );
      break;

    case 'doughnut':
      chart = <Doughnut data={chartProps.data} {...chartProps.otherSettings} />;
      break;

    case 'polar':
      chart = <Polar data={chartProps.data} {...chartProps.otherSettings} />;
      break;

    default:
      chart = <Bar data={chartProps.data} {...chartProps.otherSettings} />;
  }

  return <div className={classes.chartDiv}>{chart}</div>;
};

export default Chart;
