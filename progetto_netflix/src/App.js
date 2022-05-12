import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard.component";
import NavBar from "./components/NavBar/NavBar.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Header/>
      <MovieCard />
      <Footer/>
    </div>
  );
}

export default App;
