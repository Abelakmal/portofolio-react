import React from 'react';

const Navbar = () => {
  return (
    <div className="lg:w-1/2 p-2 lg:h-screen top-0 max-sm:p-4">
      <h1 className="text-4xl font-bold mb-3">Abel Akmal</h1>
      <h2 className="text-xl">Full-Stack Develover</h2>
      <p id="prag" className="border-b-4 py-3 mb-2">
        Hello, I am a Web Developer who explains the Web with Javascript.
      </p>
      <a className=" hover:border-b-2" href="https://drive.google.com/file/d/1aMPjSS20Tf9XwvAiBcaeUCDopwOfHNQ9/view?usp=sharing">View Resume <i className="fa-solid fa-link fa-bounce"></i></a>
      <nav className="mt-28 block max-sm:hidden">
        <ul className='nav'>
          <li className="p-2 text-lg  w-max">
            <a href="#about" className="flex active">
              <span className="line"></span>ABOUT
            </a>
          </li>
          <li className="p-2 text-lg  w-max">
            <a href="#skill" className='flex'>
              <span className="line"></span>SKILL
            </a>
          </li>
          <li className="p-2 text-lg  w-max">
            <a href="#project" className='flex'>
              <span className="line"></span>PROJECT
            </a>
          </li>
        </ul>
      </nav>
      <section className="lg:mt-32 max-sm:mb-32 max-sm:mt-8">
        <ul className="sosmed flex">
          <li className="pr-5 ">
            <a href="https://wa.me/6285273415295">
              <i className="fa-brands fa-whatsapp max-sm:text-2xl lg:text-4xl opacity-50 hover:opacity-100"></i>
            </a>
          </li>
          <li className="pr-5 ">
            <a href="https://github.com/Abelakmal">
              <i className="fa-brands fa-github max-sm:text-2xl lg:text-4xl opacity-50 hover:opacity-100"></i>
            </a>
          </li>
          <li className="pr-5 ">
            <a href="#">
              <i className="fa-brands fa-linkedin max-sm:text-2xl lg:text-4xl opacity-50 hover:opacity-100"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
