import React from 'react';
import './Content.scss';

import why from '../../images/images for grid/why.jpg';
import guitar from '../../images/images for grid/guitar.jpg';
import farm from '../../images/images for grid/farm.jpg';
import office from '../../images/images for grid/office.jpg';

import { motion, AnimatePresence } from 'framer-motion';

export const preLoad = () => {
  const imagesPreload = [why, guitar, farm, office];
  imagesPreload.forEach((image: any) => {
    const newImage: any = new Image();
    newImage.src = image;
    window[image] = newImage;
  });
};

export const Why = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className='contentself'
        key='why'
      >
        <div className='image__container'>
          <img src={why} alt='coding' className='image' />
        </div>
        <div className='description__wrapper'>
          <div className='description description--why'>
            <div className='description__header'>Why I choose SE...</div>
            <p className='description__body'>
              The reason I choose to dedicate myself to this is because I enjoy
              web development and I enjoy creating. I look at a blank screen
              like as if it is a drawing board where I can come up with
              something and make it turn to life. It gives me that same artistic
              feeling of playing the guitar. It is something that I can say I
              love to do.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Background = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className='contentself'
        key='origins'
      >
        <div className='image__container'>
          <img
            src={farm}
            alt='by Gabriel Jimenez on Unsplash'
            className='image'
          />
        </div>
        <div className='description__wrapper'>
          <div className='description'>
            <div className='description__header'>I come from...</div>
            <p className='description__body'>
              I come from a family of hard workers and self made individuals. My
              parents went from working in the Salinas valley fields and going
              to school at the same time, while raising two children, to
              becoming a nurse and a management technician respectively. It is
              from them that I get my belief that hard work and determination
              can accomplish everything and anything. This belief is what
              allowed me to go through college while being a full time worker
              and expand my knowledge of what I enjoy doing even outside of
              school, taking online courses and applying my learning when I
              could.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export const Hobby = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className='contentself'
        key='hobbies'
      >
        <div className='image__container'>
          <img src={guitar} alt='by Tony Rojas on Unsplash' className='image' />
        </div>
        <div className='description__wrapper'>
          <div className='description'>
            <div className='description__header'>
              When I'm not coding
              <div>
                <p className='description__body'>
                  When I'm not coding or designing potential projects, I can be
                  found either learning new songs on my guitar or lifting
                  weights. Playing the guitar is another way I can open my mind
                  to new creative ideas not only on how to play a certain melody
                  but also on how to come up with new designs and new ways to
                  tackle developing problems. As for lifting I enjoy being
                  active and trying to stay healthy so it is something that I
                  like to challenge myself with. Lifting gave me a stronger
                  sense of if I can put my mind to it, I can achieve it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export const Future = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className='contentself'
        key='future'
      >
        <div className='image__container'>
          <img
            src={office}
            alt='by İrfan Simsar on Unsplash'
            className='image'
          />
        </div>
        <div className='description__wrapper'>
          <div className='description description--future'>
            <div className='description__header'>My future goals...</div>
            <p className='description__body'>
              My future goal is to become the full product, I want to become a
              DevOps engineer and that means constant learning and working on new
              projects to expand my skillset in order to adapt to new challenges
              as efficiently as possible. It's a long path get where I want to
              go but everyday offers a new opportunity to get closer to new
              goals.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
