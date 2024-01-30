import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const chooseCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const defaultOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const allOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomePageOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex flex-col gap-4 items-center justify-start mb-[41px] w-full">
          <div className="h-[813px] sm:h-[828px] md:h-[846px] md:px-5 relative w-full">
            <Img
              className="h-[622px] object-cover"
              src="images/img_divelementorw.png"
              alt="divelementorw"
            />
            <div className="absolute h-[813px] sm:h-[828px] md:h-[846px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[813px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[85%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtPlusJakartaSansExtraBold26"
                  >
                    Website Logo
                  </Text>
                  <a
                    href="javascript:"
                    className="md:ml-[0] ml-[802px] md:mt-0 mt-[23px] text-lg text-white-A700"
                  >
                    <Text size="txtPlusJakartaSansRomanMedium18">Login</Text>
                  </a>
                  <div className="flex h-[58px] justify-end md:ml-[0] ml-[58px] md:mt-0 mt-2.5 relative w-[11%] md:w-full">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[22px] mt-auto rounded-[50%] w-8"></div>
                    <Button
                      className="absolute border border-amber-500 border-solid cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[129px] text-center text-lg uppercase"
                      shape="round"
                      color="amber_500_19"
                      size="xl"
                      variant="fill"
                    >
                      SIGNUP
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-center justify-end mt-[3px] mx-auto p-[26px] sm:px-5 rounded-[15px] w-[42%] md:w-full">
                  <div className="flex flex-row items-center justify-between mt-0.5 w-[89%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanRegular16"
                    >
                      Favorites
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanRegular16"
                    >
                      Newsletter
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanRegular16"
                    >
                      News
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanRegular16"
                    >
                      Submit
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[82px] mt-[52px] sm:text-4xl md:text-[42px] text-[46px] text-white-A700"
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
                  className="md:ml-[0] ml-[263px] mt-[23px] text-blue_gray-600 text-xl"
                  size="txtPlusJakartaSansRomanRegular20"
                >
                  <>
                    Simply describe your task - e.g., &#39;I want to remove
                    noise from my podcast&#39;
                  </>
                </Text>
                <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[19px] mt-[314px] w-[49%] md:w-full">
                  <div className="bg-blue-A200_99 flex flex-col h-[50px] items-center justify-start sm:mt-0 my-[5px] rounded-[50%] w-[50px]">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse2.png"
                      alt="ellipseTwo"
                    />
                  </div>
                  <Button
                    className="border border-blue_gray-900 border-solid cursor-pointer min-w-[520px] sm:min-w-full text-center text-sm"
                    shape="round"
                    color="black_900_33"
                    size="3xl"
                    variant="fill"
                  >
                    Ask me anything, or choose a suggested prompt from below to
                    get started.
                  </Button>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[33px] w-[27%] md:w-full">
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
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1217px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between ml-1 md:ml-[0] w-[99%] md:w-full">
              <Input
                name="group338"
                placeholder="Send Message"
                className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-900 border-solid md:mt-0 my-1.5 rounded-[15px] md:w-full"
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
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[3px] mt-[114px] w-full">
              <div className="border border-blue_gray-900 border-solid flex md:flex-1 flex-col items-start justify-start p-[15px] rounded-[15px] w-[32%] md:w-full">
                <Text
                  className="mt-[11px] text-sm text-white-A700"
                  size="txtPlusJakartaSansRomanSemiBold14"
                >
                  Categories
                </Text>
                <SelectBox
                  className="border border-blue_gray-900 border-solid font-medium mt-[9px] text-left text-sm w-full"
                  placeholderClassName="text-blue_gray-800"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group335"
                  options={chooseCategoriesOptionsList}
                  isSearchable={false}
                  placeholder="Choose Categories"
                  shape="round"
                  color="black_900_33"
                  size="sm"
                  variant="fill"
                />
                <Text
                  className="mt-[42px] text-sm text-white-A700"
                  size="txtPlusJakartaSansRomanSemiBold14"
                >
                  Sort
                </Text>
                <SelectBox
                  className="border border-blue_gray-900 border-solid font-medium mt-[11px] text-left text-sm w-full"
                  placeholderClassName="text-blue_gray-800"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group336"
                  options={defaultOptionsList}
                  isSearchable={false}
                  placeholder="Default"
                  shape="round"
                  color="black_900_33"
                  size="sm"
                  variant="fill"
                />
                <Text
                  className="mt-[42px] text-sm text-white-A700"
                  size="txtPlusJakartaSansRomanSemiBold14"
                >
                  Search tools
                </Text>
                <SelectBox
                  className="border border-blue_gray-900 border-solid font-medium mt-[11px] text-left text-sm w-full"
                  placeholderClassName="text-blue_gray-800"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="language"
                  options={languageOptionsList}
                  isSearchable={false}
                  placeholder="Search for AI tools "
                  shape="round"
                  color="black_900_33"
                  size="sm"
                  variant="fill"
                />
                <Text
                  className="mt-11 text-sm text-white-A700"
                  size="txtPlusJakartaSansRomanSemiBold14"
                >
                  Pricing
                </Text>
                <SelectBox
                  className="border border-blue_gray-900 border-solid font-medium mb-8 mt-[9px] text-left text-sm w-full"
                  placeholderClassName="text-blue_gray-800"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group333"
                  options={allOptionsList}
                  isSearchable={false}
                  placeholder="All"
                  shape="round"
                  color="black_900_33"
                  size="sm"
                  variant="fill"
                />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                <div className="md:gap-5 gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                      <Img
                        className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                        src="images/img_rectangle16.png"
                        alt="rectangleSixteen"
                      />
                      <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                        <Text
                          className="mt-[7px] text-base text-white-A700"
                          size="txtPlusJakartaSansRomanBold16WhiteA700"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[30px] justify-end relative w-[27%]">
                          <Text
                            className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                            size="txtPlusJakartaSansRomanRegular12"
                          >
                            55
                          </Text>
                          <Button
                            className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                            rightIcon={
                              <Img
                                className="h-6 ml-2 left-[14%] absolute"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            color="gray_800_30"
                            size="xs"
                            variant="fill"
                          >
                            <div className="justify-center text-left text-xs">
                              55
                            </div>
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                      <Img
                        className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                        src="images/img_rectangle16_127x224.png"
                        alt="rectangleSixteen"
                      />
                      <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                        <Text
                          className="mt-[7px] text-base text-white-A700"
                          size="txtPlusJakartaSansRomanBold16WhiteA700"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[30px] justify-end relative w-[27%]">
                          <Text
                            className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                            size="txtPlusJakartaSansRomanRegular12"
                          >
                            55
                          </Text>
                          <Button
                            className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                            rightIcon={
                              <Img
                                className="h-6 ml-2 left-[14%] absolute"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            color="gray_800_30"
                            size="xs"
                            variant="fill"
                          >
                            <div className="justify-center text-left text-xs">
                              55
                            </div>
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                      <Img
                        className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                        src="images/img_rectangle49.png"
                        alt="rectangleSixteen"
                      />
                      <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                        <Text
                          className="mt-[7px] text-base text-white-A700"
                          size="txtPlusJakartaSansRomanBold16WhiteA700"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[30px] justify-end relative w-[27%]">
                          <Text
                            className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                            size="txtPlusJakartaSansRomanRegular12"
                          >
                            55
                          </Text>
                          <Button
                            className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                            rightIcon={
                              <Img
                                className="h-6 ml-2 left-[14%] absolute"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            color="gray_800_30"
                            size="xs"
                            variant="fill"
                          >
                            <div className="justify-center text-left text-xs">
                              55
                            </div>
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                      <Img
                        className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                        src="images/img_rectangle16_1.png"
                        alt="rectangleSixteen"
                      />
                      <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                        <Text
                          className="mt-[7px] text-base text-white-A700"
                          size="txtPlusJakartaSansRomanBold16WhiteA700"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[30px] justify-end relative w-[27%]">
                          <Text
                            className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                            size="txtPlusJakartaSansRomanRegular12"
                          >
                            55
                          </Text>
                          <Button
                            className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                            rightIcon={
                              <Img
                                className="h-6 ml-2 left-[14%] absolute"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            color="gray_800_30"
                            size="xs"
                            variant="fill"
                          >
                            <div className="justify-center text-left text-xs">
                              55
                            </div>
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                      <Img
                        className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                        src="images/img_rectangle16_2.png"
                        alt="rectangleSixteen"
                      />
                      <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                        <Text
                          className="mt-[7px] text-base text-white-A700"
                          size="txtPlusJakartaSansRomanBold16WhiteA700"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[30px] justify-end relative w-[27%]">
                          <Text
                            className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                            size="txtPlusJakartaSansRomanRegular12"
                          >
                            55
                          </Text>
                          <Button
                            className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                            rightIcon={
                              <Img
                                className="h-6 ml-2 left-[14%] absolute"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            color="gray_800_30"
                            size="xs"
                            variant="fill"
                          >
                            <div className="justify-center text-left text-xs">
                              55
                            </div>
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                      <Img
                        className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                        src="images/img_rectangle16_3.png"
                        alt="rectangleSixteen"
                      />
                      <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                        <Text
                          className="mt-[7px] text-base text-white-A700"
                          size="txtPlusJakartaSansRomanBold16WhiteA700"
                        >
                          Lorem Ipsum
                        </Text>
                        <div className="flex h-[30px] justify-end relative w-[27%]">
                          <Text
                            className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                            size="txtPlusJakartaSansRomanRegular12"
                          >
                            55
                          </Text>
                          <Button
                            className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                            rightIcon={
                              <Img
                                className="h-6 ml-2 left-[14%] absolute"
                                src="images/img_bookmark.svg"
                                alt="bookmark"
                              />
                            }
                            color="gray_800_30"
                            size="xs"
                            variant="fill"
                          >
                            <div className="justify-center text-left text-xs">
                              55
                            </div>
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[411px] mt-6 w-[67%]"
              orientation="horizontal"
            >
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                  <Img
                    className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                    src="images/img_rectangle16_4.png"
                    alt="rectangleSixteen"
                  />
                  <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                    <Text
                      className="mt-[7px] text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Lorem Ipsum
                    </Text>
                    <div className="flex h-[30px] justify-end relative w-[27%]">
                      <Text
                        className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        55
                      </Text>
                      <Button
                        className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                        rightIcon={
                          <Img
                            className="h-6 ml-2 left-[14%] absolute"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        color="gray_800_30"
                        size="xs"
                        variant="fill"
                      >
                        <div className="justify-center text-left text-xs">
                          55
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </div>
              </div>
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                  <Img
                    className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                    src="images/img_rectangle16_5.png"
                    alt="rectangleSixteen"
                  />
                  <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                    <Text
                      className="mt-[7px] text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Lorem Ipsum
                    </Text>
                    <div className="flex h-[30px] justify-end relative w-[27%]">
                      <Text
                        className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        55
                      </Text>
                      <Button
                        className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                        rightIcon={
                          <Img
                            className="h-6 ml-2 left-[14%] absolute"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        color="gray_800_30"
                        size="xs"
                        variant="fill"
                      >
                        <div className="justify-center text-left text-xs">
                          55
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </div>
              </div>
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-[13px] rounded-[15px] w-full">
                <div className="flex flex-col items-start justify-start mb-[19px] mt-0.5 w-56 md:w-full">
                  <Img
                    className="h-[127px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                    src="images/img_rectangle16_6.png"
                    alt="rectangleSixteen"
                  />
                  <div className="flex flex-row items-end justify-between mt-2 w-[99%] md:w-full">
                    <Text
                      className="mt-[7px] text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Lorem Ipsum
                    </Text>
                    <div className="flex h-[30px] justify-end relative w-[27%]">
                      <Text
                        className="mb-[5px] ml-4 mt-auto text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        55
                      </Text>
                      <Button
                        className="border border-orange-A100 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[58px] rounded"
                        rightIcon={
                          <Img
                            className="h-6 ml-2 left-[14%] absolute"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        color="gray_800_30"
                        size="xs"
                        variant="fill"
                      >
                        <div className="justify-center text-left text-xs">
                          55
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-3.5 text-white-A700 text-xs w-[94%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </div>
              </div>
            </List>
            <div className="h-[422px] md:h-[492px] ml-1 md:ml-[0] mt-[70px] relative w-full">
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
                    Join 30,000+ subscribers and get our 3 min daily newsletter
                    on AI.
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
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between mt-[92px] w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start">
                <Text
                  className="md:ml-[0] ml-[3px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtPlusJakartaSansExtraBold26"
                >
                  Website Logo
                </Text>
                <Text
                  className="leading-[22.00px] text-white-A700 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-4 justify-start mb-1 sm:mt-0 mt-[22px] w-[13%] sm:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtPlusJakartaSansRomanMedium20"
                >
                  Company
                </Text>
                <div className="flex flex-row gap-10 items-center justify-end md:ml-[0] ml-[13px] w-[92%] md:w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPlusJakartaSansRomanMedium14WhiteA700"
                  >
                    Favorites
                  </Text>
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPlusJakartaSansRomanMedium14WhiteA700"
                  >
                    About
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-gradient3  h-px ml-2 md:ml-[0] mt-[46px] w-[99%]" />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[33px] w-full">
              <Text
                className="text-white-A700 text-xs"
                size="txtPlusJakartaSansRomanRegular12"
              >
                © 2023 Website Name.
              </Text>
              <div className="flex flex-col h-6 items-center justify-start md:ml-[0] ml-[987px] w-6">
                <Img
                  className="h-[17px] my-0.5"
                  src="images/img_trash_blue_gray_700_02.svg"
                  alt="trash"
                />
              </div>
              <Img
                className="h-6 md:ml-[0] ml-[50px] w-6"
                src="images/img_info_blue_gray_700_02.svg"
                alt="info"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageOnePage;
