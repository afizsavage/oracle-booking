import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import {
  useSignUpMutation,
  useLoginMutation,
} from '../../features/api/authApi';
import SubmitButton from './submit';
import InputField from './input';

const setToken = (token) => {
  sessionStorage.setItem('token', token);
};

const setCurrentUser = (user) => {
  const userObj = JSON.stringify(user);
  sessionStorage.setItem('user', userObj);
};

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showErrors, setShowErrors] = useState(false);
  const [serverError, setServerError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = location.pathname;
  const [signUp] = useSignUpMutation();
  const [login] = useLoginMutation();

  const logInUser = async (data) => {
    try {
      const res = await login(data);
      if (res.data !== undefined) {
        setCurrentUser(res.data.user);
        setToken(res.data.token);
        navigate('/');
      } else {
        setServerError(res.error.data.message[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (data) => {
    try {
      const res = await signUp(data);
      if (res.data !== undefined) {
        navigate('/sign-in');
      } else {
        setServerError(res.error.data.message[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => {
    if (currentRoute === '/sign-up') {
      registerUser(data);
    } else {
      logInUser(data);
    }
  };

  return (
    <>
      {serverError ? (
        <span className="text-red-500 text-sm">{serverError}</span>
      ) : null}
      <form
        className="flex flex-col mb-16 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {currentRoute === '/sign-up' && (
          <InputField
            type="text"
            placeholder="Enter Fullname"
            register={register}
            config={{
              field: 'name',
              options: {
                required: true,
                minLength: 5,
              },
            }}
            errs={errors}
            showErrors={showErrors}
          />
        )}
        <InputField
          type="text"
          placeholder="Enter Email"
          register={register}
          config={{
            field: 'email',
            options: {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          }}
          errs={errors}
          showErrors={showErrors}
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          register={register}
          config={{
            field: 'password',
            options: {
              required: true,
              minLength: 6,
            },
          }}
          errs={errors}
          showErrors={showErrors}
        />
        {currentRoute === '/sign-up' && (
          <InputField
            type="password"
            placeholder="Confirm Password"
            register={register}
            config={{
              field: 'password_confirmation',
              options: {
                required: true,
                minLength: 6,
              },
            }}
            errs={errors}
            showErrors={showErrors}
          />
        )}
        <SubmitButton setShowErrors={setShowErrors} />
      </form>
    </>
  );
};

export default AuthForm;
