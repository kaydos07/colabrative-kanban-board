import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form data: ", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="text"
          placeholder="email@gmail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          placeholder="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Password too short" },
          })}
          error={errors.password?.message}
        />
        <Button type="submit" color="#6d5e00" size="large">
          LOGIN <i className="fa-solid fa-arrow-right"></i>
        </Button>

      </form>
    </>
  );
}
