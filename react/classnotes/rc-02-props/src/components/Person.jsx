import Msg from "./Msg";

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div>
      {/* <p>Merhaba {name}</p> */}

      <Msg name={name} />
      <img src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
