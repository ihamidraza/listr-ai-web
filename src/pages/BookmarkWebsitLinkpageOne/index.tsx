import React from "react";

import { Button, Img, Line, RatingBar, Text } from "components";

const BookmarkWebsitLinkpageOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto pb-[70px] w-full">
        <div className="flex flex-col gap-[55px] items-center justify-start w-full">
          <div className="h-[1445px] sm:h-[808px] md:h-[894px] md:px-5 relative w-full">
            <div className="absolute h-[1410px] sm:h-[808px] md:h-[894px] inset-[0] justify-center m-auto w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[813px] inset-x-[0] items-center justify-end mx-auto p-4 top-[0] w-full"
                style={{ backgroundImage: "url('images/img_group37.png')" }}
              >
                <div className="flex flex-col items-start justify-start mt-[21px] w-[87%] md:w-full">
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
                  <div className="flex flex-row gap-2 items-start justify-start mt-[103px] w-[10%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_white_a700.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="mt-0.5 text-base text-white-A700"
                      size="txtPlusJakartaSansRomanRegular16"
                    >
                      Home Back
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtPlusJakartaSansRomanBold26"
                  >
                    Claude
                  </Text>
                  <div className="flex flex-row gap-2.5 items-start justify-start ml-0.5 md:ml-[0] mt-[11px] w-[18%] md:w-full">
                    <RatingBar
                      className="flex justify-between rounded-[1px] w-[100px]"
                      value={1}
                      starCount={5}
                      color="#d9d9d9"
                      activeColor="#ffffff"
                      size={20}
                    ></RatingBar>
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanRegular16"
                    >
                      Rate this tool
                    </Text>
                  </div>
                  <Text
                    className="leading-[20.00px] mt-[23px] text-sm text-white-A700 tracking-[0.70px] w-[38%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    <>
                      Claude is a next-generation AI assistant designed to
                      handle tasks of any size. It offers an API for limited
                      customers and researchers, allowing them to harness the
                      power of this advanced assistant. One of its flagship
                      products is Constitutional AI (CAI), which ensures that AI
                      systems adhere to a set of principles, making them
                      helpful, harmless, and honest. With CAI, the outputs of AI
                      systems are shaped to align with these principles.
                      Claude&#39;s goal is to provide a reliable and trustworthy
                      AI assistant that can assist users in various domains.
                    </>
                  </Text>
                  <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-row gap-[15px] items-center justify-start mt-5 p-[15px] rounded-[15px] w-[33%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[37%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-1.5 ml-auto mr-[23px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-full inset-[0] items-center justify-center m-auto min-w-[132px] rounded-[7px]"
                        rightIcon={
                          <Img
                            className="h-6 ml-2.5 left-[8%] absolute"
                            src="images/img_link_white_a700.svg"
                            alt="link"
                          />
                        }
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[33%]">
                      <Button
                        className="border border-blue_gray-800_02 border-solid cursor-pointer flex items-center justify-center min-w-[116px] rounded-[7px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        color="black_900_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          57
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[24%]">
                      <div className="bg-black-900_19 border border-blue_gray-800_02 border-solid flex flex-col items-center justify-center sm:px-5 px-[30px] py-5 rounded-[7px] w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_send.svg"
                          alt="send"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="mt-[21px] text-sm text-white-A700 tracking-[0.70px]"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    Freemium
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[800px] object-cover right-[0]"
                src="images/img_divelementorw.png"
                alt="divelementorw"
              />
            </div>
            <div className="absolute bottom-[0] h-[422px] inset-x-[0] mx-auto w-[85%] md:w-full">
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
            <div className="absolute flex flex-col md:gap-10 gap-[114px] inset-x-[0] items-end justify-start mx-auto top-[23%] w-[85%]">
              <Img
                className="h-[383px] md:h-auto object-cover w-[52%]"
                src="images/img_rectangle20.png"
                alt="rectangleTwenty"
              />
              <div className="flex flex-col gap-[50px] items-center justify-start mr-[5px] w-full">
                <Line className="bg-gradient3  h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[13%] md:w-full">
                    <Text
                      className="text-sm text-white-A700 tracking-[0.70px]"
                      size="txtPlusJakartaSansRomanMedium14WhiteA700"
                    >
                      Explore Similar Tools
                    </Text>
                    <Button
                      className="border border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[126px] rounded-[24px] text-center text-sm"
                      color="black_900_33"
                      size="xl"
                      variant="fill"
                    >
                      AI Assistant
                    </Button>
                  </div>
                  <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex md:flex-1 sm:flex-col flex-row gap-[15px] items-center justify-between p-[15px] rounded-[15px] w-1/2 md:w-full">
                    <div className="flex flex-col items-center justify-start w-[46%] sm:w-full">
                      <Button
                        className="border border-blue_gray-800_02 border-solid cursor-pointer flex items-center justify-center min-w-[258px] rounded-[7px]"
                        leftIcon={
                          <Img
                            className="h-6 mb-px mr-2.5"
                            src="images/img_compassesline8a69558b_1.svg"
                            alt="compasses-line-8a69558b 1"
                          />
                        }
                        color="black_900_19"
                        size="xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Tools Added Today
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[52%] sm:w-full">
                      <Button
                        className="border border-blue_gray-800_02 border-solid cursor-pointer flex items-center justify-center min-w-[291px] rounded-[7px]"
                        leftIcon={
                          <Img
                            className="h-6 mb-px mr-2.5"
                            src="images/img_file.svg"
                            alt="file"
                          />
                        }
                        color="black_900_19"
                        size="xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Trending Stories Today
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1217px] mx-auto md:px-5 w-full">
            <Line className="bg-gradient3  h-px w-[99%]" />
            <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between mt-[45px] w-full">
              <div className="bg-white-A700_0a border border-blue_gray-900 border-solid flex md:flex-1 flex-col gap-[42px] items-center justify-start mb-[387px] md:mt-0 mt-[79px] p-[27px] sm:px-5 rounded-[15px] w-[28%] md:w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtPlusJakartaSansRomanSemiBold26WhiteA700"
                >
                  login to write a review
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[35px] min-w-[158px] rounded-[27px]"
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-[15px]"
                      src="images/img_google_green_600_01.svg"
                      alt="google"
                    />
                  }
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <div className="font-semibold text-left text-lg">Login</div>
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[46px] justify-start w-[69%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[133px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtPlusJakartaSansExtraBold26"
                >
                  Latest Reviews
                </Text>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-black-900_19 border border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-[15px] w-full">
                      <div className="flex flex-row gap-[9px] items-start justify-start mb-1.5 w-[52%] md:w-full">
                        <div className="flex flex-col gap-[38px] items-start justify-start w-[45%]">
                          <Img
                            className="h-20 md:h-auto rounded-[50%] w-20"
                            src="images/img_ellipse4.png"
                            alt="ellipseFour"
                          />
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtPlusJakartaSansRomanRegular14Gray700"
                          >
                            14, Sep 2023
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start mt-[13px] w-[52%]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Paul Smith
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-[100px]"
                            value={5}
                            starCount={5}
                            color="#d9d9d9"
                            activeColor="#ffffff"
                            size={20}
                          ></RatingBar>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900_19 border border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-[15px] w-full">
                      <div className="flex flex-row items-start justify-start mb-1.5 w-[52%] md:w-full">
                        <div className="flex flex-col gap-[38px] items-start justify-start w-[47%]">
                          <Img
                            className="h-20 md:h-auto rounded-[50%] w-20"
                            src="images/img_ellipse5.png"
                            alt="ellipseFive"
                          />
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtPlusJakartaSansRomanRegular14Gray700"
                          >
                            20, Sep 2023
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start ml-[5px] mt-[13px] w-[52%]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            James Paul
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-[100px]"
                            value={5}
                            starCount={5}
                            color="#d9d9d9"
                            activeColor="#ffffff"
                            size={20}
                          ></RatingBar>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900_19 border border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-[15px] w-full">
                      <div className="flex flex-row gap-[9px] items-start justify-start mb-1.5 w-[55%] md:w-full">
                        <div className="flex flex-col gap-[38px] items-start justify-start w-[42%]">
                          <Img
                            className="h-20 md:h-auto rounded-[50%] w-20"
                            src="images/img_ellipse6.png"
                            alt="ellipseSix"
                          />
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtPlusJakartaSansRomanRegular14Gray700"
                          >
                            14, Sep 2023
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start mt-[13px] w-[54%]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Alex Jackson
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-[100px]"
                            value={5}
                            starCount={5}
                            color="#d9d9d9"
                            activeColor="#ffffff"
                            size={20}
                          ></RatingBar>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900_19 border border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-[15px] w-full">
                      <div className="flex flex-row items-start justify-start mb-1.5 w-[52%] md:w-full">
                        <div className="flex flex-col gap-[38px] items-start justify-start w-[47%]">
                          <Img
                            className="h-20 md:h-auto rounded-[50%] w-20"
                            src="images/img_ellipse7.png"
                            alt="ellipseSeven"
                          />
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtPlusJakartaSansRomanRegular14Gray700"
                          >
                            20, Sep 2023
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start ml-[5px] mt-[13px] w-[52%]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtPlusJakartaSansRomanSemiBold18"
                          >
                            Johan Alex{" "}
                          </Text>
                          <RatingBar
                            className="flex justify-between rounded-[1px] w-[100px]"
                            value={5}
                            starCount={5}
                            color="#d9d9d9"
                            activeColor="#ffffff"
                            size={20}
                          ></RatingBar>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black-900_19 border border-blue_gray-900 border-solid flex flex-col items-start justify-start p-[15px] rounded-[15px] w-1/2 md:w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-start mb-1.5 w-[52%] md:w-full">
                      <div className="flex flex-col gap-[23px] items-start justify-start w-[45%]">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse8.png"
                          alt="ellipseEight"
                        />
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPlusJakartaSansRomanRegular14"
                        >
                          Good
                        </Text>
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtPlusJakartaSansRomanRegular14Gray700"
                        >
                          14, Sep 2023
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start mt-[13px] w-[52%]">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtPlusJakartaSansRomanSemiBold18"
                        >
                          Peterson
                        </Text>
                        <RatingBar
                          className="flex justify-between rounded-[1px] w-[100px]"
                          value={5}
                          starCount={5}
                          color="#d9d9d9"
                          activeColor="#ffffff"
                          size={20}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gradient3  h-px mt-[63px] w-[99%]" />
            <Text
              className="mt-[43px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
              size="txtPlusJakartaSansExtraBold26"
            >
              Alternative Tools
            </Text>
            <div className="flex flex-col items-center justify-start mt-[52px] w-[67%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
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
            <div className="flex flex-col items-center justify-start mt-[138px] w-full">
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
        </div>
      </div>
    </>
  );
};

export default BookmarkWebsitLinkpageOnePage;
