import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Intro } from './components/intro/Intro';
import { Love } from './components/love/Love';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import { Education } from './components/education/Education';
import { Outro } from './components/outro/Outro';
import { More } from './components/more/More';

import { Element } from 'react-scroll';
import { ThemeContextProvider } from './context/ThemeContext';

const App = () => {
  const [main, setMain] = useState<boolean>(true);

  useEffect(() => {
    let state = true;
    if (window.sessionStorage.getItem('stateOfApp') !== null) {
      if (window.sessionStorage.getItem('stateOfApp') === 'true') {
        state = true;
      } else {
        state = false;
      }
    } else {
      state = true;
    }

    setMain(state);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('stateOfApp', main.toString());
  }, [main]);

  return (
    <ThemeContextProvider>
      <div className='App' style={{ height: '100%', position: 'relative' }}>
        {main ? (
          <React.Fragment>
            <Navbar main={main} setMain={setMain} />
            <Element id='home-destination' name='home-destination'>
              <Intro />
            </Element>
            <Love />
            <Element id='projects-destination' name='projects-destination'>
              <Projects />
            </Element>
            <Element id='skills-destination' name='skills-destination'>
              <Skills />
            </Element>
            <Element id='education-destination' name='education-destination'>
              <Education />
            </Element>
            <Element id='contact-destination' name='contact-destination'>
              <Outro setMain={setMain} />
            </Element>
          </React.Fragment>
        ) : (
          <More main={main} setMain={setMain} />
        )}
      </div>
    </ThemeContextProvider>
  );
};

export default App;
