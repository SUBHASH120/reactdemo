import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const even = num.filter((number) => number % 2 === 0);
  // const odd = num.filter((number) => number % 2 !== 0);
  // console.log(even);
  // console.log(odd);
const even=[];
const odd =[];
  for (let n of num){
    if(n%2 === 0){
      even.push(n);
    }
    if(n%2 !== 0){
      odd.push(n);
    }
  }
  console.log(even);
  console.log(odd);
  console.log("harry")
  return (
    <div className="App">
        <h1>Harry</h1>
        <h1>Ramesh</h1>
    </div>
  );
}

export default App;
