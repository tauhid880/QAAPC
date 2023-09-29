import React from "react";

import Iframe from "react-iframe";

const ContactUs = () => {
  return (
    <div id="contactUs" className="lg:my-10">
      <h1 className="text-center font-bold text-4xl">Contact Us</h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="mr-2 font-medium font-Poppins">Permanent Campus</h1>
        <p className="font-Poppins text-center tracking-tighter lg:tracking-normal p-1">
          5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka – 1207
        </p>
      </div>
      <div className="container mx-auto flex flex-row justify-center items-center lg:my-5 sm:my-2 p-5">
        <Iframe
          className="lg:h-[600px] h-96"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4476133917806!2d90.34238047597263!3d23.767069888135048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c083149585f5%3A0xeb28ac94751626ca!2sBangladesh%20University!5e0!3m2!1sen!2sbd!4v1695574128293!5m2!1sen!2sbd"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          position="relative"
        ></Iframe>
      </div>
    </div>
  );
};

export default ContactUs;
