export default function Step2(props) {

    const {investment ,handleInvestment} = props
    return (
        <>
        <div className="px-[100px]">
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
     </div>

     <div>
        <p>Choose borrower’s employment type?</p>
        <div className="bg-[#3F3F58]">
            <img src = "imgs/selfEmployed.png" alt ="salarified" />

        </div>
     </div>

      <div>
       <img src = "imgs/prevIcon.png"  alt = "prev" />
        <img src = "imgs/nextIcon.png"  alt = "next" />
        </div>  
       </>
    );
  }