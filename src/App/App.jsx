import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

import '@/scss/app.scss';
import '@/scss/bootstrap.scss';
import TopBar from '@/Layout/Topbar/Topbar';

function App() {
  return (
    <BrowserRouter>
    <header>
      <TopBar />
    </header>
      <Router />
    <footer>
      <div>Footer</div>
    </footer>
    </BrowserRouter>
  );
}

export default App;
