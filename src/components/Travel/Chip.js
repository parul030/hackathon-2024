export default function ChipComp(props) {
    const {handleSelected , selectedOne, selectedTwo ,selectedThree} = props
  return (

    <div>
        
    <div className="flex">
      <div onClick = {() =>handleSelected(1)} className={`${ !selectedOne ? "bg-white":"bg-[#86EFAC]" } border w-[88px] max-auto text-center pt-[5px] h-[40px] rounded-[20px] border-[#000000]`}>7:00 am</div>
      <div onClick = {() =>handleSelected(2)}  className={`${ !selectedTwo ? "bg-white":"bg-[#86EFAC]" } border w-[88px] max-auto text-center pt-[5px] h-[40px] ml-[20px] rounded-[20px] border-[#000000]`}>8:00 am</div>
      <div onClick = {() =>handleSelected(3)}  className={`${ !selectedThree? "bg-white":"bg-[#86EFAC]" } border w-[88px] max-auto text-center pt-[5px] h-[40px] ml-[20px] rounded-[20px] border-[#000000]`}>9:00 am</div>
    </div>
    </div>
  );
}
