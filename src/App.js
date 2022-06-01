import React from "react";

import "./App.css";

const Hello = ({ name }) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Welcome to my react app</h2>
      <p style={{ textAlign: "center" }}>Made by {name}</p>
      <section className="testing-sec">
        <div className="container">
          <div className="container-child">
            <img src="./test.jpg" alt="img"></img>
            <h3>Test 1</h3>
          </div>
          <div className="container-child">
            <img src="./test.jpg" alt="img"></img>
            <h3>Test 2</h3>
          </div>
          <div className="container-child">
            <img src="./test.jpg" alt="img"></img>
            <h3>Test 3</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hello;
