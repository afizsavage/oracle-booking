import { useSelector } from 'react-redux';
import { useDeleteFavoriteMutation, selectMyFavorites } from '../features/cars/myFavoritesSlice';
import PrimaryButton from '../components/Form/PrimaryButton';

const MyFavourites = () => {
  const myFavorites = useSelector(selectMyFavorites);
  const [deleteFavorite, { isLoading, isError, error }] = useDeleteFavoriteMutation();
  const onDelete = async (id) => {
    try {
      await deleteFavorite({ id }).unwrap();
    } catch (error) {
      console.log('Failed to delete car', error);
    }
  };

  return (
    <section className="fixed lg:static w-full h-full bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/2-2-car-transparent.png')] bg-center bg-no-repeat bg-200%">
      <div className="w-full h-full bg-[#efefef]/90 px-20 flex flex-col justify-center">
        <div className="h-full text-center flex flex-col items-center pt-20 w-5/5">
          <h1 className="font-bold text-gray-700 text-3xl md:text-5xl md:mb-5 text-center">
            MY FAVOURITES
          </h1>
          {isError && (
            <p>
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
          <table className="sm:w-[70%]">
            <thead>
              <tr>
                <th className="w-[80%] sm:w-[20%] h-[2.6rem] rounded-3xl bg-transparent border-none border-2 border-white bg-white font-bold text-xl text-gray-700 text-center px-6">Price</th>
                <th className="w-[80%] sm:w-[20%] h-[2.6rem] rounded-3xl bg-transparent border-none border-2 border-white bg-white font-bold text-xl text-gray-700 text-center ">Car Model</th>
                <th className="w-[80%] sm:w-[20%] h-[2.6rem] rounded-3xl bg-transparent border-none border-2 border-white bg-white font-bold text-xl text-gray-700 text-center">Created at</th>
                <th className="w-[80%] sm:w-[20%] h-[2.6rem] rounded-3xl bg-transparent border-none border-2 border-white bg-white font-bold text-xl text-gray-700 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {myFavorites.map((favorite) => (
                <tr key={favorite.id}>
                  <td className="px-2 p-2">{favorite.car_id}</td>
                  <td className="px-2 p-2">{favorite.user_id}</td>
                  <td className="px-2 p-2">
                    {new Date(favorite.created_at).toLocaleDateString('en-UK')}
                  </td>
                  <td className="px-2 p-2">
                    <PrimaryButton
                      onClick={() => {
                        onDelete(favorite.id);
                      }}
                    >
                      {isLoading ? 'Loading...' : 'Remove'}
                    </PrimaryButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyFavourites;
