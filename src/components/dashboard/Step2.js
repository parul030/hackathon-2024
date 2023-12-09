import { Grid, Typography, LinearProgress } from '@mui/material'

export default function Step2(props) {

  
  const {investment ,
    handleInvestment ,
    innerStep ,handleButton 
    ,handleEMployementType ,
    incomeType ,
    handleFundValue,
    fundValue, investor, handleInvestorValue} = props

  const renderInvestorBox = (name, amt, pVal, item, fAmt, rAmt, purpose, risk) => {
return <div onClick = {() =>handleInvestorValue (item)} className={` ${ investor === item ?  "text-[#F5BD74]" : "text-[#AEAEB7]"} cursor-pointer rounded-[10px] color-[#AEAEB7] mr-[10px] text-xs font-medium mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 `}>
      <Typography className='text-[#AEAEB7] text-[10px] font-light'>borrower’s name</Typography>
      <Typography>{name}</Typography>
      <Typography>Total Loan Required</Typography>
      <Typography>{amt}</Typography>
      <LinearProgress variant="determinate"  color="success"  value={pVal} style={{ backgroundColor: 'red', height: '8px', borderRadius: '8px'  }}
      sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'green' } }}/>
      <div className='flex justify-center'>
        <div>
          <div>Funded Amt.</div>
          <div>{fAmt}</div>
        </div>
        <div>
          <div>Remaining Amt.</div>
          <div>{rAmt}</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div>
          <div>Purpose of Loan</div>
          <div>{purpose}</div>
        </div>
        <div>
          <div>Risk Type</div>
          <div>{risk}</div>
        </div>
      </div>
      </div>
  }
    return (
        <>
        {innerStep === 0 ? <div className="px-[100px]">
     <p className="text-lg font-normal text-[#BDBDE4] mt-[20px] mb-[30px]">Choose categories where you wish to make investments?</p>
     <div className=" flex">
     <div onClick={() =>handleInvestment("credit card")} className={` ${ investment === "credit card" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"} cursor-pointer rounded-[10px] color-[#AEAEB7] mr-[10px] text-xs font-medium mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
      credit card refinancing
     </div>
     <div onClick={() =>handleInvestment("debt")} className={` ${ investment === "debt" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}  cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     debt consolidation
     </div>
     <div onClick={() =>handleInvestment("home improvement")} className={` ${ investment === "home improvement" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}  cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     home improvement
     </div>
     <div onClick={() =>handleInvestment("medical")}  className={` ${ investment === "medical" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     medical expenses
     </div>
     <div onClick={() =>handleInvestment("home buying")}   className={` ${ investment === "home buying" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     home buying
     </div>
     </div>
     <div className="flex">
     <div onClick={() =>handleInvestment("car")}   className={` ${ investment === "car" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     car financing
     </div> 
      <div onClick={() =>handleInvestment("green loan")}   className={` ${ investment === "green loan" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     green loan
     </div>
     <div  onClick={() =>handleInvestment("business")}   className={` ${ investment === "business" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     business
     </div>
     <div onClick={() =>handleInvestment("vacation")}   className={` ${ investment === "vacation" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     vacation
     </div>
     <div onClick={() =>handleInvestment("moving")}   className={` ${ investment === "moving" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     moving & relocation
     </div>
     </div>
     <div className="flex">
     <div onClick={() =>handleInvestment("major purchases")}   className={` ${ investment === "major purchases" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     major purchases
     </div>
     <div  onClick={() =>handleInvestment("others")}   className={` ${ investment === "others" ?  "text-[#F5BD74]" : "text-[#AEAEB7]"}   cursor-pointer rounded-[10px] mr-[10px] text-xs font-medium  mt-[20px] py-[10px] px-[10px] capitalize shadow-v2 w-[92px]`}>
     others
     </div>

     </div>
     </div> : null}

   {innerStep === 1 ?  <div>
        <p className="text-[#BDBDE4] text-[18px] font-normal mb-[50px]">Choose borrower’s employment type?</p>
        <div className="flex justify-between px-[25%]">
        <div onClick = {() =>handleEMployementType("salaried")} className={` ${incomeType === "salaried" ? "border border-1 border-[#F5BD74]" : ''} bg-[#3F3F58]  w-[170px] py-[50px] cursor-pointer px-[30px] rounded-[30px] text-center`}>
            <img src = "imgs/salarified.png" className='w-[71px] h-[44px] block mx-auto' alt ="salarified" />
            <p className="mt-[20px] text-white">Salaried</p>

        </div>
        <div onClick = {() =>handleEMployementType("employed")}  className={` ${incomeType === "employed" ? "border border-1 border-[#F5BD74]" : ''} bg-[#3F3F58]  w-[170px] py-[50px] px-[30px] cursor-pointer rounded-[30px] text-center`}>
            <img src = "imgs/selfEmployed.png" className='w-[71px] h-[44px] block mx-auto' alt ="employed" />
            <p  className="mt-[20px] text-white">Self Employed</p>

        </div>
        </div>
     </div> : null}

   {innerStep === 2 ? <div>
   <p className="text-[#BDBDE4] text-[18px] font-normal mb-[50px]">Whom do you wish to fund?</p>
  <div className="flex px-[20%]">
    <div onClick = {() =>handleFundValue (0)} className={`${fundValue === 0 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light cursor-pointer mr-[20px] py-[20px] px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] text-white`}>0% funded</div>
    <div onClick = {() =>handleFundValue (25)} className={` ${fundValue === 25 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light cursor-pointer  mr-[20px] py-[20px] px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] text-white`}>25% funded</div>
    <div onClick = {() =>handleFundValue (50)} className={`${fundValue === 50 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light cursor-pointer  mr-[20px] py-[20px] px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] text-white`}>50% funded</div>
    <div  onClick = {() =>handleFundValue (75)} className={`${fundValue === 75 ? "border border-1 border-[#F5BD74]" : ''} text-sm font-light cursor-pointer mr-[20px] py-[20px] px-[5px]  w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] text-white`}>75% funded</div>
</div>
   </div>: null}

   {innerStep === 3 ? <div>
   <p className="text-[#BDBDE4] text-[18px] font-normal mb-[50px]">Choose the grade of the borrower</p>
  <div className="flex px-[20%]">
    <div onClick = {() =>handleFundValue (0)} className={`${fundValue === 0 ? "border border-1 border-[#F5BD74]" : '' } text-sm capitalize text-[#AEAEB7] font-light mr-[20px] py-[20px] cursor-pointer px-[5px] w-[92px]  rounded-[10px] bg-[#3F3F58] `}>
        <p>grade</p>
        <p>A</p>
        <p>10%-11%</p>
        <p>returns</p>
        <p>very low risk</p>
    </div>
    <div onClick = {() =>handleFundValue (25)} className={` ${fundValue === 25 ? "border border-1 border-[#F5BD74]" : '' } text-sm  capitalize font-light text-[#AEAEB7]  mr-[20px] py-[20px]  cursor-pointer px-[5px] w-[92px]rounded-[10px] bg-[#3F3F58]`}>
      <p>grade</p>
        <p>B</p>
        <p>12%-13%</p>
        <p>returns</p>
        <p>medium risk</p>
    </div>
    <div onClick = {() =>handleFundValue (50)} className={`${fundValue === 50 ? "border border-1 border-[#F5BD74]" : '' } text-sm  capitalize font-light text-[#AEAEB7]  mr-[20px] py-[20px]  cursor-pointer px-[5px] w-[92px]  rounded-[10px] bg-[#3F3F58]`}>
    <p>grade</p>
        <p>C</p>
        <p>14%-15%</p>
        <p>returns</p>
        <p>High risk</p>
    </div>
    <div  onClick = {() =>handleFundValue (75)} className={`${fundValue === 75 ? "border border-1 border-[#F5BD74]" : ''} text-sm  capitalize font-light text-[#AEAEB7]  mr-[20px] py-[20px]  cursor-pointer px-[5px]  w-[92px]  rounded-[10px] bg-[#3F3F58]`}>
     <p>grade</p>
     <p>D</p>
    <p>16%-18%</p>
    <p>returns</p>
    <p>very high risk</p>
    </div>
</div>
   </div>: null}

   {innerStep === 4 ? <div>
   <p className="text-[#BDBDE4] text-[18px] font-normal mb-[50px]">Select borrower to start lending money</p>
  <Grid container spacing={2}>
  <Grid item xs={4}>
    {renderInvestorBox("Vandana Singh", "₹ 5,00,000",40, '₹ 2,00,000', '₹ 4,00,000', "Business", "Moderate")}
  </Grid>
  <Grid item xs={4}>
  {renderInvestorBox("RajendraKumar Sharma ", "₹ 2,00,000",60, '₹ 1,00,000', '₹ 4,00,000', "Business", "Moderate")}
  </Grid>
  <Grid item xs={4}>
  {renderInvestorBox("GangaSagar Sharma", "₹ 6,00,000",45, '₹ 3,00,000', '₹ 4,00,000', "Business", "Moderate")}
  </Grid>
    </Grid>
   </div>: null}

      <div className="flex justify-center mt-[40px]">
       <img  className="block ml-[20%] cursor-pointer w-[20px] h-[20px]" onClick={() => handleButton(-1)} src = "imgs/prevIcon.png"  alt = "prev" />
        <img className="block mr-[20%] cursor-pointer w-[20px] h-[20px] ml-[40px] " onClick={() => handleButton(1)} src = "imgs/nextIcon.png"  alt = "next" />
        </div>  
       </>
    );
  }