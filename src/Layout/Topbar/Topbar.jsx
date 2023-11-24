import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PiBrain } from "react-icons/pi";
import Icon from '@/Components/Icon';
import Logo from '@/shared/svg/Logo.png';
// import LogoTeste from '@/shared/svg/icongroup.svg';
// import LogoNew from '@/shared/svg/logoNew.svg';
// import  LogoNew from '../../shared/svg/logoNew.svg?react';
// import LogoHover from '@/shared/svg/LogoHover.svg';
// import instagram  from '@/shared/svg/instagram.svg';




import { NavLink } from 'react-router-dom';
import IconBrainFlash from '@/Components/IconBrainFlash';

const TopBar = () => {

  return (
    <div className="topbar">
      <img src={Logo}/>

      <nav className="topbar-navegador">
        <NavLink to="/treinamentos" title="Treinamentos">
          TREINAMENTOS
        </NavLink>
        <NavLink to="/videos" title="Vídeos">
          VÍDEOS 
        </NavLink>
        <NavLink to="/" title="Home">
        <IconBrainFlash/>
        </NavLink>
        <NavLink to="/livroseebooks" title="Livros e Ebooks">
          LIVROS E EBOOKS 
        </NavLink>
        <NavLink to="/mais" title="Mais">
          MAIS <Icon icon={MdKeyboardArrowDown} size={2.5} color={'white'} />
        </NavLink>
      </nav>

      <span className="icons-pesquisa d-flex gap-5">
        <Icon icon={RxMagnifyingGlass} size={2.5} color={'white'} />
        <Icon icon={AiOutlineMenu} size={2.5} color={'white'} />
      </span>
    </div>
  );
};

export default TopBar;
