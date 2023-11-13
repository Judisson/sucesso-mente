import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/app.scss";

import TopBar from "@/Layout/Topbar/Topbar";
import Footer from "@/Layout/Footer/Footer";

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <TopBar />

      <Router />
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
