import React from "react";

export default function Dashboard() {
  const arr = [
    {
      image: "imgs/food.png",
    },
    {
      image: "imgs/taxAdvisor.png",
    },
    {
      image: "imgs/petCare.png",
    },
    {
      image: "imgs/food.png",
    },
    {
      image: "imgs/medical.png",
    },
    {
      image: "imgs/elder.png",
    },
  ];

  const handleOnClick = () => {};
  return (
    <div className="">
      <div className="bg-[#F3F4F6] flex justify-center rounded-b-lg">
        <div>
          <img
            src={"imgs/user.png"}
            alt="user"
            className="h-[128px] w-[116px]"
          />
        </div>
        <div>
          <img src={"imgs/HDFC_logo.png"} alt="logo" />
          <p className="text-[#35354D] text-[20px] font-normal">Hello Parul</p>
          <p className="text-sm  font-normal">How can I help you today?</p>
        </div>
      </div>
      <div className="flex justify-around px-[60px] text-center bg-transparent">
        <div
          onClick={() => handleOnClick("sos")}
          className="h-20 w-20 text-white bg-[#115f9f] text-center pt-[25px] rounded-full"
        >
          SoS
        </div>
        <div
          onClick={() => handleOnClick("nonsos")}
          className="h-20 w-20 text-white bg-[#ed1c24] text-center pt-[25px] rounded-full"
        >
          SoS
        </div>
      </div>

      <div className="mt-[23px] flex flex-wrap gap-x-2 text-center justify-center gap-y-5">
        {arr.map((item, index) => {
          return (
            <div>
              <img
                src={item.image}
                alt="image"
                className="w-[181px] h-[159px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
