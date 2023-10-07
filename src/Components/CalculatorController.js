import React, { useState } from "react";
import axios from "axios";
import Calculator from "./Calculator";
import { Grid } from "@mui/material";

const CalculatorController = (props) => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFirstNumberChange = (event) => {
    setFirstNumber(event.target.value);
  };

  const handleSecondNumberChange = (event) => {
    setSecondNumber(event.target.value);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };
  const API_URL = "http://localhost:5000/api/calculate";

  const calculateResult = async () => {
    try {
      const operators = "+-/*";
      let firstNumber = "";
      let secondNumber = "";
      let operator = null;

      for (let i = 0; i < displayValue.length; i++) {
        if (operators.includes(displayValue[i])) {
          operator = displayValue[i];
          firstNumber = displayValue.slice(0, i);
          secondNumber = displayValue.slice(i + 1);
          break;
        }
      }

      // Check if operator was found before setting numbers
      if (operator !== null) {
        const parsedFirstNumber = parseFloat(firstNumber);
        const parsedSecondNumber = parseFloat(secondNumber);

        // Update state
        setFirstNumber(parsedFirstNumber);
        setSecondNumber(parsedSecondNumber);
        setOperator(operator);

        // Make API call
        const response = await axios.post(API_URL, {
          firstNumber: parsedFirstNumber,
          secondNumber: parsedSecondNumber,
          operator,
        });

        setResult(response.data.result);
      } else {
        // Handle case where no operator was found
        console.error("No operator found in displayValue.");
      }
    } catch (error) {
      console.error("Error calculating result:", error);
    }
  };
  const handleButtonClick = (event) => {
    setDisplayValue(displayValue + event);
    // props.valueFormatter();
  };

  const valueFormatter = () => {
    const operators = "+-/*";
    let firstNumber = "";
    let secondNumber = "";
    let operator = null;

    for (let i = 0; i < displayValue.length; i++) {
      if (operators.includes(displayValue[i])) {
        operator = displayValue[i];
        firstNumber = displayValue.slice(0, i);
        secondNumber = displayValue.slice(i + 1);
        break;
      }
    }

    // Check if operator was found before setting numbers
    if (operator !== null) {
      setFirstNumber(parseFloat(firstNumber));
      setSecondNumber(parseFloat(secondNumber));
      setOperator(operator);
      calculateResult();
    } else {
      // Handle case where no operator was found
      console.error("No operator found in displayValue.");
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={12}>
        <Calculator
          firstNumber={firstNumber}
          displayValue={displayValue}
          toggleMode={toggleMode}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setDisplayValue={setDisplayValue}
          setFirstNumber={setFirstNumber}
          valueFormatter={valueFormatter}
          handleFirstNumberChange={handleFirstNumberChange}
          operator={operator}
          setOperator={setOperator}
          handleButtonClick={handleButtonClick}
          handleOperatorChange={handleOperatorChange}
          secondNumber={secondNumber}
          setSecondNumber={setSecondNumber}
          handleSecondNumberChange={handleSecondNumberChange}
          calculateResult={calculateResult}
          result={result}
          setResult={setResult}
        />
      </Grid>
    </Grid>
  );
};

export default CalculatorController;
