import React from "react";
import City from "./City";

function Main3() {
  return (
    <div className="w-full h-[38rem] flex flex-col ">
      <h1 className="text-[9.5rem] font-semibold tracking-wide pl-[4.2rem] text-[#f4f4f4] absolute -z-50">
        Şehirler
      </h1>
      <h1 className="w-full h-[4rem]  flex items-center text-[1.8rem] font-light pl-[4rem] mt-[6rem]">
        Türkiye'nin her şehrindeyiz!
      </h1>
      <City />
    </div>
  );
}

export default Main3;
