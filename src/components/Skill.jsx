import React, { useState } from 'react';

export const Skill = () => {
  const [option, setOption] = useState(0);
  return (
    <section id="skill" className="lg:p-12 max-sm:mt-24 max-lg:mt-24">
      <h1 className="font-bold pb-2 max-sm:pt-6 max-lg:pl-6 max-lg:pr-6 max-sm:p-2 max-sm:sticky max-sm:top-0  max-sm:pl-4 max-sm:bg-gradient-to-r from-[#000428] to-[#072f52]">SKILL</h1>
      <div className="judul flex justify-evenly max-lg:ml-6 max-lg:mr-6 bg-black max-sm:ml-4 max-sm:mr-4 text-white lg:p-4 max-sm:py-2 max-lg:py-4 rounded-t-md lg:text-xl lg:font-bold">
        <span className={option === 0 ? 'active' : ''} onClick={() => setOption(0)}>
          Front-end
        </span>
        <span className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>
          Back-end
        </span>
        <span className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>
          Language programming
        </span>
      </div>
      {option === 0 && (
        <div className="teknologi flex justify-center items-center h-96 bg-[rgb(10,17,44)] max-lg:ml-6 max-lg:mr-6 rounded-b-xl max-sm:ml-4 max-sm:mr-4">
          <ul className="flex flex-col text-lg font-medium text-[rgb(85,198,169)]">
            <li className="p-2">React js</li>
            <li className="p-2">Next js</li>
            <li className="p-2">tailwind</li>
          </ul>
        </div>
      )}
      {option === 1 && (
        <div className="teknologi flex justify-center items-center h-96 bg-[rgb(10,17,44)] max-lg:ml-6 max-lg:mr-6 max-sm:ml-4 max-sm:mr-4 rounded-b-xl">
          <ul className="flex flex-col text-lg font-medium text-[rgb(85,198,169)]">
            <li className="p-2">SpringBoot</li>
            <li className="p-2">Express</li>
            <li className="p-2">Postgresql</li>
          </ul>
        </div>
      )}
      {option === 2 && (
        <div className="teknologi flex justify-center items-center h-96 bg-[rgb(10,17,44)] max-lg:ml-6 max-lg:mr-6 max-sm:ml-4 max-sm:mr-4 rounded-b-xl">
          <ul className="flex flex-col text-lg font-medium  text-[rgb(85,198,169)]">
            <li className="p-2">Java</li>
            <li className="p-2">Javascript</li>
            <li className="p-2">Sql</li>
          </ul>
        </div>
      )}
    </section>
  );
};
