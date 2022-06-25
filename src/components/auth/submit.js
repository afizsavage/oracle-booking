import PropType from 'prop-types';
import { useLocation } from 'react-router-dom';

const SubmitButton = ({ setShowErrors }) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="w-full flex justify-center mt-4">
      <input
        onClick={() => setShowErrors(true)}
        className="bg-pri rounded-full text-sm w-24 h-8 text-white text-center font-medium inline-block"
        type="submit"
        value={currentRoute === '/sign-in' ? 'sign in' : 'sign up'}
      />
    </div>
  );
};

SubmitButton.propTypes = {
  setShowErrors: PropType.func.isRequired,
};

export default SubmitButton;
