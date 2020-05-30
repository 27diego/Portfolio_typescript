import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Outro.scss';

import linkedin from '../../images/brand logos/linkedin.svg';
import gmail from '../../images/brand logos/gmail.svg';
import github from '../../images/brand logos/github.svg';

export const Outro: React.FC<OutroProps> = ({ setMain }) => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const context = useContext(ThemeContext);
  const { theme } = context;

  const change = (type: string, value: string) => {
    console.log(type);
    switch (type) {
      case 'name':
        setForm({ ...form, name: value });
        break;
      case 'subject':
        setForm({ ...form, subject: value });
        break;
      case 'email':
        setForm({ ...form, email: value });
        break;
      case 'message':
        setForm({ ...form, message: value });
        break;
      default:
        return;
    }
  };

  return (
    <div className={`Container--Outro Container--Outro--${theme}`}>
      <div className='container--form'>
        <form className={`form form--${theme}`}>
          <div className={`form__header form__header--${theme}`}>
            Contact Me
          </div>
          <input
            value={form.name}
            onChange={(e) => change('name', e.target.value)}
            className={`form__name form__input form__input--${theme}`}
            placeholder='Name'
            type='text'
            required
          />
          <input
            value={form.subject}
            onChange={(e) => change('subject', e.target.value)}
            className={`form__subject form__input form__input--${theme}`}
            placeholder='Subject'
            type='text'
            required
          />
          <input
            value={form.email}
            onChange={(e) => change('email', e.target.value)}
            className={`form__email form__input form__input--${theme}`}
            placeholder='Email'
            type='email'
            required
          />
          <textarea
            value={form.message}
            onChange={(e) => change('message', e.target.value)}
            className={`form__message form__input form__input--${theme}`}
            placeholder='Message'
            required
          />

          <div className={`form__outro form__outro--${theme}`}>
            I am interested in freelancing opportunities and would love to help
            you on your next project! Send me a message and we’ll go from there.
          </div>

          <button className='btn--Oform'>OK!</button>
        </form>
      </div>
      <div className='container--links'>
        <div className={`links links--${theme} links--1`}>Quick Links</div>
        <div
          className={`links__icon--container links__icon--container--${theme} links__icon--linkedin`}
        >
          <a
            href='https://www.linkedin.com/in/diego-vega-maravilla-493470155/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img
              src={linkedin}
              className='links__icon links__icon--linkedin'
              alt='linkedin logo'
            />
          </a>
        </div>
        <div
          className={`links__icon--container links__icon--container--${theme} links__icon--gmail`}
        >
          <img
            src={gmail}
            className='links__icon links__icon--gmail'
            alt='gmail logo'
          />
        </div>
        <div
          className={`links__icon--container links__icon--container--${theme} links__icon--github`}
        >
          <a
            href='https://github.com/27diego'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img
              src={github}
              className='links__icon links__icon--github'
              alt='github logo'
            />
          </a>
        </div>
        <div
          className={`links__icon--container links__icon--container--${theme} links__icon--my`}
        >
          <div onClick={() => setMain(false)} className='links__icon--my'>
            More about me
          </div>
        </div>
        <div className={`links links--${theme} links--2`}>Or View My Work</div>
      </div>
    </div>
  );
};
