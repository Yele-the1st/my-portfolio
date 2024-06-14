import Profiles from "@/components/Header/Profiles";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div id="header" className=" pt-8">
      <div className=" w-full h-full md:flex ">
        <div className=" pt-8 md:pt-0 space-y-6 md:space-y-10 md:w-8/12 xl:w-9/12">
          <h1 className=" text-3xl md:text-7xl lg:text-8xl  xl:text-[170px] xl:leading-[1] font-semibold ">
            OMOYELE OLABODE.
          </h1>
          <p className=" opacity-80 text-sm md:text-base md:pl-4 max-w-lg">
            A versatile Software Engineer with over 4 years of experience with
            expertise spanning frontend, backend, and mobile development, I
            thrive on solving complex problems and sharing my knowledge through
            teaching, writing, and speaking.
          </p>
          <p className=" font-Meddon text-2xl md:text-4xl md:pl-4">Heagis.</p>
          <div className="md:pl-2">
            <Profiles />
          </div>
        </div>
        <div className=" mt-4 md:mt-0 md:w-4/12 xl:w-3/12 ">
          <div className=" h-[400px]">
            <Image
              src={`/images/h3.png`}
              alt=""
              width={400}
              height={400}
              className=" w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className=" mt-8 ">
            <div className=" space-y-2">
              <h3 className=" text-xs font-Meddo font-semibold">
                MY PRINCIPLES
              </h3>
              <p className=" text-xs opacity-80">
                I prioritize quality, continuous learning, and collaboration.
                Integrity guides my actions, and I focus on user-centric design
                to ensure exceptional experiences.
              </p>
            </div>
            <div className=" mt-8 space-y-2">
              <h3 className=" text-xs font-Meddo font-semibold">MY GOAL</h3>
              <p className=" text-xs opacity-80">
                To leverage my extensive expertise in software development to
                build innovative solutions that enhance user experiences and
                drive business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
