import React, { useState } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
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
