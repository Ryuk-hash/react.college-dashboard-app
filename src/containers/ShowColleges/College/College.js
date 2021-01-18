import React from 'react';
import classes from './College.module.css';

const College = ({ college }) => {
  let courses = college.courses.map((course) => {
    return (
      <li key={course} className={classes.ListItem}>
        {course}
      </li>
    );
  });

  return (
    <section className={classes.Container}>
      <div className={classes.Card}>
        <h1>{college.name}</h1>

        <div className={classes.Address}>
          <p className={classes.Title}>
            {college.address.country + ', ' + college.address.state + ', ' + college.address.city}
          </p>
        </div>

        <div className={classes.Students}>
          <p>Students</p>
          <button>{college.students}</button>
        </div>

        <div className={classes.Courses}></div>
        <p>Courses Offered</p>
        <ul className={classes.List}>{courses}</ul>
      </div>
    </section>
  );
};

export default College;
