export default function Step2(props) {

    const {investment ,
        handleInvestment ,
        innerStep ,handleButton 
        ,handleEMployementType ,
        incomeType ,
         handleFundValue,
         fundValue} = props
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
        <div className="flex justify-between px-[24%]">
        <div onClick = {() =>handleEMployementType("salaried")} className={` ${incomeType === "salaried" ? "border border-1 border-[#F5BD74]" : ''} bg-[#3F3F58] py-[50px] px-[50px] rounded-[30px] text-center h-[173px]`}>
            <img src = "imgs/selfEmployed.png" alt ="salarified" />
            <p className="mt-[20px] text-white">Salaried</p>

        </div>
        <div onClick = {() =>handleEMployementType("employed")}  className={` ${incomeType === "employed" ? "border border-1 border-[#F5BD74]" : ''} bg-[#3F3F58] py-[50px] px-[50px] rounded-[30px] text-center h-[173px]`}>
            <img src = "imgs/selfEmployed.png" alt ="salarified" />
            <p  className="mt-[20px] text-white ">Self Employed</p>

        </div>
        </div>
     </div> : null}

   {innerStep === 2 ? <div>
   <p className="text-[#BDBDE4] text-[18px] font-normal mb-[50px]">Whom do you wish to fund?</p>
  <div className="flex px-[20%]">
    <div onClick = {() =>handleFundValue (0)} className={`${fundValue === 0 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light cursor-pointer mr-[20px] py-[20px] px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58]`}>0% funded</div>
    <div onClick = {() =>handleFundValue (25)} className={` ${fundValue === 25 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light cursor-pointer  mr-[20px] py-[20px] px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58]`}>25% funded</div>
    <div onClick = {() =>handleFundValue (50)} className={`${fundValue === 50 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light cursor-pointer  mr-[20px] py-[20px] px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58]`}>50% funded</div>
    <div  onClick = {() =>handleFundValue (75)} className={`${fundValue === 75 ? "border border-1 border-[#F5BD74]" : ''} text-sm font-light cursor-pointer mr-[20px] py-[20px] px-[5px]  w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58]`}>75% funded</div>
</div>
   </div>: null}

   {innerStep === 3 ? <div>
   <p className="text-[#BDBDE4] text-[18px] font-normal mb-[50px]">Choose the grade of the borrower</p>
  <div className="flex px-[20%]">
    <div onClick = {() =>handleFundValue (0)} className={`${fundValue === 0 ? "border border-1 border-[#F5BD74]" : '' } text-sm text-[#AEAEB7] font-light mr-[20px] py-[20px] cursor-pointer px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] h-[105px] `}>
        <p>grade</p>
        <p>A</p>
        <p>10%-11%</p>
    </div>
    <div onClick = {() =>handleFundValue (25)} className={` ${fundValue === 25 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light text-[#AEAEB7]  mr-[20px] py-[20px]  cursor-pointer px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] h-[105px]`}>
      <p>grade</p>
        <p>B</p>
        <p>12%-13%</p>
    </div>
    <div onClick = {() =>handleFundValue (50)} className={`${fundValue === 50 ? "border border-1 border-[#F5BD74]" : '' } text-sm font-light text-[#AEAEB7]  mr-[20px] py-[20px]  cursor-pointer px-[5px] w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] h-[105px]`}>
    <p>grade</p>
        <p>C</p>
        <p>14%-15%</p>
    </div>
    <div  onClick = {() =>handleFundValue (75)} className={`${fundValue === 75 ? "border border-1 border-[#F5BD74]" : ''} text-sm font-light text-[#AEAEB7]  mr-[20px] py-[20px]  cursor-pointer px-[5px]  w-[92px] h-[58px] rounded-[10px] bg-[#3F3F58] h-[105px]`}>
     <p>grade</p>
     <p>D</p>
    <p>16%-18%</p>
    </div>
</div>
   </div>: null}

      <div className="flex text-center">
       <img  className="block ml-[35%] cursor-pointer" onClick={() => handleButton(-1)} src = "imgs/prevIcon.png"  alt = "prev" />
        <img className="block mr-[35%] cursor-pointer" onClick={() => handleButton(1)} src = "imgs/nextIcon.png"  alt = "next" />
        </div>  
       </>
    );
  }