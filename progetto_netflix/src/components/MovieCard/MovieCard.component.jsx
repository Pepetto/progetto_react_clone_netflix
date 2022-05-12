import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function MovieCard() {
  const [movie, setMovie] = useState([]);
  const api_key = "944143a810402073e91619e119fa95ef";
  //

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    fetch(`http://localhost:2000/api/movie`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //
      });
  };

  //
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
