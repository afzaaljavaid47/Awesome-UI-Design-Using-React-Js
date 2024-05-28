import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container-fluid px-0 hero-section">
        <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-sm-12">
            <h1>Good food choices are good investments.</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <div className="mt-4">
                <a className="btn order-btn" href="/">Order Now <i className="ms-2 fa-solid fa-basket-shopping"></i></a>
                <a className="btn order-btn1" href="/">Order Now <i className="ms-2 me-2 fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
