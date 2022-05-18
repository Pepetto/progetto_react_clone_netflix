import React from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";

function Profilo(props) {
    

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="text-dark">{props.name}</Card.Title>
          
        </Card.Body>
      </Card>
    </>
  );
}
export default Profilo;
