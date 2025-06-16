import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { id: "Home", title: "Home" },
    { id: "About", title: "About" },
    { id: "Features", title: "Features" },
    { id: "Solution", title: "Solution" },
  ];

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="px-10 flex items-center bold s">
        <img src="/hoobankLogo.png" alt="logo" className="" />
        <span>Hoo</span>
        <span className="text-blue-500">Bank</span>
      </h1>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden flex-1 justify-end items-center px-10">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href="#"
            className={`relative text-white font-poppins cursor-pointer text-[16px] mx-4 px-4 py-2 transition-all ${
              activeLink === link.id
                ? "before:absolute before:inset-0 before:border-2 before:border-white before:rounded-md before:opacity-100"
                : "hover:before:absolute hover:before:inset-0 hover:before:border hover:before:border-white/30 hover:before:rounded-md hover:before:opacity-100"
            }`}
            onClick={() => setActiveLink(link.id)}
          >
            <span className="relative z-10">{link.title}</span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden flex-1 justify-end items-center px-10 relative">
        <img
          src={toggle ? "/close.svg" : "/open.svg"}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          alt="menu toggle"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <div className="flex flex-col justify-between flex-1 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href="#"
                className={`relative text-white font-poppins cursor-pointer text-[16px] px-4 py-2 ${
                  activeLink === link.id
                    ? "before:absolute before:inset-0 before:border-2 before:border-white before:rounded-md"
                    : "hover:before:absolute hover:before:inset-0 hover:before:border hover:before:border-white/30 hover:before:rounded-md"
                }`}
                onClick={() => {
                  setActiveLink(link.id);
                  setToggle(false);
                }}
              >
                <span className="relative z-10">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;