import { feedback } from "../constants";
import FeedbackCard from "./FeedBack";

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-20 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-primary text-white"
  >
    <div className="w-full flex flex-col justify-between items-center mb-10 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight sm:leading-snug max-w-2xl">
        What people are saying about us
      </h2>
      <p className="mt-4 text-base sm:text-lg text-gray-400 text-center max-w-xl">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {feedback.map((card, index) => (
        <FeedbackCard key={index} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
