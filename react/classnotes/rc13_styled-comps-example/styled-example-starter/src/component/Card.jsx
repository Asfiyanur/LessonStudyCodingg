import React from "react";
import content from "../data";
import Main, { CardImage, CardTitle, Description } from "./styled/Card.styled";

const Card = () => {
  return (
    <div>
      {content.map((item) => {
        const { id, body, image, title } = item;
        return (
          <Main key={id} id={id}>
            <CardImage src={`./images/${image}`} alt=""></CardImage>
            <div>
              <CardTitle>{title}</CardTitle>
              <Description>{body}</Description>
            </div>
          </Main>
        );
      })}
    </div>
  );
};

export default Card;
