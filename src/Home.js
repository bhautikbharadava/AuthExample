import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav class="d-flex align-items-center">
          <div class="nav-title mr-auto">Sunbots</div>
          <div class="">Logout</div>
        </nav>
        <div class="container">
          <div class="row mt-4">
            <div class="col-md">
              <div class="card text-center">
                <h5 class="card-title">Ultrasonic</h5>
                <hr />
                <div class="d-flex justify-content-between">
                  <div class="label">Lattitude:</div>
                  <div class="value" data-socket="lat" />
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="label">Longitude:</div>
                  <div class="value" data-socket="lng" />
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="label">Ultrasonic 1:</div>
                  <div class="value" data-socket="ultrasonic1" />
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="label">Ultrasonic 2:</div>
                  <div class="value" data-socket="ultrasonic2" />
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="label">Voltage:</div>
                  <div class="value" data-socket="voltage" />
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card text-center">
                <h5 class="card-title">Wifi Status</h5>
                <hr />
                <div class="d-flex justify-content-between">
                  <div class="label">Name:</div>
                  <div class="value" data-socket="wifiName" />
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="label">Strength:</div>
                  <div class="value" data-socket="wifiStrength" />
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card text-center">
                <h5 class="card-title">Buttons</h5>
                <hr />
                <div class="d-flex justify-content-between">
                  <div class="btn-container">
                    <button
                      class="btn btn-outline-primary btn-block"
                      data-socket="btn-hold"
                    >
                      Hold
                    </button>
                  </div>
                  <div class="btn-container">
                    <button
                      class="btn btn-outline-danger btn-block"
                      data-socket="btn-red"
                    >
                      Red
                    </button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="btn-container">
                    <button
                      class="btn btn-outline-warning btn-block"
                      data-socket="btn-yellow"
                    >
                      Yellow
                    </button>
                  </div>
                  <div class="btn-container">
                    <button
                      class="btn btn-outline-success btn-block"
                      data-socket="btn-green"
                    >
                      Green
                    </button>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="btn-container">
                    <button
                      class="btn btn-outline-dark btn-block"
                      data-socket="btn-buzzer"
                    >
                      Buzzer
                    </button>
                  </div>
                  <div class="btn-container">
                    <button
                      class="btn btn-outline-info btn-block"
                      data-socket="btn-flood"
                    >
                      Flood
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="offset-md-3 col-md-6">
              <div class="arrow-keys-wrapper">
                <div>
                  <div
                    id="arrow-up"
                    class="arrow d-flex justify-content-center align-items-center text-secondary mx-auto"
                  >
                    <div class="mb-2">&uarr;</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-4">
                  <div
                    id="arrow-left"
                    class="arrow d-flex justify-content-center align-items-center text-secondary"
                  >
                    <div class="mb-3">&larr;</div>
                  </div>
                  <div
                    id="arrow-down"
                    class="arrow d-flex justify-content-center align-items-center text-secondary"
                  >
                    <div>&darr;</div>
                  </div>
                  <div
                    id="arrow-right"
                    class="arrow d-flex justify-content-center align-items-center text-secondary"
                  >
                    <div class="mb-3">&rarr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default home;
