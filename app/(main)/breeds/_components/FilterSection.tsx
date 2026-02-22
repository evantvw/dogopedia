import SearchBar from "@/components/molecules/SearchBar";
import SelectInput from "@/components/molecules/SelectInput";
import { IBreed } from "@/types/DogList";

interface Props {
  breedList: IBreed[];
}

const FilterSection = ({ breedList }: Props) => {
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
        <SelectInput options={[{ label: "ASC" }]} className="w-20 border-neutral-200" />
      </div>
    </section>
  );
};

export default FilterSection;
