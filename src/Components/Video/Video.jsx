import React from "react";
import video from "./banana.mp4.mp4";
import "./video.css";

export default function Video() {
  return (
    <>
      <div className="videoContainer">
        <video className="video" src={video} autoPlay loop muted />{" "}
        <div className="contents">
          <h1>Welcoome to Banana World</h1>
          <p>Banana Banana very very sweet Banana</p>
        </div>
      </div>
    </>
  );
}
