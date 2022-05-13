// PACKAGES
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Layout from "./pages/Layout/Layout.page";

// PAGES
import Dashboard from "./pages/Dashboard/Dashboard.page";
import Landing from "./pages/Landing/Landing.page";
import Login from "./pages/Login/Login.page";

//
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="landing" element={<Landing />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />

            <Route paht="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
