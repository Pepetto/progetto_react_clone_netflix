import "./carditem.style.scss";

import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Button } from "bootstrap";


export default function CardItem({ list }) {
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

  return  <>
            <div className="square mb-5 ms-5 ps-5">
              <Card.Img variant="top" src={imagePath} className="cover"  />
              <Card.Text className="text">
                <span>
                <PlayArrowIcon></PlayArrowIcon>
                <AddIcon/>
                <ThumbUpIcon/>
                <ThumbDownAltIcon/>
                </span>
                <div>
                  {title} <br />
                  {release_date} <br />
                </div>
              </Card.Text>
            </div>
          </>
}
