"use client";

import { InputProps } from "@/shared/@types/inputInterface";

const Input = ({
  id,
  label,
  errors,
  register,
  type = "text",
  required,
  disabled,
}: InputProps) => {
  return (
    <div className="flex justify-center gap-y-2 flex-col">
      <label className="text-sm font-semibold">{label}</label>
      <input
        id={id}
        disabled={disabled}
        type={type}
        {...register(id, { required })}
        className="px-2 py-2 rounded-2xl border-2 border-neutral-300 focus:outline-none focus:border-primary-500 w-auto"
      />
      <p>{errors?.message}</p>
    </div>
  );
};

export default Input;
