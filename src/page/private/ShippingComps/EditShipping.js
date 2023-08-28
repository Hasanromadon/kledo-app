import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { useMutation } from "react-query";
import {
  deleteShippingComps,
  editShippingComps,
} from "../../../api/shipping-comps"; // Corrected import
import { useForm } from "react-hook-form";
import InputWithLabel from "../../../components/Input";
import Button from "../../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/20/solid";
import ConfirmationDialog from "../../../components/Dialog";

const EditShipping = () => {
  const [showDialog, setShowDialog] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;

  const { mutate, isLoading, isError, isSuccess } = useMutation((data) =>
    editShippingComps(item.id, data)
  );

  const {
    mutate: deleteMutation,
    isLoading: isDeleting,
    isSuccess: isDeleteSuccess,
  } = useMutation(() => deleteShippingComps(item.id));

  const onSubmit = (data) => {
    mutate(data);
  };

  const deleteShipping = () => {
    deleteMutation();
  };

  useEffect(() => {
    if (isSuccess || isDeleteSuccess) {
      navigate("/shippings");
    }
  }, [isSuccess, isDeleteSuccess, navigate]);

  return (
    <>
      <AdminLayout>
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg sm:text-2xl mr-4">Edit Shipping Comps</h3>
            <span
              onClick={() => setShowDialog(true)}
              className="rounded-full bg-red-500 hover:bg-red-600 p-1 sm:p-2 cursor-pointer"
            >
              <TrashIcon className=" text-white" width={14} height={14} />
            </span>
          </div>
        </div>
        <form className="sm:w-96" onSubmit={handleSubmit(onSubmit)}>
          {isError && (
            <span className="text-red-600">Gagal Menambah Shipping</span>
          )}
          <InputWithLabel
            defaultValue={item.name}
            register={register("name", { required: "Nama harus disi", min: 4 })}
            label="Nama"
            type="text"
            error={errors.name?.message}
          />
          {isDeleting ? (
            <span>Menghapus shipping...</span>
          ) : (
            <Button className="rounded-md" disabled={isLoading} type="submit">
              {isLoading ? "loading..." : "Simpan"}
            </Button>
          )}
        </form>
      </AdminLayout>
      <ConfirmationDialog
        title="Hapus Shipping"
        message="Apakah anda yakin ingin menghapus shipping?"
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={() => deleteShipping()}
      />
    </>
  );
};

export default EditShipping;
