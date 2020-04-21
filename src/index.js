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


//const square = (number) => number * number;
//console.log(square(5));

//Array map to render list
const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

//Object destructuring
//Spread operator
const array = [1, 2, 3];
const arraytwo = [4, 5, 6];

const combined = array.concat(arraytwo);
const combinedSpread = [...array, "1212", ...arraytwo];
console.log("combined" + combinedSpread); */

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("Aman");
console.log(person);
