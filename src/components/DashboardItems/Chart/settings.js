import colors from './colors';

const settings = (data, type) => {
  let finalObj = {};

  let labels = data.map((item) => {
    return item.name;
  });

  let finalData = data.map((item) => {
    return item.students;
  });

  switch (type) {
    // case:
    // all colleges having students greater than 400
    case 'pie':
      finalObj = {
        data: {
          labels,
          datasets: [
            {
              data: finalData,
              backgroundColor: colors,
            },
          ],
        },
        otherSettings: { options: { title: { text: 'Colleges having students > 400' } } },
      };
      break;

    // case:
    // all colleges within specified radius of a given college and having some students +/- that range
    case 'doughnut':
      finalObj = {
        data: {
          labels,
          datasets: [
            {
              data: finalData,
              backgroundColor: colors,
            },
          ],
        },
        otherSettings: {
          options: {
            title: { text: 'Colleges within provided radius' },
          },
        },
      };
      break;

    // case :
    // all colleges offering BBA and other courses
    default:
      finalObj = {
        data: {
          labels,
          datasets: [
            {
              data: finalData,
              backgroundColor: colors,
            },
          ],
        },
        otherSettings: {
          options: {
            title: { text: 'Colleges offering BBA + other courses' },
            scales: { xAxes: [{ ticks: { display: false } }] },
            maintainAspectRatio: false,
          },
        },
      };
  }

  return finalObj;
};

export default settings;
