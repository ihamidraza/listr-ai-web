import { Tag } from "antd";
import { Button, Img, Text } from "components";

interface Props {
  title: string;
  description: string;
  image: string;
  button: string;
  category: string;
  bookmarkCount: number;
  tags: any[];
  handleBookmark: () => void;
  onClick: () => void;
}

export const Card = (props: Props) => {
  console.log(props.tags);
  return (
    <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[15px] w-full">
      <div className="flex flex-col items-start justify-start mb-[13px] w-full">
        <Img
          className="h-[159px] md:h-auto object-cover rounded-[7px] w-full"
          src={props.image}
          alt="rectangleFortyNine"
        />
        <div className="flex flex-row gap-[7px] items-start justify-start ml-1.5 md:ml-[0] mt-[7px] w-[100%] md:w-full">
          {/* <div className="bg-blue_gray-100 h-[35px] mb-[3px] rounded-[18px] w-9"></div> */}
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-lg text-white-A700 tracking-[0.90px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              {props.title}
            </Text>
            <Text
              className="text-blue_gray-800_01 text-sm tracking-[0.70px]"
              size="txtPlusJakartaSansRomanRegular14Bluegray80001"
            >
              {props.category}
            </Text>
          </div>
        </div>
        <Text
          className="leading-[22.00px] ml-1.5 md:ml-[0] mt-4 text-white-A700 text-xs w-[98%] sm:w-full"
          size="txtPlusJakartaSansRomanRegular12"
        >
          {props.description}
        </Text>
        {props.tags?.map((name) => (
          <Tag>{name}</Tag>
        ))}

        {/* <Button
          className="cursor-pointer flex items-center justify-center min-w-[65px] md:ml-[0] ml-[5px] mt-10 rounded-[5px]"
          leftIcon={
            <Img
              className="h-[17px] mr-[7px]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          }
          color="white_A700"
          size="xs"
          variant="outline"
        >
          <div className="text-left text-xs">{props.tags}</div>
        </Button> */}
        <div className="flex flex-row gap-[13px] items-center justify-between mt-4 w-full">
          <div className="flex h-[70px] justify-end relative w-[49%]">
            <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-[23px] mb-[18px] ml-auto mr-12 mt-auto rounded-[11px] w-[23px]"></div>
            <Button
              className="border border-amber-500 border-solid cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[100px] px-[20px] py-[15px]"
              leftIcon={
                <Img
                  className="h-5 mr-2.5"
                  src="images/img_globe.svg"
                  alt="globe"
                />
              }
              shape="round"
              color="amber_500_19"
              variant="fill"
              onClick={props.onClick}
            >
              <div className="capitalize font-semibold sm:px-5 text-left">
                Visit
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[47%]">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[100px] px-[22px] py-[15px]"
              leftIcon={
                <Img
                  className="h-5 mr-2.5"
                  src="images/img_bookmark.svg"
                  alt="bookmark"
                />
              }
              shape="round"
              color="white_A700"
              variant="outline"
              onClick={props.handleBookmark}
            >
              <div className="capitalize font-semibold sm:px-5 text-left">
                {props.bookmarkCount || 0}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
