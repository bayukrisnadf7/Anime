import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 mt-5 gap-3">
      {api.data?.map((data) => {
        return (
          <div key={data.mal_id} className="bg-color-secondary shadow-lg p-1 rounded-md">
          <Link href={`/anime/${data.mal_id}`} className="cursor-pointer">
            <Image
              src={data.images.webp.image_url}
              width={450}
              height={450}
              alt={data.title}
              className="w-full max-h-36 object-cover rounded-md"
              priority={false}
            />
            <h3 className="font-bold md:text-sm text-md">{data.title}</h3>
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
