import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className='card-container'>
      <ul className='card-list'>
        <CardItem path='/house' />
      </ul>
    </div>
  );
}

export default Cards;
