import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

// import Loading from '../Utils/loading';
import Item from './item';
import { selectAllCars } from '../../features/cars/carsSlice';

const CarsCarousel = () => {
  const carsState = useSelector(selectAllCars);

  console.log(carsState);
  return (
    <div className="">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={45}
      >
        {carsState.map((car) => (
          <Item key={car.id} car={car} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarsCarousel;
