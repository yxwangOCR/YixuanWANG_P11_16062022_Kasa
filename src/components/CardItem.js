import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/data.json";
import "./Cards/Cards.css";

function CardItem() {
  return (
    <>
      <li className='card-item'>
        {Data.map((item) => {
          return (
            <Link to={`/house/${item.id}`} className='house-link'>
              <img src={item.cover} alt={item.title} className='house-image' />
              <div className='card-info'>
                <h4 className='item-title'>{item.title}</h4>
              </div>
            </Link>
          );
        })}
      </li>
    </>
  );
}

export default CardItem;
