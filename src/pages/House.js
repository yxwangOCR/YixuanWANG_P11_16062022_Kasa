import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data/data.json";
import Slider from "../components/Slider/Slider";
import HouseDetails from "../components/HouseDetails/HouseDetails";
import Accordion from "../components/Accordion/Accordion";

function House() {
  const { id } = useParams();
  const house = Data.find((item) => item.id === id);

  return (
    <div>
      <Slider pictures={house.pictures} />
      <HouseDetails />
      <div className='accordion-container'>
        <Accordion title='Description'>{house.description}</Accordion>
        <Accordion title='Equipements'>
          {house.equipments.map((item) => (
            <div>{item}</div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default House;
