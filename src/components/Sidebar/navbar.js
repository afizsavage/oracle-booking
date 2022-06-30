import { useSelector } from 'react-redux';

import NavItem from './nav-link';

const links = [
  { name: 'Cars', path: '/' },
  { name: 'My Favourites', path: '/favourites' },
  { name: 'Add Car', path: '/add' },
  { name: 'Delete Car', path: '/delete' },
];

const Navbar = () => {
  const userState = useSelector((state) => state.user);
  return (
    <ul className="mt-24 lg:pt-0">
      {links.map((link) => (
        <NavItem
          key={links.indexOf(link)}
          name={link.name}
          path={link.path}
          style={!userState.isLoggedIn && link.path !== '/' ? 'hidden' : ''}
        />
      ))}
    </ul>
  );
};

export default Navbar;
