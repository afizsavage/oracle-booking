import NavItem from './nav-link';

const links = [
  { name: 'Cars', path: '/' },
  { name: 'My Favourites', path: '/favourites' },
  { name: 'Add Car', path: '/add' },
  { name: 'Delete Car', path: '/delete' },
];

const Navbar = () => {
  const userState = { isLoggedIn: true };
  return (
    <ul className="mt-24 lg:pt-0">
      {links.map((link) => (
        <NavItem
          key={links.indexOf(link)}
          name={link.name}
          path={link.path}
          style={
            !userState.isLoggedIn
            && link.path !== '/'
            && link.path !== '/reserve' ? 'hidden' : ''
          }
        />
      ))}
    </ul>
  );
};

export default Navbar;
