import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    console.log("Reset");

    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your frined like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <div style={{ display: "flex", margin: "20px" }}>
        <label style={{ display: "flex", marginRight: "10px" }}>
          How much was the Bill
        </label>
        <input
          type=" text"
          placeholder="Enter the bill amount"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </div>
    </>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <>
      <div style={{ display: "flex", margin: "20px" }}>
        <label>{children}</label>
        <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0"> Dissatisfied (0%) </option>
          <option value="5"> Dissatisfied (5%) </option>
          <option value="10"> Dissatisfied (10%) </option>
          <option value="20"> Dissatisfied (20%) </option>
        </select>
      </div>
    </>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You Pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
