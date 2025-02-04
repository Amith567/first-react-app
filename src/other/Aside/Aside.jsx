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
    <div
    style={{
      width: isExpanded ? '10rem' : '6rem',
      height : isExpanded ? '400px' : '200px',
      transition : 'width 0.3s, height 0.3s',
    }}>
      <div className="container-aside"
        >
        <div className="compress-btn">
          <button className="cmp-btn" onClick={toggleSize}>
            <FaAngleLeft />
          </button>
        </div>
        <div className="item">
          <FaHtml5 />
          <a href="#">html</a>
        </div>
        <div className="item">
          <IoLogoCss3 />
          <a href="#">css</a>
        </div>
        <div className="item">
          <FaJsSquare />
          <a href="#">js</a>
        </div>
        <div className="item">
          <FaPython />
          <a href="">python</a>
        </div>
        <div className="item">
          <FaReact />
          <a href="#">react</a>
        </div>
        <div className="item">
          <DiJqueryLogo />
          <a href="#">jquery</a>
        </div>
        <div className="item">
          <FaJava />
          <a href="#">java</a>
        </div>
        <div className="item">
          <BsRecordCircle />
          <a href="#">c++</a>
        </div>
        <div className="item">
          <BsRecordCircleFill /><a href="#">c</a>
        </div>
      </div>
    </div>
  );
};
export default Aside;
