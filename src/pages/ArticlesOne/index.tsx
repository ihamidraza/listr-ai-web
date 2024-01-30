import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const ArticlesOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="h-[813px] md:px-5 relative w-full">
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
              <div className="absolute bottom-[0] h-[444px] inset-x-[0] mx-auto w-[74%] md:w-full">
                <Img
                  className="h-[444px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle127.png"
                  alt="rectangle127"
                />
                <div className="absolute bg-gradient2  h-[444px] inset-[0] justify-center m-auto rounded-[15px] w-full"></div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[22%]">
                <Text
                  className="leading-[40.00px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 tracking-[1.80px] w-full"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Zero Trust Meets AI - Here’s Why It’s A New Frontier For
                  Cybersecurity
                </Text>
                <Text
                  className="mt-5 text-lg text-white-A700 tracking-[0.90px]"
                  size="txtPlusJakartaSansExtraBold18"
                >
                  Artificial intelligence
                </Text>
                <Text
                  className="mt-3 text-lg text-white-A700 tracking-[0.90px]"
                  size="txtPlusJakartaSansExtraBold18"
                >
                  <span className="text-white-A700 font-plusjakartasans text-left font-medium">
                    Posted on October 11, 2023 by{" "}
                  </span>
                  <span className="text-white-A700 font-plusjakartasans text-left font-medium">
                    Editor
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <Header4 className="absolute bg-black-900_33 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full" />
        </div>
        <Text
          className="mt-[50px] text-lg text-white-A700"
          size="txtPlusJakartaSansRomanBold18"
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
        <Line className="bg-blue_gray-800_02 h-px max-w-[1214px] mt-[124px] mx-auto w-full" />
        <Text
          className="mt-[47px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
          size="txtPlusJakartaSansExtraBold36"
        >
          Related Articles
        </Text>
        <List
          className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] mt-[45px] mx-auto md:px-5 w-full"
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
        <div className="h-[422px] md:h-[581px] max-w-[1212px] mt-[159px] mx-auto md:px-5 relative w-full">
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
        <Footer className="flex items-center justify-center mt-[62px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ArticlesOnePage;
