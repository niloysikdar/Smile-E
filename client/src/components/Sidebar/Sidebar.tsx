import { useState } from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { SidebarData } from './SidebarData';
import './Sidebar.scss';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </div>
          <p>Support Us for a good cause</p>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <AiOutlineClose />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='nav-text'>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
