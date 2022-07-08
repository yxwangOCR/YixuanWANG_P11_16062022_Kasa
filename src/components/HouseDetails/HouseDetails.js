import React from "react";
import Data from "../../data/data.json";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./HouseDetails.css";

function HouseDetails() {
  const { id } = useParams();
  const house = Data.find((item) => item.id === id);
  return (
    <div className='house-infos-container'>
      <div className='house-infos-details'>
        <h2 className='house-title'>{house.title}</h2>
        <span className='house-location'>{house.location}</span>
        <div className='house-tags'>
          {house.tags.map((tag) => (
            <div className='tag'>{tag}</div>
          ))}
        </div>
      </div>

      <div className='house-host-rating'>
        <div className='host-infos-container'>
          <span className='host-name'>{house.host.name}</span>
          <img className='host-profil' src={house.host.picture}></img>
        </div>
        <div className='host-rating'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
