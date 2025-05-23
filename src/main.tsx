import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { FortuneCookie } from "./routes/FortuneCookie.tsx";
import { CrystalBall } from "./routes/CrystalBall.tsx";
import { TarotCards } from "./routes/TarotCards.tsx";
import { Layout } from "./components/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="fortune-cookie" element={<FortuneCookie />} />
          <Route path="crystal-ball" element={<CrystalBall />} />
          <Route path="tarot-cards" element={<TarotCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
