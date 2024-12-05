import React from "react";
import { Pointer1, Pointer2, Pointer3, Pointer4 } from "./image";

export default function HomeWork() {
  return (
    <div className="grid grid-cols-2 gap-20 my-32 container max-lg:grid-cols-1 ">
      <div className="max-lg:text-center">
        <h3 className="text-5xl font-bold ">How we work</h3>
        <p className="py-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <a href="#" className="text-[#2405F2] font-bold">
          Get in touch with us --{`>`}
        </a>
      </div>
      <div className="grid grid-cols-2 gap-10 max-w-[600px] max-md:grid-cols-1 max-lg:text-center">
        <div className="  w-full justify-center">
          <img src={Pointer1} alt="" />
          <h3 className="pt-5 font-bold text-xl">Strategy</h3>
          <p className="py-5 ">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
        <div className="">
          <img src={Pointer2} alt="" />
          <h3 className="pt-5 font-bold text-xl">Wireframing</h3>
          <p className="py-5 ">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
        <div>
          <img src={Pointer3} alt="" />
          <h3 className="pt-5 font-bold text-xl">Design</h3>
          <p className="py-5 ">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
        <div>
          <img src={Pointer4} alt="" />
          <h3 className="pt-5 font-bold text-xl">Development</h3>
          <p className="py-5 ">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
      </div>
    </div>
  );
}
