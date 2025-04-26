import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPortfolio from "./pages/DetailPortfolio";
import PagenotFound from "./pages/PagenotFound";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="portfolio/:id" element={<DetailPortfolio />} />
        <Route path="/page-Not-found" element={< PagenotFound />} />
        <Route path="*" element={< PagenotFound />} />
        <Route path="/Experience" element={< Experience />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
