import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const AiToolsCategoryPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="sm:h-[1686px] h-[840px] md:h-[938px] md:px-5 relative w-full">
            <div className="absolute sm:h-[1686px] h-[810px] md:h-[938px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[620px] object-cover"
                src="images/img_divelementorw.png"
                alt="divelementorw"
              />
              <div className="absolute sm:h-[1686px] h-[810px] md:h-[938px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[810px] m-auto object-cover w-full"
                  src="images/img_image_810x1434.png"
                  alt="image"
                />
                <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[83%]">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                    size="txtPlusJakartaSansExtraBold36"
                  >
                    AI Tools Categories
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-1.5 text-blue_gray-600 text-center text-xl w-[82%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular20"
                  >
                    Streamline your search and find the best AI solutions to
                    enhance your operations, improve customer experiences, and
                    drive growth.
                  </Text>
                  <Text
                    className="mt-[54px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
                    size="txtPlusJakartaSansExtraBold26"
                  >
                    Text
                  </Text>
                  <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[21px] w-full">
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3 items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-[5px] mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-[5px]">
                        <Text
                          className="text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          Copywriting
                        </Text>
                        <Text
                          className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                          size="txtPlusJakartaSansRomanRegular12Bluegray600"
                        >
                          Compelling Content Made Easy - Top AI Copywriting
                          Tools
                        </Text>
                        <Text
                          className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          (104+)
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-2.5 items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-1.5 mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-1.5">
                        <Text
                          className="text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          Email Assistant
                        </Text>
                        <Text
                          className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                          size="txtPlusJakartaSansRomanRegular12Bluegray600"
                        >
                          Manage Your Inbox Like a Pro - Top AI Email Assistant
                          Tools
                        </Text>
                        <Text
                          className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          (34+)
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3 items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-[7px] mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-2">
                        <Text
                          className="text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          General Writing
                        </Text>
                        <Text
                          className="mt-[7px] text-blue_gray-600 text-center text-xs"
                          size="txtPlusJakartaSansRomanRegular12Bluegray600"
                        >
                          Write Better Content - Top AI Writing Tools
                        </Text>
                        <Text
                          className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          (26+)
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3 items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-2 mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-[5px]">
                        <Text
                          className="text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          Paraphrase
                        </Text>
                        <Text
                          className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                          size="txtPlusJakartaSansRomanRegular12Bluegray600"
                        >
                          Quick and Easy Rewriting - Top AI Paraphrase Tools
                        </Text>
                        <Text
                          className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          (17+)
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[13px] items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-1.5 mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-[5px]">
                        <Text
                          className="text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          Prompts
                        </Text>
                        <Text
                          className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                          size="txtPlusJakartaSansRomanRegular12Bluegray600"
                        >
                          Boost Your Creativity - Top AI Prompts Tools
                        </Text>
                        <Text
                          className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          (104+)
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[11px] items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-1.5 mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-1.5">
                        <Text
                          className="text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          SEO
                        </Text>
                        <Text
                          className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                          size="txtPlusJakartaSansRomanRegular12Bluegray600"
                        >
                          Rank Higher in Search Results - Top AI SEO Tools
                        </Text>
                        <Text
                          className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          (104+)
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-[7px] mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-[9px] w-[93%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-center text-white-A700 text-xl tracking-[1.00px]"
                            size="txtPlusJakartaSansRomanSemiBold20"
                          >
                            Social Media Assistant
                          </Text>
                          <Text
                            className="mt-[9px] text-blue_gray-600 text-center text-xs"
                            size="txtPlusJakartaSansRomanRegular12Bluegray600"
                          >
                            Write Better Content - Top AI Writing Tools
                          </Text>
                          <Text
                            className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                            size="txtPlusJakartaSansRomanSemiBold20"
                          >
                            (104+)
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[13px] items-end justify-end p-[13px] rounded-[15px] w-full">
                      <Img
                        className="h-[23px] mr-2 mt-1.5 w-[23px]"
                        src="images/img_arrowleft_white_a700_23x23.svg"
                        alt="arrowleft"
                      />
                      <div className="flex flex-col items-center justify-start mr-[5px]">
                        <Text
                          className="text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          Story Teller
                        </Text>
                        <Text
                          className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                          size="txtPlusJakartaSansRomanRegular12Bluegray600"
                        >
                          Craft Engaging Narratives - Top AI Storyteller Tools
                        </Text>
                        <Text
                          className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                          size="txtPlusJakartaSansRomanSemiBold20"
                        >
                          (104+)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px] w-max"
              size="txtPlusJakartaSansExtraBold26"
            >
              Image
            </Text>
            {/* <header className="absolute bg-black-900_33 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full">
              <Text
                className="md:ml-[0] ml-[111px] md:mt-0 my-[42px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                size="txtPlusJakartaSansExtraBold26"
              >
                Listr.ai
              </Text>
              <Text
                className="md:ml-[0] ml-[101px] md:mt-0 my-12 text-base text-white-A700"
                size="txtPlusJakartaSansRomanRegular16"
              >
                Home
              </Text>
              <div className="flex md:flex-1 flex-col gap-1.5 items-center justify-start mb-9 md:ml-[0] ml-[30px] md:mt-0 mt-[51px] w-[10%] md:w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPlusJakartaSansRomanRegular16"
                >
                  Ai Tools Category
                </Text>
                <Line className="bg-amber-500 h-1 rounded-sm w-full" />
              </div>
              <Text
                className="mb-[46px] md:ml-[0] ml-[30px] md:mt-0 mt-[51px] text-base text-white-A700"
                size="txtPlusJakartaSansRomanRegular16"
              >
                Ai Tools Mapper
              </Text>
              <Text
                className="md:ml-[0] ml-[30px] md:mt-0 my-12 text-base text-white-A700"
                size="txtPlusJakartaSansRomanRegular16"
              >
                Custom AI Solutions
              </Text>
              <Text
                className="md:ml-[0] ml-[30px] md:mt-0 my-12 text-base text-white-A700"
                size="txtPlusJakartaSansRomanRegular16"
              >
                Articles
              </Text>
              <div className="flex h-16 md:h-[91px] justify-end ml-9 md:ml-[0] md:mt-0 my-[27px] relative w-[11%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-1.5 ml-auto mr-[33px] mt-auto rounded-[50%] w-8"></div>
                <Button
                  className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[152px]"
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-2.5 bottom-[2%] right-[7%] absolute"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  }
                  shape="round"
                  color="amber_500_19"
                  size="xl"
                  variant="fill"
                >
                  <div className="capitalize font-bold text-left text-lg">
                    Sign in
                  </div>
                </Button>
              </div>
              <div className="flex h-16 md:h-[91px] justify-end ml-5 md:ml-[0] mr-[109px] md:mt-0 my-[27px] relative w-[14%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-green-A400 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[54px] mt-auto rounded-[17px] w-[17%]"></div>
                <Button
                  className="absolute border border-green-A400 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[193px] text-center text-lg"
                  shape="round"
                  color="green_A400_19"
                  size="2xl"
                  variant="fill"
                >
                  Submit Ai tools
                </Button>
              </div>
            </header> */}
          </div>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center max-w-[1188px] min-h-[auto] mt-[17px] mx-auto md:px-5 w-full">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] justify-end p-3 rounded-[15px] w-full">
              <Img
                className="h-[23px] md:ml-[0] ml-[226px] mr-1.5 mt-[7px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mx-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Art
                </Text>
                <Text
                  className="mt-[9px] text-blue_gray-600 text-center text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Creativity - Top AI Art Tools
                </Text>
                <Text
                  className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[11px] items-end justify-end p-3 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[7px] mt-[7px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[7px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Avatars
                </Text>
                <Text
                  className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Customizable Avatars - Top AI Avatar Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3.5 items-end justify-end p-3 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2 mt-[7px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-1.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Design Assistant
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Streamline Your Creative Workflow - Top AI Design Assistant
                  Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[13px] items-end justify-end p-3 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[9px] mt-[7px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-1.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Editing
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Visuals - Top AI Image Editing Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3.5 items-end justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[7px] mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[7px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Logo Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Professional Logos - Top AI Logo Generator Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3.5 items-end justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2 mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Top Image Generator AI Tools - Create Stunning Images!
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3 items-end justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2 mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2.5 w-[92%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Social Media Assistant
                  </Text>
                  <Text
                    className="mt-[9px] text-blue_gray-600 text-center text-xs"
                    size="txtPlusJakartaSansRomanRegular12Bluegray600"
                  >
                    Write Better Content - Top AI Writing Tools
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    (104+)
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3.5 items-end justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[9px] mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[7px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Story Teller
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Craft Engaging Narratives - Top AI Storyteller Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[57px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
            size="txtPlusJakartaSansExtraBold26"
          >
            Code
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center max-w-[1188px] min-h-[auto] mt-[18px] mx-auto md:px-5 w-full">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] md:ml-[0] ml-[227px] mr-[7px] mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mx-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Art
                </Text>
                <Text
                  className="mt-[9px] text-blue_gray-600 text-center text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Creativity - Top AI Art Tools
                </Text>
                <Text
                  className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[13px] items-end justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2 mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Avatars
                </Text>
                <Text
                  className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Customizable Avatars - Top AI Avatar Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[15px] items-end justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[9px] mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[7px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Design Assistant
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Streamline Your Creative Workflow - Top AI Design Assistant
                  Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[15px] items-end justify-end p-[11px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2.5 mt-2 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[7px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Editing
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Visuals - Top AI Image Editing Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[15px] items-end justify-end p-2.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2 mt-[9px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Logo Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Professional Logos - Top AI Logo Generator Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[15px] items-end justify-end p-2.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[9px] mt-[9px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[9px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Top Image Generator AI Tools - Create Stunning Images!
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[13px] items-end justify-end p-2.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2.5 mt-[9px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[11px] w-[91%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Social Media Assistant
                  </Text>
                  <Text
                    className="mt-[9px] text-blue_gray-600 text-center text-xs"
                    size="txtPlusJakartaSansRomanRegular12Bluegray600"
                  >
                    Write Better Content - Top AI Writing Tools
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    (104+)
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[15px] items-end justify-end p-2.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2.5 mt-[9px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Story Teller
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Craft Engaging Narratives - Top AI Storyteller Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[59px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
            size="txtPlusJakartaSansExtraBold26"
          >
            Audio
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center max-w-[1188px] min-h-[auto] mt-[17px] mx-auto md:px-5 w-full">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[22px] justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] md:ml-[0] ml-[229px] mr-[9px] mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mx-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Art
                </Text>
                <Text
                  className="mt-[9px] text-blue_gray-600 text-center text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Creativity - Top AI Art Tools
                </Text>
                <Text
                  className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3.5 items-end justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2.5 mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Avatars
                </Text>
                <Text
                  className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Customizable Avatars - Top AI Avatar Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-4 items-end justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2.5 mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[9px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Design Assistant
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Streamline Your Creative Workflow - Top AI Design Assistant
                  Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-4 items-end justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[11px] mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[9px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Editing
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Visuals - Top AI Image Editing Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-4 items-end justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[9px] mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[9px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Logo Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Professional Logos - Top AI Logo Generator Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-4 items-end justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2.5 mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Top Image Generator AI Tools - Create Stunning Images!
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3.5 items-end justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[11px] mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3 w-[90%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Social Media Assistant
                  </Text>
                  <Text
                    className="mt-[9px] text-blue_gray-600 text-center text-xs"
                    size="txtPlusJakartaSansRomanRegular12Bluegray600"
                  >
                    Write Better Content - Top AI Writing Tools
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    (104+)
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-4 items-end justify-end p-[9px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3 mt-2.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[9px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Story Teller
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Craft Engaging Narratives - Top AI Storyteller Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[60px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
            size="txtPlusJakartaSansExtraBold26"
          >
            Video
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center max-w-[1188px] min-h-[auto] mt-4 mx-auto md:px-5 w-full">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[23px] justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] md:ml-[0] ml-[230px] mr-2.5 mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mx-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Art
                </Text>
                <Text
                  className="mt-[9px] text-blue_gray-600 text-center text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Creativity - Top AI Art Tools
                </Text>
                <Text
                  className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[15px] items-end justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[11px] mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[11px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Avatars
                </Text>
                <Text
                  className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Customizable Avatars - Top AI Avatar Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[17px] items-end justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3 mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Design Assistant
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Streamline Your Creative Workflow - Top AI Design Assistant
                  Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[17px] items-end justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3 mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Editing
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Visuals - Top AI Image Editing Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[18px] items-end justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-2.5 mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Logo Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Professional Logos - Top AI Logo Generator Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[18px] items-end justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[11px] mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[11px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Top Image Generator AI Tools - Create Stunning Images!
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[15px] items-end justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3 mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3.5 w-[90%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Social Media Assistant
                  </Text>
                  <Text
                    className="mt-[9px] text-blue_gray-600 text-center text-xs"
                    size="txtPlusJakartaSansRomanRegular12Bluegray600"
                  >
                    Write Better Content - Top AI Writing Tools
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    (104+)
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[18px] items-end justify-end p-2 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[13px] mt-[11px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-2.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Story Teller
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Craft Engaging Narratives - Top AI Storyteller Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[61px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
            size="txtPlusJakartaSansExtraBold26"
          >
            3D
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center max-w-[1188px] min-h-[auto] mt-3.5 mx-auto md:px-5 w-full">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-6 justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] md:ml-[0] ml-[231px] mr-[11px] mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mx-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Art
                </Text>
                <Text
                  className="mt-[9px] text-blue_gray-600 text-center text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Creativity - Top AI Art Tools
                </Text>
                <Text
                  className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-4 items-end justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3 mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Avatars
                </Text>
                <Text
                  className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Customizable Avatars - Top AI Avatar Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[18px] items-end justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[13px] mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[11px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Design Assistant
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Streamline Your Creative Workflow - Top AI Design Assistant
                  Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[18px] items-end justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3.5 mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[11px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Editing
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Visuals - Top AI Image Editing Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] items-end justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3 mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[11px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Logo Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Professional Logos - Top AI Logo Generator Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] items-end justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3 mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Top Image Generator AI Tools - Create Stunning Images!
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[17px] items-end justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[13px] mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[15px] w-[89%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Social Media Assistant
                  </Text>
                  <Text
                    className="mt-[9px] text-blue_gray-600 text-center text-xs"
                    size="txtPlusJakartaSansRomanRegular12Bluegray600"
                  >
                    Write Better Content - Top AI Writing Tools
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    (104+)
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] items-end justify-end p-[7px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3.5 mt-3 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[11px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Story Teller
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Craft Engaging Narratives - Top AI Storyteller Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[62px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
            size="txtPlusJakartaSansExtraBold26"
          >
            Business
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center max-w-[1188px] min-h-[auto] mt-[13px] mx-auto md:px-5 w-full">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[25px] justify-end p-1.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] md:ml-[0] ml-[232px] mr-3 mt-[13px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mx-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Art
                </Text>
                <Text
                  className="mt-[9px] text-blue_gray-600 text-center text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Creativity - Top AI Art Tools
                </Text>
                <Text
                  className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[17px] items-end justify-end p-1.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[13px] mt-[13px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[13px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Avatars
                </Text>
                <Text
                  className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Customizable Avatars - Top AI Avatar Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-5 items-end justify-end p-1.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3.5 mt-[13px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Design Assistant
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Streamline Your Creative Workflow - Top AI Design Assistant
                  Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] items-end justify-end p-1.5 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[15px] mt-[13px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Editing
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Visuals - Top AI Image Editing Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-5 items-end justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[13px] mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[13px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Logo Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Professional Logos - Top AI Logo Generator Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-5 items-end justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3.5 mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Top Image Generator AI Tools - Create Stunning Images!
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[18px] items-end justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3.5 mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-4 w-[88%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Social Media Assistant
                  </Text>
                  <Text
                    className="mt-[9px] text-blue_gray-600 text-center text-xs"
                    size="txtPlusJakartaSansRomanRegular12Bluegray600"
                  >
                    Write Better Content - Top AI Writing Tools
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    (104+)
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-5 items-end justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[15px] mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[13px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Story Teller
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Craft Engaging Narratives - Top AI Storyteller Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[63px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
            size="txtPlusJakartaSansExtraBold26"
          >
            Others
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center max-w-[1188px] min-h-[auto] mt-3 mx-auto md:px-5 w-full">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[27px] justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] md:ml-[0] ml-[233px] mr-3.5 mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mx-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Art
                </Text>
                <Text
                  className="mt-[9px] text-blue_gray-600 text-center text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Creativity - Top AI Art Tools
                </Text>
                <Text
                  className="mt-[17px] text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] items-end justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3.5 mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Avatars
                </Text>
                <Text
                  className="leading-[15.00px] mt-2 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Customizable Avatars - Top AI Avatar Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-end justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[15px] mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[13px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Design Assistant
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Streamline Your Creative Workflow - Top AI Design Assistant
                  Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-end justify-end p-[5px] rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-4 mt-3.5 w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[13px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Editing
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Enhance Your Visuals - Top AI Image Editing Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-end justify-end p-1 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-3.5 mt-[15px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Logo Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Create Professional Logos - Top AI Logo Generator Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-end justify-end p-1 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[15px] mt-[15px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[15px]">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Image Generator
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Top Image Generator AI Tools - Create Stunning Images!
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[19px] items-end justify-end p-1 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-4 mt-[15px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-[17px] w-[87%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    Social Media Assistant
                  </Text>
                  <Text
                    className="mt-[9px] text-blue_gray-600 text-center text-xs"
                    size="txtPlusJakartaSansRomanRegular12Bluegray600"
                  >
                    Write Better Content - Top AI Writing Tools
                  </Text>
                  <Text
                    className="mt-[25px] text-white-A700 text-xl tracking-[1.00px]"
                    size="txtPlusJakartaSansRomanSemiBold20"
                  >
                    (104+)
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-end justify-end p-1 rounded-[15px] w-full">
              <Img
                className="h-[23px] mr-[17px] mt-[15px] w-[23px]"
                src="images/img_arrowleft_white_a700_23x23.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start mr-3.5">
                <Text
                  className="text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  Story Teller
                </Text>
                <Text
                  className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Bluegray600"
                >
                  Craft Engaging Narratives - Top AI Storyteller Tools
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
                  size="txtPlusJakartaSansRomanSemiBold20"
                >
                  (104+)
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[422px] md:h-[522px] max-w-[1212px] mt-[100px] mx-auto md:px-5 relative w-full">
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
                alt="image_Three"
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
          <footer className="flex items-center justify-center mt-[90px] md:px-5 w-full">
            <div className="bg-black-900 flex flex-col items-center justify-center pt-[43px] md:px-10 sm:px-5 px-[43px] w-full">
              <div className="flex flex-col gap-[47px] items-center justify-center w-[90%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start w-[21%] md:w-full">
                    <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                        size="txtPlusJakartaSansExtraBold26"
                      >
                        Listr.ai
                      </Text>
                      <Text
                        className="leading-[25.00px] text-gray-500 text-xs w-full"
                        size="txtPlusJakartaSansRomanRegular12Gray500"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,{" "}
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start w-[69%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                        size="txtPlusJakartaSansExtraBold26"
                      >
                        Follow Us
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <div className="flex flex-col h-8 items-end justify-start p-1 w-8">
                          <Img
                            className="h-6 mr-[5px]"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                        </div>
                        <div className="flex flex-col h-8 items-center justify-end p-[3px] w-8">
                          <Img
                            className="h-6 w-6"
                            src="images/img_link.svg"
                            alt="link"
                          />
                        </div>
                        <div className="flex flex-col h-8 items-center justify-start p-0.5 w-8">
                          <Img
                            className="h-[21px] my-0.5"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                        </div>
                        <Img
                          className="h-8 w-8"
                          src="images/img_info.svg"
                          alt="info"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[44%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-[53px] items-end justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-6 items-center justify-start w-[29%] sm:w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                          size="txtPlusJakartaSansExtraBold26"
                        >
                          Useful Links
                        </Text>
                        <ul className="flex flex-col gap-5 items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-white-A700"
                            >
                              <Text size="txtPlusJakartaSansRomanMedium16">
                                Home
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-white-A700"
                            >
                              <Text size="txtPlusJakartaSansRomanMedium16">
                                AI Tool Mapper
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-white-A700"
                            >
                              <Text size="txtPlusJakartaSansRomanMedium16">
                                Ai Tools Category
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-white-A700"
                            >
                              <Text size="txtPlusJakartaSansRomanMedium16">
                                Custom AI Solutions
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <ul className="flex md:flex-1 flex-col items-start justify-start sm:mt-0 mt-[57px] w-[61%] md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-start justify-between">
                              <Text
                                className="text-base text-white-A700"
                                size="txtPlusJakartaSansRomanMedium16"
                              >
                                About Us
                              </Text>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtPlusJakartaSansRomanMedium16">
                                  Sign In / Register
                                </Text>
                              </a>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-center justify-between mt-[17px]">
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtPlusJakartaSansRomanMedium16">
                                  Contact Us
                                </Text>
                              </a>
                              <Text
                                className="text-base text-white-A700"
                                size="txtPlusJakartaSansRomanMedium16"
                              >
                                Submit AI Tool
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-center justify-between mt-5">
                              <Text
                                className="text-base text-white-A700"
                                size="txtPlusJakartaSansRomanMedium16"
                              >
                                Sitemap
                              </Text>
                              <Text
                                className="text-base text-white-A700"
                                size="txtPlusJakartaSansRomanMedium16"
                              >
                                Blog
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-center justify-between mt-[17px]">
                              <Text
                                className="text-base text-white-A700"
                                size="txtPlusJakartaSansRomanMedium16"
                              >
                                Terms & Condition
                              </Text>
                              <Text
                                className="text-base text-white-A700"
                                size="txtPlusJakartaSansRomanMedium16"
                              >
                                Advertise With Us
                              </Text>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[32%] md:w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtPlusJakartaSansExtraBold26"
                    >
                      Subscribe
                    </Text>
                    <Text
                      className="leading-[25.00px] mt-[22px] text-gray-500 text-xs w-[99%] sm:w-full"
                      size="txtPlusJakartaSansRomanRegular12Gray500"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,{" "}
                      </>
                    </Text>
                    <Input
                      name="group169"
                      placeholder="Email Address"
                      className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-xs w-full"
                      wrapClassName="border border-blue_gray-900 border-solid flex mt-[37px] rounded-[28px] w-full"
                      type="email"
                      suffix={
                        <Img
                          className="h-8 ml-[35px] my-auto"
                          src="images/img_save.svg"
                          alt="save"
                        />
                      }
                      color="black_900_33"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Text
                  className="bg-gray-900 h-[50px] justify-center max-w-[1213px] md:max-w-full pb-[15px] pt-[18px] sm:px-5 px-[35px] text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <span className="text-white-A700 font-plusjakartasans text-left font-normal">
                    Copyright © All Rights Reserved bylistraitools
                  </span>
                  <span className="text-white-A700 font-plusjakartasans text-left font-normal">
                    .com
                  </span>
                  <span className="text-white-A700 font-plusjakartasans text-left font-normal">
                    {" "}
                    Team.
                  </span>
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AiToolsCategoryPage;
