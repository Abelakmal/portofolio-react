import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';
import robot from './assets/hi-robot.gif';
import { useEffect, useRef, useState } from 'react';

function App() {
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [show, setShow] = useState(false);
  let top = contentRef.current.scrollTop;
  useEffect(() => {
    if (show) {
      const sectionContent = contentRef.current?.querySelectorAll('main section');
      const navLinks = document.querySelectorAll('nav a');
      console.log(top);

      const handleScroll = () => {
        sectionContent.forEach((sec) => {
          let top = contentRef.current.scrollTop;
          console.log(top);
          let scrollHeight = sec.offsetHeight;
          let scrollTop = sec.offsetTop - 100;
          let id = sec.getAttribute('id');
          if (top >= scrollTop && top <= scrollTop + scrollHeight) {
            setActiveSection(id);
            navLinks.forEach((links) => {
              links.classList.remove('active');
              document.querySelector(`nav a[href*= ${id}]`).classList.add('active');
            });
          }
        });
      };
      console.log(handleScroll());
      contentRef.current.addEventListener('scroll', handleScroll);

      return () => {
        contentRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [contentRef, show,top]);

  const loading = () => {
    return (
      <div className="bg-black h-screen relative w-screen flex justify-center items-center" style={{ background: 'linear-gradient(to right, #000428, #072f52)' }}>
        <h1 className="">LOADING...</h1>
      </div>
    );
  };

  setTimeout(() => {
    setShow(true);
  }, 3000);
  console.log();
  return (
    <>
      {show ? (
        <div className="main lg:flex lg:pt-20 lg:pl-20 lg:pr-20 ">
          <Navbar />
          <Content contentRef={contentRef} />
          <img src={robot} alt="robot" className="w-20 h-20  max-sm:fixed max-lg:fixed max-lg:top-9 max-lg:right-2 max-sm:top-9 max-sm:right-2 lg:right-0 lg:bottom-0 " />
        </div>
      ) : (
        loading()
      )}
    </>
  );
}

export default App;
