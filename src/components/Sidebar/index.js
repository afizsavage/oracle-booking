import PropTypes from 'prop-types';

import Footer from './footer';
import Navbar from './navbar';

const SideBar = ({ renderAside, setRenderAside }) => (
  <aside
    className={
      renderAside
        ? 'top-0 absolute bg-white lg:relative flex flex-col z-50 justify-between h-screen w-full lg:w-2/12 border-r-2 pt-0 pb-6'
        : 'hidden'
    }
  >
    <div className="lg:hidden absolute right-2 top-2 border">
      <button className="p-1" type="button" onClick={() => setRenderAside()}>
        x
      </button>
    </div>
    <div>
      {' '}
      <div className=" hidden lg:flex justify-center items-center">
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
  setRenderAside: PropTypes.func.isRequired,
};
