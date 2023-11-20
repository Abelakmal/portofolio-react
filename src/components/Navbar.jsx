import React from 'react';

const Navbar = () => {
  return (
    <div className="w-1/2 p-2">
      <h1 className="text-4xl font-bold mb-3">Abel Akmal</h1>
      <h2 className="text-xl">Full-Stack Develover</h2>
      <p id="prag" className="border-b-4 py-3 mb-2">
        Hello, I am a Web Developer who explains the Web with Javascript.
      </p>
      <a className=" hover:border-b-2" href="https://drive.google.com/file/d/1aMPjSS20Tf9XwvAiBcaeUCDopwOfHNQ9/view?usp=sharing">View Resume <i className="fa-solid fa-link fa-bounce"></i></a>
      <nav className="mt-28">
        <ul className='nav'>
          <li className="p-2 text-lg">
            <a href="#about" className="flex">
              <span className="line"></span>ABOUT
            </a>
          </li>
          <li className="p-2 text-lg">
            <a href="#skill" className='flex'>
              <span className="line"></span>SKILL
            </a>
          </li>
          <li className="p-2 text-lg">
            <a href="#project" className='flex'>
              <span className="line"></span>PROJECT
            </a>
          </li>
        </ul>
      </nav>
      <section className="mt-32">
        <ul className="sosmed flex">
          <li className="pr-5 ">
            <a href="https://wa.me/6285273415295">
              <i className="fa-brands fa-whatsapp text-4xl opacity-50 hover:opacity-100"></i>
            </a>
          </li>
          <li className="pr-5 ">
            <a href="https://github.com/Abelakmal">
              <i className="fa-brands fa-github text-4xl opacity-50 hover:opacity-100"></i>
            </a>
          </li>
          <li className="pr-5 ">
            <a href="#">
              <i className="fa-brands fa-linkedin text-4xl opacity-50 hover:opacity-100"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
