import { Img, Text } from "components";

import { useNavigate } from "react-router-dom";
import { AITool, SubCategory } from "interfaces";

interface Props extends SubCategory {
  tool: AITool[];
  _count: {
    tool: number;
  };
}

export const SubCategoryCard = (props: Props) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    description,

    _count: { tool },
  } = props;

  console.log(props);

  const handleClick = () => {
    navigate(`/subcategories/${id}`);
  };

  return (
    <div
      className="bg-black-900_33 border border-blue_gray-900 border-solid flex flex-1 flex-col gap-3 items-end justify-end p-[13px] rounded-[15px] w-full cursor-pointer"
      onClick={handleClick}
    >
      <Img
        className="h-[23px] mr-[5px] mt-1.5 w-[23px]"
        src="/images/img_arrowleft_white_a700_23x23.svg"
        alt="arrowleft"
      />
      <div className="flex flex-col items-center justify-start mr-[20px]">
        <Text
          className="text-white-A700 text-xl tracking-[1.00px]"
          size="txtPlusJakartaSansRomanSemiBold20"
        >
          {name}
        </Text>
        <Text
          className="leading-[15.00px] mt-1.5 text-blue_gray-600 text-center text-xs w-full"
          size="txtPlusJakartaSansRomanRegular12Bluegray600"
        >
          {description}
        </Text>
        <Text
          className="mt-3 text-white-A700 text-xl tracking-[1.00px]"
          size="txtPlusJakartaSansRomanSemiBold20"
        >
          ({tool}+)
        </Text>
      </div>
    </div>
  );
};
