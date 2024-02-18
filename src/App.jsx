import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import Mainlayout from "./Layout/Mainlayout";
import Faqs from "./pages/Faqs";
import NetworkPage from "./pages/NetworkPage";
import About from "./pages/AboutUS";
import Page404 from "./pages/Page404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />;
          <Route path="/services" element={<NetworkPage />} />;
          <Route path="/stores" element={<Stores />} />;
          <Route path="/faq" element={<Faqs />} />;
          <Route path="/about" element={<About />} />;
        </Route>
        <Route path="404" element={<Page404 />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
