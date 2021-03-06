//Pannel.tsx

import React, { useState, useRef, useEffect } from 'react';
import './Pannel.scss';

export const Pannel: React.FC<Projects> = ({
  title,
  logo,
  icons,
  landing,
  link,
  description,
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);
  const [desExpand, setDesExpand] = useState(true);
  const [displayInfo, setDisplayInfo] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const resize = () => {
    if (container.current!.getBoundingClientRect().width <= 344.65625) {
      setDesExpand(false);
    } else {
      setDesExpand(true);
    }
  };

  return (
    <div
      key={`project project--${title.replace(/\s/g, '').toLocaleLowerCase()}`}
      ref={container}
      className={`project project--${title
        .replace(/\s/g, '')
        .toLocaleLowerCase()} project--${expand ? 'expand' : 'noExpand'}`}
      onMouseEnter={() => {
        setExpand(true);
      }}
      onMouseLeave={() => {
        setExpand(false);
      }}
    >
      <div className={`project--${expand ? 'expand' : 'noExpand'}__title`}>
        {title}
      </div>
      <div className='content'>
        <div className='container--icons'>
          {icons.map((icon) => (
            <img
              key={icon}
              className='content__icons'
              src={icon}
              alt='an icon'
            />
          ))}
        </div>
        <img onMouseOver={() => setDisplayInfo(true)} onMouseLeave={()=> setDisplayInfo(false)} className={`project__landing  project__landing--${displayInfo ? 'pop' : ""}`} src={landing} alt='landing page' />
        <div className={`project__description project__description--${displayInfo ? 'show' : 'hide'}`}>
          <div className="project__description__text">
          {desExpand && description}
          </div>
        </div>
        <a
          href={link}
          rel='noopener noreferrer'
          target='_blank'
          className='project__github--wrapper--link'
        >
          <div className='project__github--wrapper project__github--wrapper--projects'>
            <svg
              className='project__github'
              role='img'
              viewBox='0 0 24 24'
              height='90%'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};
