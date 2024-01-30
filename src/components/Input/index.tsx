import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { round: "rounded-[10px]" } as const;
const variants = {
  fill: {
    black_900_19: "bg-black-900_19 text-gray-800",
    white_A700: "bg-white-A700 text-blue_gray-800",
    black_900_33: "bg-black-900_33 text-blue_gray-800",
  },
} as const;
const sizes = {
  xs: "p-3",
  sm: "p-[17px]",
  md: "pb-[35px] pl-[15px] pr-[18px] pt-[18px]",
  lg: "pb-[19px] pt-5 px-[19px]",
  xl: "pb-[17px] pl-[17px] pr-3 pt-[22px]",
  "2xl": "pb-[35px] pl-5 sm:pr-5 pr-[23px] pt-[23px]",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
