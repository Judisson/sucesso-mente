import { AiOutlineMenu } from 'react-icons/ai';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Icon2 from '@/Components/Icon';

import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="topbar">
      <span>Logo</span>
      <nav className="topbar-navegador">
        <NavLink to="/" title="Home">
          HOME
        </NavLink>
        <NavLink to="/pages" title="Pages">
          PAGES
        </NavLink>
        <NavLink to="/courses" title="Courses">
          COURSES
        </NavLink>
        <NavLink to="/blog" title="Blog">
          BLOG
        </NavLink>
        <NavLink to="/portfolio" title="Portfolio">
          PORTFOLIO
        </NavLink>
        <NavLink to="/contactus" title="Contact Us">
          CONTACT US
        </NavLink>
      </nav>

      <span className=" d-flex gap-5">
        <Icon2 icon={RxMagnifyingGlass} size={2.5} color={'black'} />
        <Icon2 icon={AiOutlineMenu} size={2.5} color={'black'} />
      </span>
    </div>
  );
};

export default TopBar;
