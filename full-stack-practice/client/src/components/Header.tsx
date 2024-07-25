import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="bg-gray-900 text-white px-4 py-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline text-white">
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
