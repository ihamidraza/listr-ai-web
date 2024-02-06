import React, { useState } from "react";

import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

import { Button, Img, Input, Line, Text } from "components";
import { server } from "utils";

const RegisterPageOnePage: React.FC = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const onFinish = () => {

    if(!name) return message.error('Name is required')
    if(!email) return message.error('Email is required')
    if(!isValidEmail(email)) return message.error('Email is not valid')
    if(!password)  return  message.error('Password is required')
    if (password !== password2)
    return message.error('Passwords are mismatched')
  
  try {
      const data = {
        name,
        email,
        password
      }
      
      server.post('/signup', data)
    }
    catch(err) {

      message.error(err?.message || 'Error while signing up')

    }
  }

  function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="md:h-[813px] h-[825px] md:px-5 relative w-full" style={{ marginTop: 100 }}>
          <div className="absolute h-[813px] inset-[0] justify-center m-auto w-full" >
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
              <div className="absolute bottom-[3%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[33%]">
                <Text
                  className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Register an account
                </Text>
                <Text
                  className="leading-[22.00px] mt-[11px] text-center text-sm text-white-A700 w-full"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  <>
                    By signing up here, You will also join our daily newsletter.
                    Don&#39;t worry you can unsubscribe if you don&#39;t like
                    it.
                  </>
                </Text>
                <div className="flex flex-col items-start justify-start mt-5 w-[79%] md:w-full">
                  <Input
                    name="group370"
                    placeholder="Continue With Google"
                    className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900 border-solid flex w-full"

                    prefix={
                      <Img
                        className="h-6 mr-[15px] my-auto"
                        src="images/img_google57226179_1.svg"
                        alt="Google-57226179 1"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row gap-2.5 items-start justify-center md:ml-[0] ml-[73px] mt-[22px] w-3/5 md:w-full">
                    <Line className="bg-white-A700 h-px mb-1.5 mt-2.5 w-[41%]" />
                    <Text
                      className="text-sm text-white-A700"
                      size="txtPlusJakartaSansRomanBold14"
                    >
                      OR
                    </Text>
                    <Line className="bg-white-A700 h-px mb-1.5 mt-2.5 w-[41%]" />
                  </div>
                  <Text
                    className="mt-16 text-base text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold16"
                  >
                    Name
                  </Text>
                  <Input
                    name="group369"
                    placeholder="Your name"
                    className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900 border-solid mt-[9px] w-full"
                    type="text"
                    shape="round"
                    color="black_900_33"
                    size="lg"
                    variant="fill"
                    value={name}
                    onChange={setName}
                  ></Input>
                  <Text
                    className="mt-4 text-base text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold16"
                  >
                    Email
                  </Text>
                  <Input
                    name="group368"
                    placeholder="Your email"
                    className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900 border-solid mt-[9px] w-full"
                    type="email"
                    shape="round"
                    color="black_900_33"
                    size="lg"
                    variant="fill"
                    value={email}
                    onChange={setEmail}
                  ></Input>
                  <Text
                    className="mt-4 text-base text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold16"
                  >
                    Password
                  </Text>
                  <Input
                    name="language"
                    placeholder="Enter your password "
                    className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-900 border-solid mt-[9px] w-full"
                    type="password"
                    shape="round"
                    color="black_900_33"
                    size="xl"
                    variant="fill"
                    value={password}
                    onChange={setPassword}
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="absolute bottom-[0] left-[37%] text-base text-white-A700"
            size="txtPlusJakartaSansRomanSemiBold16"
          >
            Confirm Password
          </Text>
        </div>
        <Input
          name="language_One"
          placeholder="Confirm your password "
          className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
          wrapClassName="border border-blue_gray-900 border-solid mt-[9px] w-[26%]"
          type="password"
          shape="round"
          color="black_900_33"
          size="lg"
          variant="fill"
          value={password2}
          onChange={setPassword2}
        ></Input>
        <div className="flex md:h-[134px] h-[58px] justify-end mt-[76px] md:px-5 relative w-[27%] sm:w-full">
          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[5px] ml-auto mr-[138px] mt-auto rounded-[50%] w-8"></div>
          <Button
            className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[376px] sm:min-w-full text-center text-lg"
            shape="round"
            color="amber_500_19"
            size="xl"
            variant="fill"
            onClick={onFinish}
          >
            Sign Up
          </Button>
        </div>
        <Text
          className="mt-[50px] text-base text-gray-100"
          size="txtPlusJakartaSansRomanBold16"
        >
          <span className="text-gray-100 font-plusjakartasans text-left font-normal">
            Need an account?{" "}
          </span>
          <Button 
          onClick={() => navigate('/login')}>

          <span className="text-amber-500 font-plusjakartasans text-left font-bold">
            Login Here!
          </span>
          </Button>
        </Text>
        <div className="h-[422px] md:h-[519px] max-w-[1212px] mt-[97px] mx-auto md:px-5 relative w-full">
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
      </div>
    </>
  );
};

export default RegisterPageOnePage;
