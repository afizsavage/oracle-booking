import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const NavItem = ({ name, path, style }) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <li>
      <NavLink
        to={path}
        className={
          currentRoute === path
            ? `${style} pl-7 py-1 my-2 text-gray-500 hover:bg-white block border-l-2 b-pri w-full`
            : `${style} pl-7 py-1 my-2 block w-full text-gray-500 hover:bg-white`
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
