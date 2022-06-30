import PropTypes from 'prop-types';

import Footer from './footer';
import Navbar from './navbar';

const SideBar = ({ renderAside }) => (
  <aside
    className={
      renderAside
        ? ' absolute flex bg-side bottom-0 left-0 lg:relative w-full flex-col justify-between h-full lg:h-screen lg:w-2/12 border-r-2 pt-0'
        : 'hidden'
    }
  >
    <div>
      {' '}
      <div className="pl-2 lg:flex justify-center items-center">
        <img className="w-auto h-44" alt="logo" src="/logo.png" />
      </div>
      <Navbar />
    </div>
    <Footer />
  </aside>
);

export default SideBar;

SideBar.propTypes = {
  renderAside: PropTypes.bool.isRequired,
};
