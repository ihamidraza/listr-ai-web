import React from "react";


import { Img, Input, Text } from "components";
import { useNavigate } from "react-router-dom";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const Footer: React.FC<FooterProps> = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <footer className={props.className}>
        <div className="bg-black-900 flex flex-col items-center justify-center pt-[43px] md:px-10 sm:px-5 px-[43px] w-full" >
          <div className="flex flex-col gap-[47px] items-center justify-center w-[90%] md:w-full" >
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start w-[21%] md:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtPlusJakartaSansExtraBold26"
                  >
                    Listr.ai
                  </Text>
                  <Text
                    className="leading-[25.00px] text-gray-500 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,{" "}
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start w-[69%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtPlusJakartaSansExtraBold26"
                  >
                    Follow Us
                  </Text>
                  <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                    <div className="flex flex-col h-8 items-end justify-start p-1 w-8">
                      <Img
                        className="h-6 mr-[5px]"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </div>
                    <div className="flex flex-col h-8 items-center justify-end p-[3px] w-8">
                      <Img
                        className="h-6 w-6"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </div>
                    <div className="flex flex-col h-8 items-center justify-start p-0.5 w-8">
                      <Img
                        className="h-[21px] my-0.5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                    </div>
                    <Img
                      className="h-8 w-8"
                      src="images/img_info.svg"
                      alt="info"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[44%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-[53px] items-end justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-6 items-center justify-start w-[29%] sm:w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtPlusJakartaSansExtraBold26"
                    >
                      Useful Links
                    </Text>
                    <ul className="flex flex-col gap-5 items-start justify-start w-full common-column-list">
                      <li
                      onClick={() => navigate('/')}>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                        >
                          Home
                        </Text>
                      </li>
                      <li
                      onClick={() => navigate('/aiToolMapper')}
                      
                      >
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                        >
                          AI Tool Mapper
                        </Text>
                      </li>
                      <li
                      onClick={() => navigate('/aiToolsCategory')}
                      >
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                        >
                          Ai Tools Category
                        </Text>
                      </li>
                      <li
                      onClick={() => navigate('/customAISolutions')}
                      
                      >
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                        >
                          Custom AI Solutions
                        </Text>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex md:flex-1 flex-col items-start justify-start sm:mt-0 mt-[57px] w-[61%] md:w-full common-column-list">
                    <li
                    
                    >
                      <div className="flex flex-row items-start justify-between">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                          onClick={() => navigate('/aboutUs')}

                        >
                          About Us
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                          onClick={() => navigate('/login')}

                        >
                          Sign In / Register
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row items-center justify-between mt-[17px]">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                          onClick={() => navigate('/contactUs')}

                        >
                          Contact Us
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                          onClick={() => navigate('/submitTool')}

                        >
                          Submit AI Tool
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row items-center justify-between mt-5">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                        >
                          Sitemap
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                        >
                          Blog
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row items-center justify-between mt-[17px]">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                          onClick={() => navigate('/termsConditions')}

                        >
                          Terms & Condition
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPlusJakartaSansRomanMedium16"
                        >
                          Advertise With Us
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[32%] md:w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtPlusJakartaSansExtraBold26"
                >
                  Subscribe
                </Text>
                <Text
                  className="leading-[25.00px] mt-[22px] text-gray-500 text-xs w-[99%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular12Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,{" "}
                  </>
                </Text>
                <Input
                  name="group374"
                  placeholder="Email Address"
                  className="!placeholder:text-gray-500 !text-gray-500 font-plusjakartasans p-0 text-left text-xs w-full"
                  wrapClassName="border border-blue_gray-900 border-solid flex mt-[37px] rounded-[28px] w-full"
                  suffix={
                    <Img
                      className="h-8 ml-[35px] my-auto"
                      src="images/img_save.svg"
                      alt="save"
                    />
                  }
                  color="black_900_33"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <Text
              className="bg-gray-900 h-[50px] justify-center max-w-[1213px] md:max-w-full pb-[15px] pt-[18px] sm:px-5 px-[35px] text-white-A700 text-xs w-full"
              size="txtPlusJakartaSansRomanRegular12"
            >
              <span className="text-white-A700 font-plusjakartasans text-left font-normal">
                Copyright © All Rights Reserved bylistraitools
              </span>
              <span className="text-white-A700 font-plusjakartasans text-left font-normal">
                .com
              </span>
              <span className="text-white-A700 font-plusjakartasans text-left font-normal">
                {" "}
                Team.
              </span>
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
