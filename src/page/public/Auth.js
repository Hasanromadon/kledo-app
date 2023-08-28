import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import InputWithLabel from "../../components/Input";
import Button from "../../components/Button";
import { loginUser } from "../../features/authSlice";
import PublicLayout from "../../layout/PublicLayout";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const { register, handleSubmit , formState: {errors}} = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };

  return (
    <PublicLayout>
      <div className="flex flex-col justify-center items-center h-[60vh] p-4 sm:p-0 sm:h-screen">
        <h1 className="text-2xl font-bold mb-4 mt-6">Login</h1>
        <div className="flex  flex-col justify-center p-8 sm:px-16  bg-gray-100 border border-gray-200 rounded-3xl w-full sm:w-2/4 sm:h-[500px]">
          {auth.error && (
            <span className="block bg-red-500 text-white text-center p-2 mb-4 rounded-md">
              {auth.error}
            </span>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputWithLabel
              register={register("email", {
                required: "Email harus wajib di isi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Format email tidak sesuai",
                },
              })}
              label="Email"
              type="email"
              error={errors.email?.message}
            />
            <InputWithLabel
              register={register("password", {
                required: "Password wajib di isi",
              })}
              label="Password"
              type="password"
              error={errors.password?.message}
            />
            <Button
              disabled={auth.loading}
              type="submit"
              className="w-10/12 block mx-auto mt-8"
              variant="rounded"
            >
              {auth.loading ? "loading..." : "submit"}
            </Button>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Auth;
