import React from "react";

import { Button, Img, Text } from "components";

type Header2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const Header2: React.FC<Header2Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="md:ml-[0] ml-[111px] md:mt-0 my-[41px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
          size="txtPlusJakartaSansExtraBold26"
        >
          Listr.ai
        </Text>
        <Text
          className="md:ml-[0] ml-[101px] md:mt-0 my-[47px] text-base text-white-A700"
          size="txtPlusJakartaSansRomanRegular16"
        >
          Home
        </Text>
        <Text
          className="md:ml-[0] ml-[30px] md:mt-0 my-[47px] text-base text-white-A700"
          size="txtPlusJakartaSansRomanRegular16"
        >
          Ai Tools Category
        </Text>
        <Text
          className="md:ml-[0] ml-[30px] md:mt-0 my-[47px] text-base text-white-A700"
          size="txtPlusJakartaSansRomanRegular16"
        >
          Ai Tools Mapper
        </Text>
        <Text
          className="md:ml-[0] ml-[30px] md:mt-0 my-[47px] text-base text-white-A700"
          size="txtPlusJakartaSansRomanRegular16"
        >
          Custom AI Solutions
        </Text>
        <Text
          className="md:ml-[0] ml-[30px] md:mt-0 my-[47px] text-base text-white-A700"
          size="txtPlusJakartaSansRomanRegular16"
        >
          Articles
        </Text>
        <div className="flex h-16 md:h-[92px] justify-end mb-7 ml-9 md:ml-[0] md:mt-0 mt-6 relative w-[11%] md:w-full">
          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-1.5 ml-auto mr-[33px] mt-auto rounded-[50%] w-8"></div>
          <Button
            className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[152px]"
            leftIcon={
              <Img
                className="h-6 mb-px mr-2.5 bottom-[2%] right-[7%] absolute"
                src="images/img_lock.svg"
                alt="lock"
              />
            }
            shape="round"
            color="amber_500_19"
            size="xl"
            variant="fill"
          >
            <div className="capitalize font-bold font-plusjakartasans text-left text-lg">
              Sign in
            </div>
          </Button>
        </div>
        <div className="flex h-16 md:h-[92px] justify-end mb-7 ml-5 md:ml-[0] mr-[111px] md:mt-0 mt-6 relative w-[14%] md:w-full">
          <div className="backdrop-opacity-[0.5] bg-green-A400 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[54px] mt-auto rounded-[17px] w-[17%]"></div>
          <Button
            className="absolute border border-green-A400 border-solid capitalize cursor-pointer font-bold font-plusjakartasans h-full inset-[0] m-auto min-w-[193px] text-center text-lg"
            shape="round"
            color="green_A400_19"
            size="2xl"
            variant="fill"
          >
            Submit Ai tools
          </Button>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
