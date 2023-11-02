import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/app.scss";

import TopBar from "@/Layout/Topbar/Topbar";
import Footer from "@/Layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <TopBar />

      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
