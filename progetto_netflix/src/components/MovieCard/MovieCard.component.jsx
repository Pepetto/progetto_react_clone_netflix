import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

export default function MovieCard() {
  const [movie, setMovie] = useState([]);
  const api_key = "944143a810402073e91619e119fa95ef";
  //

  useEffect(() => {
    getInfo();
  }, [])


  const getInfo = () => {
    fetch(`http://localhost:2000/api/movie`).then(
      response => response.json() 
    )
    .then(data => {
      setMovie(data.movie)

    })
  }

  //
  return  <>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top"/>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </>
}

// const getInfoPerson = () => {
//   fetch("https://randomuser.me/api/%22)
//     .then((response) => response.json())
//     .then((data) => {
//       setResults(data.results);
//       console.log(data.results);
//     });
// };