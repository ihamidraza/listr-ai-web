import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const AitoolMapperloginPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1005px] h-[813px] md:px-5 relative w-full">
            <div className="md:h-[1005px] h-[813px] m-auto w-full">
              <Img
                className="h-[622px] object-cover"
                src="images/img_divelementorw.png"
                alt="divelementorw"
              />
              <div className="absolute md:h-[1005px] h-[813px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[813px] m-auto object-cover w-full"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[85%]">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold46"
                  >
                    <span className="text-white-A700 font-plusjakartasans text-left font-semibold">
                      Chat with our{" "}
                    </span>
                    <span className="text-green-A400 font-plusjakartasans text-left font-bold">
                      GPT
                    </span>
                    <span className="text-white-A700 font-plusjakartasans text-left font-semibold">
                      {" "}
                      to find the right AI tool for you
                    </span>
                  </Text>
                  <Text
                    className="mt-[23px] text-blue_gray-600 text-xl"
                    size="txtPlusJakartaSansRomanRegular20"
                  >
                    <>
                      Simply describe your task - e.g., &#39;I want to remove
                      noise from my podcast&#39;
                    </>
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[123px] w-full">
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-16 justify-start w-1/2 md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start md:ml-[0] ml-[11px] w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                          <Img
                            className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                            src="images/img_ellipse29.png"
                            alt="ellipseTwentyNine"
                          />
                          <Button
                            className="border border-blue_gray-900 border-solid cursor-pointer min-w-[520px] sm:min-w-full text-center text-sm"
                            shape="round"
                            color="black_900_33"
                            size="3xl"
                            variant="fill"
                          >
                            Ask me anything, or choose a suggested prompt from
                            below to get started.
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-[64%] md:w-full">
                          <Img
                            className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                            src="images/img_ellipse29.png"
                            alt="ellipseThirtyOne"
                          />
                          <Input
                            name="group278"
                            placeholder="Please login first listar.ai/login/google"
                            className="!placeholder:text-white-A700 !text-white-A700 p-0 text-left text-sm w-full"
                            wrapClassName="border border-blue_gray-900 border-solid rounded-[15px] w-[82%] sm:w-full"
                            color="black_900_33"
                            size="2xl"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[54%] md:w-full">
                        <Button
                          className="border border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[178px] rounded-[24px] text-center text-sm"
                          color="black_900_33"
                          size="xl"
                          variant="fill"
                        >
                          AI tools added today
                        </Button>
                        <Button
                          className="border border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[128px] rounded-[24px] text-center text-sm"
                          color="black_900_33"
                          size="xl"
                          variant="fill"
                        >
                          AI News
                        </Button>
                      </div>
                    </div>
                    <Button
                      className="border border-blue_gray-900 border-solid cursor-pointer mb-[186px] min-w-[246px] md:ml-[0] ml-[302px] md:mt-0 mt-[86px] text-center text-sm"
                      shape="round"
                      color="black_900_33"
                      size="2xl"
                      variant="fill"
                    >
                      Automate Social Media posting
                    </Button>
                    <Button
                      className="flex h-[50px] items-center justify-center mb-[191px] ml-2.5 md:ml-[0] md:mt-0 mt-[91px] w-[50px]"
                      shape="circle"
                      color="green_A400"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_lock_white_a700.svg"
                        alt="lock"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Header1 className="absolute bg-black-900_33 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full" />
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1199px] mt-4 mx-auto md:px-5 w-full">
            <Input
              name="groupFortyEight"
              placeholder="Send Message"
              className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
              wrapClassName="border border-blue_gray-900 border-solid md:flex-1 md:mt-0 my-1.5 rounded-[15px] w-[91%] md:w-full"
              color="black_900_33"
              size="lg"
              variant="fill"
            ></Input>
            <div className="flex h-[70px] justify-end relative w-[7%] md:w-full">
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
          <div className="flex flex-col items-center justify-start max-w-[1213px] mt-[202px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                size="txtPlusJakartaSansExtraBold36"
              >
                Featured AI Tools
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-1.5 rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-3.5 w-[99%] md:w-full">
                      <Img
                        className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
                        src="images/img_rectangle16.png"
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
                        src="images/img_rectangle47.png"
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
                        src="images/img_rectangle49.png"
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
                        src="images/img_rectangle64.png"
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
                        src="images/img_rectangle69.png"
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
                        src="images/img_rectangle70.png"
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
                        src="images/img_rectangle71.png"
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
                        src="images/img_rectangle72.png"
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
          <div className="h-[422px] md:h-[564px] max-w-[1212px] mt-[142px] mx-auto md:px-5 relative w-full">
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
                alt="image_Two"
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
          <Footer className="flex items-center justify-center mt-[116px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AitoolMapperloginPage;
