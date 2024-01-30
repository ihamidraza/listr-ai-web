import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-[15px]" } as const;
const variants = {
  fill: {
    black_900_19: "bg-black-900_19 text-white-A700",
    green_A400: "bg-green-A400",
    blue_gray_900_33: "bg-blue_gray-900_33 text-white-A700",
    amber_500: "bg-amber-500 text-gray-900_06",
    blue_gray_50: "bg-blue_gray-50 text-gray-900",
    amber_500_19: "bg-amber-500_19 text-white-A700",
    white_A700_19: "bg-white-A700_19 text-white-A700",
    amber_500_33: "bg-amber-500_33 text-white-A700",
    green_A400_19: "bg-green-A400_19 text-white-A700",
    black_900_33: "bg-black-900_33 text-white-A700",
    gray_800_30: "bg-gray-800_30 text-white-A700",
  },
  outline: {
    amber_500: "border border-amber-500 border-solid text-amber-500",
    blue_gray_900: "bg-gradient  border border-blue_gray-900 border-solid",
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-3.5",
  xl: "p-[17px]",
  "2xl": "p-5",
  "3xl": "px-[13px] py-[21px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
