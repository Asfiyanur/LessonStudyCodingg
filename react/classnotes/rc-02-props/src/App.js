import React from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    <div>
      {/* <Msg name="asfiya" age="27" />
      <Msg name="nur" />
      <Msg name="sakin" /> */}

      {/* <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
      <Person name={data[1].name} img={data[1].img} tel={data[1].tel} />
      <Person name={data[2].name} img={data[2].img} tel={data[2].tel} /> */}

      {data.map((item) => (
        <Person name={item.name} img={item.img} tel={item.tel} />
      ))}
      
    </div>
  );
}

export default App;
