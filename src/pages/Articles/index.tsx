import React, { useEffect, useState } from "react";

import {
  ArticleCard,
  Button,
  Img,
  Line,
  List,
  SubscribeForm,
  Text,
} from "components";
import { chunkArray, server } from "utils";
import { Article } from "interfaces";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ArticlesPage: React.FC = () => {
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

  const featuredLists = featuredArticles.map((articles, i) => (
    <List
      key={i}
      className="absolute bottom-0 sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-0 justify-center mx-auto w-[85%]"
      orientation="horizontal"
    >
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </List>
  ));

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div
          className="md:h-[1051px] h-[1276px] sm:h-[1451px] md:px-5 relative w-full"
          style={{ marginTop: 100 }}
        >
          <div className="absolute md:h-[1051px] h-[813px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[622px] object-cover"
              src="images/img_divelementorw.png"
              alt="divelementorw"
            />
            <div className="absolute md:h-[1051px] h-[813px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[813px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[85%]">
                <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
                  <div
                    className="h-[444px] relative w-[54%] md:w-full cursor-pointer"
                    onClick={() => handleClick(trendingArticles?.[0]?.id)}
                  >
                    <Img
                      className="h-[444px] m-auto object-cover rounded-[15px] w-full cursor-pointer"
                      src={trendingArticles?.[0]?.imgurl}
                      alt="rectangle127"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 rounded-[15px] w-full cursor-pointer">
                      <div className="flex flex-col gap-[21px] items-start justify-start mb-[7px] mt-[282px] w-[86%] md:w-full">
                        <Text
                          className="leading-[30.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[1.10px] w-full"
                          size="txtPlusJakartaSansExtraBold22"
                        >
                          {trendingArticles?.[0]?.title}
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-[32%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            {moment(trendingArticles?.[0]?.createdAt).fromNow()}{" "}
                            | {trendingArticles?.[0]?.author?.name}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[12.5px] pb-[13px] w-[45%]"
                    orientation="vertical"
                  >
                    <div
                      className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full cursor-pointer"
                      onClick={() => handleClick(trendingArticles?.[1]?.id)}
                    >
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-[15px] w-[120px]"
                        src={trendingArticles?.[1]?.imgurl}
                        alt="rectangle129"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="leading-[30.00px] text-lg text-white-A700 tracking-[0.90px] w-full"
                          size="txtPlusJakartaSansExtraBold18"
                        >
                          {trendingArticles?.[1]?.title}
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-2/5 md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            {moment(trendingArticles?.[1]?.createdAt).fromNow()}
                            | {trendingArticles?.[1]?.author?.name}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-800_02 w-[98%]" />
                    <div
                      className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full cursor-pointer"
                      onClick={() => handleClick(trendingArticles?.[2]?.id)}
                    >
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-[15px] w-[120px]"
                        src={trendingArticles?.[2]?.imgurl}
                        alt="rectangle130"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="leading-[30.00px] text-lg text-white-A700 tracking-[0.90px] w-full"
                          size="txtPlusJakartaSansExtraBold18"
                        >
                          {trendingArticles?.[2]?.title}
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-2/5 md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            {moment(trendingArticles?.[2]?.createdAt).fromNow()}{" "}
                            | {trendingArticles?.[2]?.author?.name}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-800_02 w-[98%]" />
                    <div
                      className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full cursor-pointer"
                      onClick={() => handleClick(trendingArticles?.[3]?.id)}
                    >
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-[15px] w-[120px]"
                        src={trendingArticles?.[3]?.imgurl}
                        alt="rectangle131"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="leading-[30.00px] text-lg text-white-A700 tracking-[0.90px] w-full"
                          size="txtPlusJakartaSansExtraBold18"
                        >
                          <>{trendingArticles?.[3]?.title}</>
                        </Text>
                        <div className="flex flex-row gap-3.5 items-end justify-start w-2/5 md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] text-white-A700 text-xs tracking-[0.60px]"
                            size="txtPlusJakartaSansRomanMedium12"
                          >
                            {moment(trendingArticles?.[3]?.createdAt).fromNow()}{" "}
                            | {trendingArticles?.[3]?.author?.name}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex h-[58px] md:h-[98px] justify-end mt-10 relative w-[32%] sm:w-full">
                  <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[67px] mt-auto rounded-[50%] w-8"></div>
                  <Button
                    className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[380px] sm:min-w-full text-center text-lg"
                    shape="round"
                    color="amber_500_19"
                    size="xl"
                    variant="fill"
                  >
                    View All Trending Articles
                  </Button>
                </div>
                <Text
                  className="mt-11 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                  size="txtPlusJakartaSansExtraBold36"
                >
                  Featured Articles
                </Text>
              </div>
            </div>
          </div>

          {featuredLists}
        </div>

        <div className="flex md:h-[110px] h-[58px] justify-end mt-[52px] md:px-5 relative w-[27%] sm:w-full">
          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[70px] mt-auto rounded-[50%] w-8"></div>
          <Button
            className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[385px] sm:min-w-full text-center text-lg"
            shape="round"
            color="amber_500_19"
            size="xl"
            variant="fill"
          >
            View All Featured Articles
          </Button>
        </div>
        <Text
          className="mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
          size="txtPlusJakartaSansExtraBold36"
        >
          Latest Articles
        </Text>
        <div className="md:gap-5 gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1214px] min-h-[auto] mt-[35px] mx-auto md:px-5 w-full">
          {latestArticles.map((article, index) => (
            <ArticleCard {...article} key={index} />
          ))}
        </div>
        <div className="flex md:h-[106px] h-[58px] justify-end mt-12 md:px-5 relative w-1/4">
          <div className="backdrop-opacity-[0.5] bg-amber-500 blur-[24.00px] h-8 mb-[3px] ml-auto mr-[57px] mt-auto rounded-[50%] w-8"></div>
          <Button
            className="absolute border border-amber-500 border-solid capitalize cursor-pointer font-bold h-full inset-[0] m-auto min-w-[360px] text-center text-lg"
            shape="round"
            color="amber_500_19"
            size="xl"
            variant="fill"
          >
            View All Latest Articles
          </Button>
        </div>
        <SubscribeForm />
      </div>
    </>
  );
};

export default ArticlesPage;
