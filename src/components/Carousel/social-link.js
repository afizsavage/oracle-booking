import PropTypes from 'prop-types';

import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti';

const socialIcons = [
  <TiSocialFacebookCircular key={0} />,
  <TiSocialTwitterCircular key={1} />,
  <TiSocialInstagramCircular key={2} />,
];

const SocialLink = ({ icon }) => (
  <li className="mx-2 mt-3 text-3xl text-gray-400">{icon}</li>
);

const SocialShare = () => (
  <ul className="flex justify-center">
    {socialIcons.map((icon) => (
      <SocialLink icon={icon} key={socialIcons.indexOf(icon)} />
    ))}
  </ul>
);

export default SocialShare;

SocialLink.propTypes = {
  icon: PropTypes.element.isRequired,
};
