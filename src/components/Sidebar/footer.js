import PropTypes from 'prop-types';

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialGooglePlus,
  TiSocialPinterest,
  TiSocialVimeo,
} from 'react-icons/ti';

const socialIcons = [
  <TiSocialTwitter key={0} />,
  <TiSocialFacebook key={1} />,
  <TiSocialGooglePlus key={2} />,
  <TiSocialVimeo key={3} />,
  <TiSocialPinterest key={4} />,
];

const SocialLink = ({ icon }) => <li className="mx-1 text-base"><a href="/">{icon}</a></li>;

const Footer = () => (
  <div>
    <ul className="flex justify-center mb-3">
      {socialIcons.map((icon) => (
        <SocialLink icon={icon} key={icon.key} />
      ))}
    </ul>
    <span className="text-xs font-medium w-full text-center block">
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      Oracle Booking
    </span>
  </div>
);

export default Footer;

SocialLink.propTypes = {
  icon: PropTypes.element.isRequired,
};
