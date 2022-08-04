import React from "react";
import { Icon } from "../../Icons.js";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 border-t-[0.1rem] pt-4   ">
      <div className="pl-3 pb-3">
        <Icon size={22} name="Logo" />
      </div>
      <div className="flex  justify-between items-center pr-8 font-bold text-[#333]  text-[0.8rem]  ">
        <div className="pl-4 pr-2 border-l-[0.1rem]">
          <Icon size={22} name="Login" />
        </div>
        <div className="pr-8 border-r-[0.1rem]">GİRİŞ YAP</div>
        <div className="pl-4">
          <Icon size={22} name="Basket" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
