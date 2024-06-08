import React, { useEffect, useState } from "react";

import { ArticleCard, Button, List, SubscribeForm, Text } from "components";
import { chunkArray, server } from "utils";
import { Article } from "interfaces";

import { useNavigate } from "react-router-dom";

const TrendingArticles: React.FC = () => {
  const navigate = useNavigate();
  const [fetching, toggleFetching] = useState(false);

  const [trendingArticles, setTrendingArticles] = useState<Article[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<Article[][]>([]);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);

  const getTrendingArticles = async () => {
    toggleFetching(true);
    try {
      const { data } = await server.get("/articles?page0&pageSize=4");

      setTrendingArticles(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getFeaturedArticles = async () => {
    toggleFetching(true);
    try {
      const { data } = await server.get(
        "/articles?page=0&pageSize=8&featured=true"
      );

      setFeaturedArticles(chunkArray(data, 4));
    } catch (err) {
      console.log(err);
    }
  };

  const getLatestArticles = async () => {
    toggleFetching(true);
    try {
      const { data } = await server.get(
        "/articles?page=0&pageSize=8&ordered=createdAt"
      );

      setLatestArticles(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (id: number) => {
    navigate(`/articles/${id}`);
  };

  useEffect(() => {
    getTrendingArticles();
    getFeaturedArticles();
    getLatestArticles();
  }, []);

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <Text
          className="mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
          size="txtPlusJakartaSansExtraBold36"
          style={{ marginTop: 300 }}
        >
          Trending Articles
        </Text>
        <div className="md:gap-5 gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] min-h-[auto] mt-[35px] mx-auto md:px-5 w-full">
          {latestArticles.map((article, index) => (
            <ArticleCard {...article} key={index} />
          ))}
        </div>

        <SubscribeForm />
      </div>
    </>
  );
};

export default TrendingArticles;
