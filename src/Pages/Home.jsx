import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCategorias } from '../../../redux/actions/categoriaActions';

import HomeLayout from '@/Layout/MainLayout';
import withLayout from '@/Layout/withLayout';
import HeroHome from './components/HeroHome';

const Home = () => {
  return (
    <div className="pagina-home">
      <HeroHome />
    </div>
  );
};
export default withLayout(HomeLayout)(Home);
