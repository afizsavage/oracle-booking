import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';

const AuthPage = ({
  title,
  subTitle,
  link,
  children,
}) => (
  <div>
    <h2>{title}</h2>
    <p>{subTitle}</p>
    {children}
    <NavLink to={link.route}>{link.title}</NavLink>
  </div>
);

export default AuthPage;

AuthPage.propTypes = {
  title: PropType.string.isRequired,
  subTitle: PropType.string.isRequired,
  link: PropType.objectOf.isRequired,
  children: PropType.string.isRequired,
};
