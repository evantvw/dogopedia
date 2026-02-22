import Image from "next/image";

import { parseCombinedMetricRange } from "@/libs/utils";
import { IBreed } from "@/types/DogList";
import { Heart } from "lucide-react";

interface Props {
  breed: IBreed;
}

const ContentSection = ({ breed }: Props) => {
  const height = parseCombinedMetricRange(breed.height.metric);
  const weight = parseCombinedMetricRange(breed.weight.metric);
  const stats = [
    {
      icon: <Heart fill="#618961" stroke="#618961" className="size-6" />,
      label: "Life Expectancy",
      unit: "Years",
      value: breed.life_span,
    },
    {
      icon: <Image src="/height.svg" width={24} height={24} alt="height" />,
      label: "Avg Height",
      unit: "cm",
      value: `${height.min}-${height.max}`,
    },
    {
      icon: <Image src="/weight.svg" width={24} height={24} alt="weight" />,
      label: "Avg Weight",
      unit: "kg",
      value: `${weight.min}-${weight.max}`,
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-5">
      <section className="p-5 bg-white rounded-md col-span-12 md:col-span-6 space-y-5">
        <h2 className="flex gap-2 items-center font-bold text-xl">
          <Image
            src={"/history.svg"}
            height={24}
            width={24}
            alt="history_logo"
          />
          History & Description
        </h2>
        <p className="font-inter text-sm sm:text-base text-justify">
          {breed.history}
        </p>
        <p className="font-inter text-sm sm:text-base text-justify">
          {breed.description}
        </p>
      </section>
      <section className="p-5 bg-white rounded-md col-span-12 md:col-span-6 space-y-5">
        <h2 className="flex gap-2 items-center font-bold text-xl">
          <Image src={"/stats.svg"} height={24} width={24} alt="history_logo" />
          Stats
        </h2>

        <div className="flex flex-col gap-5">
          {stats.map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="bg-gray-100 rounded-full p-4">{item.icon}</div>
              <div>
                <h3 className="font-semibold font-inter text-sm text-[#618961]">
                  {item.label}
                </h3>
                <p className="font-inter text-[#618961]">
                  <span className="font-bold text-2xl text-black">
                    {item.value}
                  </span>{" "}
                  {item.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
