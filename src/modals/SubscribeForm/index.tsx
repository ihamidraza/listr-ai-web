import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Input, Text } from "components";

const SubscribeFormModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[48%]"
      overlayClassName="bg-black-900_7f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-blue_gray-900_4c border border-blue_gray-900 border-solid flex flex-col items-center justify-start mb-[555px] p-[38px] md:px-5 rounded-[30px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
            size="txtPlusJakartaSansRomanSemiBold32"
          >
            Listar Ai Tools
          </Text>
          <Text
            className="leading-[50.00px] mt-[42px] sm:text-4xl md:text-[42px] text-[46px] text-center text-white-A700"
            size="txtPlusJakartaSansRomanSemiBold46"
          >
            <>
              Join 30,000+ subscribers <br />
              and get our 3 min daily
              <br />
              newsletter on AI.
            </>
          </Text>
          <Text
            className="mt-[46px] text-lg text-white-A700"
            size="txtPlusJakartaSansRomanRegular18"
          >
            Subscribe ti get it daily in your inbox
          </Text>
          <div className="flex flex-col gap-7 items-center justify-start my-9 w-[86%] md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Input
                name="group332"
                placeholder="Enter Your Full Name"
                className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-900 border-solid rounded-[15px] w-full"
                type="text"
                color="black_900_33"
                size="xl"
                variant="fill"
              ></Input>
              <Input
                name="group333"
                placeholder="Your Email Address"
                className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-900 border-solid rounded-[15px] w-full"
                type="email"
                color="black_900_33"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex h-[58px] justify-end relative w-[98%] sm:w-full">
              <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[5px] ml-auto mr-[200px] mt-auto rounded-[25px] w-[11%]"></div>
              <Button
                className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[509px] sm:min-w-full text-center text-lg"
                shape="round"
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
    </ModalProvider>
  );
};

export default SubscribeFormModal;
