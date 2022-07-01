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
      {Data.map((item) => {
        
        return (
          <div key={item.id}>
            <img src={House.pictures} alt={House.title} />;)
            </div>
      })}
      <div className='image-slider'>Image-slider</div>
    </>
  );
}

export default ImageSlider;
