import React, { useState } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider({ pictures }) {
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent(current - 1);
  };
  const next = () => {
    setCurrent(current + 1);
  };

  return (
    <>
      <div className='sliders'>
        <img
          src={pictures[current]}
          alt='House-Image'
          className='slide-image'
        />
        <FaChevronLeft onClick={prev} className='left-arrow'>
          Prev
        </FaChevronLeft>
        <FaChevronRight onClick={next} className='right-arrow'>
          Next
        </FaChevronRight>
      </div>
    </>
  );
}

export default Slider;
