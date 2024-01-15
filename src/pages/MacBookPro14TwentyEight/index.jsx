import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const MacBookPro14TwentyEightPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[982px] mx-auto relative w-full">
        <div className="sm:h-[1052px] md:h-[958px] h-[982px] m-auto md:px-5 w-full">
          <div className="absolute bg-indigo-900 flex flex-col md:gap-10 gap-[62px] h-full inset-y-[0] items-center justify-center my-auto p-[26px] sm:px-5 right-[0] w-[82%]">
            <div className="flex flex-col items-center justify-start mt-[125px]">
              <Text
                className="text-base text-black-900"
                size="txtInterMedium16"
              >
                <span className="text-orange-50 font-inter text-left font-medium">
                  Home /
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-orange-800 font-inter text-left font-semibold underline"
                >
                  Onboard Bank
                </a>
              </Text>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start mb-[223px] w-[58%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-row gap-[18px] items-center justify-start md:pr-10 sm:pr-5 pr-[519px] rounded-[10px] w-full">
                    <Button
                      className="border border-indigo-900 border-solid flex items-center justify-center w-[33%]"
                      shape="round"
                    >
                      <Img src="images/img_group5.png" alt="groupFive" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtInterSemiBold16"
                    >
                      Bank Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-row gap-[18px] items-center justify-start mt-[23px] md:pr-10 sm:pr-5 pr-[469px] rounded-[10px] w-full">
                    <Button
                      className="border border-indigo-900 border-solid flex items-center justify-center w-1/4"
                      shape="round"
                    >
                      <Img src="images/img_group11.png" alt="groupEleven" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtInterSemiBold16"
                    >
                      Bank Admin Email
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-row gap-[18px] items-center justify-start mt-7 md:pr-10 sm:pr-5 pr-[436px] rounded-[10px] w-full">
                    <Button
                      className="border border-indigo-900 border-solid flex items-center justify-center w-[21%]"
                      shape="round"
                      size="xs"
                    >
                      <Img src="images/img_group10.png" alt="groupTen" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtInterSemiBold16"
                    >
                      Bank Admin Phone No
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-row gap-[18px] items-center justify-start mt-[29px] md:pr-10 sm:pr-5 pr-[499px] rounded-[10px] w-full">
                    <Button
                      className="border border-indigo-900 border-solid flex items-center justify-center w-[29%]"
                      shape="round"
                      size="md"
                    >
                      <Img src="images/img_group9.png" alt="groupNine" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtInterSemiBold16"
                    >
                      Bank Address
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-row gap-[18px] items-center justify-start mt-[29px] md:pr-10 sm:pr-5 pr-[565px] rounded-[10px] w-full">
                    <Button
                      className="border border-indigo-900 border-solid flex items-center justify-center w-[46%]"
                      shape="round"
                      size="md"
                    >
                      <Img src="images/img_group9.png" alt="groupEight" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtInterSemiBold16"
                    >
                      State
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-row gap-[18px] items-center justify-start mt-[29px] md:pr-10 sm:pr-5 pr-[543px] rounded-[10px] w-full">
                    <Button
                      className="border border-indigo-900 border-solid flex items-center justify-center w-[38%]"
                      shape="round"
                      size="md"
                    >
                      <Img src="images/img_group9.png" alt="groupSeven" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtInterSemiBold16"
                    >
                      Country
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[325px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  color="orange_800"
                >
                  Submit
                </Button>
                <Button className="!text-blue_gray-800 cursor-pointer font-semibold leading-[normal] min-w-[325px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bg-orange-800 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[37px] sm:px-5 top-[0] w-full">
            <Text
              className="mr-[438px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtInterSemiBold40"
            >
              Onboard Bank
            </Text>
          </div>
          <div className="absolute bg-orange-800 bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto p-[33px] sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end mr-[326px] w-[36%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtInterRegular20"
              >
                Contact us{" "}
              </Text>
              <Line className="bg-white-A700 h-[59px] sm:h-px sm:ml-[0] ml-[27px] sm:w-full w-px" />
              <Text
                className="sm:ml-[0] ml-[26px] text-white-A700 text-xl"
                size="txtInterRegular20"
              >
                Terms of Use
              </Text>
              <Line className="bg-white-A700 h-[59px] sm:h-px sm:ml-[0] ml-[27px] sm:w-full w-px" />
              <Text
                className="sm:ml-[0] ml-[26px] text-white-A700 text-xl"
                size="txtInterRegular20"
              >
                Privacy Statement
              </Text>
            </div>
          </div>
        </div>
        <Sidebar className="!sticky !w-[284px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]">
          <Img
            className="h-[88px] md:h-auto md:ml-[0] mt-[19px] mx-[18px] object-cover w-[87%]"
            src="images/img_npcilogo1.png"
            alt="npcilogoOne"
          />
          <div className="flex flex-col gap-[25px] items-start justify-start mb-[766px] md:ml-[0] ml-[19px] mr-[125px] mt-[42px] w-1/2">
            <div className="flex flex-row gap-[15px] items-center justify-start w-[55%] md:w-full">
              <Img
                className="h-[15px] md:h-auto object-cover w-[15px]"
                src="images/img_nounhome6349863.png"
                alt="nounhome6349863"
              />
              <Text
                className="text-base text-blue_gray-800"
                size="txtInterSemiBold16Bluegray800"
              >
                Home
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-start justify-start w-full">
              <Img
                className="h-[15px] md:h-auto object-cover w-[15px]"
                src="images/img_nounhome6349863_15x15.png"
                alt="nounhome6349863_One"
              />
              <Text
                className="text-base text-orange-800 underline"
                size="txtInterSemiBold16Orange800"
              >
                Onboard Bank
              </Text>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default MacBookPro14TwentyEightPage;
