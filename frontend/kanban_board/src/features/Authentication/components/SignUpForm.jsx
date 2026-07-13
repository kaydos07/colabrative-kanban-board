import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import { AuthAPI } from "../services/AuthApi";

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await AuthAPI.signUp(data);
      console.log(response);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Username"
          type="text"
          placeholder="YourName123"
          {...register("username", {
            required: "username is required",
          })}
          error={errors.username?.message}
        />
        <Input
          label="Email"
          type="text"
          placeholder="email@gmail.com"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "invalid email",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          placeholder="password"
          {...register("password", {
            required: "password is required",
            minLength: { value: 8, message: "password too short" },
          })}
          error={errors.password?.message}
        />
        <Button type="submit" color="#007241" size="large">
          SIGN UP <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </form>
    </>
  );
}
