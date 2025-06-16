import Buttons from "./buttons";

const CTA = () => (
  <section
    className="flex justify-center items-center my-6 px-8 py-6 flex-col sm:flex-row max-w-[1024px] w-full mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 rounded-lg shadow-lg"
  >
    <div className="flex-1 flex flex-col items-start justify-center">
      <h2 className="font-poppins font-semibold text-white text-3xl sm:text-4xl leading-tight w-full">
        Let’s try our service now!
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-base leading-7 max-w-md mt-4">
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>

    <div className="flex justify-center items-center sm:ml-8 ml-0 sm:mt-0 mt-8">
      <Buttons />
    </div>
  </section>
);

export default CTA;
