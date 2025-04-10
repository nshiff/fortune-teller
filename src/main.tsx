import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { RouteA } from "./routes/RouteA.tsx";
import { RouteB } from "./routes/RouteB.tsx";
import { RouteC } from "./routes/RouteC.tsx";
import { Header } from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a" element={<RouteA />} />
        <Route path="/b" element={<RouteB />} />
        <Route path="/c" element={<RouteC />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
