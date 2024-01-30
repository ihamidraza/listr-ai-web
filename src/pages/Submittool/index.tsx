import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const SubmittoolPage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans gap-10 items-center justify-start mx-auto w-full">
        <div className="md:h-[813px] h-[937px] md:px-5 relative w-full">
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
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-1/4 w-[78%]">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Submit AI Tool
                </Text>
                <Text
                  className="leading-[16.00px] mt-2.5 text-center text-white-A700 text-xs tracking-[0.60px] w-full"
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
                <Text
                  className="mt-[9px] text-center text-lg text-white-A700 tracking-[0.90px]"
                  size="txtPlusJakartaSansExtraBold18"
                >
                  Submit AI Tool
                </Text>
                <Text
                  className="mt-[15px] text-center text-white-A700 text-xs tracking-[0.60px]"
                  size="txtPlusJakartaSansRomanSemiBold12"
                >
                  <>
                    Sign up/log in with Google to create a new account.
                    It&#39;ll be super quick!
                  </>
                </Text>
                <div className="flex h-16 md:h-[82px] justify-end mt-[18px] relative w-[32%]">
                  <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[149px] mt-auto rounded-[50%] w-8"></div>
                  <div
                    className="common-pointer absolute bg-amber-500_19 border border-amber-500 border-solid flex flex-row gap-2.5 h-full inset-[0] items-center justify-center m-auto md:px-10 sm:px-5 px-[45px] py-5 rounded-[15px] w-auto"
                    onClick={() => googleSignIn()}
                  >
                    <Img
                      className="h-6 w-[23px]"
                      src="images/img_google.svg"
                      alt="google"
                    />
                    <Text
                      className="capitalize text-lg text-white-A700 w-auto"
                      size="txtPlusJakartaSansSemiBold18"
                    >
                      Continue With Google
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900_33 border border-blue_gray-900 border-solid bottom-[0] md:h-[331px] h-[445px] inset-x-[0] mx-auto pb-[25px] sm:pl-5 pl-[25px] rounded-[15px] w-[85%] md:w-full">
            <Text
              className="absolute bottom-[8%] right-[12%] rotate-[90deg] md:text-5xl text-[130px] text-gray-900_7f"
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
                Write a post about Listar.ai. For example, share your experience
                with our tool, describe a certain feature you like, or share
                your thoughts on who can use an AI tools library.
              </Text>
            </div>
            <div className="absolute bottom-1/4 flex flex-col gap-5 items-start justify-start left-[6%] w-[76%] sm:w-full">
              <CheckBox
                className="font-medium text-left text-white-A700 text-xs tracking-[0.60px]"
                inputClassName="mr-[5px] rounded-[12px]"
                name="shareitonany"
                id="shareitonany"
                label="Share it on any of your social networks: LinkedIn, Instagram, Facebook, or Twitter (X)."
                size="sm"
              ></CheckBox>
              <CheckBox
                className="font-medium text-left text-white-A700 text-xs tracking-[0.60px]"
                inputClassName="mr-[5px] rounded-[12px]"
                name="waitforsometime_One"
                id="waitforsometime_One"
                label="Wait for some time to collect at least 15k impressions (For Submit tool) & 20k impressions (For Submit tool + feature on home page) that post."
                size="sm"
              ></CheckBox>
            </div>
            <CheckBox
              className="font-medium text-left text-white-A700 text-xs tracking-[0.60px]"
              inputClassName="absolute mr-[5px] rounded-[12px]"
              name="sharethelinkto"
              id="sharethelinkto"
              label="Share the link to the post that includes the performance numbers to mail on marketing@findmyaitool.com by the end of the offer&#39;s due date - 30 Nov 2023."
              size="sm"
            ></CheckBox>
            <CheckBox
              className="font-medium text-left text-white-A700 text-xs tracking-[0.60px]"
              inputClassName="absolute mr-[5px] rounded-[12px]"
              name="onceyourpostis"
              id="onceyourpostis"
              label="Once your post is approved by our team, your tool will be added or featured for next 30 days as per your impressions."
              size="sm"
            ></CheckBox>
            <div className="absolute bg-amber-500 border-2 border-solid border-white-A700 flex flex-col items-end justify-start p-[11px] right-[0] rotate-[-45deg] rounded-[15px] top-[0] w-[199px]">
              <Text
                className="mb-[54px] mr-[3px] text-gray-900_05 text-lg"
                size="txtPlusJakartaSansRomanBold18Gray90005"
              >
                RECOMMENDED
              </Text>
            </div>
          </div>
          <Header className="absolute bg-black-900_33 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full" />
        </div>
        <Text
          className="text-white-A700 text-xs"
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
        <div className="h-[422px] max-w-[1212px] mx-auto md:px-5 relative w-full">
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
              alt="image_Two"
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
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SubmittoolPage;
