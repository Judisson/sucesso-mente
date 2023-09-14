import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

import '@/scss/app.scss';
import '@/scss/bootstrap.scss';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
