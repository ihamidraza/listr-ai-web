import React, { useEffect, useState } from "react";
import { Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text, SubscribeForm, ToolCard } from "components";
import AiToolsCategoryfilterModal from "modals/AiToolsCategoryfilter";
import { server } from "utils";

const dummyData = [
  {
    title: "Understanding JavaScript Closures",
    description:
      "A deep dive into closures in JavaScript and how to use them effectively.",
    image:
      "https://images.unsplash.com/photo-1590608897129-79da63e27c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHx8fHwwfHx8fDE2MjU1NjcwNDA&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "JavaScript",
    bookmarkCount: 120,
    tags: ["javascript", "closures", "programming"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "Mastering Flexbox for Responsive Design",
    description:
      "Learn how to create flexible and responsive layouts using Flexbox.",
    image:
      "https://images.unsplash.com/photo-1606761568900-1fded2903c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZsZXhib3h8ZW58MHx8fHwxNjI1NTY3MTIz&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "CSS",
    bookmarkCount: 230,
    tags: ["css", "flexbox", "web design"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "React Hooks: A Comprehensive Guide",
    description:
      "An in-depth guide to using hooks in React for state and effect management.",
    image:
      "https://images.unsplash.com/photo-1601582592685-4520e827a35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWN0fGVufDB8fHx8MTYyNTU2NzE1Mg&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "React",
    bookmarkCount: 150,
    tags: ["react", "hooks", "javascript"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "A Beginner's Guide to GraphQL",
    description:
      "Learn the basics of GraphQL and how to integrate it into your applications.",
    image:
      "https://images.unsplash.com/photo-1581091870622-d3a52a6d914a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdyYXBocWx8ZW58MHx8fHwxNjI1NTY3MTg3&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "GraphQL",
    bookmarkCount: 90,
    tags: ["graphql", "api", "backend"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "Introduction to TypeScript",
    description:
      "Get started with TypeScript and learn its key features and benefits.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofHx8fHwwfHx8fDE2MjU1NjcyMTM&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "TypeScript",
    bookmarkCount: 200,
    tags: ["typescript", "javascript", "programming"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "Building REST APIs with Express",
    description:
      "A guide to creating RESTful APIs using the Express.js framework.",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4cHJlc3MlMjBqc3xlbnwwfHx8fDE2MjU1NjcyMzQ&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "Express.js",
    bookmarkCount: 180,
    tags: ["express", "nodejs", "api"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "Managing State with Redux",
    description: "An introduction to managing application state with Redux.",
    image:
      "https://images.unsplash.com/photo-1581092320320-88bbd4eb1a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHJlZHV4fGVufDB8fHx8MTYyNTU2NzI2MA&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "Redux",
    bookmarkCount: 140,
    tags: ["redux", "state management", "react"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "Responsive Web Design Principles",
    description:
      "Learn the principles of responsive web design and how to apply them.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJlc3BvbnNpdmUlMjB3ZWIrfGVufDB8fHx8MTYyNTU2NzI3OQ&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "Web Design",
    bookmarkCount: 160,
    tags: ["responsive design", "web design", "css"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "Understanding Asynchronous JavaScript",
    description:
      "A comprehensive guide to asynchronous programming in JavaScript.",
    image:
      "https://images.unsplash.com/photo-1581091215367-59cf60b705d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGFzeW5jaHJvbm91cyUyMGphdmFzY3JpcHR8ZW58MHx8fHwxNjI1NTY3Mjk5&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "JavaScript",
    bookmarkCount: 170,
    tags: ["javascript", "async", "programming"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
  {
    title: "Getting Started with Vue.js",
    description: "An introductory guide to building applications with Vue.js.",
    image:
      "https://images.unsplash.com/photo-1502784444185-6a115efc7cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZ1ZXxlbnwwfHx8fDE2MjU1NjczMTk&ixlib=rb-1.2.1&q=80&w=400",
    button: "Read More",
    category: "Vue.js",
    bookmarkCount: 130,
    tags: ["vue", "javascript", "frontend"],
    handleBookmark: () => console.log("Bookmarked!"),
    onClick: () => console.log("Button clicked!"),
  },
];

const newOptionsList = [
  {
    label: (
      <div className="flex flex-row gap-2.5 items-end justify-start w-full">
        <Img
          className="h-6 w-6"
          src="images/img_checkmark_white_a700_24x24.svg"
          alt="checkmark"
        />
        <Text
          className="text-sm text-white-A700"
          size="txtPlusJakartaSansRomanMedium14WhiteA700"
        >
          Verified
        </Text>
      </div>
    ),
    value: "verified",
  },
  {
    label: (
      <div className="flex flex-row gap-2.5 items-end justify-start w-full">
        <Img
          className="h-6 w-6"
          src="images/img_bookmark_white_a700.svg"
          alt="bookmark"
        />
        <Text
          className="mt-[5px] text-sm text-white-A700"
          size="txtPlusJakartaSansRomanMedium14WhiteA700"
        >
          Popular
        </Text>
      </div>
    ),
    value: "popular",
  },
  {
    label: (
      <div className="flex flex-row gap-2.5 items-start justify-start w-[76%] md:w-full">
        <Img
          className="h-6 w-6"
          src="images/img_close_white_a700_24x24.svg"
          alt="close_One"
        />
        <Text
          className="mt-[3px] text-sm text-white-A700"
          size="txtPlusJakartaSansRomanMedium14WhiteA700"
        >
          New
        </Text>
      </div>
    ),
    value: "new",
  },
];

const AiToolsCategoryOnePage: React.FC = () => {
  const navigate = useNavigate();

  const [modal, toggleModal] = useState(false);

  const [tools, setTools] = useState(dummyData);

  const fetchTools = async () => {
    try {
      const { data } = await server.get("/tools?orderBy=createdAt");

      setTools(data);
    } catch (err) {
      message.error(err?.message || "Error while fetching tools");
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);
  return (
    <>
      <AiToolsCategoryfilterModal modal={modal} toggleModal={toggleModal} />

      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div
          className="flex flex-col items-center justify-start w-full"
          style={{ marginTop: 100 }}
        >
          <div className="md:h-[813px] h-[817px] md:px-5 relative w-full">
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
                <div className="absolute bottom-[27%] flex flex-col items-center justify-start right-[20%] w-[66%]">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtPlusJakartaSansRomanSemiBold48"
                  >
                    Copywriting AI Tools
                  </Text>
                  <Text
                    className="mt-[5px] text-blue_gray-600 text-xl"
                    size="txtPlusJakartaSansRomanRegular20"
                  >
                    Compelling Content Made Easy - Top AI Copywriting Tools
                  </Text>
                  <div
                    className="flex md:flex-col flex-row gap-[39px] items-center mt-[46px] w-full"
                    style={{ marginLeft: "20vw" }}
                  >
                    <Input
                      name="group320"
                      placeholder="Search for tools…"
                      className="font-medium p-0 placeholder:text-blue_gray-800 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-900 border-solid md:flex-1 md:mt-0 my-1.5 rounded-[15px] md:w-full"
                      color="black_900_33"
                      size="lg"
                      variant="fill"
                      style={{ width: "40vw" }}
                    ></Input>
                    <div className="flex h-[70px] justify-end relative w-[9%] md:w-full">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[37px] mb-1.5 ml-auto mr-[15px] mt-auto rounded-[18px] w-[37px]"></div>
                      <Button className="absolute bg-amber-500_19 border border-amber-500 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto px-5 py-[15px] rounded-[15px] w-auto">
                        <Img
                          className="h-10 w-20"
                          src="images/img_save_white_a700.svg"
                          alt="save"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-[33px] w-[54%] md:w-full">
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex items-center justify-center min-w-[275px] rounded-[29px]"
                      rightIcon={
                        <Img
                          className="h-6 ml-[5px]"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      color="amber_500_33"
                      size="xl"
                      variant="fill"
                      onClick={() => navigate("/aiToolMapper")}
                    >
                      <div className="font-medium text-left text-sm">
                        Use AI Tools Mapping Feature
                      </div>
                    </Button>
                    <Button
                      className="border border-amber-500 border-solid cursor-pointer flex items-center justify-center min-w-[205px] rounded-[29px]"
                      rightIcon={
                        <Img
                          className="h-6 ml-[5px]"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      color="amber_500_33"
                      size="xl"
                      variant="fill"
                      onClick={() => navigate("/aiToolsCategories")}
                    >
                      <div className="font-medium text-left text-sm">
                        View All Categories
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px] w-max"
              size="txtPlusJakartaSansExtraBold36"
            >
              AI Tools List
            </Text>
          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1214px] mt-[47px] mx-auto md:px-5 w-full">
            <Button
              className="border border-blue_gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[120px]"
              leftIcon={
                <Img
                  className="h-6 mr-2.5"
                  src="images/img_filter.svg"
                  alt="filter"
                />
              }
              shape="round"
              color="black_900_33"
              size="xl"
              variant="fill"
              onClick={() => toggleModal(true)}
            >
              <div className="font-medium text-left text-sm">Filters</div>
            </Button>
            <Select
              placeholder="Select Tools"
              size="large"
              options={newOptionsList}
              style={{ width: 250 }}
            />
            {/* <SelectBox
              className="!text-white-A700 border border-blue_gray-900 border-solid sm:flex-1 font-medium text-left text-sm w-[11%] sm:w-full"
              placeholderClassName="!text-white-A700"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_white_a700_24x24.svg"
                  alt="arrow_down"
                />
              }
              isSearchable={false}
              placeholder="New"
              getOptionLabel={(e) =>
                (
                  <div className="flex items-center">
                    <Img
                      className="h-6 mr-2.5 w-6"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <span>{e.label}</span>
                  </div>
                ) as unknown as string
              }
              name="group210"
              isMulti={false}
              options={newOptionsList}
              shape="round"
              color="black_900_33"
              size="xs"
              variant="fill"
            /> */}
          </div>
          <div className="md:gap-5 gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] min-h-[auto] mt-[30px] mx-auto md:px-5 w-full">
            {tools.map((t) => (
              <ToolCard {...t} />
            ))}
            {/* <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle16.png"
                  alt="rectangleSixteen"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        Website Name
                      </Text>
                      <Text
                        className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                      >
                        Category of website
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle47.png"
                  alt="rectangleFortySeven"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        Website Name
                      </Text>
                      <Text
                        className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                      >
                        Category of website
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free2"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle49.png"
                  alt="rectangleFortyNine"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        Website Name
                      </Text>
                      <Text
                        className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                      >
                        Category of website
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free3"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle16.png"
                  alt="rectangleSixteen"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        Website Name
                      </Text>
                      <Text
                        className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                      >
                        Category of website
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free4"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle47.png"
                  alt="rectangleFortySeven"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        Website Name
                      </Text>
                      <Text
                        className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                      >
                        Category of website
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free5"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[15px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[26px] w-full">
                <Img
                  className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                  src="images/img_rectangle49.png"
                  alt="rectangleFortyNine"
                />
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-12 rounded-[50%] w-12"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtPlusJakartaSansRomanSemiBold18"
                      >
                        Website Name
                      </Text>
                      <Text
                        className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
                        size="txtPlusJakartaSansRomanRegular14Bluegray80001"
                      >
                        Category of website
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-white-A700 text-xs w-full"
                    size="txtPlusJakartaSansRomanRegular12"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                  <div className="border border-solid border-white-A700 flex flex-col items-start justify-start mt-5 p-1.5 rounded-[5px] w-1/4 md:w-full">
                    <CheckBox
                      className="mb-[3px] ml-1 md:ml-[0] text-left text-white-A700 text-xs"
                      inputClassName="mr-[5px]"
                      name="free"
                      id="free6"
                      label="Free"
                      shape="square"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                    <div className="flex h-16 justify-end relative w-[46%]">
                      <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-2.5 ml-auto mr-[55px] mt-auto rounded-[50%] w-8"></div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5 right-[6%] absolute"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                        }
                        shape="round"
                        color="amber_500_19"
                        size="2xl"
                        variant="fill"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          Visit
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[45%]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="2xl"
                        variant="outline"
                      >
                        <div className="capitalize font-semibold text-left text-lg">
                          287
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default AiToolsCategoryOnePage;
