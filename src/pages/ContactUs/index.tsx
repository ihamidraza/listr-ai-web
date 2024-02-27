import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const ContactUsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="md:h-[1106px] h-[813px] md:px-5 relative w-full">
          <div className="md:h-[1106px] h-[813px] m-auto w-full">
            <Img
              className="h-[622px] object-cover"
              src="images/img_divelementorw.png"
              alt="divelementorw"
            />
            <div className="absolute md:h-[1106px] h-[813px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[813px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[77%]">
                <Text
                  className="md:text-5xl text-[64px] text-center text-white-A700"
                  size="txtPlusJakartaSansRomanSemiBold64"
                >
                  Contact Us
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[122px] w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[21%] md:w-full">
                      <div className="flex h-20 justify-end md:ml-[0] ml-[5px] relative w-20">
                        <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-11 mb-1.5 ml-auto mr-[11px] mt-auto rounded-[22px] w-1/2"></div>
                        <div className="absolute bg-amber-500_19 border border-amber-500 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto p-5 rounded-[50%] w-20">
                          <Img
                            className="h-10 w-10"
                            src="images/img_checkmark_white_a700_40x40.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtPlusJakartaSansRomanBold18">
                          Contact Us
                        </Text>
                      </a>
                    </div>
                    <Text
                      className="leading-[22.00px] text-center text-sm text-white-A700"
                      size="txtPlusJakartaSansRomanRegular14"
                    >
                      <span className="text-white-A700 font-plusjakartasans font-normal">
                        If you have any questions, complaints, or statements
                        about our Services, we ask that you please contact us by
                        sending a message to:{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-white-A700 font-plusjakartasans font-normal underline"
                      >
                        <>
                          info@listaraitool.com
                          <br />
                        </>
                      </a>
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[280px] md:h-px md:w-full w-px" />
                  <div className="flex flex-col gap-7 items-center justify-start">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-1/5 md:w-full">
                      <Img
                        className="h-20 w-20"
                        src="images/img_group328.svg"
                        alt="group328"
                      />
                      <Text
                        className="text-lg text-white-A700"
                        size="txtPlusJakartaSansRomanBold18"
                      >
                        Marketing
                      </Text>
                    </div>
                    <Text
                      className="leading-[22.00px] text-center text-sm text-white-A700 w-full"
                      size="txtPlusJakartaSansRomanRegular14"
                    >
                      For all your marketing-related inquiries, concerns, or
                      declarations regarding our Services, we invite you to
                      reach out to us by sending a message to:
                      marketing@listaraitool.com
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] mt-[27px] text-center text-sm text-white-A700 w-[52%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  To access our ListarAITool Slack community, please click the
                  link. This community is dedicated to marketing agencies and
                  SEO professionals, providing a platform for sharing articles,
                  backlinks, and more.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-16 md:h-[70px] justify-end mt-1.5 md:px-5 relative w-[18%]">
          <div className="backdrop-opacity-[0.5] bg-white-A700 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[82px] mt-auto rounded-[17px] w-[13%]"></div>
          <Button
            className="absolute border border-solid border-white-A700 capitalize cursor-pointer font-semibold h-full inset-[0] m-auto min-w-[250px] rounded-[7px] text-center text-lg"
            color="white_A700_19"
            size="2xl"
            variant="fill"
          >
            Join Slack Community
          </Button>
        </div>

      </div>
    </>
  );
};

export default ContactUsPage;
