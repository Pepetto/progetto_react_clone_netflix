// PACKAGES
import "./App.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS

// PAGES
import HomePage from "./pages/HomePage/HomePage";

//
export default function App() {
  return (
    <div className="App">
      <HomePage />

      {/* <BrowserRouter>

        <Routes>
          <Route path="landing" element={<Landing />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="profilo" element={<SceltaProfilo/>}/>
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
