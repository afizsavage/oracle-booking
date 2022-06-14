import PropTypes from 'prop-types';

const SideBar = ({ renderAside, setRenderAside }) => (
  <aside
    className={
      renderAside
        ? 'top-0 absolute bg-slate-100 lg:relative flex flex-col z-50 justify-between h-screen w-full lg:w-72 border-r-2 pt-0 pb-6'
        : 'hidden'
    }
  >
    <div className="lg:hidden absolute right-2 top-2 border">
      <button className="p-1" type="button" onClick={() => setRenderAside()}>
        {/* <MdOutlineClose className="text-xl text-gray-700" /> */}
      </button>
    </div>
    <div>
      {' '}
      <div className=" hidden lg:flex justify-center items-center">
        <img className="w-auto h-44" alt="logo" src="/logo.png" />
      </div>
      <ul className="pl-5 pt-12 lg:pt-0">
        {/* {links.map((link) => (
          <NavItem
            key={links.indexOf(link)}
            name={link.name}
            path={link.path}
            style={
              !userState.isLoggedIn &&
              link.path !== '/' &&
              link.path !== '/reserve'
                ? 'hidden'
                : ''
            }
          />
        ))} */}
      </ul>
    </div>
    <div>
      {/* <ul className="flex justify-center mb-3">
        {socialIcons.map((icon) => (
          <SocialLink icon={icon} key={icon.key} />
        ))}
      </ul>
      <span className="text-xs font-medium w-full text-center block">
        © {new Date().getFullYear()} Booking App
      </span> */}
    </div>
  </aside>
);

export default SideBar;

SideBar.propTypes = {
  renderAside: PropTypes.bool.isRequired,
  setRenderAside: PropTypes.func.isRequired,
};
