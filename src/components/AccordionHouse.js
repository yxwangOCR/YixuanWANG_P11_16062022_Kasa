import React from "react";
import "./AccordionHouse.css";
import { useState, useParams } from "react";
import Data from "../data/data.json";

function AccordionHouse() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  //const id = useParams();

  return (
    <>
      {/*
            Data.filter((item).map((item, i, key) => {
            if (item.id === Route path id)
            return {item}
            else show 404
        })
    */}
      <div className='accordion-house'>
        {Data.map((item, i, key) => (
          <div className='item'>
            <div className='accordion-house-title' onClick={() => toggle(i)}>
              <h2>Description</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>

            <div className='accordion-house-content' key={key.id}>
              <p
                className={
                  selected === i
                    ? "accordion-content show"
                    : "accordion-content"
                }>
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AccordionHouse;
