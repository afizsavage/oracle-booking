/* eslint-disable react/jsx-props-no-spreading */

import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useSignUpMutation } from '../../features/api/authApi';
import SubmitButton from './submit';

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const location = useLocation();
  const currentRoute = location.pathname;
  const [signUp] = useSignUpMutation();

  const onSubmit = (data) => {
    signUp(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {currentRoute === '/sign-up' && (
        <input
          type="text"
          placeholder="Enter Fullname"
          {...register('name', {
            required: true,
            minLength: 5,
          })}
          defaultValue=""
        />
      )}
      <input
        type="text"
        placeholder="Enter Email"
        {...register('email', {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        defaultValue=""
      />
      <input
        type="password"
        placeholder="Enter Password"
        {...register('password', {
          required: true,
          minLength: 6,
        })}
      />
      {currentRoute === '/sign-up' && (
        <input
          type="password"
          placeholder="Confirm Password"
          {...register('password_confirmation', {
            required: true,
            minLength: 6,
          })}
        />
      )}
      <SubmitButton />
    </form>
  );
};

export default AuthForm;
