import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, Outlet } from 'react-router-dom';

type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type AppDrawerProps = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="text-3xl font-bold" />
        </div>
        <div className={`menu-heading ${isOpen ? 'block' : 'hidden'}`}>
          Hylian Shopping
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li key={item.name} className="menu-item">
              <Link
                to={item.path}
                className="menu-link"
                onClick={() => setIsOpen(false)}>
                <img src={item.iconUrl} className="item-icon" alt={item.name} />
                <span className={`${isOpen ? 'inline' : 'hidden'}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grow p-4">
        <Outlet />
      </div>
    </div>
  );
}
