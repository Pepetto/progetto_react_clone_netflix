// PACKAGES
import "./App.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS

// PAGES
import HomePage from "./pages/HomePage/HomePage";
import Landing from "./pages/Landing/Landing.page";
import Login from "./pages/Login/Login.page";
import SceltaProfilo from "./pages/SceltaProfilo/SceltaProfilo.page";
import Layout from "./pages/Layout/Layout.page"

//
export default function App() {
  return (
      

      <BrowserRouter>
        <Routes>
        <Route path="landing" element={<Landing />} />
        <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="homePage" element={<HomePage />} />
            <Route path="profilo" element={<SceltaProfilo/>}/>
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter> 

  );
}
