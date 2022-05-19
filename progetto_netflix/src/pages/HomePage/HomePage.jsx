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
      sliderName: "Serie TV bellissime",
      category: "discover/tv",
    },
    {
      sliderName: "Grandi d'Animazione",
      category: "discover/movie/genre?genre=16",
    },
    {
      sliderName: "Fantasia portami via",
      category: "discover/tv/genre?genre=10765",
    },
    {
      sliderName: "Avventura senza paura",
      category: "discover/tv/genre?genre=10759",
    },
    {
      sliderName: "Ridere fa bene",
      category: "discover/movie/genre?genre=35",
    },
    {
      sliderName: "E’ stato il maggiordomo",
      category: "discover/movie/genre?genre=80",
    },

    {
      sliderName: "Thriller che non sembrano ma fidati",
      category: "discover/movie/genre?genre=53",
    },
  ];

  return (
    <div className="home">
      <MyNavbar />
      <Featured category={"discover/movie/genre?genre=16"} index={3} />

      {homeSliders.map((slider) => (
        <MySwiper sliderName={slider.sliderName} category={slider.category} />
      ))}
    </div>
  );
}
