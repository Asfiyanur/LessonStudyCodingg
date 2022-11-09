import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const UseRefComp = () => {
  const divRef = useRef();
  const inputRef = useRef();
  const [headerText, setHeaderText] = useState("useRef");

  const handleRef = () => {
    console.log(divRef.current);
    console.log(divRef.current.firstElementChild.innerText);
    console.log(divRef.current.lastElementChild.innerText);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    setHeaderText(inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h5>{headerText}</h5>
      <div ref={divRef}>
        <p>first element Child</p>
        <input type="text" ref={inputRef} />
        <p>last Element child</p>
      </div>
      <button onClick={handleRef}>useRef Click</button>
    </div>
  );
};

export default UseRefComp;