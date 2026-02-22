"use client";

import Image from "next/image";

import { dogId } from "@/constants";
import { useRouter } from "next/navigation";

const RandomGeneratorSection = () => {
  const router = useRouter();

  const handleGenerateRandomDog = () => {
    const randomIndex = Math.floor(Math.random() * dogId.length);
    const randomId = dogId[randomIndex];
    router.push(`/breeds/${randomId}`);
  };
  return (
    <section className="my-20">
      {/* Added 'group' for potential hover effects and ensured overflow-hidden is strict */}
      <div className="pt-10 px-8 sm:px-25 pb-15 rounded-3xl flex flex-col gap-6 items-center bg-[#E8FCE8] mx-auto w-fit relative overflow-hidden">
        {/* Top Left Glow */}
        <div className="absolute -top-20 -left-20 size-72 bg-green-400/30 rounded-full blur-[80px] pointer-events-none" />
        {/* Bottom Right Glow */}
        <div className="absolute -bottom-20 -right-20 size-72 bg-green-400/30 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6 items-center">
          <div className="bg-white p-4 rounded-full flex justify-center items-center w-fit shadow-sm">
            <Image src="/shuffle.svg" width={36} height={44} alt="shuffle" />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-4xl md:text-[42px] text-center text-slate-900">
              Not sure what you're looking for?
            </h2>
            <p className="text-lg md:text-2xl text-center font-light text-slate-700 max-w-2xl font-inter">
              Let fate decide! Discover a new furry friend with our random
              generator and learn something new today.
            </p>
          </div>
          <button
            onClick={handleGenerateRandomDog}
            className="px-8 py-4 rounded-2xl bg-[#13EC13] font-bold text-sm sm:text-lg cursor-pointer active:scale-95 shadow-lg shadow-green-200 hover:brightness-105 transition-all ease-in-out font-inter"
          >
            Try Random Dog Generator
          </button>
        </div>
      </div>
    </section>
  );
};

export default RandomGeneratorSection;
