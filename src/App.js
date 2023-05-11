import "./App.css";
import Rate from "./components/Rate";
import Submit from "./components/Submit";
import { useState } from "react";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();
  return (
    <div className="App">
      {submit == true ? (
        <Submit rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
      ;
    </div>
  );
}

export default App;
