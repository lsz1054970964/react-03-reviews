import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // use to extract different people from data
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    // index % people.length can be also used
    if (index < people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const prevPerson = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(people.length - 1);
    }
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = randomNumber + 1;
      if (randomNumber === people.length) {
        randomNumber = 0;
      }
    }
    setIndex(randomNumber);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        superise me
      </button>
    </article>
  );
};

export default Review;
