import SearchBar from "@/components/molecules/SearchBar";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center gap-8 overflow-hidden">
      {/* Paw Overlay Layer */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-0">
        <Image
          src="/paw.png"
          alt="paw"
          width={120}
          height={120}
          className="absolute top-10 left-10 opacity-10 rotate-12 bg-black rounded-full"
        />
        <Image
          src="/paw.png"
          alt="paw"
          width={100}
          height={100}
          className="absolute top-1/4 right-20 opacity-10 -rotate-12 bg-black rounded-full"
        />
        <Image
          src="/paw.png"
          alt="paw"
          width={140}
          height={140}
          className="absolute bottom-20 left-1/4 opacity-10 rotate-6 bg-black rounded-full"
        />
        <Image
          src="/paw.png"
          alt="paw"
          width={90}
          height={90}
          className="absolute bottom-32 right-10 opacity-10 -rotate-6 bg-black rounded-full"
        />
        <Image
          src="/paw.png"
          alt="paw"
          width={150}
          height={150}
          className="absolute top-82 left-10 opacity-10 -rotate-45 bg-black rounded-full"
        />
        <Image
          src="/paw.png"
          alt="paw"
          width={100}
          height={100}
          className="absolute top-10 right-90 opacity-10 rotate-20 bg-black rounded-full"
        />
      </div>

      <Image
        src="/paw.png"
        alt="paw"
        width={90}
        height={90}
        className=" bottom-32 right-10 opacity-10 -rotate-6"
      />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-8">
        <div className="w-72 h-72 relative mt-5">
          <Image
            src="/confused-dog.png"
            alt="confused-dog"
            fill
            className="rounded-full object-cover object-[55%]"
          />
        </div>

        <div className="space-y-5">
          <h1 className="font-extrabold text-5xl text-center text-black">
            404-Bark!
            <br />
            We couldn't find that <br /> page.
          </h1>
          <p className="font-inter text-center text-lg text-neutral-500">
            It looks like this page has run off to the park. Let us help <br />
            you find your way back home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 mb-5 w-full">
          <Link
            href={"/"}
            className="p-3 flex-1 rounded-xl bg-[#13EC13] font-bold text-sm sm:text-lg cursor-pointer active:scale-95 shadow-lg shadow-green-200 hover:brightness-105 transition-all ease-in-out font-inter flex gap-1 sm:gap-2 items-center justify-center"
          >
            <House />
            Back to Home
          </Link>
          <Suspense fallback={null}>
            <SearchBar className="hidden sm:flex flex-1 h-17" />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
