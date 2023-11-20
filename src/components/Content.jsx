import React from 'react';
import { About } from './About';
import { Skill } from './Skill';
import { Project } from './Project';
import Footer from './Footer';

const Content = () => {
  return (
    <div className="w-1/2 overflow-y-scroll scroll-smooth">
      <About />
      <Skill />
      <Project />
      <Footer/>
    </div>
  );
};

export default Content;
