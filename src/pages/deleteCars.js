import { useSelector } from 'react-redux';
import PrimaryButton from '../components/Form/PrimaryButton';
import { useDeleteCarMutation, selectAllCars } from '../features/cars/carsSlice';

const CarsList = () => {
  const allCars = useSelector(selectAllCars);
  const [deleteCar, { isLoading, isError, error }] = useDeleteCarMutation();

  const onDelete = async (id) => {
    try {
      await deleteCar({ id }).unwrap();
    } catch (error) {
      console.log('Failed to delete car', error);
    }
  };
  return (
    <section className="fixed top-0 w-full h-full md:pl-[9vw] bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/2-2-car-transparent.png')] bg-center bg-no-repeat bg-200%">
      <div className="w-full h-full bg-[#efefef]/90 px-20 flex flex-col justify-center">
        <div className="h-full text-center flex flex-col items-center pt-20 w-full">
          <h2 className="font-bold text-3xl text-center mb-10">LIST OF CARS</h2>
          {isError && (
          <p>
            Error:
            {' '}
            {error.message}
          </p>
          )}
          <table className="table-auto w-4/5 mx-auto text-sm md:text-lg">
            <thead className="">
              <tr>
                <th className="p-2">Car title</th>
                <th className="p-2">Car model</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {allCars.map((car) => (
                <tr key={car.id}>
                  <td className="p-2">{car.title}</td>
                  <td className="p-2">{car.model}</td>
                  <td className="p-2">
                    <PrimaryButton
                      onClick={() => {
                        onDelete(car.id);
                      }}
                    >
                      {isLoading ? 'Loading...' : 'Delete'}
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

export default CarsList;
