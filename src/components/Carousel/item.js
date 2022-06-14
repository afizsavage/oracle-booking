import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SocialShare from './social-link';

const Item = ({ bike }) => {
  const {
    id, description, make, model,
  } = bike;

  return (
    // <li className="my-5 border-2 p-2 lg:p-0 shadow-md lg:shadow-none lg:border-0 lg:my-0">
    <Link to={`/bikes/${id}`}>
      <div>
        <div className="i-wrap mx-auto w-80 lg:w-full relative flex items-center justify-center">
          {/* <div className="round mx-auto lg:my-0 lg:mx-0 rounded-full bg-red-300 ">
            <div className="absolute left-0 top-0 image-wrapper bg-teal-500 bg-transparent">
              <img src={image.url} alt="car" />
            </div>
          </div> */}
        </div>
        <div>
          <h2 className="mt-7 mb-7 font-semibold text-gray-800">
            <span>{make}</span>
            <span>{model}</span>
          </h2>
          <p className="text-sm font-medium text-gray-500">{description}</p>
          <SocialShare />
        </div>
      </div>
    </Link>
    // </li>
  );
};

export default Item;

Item.propTypes = {
  bike: PropTypes.objectOf().isRequired,
};
