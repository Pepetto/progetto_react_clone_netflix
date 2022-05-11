import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard.component";
import NavBar from "./components/NavBar/NavBar.component";
import Header from "./components/Header/Header.component";

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Header/>
      <MovieCard />
    </div>
  );
}

export default App;
