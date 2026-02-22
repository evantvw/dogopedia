import { IBreed } from "@/types/DogList";

interface Props {
  breed: IBreed;
}

const HeaderSection = ({ breed }: Props) => {
  return (
    <section
      className="min-h-140 rounded-2xl mt-5 bg-cover bg-position-[50%_15%] p-5 sm:p-7 md:p-10 flex relative"
      style={{ backgroundImage: `url(${breed.image.url})` }}
    >
      <div className="absolute inset-0 bg-black opacity-25 rounded-2xl" />
      <div className="text-justify space-y-2 self-end z-10">
        <h1 className="font-extrabold text-4xl md:text-7xl text-white">
          {breed.name}
        </h1>
        <p className="text-lg md:text-xl text-neutral-100 font-inter">
          {breed.temperament}
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
