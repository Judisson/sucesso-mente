import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/Layout/MainLayout';

import Home from '@/Pages/Home';
import Treinamentos from '@/Pages/Treinamentos';
import LivroseEbooks from '@/Pages/LivroseEbooks';
import Mais from '@/Pages/Mais';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treinamentos" element={<Treinamentos />} />
      <Route path="/livroseebooks" element={<LivroseEbooks />} />
      <Route path="/mais" element={<Mais />} />
      <Route path="/pages" element={<></>} />
      <Route path="*" element={<div>Página não encontrada</div>} />

    </Routes>
  );
};

export default Router;
