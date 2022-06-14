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
            ? `${style} pl-3 py-2 block bg-pri  text-white w-full font-semibold`
            : `${style} pl-3 py-2 block w-full font-semibold hover:bg-white`
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
