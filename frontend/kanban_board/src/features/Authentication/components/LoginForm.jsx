import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import { AuthAPI } from "../services/AuthApi";
import { useAuth } from "../../../context/AuthContext";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await AuthAPI.logIn(data);
      console.log(response)
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
          LOG IN <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </form>
    </>
  );
}
