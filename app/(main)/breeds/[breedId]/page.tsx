import ContentSection from "./_components/ContentSection";
import HeaderSection from "./_components/HeaderSection";
import Link from "next/link";

import { getBreedList } from "@/services/getDogList";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const BreedDetailsPage = async ({
  params,
}: {
  params: Promise<{ breedId: string }>;
}) => {
  let breed = undefined;
  try {
    const { breedId } = await params;
    breed = await getBreedList(breedId);
  } catch (e) {
    notFound();
  }
  return (
    <>
      <Link href={"/"} className="flex gap-1.5 w-fit hover:underline">
        <ArrowLeft className="stroke-2" />
        <p className="font-medium font-inter">Back to Homepage</p>
      </Link>
      <div className="flex flex-col gap-5">
        {/* header section */}
        <HeaderSection breed={breed} />
        {/* description and stats section */}
        <ContentSection breed={breed} />
      </div>
    </>
  );
};

export default BreedDetailsPage;
