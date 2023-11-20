import React from 'react';
import { About } from './About';
import { Skill } from './Skill';
import { Project } from './Project';
import Footer from './Footer';

const Content = ({contentRef}) => {
  return (
    <main id='content' ref={contentRef} className="w-1/2 h-screen overflow-y-auto">
      <About />
      <Skill />
      <Project />
      <Footer/>
    </main>
  );
};

export default Content;
