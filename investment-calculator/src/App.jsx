import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <div>
      <Header />

      <UserInput userInputProp={userInput} onChange={handleChange} />

      {!inputIsValid && (
        <h3 className="center">Please enter a duration greater than zero.</h3>
      )}
      {inputIsValid && <Result userInputProp={userInput} />}
    </div>
  );
}

App.propTypes = {};

export default App;
