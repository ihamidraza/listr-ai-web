import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Img, Text, Line } from "components";


type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const Header: React.FC<HeaderProps> = () => {

  const { pathname } = useLocation();


  const navigate = useNavigate()


  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="absolute bg-black-900_33 flex flex-col inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] mx-[111px] my-7 w-[85%]">
              <div className="flex flex-col justify-start w-[33%] md:w-full">
                <ul className="flex sm:flex-col flex-row sm:hidden items-end justify-start w-full common-row-list"
                >
                  <li>
                    <Button
                      className="hover:font-extrabold md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      onClick={() => navigate('/')}
                    >
                      <Text size="txtPlusJakartaSansExtraBold26" >
                        Listr.ai
                      </Text>
                    </Button>

                  </li>
                  <li>
                    <Button
                      className="hover:font-extrabold ml-[101px] my-[5px] text-base text-white-A700"
                      onClick={() => navigate('/')}

                    >
                      <Text size="txtPlusJakartaSansRomanRegular16">
                        Home
                      </Text>
                      {pathname === '/' && <Line className="bg-amber-500 h-1 rounded-sm w-full" />}
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="hover:font-extrabold mb-1 ml-[30px] mt-[7px] text-base text-white-A700"
                      onClick={() => navigate('/aiToolsCategoryOne')}
                    >
                      <Text size="txtPlusJakartaSansRomanRegular16">
                        Ai Tools Category
                      </Text>
                      {pathname === '/aiToolsCategoryOne' && <Line className="bg-amber-500 h-1 rounded-sm w-full" />}

                    </Button>

                  </li>
                </ul>
                {/* <div className="bg-amber-500 h-1 md:ml-[0] ml-[188px] mr-[162px] mt-[3px] rounded-sm w-[12%]"></div> */}
              </div>
              <Button
                onClick={() => navigate('/aiToolMapper')}
              >
                <Text
                  className="md:ml-[0] ml-[30px] text-base text-white-A700"
                  size="txtPlusJakartaSansRomanRegular16"
                >
                  Ai Tools Mapper
                </Text>
                {pathname === '/aiToolMapper' && <Line className="bg-amber-500 h-1 rounded-sm w-full" />}

              </Button>
              <Button
                onClick={() => navigate('/customAISolutions')}
              >

                <Text
                  className="md:ml-[0] ml-[30px] text-base text-white-A700"
                  size="txtPlusJakartaSansRomanRegular16"
                >
                  Custom AI Solutions
                </Text>
                {pathname === '/customAISolutions' && <Line className="bg-amber-500 h-1 rounded-sm w-full" />}

              </Button>
              <Button
                onClick={() => navigate('/articles')}

              >

                <Text
                  className="md:ml-[0] ml-[30px] text-base text-white-A700"
                  size="txtPlusJakartaSansRomanRegular16"
                >
                  Articles
                </Text>
                {pathname === '/articles' && <Line className="bg-amber-500 h-1 rounded-sm w-full" />}

              </Button>
              <div className="flex h-16 justify-end ml-9 md:ml-[0] relative w-[13%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-1.5 ml-auto mr-[33px] mt-auto rounded-[50%] w-8"></div>
                <Button
                  className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[152px]"
                  leftIcon={
                    <Img
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  }
                  onClick={() => navigate('/login')}

                  shape="round"
                  color="amber_500_19"
                  size="xl"
                  variant="fill"
                >
                  <div className="capitalize font-bold text-left text-lg">
                    Sign in
                  </div>
                </Button>
              </div>
              <div className="flex h-16 justify-end ml-5 md:ml-[0] relative w-[16%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-green-A400 blur-[24.00px] h-[35px] mb-[3px] ml-auto mr-[54px] mt-auto rounded-[17px] w-[17%]"></div>
                <Button
                  className="absolute border border-green-A400 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[193px] text-center text-lg"
                  shape="round"
                  color="green_A400_19"
                  size="2xl"
                  variant="fill"
                  onClick={() => navigate('/')}

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
