import React from "react";

function Main4() {
  return (
    <div className="w-full h-[45rem] flex flex-col mb-16  ">
      <h1 className="text-[10.5rem] font-semibold tracking-wide pl-[4.2rem] text-[#f4f4f4] absolute -z-50">
        Uygulama
      </h1>
      <h1 className="w-full h-[4rem]  flex items-center text-[1.8rem] font-light pl-[4rem] mt-[8rem]">
        Mobil uygulamamızı indirin
      </h1>
      <div className=" w-full h-[28rem] bg-[#ea004b] flex flex-col-2 ">
        <div className="w-[40rem] flex flex-col items-center justify-center pl-6 pb-10 ">
          <h1 className="text-[1.8rem] w-[32rem] font-thin text-[#f4f4f4]  ">
            Yemek ve market ihtiyaçlarının tamamı için hemen indir!
          </h1>
          <p className="text-[1.1rem] w-[38rem] pl-11 font-thin text-[#f4f4f4] pt-10">
            Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların
            dakikalar içinde kapında. Yemeksepeti’ni indir, sepetini oluşturup
            siparişini ver, online ya da kapıda dilediğin gibi öde.
          </p>
        </div>
        <div className="relative flex justfiy-center pl-[10rem] items-center">
          <img className="    " src={require("../../images/tel.png")} />
        </div>
      </div>
    </div>
  );
}

export default Main4;
