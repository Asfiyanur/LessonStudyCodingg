import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const Language = ({ img, options, name }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Container
      style={{ background: "#B7A6F6" }}
      className="pt-4 rounded-4 h-100 lang-card"
      onClick={() => setShowDesc(!showDesc)}
      type="button"
    >
      {!showDesc && (
        <Container>
          <Image src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}

      {showDesc && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
