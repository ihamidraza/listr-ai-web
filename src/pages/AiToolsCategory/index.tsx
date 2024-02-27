import React from "react";

import { Button, Img, Input, SubscribeForm, Text } from "components";

const AiToolsCategoryPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full" style={{ marginTop: 100 }}>
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
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default AiToolsCategoryPage;
