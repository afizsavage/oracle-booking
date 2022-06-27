import { Carousel } from 'react-responsive-carousel';

import Loading from '../Utils/loading';
import Item from './item';

const bikes = {
  bikes: [
    {
      id: 6,
      image: '',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      make: 'Audi',
      model: 'A1C2',
      color: 'green',
    },
    {
      id: 5,
      image: '',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      make: 'Audi',
      model: 'A1C2',
      color: 'blue',
    },
    {
      id: 4,
      image: '',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      make: 'Audi',
      model: 'A1C2',
      color: 'yellow',

    },
    {
      id: 0,
      image: '/tsla.png',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      make: 'Audi',
      model: 'A1C2',
      color: 'red',
    },
    {
      id: 3,
      image: '',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      make: 'Audi',
      model: 'A1C2',
      color: 'orange',
    },
    {
      id: 2,
      image: '',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      make: 'Audi',
      model: 'A1C2',
      color: 'black',
    },
    {
      id: 1,
      image: '',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      make: 'Audi',
      model: 'A1C2',
      color: 'white',
    },
  ],
  isLoading: false,
};

const CarsCarousel = () => {
  if (bikes.isLoading) {
    return <Loading />;
  }

  return (
    <section className="">
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
