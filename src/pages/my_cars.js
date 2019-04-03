import React, { Component } from "react";
import {
  FormControl,
  Col,
  FormLabel,
  FormGroup,
  Row,
  Button,
  Table
} from "react-bootstrap";

class MyCars extends Component {
  constructor() {
    super();
    this.populate = this.populate.bind(this);
    this.populateTable = this.populateTable.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.connectDB = this.connectDB.bind(this);
  }
  populate() {
    var s1 = document.getElementById("selectMake");
    var s2 = document.getElementById("selectModel");
    s2.innerHTML = "";
    if (s1.value == "BMW") {
      var optionArray = [
        "ALL MODELS|ALL MODELS",
        "320i|320i",
        "328i|328i",
        "330i|330i",
        "335i|335i",
        "M3|M3",
        "M4|M4",
        "X6|X6"
      ];
    } else if (s1.value == "NISSAN") {
      var optionArray = [
        "ALL MODELS|ALL MODELS",
        "350Z|350Z",
        "370Z|370Z",
        "GTR|GTR",
        "MAXIMA|MAXIMA",
        "SENTRA|SENTRA",
        "VERSA|VERSA",
        "VERSA|VERSA"
      ];
    } else if (s1.value == "BMjW") {
      var optionArray = ["|", "328xi|328xi", "|", "|", "|"];
    } else if (s1.value == "BMjW") {
      var optionArray = ["|", "328xi|328xi", "|", "|", "|"];
    } else if (s1.value == "ALL MAKES") {
      var optionArray = ["ALL MODELS|ALL MODELS"];
    }
    for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);
    }
  }
  populateTable(make, model, year, miles, acc, owners) {
    var x = document.createElement("Tr");
    var t1 = document.createElement("Td");
    var node1 = document.createTextNode(make);
    t1.appendChild(node1);
    var t2 = document.createElement("Td");
    var node2 = document.createTextNode(model);
    t2.appendChild(node2);
    var t3 = document.createElement("Td");
    var node3 = document.createTextNode(year);
    t3.appendChild(node3);
    var t4 = document.createElement("Td");
    var node4 = document.createTextNode(miles);
    t4.appendChild(node4);
    var t5 = document.createElement("Td");
    var node5 = document.createTextNode(acc);
    t5.appendChild(node5);
    var t6 = document.createElement("Td");
    var node6 = document.createTextNode(owners);
    t6.appendChild(node6);

    x.appendChild(t1);
    x.appendChild(t2);
    x.appendChild(t3);
    x.appendChild(t4);
    x.appendChild(t5);
    x.appendChild(t6);
    document.getElementById("tableBody").appendChild(x);
    //this.connectDB();
  }
  handleSearch() {
    var make = "Bmw";
    var model = "328i";
    var year = "2018";
    var acc = "0";
    var owner = "1";
    var miles = "102599";
    this.populateTable(make, model, year, miles, acc, owner);
  }
  connectDB() {}
  render() {
    return (
      <div id="Page_container">
        <Row id="selectRow">
          <FormGroup as={Col} controlId="formGridState">
            <FormControl as="select" id="selectMake" onChange={this.populate}>
              <option value="ALL MAKES">ALL MAKES</option>
              <option value="BMW">BMW</option>
              <option value="NISSAN">NISSAN</option>
              <option value="TOYOTA">TOYOTA</option>
              <option value="CADILLAC">CADILLAC</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} controlId="formGridState">
            <FormControl as="select" id="selectModel">
              <option>ALL MODELS</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} controlId="formGridState">
            <FormControl as="select" id="selectYear">
              <option value="ALL YEARS">ALL YEARS</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} controlId="formGridState">
            <Button variant="primary" onClick={this.handleSearch}>
              Search
            </Button>
          </FormGroup>
        </Row>
        <Table striped bordered hover id="carTable" align="center">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Miles</th>
              <th>Acc. reported</th>
              <th>Owners</th>
            </tr>
          </thead>
          <tbody id="tableBody" />
        </Table>
      </div>
    );
  }
}

export default MyCars;
