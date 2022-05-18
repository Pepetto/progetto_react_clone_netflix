import Featured from "../../components/Featured/Featured.component";
import MyNavbar from "../../components/MyNavbar/MyNavbar.component";
import MySwiper from "../../components/MySwiper/MySwiper.component";

import "./homepage.style.scss";

export default function HomePage() {
  const homeSliders = [
    {
      sliderName: "Top 10 del momento",
      category: "discover/movie",
    },
    {
      sliderName: "Serie TV acclamate",
      category: "discover/tv",
    },
  ];

  return (
    <div className="home">
      <MyNavbar />

      <Featured category={"discover/tv"} />

      {homeSliders.map((slider) => (
        <MySwiper cliderName={slider.sliderName} category={slider.category} />
      ))}
    </div>
  );
}
