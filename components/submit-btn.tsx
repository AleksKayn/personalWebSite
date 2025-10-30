import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-[3.1rem] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff73d0] via-[#9f6bff] to-[#58d9ff] text-base font-semibold text-[#0b0615] shadow-[0_18px_60px_rgba(151,77,255,0.45)] outline-none transition-transform hover:scale-[1.02] focus:scale-[1.02] disabled:scale-100 disabled:opacity-70"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-[#0b0615]"></div>
      ) : (
        <>
          Reserve my table
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
