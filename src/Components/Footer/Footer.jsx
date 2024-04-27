import React from "react";
import "./footer.css";
import Contact from "../Contact/Contact";

export default function Footer() {
  return (
    <>
      <Contact />
      <div className="footer">
        <div className="footer1">
          <div className="address">
            <h2>address</h2>
            <p>Beta-2 Greator Noida Uttar Pardesh 248003</p>
          </div>
          <div className="solution">
            <h2>Solutions</h2>

            <ul>
              <li>
                {" "}
                <a href="">Health Care</a>
              </li>
              <li>
                <a href="">Delivery</a>
              </li>
              <li>
                <a href="">HR Sector</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
            </ul>
          </div>

          <div className="third">
            <h2>Contact us</h2>
            <hr />
            <h2>Join Us</h2>
            <hr />
          </div>

          <div className="social">
            <p>
              <a href="https://www.facebook.com/">
                {" "}
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/">
                {" "}
                <i class="fa-brands fa-instagram"></i>
              </a>
            </p>
            <p>
              <a href="https://web.whatsapp.com/">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
