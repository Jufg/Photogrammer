import React, {useState} from "react";
import {FaChevronDown} from "react-icons/fa";

const Dropdown = ({selected, setSelected, options}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="select-none relative items-center">
            <div
                className="font-semibold py-[10px] px-[20px] shadow-lg bg-[#DBDBDB] border-[#B1B1B1] border-2 flex items-center cursor-pointer justify-between rounded-2xl hover:bg-[#B1B1B1] ease-in-out duration-200"
                onClick={(e) => setIsActive(!isActive)}>
                {selected} <FaChevronDown className="ml-5"/>
            </div>
            {isActive && (<div
                className="absolute top-[110%] w-full left-0 py-[10px] px-[10px] shadow-xl z-10 w-full bg-[#DBDBDB] border-[#B1B1B1] border-[1px] rounded-2xl">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="py-[7px] px-[15px] cursor-pointer transition-all text-center hover:bg-[#B1B1B1] font-semibold rounded-2xl ease-in-out duration-200"
                        onClick={e => {
                            setSelected(option)
                            setIsActive(false)
                        }}>
                        {option}
                    </div>
                ))}
            </div>)}
        </div>
    )
}

export default Dropdown