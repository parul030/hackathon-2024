import React, { useEffect } from "react";
import { useNavigate, useRouter } from "react-router";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [alignment, setAlignment] = React.useState(false);
  const [secondToggle, setSecondToggle] = React.useState(false);
  const [openBox, setBox] = React.useState(false);
  //   const router = useRouter()
  const navigate = useNavigate();

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
      image: "imgs/funds.png",
      title: "fund",
    },
    {
      image: "imgs/emergancyTravel.png",
      title: "travel",
    },
    {
      image: "imgs/medicalEmergancy.png",
      title: "medical",
    },
    {
      image: "imgs/emergancy.png",
      title: "emergancySupport",
    },
  ];

  const handleRedirection = (value) => {
    if (value === "fund") {
      setBox(true);
    } else {
      navigate(value);
    }
  };

  const arrNonSop = [
    {
      image: "imgs/truePal.png",
      title: "elder",
    },
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
      image: "imgs/financial.png",
      title: "food",
    },

    {
      image: "imgs/preSchool.png",
      title: "preSchool",
    },
    {
      image: "imgs/travell.png",
      title: "travel",
    },
    {
      image: "imgs/relocation.png",
      title: "home",
    },
    {
        image: "imgs/md.png",
        title: "md",
      },
  ];
  return (
    <div className="pb-[50px]">
      <div>
        <div></div>
      </div>

      <div className="flex justify-between bg-[#F3F4F6] pl-[20px] pt-[20px]">
        <div>
          <img src={"imgs/bima.svg"} alt="logo" className="w-[79px] h-[70px]" />
        </div>
        <div className="flex mt-[20px] mr-[20px]">
          <div className="w-[88px] h-[30px]">
            <img src={"imgs/delhi.png"} alt="mumbai" />
          </div>
          <div className="w-[120px] h-[30px] ml-[10px]">
            <img src={"imgs/BBCoin.png"} alt="bbcoin" />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F4F6] pt-[16px] px-[20px] flex rounded-b-[30px]">
        <div>
          <img
            src={"imgs/user.png"}
            alt="user"
            className="h-[150px] w-[136px]"
          />
        </div>
        <div>
          <p className="text-[#35354D] mt-[30px] text-[24px] font-normal">
            Hello Saheli!
          </p>
          <p className="text-base font-normal">How can I help you today?</p>
        </div>
      </div>
      <p className="text-[#1089D9] text-xl font-medium text-center mt-10">
        Providing Convenience & Peace of mind
      </p>
      <div className="mt-[50px] flex justify-center  mx-auto text-center">
        <div>
          <div
            style={{
              width: "200px",
              backgroundColor: !alignment ? "#F3F4F6" : "#ed1c24",
              borderRadius: "25px",
              color: !alignment ? "#ed1c24" : "#F3F4F6",
              padding: "10px 20px",
              textAlign: "center",
              cursor: "pointer",
              border: "1px solid #ed1c24",
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
              padding: "10px 20px",
              marginTop: "30px",
              textAlign: "center",
              cursor: "pointer",
              border: "1px solid #1089D9",
            }}
            onClick={() => handleSecondChange(true)}
            size="large"
            aria-label="Large sizes"
          >
            Life Station
          </div>
        </div>
      </div>

      {alignment ? (
        <div className="mt-[23px] flex flex-wrap gap-x-3 ml-[20px] px-[10px] gap-y-5">
          {arr.map((item, index) => {
            return (
              <Link to={item.title === "travel" ? "/travel" : ""}>
                {" "}
                <div onClick={() => handleRedirection(item.title)}>
                  <img
                    src={item.image}
                    alt="image"
                    className="w-[181px] h-[159px] cursor-pointer"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}

      {secondToggle ? (
        <div className="mt-[23px] pb-20 flex flex-wrap gap-x-3 ml-[20px] px-[10px] gap-y-5">
          {arrNonSop.map((item, index) => {
            return (
              <div onClick={() => handleRedirection(item.title)}>
                <img
                  src={item.image}
                  alt="image"
                  className="w-[181px] h-[159px] cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      ) : null}

      {openBox ? (
        <div className="border rounded-[1rem] mt-[40px] mx-[20px] py-[10px] px-[20px]">
          <p className="text-lg font-normal text-[#35354D]">
            Funds Available: ₹2,00,000
          </p>
          <p className="text-lg font-normal text-[#35354D]">
            Rate of Interest: 8%
          </p>
          <p className="text-lg font-normal text-[#35354D]">EMI: ₹2121 </p>
          <p className="text-lg font-normal text-[#35354D]">Tenure: 10 yrs</p>
        </div>
      ) : null}
    </div>
  );
}
