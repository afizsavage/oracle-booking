import { useEffect, useState } from 'react';

const MyFavourites = () => {
  const [reservations, setReservations] = useState([]);
  // const user = useSelector((state) => state.user.user);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        '',
      );
      const data = await res.json();
      setReservations(data);
    })();
  }, []);
  return (
    <section className="fixed top-0 w-full h-full md:pl-[9vw] bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/2-2-car-transparent.png')] bg-center bg-no-repeat bg-200%">
      <div className="w-full h-full bg-[#efefef]/90 px-20 flex flex-col justify-center">
        <div className="h-full text-center flex flex-col items-center pt-20 w-5/5">
          <h1 className="font-bold text-gray-700 text-3xl md:text-5xl md:mb-5 text-center">
            MY FAVOURITES
          </h1>
          <table className="sm:w-[70%]">
            <thead>
              <tr>
                <th className="w-[80%] sm:w-[20%] h-[2.6rem] rounded-3xl bg-transparent border-none border-2 border-white bg-white font-bold text-xl text-gray-700 text-center px-6">Price</th>
                <th className="w-[80%] sm:w-[20%] h-[2.6rem] rounded-3xl bg-transparent border-none border-2 border-white bg-white font-bold text-xl text-gray-700 text-center ">Car Model</th>
                <th className="w-[80%] sm:w-[20%] h-[2.6rem] rounded-3xl bg-transparent border-none border-2 border-white bg-white font-bold text-xl text-gray-700 text-center">Created at</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.price}</td>
                  <td>{reservation.car_model}</td>
                  <td>
                    {new Date(reservation.created_at).toLocaleDateString('en-UK')}
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
