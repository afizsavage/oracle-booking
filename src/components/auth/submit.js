import { useLocation } from 'react-router-dom';

const SubmitButton = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <input
      type="submit"
      value={currentRoute === '/sign-in' ? 'sign in' : 'sign up'}
    />
  );
};

export default SubmitButton;
