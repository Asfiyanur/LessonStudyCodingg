import React from "react";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  console.log(name);

  return <div>PersonDetail</div>;
};

export default PersonDetail;
