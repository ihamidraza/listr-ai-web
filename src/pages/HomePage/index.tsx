import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatAreTheBenefitsOfUsingTheListrAiToolOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const howCanBusinessesAndIndividualsUseTheListrAiToolForAiDevelopmentOptionsList =
  [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

const HomePagePage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1053px] h-[813px] md:px-5 relative w-full" style={{marginTop: 100}}>
            <div className="md:h-[1053px] h-[813px] m-auto w-full">
              <Img
                className="h-[622px] object-cover"
                src="images/img_divelementorw.png"
                alt="divelementorw"
              />
              <div className="absolute md:h-[1053px] h-[813px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[813px] m-auto object-cover w-full"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="absolute bottom-[12%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-[85%]">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[125px]">
                    <Text
                      className="leading-[60.00px] ml-1 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtPlusJakartaSansRomanSemiBold48"
                    >
                      <span className="text-white-A700 font-plusjakartasans text-left font-semibold">
                        <>
                          Explore AI Tools <br />
                          For Your
                        </>
                      </span>
                      <span className="text-green-A400 font-plusjakartasans text-left font-semibold">
                        {" "}
                        Business
                      </span>
                    </Text>
                    <Text
                      className="mt-[29px] text-sm text-white-A700"
                      size="txtPlusJakartaSansRomanRegular14"
                    >
                      Optimize your workflow with our selection of AI Tools -
                      Discover your perfect solution!
                    </Text>
                    <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between ml-1 md:ml-[0] mt-[76px] w-full">
                      <Input
                        name="group191"
                        placeholder="Search for tools…"
                        className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-900 border-solid md:flex-1 md:mt-0 my-1.5 rounded-[15px] md:w-full"
                        color="black_900_33"
                        size="lg"
                        variant="fill"
                      ></Input>
                      <div className="flex h-[70px] justify-end relative w-[14%] md:w-full">
                        <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[37px] mb-1.5 ml-auto mr-[15px] mt-auto rounded-[18px] w-[37px]"></div>
                        <div className="absolute bg-amber-500_19 border border-amber-500 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto px-5 py-[15px] rounded-[15px] w-auto">
                          <Img
                            className="h-10 w-10"
                            src="images/img_save_white_a700.svg"
                            alt="save"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[34px] mt-[33px] w-4/5 md:w-full">
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex items-center justify-center min-w-[275px] rounded-[29px]"
                        rightIcon={
                          <Img
                            className="h-6 ml-[5px]"
                            src="images/img_arrowright.svg"
                            alt="arrow_right"
                          />
                        }
                        color="amber_500_33"
                        size="xl"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">
                          Use AI Tools Mapping Feature
                        </div>
                      </Button>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex items-center justify-center min-w-[205px] rounded-[29px]"
                        rightIcon={
                          <Img
                            className="h-6 ml-[5px]"
                            src="images/img_arrowright.svg"
                            alt="arrow_right"
                          />
                        }
                        color="amber_500_33"
                        size="xl"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">
                          View All Categories
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Img
                    className="h-[481px] md:h-auto mb-[49px] object-cover w-[481px] sm:w-full"
                    src="images/img_home1.png"
                    alt="homeOne"
                  />
                </div>
              </div>
            </div>

          </div>
          <Text
            className="mt-[33px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Featured AI Tools
          </Text>
          <div className="md:gap-5 gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1213px] min-h-[auto] mt-[25px] mx-auto md:px-5 w-full">
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-3.5 w-[99%] md:w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle16.png"
                  alt="rectangleSixteen"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[31px] text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] ml-1.5 md:ml-[0] mt-[26px] rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-3.5 w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle47.png"
                  alt="rectangleFortySeven"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[17px] text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-6 rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-3.5 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle49.png"
                  alt="rectangleFortyNine"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle64.png"
                  alt="rectangleSixtyFour"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-3.5 w-[99%] md:w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle69.png"
                  alt="rectangleSixtyNine"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[31px] text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] ml-1.5 md:ml-[0] mt-[26px] rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-3.5 w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle70.png"
                  alt="rectangleSeventy"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[17px] text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-6 rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-3.5 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle71.png"
                  alt="rectangleSeventyOne"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle72.png"
                  alt="rectangleSeventyTwo"
                />
                <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                  <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Website Name
                    </Text>
                    <Text
                      className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                    >
                      Category of website
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-[17px] mr-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="outline"
                >
                  <div className="text-left text-xs">Free</div>
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                  <div className="flex h-[70px] justify-end relative w-[49%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5 right-[7%] absolute"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      }
                      shape="round"
                      color="amber_500_19"
                      variant="fill"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        Visit
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2.5"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      variant="outline"
                    >
                      <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                        287
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-start justify-start max-w-[1213px] mt-10 mx-auto p-[17px] md:px-5 rounded-[15px] w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start mb-[30px] mt-6 w-[95%] md:w-full">
              <div className="md:h-[154px] h-[163px] relative w-[14%] md:w-full">
                <div className="absolute h-[154px] inset-x-[0] mx-auto top-[0] w-[154px]">
                  <Img
                    className="h-[66px] ml-auto mr-[17px] mt-[15px] object-cover w-[66px]"
                    src="images/img_userprofilein.png"
                    alt="userprofilein"
                  />
                  <Img
                    className="absolute h-[154px] inset-[0] justify-center m-auto object-cover w-[154px]"
                    src="images/img_accepthandgesture.png"
                    alt="accepthandgestu"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] right-[20%] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtPlusJakartaSansRomanBold26"
                >
                  Login
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:mt-0 mt-4 w-[84%] md:w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-amber-500 tracking-[1.30px]"
                  size="txtPlusJakartaSansRomanSemiBold26"
                >
                  Create an account, bookmark tools and stay up to date!
                </Text>
                <Text
                  className="leading-[22.00px] mt-[15px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  Explore AI tools with Listr.ai - Your ultimate platform for
                  discovering and managing AI tools. Create an account to
                  personalize your experience, store your favorite tools, and
                  receive the latest AI updates. Harness the power of artificial
                  intelligence with ease and efficiency
                </Text>
                <div className="flex md:h-[103px] h-[58px] justify-end md:ml-[0] ml-[264px] mt-[45px] relative w-[31%]">
                  <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[7px] ml-auto mr-[116px] mt-auto rounded-[50%] w-8"></div>
                  <Button
                    className="common-pointer absolute border border-amber-500 border-solid capitalize cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[283px] text-center text-lg"
                    onClick={() => googleSignIn()}
                    shape="round"
                    color="amber_500_19"
                    size="xl"
                    variant="fill"
                  >
                    Continue With Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[71px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Explore the world of AI Tools with Listr.ai
          </Text>
          <Text
            className="leading-[25.00px] mt-3 text-blue_gray-600 text-center text-xl w-[85%] sm:w-full"
            size="txtPlusJakartaSansRomanRegular20"
          >
            <>
              At Listr, we&#39;re committed to offering an extensive collection
              of AI tools designed for businesses and individual users. Dive
              into our carefully selected array of advanced AI solutions, all
              chosen for their peak performance and effectiveness. Stay updated,
              make informed decisions, and revolutionize your operations with
              the strength of AI
            </>
          </Text>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[493px] items-center justify-start max-w-[1213px] mt-[50px] mx-auto p-2.5 md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group207.png')" }}
          >
            <div className="flex flex-col gap-3.5 items-center justify-start mb-[34px] w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[83%] md:w-full">
                <Img
                  className="h-[113px] sm:h-auto object-cover w-[14%] md:w-full"
                  src="images/img_officeworks21.png"
                  alt="officeworksTwentyOne"
                />
                <Img
                  className="h-[162px] md:h-auto md:ml-[0] ml-[272px] object-cover w-[163px] sm:w-full"
                  src="images/img_93193391.png"
                  alt="93193391"
                />
                <Img
                  className="h-[134px] sm:h-auto md:ml-[0] ml-[243px] object-cover w-[17%] md:w-full"
                  src="images/img_chatmessagebl.png"
                  alt="chatmessagebl"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPlusJakartaSansRomanBold18"
                  >
                    Comprehensive AI Directory
                  </Text>
                  <Text
                    className="leading-[22.00px] mt-3 text-center text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Dive into our expansive catalog of AI tools tailored for
                      various needs. Whether you&#39;re an individual or a
                      business, Listr.ai curates the best AI solutions, ensuring
                      optimal performance and efficiency. With user-friendly
                      interfaces and innovative features, find your ideal AI
                      tool from our handpicked selections.
                    </>
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[35px] w-[59%] md:w-full">
                    <Button
                      className="capitalize cursor-pointer font-semibold min-w-[200px] text-center text-lg"
                      shape="round"
                      color="white_A700"
                      size="xl"
                      variant="outline"
                    >
                      Explore Now
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[30%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtPlusJakartaSansRomanBold18"
                    >
                      Custom AI Solutions
                    </Text>
                    <Text
                      className="leading-[22.00px] text-center text-white-A700 text-xs w-full"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      <>
                        Unlock the true potential of your operations with
                        Listr.ai&#39;s custom AI solutions. We work closely with
                        businesses to understand their unique challenges and
                        craft AI-driven solutions tailored to their needs.
                        Streamline processes, enhance efficiency, and stay
                        competitive with our custom AI innovations.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                    <Button
                      className="capitalize cursor-pointer font-semibold min-w-[287px] text-center text-lg"
                      shape="round"
                      color="white_A700"
                      size="xl"
                      variant="outline"
                    >
                      Get a Custom Solution
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[46px] items-center justify-start w-[30%] md:w-full">
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtPlusJakartaSansRomanBold18"
                    >
                      Stay Updated with AI Trends
                    </Text>
                    <Text
                      className="leading-[22.00px] text-center text-white-A700 text-xs w-full"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      Join the Listr.ai community and never miss an AI beat!
                      Create an account to personalize your browsing experience,
                      bookmark your favorite tools, and receive regular updates
                      on the latest in AI advancements. Harness the power of
                      artificial intelligence seamlessly with Listr.ai.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                    <Button
                      className="capitalize cursor-pointer font-semibold min-w-[200px] text-center text-lg"
                      shape="round"
                      color="white_A700"
                      size="xl"
                      variant="outline"
                    >
                      Sign Up Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1213px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                size="txtPlusJakartaSansExtraBold36"
              >
                New AI Tools
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-3.5 w-[99%] md:w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle81.png"
                        alt="rectangleEightyOne"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[31px] text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] ml-1.5 md:ml-[0] mt-[26px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-3.5 w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle83.png"
                        alt="rectangleEightyThree"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[17px] text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-6 rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-3.5 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle85.png"
                        alt="rectangleEightyFive"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle87.png"
                        alt="rectangleEightySeven"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-3.5 w-[99%] md:w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle82.png"
                        alt="rectangleEightyTwo"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[31px] text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] ml-1.5 md:ml-[0] mt-[26px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-3.5 w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle84.png"
                        alt="rectangleEightyFour"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-[17px] text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-6 rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-3.5 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle86.png"
                        alt="rectangleEightySix"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[13px] w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle88.png"
                        alt="rectangleEightyEight"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[70%] md:w-full">
                        <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Website Name
                          </Text>
                          <Text
                            className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                          >
                            Category of website
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mr-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="white_A700"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-left text-xs">Free</div>
                      </Button>
                      <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
                        <div className="flex h-[70px] justify-end relative w-[49%]">
                          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
                          <Button
                            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[134px] px-[30px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5 right-[7%] absolute"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                            }
                            shape="round"
                            color="amber_500_19"
                            variant="fill"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              Visit
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[47%]">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[128px] px-[29px] py-[23px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-2.5"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="outline"
                          >
                            <div className="capitalize font-semibold sm:px-5 text-left text-lg">
                              287
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:h-[103px] h-[58px] justify-end mt-[45px] md:px-5 relative w-[18%]">
            <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[7px] ml-auto mr-[99px] mt-auto rounded-[50%] w-8"></div>
            <Button
              className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[250px] text-center text-lg"
              shape="round"
              color="amber_500_19"
              size="xl"
              variant="fill"
            >
              Browse All AI Tools
            </Button>
          </div>
          <Text
            className="mt-[82px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Benefits of Implementing AI
          </Text>
          <List
            className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1213px] mt-[71px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-14 items-center justify-end p-[23px] sm:px-5 rounded-[15px] w-full">
              <Img
                className="h-[98px] md:h-auto mt-[17px] object-cover w-[52%] sm:w-full"
                src="images/img_fpdl1.png"
                alt="fpdlOne"
              />
              <div className="flex flex-col gap-[19px] items-center justify-start mb-2.5">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Streamline Workflow
                </Text>
                <Text
                  className="leading-[22.00px] text-center text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Harness the power of AI to simplify complex workflows. AI
                  tools analyze and refine operational steps, resulting in
                  smoother, faster, and more efficient processes tailored to
                  your specific needs.
                </Text>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-9 items-center justify-end p-[23px] sm:px-5 rounded-[15px] w-full">
              <Img
                className="h-[120px] md:h-auto mt-[17px] object-cover w-[120px]"
                src="images/img_brand1.png"
                alt="brandOne"
              />
              <div className="flex flex-col gap-[17px] items-center justify-start mb-2.5">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Generate Content & Graphics
                </Text>
                <Text
                  className="leading-[22.00px] text-center text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Utilize AI-driven tools to produce high-quality content and
                    graphics. From auto-generated articles to creating visual
                    designs, AI ensures consistency, creativity, and saves time,
                    all while catering to your brand&#39;s voice and aesthetics.
                  </>
                </Text>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[49px] items-center justify-end p-[23px] sm:px-5 rounded-[15px] w-full">
              <Img
                className="h-[105px] md:h-auto mt-[17px] object-cover w-[29%] sm:w-full"
                src="images/img_m003t0641cclipboard14oct22.png"
                alt="m003t0641cclipb"
              />
              <div className="flex flex-col gap-[19px] items-center justify-start mb-2.5">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Automate Tasks
                </Text>
                <Text
                  className="leading-[22.00px] text-center text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Shift from manual to automated with AI&#39;s capabilities.
                    Delegate repetitive tasks to AI systems, ensuring accuracy
                    and freeing up valuable time. Focus more on strategic
                    planning and let AI handle the routine.
                  </>
                </Text>
              </div>
            </div>
          </List>
          <Text
            className="mt-12 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Latest Articles
          </Text>
          <Text
            className="mt-[17px] text-blue_gray-600 text-center text-xl"
            size="txtPlusJakartaSansRomanRegular20"
          >
            Section with latest published articles
          </Text>
          <List
            className="sm:flex-col flex-row gap-3.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1211px] mt-[46px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[388px] relative w-full">
              <div className="absolute bg-gradient  border border-blue_gray-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-2 rounded-[15px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle60.png"
                  alt="rectangleSixty"
                />
                <Text
                  className="mt-[3px] text-lg text-white-A700 w-[91%] sm:w-full"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  8 Ways AI Boosts Data Harvesting in Web Scraping
                </Text>
                <Text
                  className="leading-[25.00px] mb-[50px] mt-[3px] text-gray-500 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
              </div>
              <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-[38%]">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mt-0.5 text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        April 20, 2023
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-between w-[33%]">
                      <Text
                        className="text-amber-500 text-xs"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[388px] md:h-[411px] relative w-full">
              <div className="absolute bg-gradient  border border-blue_gray-900 border-solid flex flex-col gap-[23px] h-full inset-[0] items-center justify-center m-auto p-2 rounded-[15px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle74.png"
                  alt="rectangleSeventyFour"
                />
                <Text
                  className="text-lg text-white-A700 w-[96%] sm:w-full"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                  Cybersecurity
                </Text>
                <Text
                  className="leading-[25.00px] mb-[38px] text-gray-500 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
              </div>
              <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-[38%]">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mt-0.5 text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        April 20, 2023
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-between w-[33%]">
                      <Text
                        className="text-amber-500 text-xs"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[388px] relative w-full">
              <div className="absolute bg-gradient  border border-blue_gray-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-2 rounded-[15px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle74_159x275.png"
                  alt="rectangleSeventyFour"
                />
                <Text
                  className="mt-[3px] text-lg text-white-A700 w-[91%] sm:w-full"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  8 Ways AI Boosts Data Harvesting in Web Scraping
                </Text>
                <Text
                  className="leading-[25.00px] mb-[50px] mt-[3px] text-gray-500 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
              </div>
              <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-[38%]">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mt-0.5 text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        April 20, 2023
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-between w-[33%]">
                      <Text
                        className="text-amber-500 text-xs"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[388px] relative w-full">
              <div className="absolute bg-gradient  border border-blue_gray-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-2 rounded-[15px] w-full">
                <Img
                  className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                  src="images/img_rectangle74_1.png"
                  alt="rectangleSeventyFour"
                />
                <Text
                  className="mt-[3px] text-lg text-white-A700 w-[91%] sm:w-full"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  8 Ways AI Boosts Data Harvesting in Web Scraping
                </Text>
                <Text
                  className="leading-[25.00px] mb-[50px] mt-[3px] text-gray-500 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
              </div>
              <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-[38%]">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mt-0.5 text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        April 20, 2023
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-between w-[33%]">
                      <Text
                        className="text-amber-500 text-xs"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex h-[58px] md:h-[93px] justify-end mt-[35px] md:px-5 relative w-[15%]">
            <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[7px] ml-auto mr-[76px] mt-auto rounded-[50%] w-8"></div>
            <Button
              className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[203px] text-center text-lg"
              shape="round"
              color="amber_500_19"
              size="xl"
              variant="fill"
            >
              View Articles
            </Button>
          </div>
          <Text
            className="mt-[106px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            FAQ’s
          </Text>
          <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1106px] mt-[54px] mx-auto md:px-5 w-full">
            <SelectBox
              className="font-bold leading-[normal] text-left text-lg text-white-A700 w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_amber_500.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="language"
              options={languageOptionsList}
              isSearchable={false}
              placeholder="What is the  ListrAITool and how can it be used?"
            />
            <Line className="bg-blue_gray-800_02 h-px w-full" />
          </div>
          <div className="flex flex-col gap-[13px] items-center justify-start max-w-[1106px] mt-[29px] mx-auto md:px-5 w-full">
            <SelectBox
              className="font-bold leading-[normal] text-left text-lg text-white-A700 w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_amber_500.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="group480"
              options={whatAreTheBenefitsOfUsingTheListrAiToolOptionsList}
              isSearchable={false}
              placeholder="What are the benefits of using the ListrAITool?"
            />
            <Line className="bg-blue_gray-800_02 h-px w-full" />
          </div>
          <div className="flex flex-col gap-[13px] items-center justify-start max-w-[1106px] mt-[29px] mx-auto md:px-5 w-full">
            <SelectBox
              className="font-bold leading-[normal] text-left text-lg text-white-A700 w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_amber_500.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="group482"
              options={
                howCanBusinessesAndIndividualsUseTheListrAiToolForAiDevelopmentOptionsList
              }
              isSearchable={false}
              placeholder="How can businesses and individuals use the ListrAITool for AI development?"
            />
            <Line className="bg-blue_gray-800_02 h-px w-full" />
          </div>
          <div className="h-[422px] md:h-[512px] max-w-[1212px] mt-[90px] mx-auto md:px-5 relative w-full">
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
                  <Text
                    className="ml-[5px] text-blue_gray-800 text-sm"
                    size="txtPlusJakartaSansRomanMedium14"
                  >
                    Enter Your Email
                  </Text>
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
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
