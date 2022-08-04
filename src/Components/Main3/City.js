import React from "react";

const citys = [
  {
    src: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-ankara.jpg?width=720",
    name: "Ankara",
  },
  {
    src: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-antalya.jpg?width=720",
    name: "Antalya",
  },
  {
    src: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-bursa.jpg?width=720",
    name: "Bursa",
  },
  {
    src: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-istanbul.jpg?width=720",
    name: "İstanbul",
  },
  {
    src: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-izmir.jpg?width=720",
    name: "İzmir",
  },
];
function City() {
  return (
    <div className="w-full  h-[18rem]     flex  justify-between items-center px-20 ">
      {citys.map((x) => {
        return (
          <div className=" h-[17rem] w-[14rem] group    relative flex flex-col-2 ">
            <img
              className=" h-[17rem] w-[14rem] absolute object-cover group-hover:scale-105 duration-700 -z-50 "
              src={x.src}
            />
            <h1 className="text-white w-1/2 h-full text-[1.6rem] font-bold flex items-end pl-5 pb-3  ">
              {x.name}
            </h1>
            <div className=" w-full h-full flex justify-end items-end">
              <div className="w-[2.7rem] h-[2.7rem] bg-[#ea004b] flex justify-center items-center rounded-md opacity-0 group-hover:opacity-100  duration-700 ">
                <img className="" src={require("../../images/arrow.png")} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default City;
