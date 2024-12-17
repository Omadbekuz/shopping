import React from "react";
import "./Home.css";
//icons
import facebookicon from "./assets/facebook.png";
import instagramicon from "./assets/instageam.png";
import twittericon from "./assets/twitter.png";

export default function Home() {
  return (
    <div id="Home">
      <div id="Homeleft">
        <button>
          <img src={facebookicon} alt="facebookicon" />
        </button>
        <button>
          <img src={instagramicon} alt="instagramicon" />
        </button>
        <button>
          <img src={twittericon} alt="twittericon" />
        </button>
      </div>
      <div>
        <div id="Homeright">
          <h1>
            Enjoy your life in our <br /> luxurious furniture
          </h1>
          <p>
            If you are looking for a furniture then you have <br /> come to the
            right place.
          </p>
          <button>Order Now</button>
        </div>
        <div class="stats-container">
          <div class="stat-item">
            <h2>120 k</h2>
            <p>Furniture Sale</p>
          </div>
          <div class="stat-item">
            <h2>98 k</h2>
            <p>
              Review <span class="star">⭐</span> (4.5)
            </p>
          </div>
          <div class="stat-item">
            <h2>125</h2>
            <p>Furniture Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
