import React, { useState, useEffect } from "react";
import { Grid, Button, TextField, Paper, IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon

const Calculator = (props) => {
  const handleKeyPress = (event) => {
    const { key } = event;
    if (/[0-9+\-*/]/.test(key)) {
      props.handleButtonClick(key);
    }
  };

  const ToggleButton = () => {
    return (
      <IconButton
        sx={{
          position: "absolute",
          // marginTop: "15px",
          ...(props.isDarkMode && {
            // boxShadow: styles.darkModeButtonShadow,
            color: styles.dMTextColor,
            // border: styles.dMBorder,
          }),
          alignItems: "end",
          // right: "-350px",
          // left: "10px",
        }}
        onClick={props.toggleMode}
      >
        {props.isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [props.displayValue]);

  const inputStyles = {
    textAlign: "center",
    borderRadius: "10px",
    height: "100px",
  };

  const styles = {
    textField: {
      width: "80%",
      height: "100px",
      // textAlign: "end",
      boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.25), inset 0 0 20px #fff", // Adjusted boxShadow
      borderRadius: "10px",
      // marginBottom: "12px",
      // padding: "0 20px",
      // fontSize: "2em",
      marginTop: "70px",
      marginBottom: "20px",
      // fontWeight: "500",
      // overflow: "hidden",
      // userSelect: "none",
      // position: "relative",
    },
    button: {
      position: "relative",
      padding: "10px",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 20px #fff",
      margin: "10px",
      height: "65px",
      width: "80px",
      borderRadius: "10px",
      cursor: "pointer",
      // userSelect: "none",
      // justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      color: "#666",
      border: "2px solid #edf1f4",
    },
    btnClr: {
      borderRadius: "10px",
      margin: "10px",
      height: "65px",
      width: "180px",
      backgroundColor: "#f44336",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 20px #fff",
      color: "#fff",
      border: "2px solid #edf1f4",
    },
    btnPls: {
      backgroundColor: "#31a935",
      borderRadius: "10px",
      margin: "10px",
      height: "65px",
      width: "80px",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 20px #fff",
      color: "#fff",
      border: "2px solid #edf1f4",
    },
    btnEql: {
      width: "80px",
      borderRadius: "10px",
      margin: "10px",
      height: "65px",
      backgroundColor: "#2196f3",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 20px #fff",
      color: "#fff",
      border: "2px solid #edf1f4",
    },
    darkMode: {
      background: "#33393e",
      boxShadow:
        "15px 15px 20px rgba(0, 0, 0, 0.25) -15px -15px 20px rgba(255, 255, 255, 0.1)",
    },
    darkModeBoxShadow:
      "inset 0 0 10px rgba(255, 255, 255, 0.1), inset 0 0 20px #000",
    darkModeButtonShadow:
      "5px 5px 10px rgba(255, 255, 255, 0.1), -5px -5px 20px #000",
    dMTextColor: "#fff",
    dMBorder: "none",
  };

  const handleAllClearClick = () => {
    props.setDisplayValue("");
    props.setResult("");
  };

  const handleClearClick = () => {
    props.setDisplayValue(props.displayValue.slice(0, -1));
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={3}
        sx={{
          height: "640px",
          marginTop: "15px",
          borderRadius: "15px",
          width: "500px",
          ...(props.isDarkMode && styles.darkMode),
        }}
      >
        <Grid item md={12}>
          <TextField
            id="Displayer"
            name="Displayer"
            style={{
              ...styles.textField,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeBoxShadow,
              }),
            }}
            fullWidth
            value={`${props.displayValue}\nResult: ${props.result}`}
            onChange={() => {}}
            // onChange={() => {}}
            multiline
            InputProps={{
              style: {
                ...inputStyles,
                ...(props.isDarkMode && {
                  color: "#fff", // Set text color to black in dark mode
                }),
              },
              disableUnderline: true,
            }}
            InputLabelProps={{ shrink: false }}
            autoFocus
            // disabled
          />
        </Grid>
        <Grid item md={12}>
          <Button
            style={{
              ...styles.btnClr,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                border: styles.dMBorder,
              }),
            }}
            // sx={{
            //   border: "1px solid",
            //   marginTop: "10px",
            //   marginBottom: "10px",
            //   marginRight: "12px",
            //   marginLeft: "10px",
            //   width: "100px",
            //   height: "85px",
            // }}
            onClick={() => handleAllClearClick()}
          >
            Clear
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            // onClick={() => props.handleButtonClick("/")}
          >
            <ToggleButton />
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => handleClearClick()}
          >
            AC
          </Button>
          {/* <Button  style={{
              ...styles.button,
              ...(props.isDarkMode && { boxShadow: styles.darkModeButtonShadow }),
            }} onClick={() => props.handleButtonClick("/")}>
            /
          </Button> */}
        </Grid>
        <Grid item md={12}>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            // sx={{
            //   border: "1px solid",
            //   marginTop: "10px",
            //   marginBottom: "10px",
            //   marginRight: "12px",
            //   marginLeft: "10px",
            //   width: "100px",
            //   height: "85px",
            // }}
            onClick={() => props.handleButtonClick("7")}
          >
            7
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("8")}
          >
            8
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("9")}
          >
            9
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("/")}
          >
            /
          </Button>
        </Grid>
        <Grid item md={12}>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("4")}
          >
            4
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("5")}
          >
            5
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("6")}
          >
            6
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("-")}
          >
            -
          </Button>
        </Grid>
        <Grid item md={12}>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("1")}
          >
            1
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("2")}
          >
            2
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("3")}
          >
            3
          </Button>
          <Button
            style={{
              ...styles.btnPls,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("+")}
          >
            +
          </Button>
        </Grid>
        <Grid item md={12}>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick(".")}
          >
            .
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("0")}
          >
            0
          </Button>
          <Button
            style={{
              ...styles.button,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                color: styles.dMTextColor,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => props.handleButtonClick("*")}
          >
            *
          </Button>
          <Button
            style={{
              ...styles.btnEql,
              ...(props.isDarkMode && {
                boxShadow: styles.darkModeButtonShadow,
                border: styles.dMBorder,
              }),
            }}
            onClick={() => {
              props.calculateResult();
            }}
          >
            =
          </Button>
        </Grid>
        {/* <Grid></Grid> */}
        {/* <Grid item>
          <input
            type="number"
            value={props.firstNumber}
            onChange={props.handleFirstNumberChange}
            placeholder="Enter first number"
          />
          <input
            type="text"
            value={props.operator}
            onChange={props.handleOperatorChange}
            placeholder="Enter operator (+, -, *, /)"
          />
          <input
            type="number"
            value={props.secondNumber}
            onChange={props.handleSecondNumberChange}
            placeholder="Enter second number"
          />
          <button onClick={props.calculateResult}>Calculate</button>
          {props.result && <div>Result: {props.result}</div>}
        </Grid> */}
      </Paper>
    </Grid>
  );
};

export default Calculator;
