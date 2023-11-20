import React from 'react';
import figting from '../assets/figting.jpg';
import ig_clone from '../assets/ig-clone.png';
import api from '../assets/api.jpg';

export const Project = () => {
  return (
    <section id="project" className="lg:p-12  max-lg:mt-24 ">
      <h1 className="font-bold pb-2 max-sm:pt-6 max-lg:pl-6 max-lg:pr-6 max-sm:p-2 max-sm:sticky max-sm:top-0  max-sm:mt-24 max-sm:bg-gradient-to-r from-[#000428] to-[#072f52]">PROJECT</h1>
      <ul>
        <li className="figting bg-cyan-950 p-5 mb-5 max-sm:ml-4 max-sm:mr-4 max-lg:ml-6 max-lg:mr-6 rounded">
          <a href="legends-fight/index.html">
            <h2 className="text-lg mb-2">
              Legend Fight <i className="ml-2 fa-solid fa-spinner fa-spin"></i>
            </h2>
            <img src={figting} alt="game figting" height="60" width="80" />
            <p className="mb-4">Mengembangkan game figting web dengan menerapakan canvas dan class javascript dengan pergerakan Caracter game yang smooth</p>
            <ul className="teknologi">
              <span className="bg-green-400 text-black p-1 rounded m-2">Javascript</span>
              <span className="bg-green-400 text-black p-1 rounded m-2">Canvas</span>
              <span className="bg-green-400 text-black p-1 rounded m-2">Game</span>
            </ul>
          </a>
        </li>
        <li className="instagram-clone bg-cyan-950 max-lg:ml-6 max-lg:mr-6 p-5 mb-5 max-sm:ml-4 max-sm:mr-4 rounded">
          <a href="legends-fight.abelakmal/index.html">
            <h2 className="text-lg mb-2">
              Instagram <i className="ml-2 fa-solid fa-spinner fa-spin"></i>
            </h2>
            <img src={ig_clone} alt="clone instagram" height="60" width="80" />
            <p className="mb-4">Membuat clone web instagram dengan React js dengan clone bagian home dari Instagram</p>
            <ul className="teknologi">
              <span className="bg-green-400 text-black p-1 rounded m-2">ReactJs</span>
              <span className="bg-green-400 text-black p-1 rounded m-2">Javascript</span>
              <span className="bg-green-400 text-black p-1 rounded m-2">MediaSosial</span>
            </ul>
          </a>
        </li>
        <li className="Api bg-cyan-950 p-5 max-lg:ml-6 max-lg:mr-6 mb-5 max-sm:ml-4 max-sm:mr-4 rounded">
          <a href="https://github.com/Abelakmal/E-commerce">
            <h2 className="text-lg mb-2">
              Api E-commerce <i className="ml-2 fa-solid fa-check fa-beat"></i>
            </h2>
            <img src={api} alt="api" height="60" width="80" />
            <p className="mb-2">Membuat API E-commerce sederhana dengan berbagai fitur untuk interaksi user dan admin</p>
            <ul className="teknologi">
              <span className="bg-green-400 text-black p-1 rounded m-2">Java</span>
              <span className="bg-green-400 text-black p-1 rounded m-2">SpringBoot</span>
              <span className="bg-green-400 text-black p-1 rounded m-2">Api</span>
            </ul>
          </a>
        </li>
      </ul>
    </section>
  );
};
