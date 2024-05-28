import React from "react";
import "./Counter.css";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <section id="counter">
      <div className="counter-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-md-0 mb-lg-0 mb-3">
              <h2 className="count-style">
                <span>
                  <CountUp start={0} end={1287} delay={1} />+
                </span>
              </h2>
              <p className="count-txt">SAVINGS</p>
            </div>
            <div className="col-md-3 mb-md-0 mb-lg-0 mb-3">
              <h2 className="count-style">
                <span>
                  <CountUp start={0} end={4334} delay={1} />+
                </span>
              </h2>
              <p className="count-txt">PHOTOS</p>
            </div>
            <div className="col-md-3 mb-md-0 mb-lg-0 mb-3">
              <h2 className="count-style">
                <span>
                  <CountUp start={0} end={1440} delay={1} />+
                </span>
              </h2>
              <p className="count-txt">ROCKETS</p>
            </div>
            <div className="col-md-3 mb-md-0 mb-lg-0 mb-3">
              <h2 className="count-style">
                <span>
                  <CountUp start={0} end={5554} delay={1} />+
                </span>
              </h2>
              <p className="count-txt">GLOBES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
