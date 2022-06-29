import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SocialShare from './social-link';

const Item = ({ bike }) => {
  const {
    id,
    description,
    make,
    model,
    color,
    image,
  } = bike;

  return (
    <Link to={`/cars/${id}`}>
      <div className="h-full w-full">
        <div className="i-wrap mx-auto relative w-full h-auto flex items-center justify-center">
          <div className={`round mx-auto lg:my-0 lg:mx-0 rounded-full ${color}`}>
            <div className="absolute left-0 top-0 flex items-center right-0 bottom-0 w-full bg-teal-500 bg-transparent">
              <img src={image} alt="car" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-gray-800">
            <span>{make}</span>
            {' '}
            <span>{model}</span>
          </h2>
          <p className="text-sm font-medium text-gray-400 mb-2">{description}</p>
          <SocialShare />
        </div>
      </div>
    </Link>
  );
};

export default Item;

Item.propTypes = {
  bike: PropTypes.objectOf().isRequired,
};
