import React from 'react';

export const About = () => {
  return (
    <section id="about" className="lg:p-12 ">
      <h1 className="text-center font-bold pb-2 y max-sm:pt-6  max-lg:pl-6 max-lg:pr-6 max-sm:sticky max-sm:top-0 max-lg:w-full max-sm:bg-gradient-to-r from-[#000428] to-[#072f52]">ABOUT</h1>
      <p className="p1 mb-5 max-sm:m-6 max-lg:ml-6 max-lg:mr-6">
        I have been learning coding since 1st grade in high school. My interest in the world of coding emerged because I was curious about how programs are created. Since the desire to understand how the program works, I started studying
        programming. Initially, I was interested in creating an IoT program because I was very curious about how an object could be controlled via a remote. Turns out, this involves a low-level programming language, such as Java. Once I
        started understanding Java, I realized that this language is not only used for IoT, but also for various types of programs, including creating websites.
      </p>
      <p className="p2 max-sm:m-6 max-lg:ml-6 max-lg:mr-6">
        From my knowledge of the web world with Java, I started to become more interested in the web world. I know that there is a simpler and more powerful language for web development, namely Javascript. After I got to know Javascript, I
        realized that this language is simpler than Java. When I discovered this, I became more interested in Javascript, and now I use Javascript more often for my latest projects.
      </p>
    </section>
  );
};
