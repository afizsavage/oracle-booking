/* eslint-disable react/forbid-prop-types */

import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';

const AuthPage = ({
  title, subTitle, link, children,
}) => (
  <div className="min-h-screen flex flex-col justify-center items-center w-screen">
    <div className="h-3/6 lg:h-4/6 flex w-full bg-white flex-col items-center">
      <div className="my-auto flex flex-col items-center">
        <h2 className="text-gray-500 mb-2 text-xl">{title}</h2>
        <p className="text-center text-gray-600 text-sm w-3/5 border-transparent mb-6">
          {subTitle}
        </p>
        {children}
      </div>
    </div>
    <NavLink className="self-center underline text-gray-600 " to={link.route}>
      {link.title}
    </NavLink>
  </div>
);

export default AuthPage;

AuthPage.propTypes = {
  title: PropType.string.isRequired,
  subTitle: PropType.string.isRequired,
  link: PropType.object.isRequired,
  children: PropType.element.isRequired,
};
