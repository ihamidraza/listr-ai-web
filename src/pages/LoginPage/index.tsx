import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message, Button } from "antd";

import { Img, Input, Line, SubscribeForm, Text } from "components";

import { login, isAuthenticated } from "features";
import { isValidEmail } from "utils";

const LoginPagePage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, toggleLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) return navigate("/");
  }, []);

  const onFinish = async () => {
    if (!email) return message.error("Email is required");
    if (!isValidEmail(email)) return message.error("Email is not valid");
    if (!password) return message.error("Password is required");

    toggleLoading(true);

    try {
      await login(email, password);
      message.success("Logged in successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      message.error(
        err?.response?.data?.message || err?.message || "Error while logging in"
      );
    } finally {
      toggleLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    // try {
    //   const googleLoginUrl = `${BASE_URL}/google?context=${CONTEXT}`;
    //   window.location.href = googleLoginUrl;
    // } catch (err) {}
  };

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div
          className="h-[813px] md:px-5 relative w-full"
          style={{ marginTop: 100 }}
        >
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
              <div className="absolute bottom-[2%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[33%]">
                <Text
                  className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Log in to account
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
                <Text
                  className="mt-6 text-center text-sm text-white-A700"
                  size="txtPlusJakartaSansRomanRegular14"
                >
                  Login using social profile or enter email manually.
                </Text>
                <div className="flex flex-col items-start justify-start mt-[19px] w-[79%] md:w-full">
                  <Button
                    className="border border-blue_gray-900 border-solid capitalize cursor-pointer h-[70px] inset-[0] m-auto min-w-[400px] text-center text-lg"
                    shape="round"
                    style={{ backgroundColor: "#fff", color: "#000" }}
                    onClick={handleLoginWithGoogle}
                  >
                    <Img
                      className="h-6 mr-[15px] my-auto"
                      src="images/img_google57226179_1.svg"
                      alt="Google-57226179 1"
                      style={{ display: "inline" }}
                    />
                    Continue With Google
                  </Button>
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
                    className="mt-[22px] text-base text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold16"
                  >
                    Email
                  </Text>
                  <Input
                    name="group292"
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
                    name="group291"
                    placeholder="Enter your password"
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
                  <Text
                    className="ml-56 md:ml-[0] mt-[13px] text-base text-gray-100"
                    size="txtPlusJakartaSansRomanBold16"
                  >
                    Forgot Password?
                  </Text>
                  <div className="flex h-[58px] md:h-[75px] justify-end md:ml-[0] ml-[3px] mt-[17px] relative w-[99%]">
                    <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[5px] ml-auto mr-[131px] mt-auto rounded-[50%] w-8"></div>
                    <Button
                      className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[361px] text-center text-lg"
                      // shape="round"
                      color="amber_500_19"
                      // size="xl"
                      // variant="fill"
                      onClick={onFinish}
                      loading={loading}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="mt-[30px] text-base text-gray-100"
          size="txtPlusJakartaSansRomanBold16"
        >
          <span className="text-gray-100 font-plusjakartasans text-left font-normal">
            Need an account?{" "}
          </span>
          <Button type="text" onClick={() => navigate("/register")}>
            <span className="text-amber-500 font-plusjakartasans text-left font-bold">
              Signup Here
            </span>
          </Button>
        </Text>

        <SubscribeForm />
      </div>
    </>
  );
};

export default LoginPagePage;
