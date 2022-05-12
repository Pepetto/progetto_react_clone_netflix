// PACKAGES
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import MovieCard from "./components/MovieCard/MovieCard.component";
import NavBar from "./components/NavBar/NavBar.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

// PAGES

//
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        // ROUTES
        <NavBar />
        <Header />
        <MovieCard />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
