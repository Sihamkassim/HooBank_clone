const HeroSection = () => {
  return (
    <section className="flex md:flex-row flex-col justify-between sm:py-16 py-6 font-poppins">
      <div className="flex-1 px-5">
        {/* Discount Badge */}
        <div className="mb-4 flex items-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 rounded-lg p-2 max-w-sm text-black font-semibold text-sm shadow-lg">
          <div className="bg-white bg-opacity-30 rounded-full px-3 py-1 mr-3 font-medium">
            20% Discount
          </div>
          <p className="font-medium">
            For <span className="underline underline-offset-2">1 Month</span> Account
          </p>
        </div>

        {/* Main Text */}
        <div className="text-white space-y-6">
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight space-y-3">
            <p>The Next</p>
            <p className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Generation
            </p>
            <p>Payment Method.</p>
          </div>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-300 font-medium">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees, and more to help you make the best financial decisions.
          </p>
        </div>
      </div>

      {/* Robot Image */}
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img
          src="/robot-card.png"
          alt="Robot Card"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute top-0 left-0 w-40 h-40 bg-white-400 rounded-full filter blur-2xl opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full filter blur-2xl opacity-30 z-0"></div>
      </div>
    </section>
  );
};

export default HeroSection;