import React from "react";

import { Button, Img, Input, SubscribeForm, Text } from "components";

const RegisterPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto pb-[486px] w-full">
        <div
          className="h-[813px] md:px-5 relative w-full"
          style={{ marginTop: 100 }}
        >
          <div className="absolute h-[813px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[622px] object-cover"
              src="images/img_divelementorw.png"
              alt="divelementorw"
            />
            <div className="absolute h-[813px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[813px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[74%]">
                <Text
                  className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Profile Information
                </Text>
                <Text
                  className="mt-3.5 text-center text-sm text-white-A700"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  <>
                    Update your account&#39;s profile information and email
                    address.
                  </>
                </Text>
                <div className="flex flex-col items-start justify-start mt-9 w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanSemiBold16"
                    >
                      Name
                    </Text>
                    <Input
                      name="group319"
                      placeholder="Your name"
                      className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-900 border-solid w-full"
                      type="text"
                      shape="round"
                      color="black_900_33"
                      size="lg"
                      variant="fill"
                    ></Input>
                  </div>
                  <Text
                    className="mt-[21px] text-base text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold16"
                  >
                    Email
                  </Text>
                  <Input
                    name="groupFortyTwo"
                    placeholder="Your email"
                    className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900 border-solid mt-[9px] w-full"
                    type="email"
                    shape="round"
                    color="black_900_33"
                    size="lg"
                    variant="fill"
                  ></Input>
                  <div className="flex h-[58px] md:h-[88px] justify-end ml-1.5 md:ml-[0] mt-[30px] relative w-[99%] md:w-full">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[5px] ml-auto mr-[467px] mt-auto rounded-[25px] w-[5%]"></div>
                    <Button
                      className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[1043px] md:min-w-full text-center text-lg"
                      shape="round"
                      color="amber_500_19"
                      size="xl"
                      variant="fill"
                    >
                      Save
                    </Button>
                  </div>
                  <Text
                    className="capitalize md:ml-[0] ml-[359px] mt-[69px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                    size="txtPlusJakartaSansExtraBold36"
                  >
                    Update Password
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[301px] mt-[11px] text-center text-sm text-white-A700"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    Ensure your account is using a long, random password to stay
                    secure.
                  </Text>
                  <Text
                    className="mt-9 ml-20 text-base text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold16"
                  >
                    Current Password
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1054px] mx-auto md:px-5 w-full">
          <Input
            name="language"
            placeholder="Current password "
            className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
            wrapClassName="border border-blue_gray-900 border-solid w-full"
            type="password"
            shape="round"
            color="black_900_33"
            size="lg"
            variant="fill"
          ></Input>
          <Text
            className="mt-[21px] text-base text-white-A700"
            size="txtPlusJakartaSansRomanSemiBold16"
          >
            New Password
          </Text>
          <Input
            name="language_One"
            placeholder="New  password "
            className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
            wrapClassName="border border-blue_gray-900 border-solid mt-[9px] w-full"
            type="password"
            shape="round"
            color="black_900_33"
            size="lg"
            variant="fill"
          ></Input>
          <Text
            className="mt-[21px] text-base text-white-A700"
            size="txtPlusJakartaSansRomanSemiBold16"
          >
            Confirm Password
          </Text>
          <Input
            name="language_Three"
            placeholder="Confirm your password "
            className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
            wrapClassName="border border-blue_gray-900 border-solid mt-[9px] w-full"
            type="password"
            shape="round"
            color="black_900_33"
            size="lg"
            variant="fill"
          ></Input>
          <div className="flex h-[58px] md:h-[88px] justify-end ml-1.5 md:ml-[0] mt-[30px] relative w-[99%] md:w-full">
            <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[5px] ml-auto mr-[467px] mt-auto rounded-[25px] w-[5%]"></div>
            <Button
              className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[1043px] md:min-w-full text-center text-lg"
              shape="round"
              color="amber_500_19"
              size="xl"
              variant="fill"
            >
              Save
            </Button>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </>
  );
};

export default RegisterPagePage;
