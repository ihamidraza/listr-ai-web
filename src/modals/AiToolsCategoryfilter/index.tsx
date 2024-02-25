import React from "react";
import { Modal, Checkbox } from 'antd'

import { Button, CheckBox, Img, List, Text } from "components";

const AiToolsCategoryfilterModal = (props) => {
  return (
    <Modal
      // appElement={document.getElementById("root")}
      className="m-auto !w-[66%]"
      footer={null}
      // overlayClassName="bg-black-900_59 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      {/* <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full"> */}
      {/* <div className="bg-gray-900_02 border border-amber-500 border-solid flex flex-col items-center justify-end max-w-[948px] mb-[1737px] mt-[331px] mx-auto p-[25px] md:px-5 rounded-[20px] w-full"> */}
      <div className="flex flex-col gap-[21px] justify-start mt-[7px] w-[98%] md:w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] w-[79%] md:w-full">
          <Img
            className="h-6 w-6"
            src="images/img_filter_white_a700.svg"
            alt="filter"
          />
          <Text
            className="md:ml-[0] ml-[15px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
            size="txtPlusJakartaSansExtraBold36"
          >
            Select Filters to Apply
          </Text>

        </div>
        <div className="flex flex-col justify-start mr-4 w-[99%] md:w-full">
          <Text
            className="text-lg text-white-A700 tracking-[0.90px]"
            size="txtPlusJakartaSansRomanSemiBold18"
          >
            Pricing
          </Text>
          <List
            className="flex flex-col gap-5 md:ml-[0] ml-[15px] mt-2 w-[74%]"
            orientation="vertical"
          >
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <div className="h-[25px] relative w-1/5 sm:w-full">
                <Checkbox
                  className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                  // inputClassName="absolute h-6 mr-[5px] w-6"
                  name="pricing"
                  id="pricing"
                // label="Pricing"
                // shape="round"
                // color="amber_500"
                // size="sm"
                // variant="outline"
                >Pricing</Checkbox>
              </div>
              <div className="h-6 relative w-[23%]">
                <Checkbox
                  className=" m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                  // inputClassName="absolute h-6 mr-[5px] w-6"
                  name="freemium"
                  id="freemium"
                // label="Freemium"
                // shape="round"
                // color="amber_500"
                // size="sm"
                // variant="outline"
                >
                  <div className="flex flex-row gap-2.5">

                    <Img
                      // className="h-[18px] left-[24%] top-[8%] w-[18px]"
                      src="images/img_trophy.svg"
                      alt="trophy"
                    /> Freemium
                  </div>
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between w-[93%] md:w-full">
              <div className="h-6 relative w-[24%]">
                <Checkbox
                  className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                  // inputClassName="absolute h-6 mr-[5px] w-6"
                  name="freetrial"
                  id="freetrial"
                // label="Free Trial"
                // shape="round"
                // color="amber_500"
                // size="sm"
                // variant="outline"
                >
                  <div className="flex flex-row gap-2.5">

                    <Img
                      // className="absolute h-[18px] inset-y-[0] left-1/4 my-auto w-[18px]"
                      src="images/img_trophy.svg"
                      alt="trophy"
                    />
                    Free Trial
                  </div>
                </Checkbox>
              </div>
              <div className="h-6 relative w-[17%]">
                <Checkbox
                  className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                  // inputClassName="absolute h-6 mr-[5px] w-6"
                  name="paid"
                  id="paid"
                // label="Paid"
                // shape="round"
                // color="amber_500"
                // size="sm"
                // variant="outline"
                >
                  <div className="flex flex-row gap-2.5">

                    <Img
                      // className="absolute h-[18px] inset-y-[0] left-[35%] my-auto w-[18px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    Paid
                  </div>
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[95%] md:w-full">
              <div className="h-[25px] relative w-[37%]">
                <Checkbox
                  className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                  // inputClassName="absolute h-6 mr-[5px] w-6"
                  name="contactforprici_One"
                  id="contactforprici_One"
                // label="Contact for Pricing"
                // shape="round"
                // color="amber_500"
                // size="sm"
                // variant="outline"
                >
                  <div className="flex flex-row gap-2.5">

                    <Img
                      // className="absolute h-[18px] inset-y-[0] left-[16%] my-auto w-[18px]"
                      src="images/img_television_white_a700_18x18.svg"
                      alt="television"
                    />
                    Contact for Pricing </div></Checkbox>
              </div>
              <div className="h-6 relative w-[19%]">
                <Checkbox
                  className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                  // inputClassName="absolute h-6 mr-[5px] w-6"
                  name="deals"
                  id="deals"
                  label="Deals"
                  shape="round"
                  color="amber_500"
                  size="sm"
                  variant="outline"
                >
                  <div className="flex flex-row gap-2.5">

                    <Img
                      // className="absolute h-[18px] inset-y-[0] left-[31%] my-auto w-[18px]"
                      src="images/img_sort.svg"
                      alt="sort"
                    />
                    Deals
                  </div>
                </Checkbox>
              </div>
            </div>
          </List>
          <Text
            className="mt-[49px] text-lg text-white-A700 tracking-[0.90px]"
            size="txtPlusJakartaSansRomanSemiBold18"
          >
            Features
          </Text>
          <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[15px] mt-2.5 w-[71%] md:w-full">
            <div className="h-[25px] relative w-1/5 sm:w-full">
              <Checkbox
                className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                // inputClassName="absolute h-6 mr-[5px] w-6"
                name="pricing_One"
                id="pricing_One2"
              // label="Pricing"
              // shape="round"
              // color="amber_500"
              // size="sm"
              // variant="outline"
              >
                Pricing
              </Checkbox>
            </div>
            <div className="h-[25px] relative w-1/5">
              <Checkbox
                className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                // inputClassName="absolute h-6 mr-[5px] w-6"
                name="pricing_Three"
                id="pricing_Three"
              // label="Pricing"
              // shape="round"
              // color="amber_500"
              // size="sm"
              // variant="outline"
              >
                <div className="flex flex-row gap-2.5">

                  <Img
                    // className="absolute h-[18px] left-[28%] top-[12%] w-[18px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  Pricing
                </div></Checkbox>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[15px] mt-[18px] w-3/4 md:w-full">
            <div className="h-[25px] relative w-1/4">
              <Checkbox
                className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                // inputClassName="absolute h-6 mr-[5px] w-6"
                name="mobileapp"
                id="mobileapp"
              // label="Mobile App"
              // shape="round"
              // color="amber_500"
              // size="sm"
              // variant="outline"
              >
                <div className="flex flex-row gap-2.5">

                  <Img
                    // className="absolute h-[18px] left-[22%] top-[12%] w-[18px]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  Mobile App
                </div>
              </Checkbox>
            </div>
            <div className="h-[25px] relative w-1/4">
              <Checkbox
                className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                // inputClassName="absolute h-6 mr-[5px] w-6"
                name="mobileapp_One"
                id="mobileapp_One"
              // label="Mobile App"
              // shape="round"
              // color="amber_500"
              // size="sm"
              // variant="outline"
              >
                <div className="flex flex-row gap-2.5">

                  <Img
                    // className="h-[11px]"
                    src="images/img_user_white_a700.svg"
                    alt="user_One"
                  />
                  Mobile App
                </div></Checkbox>
              <div className="absolute bottom-[0] flex flex-col h-[18px] items-center justify-start left-[22%] w-[18px]">
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[15px] mt-[18px] w-[67%] md:w-full">
            <div className="h-6 relative w-[16%]">
              <Checkbox
                className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                // inputClassName="absolute h-6 mr-[5px] w-6"
                name="api"
                id="api"
              // label="API"
              // shape="round"
              // color="amber_500"
              // size="sm"
              // variant="outline"
              >
                <div className="flex flex-row gap-2.5">

                  <Img
                    // className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                    src="images/img_thumbsup_white_a700.svg"
                    alt="thumbsup"
                  />
                  API
                </div></Checkbox>
            </div>
            <div className="h-6 relative w-[16%]">
              <Checkbox
                className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
                // inputClassName="absolute h-6 mr-[5px] w-6"
                name="api_One"
                id="api_One"
              // label="API"
              // shape="round"
              // color="amber_500"
              // size="sm"
              // variant="outline"
              >
                <div className="flex flex-row gap-2.5">

                  <Img
                    // className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                    src="images/img_userplusbottom.svg"
                    alt="userplusbottom"
                  />
                  API
                </div></Checkbox>
            </div>
          </div>
          <div className="md:h-11 h-6 md:ml-[0] ml-[15px] mt-5 relative w-[26%]">
            <Checkbox
              className="m-auto sm:pl-5 text-base text-left tracking-[0.80px]"
              // inputClassName="absolute h-6 mr-[5px] w-6"
              name="browserextensio_One"
              id="browserextensio_One"
            // label="Browser Extension"
            // shape="round"
            // color="amber_500"
            // size="sm"
            // variant="outline"
            >
              <div className="flex flex-row gap-2.5">

                <Img
                  // className="absolute h-[18px] inset-y-[0] left-[16%] my-auto w-[18px]"
                  src="images/img_globe_white_a700.svg"
                  alt="globe"
                />
                Browser Extension
              </div></Checkbox>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[83px] items-center justify-end md:ml-[0] ml-[66px] mt-10 w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
              <Button
                className="capitalize cursor-pointer font-bold min-w-[327px] text-center text-lg"
                shape="round"
                color="amber_500"
                size="xl"
                variant="outline"
              >
                Clear
              </Button>
            </div>
            <div className="flex h-[58px] justify-end relative w-[49%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[148px] mt-auto rounded-[50%] w-8"></div>
              <Button
                className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[381px] sm:min-w-full text-center text-lg"
                shape="round"
                color="amber_500_19"
                size="xl"
                variant="fill"
              >
                Apply Filter
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </Modal>
  );
};

export default AiToolsCategoryfilterModal;
