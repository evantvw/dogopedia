import ContentSection from "./_components/ContentSection";
import HeaderSection from "./_components/HeaderSection";
import RandomGeneratorSection from "./_components/RandomGeneratorSection";

import { getBreedList } from "@/services/getDogList";

export default async function Home() {
  const breedList = await getBreedList(undefined, 4);
  return (
    <>
      {/* hero */}
      <HeaderSection />
      <ContentSection breedList={breedList} />
      <RandomGeneratorSection />
    </>
  );
}
