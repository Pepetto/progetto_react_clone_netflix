import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard.component";
import NavBar from "./components/NavBar/NavBar.component";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MovieCard />
    </div>
  );
}

export default App;
