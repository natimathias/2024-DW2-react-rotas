import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MeuSite</h1>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                  : 'text-gray-700 hover:text-blue-600'
              }
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                  : 'text-gray-700 hover:text-blue-600'
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                  : 'text-gray-700 hover:text-blue-600'
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
