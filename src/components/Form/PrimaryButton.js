/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, onClick, btnType = 'button' }) => (
  <button
    type={btnType}
    className="uppercase font-bold bg-orange-700 hover:bg-gray-600 transition-colors py-3 px-6 rounded-xl text-white self-center"
    onClick={onClick}
  >
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  btnType: PropTypes.string,
};
PrimaryButton.defaultProps = { children: '', onClick: null, btnType: 'button' };
export default PrimaryButton;
