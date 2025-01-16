/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
    let subjects = ["A raccoon", "A pirate", "A wizard", "Superman", "A ghost"];
    let verbs = ["stole", "buried", "teleported", "broke", "lost"];
    let objects = [
      "keys",
      "my money",
      "my homeworks",
      "my dron",
      "my computer"
    ];
    let places = [
      "in the garage",
      "in the backyard",
      "in the kitchen",
      "on the street",
      "at the park"
    ];

    let subject = subjects[Math.floor(Math.random() * subjects.length)];
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let object = objects[Math.floor(Math.random() * objects.length)];
    let place = places[Math.floor(Math.random() * places.length)];

    let excuse = `${subject} ${verb} ${object} ${place}.`;

    document.getElementById("excuse").innerHTML = excuse;
  }

  document
    .getElementById("generator")
    .addEventListener("click", generateExcuse);
};
