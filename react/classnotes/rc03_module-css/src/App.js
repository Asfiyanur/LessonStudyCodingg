import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  return (
    <>
      {data.map((item) => {
        const { id, language, img, btnName } = item;
        return <Card key={id} language={language} img={img} btn={btnName} />;
      })}
    </>
  );
}

export default App;
