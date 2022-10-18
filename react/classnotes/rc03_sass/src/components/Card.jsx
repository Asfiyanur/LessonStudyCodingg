import CardStyle from "../scss/card.module.scss";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { name, id, job, comment, img } = item;
        return (
          <div key={id} className={CardStyle.card}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className={CardStyle.button}>
              <button className={CardStyle["buttons--small"]}>small</button>
              <button className={CardStyle["buttons--large"]}>large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
