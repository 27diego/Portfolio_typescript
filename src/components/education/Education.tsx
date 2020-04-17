import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Education.scss';

import school from '../../images/brand logos/csumblogo.png';
import { Course } from './Course';

import networks from '../../images/Icons/wifi-24px.svg';
import databases from '../../images/Icons/cloud-24px.svg';
import algorithms from '../../images/Icons/category-24px.svg';
import os from '../../images/Icons/developer_board-24px.svg';

export const Education: React.FC = () => {
  const [courses] = useState([
    {
      title: 'OS',
      icon: os,
      description:
        'Covered operating systems at a high and low level including hardware and design of an operating system. Learned the Linux command line, writing shell scripts, and work with GNU utilities such as awk, sed, and make. Also covered process management, memory management, file systems and concurrency',
    },
    {
      title: 'Databases',
      icon: databases,
      description:
        'Studied database use and design with focus on relational databases and a touch on NoSQL. Focused on designing relational schemas, writting SQL queries, accessing DBs programmatically and performing database administration.',
    },
    {
      title: 'Algorithms',
      icon: algorithms,
      description:
        'Learned fundemental algorithm design techniques and important data structures to solve problems involving recursion, hashes, heaps, graphs, trees, sorting and searching, brute force, divide-and-conquer, decrease-and-conquer etc. and applied them to solve problems from a Facebook engineer.',
    },
    {
      title: 'Networks',
      icon: networks,
      description:
        'Learned about Networking ranging through Telecomm and Data Comm technology, internetworking protocols such as TCP and IP. Covered Local Area Network and Wide Area Network and the way the Internet works at a high and low level as well as emerging trends like voice other the network.',
    },
  ]);

  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div className={`Container--Education Container--Education--${theme}`}>
      <div className="EdHeader">
        <div className="wrapper--text">
          <span className={`EdHeader__degree EdHeader__degree--${theme}`}>
            B.S. <br /> Computer Science Software Engineer
          </span>
        </div>
        <img className="EdHeader__img" src={school} alt="csumb logo" />
        <div className="EdHeader__school">@ CSUMB</div>
      </div>
      <div className="courses">
        {courses.map((item) => (
          <Course
            key={item.title}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
