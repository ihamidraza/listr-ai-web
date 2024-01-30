import React from "react";

import { Button, Img, Line, List, Text } from "components";

const NewsPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans sm:gap-10 md:gap-10 gap-[201px] items-center justify-start mx-auto pb-[58px] w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="md:h-[1209px] sm:h-[1268px] h-[1410px] mx-auto w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[813px] inset-x-[0] items-center justify-start mx-auto p-[37px] sm:px-5 top-[0] w-full"
              style={{ backgroundImage: "url('images/img_group37.png')" }}
            >
              <div className="flex flex-col items-start justify-start mb-[47px] w-[90%] md:w-full">
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
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-center justify-end md:ml-[0] ml-[355px] mt-[3px] p-[26px] sm:px-5 rounded-[15px] w-[42%] md:w-full">
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
                  className="md:ml-[0] ml-[554px] mt-[72px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  News
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[81px] w-[62%] md:w-full">
                  <Text
                    className="mb-[3px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                    size="txtPlusJakartaSansRomanSemiBold36"
                  >
                    Latest News
                  </Text>
                  <Text
                    className="sm:mt-0 mt-[3px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                    size="txtPlusJakartaSansRomanSemiBold36"
                  >
                    Trending
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-start mt-[7px] w-[91%] md:w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-[48%]" />
                  <Line className="bg-blue_gray-800_02 h-px w-[48%]" />
                </div>
                <List
                  className="sm:flex-col flex-row gap-[58px] grid md:grid-cols-1 grid-cols-2 mt-3.5 w-[92%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                          size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                        >
                          5H
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium16Bluegray400"
                        >
                          EU elections at risk due to rise of AI-enabled
                          information manipulation
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                        <Img
                          className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                        <Text
                          className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                          size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                        >
                          www.loremipusm.com
                        </Text>
                        <Img
                          className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                          src="images/img_user_blue_gray_700_04.svg"
                          alt="user"
                        />
                        <Text
                          className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                          size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                        >
                          0
                        </Text>
                        <Img
                          className="h-[22px] sm:ml-[0] ml-[132px]"
                          src="images/img_group44.svg"
                          alt="groupFortyFour"
                        />
                      </div>
                      <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                          size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                        >
                          5H
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium16Bluegray400"
                        >
                          EU elections at risk due to rise of AI-enabled
                          information manipulation
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                        <Img
                          className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                        <Text
                          className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                          size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                        >
                          www.loremipusm.com
                        </Text>
                        <Img
                          className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                          src="images/img_user_blue_gray_700_04.svg"
                          alt="user"
                        />
                        <Text
                          className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                          size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                        >
                          0
                        </Text>
                        <Img
                          className="h-[22px] sm:ml-[0] ml-[132px]"
                          src="images/img_group44.svg"
                          alt="groupFortyFour"
                        />
                      </div>
                      <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                    </div>
                  </div>
                </List>
                <List
                  className="flex flex-col gap-3.5 mt-3.5 w-[91%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-[58px] items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                            size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                          >
                            5H
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                            size="txtPlusJakartaSansRomanMedium16Bluegray400"
                          >
                            EU elections at risk due to rise of AI-enabled
                            information manipulation
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                          <Img
                            className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                          <Text
                            className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                          >
                            www.loremipusm.com
                          </Text>
                          <Img
                            className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                            src="images/img_user_blue_gray_700_04.svg"
                            alt="user"
                          />
                          <Text
                            className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                            size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                          >
                            0
                          </Text>
                          <Img
                            className="h-[22px] sm:ml-[0] ml-[132px]"
                            src="images/img_group44.svg"
                            alt="groupFortyFour"
                          />
                        </div>
                        <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-800_02 h-px mb-20 w-[48%]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[48%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                          size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                        >
                          5H
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium16Bluegray400"
                        >
                          EU elections at risk due to rise of AI-enabled
                          information manipulation
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                        <Img
                          className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                        <Text
                          className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                          size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                        >
                          www.loremipusm.com
                        </Text>
                        <Img
                          className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                          src="images/img_user_blue_gray_700_04.svg"
                          alt="user"
                        />
                        <Text
                          className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                          size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                        >
                          0
                        </Text>
                        <Img
                          className="h-[22px] sm:ml-[0] ml-[132px]"
                          src="images/img_group44.svg"
                          alt="groupFortyFour"
                        />
                      </div>
                      <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[800px] object-cover right-[0]"
              src="images/img_divelementorw.png"
              alt="divelementorw"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start ml-[113px] mt-[-NaNpx] w-[79%] z-[1]">
            <List
              className="flex flex-col gap-3.5 md:mt-0 mt-[358px] w-[47%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                      size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                    >
                      5H
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                      size="txtPlusJakartaSansRomanMedium16Bluegray400"
                    >
                      EU elections at risk due to rise of AI-enabled information
                      manipulation
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                    <Img
                      className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      www.loremipusm.com
                    </Text>
                    <Img
                      className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_user_blue_gray_700_04.svg"
                      alt="user"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      0
                    </Text>
                    <Img
                      className="h-[22px] sm:ml-[0] ml-[132px]"
                      src="images/img_group44.svg"
                      alt="groupFortyFour"
                    />
                  </div>
                  <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                      size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                    >
                      5H
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                      size="txtPlusJakartaSansRomanMedium16Bluegray400"
                    >
                      EU elections at risk due to rise of AI-enabled information
                      manipulation
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                    <Img
                      className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      www.loremipusm.com
                    </Text>
                    <Img
                      className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_user_blue_gray_700_04.svg"
                      alt="user"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      0
                    </Text>
                    <Img
                      className="h-[22px] sm:ml-[0] ml-[132px]"
                      src="images/img_group44.svg"
                      alt="groupFortyFour"
                    />
                  </div>
                  <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                      size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                    >
                      5H
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                      size="txtPlusJakartaSansRomanMedium16Bluegray400"
                    >
                      EU elections at risk due to rise of AI-enabled information
                      manipulation
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                    <Img
                      className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      www.loremipusm.com
                    </Text>
                    <Img
                      className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_user_blue_gray_700_04.svg"
                      alt="user"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      0
                    </Text>
                    <Img
                      className="h-[22px] sm:ml-[0] ml-[132px]"
                      src="images/img_group44.svg"
                      alt="groupFortyFour"
                    />
                  </div>
                  <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                      size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                    >
                      5H
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                      size="txtPlusJakartaSansRomanMedium16Bluegray400"
                    >
                      EU elections at risk due to rise of AI-enabled information
                      manipulation
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                    <Img
                      className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      www.loremipusm.com
                    </Text>
                    <Img
                      className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_user_blue_gray_700_04.svg"
                      alt="user"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      0
                    </Text>
                    <Img
                      className="h-[22px] sm:ml-[0] ml-[132px]"
                      src="images/img_group44.svg"
                      alt="groupFortyFour"
                    />
                  </div>
                  <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                      size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                    >
                      5H
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                      size="txtPlusJakartaSansRomanMedium16Bluegray400"
                    >
                      EU elections at risk due to rise of AI-enabled information
                      manipulation
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                    <Img
                      className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      www.loremipusm.com
                    </Text>
                    <Img
                      className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_user_blue_gray_700_04.svg"
                      alt="user"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      0
                    </Text>
                    <Img
                      className="h-[22px] sm:ml-[0] ml-[132px]"
                      src="images/img_group44.svg"
                      alt="groupFortyFour"
                    />
                  </div>
                  <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                      size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                    >
                      5H
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                      size="txtPlusJakartaSansRomanMedium16Bluegray400"
                    >
                      EU elections at risk due to rise of AI-enabled information
                      manipulation
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                    <Img
                      className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      www.loremipusm.com
                    </Text>
                    <Img
                      className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                      src="images/img_user_blue_gray_700_04.svg"
                      alt="user"
                    />
                    <Text
                      className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                    >
                      0
                    </Text>
                    <Img
                      className="h-[22px] sm:ml-[0] ml-[132px]"
                      src="images/img_group44.svg"
                      alt="groupFortyFour"
                    />
                  </div>
                  <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                </div>
              </div>
            </List>
            <Line className="bg-blue_gray-800_02 h-[913px] md:h-px md:ml-[0] ml-[17px] md:w-full w-px" />
            <div className="flex flex-col items-start justify-start mb-[53px] ml-10 md:ml-[0] md:mt-0 mt-[183px] w-[47%] md:w-full">
              <List
                className="flex flex-col gap-[14.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                        size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                      >
                        5H
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                        size="txtPlusJakartaSansRomanMedium16Bluegray400"
                      >
                        EU elections at risk due to rise of AI-enabled
                        information manipulation
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                      <Img
                        className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                      <Text
                        className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                      >
                        www.loremipusm.com
                      </Text>
                      <Img
                        className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                        src="images/img_user_blue_gray_700_04.svg"
                        alt="user"
                      />
                      <Text
                        className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                      >
                        0
                      </Text>
                      <Img
                        className="h-[22px] sm:ml-[0] ml-[132px]"
                        src="images/img_group44.svg"
                        alt="groupFortyFour"
                      />
                    </div>
                    <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-800_02 w-[99%]" />
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                        size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                      >
                        5H
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                        size="txtPlusJakartaSansRomanMedium16Bluegray400"
                      >
                        EU elections at risk due to rise of AI-enabled
                        information manipulation
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                      <Img
                        className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                      <Text
                        className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                      >
                        www.loremipusm.com
                      </Text>
                      <Img
                        className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                        src="images/img_user_blue_gray_700_04.svg"
                        alt="user"
                      />
                      <Text
                        className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                      >
                        0
                      </Text>
                      <Img
                        className="h-[22px] sm:ml-[0] ml-[132px]"
                        src="images/img_group44.svg"
                        alt="groupFortyFour"
                      />
                    </div>
                    <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-800_02 w-[99%]" />
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-700_04 tracking-[0.80px]"
                        size="txtPlusJakartaSansRomanRegular16Bluegray70004"
                      >
                        5H
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[20.00px] text-base text-blue_gray-400 tracking-[0.80px] w-[92%] sm:w-full"
                        size="txtPlusJakartaSansRomanMedium16Bluegray400"
                      >
                        EU elections at risk due to rise of AI-enabled
                        information manipulation
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[46px] mt-[5px] w-[89%] md:w-full">
                      <Img
                        className="h-3.5 sm:mt-0 mt-1.5 w-3.5"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                      <Text
                        className="sm:ml-[0] ml-[3px] sm:mt-0 mt-1 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                      >
                        www.loremipusm.com
                      </Text>
                      <Img
                        className="h-3.5 ml-2.5 sm:ml-[0] sm:mt-0 mt-1.5 w-3.5"
                        src="images/img_user_blue_gray_700_04.svg"
                        alt="user"
                      />
                      <Text
                        className="sm:ml-[0] ml-[3px] sm:mt-0 mt-0.5 text-blue_gray-700_04 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray70004"
                      >
                        0
                      </Text>
                      <Img
                        className="h-[22px] sm:ml-[0] ml-[132px]"
                        src="images/img_group44.svg"
                        alt="groupFortyFour"
                      />
                    </div>
                    <Line className="bg-blue_gray-800_02 h-px mt-3 w-[99%]" />
                  </div>
                </div>
              </List>
              <Text
                className="mt-3 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                size="txtPlusJakartaSansRomanSemiBold36"
              >
                Recent Comments
              </Text>
              <List
                className="flex flex-col gap-2.5 items-center mt-5 w-[99%]"
                orientation="vertical"
              >
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-center justify-end p-[9px] rounded-[15px] w-full">
                  <div className="flex flex-col items-start justify-start mt-[11px] w-[98%] md:w-full">
                    <Text
                      className="text-blue_gray-400 text-lg tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18Bluegray400"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-sm tracking-[0.70px] w-full"
                      size="txtPlusJakartaSansRomanRegular14Bluegray400"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-[95%] md:w-full">
                      <Text
                        className="text-blue_gray-700_04 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanRegular12Bluegray70004"
                      >
                        Tue, 10 2023
                      </Text>
                      <Text
                        className="text-blue_gray-700_04 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanRegular12Bluegray70004"
                      >
                        0 Replies
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-800_02 w-full" />
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-center justify-end p-[9px] rounded-[15px] w-full">
                  <div className="flex flex-col items-start justify-start mt-[11px] w-[98%] md:w-full">
                    <Text
                      className="text-blue_gray-400 text-lg tracking-[0.90px]"
                      size="txtPlusJakartaSansRomanSemiBold18Bluegray400"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-sm tracking-[0.70px] w-full"
                      size="txtPlusJakartaSansRomanRegular14Bluegray400"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-[95%] md:w-full">
                      <Text
                        className="text-blue_gray-700_04 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanRegular12Bluegray70004"
                      >
                        Tue, 10 2023
                      </Text>
                      <Text
                        className="text-blue_gray-700_04 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanRegular12Bluegray70004"
                      >
                        0 Replies
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-blue_gray-800_02 h-[913px] md:h-px ml-6 md:ml-[0] md:w-full w-px" />
          </div>
          <div className="md:h-[389px] h-[422px] mt-[-33px] mx-auto w-[85%] md:w-full z-[1]">
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
                alt="image_One"
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
        <div className="flex flex-col items-center justify-start max-w-[1217px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
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
            <Line className="bg-gradient3  h-px mt-[54px] w-[99%]" />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[25px] w-full">
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

export default NewsPagePage;
