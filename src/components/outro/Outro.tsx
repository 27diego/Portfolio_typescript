import React, { useState, useContext, useEffect, useRef } from 'react';
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

  const [more, setMore] = useState(true);

  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current!.getBoundingClientRect().width <= 500) {
      setMore(false);
    }
  }, []);

  const context = useContext(ThemeContext);
  const { theme } = context;

  const emailSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setForm({ name: '', subject: '', email: '', message: '' });
  };

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
    <div
      ref={container}
      className={`Container--Outro Container--Outro--${theme}`}
    >
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
            disabled
          />
          <input
            value={form.subject}
            onChange={(e) => change('subject', e.target.value)}
            className={`form__subject form__input form__input--${theme}`}
            placeholder='Subject'
            type='text'
            required
            disabled
          />
          <input
            value={form.email}
            onChange={(e) => change('email', e.target.value)}
            className={`form__email form__input form__input--${theme}`}
            placeholder='diego.vops@gmail.com'
            type='email'
            required
            disabled
          />
          <textarea
            value={form.message}
            onChange={(e) => change('message', e.target.value)}
            className={`form__message form__input form__input--${theme}`}
            placeholder='Still in development, please contact me on the email address above!!'
            required
            disabled
          />

          <div className={`form__outro form__outro--${theme}`}>
            I am interested in freelancing opportunities and would love to help
            you on your next project! Send me a message and we’ll go from there.
          </div>

          <button onClick={(e) => emailSubmit(e)} className='btn--Oform'>
            OK!
          </button>
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
              className={`links__icon links__icon--github links__icon--github--${theme}`}
              alt='github logo'
            />
          </a>
        </div>
        <div
          className={`links__icon--container links__icon--container--${theme} links__icon--my`}
        >
          <div onClick={() => setMain(false)} className='links__icon--my'>
            {more ? (
              'About Me'
            ) : (
              <svg
                className={`moreIcon moreIcon--${theme}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <title>ionicons-v5-j</title>
                <path d='M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM385.32,375.25a4,4,0,0,1-6.14-.32,124.27,124.27,0,0,0-32.35-29.59C321.37,329,289.11,320,256,320s-65.37,9-90.83,25.34a124.24,124.24,0,0,0-32.35,29.58,4,4,0,0,1-6.14.32A175.32,175.32,0,0,1,80,259C78.37,161.69,158.22,80.24,255.57,80S432,158.81,432,256A175.32,175.32,0,0,1,385.32,375.25Z' />
                <path d='M256,144c-19.72,0-37.55,7.39-50.22,20.82s-19,32-17.57,51.93C191.11,256,221.52,288,256,288s64.83-32,67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39,151.44,275.59,144,256,144Z' />
              </svg>
            )}
          </div>
        </div>
        <div className={`links links--${theme} links--2`}>Or View My Work</div>
      </div>
    </div>
  );
};
