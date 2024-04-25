import React from "react";
import "./home2.css";
import hand from "./img/img2.jpg";

export default function Home2() {
  return (
    <>
      <section>
        <div className="glass">
          <div className="glass-left">
            <img className="img2" src={hand} alt="" />
          </div>
          <div className="glass-right">
            <h1>
              Best Meal <br /> Brunch in NYC
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              fugit aut pariatur cumque omnis voluptate nulla praesentium
              nostrum placeat. Corrupti a dignissimos fugit vel, pariatur eaque
              asperiores consequatur reiciendis maiores. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ut qui ipsam velit. Fuga
              eveniet repellendus culpa id velit illo nam minus. Assumenda nihil
              cupiditate reiciendis omnis accusantium delectus, ut autem?{" "}
            </p>
            <a href="@ritik">Read Story</a>
          </div>
        </div>
      </section>

      <section>
        <div className="main">
          <div className="c1">
            <div className="c2">
              <h2>Move Work Forward</h2>
              <p>
                With Asana, you can drive clarity and impact at scale by
                connecting work and workflows to company-wide goals.
              </p>
              <input type="text" placeholder="......type here ....." />
              <button className="btn">
                <span>Get started for free</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
