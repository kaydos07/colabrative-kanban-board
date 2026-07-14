import { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import profilePic from "../../assets/userProfilePicTest.jpg";
import { useAuth } from "../../context/AuthContext";
import { Modal } from "../Modal/Modal";

export default function NavBar({ props }) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleClick = () => {
    setIsModalOpened(modal => !modal)
  };
  return (
    <>
      <nav className="flex justify-between text-[#f9f9f9] font-bold font-['Architects_Daughter',cursive] bg-[#1a1a1a]/70 backdrop-blur-md border-b-2 border-white/5">
        <span className="flex justify-between gap-15 items-center ml-2">
          <div className="text-3xl">Wallboard</div>
          <ul className="flex justify-between gap-8">
            <li className="cursor-pointer">Board</li>
            <li className="cursor-pointer">Members</li>
            <li className="cursor-pointer">History</li>
          </ul>
        </span>
        <span className="flex items-center justify-around gap-5">
          <Button className="text-[#1a1a1a]" handleClick={handleClick} size="small" color={"#FDE047"}>
            + Add Note
          </Button>
          <Input placeholder="Search notes..."></Input>
          <i className="fa-solid fa-gear"></i>
          <i className="fa-solid fa-bell"></i>
          <img
            className="object-fill rounded-full size-11 mr-2"
            src={profilePic}
          ></img>
        </span>
      </nav>
      <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(modal => !modal)}></Modal>
    </>
  );
}
