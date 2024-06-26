import React from "react";

import { Button, Img, SubscribeForm, Text } from "components";

const SubmittoolOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans gap-[39px] items-center justify-start mx-auto w-full">
        <div
          className="h-[1237px] sm:h-[1292px] md:h-[854px] md:px-5 relative w-full"
          style={{ marginTop: 100 }}
        >
          <div className="absolute h-[1237px] sm:h-[1292px] md:h-[854px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[85%]">
              <div className="gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[17px] rounded-[15px] w-full">
                  <div className="flex flex-col items-start justify-start mb-[30px] mt-2 w-[98%] md:w-full">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtPlusJakartaSansRomanBold18"
                    >
                      Basic Plan
                    </Text>
                    <Text
                      className="mt-1 text-gray-500_01 text-xs tracking-[0.60px]"
                      size="txtPlusJakartaSansRomanSemiBold12Gray50001"
                    >
                      Submit Tool
                    </Text>
                    <div className="flex flex-row items-start justify-start mt-[5px] w-1/4 md:w-full">
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanSemiBold12Bluegray900"
                      >
                        $
                      </Text>
                      <Text
                        className="ml-[5px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                        size="txtPlusJakartaSansRomanBold26"
                      >
                        49.99
                      </Text>
                    </div>
                    <div className="md:h-[263px] h-[279px] mt-0.5 relative w-full">
                      <Text
                        className="absolute right-[2%] rotate-[90deg] md:text-5xl text-[86px] text-white-A700_0c top-[0]"
                        size="txtPlusJakartaSansRomanBold86"
                      >
                        Basic
                      </Text>

                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                            <Img
                              className="h-6 rounded-[50%] w-6"
                              src="images/img_checkmark_amber_500.svg"
                              alt="checkmark"
                            />
                            <Text
                              className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                              size="txtPlusJakartaSansRomanMedium12"
                            >
                              <>Submit one AI tool for listing</>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_close_red_600.svg"
                              alt="close"
                            />
                            <Text
                              className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                              size="txtPlusJakartaSansRomanMedium12"
                            >
                              <>
                                Tool will be featured on the website&#39;s
                                homepage on a rotating basis for 7 days
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-start justify-start mt-[15px] w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_close_red_600.svg"
                              alt="close_One"
                            />
                            <Text
                              className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                              size="txtPlusJakartaSansRomanMedium12"
                            >
                              Displaying the tool at the top of that category
                              for 7 days.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                            <Img
                              className="h-6 rounded-[50%] w-6"
                              src="images/img_checkmark_amber_500.svg"
                              alt="checkmark"
                            />
                            <Text
                              className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                              size="txtPlusJakartaSansRomanMedium12"
                            >
                              <>Standard support</>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-500_01 text-xs top-[1%] tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanRegular12Gray50001"
                      >
                        One Time Free
                      </Text>
                      <Button
                        className=" cursor-pointer font-bold inset-x-[0] leading-[normal] mt-[60px] w-[100%] mx-auto rounded-[7px] text-center text-lg top-[18%]"
                        color="amber_500"
                        size="md"
                        variant="fill"
                      >
                        Select Plan
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid md:h-[412px] h-[436px] p-[3px] relative rounded-[15px] w-full">
                  <Text
                    className="absolute h-max inset-y-[0] my-auto right-[5%] rotate-[90deg] md:text-5xl text-[86px] text-white-A700_0c"
                    size="txtPlusJakartaSansRomanBold86"
                  >
                    Featured
                  </Text>
                  <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[90%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-2.5 items-end justify-start w-[62%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_close_red_600.svg"
                          alt="close_Two"
                        />
                        <Text
                          className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          Submit one AI tool for listing.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          <>
                            Tool will be featured on the website&#39;s homepage
                            on a rotating basis for 7 days
                          </>
                        </Text>
                      </div>

                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          <>
                            Displaying the tool at the top of that category for
                            7 days
                          </>
                        </Text>
                      </div>

                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          <>Standard support</>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col items-start justify-start left-[5%] top-[6%] w-[32%]">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtPlusJakartaSansRomanBold18"
                    >
                      Featured Plan
                    </Text>
                    <Text
                      className="mt-1 text-gray-500_01 text-xs tracking-[0.60px]"
                      size="txtPlusJakartaSansRomanSemiBold12Gray50001"
                    >
                      Featured Tool
                    </Text>
                    <div className="flex flex-row items-start justify-start mt-[5px] w-[71%] md:w-full">
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanSemiBold12Bluegray900"
                      >
                        $
                      </Text>
                      <Text
                        className="ml-[5px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                        size="txtPlusJakartaSansRomanBold26"
                      >
                        99.99
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[13px] mt-1 text-gray-500_01 text-xs tracking-[0.60px]"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      One Time Free
                    </Text>
                  </div>
                  <Button
                    className=" cursor-pointer font-bold inset-x-[0] leading-[normal] ml-[20px] mt-[170px] w-[90%] mx-auto rounded-[7px] text-center text-lg top-[18%]"
                    color="amber_500"
                    size="md"
                    variant="fill"
                  >
                    Select Plan
                  </Button>
                </div>
                <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[17px] rounded-[15px] w-full">
                  <div className="flex flex-col items-start justify-start mb-[31px] mt-[7px] w-[98%] md:w-full">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtPlusJakartaSansRomanBold18"
                    >
                      Standard Plan
                    </Text>
                    <Text
                      className="mt-1 text-gray-500_01 text-xs tracking-[0.60px]"
                      size="txtPlusJakartaSansRomanSemiBold12Gray50001"
                    >
                      Submit Tool & Featured Tool
                    </Text>
                    <div className="flex flex-row items-start justify-start mt-[5px] w-[28%] md:w-full">
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanSemiBold12Bluegray900"
                      >
                        $
                      </Text>
                      <Text
                        className="ml-[5px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                        size="txtPlusJakartaSansRomanBold26"
                      >
                        129.99
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[13px] mt-1 text-gray-500_01 text-xs tracking-[0.60px]"
                      size="txtPlusJakartaSansRomanRegular12Gray50001"
                    >
                      One Time Free
                    </Text>
                    {/* <div className="bg-amber-500 flex flex-col items-center justify-end ml-6 md:ml-[0] mt-[31px] p-2.5 rounded-[7px]"> */}
                    <Button
                      className=" cursor-pointer font-bold inset-x-[0] leading-[normal] ml-[20px] mt-[40px] w-[90%] mx-auto rounded-[7px] text-center text-lg top-[18%]"
                      color="amber_500"
                      size="md"
                      variant="fill"
                    >
                      Select Plan
                    </Button>
                    <div className="flex flex-col items-start justify-start mt-[31px] w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          <>Submit one AI tool for listing</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          <>
                            Tool will be featured on the website&#39;s homepage
                            on a rotating basis for 7 days
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          <>
                            Displaying the tool at the top of that category for
                            7 days
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[11px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="sm:flex-1 leading-[16.00px] text-white-A700 text-xs tracking-[0.60px] w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          <>Standard support</>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[813px] inset-x-[0] mx-auto top-[0] w-full">
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
                <div className="absolute bottom-[8%] flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto w-[85%]">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 tracking-[1.80px]"
                    size="txtPlusJakartaSansExtraBold36"
                  >
                    Submit AI Tool
                  </Text>
                  <Text
                    className="leading-[16.00px] text-center text-white-A700 text-xs tracking-[0.60px] w-[80%] sm:w-full"
                    size="txtPlusJakartaSansRomanSemiBold12"
                  >
                    <>
                      Welcome to Listar.ai! We&#39;re a platform that focuses on
                      promoting and sharing the latest and greatest AI tools.
                      We&#39;re super excited to give you the opportunity to
                      showcase your tool to our users. Here&#39;s how you can
                      submit your tool to be featured on our website:
                    </>
                  </Text>
                  <div className="bg-black-900_33 border border-blue_gray-900 border-solid md:h-[331px] h-[445px] pb-[25px] sm:pl-5 pl-[25px] relative rounded-[15px] w-full">
                    <Text
                      className="mt-[50%] right-[12%] rotate-[90deg] md:text-5xl text-[130px] text-gray-900_7f"
                      size="txtPlusJakartaSansRomanBold130"
                    >
                      Free
                    </Text>
                    <div className="absolute flex flex-col items-start justify-start left-[6%] top-[7%] w-[15%]">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtPlusJakartaSansRomanBold18"
                      >
                        Free Plan
                      </Text>
                      <Text
                        className="mt-2 text-white-A700 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanSemiBold12"
                      >
                        Submit Tool & Featured Tool
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-start ml-1 md:ml-[0] mt-2.5 w-[67%] md:w-full">
                        <Text
                          className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                          size="txtPlusJakartaSansRomanBold22"
                        >
                          $
                        </Text>
                        <Text
                          className="mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                          size="txtPlusJakartaSansRomanBold36"
                        >
                          0.00
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[33px] mt-0.5 text-gray-500_01 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanSemiBold12Gray50001"
                      >
                        Increase visibility
                      </Text>
                    </div>
                    <div className="absolute flex md:flex-col flex-row gap-2.5 h-max inset-y-[0] items-start justify-start left-[6%] my-auto rounded-[15px] w-[83%]">
                      <Img
                        className="h-6 rounded-[50%] w-6"
                        src="images/img_checkmark_amber_500.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="leading-[16.00px] md:mt-0 mt-1 text-white-A700 text-xs tracking-[0.60px] w-[97%] sm:w-full"
                        size="txtPlusJakartaSansRomanMedium12"
                      >
                        Write a post about Listr.ai. For example, share your
                        experience with our tool, describe a certain feature you
                        like, or share your thoughts on who can use an AI tools
                        library.
                      </Text>
                    </div>
                    <div className="absolute bottom-1/4 flex flex-col gap-5 items-start justify-start left-[6%] w-[76%]">
                      <div className="flex sm:flex-col flex-row gap-2.5 items-end justify-start rounded-[12px] w-[62%] md:w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark_One"
                        />
                        <Text
                          className="mb-0.5 sm:mt-0 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          Share it on any of your social networks: LinkedIn,
                          Instagram, Facebook, or Twitter (X).
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-2.5 items-end justify-start rounded-[12px] w-full">
                        <Img
                          className="h-6 rounded-[50%] w-6"
                          src="images/img_checkmark_amber_500.svg"
                          alt="checkmark_Two"
                        />
                        <Text
                          className="mb-0.5 md:mt-0 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                          size="txtPlusJakartaSansRomanMedium12"
                        >
                          Wait for some time to collect at least 15k impressions
                          (For Submit tool) & 20k impressions (For Submit tool +
                          feature on home page) that post.
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[16%] flex md:flex-col flex-row gap-2.5 items-end justify-start left-[6%] rounded-[12px] w-[82%]">
                      <Img
                        className="h-6 rounded-[50%] w-6"
                        src="images/img_checkmark_amber_500.svg"
                        alt="checkmark_Three"
                      />
                      <Text
                        className="mb-0.5 md:mt-0 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanMedium12"
                      >
                        <>
                          Share the link to the post that includes the
                          performance numbers to mail on
                          marketing@listaraitool.com by the end of the
                          offer&#39;s due date - 30 Nov 2023.
                        </>
                      </Text>
                    </div>
                    <div className="absolute bottom-[6%] flex md:flex-col flex-row gap-2.5 items-end justify-start left-[6%] rounded-[12px] w-[63%]">
                      <Img
                        className="h-6 rounded-[50%] w-6"
                        src="images/img_checkmark_amber_500.svg"
                        alt="checkmark_Four"
                      />
                      <Text
                        className="mb-0.5 md:mt-0 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                        size="txtPlusJakartaSansRomanMedium12"
                      >
                        Once your post is approved by our team, your tool will
                        be added or featured for next 30 days as per your
                        impressions.
                      </Text>
                    </div>
                    <div className="absolute bg-amber-500 mt-[60px] border-2 border-solid border-white-A700 flex flex-col items-end justify-start p-[11px] right-[0] rotate-[-20deg] rounded-[15px] top-[0] mr-[50px] w-[199px]">
                      <Text
                        className="mb-[10px] mt-[7px] mr-[7px] text-gray-900_05 text-lg"
                        size="txtPlusJakartaSansRomanBold18Gray90005"
                      >
                        RECOMMENDED
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="absolute bottom-[0] right-[9%] rotate-[90deg] md:text-5xl text-[86px] text-white-A700_0c"
            size="txtPlusJakartaSansRomanBold86"
          >
            Standard
          </Text>
        </div>
        <Text
          className="text-white-A700 text-xs w-[80%]"
          size="txtPlusJakartaSansRomanMedium12"
        >
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan lectus vitae mollis volutpat. Praesent pharetra quis neque
            sed facilisis. Pellentesque id nisi eu lorem volutpat lobortis sed
            vel eros. Vivamus eget pellentesque metus, ut elementum velit.
            Nullam non est sed nibh bibendum venenatis interdum ut purus.
            Vestibulum sed sapien non odio consequat aliquet. Vivamus sit amet
            nisi mattis, mollis sem blandit, commodo lectus. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Praesent eu tincidunt ex. Curabitur ullamcorper lobortis lorem et
            semper.
            <br />
            Donec feugiat fermentum odio, a condimentum lacus molestie a. Cras a
            tortor nibh. Pellentesque id eros odio. Morbi ultricies id nisl
            tincidunt pretium. Nam imperdiet ac purus at rhoncus. Nunc aliquet
            turpis arcu, in sodales orci tempor non. Curabitur tempor id dolor
            eget rhoncus. Maecenas sed lorem sit amet purus egestas facilisis ut
            eget diam. Ut sed ex et nisi egestas faucibus.
            <br />
            Morbi sit amet lectus eu turpis convallis faucibus. Praesent
            suscipit magna vel sapien convallis, in facilisis nisi efficitur.
            Mauris vel bibendum purus. Suspendisse volutpat turpis vel neque
            rhoncus facilisis. Donec porttitor tincidunt ullamcorper. Donec
            euismod quis sapien sed molestie. Sed semper, nisi ut lacinia
            gravida, augue neque porttitor magna, ut ullamcorper lectus lacus
            non nisl. Etiam scelerisque sem ipsum, eu venenatis neque commodo
            at. Aliquam sodales, arcu eu volutpat imperdiet, nisl tellus
            lobortis diam, vel laoreet mauris ligula eget quam. Donec venenatis
            mi pellentesque, congue urna eget, pharetra eros. Morbi id augue
            sem. Aliquam erat volutpat. Nullam ac nulla non magna malesuada
            semper. Vestibulum neque lorem, tempor eget pretium vitae, iaculis
            vel mi. Nulla at dolor et velit commodo malesuada.
            <br />
            Duis arcu nunc, iaculis sed fermentum eu, fermentum quis est. Fusce
            mattis purus nulla, id luctus ligula placerat a. Sed id justo sed
            dolor mollis convallis vitae sed elit. Donec elementum erat eros,
            vitae iaculis ligula lacinia quis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam iaculis tempus augue vitae laoreet. Morbi at laoreet enim.
            Sed quis justo cursus, volutpat tortor id, hendrerit sapien.
            Suspendisse potenti. Nulla id turpis sem.
            <br />
            Mauris commodo tincidunt ligula, vitae facilisis leo euismod
            euismod. Praesent rhoncus, mi non sagittis consequat, est libero
            volutpat risus, in imperdiet erat libero vel massa. Nullam a tortor
            nec orci blandit interdum. Phasellus laoreet massa erat, quis
            eleifend nisi scelerisque ac. Mauris accumsan ligula in felis
            blandit, et ullamcorper arcu fermentum. Donec vulputate molestie
            eros, eget efficitur metus euismod non. Sed tempus convallis
            finibus. Nam quis neque eu quam bibendum rutrum in ac magna. Quisque
            ornare accumsan urna sit amet ornare. Donec interdum urna sit amet
            neque vulputate, non porta est efficitur. Praesent auctor bibendum
            bibendum. In viverra pellentesque ante eu feugiat. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas nec volutpat purus.
          </>
        </Text>
        <SubscribeForm />
      </div>
    </>
  );
};

export default SubmittoolOnePage;
