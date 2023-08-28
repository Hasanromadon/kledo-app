import React, { useEffect } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { useMutation } from "react-query";
import { addShippingComps } from "../../../api/shipping-comps";
import { useForm } from "react-hook-form";
import InputWithLabel from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const AddShipping = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { mutate, isLoading, isError, isSuccess } =
    useMutation(addShippingComps);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/shippings");
    }
  }, [isSuccess, navigate]);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg sm:text-2xl mr-4">Shipping Comps</h3>
        </div>
      </div>
      <form className="sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        {isError && (
          <span className="text-red-600">Gagal Menambah Shipping</span>
        )}
        <InputWithLabel
          register={register("name", { required: "Nama harus disi", min: 4 })}
          label="Nama"
          type="text"
          error={errors.name?.message}
        />
        <Button className="rounded-md" disabled={isLoading} type="submit">
          {isLoading ? "loading..." : "Simpan"}
        </Button>
      </form>
    </AdminLayout>
  );
};

export default AddShipping;
