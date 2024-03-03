import React from "react";

const sizeClasses = {
  txtMontserratBold16: "font-bold font-montserrat",
  txtPlusJakartaSansRomanSemiBold48: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansExtraBold18: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanBold36: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold26WhiteA700:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanRegular14Gray700: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanMedium16Bluegray400:
    "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanMedium36: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanRegular18: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold46: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanRegular20: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12Gray500: "font-normal font-plusjakartasans",
  txtPlusJakartaSansExtraBold22: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold12Gray50001:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansExtraBold26: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12Bluegray600:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansExtraBold24: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold16: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold26: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold14: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold18Bluegray400:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold18: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold12: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold22: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanBold18Gray90006: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanBold18Gray90005: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold12Bluegray900:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold18: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansExtraBold36: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14Bluegray400:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold12: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium16: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14Bluegray80001:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold26: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold14: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium18: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanRegular18Gray600: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold16: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium12: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanMedium14: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanBold18: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold64: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold20: "font-plusjakartasans font-semibold",
  txtMontserratSemiBold14: "font-montserrat font-semibold",
  txtPlusJakartaSansRomanMedium14Bluegray60003:
    "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanRegular46: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular16Bluegray70004:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold18Gray900: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanBold16WhiteA700: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium14WhiteA700: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanMedium18Bluegray400:
    "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14Bluegray60001:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanMedium18Bluegray800:
    "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold18Bluegray700:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold18Bluegray70001:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold36: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanRegular12Bluegray60003:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanMedium20: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanBold130: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanBold86: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14Bluegray70004:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold32: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanRegular12: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular16: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12Bluegray70004:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12Gray50001: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14Bluegray300:
    "font-normal font-plusjakartasans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "div";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
