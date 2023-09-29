import React from "react";
import { TfiCup } from "react-icons/tfi";

const Awards = () => {
  return (
    <div
      id="awards"
      className="lg:my-20 my-10"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <h1 className="text-center font-bold text-4xl mb-10 font-Poppins">
        Awards
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row md:p-5 justify-around items-center gap-5 md:gap-10 justify-items-center">
        <div className="bg-card w-[325px] lg:w-[450px] h-[300px] lg:h-[300px] rounded-xl shadow-xl">
          <div className="flex justify-center items-center pt-10">
            <div className="flex justify-center items-center pt-11 bg-green-600 h-24 w-24 rounded-full">
              <TfiCup
                className="relative bottom-5 text-primary"
                size={50}
              ></TfiCup>
            </div>
          </div>
          <div className="mt-10 text-center">
            <h1 className="font-Poppins px-2 font-semibold text-xl lg:text-2xl leading-loose tracking-widest">
              1st prize 30,000 Taka & Trophy
            </h1>
          </div>
        </div>
        <div className="bg-card w-[325px] lg:w-[450px] h-[300px] lg:h-[300px] rounded-xl shadow-xl">
          <div className="flex justify-center items-center pt-10">
            <div className="flex justify-center items-center pt-11 bg-sky-600 h-24 w-24 rounded-full">
              <TfiCup
                className="relative bottom-5 text-primary"
                size={50}
              ></TfiCup>
            </div>
          </div>
          <div className="mt-10 text-center">
            <h1 className="font-Poppins px-2 font-semibold text-xl lg:text-2xl leading-loose tracking-widest">
              2nd prize 20,000 Taka & Trophy
            </h1>
          </div>
        </div>
        <div className="bg-card w-[325px] lg:w-[450px] h-[300px] lg:h-[300px] rounded-xl shadow-xl">
          <div className="flex justify-center items-center pt-10">
            <div className="flex justify-center items-center pt-11 bg-orange-600 h-24 w-24 rounded-full">
              <TfiCup
                className="relative bottom-5 text-primary"
                size={50}
              ></TfiCup>
            </div>
          </div>
          <div className="mt-10 text-center">
            <h1 className="font-Poppins px-2 font-semibold text-xl lg:text-2xl leading-loose tracking-widest">
              3rd prize 10,000 Taka & Trophy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
