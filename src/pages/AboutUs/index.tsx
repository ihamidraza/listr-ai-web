import React from "react";

import { Img, Text } from "components";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans gap-[39px] items-center justify-start mx-auto w-full">
        <div className="md:h-[813px] h-[904px] md:px-5 relative w-full"
        style={{ marginTop: 100 }}
        >
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
              <div className="absolute flex flex-col gap-[58px] inset-x-[0] items-center justify-start mx-auto top-[22%]">
                <Text
                  className="md:text-5xl text-[64px] text-center text-white-A700"
                  size="txtPlusJakartaSansRomanSemiBold64"
                >
                  About Us
                </Text>
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular18"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&#39;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </>
                </Text>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[0] flex flex-col font-montserrat h-[373px] md:h-auto items-center justify-start left-[14%] rounded-[20px] shadow-bs1 w-[328px]">
            <div className="bg-black-900_33 border border-blue_gray-800_02 border-solid flex flex-col items-center justify-start rounded-[20px] shadow-bs2 w-[328px]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[231px] md:h-auto object-cover w-full"
                  src="images/img_cover.png"
                  alt="cover"
                />
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-start p-[30px] sm:px-5 w-[232px]">
                <Text
                  className="text-base text-center text-white-A700 tracking-[0.10px] w-auto"
                  size="txtMontserratBold16"
                >
                  Avie Beaton
                </Text>
                <Text
                  className="text-blue_gray-600_02 text-center text-sm tracking-[0.20px] w-auto"
                  size="txtMontserratSemiBold14"
                >
                  CO Founder
                </Text>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_facebook_amber_500.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_antdesigninstagramoutlined.svg"
                    alt="antdesigninstag"
                  />
                  <Img
                    className="h-[19px] w-6"
                    src="images/img_antdesigntwitteroutlined.svg"
                    alt="antdesigntwitte"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-montserrat h-[373px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs1 w-[329px]">
            <div className="bg-black-900_33 border border-blue_gray-800_02 border-solid flex flex-col items-center justify-start rounded-[20px] w-[328px]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[231px] md:h-auto object-cover w-full"
                  src="images/img_cover_231x328.png"
                  alt="cover_One"
                />
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-start p-[30px] sm:px-5 w-[232px]">
                <Text
                  className="text-base text-center text-white-A700 tracking-[0.10px] w-auto"
                  size="txtMontserratBold16"
                >
                  Ben Jonson
                </Text>
                <Text
                  className="text-blue_gray-600_02 text-center text-sm tracking-[0.20px] w-auto"
                  size="txtMontserratSemiBold14"
                >
                  Consultant
                </Text>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_facebook_amber_500.svg"
                    alt="facebook_One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_antdesigninstagramoutlined.svg"
                    alt="antdesigninstag_One"
                  />
                  <Img
                    className="h-[19px] w-6"
                    src="images/img_antdesigntwitteroutlined.svg"
                    alt="antdesigntwitte_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-montserrat h-[373px] md:h-auto items-center justify-start right-[14%] shadow-bs1 w-[329px]">
            <div className="bg-black-900_33 border border-blue_gray-800_02 border-solid flex flex-col items-center justify-start rounded-[20px] w-[328px]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[231px] md:h-auto object-cover w-full"
                  src="images/img_cover_1.png"
                  alt="cover_Two"
                />
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-start p-[30px] sm:px-5 w-[232px]">
                <Text
                  className="text-base text-center text-white-A700 tracking-[0.10px] w-auto"
                  size="txtMontserratBold16"
                >
                  Ashley Fletcher
                </Text>
                <Text
                  className="text-blue_gray-600_02 text-center text-sm tracking-[0.20px] w-auto"
                  size="txtMontserratSemiBold14"
                >
                  CEO
                </Text>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_facebook_amber_500.svg"
                    alt="facebook_Two"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_antdesigninstagramoutlined.svg"
                    alt="antdesigninstag_Two"
                  />
                  <Img
                    className="h-[19px] w-6"
                    src="images/img_antdesigntwitteroutlined.svg"
                    alt="antdesigntwitte_Two"
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

export default AboutUsPage;
