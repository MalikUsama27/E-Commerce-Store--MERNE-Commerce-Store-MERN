import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Aboutpic from "../pic/contactus.jpg" 
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus justify-content-center">
        <div className="col-md-6 ">
          <img
            src={Aboutpic}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          we are a team of dedicated professionals to providing high-quality products and services to our customers. Our goal is to meet and exceed our customers' expectations by delivering exceptional customer service and offering a wide range of products that cater to their needs.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;