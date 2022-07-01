import React, { useState } from "react";
import Data from "../data/data.json";
import "./ImageSlider.css";
import { useParams } from "react-router-dom";

const House = () => {
  const { id } = useParams();
  return <div>House {id}</div>;
};

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  return (
    <>
      <div className='image-slider-container'>
        <div className='sliders'>
          {Data.map((item, index) => {
            return (
              <img
                src={item.pictures[0]}
                alt={item.title}
                className='slide-image'
              />
            );
          })}
        </div>
      </div>
      <h2 className='house-title'>House title</h2>
      <span className='house-location'>Paris, ile-de-France</span>
      <div className='tags-container'>Tags</div>
      <span className='owner-name'>First Name Last Name</span>
      <div className='star-container'>
        <i class='fa-solid fa-star-sharp'></i>
        <i class='fa-solid fa-star-sharp'></i>
        <i class='fa-solid fa-star-sharp'></i>
        <i class='fa-solid fa-star-sharp'></i>
        <i class='fa-solid fa-star-sharp'></i>
      </div>
    </>
  );
}

export default ImageSlider;
