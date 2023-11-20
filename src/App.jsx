import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex h-screen pt-20 pl-20 pr-20 h-screen '>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
