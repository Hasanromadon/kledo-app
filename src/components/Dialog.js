import React, {Fragment} from "react";
import { Dialog, Transition } from "@headlessui/react";

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white rounded-lg p-8 mx-auto z-20">
              <Dialog.Title as="h3" className="text-lg font-semibold mb-4">
                {title}
              </Dialog.Title>
              <p className="text-gray-700">{message}</p>
              <div className="mt-6 flex justify-center">
                <button
                  className="text-blue-500 px-4 py-2 mr-4"
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                >
                  Ya
                </button>
                <button className="text-gray-500 px-4 py-2" onClick={onClose}>
                  Tidak
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ConfirmationDialog;
