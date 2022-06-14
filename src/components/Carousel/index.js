import { Carousel } from 'react-responsive-carousel';

import Loading from '../Utils/loading';
import Item from './item';

const bikes = {
  bikes: [
    {
      id: 0,
      image: '',
      description: 'Awesome Car',
      make: 'Audi',
      model: 'A1C2',
    },
    {
      id: 0,
      image: '',
      description: 'Awesome Car',
      make: 'Audi',
      model: 'A1C2',
    },
    {
      id: 0,
      image: '',
      description: 'Awesome Car',
      make: 'Audi',
      model: 'A1C2',
    },
    {
      id: 0,
      image: '',
      description: 'Awesome Car',
      make: 'Audi',
      model: 'A1C2',
    },
  ],
  isLoading: false,
};

const CarsCarousel = () => {
  if (bikes.isLoading) {
    return <Loading />;
  }

  return (
    <section className="hidden md:block">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={45}
      >
        {bikes.bikes.map((bike) => (
          <Item key={bike.id} bike={bike} />
        ))}
      </Carousel>
    </section>
  );
};

export default CarsCarousel;
