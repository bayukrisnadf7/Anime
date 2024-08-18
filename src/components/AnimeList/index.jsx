import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 mt-5 gap-1">
      {api.data?.map((anime) => {
        return (
          <div key={anime.mal_id} className="shadow-xl p-1">
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer">
            <Image
              src={anime.images.webp.image_url}
              width={350}
              height={350}
              alt={anime.title}
              className="w-full max-h-36 object-cover"
            />
            <h3 className="font-bold md:text-sm text-md">{anime.title}</h3>
          </Link>
        </div>
        );
      })}
    </div>
  );
};
export default AnimeList;

{/* grid ketika ukuran di web menggunakan md ketika responsive menggunakan sm dan ketika ditampilan mobile menggunakan default grid cols */}
      {/* <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-5 mx-5 gap-10">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div> */}
