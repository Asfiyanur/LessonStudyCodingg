//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

// const UseEffectHook = () => {
//   useEffect(() => {
//     // didMount + didUpdate
//     return () => {
//       // clean-up func :unmount
//     };
//   }, []); // dependency array ( burası bol olursa tek sefer çalışıp ;didmount yapar ya da mount+update i beraberyapıyor)

//   return <div>UseEffectHook</div>;
// };

// export default UseEffectHook;

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mounting");
    setTimeout(() => {
      alert("data fetch");
    }, 5000);
  }, [count]);

  console.log("rendering");
  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
