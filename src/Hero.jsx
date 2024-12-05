import { HeroImg } from "./image";

const Hero = () => {
  return (
    <>
      <div className=" bg-[#1C1E53] ">
        <div className="container grid grid-cols-2 w-full py-44  mx-auto gap-20 max-lg:grid-cols-1 ">
          <div className="max-w-[500px] max-lg:order-2">
            <h2 className="text-5xl text-white font-bold  ">
              Building stellar websites for early startups
            </h2>
            <p className="text-white py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div>
              <a
                className="px-10 py-5 bg-[#FCD980] rounded-full mr-7 font-bold"
                href="#"
              >
                View our work
              </a>
              <a className="text-white" href="#">
                View Pricing --{`>`}
              </a>
            </div>
          </div>
          <div className="max-lg:order-1">
            <img src={HeroImg} alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
