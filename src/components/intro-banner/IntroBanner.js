import React from 'react';

import './index.css';

const ShuffleIcon = require('../../assets/shuffle-icon.png');

const quotesList = [
  {
    quote: 'Always do your best. What you plant now, you will harvest later.',
    author: 'Og Mandino',
  },
  {
    quote: 'It is never too late to be what you might have been.',
    author: 'George Eliot',
  },
  {
    quote: 'Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.',
    author: 'Mae Jemison',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'Inspiration is some mysterious blessing which happens when the wheels are turning smoothly.',
    author: 'Quentin Blake',
  },
  {
    quote: 'Limit your "always" and your "nevers."',
    author: 'Amy Poehler​​',
  },
  {
    quote: 'Motivation comes from working on things we care about.',
    author: 'Sheryl Sandberg',
  },
  {
    quote: 'With the right kind of coaching and determination you can accomplish anything.',
    author: 'Reese Witherspoon',
  },
  {
    quote: 'Life has got all those twists and turns. You\'ve got to hold on tight and off you go.',
    author: 'Nicole Kidman',
  },
  {
    quote: 'Procrastination is the art of keeping up with yesterday.',
    author: 'Don Marquis',
  },
  {
    quote: 'My biggest regret could be summed up in one word, and that’s procrastination.',
    author: 'Ron Cooper',
  },
  {
    quote: 'However difficult life may seem, there is always something you can do and succeed at.',
    author: 'Stephen Hawking',
  },
  {
    quote: 'I find that the harder I work, the more luck I seem to have.',
    author: 'Thomas Jefferson',
  },
  {
    quote: 'Success is the sum of small efforts, repeated day in and day out.',
    author: 'Robert Collier',
  },
  {
    quote: 'Don’t wish it were easier; wish you were better.',
    author: 'Jim Rohn',
  },
  {
    quote: 'There are no shortcuts to any place worth going.',
    author: 'Beverly Sills',
  },
  {
    quote: 'If people only knew how hard I’ve worked to gain my mastery, it wouldn’t seem so wonderful at all.',
    author: 'Michelangelo',
  },
  {
    quote: 'Don’t let what you cannot do interfere with what you can do.',
    author: 'John Wooden',
  },
  {
    quote: 'The purpose of human life is to serve and to show compassion and the will to help others.',
    author: 'Albert Schweitzer',
  },
  {
    quote: 'The whole purpose of education is to turn mirrors into windows.',
    author: 'Sydney J. Harris',
  },
  {
    quote: 'Follow your dreams, believe in yourself and don’t give up.',
    author: 'Rachel Corrie',
  },
  {
    quote: 'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon',
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class IntroBanner extends React.PureComponent {
  state = {
    currentNum: getRandomInt(quotesList.length),
  }

  shuffleQuote = () => {
    this.setState({
      currentNum: getRandomInt(quotesList.length),
    });
  }

  render() {
    const currentQuote = quotesList[this.state.currentNum];
    return (
      <div className="intro-banner">
        <h3 id="quote-text">
        &quot;
          {currentQuote.quote}
        &quot;
        </h3>
        <h6 id="quote-author">
          {currentQuote.author}
        </h6>


        <img
          className="shuffle-icon"
          src={ShuffleIcon}
          alt="shuffle digioreader quote"
          onClick={this.shuffleQuote}
        />
      </div>
    );
  }
}

export default IntroBanner;
