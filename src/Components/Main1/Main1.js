import { Input } from "postcss";
import React from "react";
import { Icon } from "../../Icons.js";

function Main1() {
  return (
    <div className="w-full relative ">
      <div className=" w-full h-[35rem] flex  justify-end  absolute  ">
        <img
          className="w-2/6 h-[35rem]"
          src={require("../../images/main1.PNG")}
        />
      </div>
      <div className="w-4/5 h-[35rem]  flex flex-wrap flex-col items-center justify-center  ">
        <div className="w-5/6 -translate-y-10  flex  items-center justify-center mb-10 ">
          <h1
            className="text-[2.7rem] font-light  
    text-[#333]   "
          >
            Yemek, market ve günlük tüm ihtiyaçların için adresini seç,
            çevrendeki seçenekleri gör!
          </h1>
        </div>
        <div className="w-5/6 h-[5.5rem]  drop-shadow-xl bg-white  flex  items-center justify-center  px-6">
          <input
            className="border-solid border-slate-300 outline-slate-400  rounded-lg  border p-[0.75rem] font-semibold w-full h-[4rem] "
            type="text"
            placeholder="Adresini Belirle veya Seç"
          />
          <button className="border-solid h-[4rem] w-[8rem] font-semibold rounded-md ml-4  bg-[#ea004b] text-white border ">
            Listele
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main1;
