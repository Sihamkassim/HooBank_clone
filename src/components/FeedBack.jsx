import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-6 sm:px-8 md:px-10 py-10 rounded-2xl w-full max-w-[370px] sm:mr-5 md:mr-10 my-5 bg-transparent hover:bg-gray-800 transition-colors duration-300 backdrop-blur-lg border border-gray-700">
    
    <img
      src={quotes}
      alt="double_quotes"
      className="w-8 h-6 object-contain"
    />

    <p className="font-poppins font-normal text-base sm:text-lg leading-relaxed text-white my-6 sm:my-8">
      {content}
    </p>

    <div className="flex items-center gap-4">
      <img
        src={img}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-lg sm:text-xl text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-sm sm:text-base text-gray-400">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
