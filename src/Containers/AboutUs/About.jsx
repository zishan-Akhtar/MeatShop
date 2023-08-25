import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div className="About">
      <div className="About__title">
        <h2>About Us</h2>
        <h1>
          We Best Provides<span><br></br>Meat</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Enim,
          eligendi quibusdam quos dolor nam fugit <br></br>rerum pariatur, saepe est
          incidunt suscipit <br></br>inventore facilis debitis. Eveniet inventore ab
          quisquam!<br></br> Eius, hic fuga. Ut fugiat laudantium pariatur <br></br>recusandae
          facere cum labore deleniti!
        </p>
        <br></br>
        <h6>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Enim,
          eligendi quibusdam quos dolor nam fugit <br></br>rerum pariatur, saepe est
          incidunt suscipit <br></br>inventore facilis debitis. Eveniet inventore ab
          quisquam!<br></br> Eius, hic fuga. Ut fugiat laudantium pariatur <br></br>recusandae
          facere cum labore deleniti!
        </h6>
      </div>
      <div className="About__image">
        <img src="/Images/Meat-singal2.png" alt="meat" />
      </div>
    </div>
  );
};

export default About;
