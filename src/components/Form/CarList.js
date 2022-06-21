import { useSelector } from 'react-redux';

const CarsList = () => {
  const { cars } = useSelector((state) => state.cars);
  const { Loading } = useSelector((state) => state.cars);

  return (
    <section>
      <h2 className="font-bold text-3xl text-center mb-10">List of bikes</h2>
      {Loading && <p>Loading...</p>}
      <table className="table-auto w-4/5 max-w-xl mx-auto text-sm md:text-lg">
        <thead className="">
          <tr>
            <th className="p-2 text-left">Bike Year</th>
            <th className="p-2 text-left">Bike Model</th>
            <th className="p-2 text-left">Bike Price</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((bike) => (
            <tr key={bike.id}>
              <td className="px-2 py-4">{bike.year}</td>
              <td className="px-2 py-4">{bike.model}</td>
              <td className="px-2 py-4">{bike.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CarsList;
