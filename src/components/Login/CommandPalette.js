// CommandPalette.jsx

import React, { useState } from 'react';
import './CommandPalette.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function CommandPalette() {
    const navigate = useNavigate();
    const [userId, setUserId] = React.useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleEmployeeIdChange = (e) => {
        setUserId(e.target.value);
        localStorage.setItem('userId', userId);
    };

    const handleSendOtp = () => {
        // Implement OTP sending logic here
        setOtpSent(true);

        // Redirect after a delay of 2000 milliseconds (2 seconds)
        setTimeout(() => {
            navigate('/submitotp'); // Replace '/new-page' with your desired route
        }, 2000);
    };

    return (<div className="">
        <div className="rounded-lg">
            <div className="flex justify-center rounded-b-lg">
                <img src={"imgs/user.png"} alt="Lady Illustration" className="lady" />
                <p className="greeting text-left mt-10 mr-5">
                <img src={"imgs/bima.svg"} alt="logo" className="w-[79px] h-[70px]" />
                    <p className="text-lg text-27">Hello!</p>
                    <p className="text-sm font-normal text-">Welcome to <span
                        className="text-red-500">BIMA</span><span className="text-blue-600"> Bandu</span></p>
                    <p className="text-sm font-normal text-">Concierge Service</p></p>
            </div>
        </div>

        <div className="bg-[#F3F4F6] text-center rounded-tl-lg pt-4 px-2 pb-60" style={{ borderRadius: "5rem 0 0 0", height: "" }}>
            <div className="mt-20">
                <input
                    type="text"
                    placeholder="Customer Id/ Mobile No."
                    value={userId}
                    onChange={handleEmployeeIdChange}
                    className="input-field"
                />
            </div>

            <div className=" mt-52 w-[98%] p-1">
                <button onClick={handleSendOtp} disabled={otpSent} className="send-otp-btn py-3 w-full">
                    {otpSent ? 'OTP Sent' : 'Send OTP'}
                </button>
            </div>
        </div>
    </div >);
}

export default CommandPalette;
