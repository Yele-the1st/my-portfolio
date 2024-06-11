import Profiles from "@/components/Header/Profiles";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div id="header" className=" p-8 md:p-16">
      <div className=" w-full h-full md:flex ">
        <div className=" pt-8 md:pt-0 space-y-6 md:space-y-10 md:w-8/12 xl:w-9/12">
          <h1 className=" text-3xl md:text-7xl lg:text-8xl  xl:text-[170px] xl:leading-[1] font-semibold ">
            OMOYELE OLABODE.
          </h1>
          <p className=" md:pl-4 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            facilis officiis quaerat dolorum vel illum rem? Delectus provident
            amet deserunt reiciendis laborum maiores quia, tenetur ducimus
            exercitationem? Deleniti, sunt iste.
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
              <h3 className=" text-xs font-Meddon font-semibold">
                My principles
              </h3>
              <p className=" text-xs opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                explicabo quo earum soluta eligendi molestiae omnis voluptatum,
                nulla illum enim laborum mollitia commodi quod? Distinctio
                doloribus ducimus fugit ratione veniam.
              </p>
            </div>
            <div className=" mt-8 space-y-2">
              <h3 className=" text-xs font-Meddon font-semibold">My goal</h3>
              <p className=" text-xs opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
