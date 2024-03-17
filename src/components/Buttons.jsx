import { useState } from "react";

const Buttons = ({ name, func, active }) => {
  return (
    <section>
      <button
        className="border text-white font-description font-bold p-1 px-4 mb-5 rounded-md hover:text-black hover:bg-white transition duration-300 ease-in-out focus-within:bg-white focus-within:text-black"
        onClick={func}
      >
        {name}
      </button>
    </section>
  );
};

export default Buttons;
