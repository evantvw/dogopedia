"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  id: number;
  src: string;
  alt: string;
  title: string;
  traits: string[];
  height: IRange;
  weight: IRange;
}

const Card = ({ id, src, alt, title, traits, height, weight }: Props) => {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="card bg-base-100 shadow-sm col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden cursor-pointer">
      <Link href={`/breeds/${id}`}>
        {/* Image Container: Added 'relative' and 'h-48' (or aspect-square) */}
        <div className="relative h-48 w-full">
          {!imageError ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-[50%_15%]"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => {
                setImageError(true);
              }}
            />
          ) : (
            <div className="bg-slate-200 text-gray-500 text-sm font-medium size-full flex flex-col justify-center items-center">
              No Image Available
            </div>
          )}
        </div>

        <div className="card-body p-5 gap-2.5">
          <h2 className="card-title font-bold text-xl mb-2">{title}</h2>

          {/* Traits Tags */}
          <div className="flex gap-2.5 flex-wrap">
            {traits.map((item) => (
              <div className="py-1 px-2 rounded-md bg-[#E7FDE7]" key={item}>
                <p className="text-xs font-medium text-[#053005] font-inter lowercase">{item}</p>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex gap-2.5 items-center mt-auto">
            <div className="flex gap-1.5 items-center">
              <Image src="/paw.svg" height={14} width={14} alt="Height icon" />
              <p className="text-xs text-[#618961] font-inter">
                {height.min}-{height.max}cm
              </p>
            </div>

            <div className="size-1 rounded-full bg-[#B0C4B0]" />

            <div className="flex gap-1.5 items-center">
              <Image
                src="/scale.svg"
                height={14}
                width={14}
                alt="Weight icon"
              />
              <p className="text-xs text-[#618961] font-inter">
                {weight.min}-{weight.max}kg
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
