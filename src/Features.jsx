import React from "react";

export default function Features() {
  return (
    <>
      <div className="flex flex-col bg-[#F4F6FC]  items-center py-40">
        <div className="text-center justify-center">
          <p className="text-lg">Features</p>
          <h1 className="text-3xl max-w-[630px] font-bold py-14">
            Design that solves problems, one product at a time
          </h1>
        </div>
        <div className="grid grid-cols-3 items-center gap-10 container max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mx-auto">
          <div className="bg-white w-full py-7 px-14 rounded-lg max-md:text-center max-md:mx-auto">
            <i className="text-2xl text-[#2405F2] fa fa-users "></i>
            <h3 className="py-5 font-semibold">Uses Client First</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="bg-white w-full py-7 px-14 rounded-lg max-md:text-center max-md:mx-auto ">
            {" "}
            <i className="text-2xl text-[#2405F2] fa fa-circle-check"></i>
            <h3 className="py-5 font-semibold">Two Free Revision Round</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="bg-white w-full py-7 px-14 rounded-lg max-md:text-center max-md:mx-auto">
            <i className="text-2xl text-[#2405F2] fa fa-pen-ruler"></i>
            <h3 className="py-5 font-semibold">Template Customization</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="bg-white w-full py-7 px-14 rounded-lg max-md:text-center max-md:mx-auto">
            <i className="text-2xl text-[#2405F2] fa fa-comments"></i>
            <h3 className="py-5 font-semibold">24/7 Support</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="bg-white w-full py-7 px-14 rounded-lg max-md:text-center max-md:mx-auto">
            <i className="text-2xl text-[#2405F2] fa fa-stopwatch"></i>
            <h3 className="py-5 font-semibold">Quick Delivery</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="bg-white w-full py-7 px-14 rounded-lg max-md:text-center max-md:mx-auto">
            <i className="text-2xl text-[#2405F2] fa fa-file-pen"></i>
            <h3 className="py-5 font-semibold">Hands-on approach</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
