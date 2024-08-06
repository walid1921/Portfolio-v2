import React from "react";
import { BsFillSendFill } from "react-icons/bs";

type SubmitBtnProps = {
  isSubmitting: boolean;
};

const SubmitBtn = ({ isSubmitting }: SubmitBtnProps) => {
  return (
    <button
      type="submit"
      className={`gap-[8px] flex items-center font-semibold border rounded-full px-[20px] py-[8px] md:px-[25px] md:py-[10px] text-md 
      transition-all ease-in-out duration-300 text-white hover:bg-[#4b9876] bg-[#289061] border-[#289061]`}
      disabled={isSubmitting}
    >
      {isSubmitting === true ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send
          <BsFillSendFill size={18} />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
