import { useLocation } from 'react-router-dom';
import InputField from './input';
import SubmitButton from './submit';

const AuthForm = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentRoute === '/sign-in' ? (
        <>
          {' '}
          <InputField placeholder="Enter Email" type="text" />
          <InputField placeholder="Enter Password" type="password" />
        </>
      ) : (
        <>
          {' '}
          <InputField placeholder="Enter Name" type="text" />
          <InputField placeholder="Enter Email" type="text" />
          <InputField placeholder="Enter Password" type="password" />
          <InputField placeholder="Confirm Password" type="password" />
        </>
      )}

      <SubmitButton />
    </form>
  );
};

export default AuthForm;
