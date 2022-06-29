import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllCars } from '../../features/cars/carsSlice';
import { useAddNewFavoriteMutation } from '../../features/cars/myFavoritesSlice';

const CarDetails = () => {
  const { id } = useParams();
  const [addNewFavorite, {
    isError, isLoading, isSuccess, error,
  }] = useAddNewFavoriteMutation();
  const cars = useSelector(selectAllCars);
  const car = Object.values(cars).find((car) => car.id === Number(id)); // ignore keys to find car

  const {
    title, image, description, price, model,
  } = car;

  const onAddToFavorites = async () => {
    const favorite = new FormData();
    favorite.append('car_id', car.id);
    try {
      await addNewFavorite(favorite).unwrap();
    } catch (error) {
      console.log('Failed to add car', error);
    }
  };

  return (
    <div className="d-height lg:h-100 flex flex-col justify-end lg:justify-center lg:items-center">
      <div className="relative s-1 lg:h-3/5 lg:w-7/12 text-white font-medium">
        <img className="w-full h-full " alt={title} src={image.url} />
        <div className="absolute bottom-14 left-5">
          <span className="">{title}</span>
          {' '}
          <span className="">{model}</span>
        </div>
        <div className="absolute bottom-10 right-5">
          <span className="block">{price}</span>
          <span className="block text-xs">Per month</span>
        </div>
      </div>
      <div className="s-2 px-10 lg:w-3/5 lg:text-center flex items-center">
        <div>
          <h2 className="text-gray-700 font-medium mb-2">About this listing</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      {isError && (
      <p
        style={{ color: 'red' }}
      >
        Error:
        {' '}
        {error.data.message}
        <br />
        {error.data.errors.map((error) => (
          <span key={error.index}>
            {error}
            <br />
          </span>
        ))}
      </p>
      )}
      {isSuccess && (
        <p
          style={{ color: 'green' }}
        >
          Added to favorites successfully
        </p>
      )}
      <div className="s-3 bg-pri text-white flex justify-center items-center">
        <button className="lg:w-40" type="button" onClick={onAddToFavorites}>
          {isLoading ? 'Loading...' : 'Add to favorites'}
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
