import PropTypes from 'prop-types';

import { FcMenu } from 'react-icons/fc';
import { TbSearch } from 'react-icons/tb';

const Header = ({ renderAside, setRenderAside }) => {
  const toggleSidebar = () => {
    if (renderAside) {
      setRenderAside(false);
    } else {
      setRenderAside(true);
    }
  };
  return (
    <header className="w-full flex h-11 items-center justify-between px-5">
      <button type="button" onClick={() => toggleSidebar()}>
        <FcMenu className="text-xl text-gray-800" />
      </button>
      <h2>Cars</h2>
      <span>
        <TbSearch className="text-xl text-gray-600" />
      </span>
    </header>
  );
};

Header.propTypes = {
  setRenderAside: PropTypes.func.isRequired,
  renderAside: PropTypes.bool.isRequired,
};

export default Header;
