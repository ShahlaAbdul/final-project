import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import Mainlayout from "./Layout/Mainlayout";
import Faqs from "./pages/Faqs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />;
          <Route path="/stores" element={<Stores />} />;
          <Route path="/faq" element={<Faqs />} />;
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;