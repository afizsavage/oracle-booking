import NavItem from './nav-link';

const links = [
  { name: 'Cars', path: '/' },
  { name: 'Reserve', path: '/reserve' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Add Car', path: '/add' },
  { name: 'Delete Car', path: '/delete' },
];

const Navbar = () => {
  const userState = { isLoggedIn: true };
  return (
    <ul className="pl-5 pt-12 lg:pt-0">
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
