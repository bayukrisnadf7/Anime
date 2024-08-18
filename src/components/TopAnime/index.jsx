import Image from "next/image";
import Link from "next/link";


const TopAnime = ({ api }) => {
  return (
    <div className="mx-2">
      {api.data?.map((anime) => {
        return (
          <div key={anime.mal_id} className="shadow-xl p-1 mb-3">
            <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer">
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                alt={anime.title}
                className="w-full max-h-40 object-cover"
              />
              <h3 className="font-bold md:text-sm text-md">
                {anime.title}
              </h3>
              <p  className="text-xs text-green-500">Rating : {anime.score}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default TopAnime;
