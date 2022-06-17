import React from "react";
import Data from "../data/data.json";
import styled from "styled-components";

function Cards() {
  return (
    <div>
      <h1>Cards</h1>
      <Wrapper>
        {Data.map((item, index) => {
          // get data from data.json
          return (
            <Card>
              <div key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <img src={item.cover} alt={item.title} />
              </div>
            </Card>
          );
          console.log(item.title);
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  gap: 10px;
  img {
    border-radius: 5px;
  }
`;

export default Cards;
