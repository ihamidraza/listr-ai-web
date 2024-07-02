import React, { useEffect, useState } from "react";

import { Img, SubCategoryCard, SubscribeForm, Text } from "components";
import { Category } from "interfaces";
import { server } from "utils";
import { Empty, message } from "antd";

interface CategoryExtended extends Category {
  subCategory: any[];
}

const AiToolsCategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryExtended[]>([]);
  const [fetching, toggleFetching] = useState(false);

  const fetchCategories = async () => {
    toggleFetching(true);

    try {
      const { data } = await server.get("/categories");

      setCategories(data);
    } catch (err) {
      message.error(
        err.response.data.message || `Error while fetching categories`
      );
    } finally {
      toggleFetching(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div
          className="flex flex-col items-center justify-start w-full"
          // style={{ marginTop: 100 }}
        >
          <div className=" md:px-5 relative w-full">
            <div className="inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[620px] object-cover"
                src="images/img_divelementorw.png"
                alt="divelementorw"
              />
              <div className=" inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[810px] m-auto object-cover w-full"
                  src="images/img_image_810x1434.png"
                  alt="image"
                />
                <div className=" bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[83%]">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                    size="txtPlusJakartaSansExtraBold36"
                  >
                    AI Tools Categories
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-1.5 text-blue_gray-600 text-center text-xl w-[82%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular20"
                  >
                    Streamline your search and find the best AI solutions to
                    enhance your operations, improve customer experiences, and
                    drive growth.
                  </Text>
                  {categories.map((category) => (
                    <>
                      <Text
                        className="mt-[54px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[1.30px]"
                        size="txtPlusJakartaSansExtraBold26"
                      >
                        {category.name}
                      </Text>
                      {category.subCategory.length ? (
                        <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[21px] w-full">
                          {category.subCategory.map((sub, i) => (
                            <SubCategoryCard key={i} {...sub} />
                          ))}
                        </div>
                      ) : (
                        <div className="flex justify-center m-10 w-full">
                          <Empty description="No Subcategory" />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default AiToolsCategoryPage;
