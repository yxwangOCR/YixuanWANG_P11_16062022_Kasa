import React from "react";
import Data from "../../data/data.json";
import styled from "styled-components";
import {Link} from "react-router-dom";
import './cards.css'


function Cards() {
    return (
        <div className="cards">
            <h1>Cards</h1>
            <Wrapper>
                {Data.map((item) => {
                    // get data from data.json
                    return (
                        <Card key={item.id}>
                            <Link to={`/house/${item.id}`}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <img src={item.cover} alt={item.title} />
                                </div>
                            </Link>
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
