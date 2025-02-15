import React from "react";
import '../App.css'

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-amber-500 text-white shadow-md flex items-center m-5  rounded-xl p-4">
      {/* Logo */}
      <div className="flex">
        <a href="/" className="text-3xl font-bold text-gray-800 hover:text-green-500 transition-colors">
          {/* <svg viewBox="0 0 248 31" className="h-10">
            <path d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0z" fill="#22C55E" />
          </svg> */}
        </a>
        <span className="text-lg font-semibold">Navigation Bar</span>
      </div>

      {/* Navigation */}
      <nav className="ml-110">
        <ul className="flex space-x-6 text-lg font-medium">
          {[
            { name: "Artificial Intelligence", id: "section1" },
            { name: "Machine Learning", id: "section2" },
          ].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative group text-white hover:text-green-500 transition-colors">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="b612 mx-auto">Made by Dhyan Patel</h1>
    </header>
  );
};

export default Navbar;