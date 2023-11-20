import React, { useState } from 'react';

export const Skill = () => {
  const [option, setOption] = useState(0);
  return (
    <section id="skill" className="lg:p-12 max-sm:mt-24 max-sm:m-4">
      <h1 className="font-bold pb-2 max-lg:sticky max-lg:top-0 max-sm:pl-4" style={{background: "linear-gradient(to right, #000428, #072f52)"}}>SKILL</h1>
      <div className="judul flex justify-evenly bg-black text-white lg:p-4 max-sm:py-2 rounded-t-md lg:text-xl lg:font-bold">
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
        <div className="teknologi flex justify-center items-center h-96 bg-cyan-950">
          <ul className="flex flex-col text-lg text-amber-200">
            <li className="p-2">React js</li>
            <li className="p-2">Next js</li>
            <li className="p-2">tailwind</li>
          </ul>
        </div>
      )}
      {option === 1 && (
        <div className="teknologi flex justify-center items-center h-96 bg-cyan-950">
          <ul className="flex flex-col text-lg text-amber-200">
            <li className="p-2">SpringBoot</li>
            <li className="p-2">Express</li>
            <li className="p-2">Postgresql</li>
          </ul>
        </div>
      )}
      {option === 2 && (
        <div className="teknologi flex justify-center items-center h-96 bg-cyan-950">
          <ul className="flex flex-col text-lg text-amber-200">
            <li className="p-2">Java</li>
            <li className="p-2">Javascript</li>
            <li className="p-2">Sql</li>
          </ul>
        </div>
      )}
    </section>
  );
};
