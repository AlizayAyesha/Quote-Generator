// src/QuoteBox.js
import React from 'react';
import PropTypes from 'prop-types';

// QuoteBox component
const QuoteBox = ({ quote, author, onNewQuote }) => {
  return (
    <div className="quote-box">
      {/* Display the quote */}
      <p className="quote-text">"{quote}"</p>
      {/* Display the author */}
      <p className="quote-author">- {author}</p>
      {/* Button to fetch a new quote */}
      <button className="new-quote-button" onClick={onNewQuote}>
        New Quote
      </button>
    </div>
  );
};

// Define prop types for the component
QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onNewQuote: PropTypes.func.isRequired,
};

export default QuoteBox;
