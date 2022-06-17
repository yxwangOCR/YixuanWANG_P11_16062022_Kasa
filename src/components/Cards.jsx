import React from "react";
import Data from "../data/data.json";
import styled from "styled-components";

function Cards() {
  return (
    <div>
      <h1>Cards</h1>
      {Data.map((item, index) => {
        // get data from data.json
        return (
          <div key={(item.id)}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <image>{item.cover}</image>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
