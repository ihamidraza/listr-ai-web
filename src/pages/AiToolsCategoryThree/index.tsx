import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header3 from "components/Header3";

const AiToolsCategoryThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[813px] md:h-[895px] md:px-5 relative w-full">
            <div className="absolute h-[813px] md:h-[895px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[622px] object-cover"
                src="images/img_divelementorw.png"
                alt="divelementorw"
              />
              <div className="absolute h-[813px] md:h-[895px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[813px] m-auto object-cover w-full"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="absolute bottom-[5%] flex md:flex-col flex-row gap-11 inset-x-[0] items-start justify-start mx-auto w-[83%]">
                  <div className="flex flex-col gap-[59px] justify-start w-[53%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[70%] md:w-full">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        AI Tools List
                      </Text>
                      <Img
                        className="h-6 ml-2.5 sm:ml-[0] w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                      <Text
                        className="sm:ml-[0] ml-[5px] sm:mt-0 mt-0.5 text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        Copywriting
                      </Text>
                      <Img
                        className="h-6 ml-2.5 sm:ml-[0] w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright_One"
                      />
                      <Text
                        className="sm:ml-[0] ml-[5px] text-blue_gray-700 text-lg tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18Bluegray700"
                      >
                        Talk to Claude
                      </Text>
                    </div>
                    <Img
                      className="h-[335px] md:h-auto md:ml-[0] ml-[34px] object-cover rounded-[7px] w-[95%]"
                      src="images/img_rectangle16.png"
                      alt="rectangleSixteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[82px] w-[44%] md:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                      size="txtPlusJakartaSansExtraBold36"
                    >
                      Talk To Claude
                    </Text>
                    <Text
                      className="mt-2.5 text-blue_gray-700_01 text-lg tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18Bluegray70001"
                    >
                      Copywriting
                    </Text>
                    <Text
                      className="leading-[22.00px] mt-2 text-white-A700 text-xs w-full"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the
                        1500s,Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the
                        1500s,Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the
                        1500s,Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.
                      </>
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-start mt-[15px] w-[66%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[55%]">
                        <Button
                          className="border border-blue_gray-800_02 border-solid cursor-pointer flex items-center justify-center min-w-[182px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2.5"
                              src="images/img_trophy.svg"
                              alt="trophy"
                            />
                          }
                          shape="round"
                          color="blue_gray_900_33"
                          size="2xl"
                          variant="fill"
                        >
                          <div className="capitalize font-bold text-left text-lg">
                            Freemium
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start w-2/5">
                        <Button
                          className="border border-blue_gray-800_02 border-solid cursor-pointer flex items-center justify-center min-w-[133px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2.5"
                              src="images/img_settings.svg"
                              alt="settings"
                            />
                          }
                          shape="round"
                          color="blue_gray_900_33"
                          size="2xl"
                          variant="fill"
                        >
                          <div className="capitalize font-bold text-left text-lg">
                            Paid
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="mt-4 text-lg text-white-A700 tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18"
                    >
                      Starting from $15.99/ month
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start mt-[9px] w-[93%] md:w-full">
                      <div className="flex h-16 justify-end relative w-[49%] sm:w-full">
                        <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-1.5 ml-auto mr-[74px] mt-auto rounded-[50%] w-8"></div>
                        <Button
                          className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[233px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2.5 right-[4%] absolute"
                              src="images/img_globe.svg"
                              alt="globe"
                            />
                          }
                          shape="round"
                          color="amber_500_19"
                          size="2xl"
                          variant="fill"
                        >
                          <div className="capitalize font-bold text-left text-lg">
                            Visit
                          </div>
                        </Button>
                      </div>
                      <div className="flex h-16 justify-end relative w-[48%] sm:w-full">
                        <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-1.5 ml-auto mr-[71px] mt-auto rounded-[50%] w-8"></div>
                        <Button
                          className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[227px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2.5 right-[4%] absolute"
                              src="images/img_bookmark.svg"
                              alt="bookmark"
                            />
                          }
                          shape="round"
                          color="amber_500_19"
                          size="2xl"
                          variant="fill"
                        >
                          <div className="capitalize font-bold text-left text-lg">
                            287
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Header3 className="absolute bg-black-900_33 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full" />
          </div>
          <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end max-w-[1214px] mt-[15px] mx-auto p-[18px] md:px-5 rounded-[15px] w-full">
            <div className="bg-blue_gray-100 h-16 rounded-[5px] w-[19%]"></div>
            <Text
              className="ml-5 md:ml-[0] text-lg text-white-A700 tracking-[0.90px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              Maximize Your Reach: Unleashing the Potential of Promote Your Tool
            </Text>
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[50px] mr-[9px] w-1/5 md:w-full">
              <Button
                className="capitalize cursor-pointer font-semibold min-w-[228px] rounded-[7px] text-center text-lg tracking-[0.90px]"
                color="amber_500"
                size="2xl"
                variant="outline"
              >
                Copy Embed Code
              </Button>
            </div>
          </div>
          <Text
            className="leading-[22.00px] mt-[53px] text-white-A700 text-xs w-[85%] sm:w-full"
            size="txtPlusJakartaSansRomanRegular12"
          >
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s,Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </>
          </Text>
          <Text
            className="leading-[22.00px] mt-[15px] text-white-A700 text-xs w-[85%] sm:w-full"
            size="txtPlusJakartaSansRomanRegular12"
          >
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s,Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </>
          </Text>
          <Text
            className="leading-[22.00px] mt-[15px] text-white-A700 text-xs w-[85%] sm:w-full"
            size="txtPlusJakartaSansRomanRegular12"
          >
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s,Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </>
          </Text>
          <List
            className="sm:flex-col flex-row gap-[29px] grid md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] justify-center max-w-[1174px] mt-[133px] mx-auto md:px-5 py-1 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[21px] items-center justify-start w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-[9%] md:w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_user_amber_500.svg"
                  alt="user"
                />
                <Text
                  className="text-lg text-white-A700 tracking-[0.90px]"
                  size="txtPlusJakartaSansRomanSemiBold18"
                >
                  Pro
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                <Text
                  className="leading-[22.00px] text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </>
                </Text>
                <Text
                  className="leading-[22.00px] text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </>
                </Text>
              </div>
            </div>
            <Line className="self-center h-[436px] bg-blue_gray-900 w-px" />
            <div className="flex flex-1 flex-col gap-[21px] items-center justify-start w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-[9%] md:w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_settings_amber_500.svg"
                  alt="settings"
                />
                <Text
                  className="text-lg text-white-A700 tracking-[0.90px]"
                  size="txtPlusJakartaSansRomanSemiBold18"
                >
                  Cons
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                <Text
                  className="leading-[22.00px] text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </>
                </Text>
                <Text
                  className="leading-[22.00px] text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the
                    1500s,Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </>
                </Text>
              </div>
            </div>
          </List>
          <Text
            className="mt-[43px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Alternative AI Tools
          </Text>
          <List
            className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] mt-[25px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle16.png"
                  alt="rectangleSixteen"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
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
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle47.png"
                  alt="rectangleFortySeven"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
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
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free2"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle49.png"
                  alt="rectangleFortyNine"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
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
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free3"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="h-[422px] md:h-[467px] max-w-[1212px] mt-[45px] mx-auto md:px-5 relative w-full">
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
          <Footer className="flex items-center justify-center mt-[60px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AiToolsCategoryThreePage;
