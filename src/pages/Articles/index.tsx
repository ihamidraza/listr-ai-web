import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const ArticlesPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="md:h-[1051px] h-[1276px] sm:h-[1451px] md:px-5 relative w-full">
          <div className="absolute md:h-[1051px] h-[813px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[622px] object-cover"
              src="images/img_divelementorw.png"
              alt="divelementorw"
            />
            <div className="absolute md:h-[1051px] h-[813px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[813px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[85%]">
                <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
                  <div className="h-[444px] relative w-[54%] md:w-full">
                    <Img
                      className="h-[444px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_rectangle127.png"
                      alt="rectangle127"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 rounded-[15px] w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start mb-[7px] mt-[282px] w-[86%] md:w-full">
                        <Text
                          className="leading-[30.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[1.10px] w-full"
                          size="txtPlusJakartaSansExtraBold22"
                        >
                          Zero Trust Meets AI - Here’s Why It’s A New Frontier
                          For Cybersecurity
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-[32%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            1 month ago | Editor
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[12.5px] pb-[13px] w-[45%]"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-[15px] w-[120px]"
                        src="images/img_rectangle129.png"
                        alt="rectangle129"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="leading-[30.00px] text-lg text-white-A700 tracking-[0.90px] w-full"
                          size="txtPlusJakartaSansExtraBold18"
                        >
                          Discover the Top 10 AI Tools for Transcription to
                          Enhance Accuracy
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-2/5 md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            1 month ago | Editor
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-800_02 w-[98%]" />
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-[15px] w-[120px]"
                        src="images/img_rectangle130.png"
                        alt="rectangle130"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="leading-[30.00px] text-lg text-white-A700 tracking-[0.90px] w-full"
                          size="txtPlusJakartaSansExtraBold18"
                        >
                          Unleash Your Creativity with the Top 10 AI Tools for
                          Logo Making
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-2/5 md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            1 month ago | Editor
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-800_02 w-[98%]" />
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-[15px] w-[120px]"
                        src="images/img_rectangle131.png"
                        alt="rectangle131"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="leading-[30.00px] text-lg text-white-A700 tracking-[0.90px] w-full"
                          size="txtPlusJakartaSansExtraBold18"
                        >
                          <>
                            What is Threads? All your questions about
                            Instagram&#39;s New Platform
                          </>
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-2/5 md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            1 month ago | Editor
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex h-[58px] md:h-[98px] justify-end mt-10 relative w-[32%] sm:w-full">
                  <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[67px] mt-auto rounded-[50%] w-8"></div>
                  <Button
                    className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[380px] sm:min-w-full text-center text-lg"
                    shape="round"
                    color="amber_500_19"
                    size="xl"
                    variant="fill"
                  >
                    View All Trending Articles
                  </Button>
                </div>
                <Text
                  className="mt-11 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Featured Articles
                </Text>
              </div>
            </div>
          </div>
          <List
            className="absolute bottom-[0] sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-center mx-auto w-[85%]"
            orientation="horizontal"
          >
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col gap-[21px] items-center justify-start sm:ml-[0] py-[11px] rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle60_213x368.png"
                  alt="rectangleSixty"
                />
                <Text
                  className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  8 Ways AI Boosts Data Harvesting in Web Scraping
                </Text>
                <Text
                  className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-3 w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-full" />
                  <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                    <div className="flex flex-row items-end justify-evenly w-[31%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        April 20, 2023
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-evenly w-[26%]">
                      <Text
                        className="mt-1 text-amber-500 text-xs"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col gap-[21px] items-center justify-start sm:ml-[0] py-[11px] rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle61.png"
                  alt="rectangleSixtyOne"
                />
                <Text
                  className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                  Cybersecurity
                </Text>
                <Text
                  className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-3 w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-full" />
                  <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                    <div className="flex flex-row items-end justify-evenly w-[31%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        April 20, 2023
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-evenly w-[26%]">
                      <Text
                        className="mt-1 text-amber-500 text-xs"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col gap-[21px] items-center justify-start sm:ml-[0] py-[11px] rounded-[15px] w-full">
              <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle62.png"
                  alt="rectangleSixtyTwo"
                />
                <Text
                  className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                  Cybersecurity
                </Text>
                <Text
                  className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-3 w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-full" />
                  <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                    <div className="flex flex-row items-end justify-evenly w-[31%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                        size="txtPlusJakartaSansRomanRegular12"
                      >
                        April 20, 2023
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-evenly w-[26%]">
                      <Text
                        className="mt-1 text-amber-500 text-xs"
                        size="txtPlusJakartaSansRomanBold12"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Header4 className="absolute bg-black-900_33 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full" />
        </div>
        <List
          className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] mt-5 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle60_213x368.png"
                alt="rectangleSixty"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                8 Ways AI Boosts Data Harvesting in Web Scraping
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle61.png"
                alt="rectangleSixtyOne"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                Cybersecurity
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                Cybersecurity
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
        <div className="flex md:h-[110px] h-[58px] justify-end mt-[52px] md:px-5 relative w-[27%] sm:w-full">
          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[70px] mt-auto rounded-[50%] w-8"></div>
          <Button
            className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[385px] sm:min-w-full text-center text-lg"
            shape="round"
            color="amber_500_19"
            size="xl"
            variant="fill"
          >
            View All Featured Articles
          </Button>
        </div>
        <Text
          className="mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
          size="txtPlusJakartaSansExtraBold36"
        >
          Latest Articles
        </Text>
        <div className="md:gap-5 gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] min-h-[auto] mt-[35px] mx-auto md:px-5 w-full">
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle60_213x368.png"
                alt="rectangleSixty"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                8 Ways AI Boosts Data Harvesting in Web Scraping
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle61.png"
                alt="rectangleSixtyOne"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                Cybersecurity
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                Cybersecurity
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle60_213x368.png"
                alt="rectangleSixty"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                8 Ways AI Boosts Data Harvesting in Web Scraping
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle61.png"
                alt="rectangleSixtyOne"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                Cybersecurity
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col gap-[21px] items-center justify-start py-[11px] rounded-[15px] w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Img
                className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo"
              />
              <Text
                className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
                size="txtPlusJakartaSansRomanBold18"
              >
                Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                Cybersecurity
              </Text>
              <Text
                className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
                size="txtPlusJakartaSansRomanRegular12Gray500"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s,{" "}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-3 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Line className="bg-blue_gray-800_02 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-[31%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                      size="txtPlusJakartaSansRomanRegular12"
                    >
                      April 20, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-[26%]">
                    <Text
                      className="mt-1 text-amber-500 text-xs"
                      size="txtPlusJakartaSansRomanBold12"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:h-[106px] h-[58px] justify-end mt-12 md:px-5 relative w-1/4">
          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[57px] mt-auto rounded-[50%] w-8"></div>
          <Button
            className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[360px] text-center text-lg"
            shape="round"
            color="amber_500_19"
            size="xl"
            variant="fill"
          >
            View All Latest Articles
          </Button>
        </div>
        <div className="h-[422px] md:h-[470px] max-w-[1212px] mt-12 mx-auto md:px-5 relative w-full">
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
        <Footer className="flex items-center justify-center mt-12 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ArticlesPage;
