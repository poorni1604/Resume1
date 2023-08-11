import "./HeroimageStyle.css";

import React from 'react';

import bg2 from "../img/bg2.jpg";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src= {bg2} alt="imagepoornima"/>
    </div>
    <div className="content">
        <p>Hello,I am Poornima venkatesh</p>
        <h1>A AI&ML enigneer 
            and a data analyst</h1>
        <div>
            <Link to="/project" className ="btn">Projects</Link>
            <Link to="/contact" className ="btn btn-light">Contact</Link>

        </div>
    </div>
  </div>;

};

export default Heroimage;
