/* eslint-disable */
import "bootstrap";
import "./style.css";
var sortArr = [];
const createCard = () => {
  let num = document.querySelector("#input").value;
  sortArr = [];
  let card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let suit = ["♠", "♥", "♣", "♦"];
  let parentDiv = document.getElementById("cardcontainer");
  parentDiv.innerHTML = "";
  for (let i = 0; i < num; i++) {
    let randomCard = card[Math.floor(Math.random() * card.length)];
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    sortArr.push({ number: card.indexOf(randomCard), suit: randomSuit });
    let color = "";
    if (randomSuit == "♥" || randomSuit == "♦") {
      color = "text-danger";
    }
    let myString = `
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto rounded-top mt-5" style="height: 40px">
          <p class="h2 card1 ${color}">${randomSuit}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-center" style="height: 40px">
          <p class="h2 center ${color}">${randomCard}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-end align-items-end rounded-bottom" style="height: 40px">
          <h1 class="h2 card1 ${color}">${randomSuit}</h1>
        </div>
      </div>
    `;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = myString;
    newDiv.classList.add("mx-4");
    newDiv.style.width = "40px";
    parentDiv.appendChild(newDiv);
  }
};
const printCard = (arr, location) => {
  let parentDiv = document.querySelector(location);
  parentDiv.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let card = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    let print2 = card[arr[i].number];
    console.log(i, card[i], print2);
    let suit = ["♠", "♥", "♣", "♦"];
    let randomSuit = arr[i].suit;
    let color = "";
    if (randomSuit == "♥" || randomSuit == "♦") {
      color = "text-danger";
    }
    let myString = `
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto rounded-top mt-5" style="height: 40px">
          <p class="h2 card1 ${color}">${randomSuit}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-center" style="height: 40px">
          <p class="h2 center ${color}">${print2}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-end align-items-end rounded-bottom" style="height: 40px">
          <h1 class="h2 card1 ${color}">${randomSuit}</h1>
        </div>
      </div>
    `;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = myString;
    newDiv.classList.add("mx-4");
    newDiv.style.width = "40px";
    parentDiv.appendChild(newDiv);
  }
};
const selectionSort = arr => {
  let logNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].number < arr[minIdx].number) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    console.log(arr);
    const newIteration = document.createElement("ol");
    newIteration.id = "iteration" + (logNumber + 1).toString();
    newIteration.classList.add("d-flex");
    iterationList.appendChild(newIteration);
    printCard(arr, "#iteration" + (logNumber + 1).toString());
    logNumber++;
  }
  return arr;
};
window.onload = function() {
  console.log("Hello Rigo from the console!");
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  if (button1) {
    button1.addEventListener("click", function() {
      createCard();
    });
  }
  if (button2) {
    button2.addEventListener("click", function() {
      selectionSort(sortArr);
      sortArr = [];
    });
  }
};
