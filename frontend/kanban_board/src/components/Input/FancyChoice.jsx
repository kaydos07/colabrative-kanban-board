import Input from "./Input";
import { forwardRef } from "react";

const FancyChoice = ({ options, ...props }) => {
  return (
    <>
      <span>Category</span>
      <div className="flex flex-row gap-3 mt-4">
        {options.map((option) => {
          return (
            <div key={option} className="relative">
              <input
                type="radio"
                value={option}
                className="peer sr-only"
                id={option}
                {...props}
              ></input>
              <label
                htmlFor={option}
                className="bg-[#e6f7ef] px-4 py-2 border border-[#1a1a1a]/10 rounded-xl cursor-pointer  
                            hover:bg-[#7ed4fd]/40 hover:border-[#1a1a1a]
                            peer-checked:bg-[#7ed4fd] peer-checked:border-[#1a1a1a] peer-checked:border-2"
              >
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FancyChoice;
