import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchBackgroundImage();
    fetchQuote();

    // Refresh every 8 seconds
    const intervalId = setInterval(() => {
      fetchBackgroundImage();
      fetchQuote();
    }, 20000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fetchBackgroundImage = () => {
    // Fetch the new background image URL or generate it dynamically
    const imgs = [
      '../pics/assets/image1.jpg',
      '../pics/assets/image2.jpg',
      '../pics/assets/image3.jpg',
      '../pics/assets/image4.jpg',
      '../pics/assets/image5.jpg',
      '../pics/assets/image6.jpg',
      '../pics/assets/image7.jpg',
      '../pics/assets/image8.jpg',
      '../pics/assets/image9.jpg',
      '../pics/assets/image10.jpg',
      '../pics/assets/image11.jpg',
      '../pics/assets/image12.jpg',
      '../pics/assets/image13.jpg',
      '../pics/assets/image14.jpg',
      '../pics/assets/image15.jpg',
      '../pics/assets/image16.jpg',
      '../pics/assets/image17.jpg'
      
    ];
    const randomInd = Math.floor(Math.random() * imgs.length);
    const newBackgroundImageUrl = imgs[randomInd];
    

    // Update the state with the new background image URL
    setBackgroundImageUrl(newBackgroundImageUrl);
  };
  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
    
      const data = response.data.quotes;
      const filteredQuotes = data.filter(quote => quote.quote.length < 60);
      
      if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        console.log(randomQuote);
        setQuote(randomQuote);
      } else {
        console.log("No quotes found with length less than 60 characters.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div >
      <h1 className='project-name'>Random quote generator</h1>
    <div id='img-container' className="imgs" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div id='quote-container'>
      <blocquote id='quote' >{quote.quote}</blocquote>
      <p id='quote-author'>{quote.author}</p>
      </div>
    <div id='projects'></div>
    </div>
    </div>
  );
};


export default RandomQuote;