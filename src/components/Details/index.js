const item = {
  title: 'victor',
  model: 'K11',
  price: 2321,
  image: { url: 'https://via.placeholder.com/150' },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem arcu, sagittis a lacinia id, cursus id risus.',
};

const CarDetails = () => {
  const {
    title, image, description, price, model,
  } = item;

  return (
    <div className="h-full flex flex-col justify-end lg:justify-center lg:items-center">
      <div className="relative s-1 lg:h-3/5 lg:w-7/12 text-white font-medium">
        <img className="w-full h-full " alt={title} src={image.url} />
        <div className="absolute bottom-14 left-5">
          <span className="">{title}</span>
          {' '}
          <span className="">{model}</span>
        </div>
        <div className="absolute bottom-10 right-5">
          <span className="block">{price}</span>
          <span className="block text-xs">Per month</span>
        </div>
      </div>
      <div className="s-2 px-10 lg:w-3/5 lg:text-center flex items-center">
        <div>
          <h2 className="text-gray-700 font-medium mb-2">About this listing</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="s-3 bg-pri text-white flex justify-center items-center">
        <button className="lg:w-40" type="button">Add to favorites</button>
      </div>
    </div>
  );
};

export default CarDetails;
