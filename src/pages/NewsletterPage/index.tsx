import React from "react";

import { Button, Img, Line, Text } from "components";

const NewsletterPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto pb-[58px] w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="h-[1410px] sm:h-[808px] md:h-[894px] mx-auto w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[813px] inset-x-[0] items-center justify-start mx-auto p-[37px] sm:px-5 top-[0] w-full"
              style={{ backgroundImage: "url('images/img_group37.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[308px] w-[90%] md:w-full">
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
                  Newsletter
                </Text>
                <Text
                  className="leading-[50.00px] mt-[17px] sm:text-4xl md:text-[42px] text-[46px] text-center text-white-A700 tracking-[2.30px]"
                  size="txtPlusJakartaSansRomanRegular46"
                >
                  <>
                    Get AI News and Tools in
                    <br />
                    Just 3 minutes
                  </>
                </Text>
                <Text
                  className="mt-[22px] text-lg text-white-A700 tracking-[0.90px]"
                  size="txtPlusJakartaSansRomanRegular18"
                >
                  Join 40,000+ other Founders, Devs, Marketers and VCs who are
                  already onboard.
                </Text>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[800px] items-start justify-end p-[9px] right-[0] w-[35%]"
              style={{ backgroundImage: "url('images/img_divelementorw.png')" }}
            >
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-start justify-end mb-[132px] mt-[319px] p-[17px] rounded-[15px] w-[79%] md:w-full">
                <Img
                  className="h-[190px] sm:h-auto ml-0.5 md:ml-[0] mt-[5px] object-cover rounded-[7px] w-[99%] md:w-full"
                  src="images/img_rectangle16_7.png"
                  alt="rectangleSixteen"
                />
                <Text
                  className="ml-0.5 md:ml-[0] mt-[26px] text-base text-white-A700"
                  size="txtPlusJakartaSansRomanBold16WhiteA700"
                >
                  Lorem Ipsum
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[37px] text-blue_gray-600_03 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray60003"
                >
                  1 day ago
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-[351px] ml-[110px] mt-[-NaNpx] w-[76%] z-[1]">
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-center justify-end pr-5 py-5 rounded-[15px] w-[89%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start mb-0.5 md:mt-0 mt-[11px] w-[74%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[25px] text-blue_gray-800 text-lg"
                    size="txtPlusJakartaSansRomanMedium18Bluegray800"
                  >
                    Name
                  </Text>
                  <Line className="bg-blue_gray-800_02 h-px mt-3.5 w-full" />
                  <Text
                    className="md:ml-[0] ml-[25px] mt-[22px] text-blue_gray-800 text-lg"
                    size="txtPlusJakartaSansRomanMedium18Bluegray800"
                  >
                    Work Email
                  </Text>
                </div>
                <div className="flex h-[98px] justify-end relative w-[27%] md:w-full">
                  <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[54px] mb-[5px] ml-auto mr-[39px] mt-auto rounded-[50%] w-[54px]"></div>
                  <Button
                    className="absolute border border-amber-500 border-solid cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[245px] py-[35px] text-center text-lg uppercase"
                    shape="round"
                    color="amber_500_19"
                    variant="fill"
                  >
                    Subscribe IT’S FREE{" "}
                  </Button>
                </div>
              </div>
            </div>
            <Text
              className="capitalize leading-[22.00px] mt-[27px] text-center text-gray-600 text-lg w-[73%] sm:w-full"
              size="txtPlusJakartaSansRomanRegular18Gray600"
            >
              <>
                *Please check your Promotion/Spam folder for our Welcome Email
                incase it&#39;s not in your primary inbox.
              </>
            </Text>
            <Text
              className="mt-32 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
              size="txtPlusJakartaSansRomanSemiBold36"
            >
              Latest Editions
            </Text>
            <div className="flex md:flex-col flex-row gap-[46px] items-center justify-start mt-[25px] w-[73%] md:w-full">
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-start justify-end p-[18px] rounded-[15px] w-[48%] md:w-full">
                <Img
                  className="h-[190px] sm:h-auto mt-1 object-cover rounded-[7px] w-full"
                  src="images/img_rectangle16_190x336.png"
                  alt="rectangleSixteen_One"
                />
                <Text
                  className="mt-[26px] text-base text-white-A700"
                  size="txtPlusJakartaSansRomanBold16WhiteA700"
                >
                  Lorem Ipsum
                </Text>
                <Text
                  className="mt-9 text-blue_gray-600_03 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray60003"
                >
                  7 Hours
                </Text>
              </div>
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-start justify-end p-[18px] rounded-[15px] w-[48%] md:w-full">
                <Img
                  className="h-[190px] sm:h-auto mt-1 object-cover rounded-[7px] w-full"
                  src="images/img_rectangle16_2.png"
                  alt="rectangleSixteen_Two"
                />
                <Text
                  className="mt-[26px] text-base text-white-A700"
                  size="txtPlusJakartaSansRomanBold16WhiteA700"
                >
                  Lorem Ipsum
                </Text>
                <Text
                  className="mt-9 text-blue_gray-600_03 text-xs"
                  size="txtPlusJakartaSansRomanRegular12Bluegray60003"
                >
                  10 Hours
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-start justify-end ml-[110px] mt-[-121px] p-[17px] rounded-[15px] w-[27%] z-[1]">
            <Img
              className="h-[190px] sm:h-auto ml-0.5 md:ml-[0] mt-[5px] object-cover rounded-[7px] w-[99%] md:w-full"
              src="images/img_rectangle87.png"
              alt="rectangleSixteen_Three"
            />
            <Text
              className="ml-0.5 md:ml-[0] mt-[26px] text-base text-white-A700"
              size="txtPlusJakartaSansRomanBold16WhiteA700"
            >
              Lorem Ipsum
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-[37px] text-blue_gray-600_03 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray60003"
            >
              2 day ago
            </Text>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-start justify-end mt-[-121px] mx-auto p-[17px] rounded-[15px] w-[27%] z-[1]">
            <Img
              className="h-[190px] sm:h-auto ml-0.5 md:ml-[0] mt-[5px] object-cover rounded-[7px] w-[99%] md:w-full"
              src="images/img_rectangle16_8.png"
              alt="rectangleSixteen_Four"
            />
            <Text
              className="ml-0.5 md:ml-[0] mt-[26px] text-base text-white-A700"
              size="txtPlusJakartaSansRomanBold16WhiteA700"
            >
              Lorem Ipsum
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-[37px] text-blue_gray-600_03 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray60003"
            >
              1 weeks ago
            </Text>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-start justify-end ml-auto mr-[113px] mt-[-121px] p-[17px] rounded-[15px] w-[27%] z-[1]">
            <Img
              className="h-[190px] sm:h-auto ml-0.5 md:ml-[0] mt-[5px] object-cover rounded-[7px] w-[99%] md:w-full"
              src="images/img_rectangle71.png"
              alt="rectangleSixteen_Five"
            />
            <Text
              className="ml-0.5 md:ml-[0] mt-[26px] text-base text-white-A700"
              size="txtPlusJakartaSansRomanBold16WhiteA700"
            >
              Lorem Ipsum
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-[37px] text-blue_gray-600_03 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray60003"
            >
              3 weeks ago
            </Text>
          </div>
        </div>
        <div className="bg-gray-800_33 border border-blue_gray-900 border-solid flex md:flex-col flex-row md:gap-10 gap-[235px] items-center justify-center max-w-[961px] mt-[140px] mx-auto p-2.5 md:px-5 rounded-[15px] w-full">
          <a
            href="javascript:"
            className="md:ml-[0] ml-[21px] text-lg text-white-A700"
          >
            <Text size="txtPlusJakartaSansRomanMedium18">Sign Up</Text>
          </a>
          <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end mr-2.5 px-[17px] rounded-[30px] w-[65%] md:w-full">
            <Text
              className="text-blue_gray-600_03 text-sm"
              size="txtPlusJakartaSansRomanMedium14Bluegray60003"
            >
              Name{" "}
            </Text>
            <Line className="bg-blue_gray-800_02 h-[60px] sm:h-px ml-28 sm:ml-[0] sm:w-full w-px" />
            <Text
              className="sm:ml-[0] ml-[34px] text-blue_gray-600_03 text-sm"
              size="txtPlusJakartaSansRomanMedium14Bluegray60003"
            >
              Email
            </Text>
            <div className="flex h-[38px] justify-end sm:ml-[0] ml-[199px] relative w-[24%] sm:w-full">
              <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-7 mb-[3px] ml-auto mr-[17px] mt-auto rounded-[50%] w-7"></div>
              <Button
                className="absolute border border-amber-500 border-solid cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[133px] rounded-[19px] text-center text-lg uppercase"
                color="amber_500_19"
                size="sm"
                variant="fill"
              >
                Subscribe{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1217px] mt-40 mx-auto md:px-5 w-full">
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

export default NewsletterPagePage;
