import React, { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./myswiper.style.scss";
import { Container, Card } from "react-bootstrap";

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
    <Card className="bg bg-transparent bordosezioni mt-3 card-size border-0">
      <div className=" bordoswiper w-25">
        <h3 className="text-white mt-3 ms-3">{sliderName}</h3>
        {/* {console.log(sliderName)} */}
      </div>
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
            <SwiperSlide key={element.id}>
              {element ? <CardItem key={element.id} list={element} /> : null}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Card>
  );
}
