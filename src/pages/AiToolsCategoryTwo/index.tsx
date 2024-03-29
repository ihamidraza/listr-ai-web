import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header3 from "components/Header3";

const newOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AiToolsCategoryTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[813px] md:px-5 relative w-full">
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
                <div className="absolute bottom-[27%] flex flex-col items-center justify-start right-[13%] w-[66%]">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold48"
                  >
                    Copywriting AI Tools
                  </Text>
                  <Text
                    className="mt-[5px] text-blue_gray-600 text-xl"
                    size="txtPlusJakartaSansRomanRegular20"
                  >
                    Compelling Content Made Easy - Top AI Copywriting Tools
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between mt-[46px] w-full">
                    <Input
                      name="group420"
                      placeholder="Search for tools…"
                      className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-900 border-solid md:flex-1 md:mt-0 my-1.5 rounded-[15px] md:w-full"
                      color="black_900_33"
                      size="lg"
                      variant="fill"
                    ></Input>
                    <div className="flex h-[70px] justify-end relative w-[9%] md:w-full">
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
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-[33px] w-[54%] md:w-full">
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
              </div>
            </div>
            {/* <Header3 className="absolute bg-black-900_33 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full" /> */}
          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1214px] mt-[52px] mx-auto md:px-5 w-full">
            <Button
              className="border border-blue_gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[120px]"
              leftIcon={
                <Img
                  className="h-6 mr-2.5"
                  src="images/img_filter.svg"
                  alt="filter"
                />
              }
              shape="round"
              color="black_900_33"
              size="xl"
              variant="fill"
            >
              <div className="font-medium text-left text-sm">Filters</div>
            </Button>
            <SelectBox
              className="!text-white-A700 border border-blue_gray-900 border-solid sm:flex-1 font-medium text-left text-sm w-[18%] sm:w-full"
              placeholderClassName="!text-white-A700"
              // indicator={
              //   <Img
              //     className="h-6 mr-[0] w-6"
              //     src="images/img_arrowdown_white_a700_24x24.svg"
              //     alt="arrow_down"
              //   />
              // }
              isSearchable={false}
              placeholder="New"
              getOptionLabel={(e) =>
                (
                  <div className="flex items-center">
                    <Img
                      className="h-6 mr-2.5 w-6"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <span>{e.label}</span>
                  </div>
                ) as unknown as string
              }
              name="group210"
              isMulti={false}
              options={newOptionsList}
              shape="round"
              color="black_900_33"
              size="xs"
              variant="fill"
            />
          </div>
          <div className="md:h-[1105px] sm:h-[1667px] h-[569px] max-w-[1219px] mt-[3px] mx-auto md:px-5 relative w-full">
            <List
              className="absolute bottom-[0] sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-center mx-auto w-full"
              orientation="horizontal"
            >
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[11px] rounded-[15px] w-full">
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
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[11px] rounded-[15px] w-full">
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
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[11px] rounded-[15px] w-full">
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
            <div className="absolute bg-gray-900 border border-blue_gray-900 border-solid flex flex-col items-center justify-start right-[0] rounded-[15px] top-[0] w-[11%]">
              <div className="flex flex-col gap-[15px] items-center justify-start mb-7 mt-3 w-[99%] md:w-full">
                <div className="bg-gray-900_03 flex flex-row gap-2.5 items-center justify-start p-1.5 w-full">
                  <Img
                    className="h-6 ml-2.5 w-6"
                    src="images/img_checkmark_white_a700_24x24.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="text-sm text-white-A700"
                    size="txtPlusJakartaSansRomanMedium14WhiteA700"
                  >
                    Verified
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-[68%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_bookmark_white_a700.svg"
                      alt="bookmark"
                    />
                    <Text
                      className="mt-[5px] text-sm text-white-A700"
                      size="txtPlusJakartaSansRomanMedium14WhiteA700"
                    >
                      Popular
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[76%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_close_white_a700_24x24.svg"
                      alt="close_One"
                    />
                    <Text
                      className="mt-[3px] text-sm text-white-A700"
                      size="txtPlusJakartaSansRomanMedium14WhiteA700"
                    >
                      New
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] mt-[30px] mx-auto md:px-5 w-full"
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
                      id="free4"
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
                      id="free5"
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
                      id="free6"
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
          <div className="h-[422px] md:h-[622px] max-w-[1212px] mt-[200px] mx-auto md:px-5 relative w-full">
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
          <Footer className="flex items-center justify-center mt-[72px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AiToolsCategoryTwoPage;
