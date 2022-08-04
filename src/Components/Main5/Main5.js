import React from "react";
import { Icon } from "../../Icons.js";
function Main5() {
  return (
    <div className="w-full h-[65rem] flex flex-col">
      <p className="text-[1.2rem] font-thin px-16 pb-7">
        Türkiye'nin 81 şehri ve KKTC'de, 50 bini aşkın restoran iş ortağımızla,
        Türkiye’de online yemek siparişi denince ilk akla gelen markayız!
        Restoran zincirleri başta olmak üzere, civarınızdaki en sevdiğiniz
        restoranlardan kolayca sipariş verebilirsiniz.
      </p>
      <p className="text-[1.2rem] font-thin px-16 pb-7">
        Bunun yanında, hızlı market alışverişine ihtiyacınız varsa, Yemeksepeti
        Market hizmetinizde! Binlerce market ürünü dilediğiniz anda, dakikalar
        içinde gelsin!
      </p>
      <p className="text-[1.2rem] font-thin px-16 pb-7">
        Restoranınızı seçin, istediğiniz yemekleri sepete ekleyin, online ya da
        kapıda dilediğiniz gibi ödeyin. Gerisi kolay, siparişiniz hızlıca
        kapınızda!
      </p>
      <p className="text-[1.2rem] font-thin px-16 pb-7">
        Yemeksepeti Mahalle de burada! Çevrenizdeki bildiğiniz, güvendiğiniz
        işletme ve esnaflar; marketten kasaba, şarküteriden manava, balıkçıdan
        petshopa, tüm kampanyaları ve fırsatlarıyla siparişiniz için hazır.
      </p>
      <p className="text-[1.4rem]  font-semibold font-mono px-16 pb-7">
        Yemeksepeti’nde sizi neler bekliyor?
      </p>
      <lu className="ml-10">
        <li className="text-[1.2rem] font-thin px-16 pb-3">
          Yemek siparişi ya da market alışverişinde onlarca mutfak ve kategori,
          binlerce çeşit ürün!
        </li>
        <li className="text-[1.2rem] font-thin px-16 pb-3">
          Yemek ve market ihtiyaçlarınızda her gün on binlerce indirim!
        </li>
        <li className="text-[1.2rem] font-thin px-16 pb-3">
          Online ya da kapıda, dilediğiniz gibi ödeme seçeneği!
        </li>
        <li className="text-[1.2rem] font-thin px-16 pb-7">
          Siparişinizle ilgili size her zaman destek olmaya hazır, 7/24 Canlı
          Yardım ekibi!
        </li>
      </lu>
      <p className="text-[1.2rem] font-thin px-16 pb-7">
        Tek yapmanız gereken ihtiyacınızı düşünmek ve çevrenizdeki seçeneklere
        göz atmak!
      </p>
      <p className="text-[1.4rem] font-mono font-semibold px-16 pb-7">
        Yemeksepeti yanında, aklındaysa kapında!
      </p>

      <div className="flex mx-16 items-center justify-center mt-11 ">
        <div className="w-full h-[8rem] flex items-center justify-between border-y-[0.1rem] ">
          <div className="pl-3 pb-3">
            <Icon size={22} name="Logo" />
          </div>
          <div className="pr-6 pb-3">© 2022 Yemeksepeti</div>
        </div>
      </div>
    </div>
  );
}

export default Main5;
