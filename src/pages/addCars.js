/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormError from '../components/Form/FormError';
import PrimaryButton from '../components/Form/PrimaryButton';

const AddCars = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [formSuccess] = useState(false);

  // const onSubmit = (data) => {
  //   const body = { bike: { ...data } };
  //   dispatch(addBike(body));
  //   reset();
  //   setFormSuccess(true);
  //   setTimeout(() => setFormSuccess(false), 3000);
  // };

  return (
    <section className="fixed top-0 w-full h-full md:pl-[9vw] bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/2-2-car-transparent.png')] bg-center bg-no-repeat bg-200%">
      <div className="w-full h-full bg-[#efefef]/90 px-20 flex flex-col justify-center">
        <div className="h-full text-center flex flex-col items-center pt-20 w-5/5">
          <h1 className="font-bold text-gray-700 text-2xl md:text-5xl text-center uppercase mb-10">
            Add Cars
          </h1>
          <p
            className={`text-green-600 text-center my-2 opacity-0 transition-opacity ${
              formSuccess && 'opacity-100'
            }`}
          >
            Added successfully
          </p>

          <form
            className="flex flex-col items-start justify-center w-4/5 max-w-xl mx-auto gap-5 mb-10 md:mb-20"
          >
            {errors.make && <FormError>Must fill out this field</FormError>}
            <input
              type="text"
              className="border-2 border-gray-500 rounded-3xl w-full p-2 hover:border-orange-600 transition-colors active:border-orange-700 focus:outline-none focus:border-orange-700"
              placeholder="Car model"
              {...register('model', { required: true, maxLength: 50 })}
            />
            {errors.model && <FormError>Must fill out this field</FormError>}
            <input
              type="date"
              className="border-2 border-gray-500 rounded-3xl w-full p-2 hover:border-orange-600 transition-colors active:border-orange-700 focus:outline-none focus:border-orange-700"
              placeholder="Car year"
              {...register('year', { required: true, min: 1000, max: 3000 })}
            />
            {errors.year && <FormError>{errors.year?.type}</FormError>}
            <input
              type="number"
              className="border-2 border-gray-500 rounded-3xl w-full p-2 hover:border-orange-600 transition-colors active:border-orange-700 focus:outline-none focus:border-orange-700"
              placeholder="Car price"
              {...register('price', { required: true, min: 1 })}
            />
            {errors.price && <FormError>{errors.price?.type}</FormError>}
            <input
              type="file"
              accept="image/*"
              className="border-2 border-gray-500 rounded w-full p-1 hover:border-orange-600 transition-colors active:border-orange-700 focus:outline-none focus:border-orange-700"
              placeholder="Car image link"
              {...register('image', { required: true })}
            />
            {errors.image && <FormError>This field is required</FormError>}
            <textarea
              placeholder="Bike description"
              className="border-2 border-gray-500 rounded w-full p-1  active:border-orange-700 focus:outline-none focus:border-orange-700"
              {...register('description', { required: true })}
              rows="8"
            />
            {errors.description && <FormError>Must fill out this field</FormError>}
            <PrimaryButton btnType="submit">add bike</PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddCars;
