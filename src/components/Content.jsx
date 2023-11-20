import React from 'react';
import { About } from './About';
import { Skill } from './Skill';
import { Project } from './Project';
import Footer from './Footer';

const Content = ({contentRef}) => {
  return (
    <main id='content' ref={contentRef} className="lg:w-1/2  h-screen lg:overflow-y-auto max-sm:p-0">
      <About />
      <Skill />
      <Project />
      <Footer/>
    </main>
  );
};

export default Content;
