import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Img, Text, Line } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const Header: React.FC<HeaderProps> = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="absolute bg-black-900_33 flex flex-col inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] mx-[111px] my-7 w-[85%]">
              <div className="flex flex-col justify-start md:w-full">
                <ul className="flex sm:flex-col flex-row sm:hidden items-end justify-start w-full common-row-list">
                  <li>
                    <Button onClick={() => navigate("/")}>
                      <Text
                        className="hover:font-extrabold md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                        size="txtPlusJakartaSansExtraBold26"
                      >
                        Listr.ai
                      </Text>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => navigate("/")}>
                      <Text
                        className="hover:font-extrabold mb-1 ml-[101px] my-[5px] text-base text-white-A700"
                        size="txtPlusJakartaSansRomanRegular16"
                      >
                        Home
                        {pathname === "/" && (
                          <Line className="bg-amber-500 h-1 rounded-sm w-full" />
                        )}
                      </Text>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => navigate("/aiToolsCategory")}>
                      <Text
                        className="hover:font-extrabold mb-1 ml-[30px] mt-[7px] text-base text-white-A700"
                        size="txtPlusJakartaSansRomanRegular16"
                      >
                        Ai Tools Category
                        {pathname === "/aiToolsCategory" && (
                          <Line className="bg-amber-500 h-1 rounded-sm w-full" />
                        )}
                      </Text>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => navigate("/aiToolMapper")}>
                      <Text
                        className="hover:font-extrabold mb-1 ml-[30px] mt-[7px] text-base text-white-A700"
                        size="txtPlusJakartaSansRomanRegular16"
                      >
                        Ai Tools Mapper
                        {pathname === "/aiToolMapper" && (
                          <Line className="bg-amber-500 h-1 rounded-sm w-full" />
                        )}
                      </Text>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => navigate("/customAISolutions")}>
                      <Text
                        className="hover:font-extrabold mb-1 ml-[30px] mt-[7px] text-base text-white-A700"
                        size="txtPlusJakartaSansRomanRegular16"
                      >
                        Custom AI Solutions
                        {pathname === "/customAISolutions" && (
                          <Line className="bg-amber-500 h-1 rounded-sm w-full" />
                        )}
                      </Text>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => navigate("/articles")}>
                      <Text
                        className="hover:font-extrabold mb-1 ml-[30px] mt-[7px] text-base text-white-A700"
                        size="txtPlusJakartaSansRomanRegular16"
                      >
                        Articles
                        {pathname === "/articles" && (
                          <Line className="bg-amber-500  h-1 rounded-sm w-full" />
                        )}
                      </Text>
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="flex h-16 justify-end ml-30 md:ml-[0] relative w-[16%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-1.5 ml-auto mr-[33px] mt-auto rounded-[50%] w-8"></div>
                <Button
                  className="border border-amber-500 border-solid font-bold capitalize cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[152px]"
                  leftIcon={<Img src="images/img_lock.svg" alt="lock" />}
                  onClick={() => navigate("/login")}
                  shape="round"
                  color="amber_500_19"
                  size="md"
                  variant="fill"
                >
                  Sign in
                </Button>
              </div>
              <div className="flex h-16 justify-end ml-0 md:ml-[0] relative w-[16%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-green-A400 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[54px] mt-auto rounded-[17px] w-[17%]"></div>
                <Button
                  className="border border-green-A400 border-solid font-bold capitalize cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[152px]"
                  // className="absolute border border-green-A400 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[193px] text-center text-lg"
                  shape="round"
                  color="green_A400_19"
                  size="md"
                  variant="fill"
                  onClick={() => navigate("/submitTool")}
                >
                  Submit Ai tools
                </Button>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};
