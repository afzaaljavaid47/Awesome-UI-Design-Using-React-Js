import React from "react";
import "./About.css";
import leftAbout from "../../images/img/img-1.png";
import rightAbout from "../../images/img/img-2.png";
export default function About() {
  return (
    <>
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="about-img1" alt="Left About us" src={leftAbout} />
          </div>
          <div className="col-md-6 mt-5">
            <h1 className="about-txt">
              We Pride Ourselves on making real food from the best ingredients.
            </h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <a className="mt-3 btn order-btn" href="/">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 mt-5 pt-5 order-1 order-md-2 order-sm-2 order-xs-2 order-lg-1">
            <h1 className="about-txt">
              We make everything by hand with the best possible ingredients.
            </h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>
            <ul className="py-3 list-unstyled">
              <li>
                <i class="fa-solid fa-check"></i> Pizza
              </li>
              <li>
                <i class="fa-solid fa-check"></i> Burger
              </li>
              <li>
                <i class="fa-solid fa-check"></i> Shawarma
              </li>
              <li>
                <i class="fa-solid fa-check"></i> Yogut
              </li>
            </ul>
            <a className="mt-3 btn order-btn" href="/">
              Learn More
            </a>
          </div>
          <div className="col-lg-6 col-md-6 order-2 order-md-1 order-sm-1 order-xs-1 order-lg-2">
            <img className="about-img1" alt="Left About us" src={rightAbout} />
          </div>
        </div>
      </div>
      </div>
      <div className="about-bck-img">
        <div className="container text-center text-bck-center">
          <h1 className="about-bck-txt">
            We Pride Ourselves on making real food from the best ingredients.
          </h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <a className="mt-3 btn order-btn" href="/">
            Read More
          </a>
        </div>
      </div>
      </>
  );
}
