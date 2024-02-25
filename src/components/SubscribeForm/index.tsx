import React from "react";
// import { default as ModalProvider } from "react-modal";

import { Button, Input, Text, Img } from "components";

export const SubscribeForm = () => {
  return (
    <div className="h-[422px] md:h-[512px] max-w-[1212px] mt-[90px] mx-auto md:px-5 relative w-full"
    style={{ marginBottom: 20 }}
    >
      <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col h-full items-center justify-start m-auto pt-0.5 rounded-[15px] w-full">
        <Img
          className="h-[420px] md:h-auto object-cover rounded-tl-[15px] rounded-tr-[15px]"
          src="images/img_maskgroup.png"
          alt="maskgroup"
        />
      </div>
      <div className="absolute h-[422px] inset-[0] justify-center m-auto w-full">
        <Img
          className="h-[422px] m-auto object-cover w-full"
          src="images/img_image_422x1212.png"
          alt="image_Four"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[82px] h-max inset-[0] items-center justify-center m-auto w-[84%]">
          <Text
            className="leading-[60.00px] sm:text-4xl md:text-[42px] text-[46px] text-center text-white-A700 w-[85%] sm:w-full"
            size="txtPlusJakartaSansRomanSemiBold46"
          >
            Join 30,000+ subscribers and get our 3 min daily newsletter on
            AI.
          </Text>
          <div className="bg-black-900_0c border border-blue_gray-900 border-solid flex flex-row sm:gap-10 items-center justify-between p-4 rounded-[15px] w-full">
            <Input
              className="ml-[5px] text-blue_gray-800 text-sm"
              // size="txtPlusJakartaSansRomanMedium14"
              placeholder=" Enter Your Email"
            >

            </Input>
            <div className="flex h-[58px] justify-end mr-2.5 relative w-[17%]">
              <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[39px] mt-auto rounded-[50%] w-8"></div>
              <Button
                className="absolute border border-amber-500 border-solid cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[163px] rounded-[7px] text-center text-lg uppercase"
                color="amber_500_19"
                size="xl"
                variant="fill"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
