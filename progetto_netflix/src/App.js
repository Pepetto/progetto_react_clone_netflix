// PACKAGES
import "./App.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// COMPONENTS
import MyNavbar from "./components/MyNavbar/MyNavbar.component";

// PAGES
import HomePage from "./pages/HomePage/HomePage";
import PaginaTV from "./pages/PaginaTV/PaginaTV.page";
import PaginaFilm from "./pages/PaginaTV/PaginaTV.page";
//
import Landing from "./pages/Landing/Landing.page";
import Login from "./pages/Login/Login.page";
import SceltaProfilo from "./pages/SceltaProfilo/SceltaProfilo.page";
import Layout from "./pages/Layout/Layout.page";
import SearchList from "./pages/SearchList/SearchList";

//
export default function App() {
  const [type, setType] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* LOGIN E LANDING */}
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Landing />} />

          {/* PAGINE DELLA DASHBOARD */}
          <Route path="home" element={<HomePage />} />
          <Route path="series" element={<PaginaTV type={"tv"} />} />
          <Route path="movies" element={<PaginaFilm type={"movie"} />} />
          <Route path="search" element={<SearchList />} />

          {/* <Route path="movies" element={<HomePage type={"movie"} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>

    // <BrowserRouter>
    //   <Routes>
    //   <Route path="landing" element={<Landing />} />
    //   <Route path="login" element={<Login />} />
    //     <Route path="/" element={<Layout />}>
    //       <Route path="homePage" element={<HomePage />} />
    //       <Route path="profilo" element={<SceltaProfilo/>}/>
    //       <Route path="*" element={<h1>404</h1>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
