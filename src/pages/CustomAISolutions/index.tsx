import React from "react";

import {
  Button,
  CheckBox,
  FAQs,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatAreTheBenefitsOfUsingTheListrAiToolOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const howCanBusinessesAndIndividualsUseTheListrAiToolForAiDevelopmentOptionsList =
  [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

const CustomAISolutionsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div
            className="flex flex-col md:px-5 relative w-full"
            style={{ marginTop: 100 }}
          >
            <div className="h-[813px] mx-auto w-full">
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
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[23%] w-[55%]">
                  <Text
                    className="leading-[70.00px] md:text-5xl text-[64px] text-center text-white-A700 w-full"
                    size="txtPlusJakartaSansRomanSemiBold64"
                  >
                    We Build Custom AI Tools for Businesses
                  </Text>
                  <Text
                    className="leading-[22.00px] mt-[25px] text-center text-sm text-white-A700 w-[72%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    We engineer and build practical AI solutions specific to
                    your needs- from tailor made chatbots to complex automations
                    that leverage the latest in AI technology.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-center mt-10 w-[52%] md:w-full">
                    <div className="flex h-16 justify-end relative w-2/5 sm:w-full">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-9 mt-auto rounded-[17px] w-[21%]"></div>
                      <Button
                        className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[158px] text-center text-lg"
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        Contact Us
                      </Button>
                    </div>
                    <div className="flex h-16 justify-end relative w-[54%] sm:w-full">
                      <div className="backdrop-opacity-[0.5] bg-white-A700 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[65px] mt-auto rounded-[17px] w-[15%]"></div>
                      <Button
                        className="absolute border border-solid border-white-A700 capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[215px] text-center text-lg"
                        shape="round"
                        color="white_A700_19"
                        size="2xl"
                        variant="fill"
                      >
                        Free Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900_01 border border-blue_gray-800_02 border-solid flex flex-col gap-[21px] justify-end mt-[-257px] mx-auto rounded-[15px] w-[72%] z-[1]">
              <Img
                className="h-3.5 md:ml-[0] ml-[33px] mr-[924px] mt-5"
                src="images/img_grid.svg"
                alt="grid"
              />
              <Img
                className="h-[499px] sm:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1214px] mt-[47px] mx-auto md:px-5 w-full">
            <Text
              className="leading-[45.00px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
              size="txtPlusJakartaSansExtraBold36"
            >
              Supercharge Your Business Operations with AI
            </Text>
            <Text
              className="leading-[22.00px] text-sm text-white-A700"
              size="txtPlusJakartaSansRomanRegular14"
            >
              At AI Scout Solutions, we offer full-stack AI development and
              setup and manage end-to-end AI services tailored to your specific
              business needs. From creating scalable AI systems to automating
              workflows, we prioritize your business efficiency.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1213px] mt-[67px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded-[15px] w-full">
              <div className="flex flex-col h-[120px] items-center justify-start w-[120px]">
                <Img
                  className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                  src="images/img_83800761.png"
                  alt="83800761"
                />
              </div>
              <Text
                className="mt-[26px] text-lg text-white-A700"
                size="txtPlusJakartaSansRomanBold18"
              >
                Custom GPT Chatbots
              </Text>
              <Text
                className="leading-[22.00px] mt-[17px] text-center text-sm text-white-A700 w-full"
                size="txtPlusJakartaSansRomanRegular14"
              >
                We utilize AI models like ChatGPT trained on your business data.
                Our chatbots handle basic queries and manage complex flows and
                tasks, such as booking appointments. Perfectly integrated with
                your existing systems, they reflect your brand voice and provide
                24/7 AI customer support.
              </Text>
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[17px] w-[64%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[222px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="2xl"
                  variant="outline"
                >
                  <div className="capitalize font-semibold text-left text-lg">
                    Contact Us
                  </div>
                </Button>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded-[15px] w-full">
              <div className="flex flex-col h-[120px] items-center justify-start w-[120px]">
                <Img
                  className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                  src="images/img_63065071.png"
                  alt="63065071"
                />
              </div>
              <Text
                className="mt-[26px] text-lg text-white-A700"
                size="txtPlusJakartaSansRomanBold18"
              >
                Internal AI Tools
              </Text>
              <Text
                className="leading-[22.00px] mt-[17px] text-center text-sm text-white-A700 w-full"
                size="txtPlusJakartaSansRomanRegular14"
              >
                Revolutionize your internal tools with our AI customization
                services. We integrate Large Language Models (LLMs) with your
                existing tech-stack, workflows, and data, creating powerful,
                tailor-made applications that enhance decision-making, automate
                complex tasks,
              </Text>
              <div className="flex flex-col items-center justify-start mb-[11px] mt-[17px] w-[64%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[222px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="2xl"
                  variant="outline"
                >
                  <div className="capitalize font-semibold text-left text-lg">
                    Contact Us
                  </div>
                </Button>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[15px] w-full">
              <div className="flex flex-col h-[120px] items-center justify-start mt-1 w-[120px]">
                <Img
                  className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                  src="images/img_80179451.png"
                  alt="80179451"
                />
              </div>
              <Text
                className="mt-7 text-lg text-white-A700"
                size="txtPlusJakartaSansRomanBold18"
              >
                AI Automation for Repetitive Tasks
              </Text>
              <Text
                className="leading-[22.00px] mt-[15px] text-center text-sm text-white-A700 w-[99%] sm:w-full"
                size="txtPlusJakartaSansRomanRegular14"
              >
                Streamline your operations like never before with our repetitive
                task automation services. Eliminate the need for manual tasks,
                significantly increasing your operational efficiency, reducing
                errors, and freeing up your team to focus on strategic areas.
              </Text>
              <div className="flex flex-col items-center justify-start mb-3.5 mt-[39px] w-[63%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[222px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="2xl"
                  variant="outline"
                >
                  <div className="capitalize font-semibold text-left text-lg">
                    Contact Us
                  </div>
                </Button>
              </div>
            </div>
          </List>
          <div className="bg-gradient1  border border-blue_gray-900 border-solid flex flex-col items-center justify-end max-w-[1213px] mt-[87px] mx-auto p-10 md:px-5 rounded-[15px] w-full">
            <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                size="txtPlusJakartaSansExtraBold36"
              >
                Need a custom solution?
              </Text>
              <Text
                className="leading-[22.00px] mt-2 text-center text-sm text-white-A700 w-full"
                size="txtPlusJakartaSansRomanRegular14"
              >
                Connect with us today for a complimentary consultation! Discover
                how our AIOps team can create practical, AI solutions customized
                to your specific business needs.
              </Text>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-center mt-[30px] w-[74%] md:w-full">
                <div className="flex h-16 justify-end relative w-2/5 sm:w-full">
                  <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-9 mt-auto rounded-[17px] w-[21%]"></div>
                  <Button
                    className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[158px] text-center text-lg"
                    shape="round"
                    color="amber_500_19"
                    size="2xl"
                    variant="fill"
                  >
                    Contact Us
                  </Button>
                </div>
                <div className="flex h-16 justify-end relative w-[54%] sm:w-full">
                  <div className="backdrop-opacity-[0.5] bg-white-A700 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[65px] mt-auto rounded-[17px] w-[15%]"></div>
                  <Button
                    className="absolute border border-solid border-white-A700 capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[215px] text-center text-lg"
                    shape="round"
                    color="white_A700_19"
                    size="2xl"
                    variant="fill"
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[453px] mt-[54px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Benefits of Implementing AI
          </Text>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start max-w-[1213px] mt-6 mx-auto md:px-5 w-full">
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex md:flex-1 flex-col items-center justify-end p-[19px] rounded-[15px] w-[33%] md:w-full">
              <Img
                className="h-[98px] md:h-auto mt-[39px] object-cover w-[51%] sm:w-full"
                src="images/img_fpdl1.png"
                alt="fpdlOne"
              />
              <Text
                className="mt-[50px] text-lg text-white-A700"
                size="txtPlusJakartaSansRomanBold18"
              >
                Streamline Processes
              </Text>
              <Text
                className="leading-[22.00px] mb-[3px] mt-[9px] text-center text-sm text-white-A700 w-full"
                size="txtPlusJakartaSansRomanRegular14"
              >
                Leverage AI to design custom internal tools that can make sense
                of your data and optimize your workflows, enhancing
                decision-making and efficiency.
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[23px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-end p-[19px] rounded-[15px] w-full">
                <Img
                  className="h-[105px] md:h-auto mt-9 object-cover w-[28%] sm:w-full"
                  src="images/img_m003t0641cclipboard14oct22.png"
                  alt="m003t0641cclipb"
                />
                <Text
                  className="mt-[46px] text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Automate Routine Tasks
                </Text>
                <Text
                  className="leading-[22.00px] mb-[25px] mt-[9px] text-center text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  <>
                    Free up your team&#39;s time by automating repetitive tasks
                    with our AI-powered solutions, allowing you to focus on
                    strategic aspects of your business.
                  </>
                </Text>
              </div>
              <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-end p-[13px] rounded-[15px] w-full">
                <Img
                  className="h-[105px] md:h-auto mt-[42px] object-cover w-[38%] sm:w-full"
                  src="images/img_m003t0641cclipboard14oct22_105x138.png"
                  alt="m003t0641cclipb"
                />
                <Text
                  className="mt-[46px] text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Unlock Data Potential
                </Text>
                <Text
                  className="leading-[22.00px] mb-[31px] mt-[9px] text-center text-sm text-white-A700 w-[97%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  Tap into the full potential of your vast data resources with
                  our AI-driven solutions that offer predictive insights and
                  personalized recommendations.
                </Text>
              </div>
            </List>
          </div>
          <Text
            className="md:ml-[0] ml-[409px] mt-14 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            We Provide End-to-End Service
          </Text>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[365px] mt-[54px] p-[15px] md:px-5 rounded-[15px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mb-[33px] mt-[17px] w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[62px] rounded-[50%] text-center text-gray-900 text-lg w-12   flex-shrink-0"
                size="txtPlusJakartaSansRomanBold18Gray900"
              >
                1
              </Text>
              <div className="flex flex-col gap-[9px] items-start justify-start md:mt-0 mt-[11px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Free Consultation
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  We begin with an exploratory discussion where we aim to
                  understand your business, its operations, existing technology
                  stack, and key pain points. We also delve into your strategic
                  goals to ensure our solutions align with your long-term
                  vision.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[365px] mt-5 p-[15px] md:px-5 rounded-[15px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mb-[33px] mt-[17px] w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[62px] rounded-[50%] text-center text-gray-900 text-lg w-12  flex-shrink-0"
                size="txtPlusJakartaSansRomanBold18Gray900"
              >
                2
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start md:mt-0 mt-[13px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Opportunity Identification
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  Using our deep understanding of your business, we identify
                  areas where AI and automation can bring significant value. We
                  prioritize opportunities based on potential impact,
                  feasibility, and alignment with your business goals.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[365px] mt-5 p-[15px] md:px-5 rounded-[15px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mb-[33px] mt-[17px] w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[62px] rounded-[50%] text-center text-gray-900 text-lg w-12  flex-shrink-0"
                size="txtPlusJakartaSansRomanBold18Gray900"
              >
                3
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start md:mt-0 mt-[13px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Solution Design
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  Once opportunities are identified, our team of AI experts and
                  developers get to work on designing the right solution. This
                  involves conceptualizing the AI model or automation system,
                  defining how it integrates with existing processes, and
                  planning for scalability.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[365px] mt-5 p-[15px] md:px-5 rounded-[15px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mb-[33px] mt-[17px] w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[62px] rounded-[50%] text-center text-gray-900 text-lg w-12  flex-shrink-0"
                size="txtPlusJakartaSansRomanBold18Gray900"
              >
                4
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start md:mt-0 mt-[13px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Development & Testing
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  We employ agile development practices to ensure rapid and
                  quality solution delivery. Throughout the process, we maintain
                  regular communication with you. Thorough testing is performed
                  to guarantee the functionality and robustness of the solution.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[365px] mt-5 p-[15px] md:px-5 rounded-[15px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mb-[33px] mt-[17px] w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[62px] rounded-[50%] text-center text-gray-900 text-lg w-12  flex-shrink-0"
                size="txtPlusJakartaSansRomanBold18Gray900"
              >
                5
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start md:mt-0 mt-[13px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Implementation & Integration
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  After the solution is fine-tuned and approved, we proceed with
                  its implementation. We ensure seamless integration with your
                  existing systems and workflows, minimizing disruption to your
                  ongoing operations.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[365px] mt-5 p-[15px] md:px-5 rounded-[15px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mb-[33px] mt-[17px] w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[62px] rounded-[50%] text-center text-gray-900 text-lg w-12  flex-shrink-0"
                size="txtPlusJakartaSansRomanBold18Gray900"
              >
                6
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start md:mt-0 mt-[13px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Training & Support
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  We provide comprehensive training to your team, equipping them
                  to effectively use and manage the new tools. Furthermore, we
                  offer ongoing support and maintenance services to ensure your
                  solution continues to deliver optimal results.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[365px] mt-5 p-[15px] md:px-5 rounded-[15px] w-1/2 md:w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mb-[33px] mt-[17px] w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[62px] rounded-[50%] text-center text-gray-900 text-lg w-12  flex-shrink-0"
                size="txtPlusJakartaSansRomanBold18Gray900"
              >
                7
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start md:mt-0 mt-[13px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansRomanBold18"
                >
                  Review & Optimization
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  As your business evolves, so should our solutions. We
                  continuously monitor the performance of our solutions, gather
                  feedback, and optimize them to better serve your needs, in
                  addition to implementating the latest AI technologies as they
                  become available.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-start justify-start md:ml-[0] ml-[113px] mt-[50px] md:px-5 w-[79%] md:w-full">
            <div className="flex flex-col justify-start md:mt-0 mt-[59px] w-[55%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                size="txtPlusJakartaSansExtraBold36"
              >
                Who We Serve
              </Text>
              <ul className="list-disc list-2xl text-white-A700 text-base w-full">
                <li className="leading-[22.00px] text-base text-white-A700 w-full">
                  <Text
                    className="leading-[22.00px] mt-[18px] text-base text-white-A700 w-full"
                    size="txtPlusJakartaSansRomanRegular16"
                  >
                    From mom-and-pop shops to large organizations, we provide
                    tailored AI consulting for businesses of all sizes.
                  </Text>
                </li>
                <li className="leading-[22.00px] text-base text-white-A700 w-full">
                  <Text
                    className="leading-[22.00px] mt-[18px] text-base text-white-A700 w-full"
                    size="txtPlusJakartaSansRomanRegular16"
                  >
                    Small Businesses and Freelancers
                  </Text>
                </li>
                <li className="leading-[22.00px] text-base text-white-A700 w-full">
                  <Text
                    className="leading-[22.00px] mt-[18px] text-base text-white-A700 w-full"
                    size="txtPlusJakartaSansRomanRegular16"
                  >
                    Professional Practices
                  </Text>
                </li>
                <li className="leading-[22.00px] text-base text-white-A700 w-full">
                  <Text
                    className="leading-[22.00px] mt-[18px] text-base text-white-A700 w-full"
                    size="txtPlusJakartaSansRomanRegular16"
                  >
                    Service Businesses and Contractors
                  </Text>
                </li>
                <li className="leading-[22.00px] text-base text-white-A700 w-full">
                  <Text
                    className="leading-[22.00px] mt-[18px] text-base text-white-A700 w-full"
                    size="txtPlusJakartaSansRomanRegular16"
                  >
                    Educational Institutions
                  </Text>
                </li>
                <li className="leading-[22.00px] text-base text-white-A700 w-full">
                  <Text
                    className="leading-[22.00px] mt-[18px] text-base text-white-A700 w-full"
                    size="txtPlusJakartaSansRomanRegular16"
                  >
                    E-Commerce Businesses
                  </Text>
                </li>
              </ul>

              <div className="flex flex-col items-center justify-start mt-[50px] w-[37%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[222px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="2xl"
                  variant="outline"
                >
                  <div className="capitalize font-semibold text-left text-lg">
                    Contact Us
                  </div>
                </Button>
              </div>
            </div>
            <Img
              className="h-[596px] sm:h-auto object-cover rounded-[15px] w-[39%] md:w-full"
              src="images/img_rectangle65.png"
              alt="rectangleSixtyFive"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1209px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex md:flex-1 flex-col items-center justify-start p-5 rounded-[15px] w-[37%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-11 mt-2.5 w-full">
                <Text
                  className="leading-[35.00px] text-lg text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanSemiBold18"
                >
                  Our partnership with AI Scout has brought about a revolution
                  in how we operate and serve our customers. Their proficiency
                  in crafting AI-powered solutions, tailored to our unique
                  requirements, is simply unmatched. Their hands-on approach,
                  combined with a deep understanding of our business dynamics,
                  has allowed us to automate numerous cumbersome tasks, increase
                  operational efficiency, and vastly improve our customer
                  interactions.
                </Text>
                <div className="md:h-11 h-6 ml-10 mt-5 relative w-[31%]">
                  <Img
                    className="h-6 ml-6 my-auto rounded-[1px] w-6"
                    src="images/img_star2.svg"
                    alt="starTwo"
                  />
                  <div className="absolute flex flex-row gap-6 h-full inset-[0] items-center justify-center m-auto w-full">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star1.svg"
                      alt="starOne"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star3.svg"
                      alt="starThree"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star4.svg"
                      alt="starFour"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star5.svg"
                      alt="starFive"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[25px] w-[62%] md:w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse40.png"
                    alt="ellipseForty"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      James Miller
                    </Text>
                    <Text
                      className="mt-0.5 text-blue_gray-600_01 text-sm"
                      size="txtPlusJakartaSansRomanRegular14Bluegray60001"
                    >
                      Business Improvement Lead
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-8 justify-start w-[57%] md:w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start ml-3 md:ml-[0]">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Why Work with Us
                </Text>
                <Text
                  className="leading-[22.00px] text-base text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular16"
                >
                  From mom-and-pop shops to large organizations, we provide
                  tailored AI consulting for businesses of all sizes.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[74%] md:w-full">
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="blue_gray_900"
                    size="md"
                    variant="outline"
                  >
                    <Img
                      className="h-6"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[15px] sm:mt-0 mt-[13px] text-lg text-white-A700"
                    size="txtPlusJakartaSansRomanBold18"
                  >
                    Customization
                  </Text>
                  <Button
                    className="flex h-12 items-center justify-center sm:ml-[0] ml-[168px] rounded-[50%] w-12"
                    shape="circle"
                    color="blue_gray_900"
                    size="md"
                    variant="outline"
                  >
                    <Img
                      className="h-6"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[15px] sm:mt-0 mt-[15px] text-lg text-white-A700"
                    size="txtPlusJakartaSansRomanBold18"
                  >
                    Expertise
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between ml-3 md:ml-[0] mt-2.5 w-[99%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-sm text-white-A700"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    We understand that every business is unique, and so are its
                    challenges. Our solutions are custom-built, considering your
                    business model, industry, and specific pain points.
                  </Text>
                  <Text
                    className="leading-[22.00px] text-sm text-white-A700"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    We understand that every business is unique, and so are its
                    challenges. Our solutions are custom-built, considering your
                    business model, industry, and specific pain points.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[52px] w-3/4 md:w-full">
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="blue_gray_900"
                    size="md"
                    variant="outline"
                  >
                    <Img
                      className="h-6"
                      src="images/img_television_white_a700.svg"
                      alt="television_One"
                    />
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[15px] sm:mt-0 mt-3.5 text-lg text-white-A700"
                    size="txtPlusJakartaSansRomanBold18"
                  >
                    Consultancy
                  </Text>
                  <Button
                    className="flex h-12 items-center justify-center sm:ml-[0] ml-[185px] rounded-[50%] w-12"
                    shape="circle"
                    color="blue_gray_900"
                    size="md"
                    variant="outline"
                  >
                    <Img
                      className="h-6"
                      src="images/img_trendup.svg"
                      alt="trendup"
                    />
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[15px] sm:mt-0 mt-3.5 text-lg text-white-A700"
                    size="txtPlusJakartaSansRomanBold18"
                  >
                    Scalability
                  </Text>
                </div>
                <Text
                  className="leading-[22.00px] md:ml-[0] ml-[371px] mt-2.5 text-sm text-white-A700 w-[46%] sm:w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  Our solutions are designed to grow with your business. As your
                  needs evolve, so can our AI tools and automation systems.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[113px] mt-[99px] md:px-5 w-[79%] md:w-full">
            <div className="flex h-20 justify-end relative w-20">
              <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-11 mb-1.5 ml-auto mr-[11px] mt-auto rounded-[22px] w-1/2"></div>
              <div className="absolute bg-amber-500_19 border border-amber-500 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto p-5 rounded-[50%] w-20">
                <Img
                  className="h-10 w-10"
                  src="images/img_checkmark_white_a700.svg"
                  alt="checkmark"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start ml-5 md:ml-[0]">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
                size="txtPlusJakartaSansExtraBold24"
              >
                Need traditional web development services?
              </Text>
              <Text
                className="text-base text-white-A700 tracking-[0.80px]"
                size="txtPlusJakartaSansRomanRegular16"
              >
                <>We&#39;ve got you covered.</>
              </Text>
            </div>
            <div className="flex h-16 justify-end md:ml-[0] ml-[297px] relative w-[14%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-white-A700 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-9 mt-auto rounded-[17px] w-[21%]"></div>
              <Button
                className="absolute border border-solid border-white-A700 capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[158px] text-center text-lg"
                shape="round"
                color="white_A700_19"
                size="2xl"
                variant="fill"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[600px] mt-[72px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Testimonials
          </Text>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1213px] mt-7 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[37px] mt-[5px] w-[91%] md:w-full">
                <div className="flex flex-row gap-[11px] items-center justify-start w-[67%] md:w-full">
                  <Img
                    className="h-[74px] md:h-auto rounded-[50%] w-[74px]"
                    src="images/img_ellipse41.png"
                    alt="ellipseFortyOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Corey Jacobson
                    </Text>
                    <Text
                      className="text-blue_gray-600_01 text-sm"
                      size="txtPlusJakartaSansRomanRegular14Bluegray60001"
                    >
                      Dropshipper
                    </Text>
                  </div>
                </div>
                <div className="h-6 ml-10 relative w-[38%]">
                  <Img
                    className="h-6 ml-6 my-auto rounded-[1px] w-6"
                    src="images/img_star2_24x24.svg"
                    alt="starTwo"
                  />
                  <div className="absolute flex flex-row gap-6 h-full inset-[0] items-center justify-center m-auto w-full">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star1_24x24.svg"
                      alt="starOne"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star3_24x24.svg"
                      alt="starThree"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star4_24x24.svg"
                      alt="starFour"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star5_24x24.svg"
                      alt="starFive"
                    />
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] ml-0.5 md:ml-[0] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.{" "}
                  </>
                </Text>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[37px] mt-[5px] w-[90%] md:w-full">
                <div className="flex flex-row gap-[11px] items-center justify-start w-[66%] md:w-full">
                  <Img
                    className="h-[74px] md:h-auto rounded-[50%] w-[74px]"
                    src="images/img_ellipse42.png"
                    alt="ellipseFortyTwo"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Juan Hernandez
                    </Text>
                    <Text
                      className="text-blue_gray-600_01 text-sm"
                      size="txtPlusJakartaSansRomanRegular14Bluegray60001"
                    >
                      Plumber
                    </Text>
                  </div>
                </div>
                <div className="h-6 ml-10 relative w-[39%]">
                  <Img
                    className="h-6 ml-6 my-auto rounded-[1px] w-6"
                    src="images/img_star2_1.svg"
                    alt="starTwo"
                  />
                  <div className="absolute flex flex-row gap-6 h-full inset-[0] items-center justify-center m-auto w-full">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star1_1.svg"
                      alt="starOne"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star3_1.svg"
                      alt="starThree"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star4_1.svg"
                      alt="starFour"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star5_1.svg"
                      alt="starFive"
                    />
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.{" "}
                  </>
                </Text>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start mb-[37px] mt-[5px] w-[90%] md:w-full">
                <div className="flex flex-row gap-[11px] items-center justify-start w-[74%] md:w-full">
                  <Img
                    className="h-[74px] md:h-auto rounded-[50%] w-[74px]"
                    src="images/img_ellipse43.png"
                    alt="ellipseFortyThree"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPlusJakartaSansRomanBold16WhiteA700"
                    >
                      Rhiana Bostock
                    </Text>
                    <Text
                      className="text-blue_gray-600_01 text-sm"
                      size="txtPlusJakartaSansRomanRegular14Bluegray60001"
                    >
                      Small Business Owner
                    </Text>
                  </div>
                </div>
                <div className="h-6 ml-10 relative w-[39%]">
                  <Img
                    className="h-6 ml-6 my-auto rounded-[1px] w-6"
                    src="images/img_star2_2.svg"
                    alt="starTwo"
                  />
                  <div className="absolute flex flex-row gap-6 h-full inset-[0] items-center justify-center m-auto w-full">
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star1_2.svg"
                      alt="starOne"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star3_2.svg"
                      alt="starThree"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star4_2.svg"
                      alt="starFour"
                    />
                    <Img
                      className="h-6 rounded-[1px] w-6"
                      src="images/img_star5_2.svg"
                      alt="starFive"
                    />
                  </div>
                </div>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.{" "}
                  </>
                </Text>
              </div>
            </div>
          </List>
          <FAQs />
          <div className="flex justify-center mb-10">
            <Text
              className="mt-[106px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
              size="txtPlusJakartaSansExtraBold36"
            >
              Ready to get started? Contact us!
            </Text>
          </div>

          <div className="flex md:flex-col flex-row gap-[22px] items-center justify-start max-w-[1212px] mt-[23px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-1/2 md:w-full">
              <Text
                className="text-base text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold16"
              >
                Name
              </Text>
              <Input
                name="group319"
                placeholder="Your name"
                className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-900 border-solid w-full"
                type="text"
                shape="round"
                color="black_900_33"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-1/2 md:w-full">
              <Text
                className="text-base text-white-A700"
                size="txtPlusJakartaSansRomanSemiBold16"
              >
                Email
              </Text>
              <Input
                name="group319_One"
                placeholder="Your email"
                className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-900 border-solid w-full"
                type="email"
                shape="round"
                color="black_900_33"
                size="lg"
                variant="fill"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col gap-[7px] items-start justify-start max-w-[1212px] mt-[23px] mx-auto md:px-5 w-full">
            <Text
              className="text-base text-white-A700"
              size="txtPlusJakartaSansRomanSemiBold16"
            >
              Message
            </Text>
            <div className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-col items-start justify-start p-5 rounded-[10px] w-full">
              <Text
                className="mb-[183px] mt-0.5 text-blue_gray-800 text-sm"
                size="txtPlusJakartaSansRomanMedium14"
              >
                Type your message
              </Text>
            </div>
          </div>
          <div className="flex h-[58px] md:h-[88px] justify-end max-w-[1064px] mt-[30px] mx-auto md:px-5 relative w-full">
            <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[5px] ml-auto mr-[477px] mt-auto rounded-[25px] w-[5%]"></div>
            <Button
              className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[1064px] md:min-w-full text-center text-lg"
              shape="round"
              color="amber_500_19"
              size="xl"
              variant="fill"
            >
              Submit
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[113px] mt-[82px] mb-20 md:px-5 w-[79%] md:w-full">
            <div className="flex h-20 justify-end relative w-20">
              <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-11 mb-1.5 ml-auto mr-[11px] mt-auto rounded-[22px] w-1/2"></div>
              <div className="absolute bg-amber-500_19 border border-amber-500 border-solid flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto p-5 rounded-[50%] w-20">
                <Img
                  className="h-10 w-10"
                  src="images/img_checkmark_white_a700.svg"
                  alt="checkmark_One"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-start ml-5 md:ml-[0]">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
                size="txtPlusJakartaSansExtraBold24"
              >
                Prefer to talk?
              </Text>
              <Text
                className="text-base text-white-A700 tracking-[0.80px]"
                size="txtPlusJakartaSansRomanRegular16"
              >
                Book a free 15-minute discovery call with us!
              </Text>
            </div>
            <div className="flex h-16 justify-end md:ml-[0] ml-[506px] relative w-[15%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-white-A700 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[37px] mt-auto rounded-[17px] w-[21%]"></div>
              <Button
                className="absolute border border-solid border-white-A700 capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[159px] text-center text-lg"
                shape="round"
                color="white_A700_19"
                size="2xl"
                variant="fill"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAISolutionsPage;
