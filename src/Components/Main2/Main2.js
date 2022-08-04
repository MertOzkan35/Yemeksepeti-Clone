import React from "react";

function Main2() {
  return (
    <div className="w-full h-[45rem] flex flex-col mb-16 ">
      <h1 className="text-[10.5rem] font-semibold tracking-wide pl-[4.2rem] text-[#f4f4f4] absolute -z-50">
        Ortaklar
      </h1>
      <h1 className="w-full h-[4rem]  flex items-center text-[1.8rem] font-light pl-[4rem] mt-[8rem]">
        İş ortağımız olun
      </h1>
      <div className="w-full h-[38rem] flex relative drop-shadow-xl ">
        <div className=" w-[38rem] mt-10 ml-[6rem] p-8 h-full bg-[#ffffff] ">
          <h1 className="text-[1.5rem] font-extralight">
            Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın
          </h1>
          <h1 className="text-[1.09rem] font-extralight opacity-75 pt-5 pb-2">
            Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi
            semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da
            işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya
            da üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık
            müşteriniz.
          </h1>
          <h1 className="text-[1.09rem] font-extralight opacity-75 pb-2">
            Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size
            ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz
            yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adına kullanıcıya
            ulaştırıyor.
          </h1>
          <h1 className="text-[1.09rem] font-extralight opacity-75 ">
            Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş
            ortaklarımızdan biri olabilirsiniz.
          </h1>
          <div className="w-full mt-5 flex justify-end h-[3rem]">
            <button className="border-solid h-[3rem]    w-[14rem] font-semibold rounded-md ml-4  bg-[#ea004b] text-white border ">
              Başlayalım
            </button>
          </div>
        </div>
        <img
          className="w-full h-[25rem] absolute -z-50"
          src={require("../../images/main2.PNG")}
        />
      </div>
    </div>
  );
}

export default Main2;
