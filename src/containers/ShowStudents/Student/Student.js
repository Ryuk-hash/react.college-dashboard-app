import React from 'react';
import classes from './Student.module.css';
import { FaUniversity } from 'react-icons/fa';
import { IoMdPerson, IoMdTime } from 'react-icons/io';
import { SiSkillshare } from 'react-icons/si';

const Student = ({ student }) => {
  let skills = student.skills.map((skill) => {
    return (
      <li key={skill.trim()} className={classes.ListItem}>
        {skill}
      </li>
    );
  });

  return (
    <section className={classes.Container}>
      <div className={classes.Card}>
        <IoMdPerson className={classes.Icons} />
        <h1 className={classes.Heading}>{student.name}</h1>

        <div className={classes.College}>
          <FaUniversity className={classes.Icons} />
          <p className={classes.Title}>{student.college}</p>
        </div>

        <div className={classes.Year}>
          <IoMdTime className={classes.Icons} />
          <p>{student.batchyear}</p>
        </div>

        <div className={classes.Skills}>
          <SiSkillshare className={classes.Icons} />
          <p>Skills</p>
        </div>
        <ul className={classes.List}>{skills}</ul>
      </div>
    </section>
  );
};

export default Student;
