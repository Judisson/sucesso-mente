import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/Layout/MainLayout';
import Cursos from '@/Pages/Cursos';
import Home from '@/Pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/pages" element={<></>} />
    </Routes>
  );
};

export default Router;
