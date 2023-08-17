import React, { useEffect } from "react";
import "./Landing.css";
import NavbarL from "../../Components/NavbarL/NavbarL";
import landing_vector from "../../assets/barter.jpg";
import Footer from "../../Components/Footer/Footer";
import {
  FaBriefcase,
  FaCamera,
  FaDesktop,
  FaEnvelope,
  FaHandHolding,
  FaHandshake,
  FaHome,
  FaPhone,
  FaStopwatch,
  FaTshirt,
  FaTv,
  FaUber,
  FaUser,
} from "react-icons/fa";
import CountUp from "react-countup";
import { textVariants } from "../../Components/Motion";
import { motion } from "framer-motion";

const CategoryArr = [
  {
    id: 1,
    categName: "SmartTV",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
  {
    id: 2,
    categName: "Desktop",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
  {
    id: 3,
    categName: "Camera",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
  {
    id: 4,
    categName: "SmartTV",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
  {
    id: 5,
    categName: "SmartTV",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
  {
    id: 6,
    categName: "Desktop",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
  {
    id: 7,
    categName: "Camera",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
  {
    id: 8,
    categName: "SmartTV",
    categDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categicon: "fas fa-tv",
  },
];

const Landing = () => {
  const categ = CategoryArr.map((item) => {
    <div className="Categrow">
      <motion.div
        className="service"
        variants={textVariants("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <i className={item.categicon}></i>
        <h3>{item.categName}</h3>
        <p>{item.categDesc}</p>
      </motion.div>
    </div>;
  });

  return (
    <>
      <motion.div
        variants={textVariants("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <NavbarL />
      </motion.div>

      <div className="row LandingSec1">
        <motion.div
          className="img_sec1"
          variants={textVariants("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://img.freepik.com/free-vector/international-trade-concept-illustration_114360-9661.jpg?w=2000"
            alt=""
          />
        </motion.div>
        <motion.div
          className="content_sec1"
          variants={textVariants("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            We connect you to <br />
            people around you to <br />
            <span className="underlined">barterX items</span> with
          </h1>
          <p>
            Our feed is filled with listed items by varoius <br />
            people all over the country
          </p>
          <div className="searchbox-wrap">
            <input type="text" placeholder="Input your email address" />
            <button>
              <span>Sign Up</span>{" "}
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="landingSec3"
        variants={textVariants("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my_container">
          <div className="landingSec3_row">
            <div className="barndInfoBx1">
              <div>
                <div className="icon_animation">
                  {/* <img src={business} alt="Business" className="animation_img" /> */}
                  <i>
                    <FaBriefcase />
                  </i>
                </div>
                <h2 className="barndInfo_heading">Quality</h2>
                <p className="barndInfo_desc">
                  Our products are developed to cater to global standards
                </p>
              </div>
            </div>
            <div className="barndInfoBx1">
              <div>
                <div className="icon_animation">
                  {/* <img src={business} alt="Business" className="animation_img" /> */}
                  <i>
                    <FaUser />
                  </i>
                </div>
                <h2 className="barndInfo_heading">Quality</h2>
                <p className="barndInfo_desc">
                  Our products are developed to cater to global standards
                </p>
              </div>
            </div>
            <div className="barndInfoBx1">
              <div>
                <div className="icon_animation">
                  {/* <img src={business} alt="Business" className="animation_img" /> */}
                  <i>
                    <FaHandshake />
                  </i>
                </div>
                <h2 className="barndInfo_heading">Reliability & Assurance</h2>
                <p className="barndInfo_desc">
                  Stable and dependable quality for our customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="LandingSec2">
        <div className="LandingSec2_heading">
          <h3>Introduction</h3>
          <h1>Why BarterX?</h1>
        </div>
        <div className="LandingSec2_content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            officiis odit omnis perferendis, quasi non maiores? Maiores
            recusandae nam magni eveniet quod minima, suscipit eligendi omnis
            dignissimos cumque doloribus. Magni accusantium assumenda
            reprehenderit quisquam voluptate natus tempora cupiditate similique!
            Quia veniam possimus autem expedita? Nulla eaque libero consequuntur
            fugit perferendis!
          </p>
        </div>
      </div>

      <div className="LandingCategSec">
        <section className="Categcontainer">
          <motion.h2
            variants={textVariants("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            Categories
          </motion.h2>

          {/* {categ} */}

          <div className="Categrow">
            <motion.div
              className="service"
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <i>
                <FaDesktop />
              </i>
              <h3></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
            <motion.div
              className="service"
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <i>
                <FaCamera />
              </i>
              <h3>Camera</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
            <motion.div
              className="service"
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <i>
                <FaTshirt />
              </i>
              <h3>Clothes</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
            <motion.div
              className="service"
              variants={textVariants("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <i>
                <FaTv />
              </i>
              <h3>Smart TV</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
            <motion.div
              className="service"
              variants={textVariants("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <i>
                <FaDesktop />
              </i>
              <h3>Desktop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
            <motion.div
              className="service"
              variants={textVariants("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <i>
                <FaCamera />
              </i>
              <h3>Camera</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
            <motion.div
              className="service"
              variants={textVariants("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <i>
                <FaTshirt />
              </i>
              <h3>Clothes</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="LandingSec4">
        <div>
          <h2>BarterX Community Stats</h2>
          <div className="countUpContainerLeft">
            <div className="countUpBx">
              <h1>
                <CountUp end={4125} />+
              </h1>
              <h3>Number of Businesses</h3>
            </div>
          </div>
          <div className="countUpContainerRight">
            <div className="countUpBx">
              <h1>
                <CountUp end={629800000} />+
              </h1>
              <h3>Total Barter Transaction Volume</h3>
            </div>
          </div>
          <div className="countUpContainerLeft">
            <div className="countUpBx">
              <h1>
                <CountUp end={212000000} />+
              </h1>
              <h3>Total Cash Saved By Businesses</h3>
            </div>
          </div>
          <div className="countUpContainerRight">
            <div className="countUpBx">
              <h1>
                <CountUp end={95} />+
              </h1>
              <h3>Number of Charities Supported</h3>
            </div>
          </div>
          <div className="countUpContainerLeft">
            <div className="countUpBx">
              <h1>
                <CountUp end={2737000} />+
              </h1>
              <h3>Total Barter Donations by Businesses</h3>
            </div>
          </div>
          <div className="countUpContainerRight">
            <div className="countUpBx">
              <h1>
                <CountUp end={2162000} />+
              </h1>
              <h3>Total Cash Saved By Charities</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
