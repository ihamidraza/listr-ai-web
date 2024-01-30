import React from "react";

import { Button, Img, Line, Text } from "components";

const FavoritesPageNoResultOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans sm:gap-10 md:gap-10 gap-[67px] items-center justify-start mx-auto pb-12 w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="h-[1410px] sm:h-[808px] md:h-[894px] mx-auto w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[813px] inset-x-[0] items-center justify-start mx-auto p-[37px] sm:px-5 top-[0] w-full"
              style={{ backgroundImage: "url('images/img_group37.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[212px] w-[90%] md:w-full">
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
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-center justify-end mt-[3px] p-[26px] sm:px-5 rounded-[15px] w-[42%] md:w-full">
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
                  className="mt-[72px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Favorites
                </Text>
                <Text
                  className="mt-[5px] text-lg text-white-A700 tracking-[0.90px]"
                  size="txtPlusJakartaSansRomanRegular18"
                >
                  All your loved tools are listed below
                </Text>
                <Line className="bg-gradient3  h-px mt-[73px] w-full" />
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-row gap-[84px] items-center justify-center mt-[38px] p-[15px] rounded-[15px] w-[29%] md:w-full">
                  <Button
                    className="border border-amber-500 border-solid cursor-pointer font-medium min-w-[120px] ml-2.5 rounded-[7px] text-center text-lg tracking-[0.90px]"
                    color="amber_500_19"
                    size="lg"
                    variant="fill"
                  >
                    Tools
                  </Button>
                  <Text
                    className="mr-11 text-lg text-white-A700 tracking-[0.90px]"
                    size="txtPlusJakartaSansRomanMedium18"
                  >
                    News
                  </Text>
                </div>
                <Line className="bg-gradient3  h-px mt-[35px] w-full" />
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[800px] object-cover right-[0]"
              src="images/img_divelementorw.png"
              alt="divelementorw"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[90px] justify-start mb-[526px] ml-[115px] mt-[-NaNpx] w-[55%] z-[1]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex md:flex-1 flex-col items-center justify-start p-[19px] rounded-[15px] w-[48%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-7 mt-[3px] w-[336px] md:w-full">
                  <Img
                    className="h-[191px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                    src="images/img_rectangle16.png"
                    alt="rectangleSixteen"
                  />
                  <div className="flex flex-row items-center justify-between mt-3 w-[99%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Lorem Ipsum
                    </Text>
                    <div className="flex h-[45px] justify-end relative w-[27%]">
                      <Text
                        className="mb-[13px] ml-6 mt-auto text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        55
                      </Text>
                      <div className="absolute bg-amber-500_66 border border-orange-A100 border-solid flex flex-row gap-5 h-full inset-[0] items-center justify-between m-auto p-1 rounded w-full">
                        <Text
                          className="ml-[7px] text-white-A700 text-xs"
                          size="txtPlusJakartaSansRomanRegular12"
                        >
                          55
                        </Text>
                        <Img
                          className="h-9 w-9"
                          src="images/img_bookmark.svg"
                          alt="bookmark"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-[21px] text-white-A700 text-xs w-[94%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </div>
              </div>
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex md:flex-1 flex-col items-center justify-start p-[19px] rounded-[15px] w-[48%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-7 mt-[3px] w-full">
                  <Img
                    className="h-[190px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                    src="images/img_rectangle16_190x336.png"
                    alt="rectangleSixteen_One"
                  />
                  <div className="flex flex-row items-center justify-between mt-3 w-[99%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Lorem Ipsum
                    </Text>
                    <div className="flex h-[45px] justify-end relative w-[27%]">
                      <Text
                        className="mb-3 ml-6 mt-auto text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        55
                      </Text>
                      <div className="absolute bg-amber-500_66 border border-orange-A100 border-solid flex flex-row gap-5 h-full inset-[0] items-center justify-between m-auto p-1 rounded w-full">
                        <Text
                          className="ml-[7px] text-white-A700 text-xs"
                          size="txtPlusJakartaSansRomanRegular12"
                        >
                          55
                        </Text>
                        <Img
                          className="h-9 w-9"
                          src="images/img_bookmark.svg"
                          alt="bookmark_One"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-[21px] text-white-A700 text-xs w-[94%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[464px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900_01 tracking-[1.80px]"
              size="txtPlusJakartaSansRomanMedium36"
            >
              No More Result
            </Text>
          </div>
          <div className="md:h-[281px] h-[422px] mt-[-141px] mx-auto w-[85%] md:w-full z-[1]">
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

export default FavoritesPageNoResultOnePage;
