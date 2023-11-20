import React, { useState } from 'react';

export const Skill = () => {
  const [option, setOption] = useState(0);
  return (
    <div id="skill" className="p-12">
      <h1 className="font-bold pb-2">SKILL</h1>
      <div className="judul flex justify-evenly bg-black text-white p-4 rounded-t-md text-xl font-bold">
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
    </div>
  );
};
