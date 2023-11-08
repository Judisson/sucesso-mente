import { AiOutlineMenu } from 'react-icons/ai';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Icon from '@/Components/Icon';
import Logo from '@/shared/svg/Logo.png';




import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="topbar">
      <img src={Logo}/>

      <nav className="topbar-navegador">
        <NavLink to="/" title="Home">
          HOME
        </NavLink>
        <NavLink to="/treinamentos" title="Treinamentos">
          TREINAMENTOS
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
