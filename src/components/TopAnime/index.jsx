import Image from "next/image";
import Link from "next/link";

const TopAnime = ({ api }) => {
  return (
    <div className="grid md:grid-cols-1 grid-cols-2 md:mx-2">
      {api.data?.map((anime) => {
        return (
          <div className="shadow p-1 mb-2 flex justify-center max-w-64 ">
            <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer">
              <div className="w-full mt-2">
                <Image
                  src={anime.images.webp.image_url}
                  width={350}
                  height={350}
                  alt={anime.title}
                  className="md:max-h-40  max-h-36 object-cover"
                />
                <h3 className="font-bold md:text-sm text-xs">{anime.title}</h3>
                <p className="text-xs text-green-500">Rating : {anime.score}</p>
                <p className="text-xs">{anime.year}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default TopAnime;
