import PrimaryButton from '../components/Form/PrimaryButton';

const CarsList = () => (
  <section className="fixed top-0 w-full h-full md:pl-[9vw] bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/2-2-car-transparent.png')] bg-center bg-no-repeat bg-200%">
    <div className="w-full h-full bg-[#efefef]/90 px-20 flex flex-col justify-center">
      <div className="h-full text-center flex flex-col items-center pt-20 w-full">
        <h2 className="font-bold text-3xl text-center mb-10">LIST OF CARS</h2>
        <table className="table-auto w-4/5 mx-auto text-sm md:text-lg">
          <thead className="">
            <tr>
              <th className="p-2">Car title</th>
              <th className="p-2">Car model</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-2 py-4" />
              <td className="px-2 py-4" />
              <td className="px-2 py-4">
                <PrimaryButton className="px-2 py-6">
                  Delete
                </PrimaryButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default CarsList;
