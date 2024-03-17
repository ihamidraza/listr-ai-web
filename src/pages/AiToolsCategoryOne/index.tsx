import React, { useState } from "react";
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Button, CheckBox, Img, Input, Text, SubscribeForm } from "components";
import AiToolsCategoryfilterModal from "modals/AiToolsCategoryfilter";


const newOptionsList = [
  {
    label: <div className="flex flex-row gap-2.5 items-end justify-start w-full">
      <Img
        className="h-6 w-6"
        src="images/img_checkmark_white_a700_24x24.svg"
        alt="checkmark"
      />
      <Text
        className="text-sm text-white-A700"
        size="txtPlusJakartaSansRomanMedium14WhiteA700"
      >
        Verified
      </Text>
    </div>, value: "option1"
  },
  { label:  <div className="flex flex-row gap-2.5 items-end justify-start w-full">
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
</div>, value: "option2" },
  { label:  <div className="flex flex-row gap-2.5 items-start justify-start w-[76%] md:w-full">
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
</div>, value: "option3" },
];

const AiToolsCategoryOnePage: React.FC = () => {

  const navigate = useNavigate()

  const [modal, toggleModal] = useState(false)
  return (
    <>

    <AiToolsCategoryfilterModal modal={modal} toggleModal={toggleModal} />

      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full" style={{ marginTop: 100 }}>
          <div className="md:h-[813px] h-[817px] md:px-5 relative w-full">
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
                  <div className="flex md:flex-col flex-row gap-[39px] items-center mt-[46px] w-full" style={{ marginLeft: '20vw' }}>
                    <Input
                      name="group320"
                      placeholder="Search for tools…"
                      className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-900 border-solid md:flex-1 md:mt-0 my-1.5 rounded-[15px] md:w-full"
                      color="black_900_33"
                      size="lg"
                      variant="fill"
                      style={{ width: '40vw' }}
                    ></Input>
                    <div className="flex h-[70px] justify-end relative w-[9%] md:w-full">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[37px] mb-1.5 ml-auto mr-[15px] mt-auto rounded-[18px] w-[37px]"></div>
                      <Button
                        className="absolute bg-amber-500_19 border border-amber-500 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto px-5 py-[15px] rounded-[15px] w-auto"
                      >

                        <Img
                          className="h-10 w-20"
                          src="images/img_save_white_a700.svg"
                          alt="save"
                        />
                      </Button>
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
                      onClick={() => navigate('/aiToolMapper')}
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
                      onClick={() => navigate('/aiToolsCategories')}
                    >
                      <div className="font-medium text-left text-sm">
                        View All Categories
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px] w-max"
              size="txtPlusJakartaSansExtraBold36"
            >
              AI Tools List
            </Text>

          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1214px] mt-[47px] mx-auto md:px-5 w-full">
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
              onClick={() => toggleModal(true)}
            >
              <div className="font-medium text-left text-sm">Filters</div>
            </Button>
            <Select
              placeholder='Select Tools'
              size='large'
              options={newOptionsList}
              style={{ width: 250 }}
            />
            {/* <SelectBox
              className="!text-white-A700 border border-blue_gray-900 border-solid sm:flex-1 font-medium text-left text-sm w-[11%] sm:w-full"
              placeholderClassName="!text-white-A700"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_white_a700_24x24.svg"
                  alt="arrow_down"
                />
              }
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
            /> */}
          </div>
          <div className="md:gap-5 gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] min-h-[auto] mt-[30px] mx-auto md:px-5 w-full">
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
          </div>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default AiToolsCategoryOnePage;
