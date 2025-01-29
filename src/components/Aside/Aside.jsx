import "./Aside.css";
import {
  FaHtml5,
  FaJsSquare,
  FaJava,
  FaReact,
  FaPython,
  FaAngleLeft,
} from "react-icons/fa";
import { BsRecordCircle, BsRecordCircleFill } from "react-icons/bs";

import { IoLogoCss3 } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";
import React,{useState} from "react";
const Aside = () => {
  const [isExpanded,setExpanded]=useState(true);
  const toggleSize = () => {
    setExpanded(prevState=>!prevState);
};
  return (
    <div>
      <div className="container-aside"
      style={{
        width: isExpanded ? '400px' : '200px',  // Toggle between two sizes
        height: isExpanded ? '400px' : '200px',
        backgroundColor: 'lightblue',
        transition: 'width 0.3s, height 0.3s', // Smooth transition for resizing
      }}>
        <div className="compress-btn">
          <button className="cmp-btn" onClick={toggleSize}>
            <FaAngleLeft />
          </button>
        </div>
        <div className="item">
          <FaHtml5 />
          html
        </div>
        <div className="item">
          <IoLogoCss3 />
          css
        </div>
        <div className="item">
          <FaJsSquare />
          js
        </div>
        <div className="item">
          <FaPython />
          python
        </div>
        <div className="item">
          <FaReact />
          react
        </div>
        <div className="item">
          <DiJqueryLogo />
          jquery
        </div>
        <div className="item">
          <FaJava />
          java
        </div>
        <div className="item">
          <BsRecordCircle />
          c++
        </div>
        <div className="item">
          <BsRecordCircleFill />c
        </div>
      </div>
    </div>
  );
};
export default Aside;
