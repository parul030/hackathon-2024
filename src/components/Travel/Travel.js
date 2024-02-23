import React, { useState } from "react";
import Chip from "./Chip";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Payment from "./Payment";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Travel() {
  const [selectedOne, setSelectedOne] = useState(false);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const [selectedThree, setSelectedThree] = useState(false);
  const [travel, setTravel] = useState("");
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelected = (value) => {
    if (value === 1) {
      setSelectedOne(true);
      setSelectedTwo(false);
      setSelectedThree(false);
    } else if (value === 2) {
      setSelectedOne(false);
      setSelectedTwo(true);
      setSelectedThree(false);
    } else if (value === 3) {
      setSelectedOne(false);
      setSelectedTwo(false);
      setSelectedThree(true);
    }
  };

  const onTravelTo = (event) => {
    setTravel(event.target.value);
  };

  const handleYes = (value) => {
    if (value === "yes") {
      setYes(true);
      setNo(false);
    } else if (value === "no") {
      setYes(false);
      setNo(true);
    }
  };

  return (
    <div className="">
      <Link to="/dashboard">
        {" "}
        <img src={"imgs/travelBanner.png"} alt="travel" />
      </Link>
      <div className="mt-[30px] ml-[20px]">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <TextField
              label="Travel To"
              value={travel}
              onChange={onTravelTo}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "100%" }}
              placeholder="Mumbai"
            />
          </div>
        </Box>
        <p className="mb-[10px] text-[#35354D] mt-[30px]">
          Next available slot
        </p>
        <Chip
          selectedOne={selectedOne}
          selectedTwo={selectedTwo}
          selectedThree={selectedThree}
          handleSelected={handleSelected}
        />
        <p className="mb-[10px] text-[#35354D] mt-[30px]">
          Cab to airport (drop + Transfer){" "}
        </p>
        <div className="flex">
          <div
            onClick={() => handleYes("yes")}
            className={`${
              !yes ? "bg-white" : "bg-[#86EFAC]"
            } border w-[88px] max-auto text-center pt-[5px] h-[40px] rounded-[20px] border-[#000000]`}
          >
            Yes
          </div>
          <div
            onClick={() => handleYes("no")}
            className={`${
              !no ? "bg-white" : "bg-[#86EFAC]"
            } border w-[88px] max-auto text-center pt-[5px] h-[40px] ml-[20px] rounded-[20px] border-[#000000]`}
          >
            No
          </div>
        </div>
      </div>
      <div className="mt-[40px] pt-[30px] border-t border-dashed border-[#000000] mx-[20px]">
        <p>Total Travel Cost : Rs37343 + 2657 = Rs40000</p>
      </div>
      <div className="border rounded-[1rem] mt-[40px] mx-[20px] py-[10px] px-[20px]">
        <p className="text-lg font-normal text-[#35354D]">
          Funds Available :₹2, 000,000
        </p>
        <p className="text-lg font-normal text-[#35354D]">
          Rate of Interest:8%
        </p>
        <p className="text-lg font-normal text-[#35354D]">EMI:₹2121 </p>
        <p className="text-lg font-normal text-[#35354D]">Tenure: 10 yrs</p>
      </div>
      <div className="bg-[#F3F4F6] mt-[20px] pl-[30px]">
        <Payment />
      </div>
      <div className="mx-auto ml-[70px] mb-[50px]">
        <button
          onClick={handleOpen}
          className="bg-[#1089D9] text-white text-sm font-normal w-[70%] mt-[30px] rounded-[10px]"
        >
          Pay
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="bg-white text-center mt-[30%] text-[#35354D]">
            <Typography
              className="text-xl font-bold py-5 px-2"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Ticket Confirmed
            </Typography>
            <CheckCircleIcon className="text-[#86EFAC] text-xxl" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your Ticket and Cab details have been sent to your registered
              Mobile Number
            </Typography>
            <img src={"imgs/booked.jpeg"} alt="booked" />
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
