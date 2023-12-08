import React from 'react'
import Header from '../Common/header';
import LinearDeterminate from './progressBar'
import Proposal from './Proposal'
import CustomizeInvestment from './customizeInvestment'
import Packets from './Packets'
import Disbursements from './disbursements';

function Dashboard() {
  return (
    <div className='bg-[#F4F4FF]'>
    <div className="relative"> 
     <div>
      <Header />
    </div>
    </div>
    <div className='mt-[39px] px-[62px]'>
      <p className='mb-[30px] text-[30px] font-normal'>Your investment report</p>
      <div className='flex'>
        <div className='bg-[#FFF] w-[40%] py-[50px] px-[40px] pb-[43px] rounded-[30px] shadow-v2'>
          <div className='w-[428px] pt-[29px] px-[22px] bg-[#F6FFF9] rounded-[20px] border border-dashed border-1 border-[#86EA9C]'>
          <div className='flex justify-between'>
          <div className='text-[22px] font-normal text-[#5D5D70]'>Your returns</div>
          <div className='text-[22px] font-normal text-[#5D5D70]'>IRR 12%</div>
          </div>
          <div className='text-left text-[40px] mt-[7px] '>₹ 3,50,000</div>
          <div className='mt-[22px] mb-[31px]'>
          <LinearDeterminate/>
          </div>
          </div>


          <div className='w-[428px] mt-[22px] pt-[29px] px-[22px] bg-[#F8F8FF] rounded-[20px] border border-dashed border-1 border-[#6F6F93]'>
          <div className='flex justify-between'>
          <div className='text-[22px] font-normal text-[#5D5D70]'>Your investment</div>
          </div>
          <div className='text-left text-[40px] mt-[7px] '>₹ 3,50,000</div>
          <div className='mt-[22px] mb-[31px]'>
          <LinearDeterminate/>
          </div>
          </div>

          <div className='mt-[40px]'>
            <button className='text-base py-[16px] px-[21px] rounded-[10px] border  border-1 border-[#36C3D6] capitalize text-[#36C3D6] font-semibold'>withdraw investment</button>
            <button className='text-base py-[16px] ml-[20px] px-[21px] rounded-[10px] border  border-1 border-[#36C3D6] capitalize bg-[#36C3D6] text-white font-semibold'>add more funds</button>
          </div>
         
        </div>
          <div className='w-[60%] ml-[20px]'>
          <div className='flex  justify-between'>
            <div className='text-[20px] font-semibold'>EMIs</div>
            <div className='text-[#36C3D6] text-base font-semibold'>view all</div>
            </div>
            <div className='bg-[#FFF1DF] mt-[18px]  rounded-[20px] py-[18px] px-[64px]  flex justify-between w-full capitalize'>
              <div className='border-r border-r-[white] pr-[85px]'>
              <div className='text-base font-normal text-[#5D5D70]'>upcoming EMIs</div>
              <div className='mt-[7px]'>₹ 50,000</div>
              </div>
              <div className='border-r border-r-[white] pr-[85px]'>
              <div  className='text-base font-normal text-[#5D5D70]'>EMIs received</div>
              <div className='mt-[7px]'>₹ 50,000</div>
              </div>
              <div>
              <div  className='text-base font-normal text-[#5D5D70]'>EMIs pending</div>
              <div className='mt-[7px]'>₹ 50,000</div>
              </div>
              </div>
        
        

        <div className='bg-white py-[38px] mt-[21px] capitalize rounded-[20px] px-[29px] shadow-v2'>
            <div className='flex justify-between'>
              <div>
                <p className='text-sm text-[#5D5D70] font-normal'>Borrower’s name</p>
                <p className='text-base mt-[7px] font-normal'>Rakshit Verma</p>
              </div>
              <div>
                <p className='text-sm text-[#5D5D70]'>app id</p>
                <p className='text-base mt-[7px]  font-normal'>123456</p>
              </div>
            </div>

            <div className='flex justify-between mt-[15px] capitalize'>
              <div>
                <p className='text-sm text-[#5D5D70]'>amount</p>
                <p className='text-base  mt-[7px] font-normal'>₹ 25,000</p>
              </div>
              <div>
                <p className='text-sm text-[#5D5D70]'>Tenure</p>
                <p className='text-base  mt-[7px] font-normal'>1yr 6months</p>
              </div>
              <div>
                <p  className='text-sm text-[#5D5D70]'>EMI amount</p>
                <p  className='text-base  mt-[7px] font-normal'>1yr 6months</p>
              </div>
              <div>
                <p className='text-sm text-[#5D5D70]' >date</p>
                <p className='text-base  mt-[7px] font-normal'>28/12/2023</p>
              </div>
            </div>

        </div>
          
        <div className='bg-white py-[38px] mt-[21px] capitalize rounded-[20px] px-[29px] shadow-v2'>
            <div className='flex justify-between'>
              <div>
                <p className='text-sm text-[#5D5D70] font-normal'>Borrower’s name</p>
                <p className='text-base mt-[7px]  font-normal'>Rakshit Verma</p>
              </div>
              <div>
                <p className='text-sm text-[#5D5D70]'>app id</p>
                <p className='text-base mt-[7px] font-normal'>123456</p>
              </div>
            </div>

            <div className='flex justify-between mt-[15px] capitalize'>
              <div>
                <p className='text-sm text-[#5D5D70]'>amount</p>
                <p className='text-base  mt-[7px] font-normal'>₹ 25,000</p>
              </div>
              <div>
                <p className='text-sm text-[#5D5D70]'>Tenure</p>
                <p className='text-base  mt-[7px] font-normal'>1yr 6months</p>
              </div>
              <div>
                <p  className='text-sm text-[#5D5D70]'>EMI amount</p>
                <p  className='text-base  mt-[7px] font-normal'>1yr 6months</p>
              </div>
              <div>
                <p className='text-sm text-[#5D5D70]' >date</p>
                <p className='text-base  mt-[7px] font-normal'>28/12/2023</p>
              </div>
            </div>

        </div>
          
        </div>
      </div>
    <Proposal />
    <CustomizeInvestment/>
    <Packets/>
    <Disbursements/>
    </div>
    </div>
  );
}

export default Dashboard
