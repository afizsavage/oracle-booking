import Carousel from '../components/Carousel';

const Home = () => (
  <section className="relative pt-5 md:p-0 lg:flex justify-center items-center lg:w-10/12 overflow-y-auto h-screen">
    <div className="w-full text-center lg:flex flex-col justify-center h-full ">
      <div className="absolute top-10 w-full">
        <div className="w-full">
          <h1 className="font-extrabold text-xl md:text-3xl md:mb-2 uppercase text-gray-700">
            Latest Models
          </h1>
          <p className="font-bold text-xs lg:text-sm text-gray-400">
            Please select a Car
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  </section>
);

export default Home;
