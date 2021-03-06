import Carousel from '../components/Carousel';

const Home = () => (
  <section className="relative pt-5 w-full md:p-0 lg:flex justify-center items-center lg:w-full overflow-y-auto h-screen">
    <div className="w-full text-center flex flex-col justify-center h-full ">
      <Carousel />
    </div>
  </section>
);

export default Home;
