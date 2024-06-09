import { useEffect, useState } from "react";
import { Text } from "../Text"; // Assuming Text component is imported from your library
import { Img } from "../Img"; // Assuming Img component is imported from your library
import { Line } from "../Line"; // Assuming Line component is imported from your library
import { server } from "utils";
import { Empty, Spin, message } from "antd";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 w-full">
      <button
        onClick={toggleAnswer}
        className="font-bold leading-normal text-lg text-white-A700 flex items-center justify-between bg-transparent focus:outline-none w-full"
      >
        <span>{question}</span>
        <Img
          className={`h-6 w-6 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          src="images/img_arrowdown_amber_500.svg"
          alt="arrow_down"
        />
      </button>
      {isOpen && <div className="text-white-A700 mt-5 ml-5">{answer}</div>}
      <Line className="bg-blue_gray-800_02 mt-6 h-px w-full" />
    </div>
  );
};

export const FAQs = () => {
  const [FAQs, setFAQs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFAQs = async () => {
    setLoading(true);
    try {
      const { data } = await server.get("/faqs");
      setFAQs(data);
    } catch (err) {
      console.error(err);
      message.error(
        err?.response?.data?.message || "Error while fetching FAQ's"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFAQs();
  }, []);

  return (
    <div className="max-w-lg mx-auto w-full">
      <div className="flex justify-center mb-10">
        <Text
          className="mt-[106px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
          size="txtPlusJakartaSansExtraBold36"
        >
          FAQ's
        </Text>
      </div>
      <Spin spinning={loading}>
        {FAQs.length ? (
          FAQs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))
        ) : (
          <Empty
            description="No FAQ's found"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </Spin>
    </div>
  );
};

export default FAQs;
