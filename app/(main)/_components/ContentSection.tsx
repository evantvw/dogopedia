import Card from "@/components/organisms/Card";

import { parseCombinedMetricRange } from "@/libs/utils";
import { IBreed } from "@/types/DogList";

interface Props {
  breedList: IBreed[];
}

const ContentSection = ({ breedList }: Props) => {
  return (
    <section className="mt-16">
      <h3 className="font-bold text-2xl sm:text-3xl mb-3">
        Featured Breeds of the Day
      </h3>
      <p className="text-base sm:text-lg text-neutral-600">
        Discover popular choices from our community
      </p>
      <div className="grid grid-cols-12 gap-6 sm:gap-8 sm:mt-5 mt-7">
        {breedList.map((breedItem) => (
          <Card
            key={breedItem.id}
            id={breedItem.id}
            title={breedItem.name}
            traits={breedItem.temperament.split(",")}
            alt={breedItem.name}
            height={parseCombinedMetricRange(breedItem.height.metric)}
            weight={parseCombinedMetricRange(breedItem.weight.metric)}
            src={breedItem.image.url}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
