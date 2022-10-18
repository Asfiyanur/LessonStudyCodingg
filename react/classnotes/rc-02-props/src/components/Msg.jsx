const Msg = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Merhaba {props.name}</h3>
    </div>
  );
};

export default Msg;

// içerde {props.name} kullanırız ya da
// destructuring yöntemleri yaparız;
// yolda destrc : constMsg =({name})=>{}
// desct içerde :const {name }=props
