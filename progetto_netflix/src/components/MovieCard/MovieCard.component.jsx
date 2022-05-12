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
        setMovie(data);
        //
      });
  };

  // VALORI UTILI
  const imagePath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  //
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Subtitle>{movie.tagline}</Card.Subtitle>
          <Card.Subtitle>{movie.runtime}</Card.Subtitle>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
