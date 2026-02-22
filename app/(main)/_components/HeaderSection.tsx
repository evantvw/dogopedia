import SearchBar from "@/components/molecules/SearchBar";

const HeaderSection = () => {
  return (
    <section className="hero bg-[url(/hero.png)] min-h-140 rounded-2xl mt-5 flex flex-col gap-8 bg-position-[50%_0%] relative">
      <div className="absolute inset-0 bg-black opacity-35 rounded-2xl" />
      <h1 className="font-extrabold text-5xl md:text-7xl text-white text-center mt-32 z-10">
        Find your perfect <br />
        companion.
      </h1>
      <h2 className="font-light text-lg md:text-2xl text-neutral-100 text-center font-inter z-10">
        The ultimate encyclopedia for dog lovers. Discover breeds, facts,
        <br /> and more.
      </h2>
      <SearchBar className="h-12 w-10/12 md:w-5/12 mb-10" />
    </section>
  );
};

export default HeaderSection;
