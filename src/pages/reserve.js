import { useState } from 'react';

const ReservePage = () => {
  const [models] = useState([]);

  return (
    <section className="fixed top-0 w-full h-full md:pl-[9vw] bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/2-2-car-transparent.png')] bg-center bg-no-repeat bg-200%">
      <div className="w-full h-full bg-[#97bf10]/90 px-20 flex flex-col justify-center">
        <div className="w-full h-[50%] text-center flex flex-col justify-center items-center gap-[2rem]">
          <h1 className="font-bold text-white text-3xl md:text-5xl md:mb-5">
            MAKE YOUR RESERVATION
          </h1>
          <form className="w-full h-full text-center flex flex-col items-center gap-[2rem] md:flex-row lg:w-[70%] md:h-auto">
            <select className="w-[80%] sm:w-[40%] h-[2.6rem] rounded-3xl bg-transparent border border-2 border-white bg-pri font-bold text-xl text-white text-center" name="reservation[city]" id="city">
              <option value="" selected disabled hidden>CITY</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
              <option value="Washingtone">Washingtone</option>
              <option value="Salt Lake">Salt Lake</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="New Mexico">New Mexico</option>
              <option value="Chicago">Chicago</option>
              <option value="Phoenix">Phoenix</option>
              <option value="San Antonio">San Antonio</option>
            </select>
            <select className="w-[80%] sm:w-[40%] h-[2.6rem] rounded-3xl bg-transparent border border-2 bg-pri border-white font-bold text-xl text-white text-center" name="reservation[car_id]" id="car_id">
              <option value="" selected disabled hidden>MODEL</option>
              {models.map((model) => (
                <option key={model.car_id} value={model.car_id}>{model.model}</option>))}
            </select>
            <button type="submit" className="bg-white font-bold text-2xl text-[#97bf10] px-5 py-2 rounded-xl">RESERVE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservePage;
