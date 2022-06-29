import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';
import { logUserOut } from '../../features/users';

const Footer = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  const deleteToken = () => {
    sessionStorage.removeItem('token');
  };

  const removeCurrentUser = () => {
    sessionStorage.removeItem('user');
  };

  useEffect(() => {
    console.log(userState);
  });

  const logout = () => {
    deleteToken();
    removeCurrentUser();
    dispatch(logUserOut());
  };
  return (
    <div className="w-full pl-7">
      <div className=" w-5/12 pb-4 pt-2 border-t border-gray-300 flex items-center">
        {userState.isLoggedIn ? (
          <button
            className="p1-2 block text-gray-500"
            onClick={() => logout()}
            type="button"
          >
            Logout
          </button>
        ) : (
          <button
            className="py-1 block text-gray-500"
            onClick={() => navigate('/sign-in')}
            type="button"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
