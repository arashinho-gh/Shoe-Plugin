import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Button } from "antd";
// import AuthContextProvider from "./contexts/AuthContextProvider";
const data = {
  athletic: {
    Nike: -0.5,
    Adidas: 0,
    Puma: 0,
    Reebok: -0.5,
  },
  dress: {
    "Cole Haan": -0.5,
    "Johnston & Murphy": 0,
    Aldo: -0.5,
    "Calvin Klein": -0.5,
  },
  casual: {
    Converse: 0,
    Vans: 0,
    Toms: 0,
    Sperry: 0,
  },
};

const App = () => {
  return (
    <div className="App">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            UniversoleFits ShoeSizing Tool
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
          </div>
        </nav>
        <form class="row g-3">
          <div class="col-12">
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose Shoe Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-12">
            <select class="form-select" aria-label="Default select example">
            <option selected>Choose Shoe Brand</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-12">
            <select class="form-select" aria-label="Default select example">
            <option selected>Choose Shoe Size</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
