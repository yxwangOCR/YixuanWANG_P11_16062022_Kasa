import React from "react";
import Data from "../data/data.json";
import "./ImageSlider.css";
import { useParams } from "react-router-dom";

const House = () => {
  const { id } = useParams();
  return <div>House {id}</div>;
};

function ImageSlider() {
  return (
    <>
      <div className='image-slider'>Image-slider</div>
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
