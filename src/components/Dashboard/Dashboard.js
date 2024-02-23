import React, { useEffect } from "react";

export default function Dashboard() {
  const [alignment, setAlignment] = React.useState(false);
  const [secondToggle, setSecondToggle] = React.useState(false);

  const handleChange = (value) => {
    setAlignment(value);
    setSecondToggle(false);
  };

  const handleSecondChange = (value) => {
    setSecondToggle(value);
    setAlignment(false);
  };
  const arr = [
    {
      image: "imgs/food.png",
      title: "food",
    },
    {
      image: "imgs/taxAdvisor.png",
      title: "taxAd",
    },
    {
      image: "imgs/petCare.png",
      title: "petCare",
    },
    {
      image: "imgs/food.png",
      title: "food",
    },
    {
      image: "imgs/medical.png",
      title: "medical",
    },
    {
      image: "imgs/elder.png",
      title: "elder",
    },
    {
      image: "imgs/preSchool.png",
      title: "preSchool",
    },
    {
      image: "imgs/travel.png",
      title: "travel",
    },
    {
      image: "imgs/home.png",
      title: "home",
    },
  ];

  const arrNonSop = [
    {
      image: "imgs/food.png",
      title: "food",
    },
    {
      image: "imgs/taxAdvisor.png",
      title: "taxAd",
    },
    {
      image: "imgs/petCare.png",
      title: "petCare",
    },
    {
      image: "imgs/food.png",
      title: "food",
    },
    {
      image: "imgs/elder.png",
      title: "elder",
    },
    {
      image: "imgs/preSchool.png",
      title: "preSchool",
    },
    {
      image: "imgs/travel.png",
      title: "travel",
    },
    {
      image: "imgs/home.png",
      title: "home",
    },
  ];
  return (
    <div className="">
      <div className="bg-[#F3F4F6] pt-[61px] flex justify-center rounded-b-[30px]">
        <div>
          <img
            src={"imgs/user.png"}
            alt="user"
            className="h-[150px] w-[136px]"
          />
        </div>
        <div>
          <img src={"imgs/bima.svg"} alt="logo" className="w-[79px] h-[70px]" />
          <p className="text-[#35354D] text-[20px] font-normal">Hello Parul</p>
          <p className="text-sm  font-normal">How can I help you today?</p>
        </div>
      </div>
      <p  className="text-[#1089D9] text-xl font-medium text-center mt-10">Providing Convience & Peace of mind</p>
      <div className="mt-[50px] flex justify-center  mx-auto text-center">
        <div>
        <div
          style={{
            width: "200px",
            backgroundColor: !alignment ? "#F3F4F6" : "#ed1c24",
            borderRadius: "25px",
            color: !alignment ? "#ed1c24" : "#F3F4F6",
            padding:"10px 20px",
            textAlign:"center",
            cursor:"pointer",
            border:"1px solid #ed1c24"
          }}
          onClick={() => handleChange(true)}
          size="large"
          aria-label="Large sizes"
        >
          SnapAid
        </div>
        <div
          style={{
            width: "200px",
            backgroundColor: !secondToggle ? "#F3F4F6" : "#1089D9",
            borderRadius: "25px",
            color: !secondToggle ? "#1089D9" : "#F3F4F6",
            padding:"10px 20px",
            marginTop:"30px",
            textAlign:"center",
            cursor:"pointer",
            border:"1px solid #1089D9"
            
          }}
          onClick={() => handleSecondChange(true)}
          size="large"
          aria-label="Large sizes"
        >
         Life Station
        </div>
      </div>
      </div>

     {alignment? <div className="mt-[23px] flex flex-wrap gap-x-3 ml-[20px] px-[10px] gap-y-5">
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
      </div>: null
}

     {secondToggle? <div className="mt-[23px] flex flex-wrap gap-x-3 ml-[20px] px-[10px] gap-y-5">
        {arrNonSop.map((item, index) => {
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
      :null}
    </div>
  );
}
