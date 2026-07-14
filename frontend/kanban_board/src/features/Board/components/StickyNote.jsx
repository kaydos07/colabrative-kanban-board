import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import profilePic from "../../../assets/userProfilePicTest.jpg";
import clsx from "clsx";

export const StickyNote = ({ content, duetime, position}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <div className="bg-amber-400 w-80 h-50 p-5 absolute top-50 left-50 flex justify-between flex-col gap-1">
      <div className="flex justify-between items-center w-full h-5">
        <i className="fa-solid fa-note-sticky"></i>
        {!isChecked ? (
          <button
            onClick={() => handleClick()}
            className="size-7 m-0    rounded-sm  border-2 opacity-60  hover:scale-105 active:scale-95"
          ></button>
        ) : (
          <button
            onClick={() => handleClick()}
            className="bg-[#1a1a1a] size-7 rounded-sm  border-2  hover:scale-105 active:scale-95"
          >
            <i className="mt-0.5 ml-px fa-solid fa-check text-white text-[20px] animate-fade-in"></i>
          </button>
        )}
      </div>
      <p
        className="text-sm"
        style={{ textDecorationLine: clsx(isChecked && "line-through") }}
      >
        Draft initial project brief for the Q3 marketing campaing and share with
        stakeholders.
      </p>
      <hr className="w-full h-px bg-black opacity-30"></hr>
      <div className="flex justify-between items-center w-full">
        <div>tomorow</div>
        <img
          className="object-fill rounded-full size-6  mr-2"
          src={profilePic}
        ></img>
      </div>
    </div>
  );
};
