import React, { useEffect, useState } from "react";

import { ArticleCard, Button, List, SubscribeForm, Text } from "components";
import { chunkArray, server } from "utils";
import { Article } from "interfaces";

import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const FeaturedArticles: React.FC = () => {
  const [fetching, toggleFetching] = useState(false);

  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    toggleFetching(true);
    try {
      const { data } = await server.get("/articles?featured=true");

      setArticles(data);
    } catch (err) {
      console.log(err);
    } finally {
      toggleFetching(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <Text
          className="mt-[38px] mb-[50px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
          size="txtPlusJakartaSansExtraBold36"
          style={{ marginTop: 200 }}
        >
          Featured Articles
        </Text>
        {/* <Spin spinning={fetching}> */}
        <div className="md:gap-5 gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] min-h-[auto] mt-[35px] mx-auto md:px-5 w-full">
          {articles.map((article, index) => (
            <ArticleCard {...article} key={index} />
          ))}
        </div>
        {/* </Spin> */}

        <SubscribeForm />
      </div>
    </>
  );
};

export default FeaturedArticles;
