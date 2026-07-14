import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import FancyChoice from "../Input/FancyChoice";
import Button from "../Button/Button";

import { useForm } from "react-hook-form";

export const Modal = ({isOpened, onClose}) => {
  const { register, handleSubmit, setValue} = useForm({
    defaultValues: {
        title: "",
        noteContent: "",
        FancyChoice: "To Do"
    }
  });

  const ClearContent = () => {
    setValue("title", "")
    setValue("noteContent", "")
    setValue("FancyChoice", "To Do")
  }

  const submit = (data) => {
    console.log(data);
  };

  if(!isOpened) {
    ClearContent()
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-1 flex justify-center align-middle items-center transition-colors 
                ${isOpened ? "visible bg-black/60" : "hidden"}`}
    >
      <div  onClick={(e) => e.stopPropagation()} className="transform-gpu flex flex-col bg-[#e6f7ef] w-120 h-150 -rotate-1 p-4">
        <div className="flex justify-between opacity-60">
          <i className="fa-solid fa-ellipsis"></i>
          <h2>New Note</h2>
          <i onClick={onClose} className="fa-solid fa-x cursor-pointer"></i>
        </div>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col flex-1 gap-18">
         <div className="flex flex-col gap-1">
          <Input
            placeholder="Something important ..."
            type="text"
            label="Title"
            className={
              "bg-[#e6f7ef]! shadow-none! focus:outline-none focus:ring-0 focus:border-transparent"
            }
            {...register("title", {
              required: "Don`t leave your title blank 🥲",
            })}
          ></Input>
          <TextArea
            placeholder="describe the task specifically. Our note has room for all."
            type=""
            label="Note Content"
            className={
              "bg-[#e6f7ef]! shadow-none! focus:outline-none focus:ring-0 focus:border-transparent"
            }
            {...register("noteContent", {})}
          ></TextArea>
          <FancyChoice {...register("FancyChoice",{})} options={["To Do", "In Progress", "Done"]}></FancyChoice>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <Button
              className="text-[#1a1a1a]! font-bold"
              size="large"
              color="#fde047"
              type="submit"
            >
              <i className="fa-solid fa-thumbtack"></i>
              {"   Save Note"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
