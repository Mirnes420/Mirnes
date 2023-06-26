import '../App.css';
import React, {useEffect, useState} from 'react';
const Introduction = () => {
  
    const texts = [
      'hi',
      'my name is Mirnes',
      'this is my personal portofolio', 
      'in which I\'ll demonstrate my React.js skills',
      'I hope you enjoy it',
      ':)',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [texts.length]);
  
    return (
      <div id='intro' className='container'>
        <h3>{texts[currentIndex]}</h3>
      </div>
    );
  };

  export default Introduction;