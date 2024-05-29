import { Button, Img, Text, Line } from "components";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  description: string;
  body: string;
  imgurl: string;
  topic: string;
  views: number;
  tags: any[];
  published: boolean;
  featured: boolean;
  created_at: string;
  // handleBookmark: () => void;
  // onClick: () => void;
}

export const ArticleCard = (props: Props) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    description,
    body,
    imgurl,
    topic,
    views,
    published,
    created_at,
  } = props;

  const handleClick = () => {
    navigate(`/articles/${id}`);
  };
  return (
    <div className="bg-gradient  border border-blue_gray-900 border-solid flex flex-col gap-[21px] items-center justify-start sm:ml-[0] py-[11px] rounded-[15px] w-full">
      <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
        <Img
          className="h-[213px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
          src={imgurl}
          alt="rectangleSixty"
        />
        <Text
          className="mt-[30px] text-lg text-white-A700 w-[88%] sm:w-full"
          size="txtPlusJakartaSansRomanBold18"
        >
          {title}
        </Text>
        <Text
          className="leading-[25.00px] mt-[11px] text-gray-500 text-xs w-full"
          size="txtPlusJakartaSansRomanRegular12Gray500"
        >
          {description}
        </Text>
      </div>
      <div className="flex flex-col items-center justify-start mb-3 w-full">
        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
          <Line className="bg-blue_gray-800_02 h-px w-full" />
          <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
            <div className="flex flex-row items-end justify-evenly w-[31%]">
              <Img
                className="h-6 w-6"
                src="images/img_calendar.svg"
                alt="calendar"
              />
              <Text
                className="mb-0.5 mt-[5px] text-white-A700 text-xs"
                size="txtPlusJakartaSansRomanRegular12"
              >
                {moment(created_at).format("MMMM D, YYYY")}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-evenly w-[26%]">
              <Text
                className="mt-1 text-amber-500 text-xs hover:underline"
                size="txtPlusJakartaSansRomanBold12"
                onClick={handleClick}
              >
                Read More
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
