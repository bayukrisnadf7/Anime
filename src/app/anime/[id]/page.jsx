import { getAnimeResponse } from "@/libs/api-libs";
import Navbar from "@/components/Utilities/Navbar";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const DetailAnime = async ({ params }) => {
  const { id } = params;
  const detailAnime = await getAnimeResponse(`anime/${id}/full`);
  const episodeAnime = await getAnimeResponse(`anime/${id}/episodes`);
  return (
    <>
      <Navbar />
      <div className="shadow-2xl p-5 mx-5 border-2 mt-5 rounded-2xl">
        <div className="text-center mt-5 text-3xl font-bold">
          <h1>{`${detailAnime.data.title} - ${detailAnime.data.year} `} </h1>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="text-1xl font-bold">{`Episode : ${detailAnime.data.episodes}`}</h1>
          </div>
          <div>
            <h1 className="text-1xl font-bold">{`Rating : ${detailAnime.data.score}`}</h1>
          </div>
          <div>
            <h1 className="text-1xl font-bold">{`Durasi : ${detailAnime.data.duration}`}</h1>
          </div>
        </div>
        <div className="flex md:flex-nowrap sm:flex-nowrap flex-wrap gap-5 mt-5 ">
          <Image
            src={detailAnime.data.images.jpg.image_url}
            alt={detailAnime.data.title}
            width={400}
            height={400}
          />
          <div className="mx-5">
            <p>{detailAnime.data.synopsis}</p>
            <p className="text-1xl font-bold mt-5">Episode :</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {episodeAnime.data.map((data) => {
                return (
                  <div key={data.id} className="">
                    <Link
                      href={`/anime/${id}/episodes/${data.mal_id}`}
                      className="cursor-pointer"
                    >
                      <button className="background bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {data.mal_id}
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <VideoPlayer videoId={detailAnime.data.trailer.youtube_id} />
      </div>
    </>
  );
};
export default DetailAnime;