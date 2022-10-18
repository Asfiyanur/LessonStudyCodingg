import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  const [show, setShow] = useState(true);

  // console.log(show);
  return (
    <div className="container text-center mt-4">
      <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      {show && <UseEffectHook />}
      {/* <LifeCycleMethods /> */}
    </div>
  );
}

export default App;
