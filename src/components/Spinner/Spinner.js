import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  const { isLoading } = useSelector((state) => state.reducerSpinner);

  return (
    isLoading && (
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center">
        <RingLoader color="#36d7b7" size={80} />
      </div>
    )
  );
}
