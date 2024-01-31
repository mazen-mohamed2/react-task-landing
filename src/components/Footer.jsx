import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerData = [
    {
      head: `Product`,
      list: [
        "Landingpage",
        "Features",
        "Documentation",
        "Referral Program",
        "Pricing",
      ],
    },
    {
      head: `Services`,
      list: ["Documentation", "Design", "Themes", "Illustrations", "UI Kit"],
    },
    {
      head: `Company`,
      list: ["About", "Terms", "Documentation", "Privacy Policy", "Careers"],
    },
    { head: `Product`, list: ["Documentation", "License", "Changelog"] },
  ];
  return (
    <Container className={'py-16'}>
      <footer
        className={
          "flex flex-col-reverse gap-16 items-center lg:justify-start lg:items-start  lg:flex-row py-16"
        }
      >
        <div className="flex flex-col  items-center lg:items-start">
          <img
            src={require("../utils/images/Logo.png")}
            alt="logo"
            className="w-[90px] h-[28px] "
          />
          <p className=" text-[#5A7184] w-[60%] my-6 ">
            Build a modern and creative website with crealand
          </p>
          <div className="flex gap-3">
            {[<FaGoogle />, <FaTwitter />, <FaInstagram />, <FaLinkedin />].map((e, idx) => (
              <div key={idx} className="bg-gray-300 text-gray-600 text-lg flex justify-center items-center rounded-full w-10 h-10 " >
                {e}
              </div>
            ))}
          </div>
        </div>
        <section className="grid grid-cols-2 sm:grid-cols-4 place-items-center items-start gap-14">
          {footerData.map((e, idx) => (
            <div
              key={idx}
              className="space-y-5 flex flex-col justify-start  items-start"
            >
              <h6 className="text-lg font-bold text-blue-h">{e.head}</h6>
              <div className="flex flex-col  gap-y-5">
                {e.list.map((e, idx) => (
                  <Link
                    key={idx}
                    to="/product"
                    className="hover:underline text-blue-h"
                  >
                    {e}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </footer>
      <div className="flex flex-col items-center gap-y-4">
        <div className=" w-10 bg-[#1576D8] rounded-full p-3">
          <FaHeart className="text-white" />
        </div>
          <p className="hover:underline text-blue-h">
          Copyright © 2019. Crafted with love.
          </p>
      </div>
    </Container>
  );
};

export default Footer;
