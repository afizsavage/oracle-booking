/* eslint-disable react/forbid-prop-types */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ car }) => {
  const {
    id, title, image, model, price, description,
  } = car;

  function convertToThousands(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Link to={`/cars/${id}`}>
      <div className="h-full shadow-lg w-full">
        <div className="w-full h-96 flex items-center">
          <img className="w-full h-auto" src={image.url} alt={title} />
        </div>
        <div className="border-t text-gray-500 border-gray-300 h-20 pt-3 px-5">
          <div className="flex text-gray-700 justify-between mb-1">
            <span>
              <span>{title}</span>
              {' '}
              <span>{model}</span>
            </span>
            <span>{`$ ${convertToThousands(price)}`}</span>
          </div>
          <div>
            <p className="w-full text-sm text-center">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;

Item.propTypes = {
  car: PropTypes.object.isRequired,
};
