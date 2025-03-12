import { demoData } from "@/assets/data/demoData";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Demo = () => {
  return (
    <section className="my-container">
      <div className="text-center">
        <h4 className="font-medium inline-block bg-primary/10 px-3 py-1 rounded-md text-primary">
          Industry-Wise Demo
        </h4>
        <h2 className="text-2xl lg:text-4xl font-bold mt-4">
          Experience The Latest Version of{" "}
          <span className="text-primary">Viscart</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-x-5 gap-y-5 lg:gap-y-12 justify-center mt-10">
        {demoData?.map((item) => (
          <Link
            href={item?.url ?? "/"}
            target="_blank"
            key={item?.id}
            className="group lg:w-[350px] h-auto shadow hover:shadow-lg rounded-xl hover:-translate-y-2 duration-500 mx-auto border"
          >
            <div className="rounded-t-xl overflow-hidden w-full">
              <Image
                src={item?.image}
                alt={item?.title}
                width={350}
                height={300}
                className="object-cover w-full h-[250px] border-b"
              />
            </div>
            <div className="mt-3 px-2 pb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item?.title}</h3>
              {item?.url && (
                <button className="text-sm flex flex-col items-center opacity-0 translate-x-[-10px] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
                  <div className="flex items-center gap-1">
                    <IoIosArrowRoundForward className="text-2xl" />
                    Explore Demo
                  </div>
                  <span className="w-0 h-[2px] bg-gray-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </button>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Demo;
