import { card } from "../assets";
import Buttons from "./buttons";

const CardDeal = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
      </p>

      <Buttons styles="mt-10" />
    </div>

    <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10">
      <img src={card} alt="card-deal" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
