import "./carditem.style.scss";

import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { Button } from "bootstrap";
=======
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Button } from "@mui/material";
import {DeleteIcon} from "@mui/material";
import {IconButton} from "@mui/material";
import { Modal } from "react-bootstrap";
>>>>>>> 87e80be1eea8c4cd2f0b432b3e053d1cf90ef71c

export default function CardItem({ list }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [isHovered, setIsHovered] = useState(false);
  const {
    backdrop_path,
    first_air_date,
    // genre_ids,
    id,
    media_type,
    overview,
    poster_path,
    release_date,
    title,
    name,
    // vote_avarage,
  } = list;
  const imagePath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

<<<<<<< HEAD
  return (
    <>
      <div className="square mb-5 ms-5 ps-5">
        <Card.Img variant="top" src={imagePath} className="cover" />
        <Card.Text className="text">
          <span>
            <PlayArrowIcon></PlayArrowIcon>
            <AddIcon />
            <ThumbUpIcon />
            <ThumbDownAltIcon />
          </span>
          <div>
            {title} <br />
            {release_date} <br />
          </div>
        </Card.Text>
      </div>
    </>
  );
=======
  return  <>  
                  <Modal
                  className=""
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}>
                      <Modal.Header closeButton>
                        <Modal.Title className="text-dark">{list.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Container>
                          <Row>
                            <Col>
                              <Card.Img fluid variant="top" src={imagePath} className="cover"   />
                            </Col>
                            <Col>
                              <Card.Body>
                                <Card.Text className="text-dark">
                                  <p className="text-dark">data rilascio : {list.release_date}</p>
                                  {list.overview}
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Container>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="dark" onClick={handleClose} className="btn btn-dark text-dark fs-4" >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
            <div className="square mb-5 ms-5 ps-5">
              <Card.Img fluid variant="top" src={imagePath} className="cover"  />
              <Card.Text className="text">
              <IconButton variant="primary" size="small"  onClick={handleShow}>see</IconButton>
                <span className="d-flex justify-content-around">
                  <IconButton aria-label="delete" size="small">
                    <PlayArrowIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <ThumbUpIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <ThumbDownAltIcon fontSize="inherit" />
                  </IconButton>
                  
                </span>


                <div>
                  {title} <br />
                  {release_date} <br />
                </div>
              </Card.Text>
            </div>
          </>
>>>>>>> 87e80be1eea8c4cd2f0b432b3e053d1cf90ef71c
}
