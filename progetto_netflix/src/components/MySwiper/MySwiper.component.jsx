import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./myswiper.style.scss";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function MySwiper(props) {
  const { sliderName, category } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    getListInfo();
  }, []);

  const getListInfo = async () => {
    await fetch(`http://localhost:2000/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  };

  // console.log(list);

  return (
    <Card className="bg bg-transparent border-1 border-top mt-3 card-size">
      <h3 className="text-white">{sliderName}</h3>
      {/* {console.log(sliderName)} */}
      
    <Container>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation, Zoom]}
        className="mySwiper mt-5 pt-5"
      >

          {list.map((element) => (

              <SwiperSlide key={element.id} >

                <CardItem key={element.id} list={element} />

              </SwiperSlide>

          ))}

      </Swiper>
    </Container>
    </Card>
  );
}
