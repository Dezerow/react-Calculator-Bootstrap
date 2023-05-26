import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState } from "react";

const Calculator = () => {
  const [number, setNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [chosenSign, setChosenSign] = useState();

  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      setNumber(number.slice(0, -1));
    }
  });

  const showTip = (props) => (
    <Tooltip className="test" {...props}>
      You can delete text with your Backspace.
    </Tooltip>
  );

  const operation = (sign) => {
    switch (sign) {
      case "+":
        setPreviousNumber(number);
        setChosenSign("+");
        setNumber("");
        break;
      case "-":
        setPreviousNumber(number);
        setChosenSign("-");
        setNumber("");
        break;
      case "*":
        setPreviousNumber(number);
        setChosenSign("*");
        setNumber("");
        break;
      case "/":
        setPreviousNumber(number);
        setChosenSign("/");
        setNumber("");
        break;
      case "C":
        setPreviousNumber("");
        setChosenSign("");
        setNumber("");
        break;
      case "x^2":
        setNumber(String(Math.pow(number, 2)));
        break;
      case "2√x":
        setNumber(String(Math.sqrt(number)));
        break;
      case "=":
        if (previousNumber !== "") {
          switch (chosenSign) {
            case "+":
              setNumber(
                String(parseFloat(previousNumber) + parseFloat(number))
              );
              break;
            case "-":
              setNumber(
                String(parseFloat(previousNumber) - parseFloat(number))
              );
              break;
            case "*":
              setNumber(
                String(parseFloat(previousNumber) * parseFloat(number))
              );
              break;
            case "/":
              setNumber(
                String(parseFloat(previousNumber) / parseFloat(number))
              );
              break;
            default:
              break;
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container className="container">
      <Form.Control
        type="text"
        className="display"
        placeholder="Enter any number"
        readOnly="readonly"
        value={number}
      />
      <div style={{ display: "flex" }}>
        <Button variant="light" onClick={() => operation("x^2")}>
          x^<sup>2</sup>
        </Button>
        <Button variant="light" onClick={() => operation("2√x")}>
          <sup>2</sup>√x
        </Button>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 2000 }}
          overlay={showTip}
        >
          <Button variant="light" onClick={() => operation("C")}>
            C
          </Button>
        </OverlayTrigger>

        <Button onClick={() => operation("/")} variant="light">
          /
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button variant="light" onClick={() => setNumber(number + 7)}>
          7
        </Button>
        <Button variant="light" onClick={() => setNumber(number + 8)}>
          8
        </Button>
        <Button variant="light" onClick={() => setNumber(number + 9)}>
          9
        </Button>
        <Button onClick={() => operation("*")} variant="light">
          *
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button variant="light" onClick={() => setNumber(number + 4)}>
          4
        </Button>
        <Button variant="light" onClick={() => setNumber(number + 5)}>
          5
        </Button>
        <Button variant="light" onClick={() => setNumber(number + 6)}>
          6
        </Button>
        <Button variant="light" onClick={() => operation("+")}>
          +
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button variant="light" onClick={() => setNumber(number + 1)}>
          1
        </Button>
        <Button variant="light" onClick={() => setNumber(number + 2)}>
          2
        </Button>
        <Button variant="light" onClick={() => setNumber(number + 3)}>
          3
        </Button>
        <Button variant="light" onClick={() => operation("-")}>
          -
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          variant="light"
          onClick={() => String(setNumber(parseFloat(number * -1)))}
        >
          <sup>+</sup>/-
        </Button>
        <Button variant="light" onClick={() => setNumber(number + 0)}>
          0
        </Button>
        <Button
          variant="light"
          onClick={() =>
            !String(number).includes(".") && setNumber(number + ".")
          }
        >
          .
        </Button>
        <Button variant="light" onClick={() => operation("=")}>
          =
        </Button>
      </div>
    </Container>
  );
};

export default Calculator;
