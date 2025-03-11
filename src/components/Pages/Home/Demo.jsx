import { demoData } from "@/assets/data/demoData";
import Image from "next/image";
import Link from "next/link";

const Demo = () => {
  return (
    <section className="my-container">
      <div className="text-center">
        <h4 className="font-medium inline-block bg-primaryLight px-3 py-1 rounded-md text-primary">
          Industry-Wise Demo
        </h4>
        <h2 className="text-2xl lg:text-4xl font-bold mt-4">
          Experience The Latest Version of{" "}
          <span className="text-primary">Viscart</span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-10">
        {demoData?.map((item) => (
          <div
            key={item?.id}
            className="border-2 rounded-xl hover:border-primary duration-300 group hover:shadow-xl w-[300px] h-auto"
          >
            <div className="rounded-t-xl overflow-hidden w-full">
              <Image
                src={item?.image}
                alt={item?.title}
                width={300}
                height={300}
                className="object-cover w-full h-[200px] group-hover:scale-110 duration-500"
              />
            </div>
            <div className="mt-5 text-center px-4 pb-4">
              <h3 className="text-xl font-semibold">{item?.title}</h3>
              <p className="text-gray-500">{item?.description?.slice(0, 48)}</p>
              <Link href={item?.url} target="_blank">
                <button className="border border-primary rounded-lg text-sm px-6 py-2 hover:bg-primary hover:text-white duration-300 mt-3 font-medium">
                  Explore Demo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demo;
