// CommandPalette.jsx

import React, {useState} from 'react';
import './CommandPalette.css'; // Import the CSS file

function CommandPalette() {
    const [employeeId, setEmployeeId] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleSendOtp = () => {
        // Implement OTP sending logic here
        setOtpSent(true);
    };

    return (<div className="content">

        <div className="rounded-lg">
            <div className="flex justify-center rounded-b-lg">
                <img src={"imgs/user.png"} alt="Lady Illustration" className="lady"/>
                <p className="greeting text-left mt-40 mr-5">
                    <p className="text-lg text-27">Hello!</p>
                    <p className="text-sm font-normal text-">Welcome to <span
                        className="text-red-500">BIMA</span><span className="text-blue-600"> Bandu</span></p>
                    <p className="text-sm font-normal text-">Concierge Service</p></p>
            </div>
        </div>

        <div className="bg-[#F3F4F6] text-center rounded-tl-lg p-4" style={{borderRadius: "5rem 0 0 0"}}>
            <div className="mt-10">
                <input
                    type="text"
                    placeholder="Employee Id"
                    value={employeeId}
                    onChange={handleEmployeeIdChange}
                    className="input-field"
                />
            </div>

            <div className="mt-56">
                <button onClick={handleSendOtp} disabled={otpSent} className="send-otp-btn">
                    {otpSent ? 'OTP Sent' : 'Send OTP'}
                </button>
            </div>
        </div>
    </div>);
}

export default CommandPalette;
