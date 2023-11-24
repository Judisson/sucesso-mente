import { Routes, Route } from 'react-router-dom';

import Home from '@/Pages/Home';
import Treinamentos from '@/Pages/Treinamentos';
import LivroseEbooks from '@/Pages/LivroseEbooks';
import Mais from '@/Pages/Mais';
import Videos from '@/Pages/Videos';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treinamentos" element={<Treinamentos />} />
      <Route path="/livroseebooks" element={<LivroseEbooks />} />
      <Route path="/videos" element={<Videos/>} />
      <Route path="/mais" element={<Mais />} />
      <Route path="/pages" element={<></>} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
};

export default Router;
