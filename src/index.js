import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));

//function inside an object is a method
/*
const person = {
  name: "Aman",
  walk: function () {
    console.log(this);
  },
};
person.walk();
const walk = person.walk.bind(person);
walk();
*/

const square = (number) => number * number;

console.log(square(5));
