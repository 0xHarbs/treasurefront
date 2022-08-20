import "../styles/App.css";
import "../styles/Testimonials.css";
import React from "react";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials__valueSection">
        <div className="testimonials__valuePoints">
          <div className="testimonials__valueBucket">
            <h3>
              “Treasure is a great way to earn yield from projects that I support. I'm getting a yield on cash that wasn't doing anything.”
            </h3>
            <div className="testimonials__profileBucket">
              <img src="https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg"></img>
              <div className="testimonials__profileColumn">
              <p className="testimonials__name">Anon</p>
              <p className="testimonials__title">Unknown</p>
              </div>
            </div>
          </div>
          <div className="testimonials__valueBucket">
            <h3>
              “We're finding it really simple to generate revenue from our treasury on tokens that were previously idle.”
            </h3>
            <div className="testimonials__profileBucket">
              <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos.jpg"></img>
              <div className="testimonials__profileColumn">
              <p className="testimonials__name">Becky Stell</p>
              <p className="testimonials__title">Sr. Engineer - Fauxchain</p>
              </div>
            </div>
          </div>
          <div className="testimonials__valueBucket">
            <h3>
              “I'm lending and borrowing right now, bullish on tonnes of projects and my cash is helping them do more.”
            </h3>
            <div className="testimonials__profileBucket">
              <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"></img>
              <div className="testimonials__profileColumn">
              <p className="testimonials__name">Ethan Jordan</p>
              <p className="testimonials__title">Block Analyst - Enzotech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
