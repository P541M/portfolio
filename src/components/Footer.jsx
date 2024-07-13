import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg pb-10 text-text flex justify-center items-center">
      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg fade-up">
        &copy; {new Date().getFullYear()} Psalm Eleazar G. Videna.
      </div>
    </footer>
  );
};

export default Footer;
