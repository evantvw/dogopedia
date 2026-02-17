import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="dogopedia-logo"
      src={"/dogopedia.svg"}
      height={36}
      width={178}
    />
  );
};

export default Logo;
