// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';

// List of predefined quotes
const quotes = [
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const fetchQuote = () => {
    // Randomly select a quote from the list
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote.text);
    setAuthor(selectedQuote.author);

    // Randomly select colors
    const backgroundColors = [ '#59acb49e', '#4cbce1a5', '#66c4c4af', '#75ccf1c1', '#27ebce89' ];
    const textColors = ['#333', '#111', '#555', '#222', '#444'];
    const randomBgColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    const randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];
    setBgColor(randomBgColor);
    setTextColor(randomTextColor);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  const tweetQuote = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote)}"%20-${encodeURIComponent(author)}`;

  return (
    <div id="quote-box" className="quote-box" style={{ backgroundColor: bgColor, color: textColor }}>
      <QuoteBox
        quote={quote}
        author={author}
        onNewQuote={handleNewQuote}
      />
      <a id="tweet-quote" href={tweetQuote} target="_blank" rel="noopener noreferrer" className="btn">
        Tweet
      </a>
    </div>
  );
};

export default App;
