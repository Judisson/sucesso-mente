import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import '@/scss/app.scss';

import TopBar from '@/Layout/Topbar/Topbar';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      
      <Router />
    <footer>
      <div>Footer</div>
    </footer>
    </BrowserRouter>
  );
}

export default App;
