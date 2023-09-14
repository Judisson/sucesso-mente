import { Outlet } from 'react-router-dom';
import TopBar from './Topbar/Topbar';

const MainLayout = ({ children, ...rest }) => {
  return (
    <div>
      <header className="header-topbar-web">
        <TopBar />
      </header>

      {children?.content && <children.content {...rest} />}
    </div>
  );
};

export default MainLayout;
