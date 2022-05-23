import React from "react";
import "../Profilo/Profilo.component.css";
import {Navbar} from 'react-bootstrap'


const Profilo = (props) => {
  return (
    <div>
      <div >
        <Navbar.Brand href="/home">
        <img className="profilo" src={props.img}></img>
        </Navbar.Brand>
        <h1 className="profilo-text">{props.name}</h1>
      </div>
    </div>
  );
};
export default Profilo;
