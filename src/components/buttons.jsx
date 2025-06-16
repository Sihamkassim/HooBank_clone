const Buttons = ({ styles }) => (
  <button
    type="button"
    className={`
      py-4 px-6 
      font-poppins font-medium text-[18px] 
      text-black 
      bg-gradient-to-r from-[#5CE1E6] to-[#3AB9C8] 
      rounded-[10px] 
      outline-none
      hover:brightness-110
      transition
      ${styles}
    `}
  >
    Get Started
  </button>
);

export default Buttons;
