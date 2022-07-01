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
    </>
  );
}

export default ImageSlider;
