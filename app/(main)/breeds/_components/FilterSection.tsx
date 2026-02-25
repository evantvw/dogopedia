"use client";

import SearchBar from "@/components/molecules/SearchBar";
import SelectInput from "@/components/molecules/SelectInput";

import { sortOptions } from "@/constants";
import { IBreed } from "@/types/DogList";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface Props {
  breedList: IBreed[];
}

const FilterSection = ({ breedList }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";
  const sortQuery = searchParams.get("sort") ?? "ASC";

  const [sort, setSort] = useState(sortQuery);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSort(newValue);
    if (searchQuery.trim() !== "") {
      router.push(`/breeds?search=${searchQuery}&sort=${newValue}`);
    } else {
      router.push(`/breeds?sort=${newValue}`);
    }
  };
  return (
    <section className="rounded-2xl shadow-sm px-5 py-3 mt-10 bg-white flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
      {/* searchbar and limit option */}
      <SearchBar
        className="mb-0 h-10 w-full border-neutral-200"
        placeholder="Search breeds by name..."
      />

      <div className="flex gap-3 items-center w-full justify-between lg:justify-end">
        <p className="font-inter font-medium text-gray-800 text-base">
          {breedList.length} breeds
        </p>
        <SelectInput
          options={sortOptions}
          className="w-20 border-neutral-200"
          value={sort}
          onChange={handleSort}
        />
      </div>
    </section>
  );
};

export default FilterSection;
