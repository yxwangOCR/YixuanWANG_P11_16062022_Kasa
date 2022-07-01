import React from "react";
import DataAbout from "../data/dataAbout.json";
import "./Accordion.css";
import { useState } from "react";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className='accordion'>
        {DataAbout.map((item, i) => (
          <div className='item'>
            <div className='accordion-title' onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>

            <div className='accordion-content'>
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

export default Accordion;
