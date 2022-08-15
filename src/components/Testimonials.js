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
              “It’s not just that is fast, the scalability and ease of use is
              simply unparalleled, truly mindblowing”
            </h3>
            <div className="testimonials__profileBucket">
              <img src="https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg"></img>
              <div className="testimonials__profileColumn">
              <p className="testimonials__name">Markus Freeman</p>
              <p className="testimonials__title">Dev Ops - Azious</p>
              </div>
            </div>
          </div>
          <div className="testimonials__valueBucket">
            <h3>
              “Onix accelerated our development process tenfold all while
              maintaining security and integreity from production to post
              launch”
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
              “Onix accelerated our development process tenfold all while
              maintaining security and integreity from production to post
              launch”
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
