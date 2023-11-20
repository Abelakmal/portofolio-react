import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';
import robot from './assets/hi-robot.gif';
import { useEffect, useRef, useState } from 'react';

function App() {
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [show, setShow] = useState(false);
  console.log(activeSection);
  useEffect(() => {
    if (show) {
      const sectionContent = contentRef.current?.querySelectorAll('main section');
      const navLinks = document.querySelectorAll('nav a');

      const handleScroll = () => {
        sectionContent.forEach((sec) => {
          let top = contentRef.current.scrollTop;
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
      contentRef.current.addEventListener('scroll', handleScroll);

      return () => {
        contentRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [contentRef,show]);

  const loading = () => {
    return (
      <div className="bg-black h-screen relative w-screen flex justify-center items-center" style={{ background: 'linear-gradient(to right, #000428, #072f52)' }}>
        <h1 className=''>LOADING...</h1>
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
        <div className="main flex h-screen pt-20 pl-20 pr-20 scroll-smooth ">
          <Navbar />
          <Content contentRef={contentRef} />
          <img src={robot} alt="robot" className="w-20 h-20 absolute right-0 bottom-0 " />
        </div>
      ) : (
        loading()
      )}
    </>
  );
}

export default App;
