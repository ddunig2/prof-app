import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  ButtonToolbar,
  Card,
} from "react-bootstrap";
import "../App.css";
class LoanCalculator extends Component {
  constructor() {
    super();
    this.calculate = this.calculate.bind(this);
    this.calculation = this.calculation.bind(this);
    this.selectChangeEvent = this.selectChangeEvent.bind(this);
  }
  state = {};

  calculation(p, rt, n) {
    var r = rt / 100 / 12;
    var a = (p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    return Math.round(a * 100) / 100.0;
  }
  selectChangeEvent() {
    var opt = document.getElementById("sel").options[
      document.getElementById("sel").selectedIndex
    ].value;
    if (opt === "Years") {
      document.getElementById("lti").placeholder = "Loan term in years";
      if (document.getElementById("lti").value === "") {
      } else {
        let rt = document.getElementById("lti").value;
        let r = rt / 12;
        document.getElementById("lti").value = r;
      }
    } else {
      document.getElementById("lti").placeholder = "Loan term in month";
      if (document.getElementById("lti").value === "") {
      } else {
        let rt = document.getElementById("lti").value;
        let r = rt * 12;
        document.getElementById("lti").value = r;
      }
    }
  }
  calculate() {
    if (
      document.getElementById("loanA").value === "" ||
      document.getElementById("loanI").value === "" ||
      document.getElementById("lti").value === ""
    ) {
      document.getElementById("monthly").innerHTML = "Fill everything out!";
      document.getElementById("interest").innerHTML = "Fill everything out!";
    } else {
      let p = parseFloat(document.getElementById("loanA").value);
      let n = parseFloat(document.getElementById("lti").value);
      let rt = parseFloat(document.getElementById("loanI").value);

      var opt = document.getElementById("sel").options[
        document.getElementById("sel").selectedIndex
      ].value;
      if (opt === "Years") {
        n *= 12;
      }

      let monthly = this.calculation(p, rt, n);
      let int = Math.round((monthly * n - p) * 100.0) / 100.0;
      document.getElementById("monthly").innerHTML = "$" + monthly;
      document.getElementById("interest").innerHTML = "$" + int;
    }
  }
  render() {
    return (
      <div>
        <Card id="loanC">
          <Card.Header>Loan Calculator</Card.Header>
          <Card.Body>
            <Card id="cardO">
              <Card.Body>
                <h2 align="center">
                  <u>Monthly Pay </u>
                </h2>
                <h4 align="center" id="monthly">
                  {" "}
                </h4>
                <br />
                <br />
                <h2 align="center">
                  <u>Total intrest</u>
                </h2>
                <h5 align="center" id="interest">
                  {" "}
                </h5>
              </Card.Body>
            </Card>
            <div id="loanC1">
              <InputGroup className="mb-5" type="number" size="lg">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="loanA"
                  placeholder="Loan amount"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="number"
                />
              </InputGroup>

              <InputGroup className="mb-5" type="number" size="lg">
                <FormControl
                  placeholder="Loan term in years"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  id="lti"
                  type="number"
                />
                <FormControl
                  as="select"
                  STYLE="font-size : 11pt"
                  onChange={this.selectChangeEvent}
                  id="sel"
                >
                  <option>Years</option>
                  <option>Months</option>
                </FormControl>
              </InputGroup>

              <InputGroup className="mb-5" size="lg">
                <FormControl
                  id="loanI"
                  placeholder="Intrest rate per year"
                  aria-label="Intrest rate per year"
                  aria-describedby="basic-addon2"
                  type="number"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

              <ButtonToolbar>
                <Button
                  id="oks"
                  variant="outline-primary"
                  size="lg"
                  active
                  onClick={this.calculate}
                >
                  Calculate
                </Button>
              </ButtonToolbar>
            </div>
          </Card.Body>
        </Card>

        <div />
      </div>
    );
  }
}
export default LoanCalculator;
