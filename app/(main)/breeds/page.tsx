import Card from "@/components/organisms/Card";
import FilterSection from "./_components/FilterSection";
import HeaderSection from "./_components/HeaderSection";

import { parseCombinedMetricRange } from "@/libs/utils";
import { getBreedList, searchBreed } from "@/services/getDogList";

const BreedsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const searchQuery = params.search;
  const sort = params.sort ?? "ASC";

  // if (!sort) {
  //   const oldParams = new URLSearchParams(params as Record<string, string>);
  //   oldParams.set("sort", "ASC");
  //   redirect(`/breeds?${oldParams.toString()}`);
  // }

  const breedList = searchQuery
    ? await searchBreed(searchQuery as string, sort as string)
    : await getBreedList();
  return (
    <>
      <HeaderSection />
      {/* filter section */}
      <FilterSection breedList={breedList} />
      {/* result section */}
      <section className="my-10 sm:my-15 grid grid-cols-12 gap-6 sm:gap-8 md:gap-12.5">
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
      </section>
    </>
  );
};

export default BreedsPage;
