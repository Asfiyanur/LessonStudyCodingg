import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((item) => setUsers(item));
  //   });
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((item) =>
      setUsers(item.data)
    );
  }, []);
  console.log(users);
  return (
    <div>
      <h1>isimler</h1>
      {users.map((x) => (
        <div key={x.id}>{x.name}</div>
      ))}
    </div>
  );
};

export default Container;
