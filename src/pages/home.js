import Carousel from '../components/Carousel';

const Home = () => (
  <section className="relative w-full pt-5 md:p-0 lg:flex justify-center items-center overflow-y-auto h-screen">
    <div className="w-full text-center lg:flex flex-col justify-center h-5/6 ">
      <div className="mb-7 lg:mb-14">
        <h1 className="font-bold text-xl md:text-3xl md:mb-2 uppercase text-gray-700">
          Latest Models
        </h1>
        <p className="font-semibold text-xs lg:text-sm text-gray-500">
          Please select a scooter!
        </p>
      </div>
      <Carousel />
    </div>
  </section>
);

export default Home;
