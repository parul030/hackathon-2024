import React, { useState, useEffect } from 'react';
import './SubmitOtp.css';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SubmitOtp = () => {
    // const [employeeId, setEmployeeId] = useState('');
    const userId = localStorage.getItem('userId');
    const [otp, setOtp] = useState(Array(4).fill(''));
    const [timeLeft, setTimeLeft] = useState(60);
    const navigate = useNavigate();

    const notify = () => {
        setTimeout(() => {
            toast.success("Logged In Successfully!");
            // navigate('/dashboard'); // Replace '/new-page' with your desired route
        }, 500);

        // Redirect after a delay of 2000 milliseconds (2 seconds)
        setTimeout(() => {
            navigate('/dashboard'); // Replace '/new-page' with your desired route
        }, 2000);
    };

    useEffect(() => {
        if (!timeLeft) return;

        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        notify();
    };

    const handleOtpChange = (elementIndex, event) => {
        setOtp([...otp.map((digit, index) => index === elementIndex ? event.target.value : digit)]);
    };

    const handleResendClick = () => {
        // Handle resend OTP here
        setTimeLeft(60);
    };

    return (
        <div className="submitotp">
            <div className="rounded-lg">
                <div className="flex justify-center rounded-b-lg">
                    <img src={"imgs/user.png"} alt="Lady Illustration" className="lady" />
                    <p className="greeting text-left mt-40 mr-5">
                        <p className="text-lg text-37">Hello!</p>
                        <p className="text-sm font-normal">Welcome to <span
                            className="text-red-500">BIMA</span><span className="text-blue-600"> Bandu</span></p>
                        <p className="text-sm font-normal">Concierge Service</p></p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mt-10">
                    <input
                        type="text"
                        placeholder="Customer Id/Mobile No."
                        value={userId}
                        // onChange={handleEmployeeIdChange}
                        className="input-field"
                    />
                </div>
                <label>
                    OTP
                    <MuiOtpInput value={otp} onChange={setOtp} />
                </label>
                <div>
                    <span>{timeLeft < 10 ? `0${timeLeft}` : timeLeft} secs remaining</span>
                    <button type="button" onClick={handleResendClick} className="fixed bottom-10 w-full">Resend OTP</button>
                </div>

                <div className="fixed bottom-10 w-[92%] p-1">
                    <button className="send-otp-btn w-full">Submit</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default SubmitOtp;
