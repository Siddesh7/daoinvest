import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AssetPage from "./pages/AssetPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/invest/:address" element={<AssetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
