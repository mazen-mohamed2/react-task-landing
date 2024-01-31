import React from "react";
import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import { FaArrowRight, FaBookmark } from "react-icons/fa";

const Blog = () => {
  const data = [
    {
      title: "Brighten Up Dull Tired Skin",
      desc: `Gravity is an irresistible force. While it is
        certainly nice that it keeps us rooted to the…`,
    },
    {
      title: "Brighten Up Dull Tired Skin",
      desc: `Gravity is an irresistible force. While it is
        certainly nice that it keeps us rooted to the…`,
    },
    {
      title: "Brighten Up Dull Tired Skin",
      desc: `Gravity is an irresistible force. While it is
        certainly nice that it keeps us rooted to the…`,
    },
  ];
  return (
    <Container>
      <Heading
        title={"📝 Read our Blog"}
        desc={"Check our latest article to get inspiring content for shopping"}
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-11">
        {data.map((e, idx) => (
          <div
            key={idx}
            className="bg-[#5A7184] bg-opacity-[.1] p-3 rounded-md"
          >
            <div className="relative bg-redy w-full h-40 rounded">
              <div className="absolute cursor-pointer top-4 right-4 bg-white rounded-full p-3">
                <FaBookmark className="text-gray-500" />
              </div>
            </div>
            <h2 className="mt-4 font-[500] text-blue-h text-lg ">{e.title}</h2>
            <p className="mt-2 text-[#5A7184]">{e.desc}</p>
            <p className="text-main-green text-base font-[500] flex flex-row gap-3 items-center mt-5">
              {" "}
              Read More <FaArrowRight />{" "}
            </p>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Blog;
