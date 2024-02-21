import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import Mainlayout from "./Layout/Mainlayout";
import Faqs from "./pages/Faqs";
import NetworkPage from "./pages/NetworkPage";
import About from "./pages/AboutUS";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import AdminPanel from "./pages/AdminPanel";
import NewsPanel from "./pages/NewsPanel";
import NewsUpdate from "./pages/NewsUpdate";
import ServicesPanel from "./pages/ServicesPanel";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import ServicesPanel from "./pages/ServicesPanel";
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
          <Route path="/contact" element={<Contact />} />;
          <Route path="/news" element={<NewsPage />} />;
          <Route path="/admin_panel" element={<AdminPanel />} />;
          <Route path="news_panel" element={<NewsPanel />} />;
          <Route path="/news_panel/edit/:id" element={<NewsUpdate />} />;
          <Route path="/services_panel" element={<ServicesPanel />} />;
          <Route path="/user/login" element={<LoginPage />} />;
          <Route path="/user/register" element={<RegisterPage />} />;
        </Route>
        <Route path="/404" element={<Page404 />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
