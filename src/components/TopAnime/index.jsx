import Image from "next/image";
import Link from "next/link";

const TopAnime = ({ api }) => {
  return (
    <div className="grid md:grid-cols-1 grid-cols-2 md:mx-2 w-full">
      {api.data?.map((data) => {
        return (
          <div className="shadow p-1 mb-2 flex justify-center max-w-full mx-2">
            <Link href={`/anime/${data.mal_id}`} className="cursor-pointer">
              <div key={data.mal_id} className="w-full mt-2">
                <Image
                  src={data.images.webp.image_url}
                  width={350}
                  height={350}
                  alt={data.title}
                  className="md:max-h-40 max-h-60 object-cover"
                  priority= {false}
                />
                <h3 className="font-bold md:text-sm text-xs">{data.title}</h3>
                <p className="text-xs text-green-500">Rating : {data.score}</p>
                <p className="text-xs">{data.year}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default TopAnime;
