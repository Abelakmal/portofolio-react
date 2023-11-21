import next from '../assets/next-js.png';
import tailwind from '../assets/tailwind-css.png';
import spring from '../assets/spring.png';
import express from '../assets/express-js.png';
import postgresql from '../assets/postgresql.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import php from '../assets/php.png';

export const Skill = () => {
  return (
    <section id="skill">
      <h1 className="text-center p-2 font-bold">MY SKILL</h1>
      <div className="grid gap-4">
        <div className="bg-[rgb(15,25,49)] h-96 rounded ">
          <h2 className="text-center mb-12">Front-end</h2>
          <div className="flex items-center flex-col ">
            <i class="fa-brands fa-react text-[#09bfec] text-3xl mb-6"> React</i>
            <i className="flex mb-6">
              <img src={next} alt="next-js logo" className="bg-white rounded-full h-12" /> <span className="text-3xl pt-1 pl-2">Next Js</span>
            </i>
            <i className="flex mb-6">
              <img src={tailwind} alt="tailwind logo" className=" h-10" />
              <span className="text-3xl pt-1 pl-2">Tailwind</span>
            </i>
          </div>
        </div>
        <div className="bg-[rgb(15,25,49)] h-96 rounded">
          <h2 className="text-center mb-12">Back-End</h2>
          <div className="flex items-center flex-col ">
            <i className="flex mb-6">
              <img src={spring} alt="next-js logo" className="bg-white rounded-full h-12" /> <span className="text-3xl pt-1 pl-2">Next Js</span>
            </i>
            <i className="flex mb-6">
              <img src={express} alt="next-js logo" className=" h-9" /> <span className="text-3xl pt-1 pl-2">Express Js</span>
            </i>
            <i className="flex mb-6">
              <img src={postgresql} alt="tailwind logo" className=" h-12" />
              <span className="text-3xl pt-1 pl-2">Postgresql</span>
            </i>
          </div>
        </div>
        <div className="bg-[rgb(15,25,49)] h-96 rounded col-span-2 ">
          <h2 className="text-center mb-12">Front-end</h2>
          <div className="flex items-center flex-col ">
            <i className="flex mb-6">
              <img src={java} alt="next-js logo" className="h-12" /> <span className="text-3xl pt-1 pl-2">Next Js</span>
            </i>
            <i className="flex mb-6">
              <img src={javascript} alt="next-js logo" className=" h-9" /> <span className="text-3xl pt-1 pl-2">Javascript</span>
            </i>
            <i className="flex mb-6">
              <img src={php} alt="tailwind logo" className=" h-12" />
              <span className="text-3xl pt-1 pl-2">PHP</span>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};
