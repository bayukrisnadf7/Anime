import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ title, images, id }) => {
  return (
    <div className="bg-white">
      <Link href={`/${id}`} className="cursor-pointer">
        <Image
          src={images}
          width={350}
          height={350}
          alt={title}
          className="w-full max-h-64 object-cover"
        />
        <h3 className="font-bold md:text-sm text-md p-3">{title}</h3>
      </Link>
    </div>
  );
};
export default AnimeList;
