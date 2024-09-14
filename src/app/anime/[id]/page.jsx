import { getAnimeResponse } from "@/libs/api-libs";
import Navbar from "@/components/Utilities/Navbar";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const DetailAnime = async ({ params }) => {
  const { id } = params;
  const detailAnime = await getAnimeResponse(`anime/${id}/full`);
  const episodeAnime = await getAnimeResponse(`anime/${id}/episodes`);
  const recomAnime = await getAnimeResponse(`anime/${id}/recommendations`);
  const recommendationsAnime = (recomAnime.data.map(( data ) => {
    return data.entry
  }))
  console.log(recommendationsAnime);
  const episodes = detailAnime.data.episodes;
  return (
    <>
      <Navbar />
      <div className="mx-24 w-2/3">
        <div className="shadow-xl p-5 border-2 mt-5 rounded-2xl">
          <div className="mt-5">
            {/* <div>
            {episodes ? <h1 className="text-1xl font-bold">{`Episode : ${episodes}`}</h1> : null }
          </div>
          <div>
            <h1 className="text-1xl font-bold">{`Rating : ${detailAnime.data.score}`}</h1>
          </div>
          <div>
            <h1 className="text-1xl font-bold">{`Durasi : ${detailAnime.data.duration}`}</h1>
          </div> */}
          </div>
          <div className="flex md:flex-nowrap sm:flex-nowrap flex-wrap gap-5 mt-5 ">
            <Image
              src={detailAnime.data.images.jpg.image_url}
              alt={detailAnime.data.title}
              width={200}
              height={200}
            />
            <div className="mx-5">
              <div className="text-3xl font-bold">
                <h1>{detailAnime.data.title}</h1>
              </div>
              <div className="mt-5">
                {`${detailAnime.data.title_japanese}, ${detailAnime.data.title_english}, ${detailAnime.data.title_synonyms}`}
              </div>
              <div className="flex justify-between w-80 mt-3">
                <div className="flex flex-col">
                  <p>{`Released ${detailAnime.data.year}`}</p>
                  <p>{`Score ${detailAnime.data.score}`}</p>
                  <p>{`Season ${detailAnime.data.season}`}</p>
                </div>
                <div className="flex flex-col">
                  <p>{`Populer ${detailAnime.data.popularity}`}</p>
                  <p>{`Rank ${detailAnime.data.favorites}`}</p>
                  <p>{`Type ${detailAnime.data.type}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Sinopsis</h2>
            <p>{detailAnime.data.synopsis}</p>
          </div>
          <VideoPlayer videoId={detailAnime.data.trailer.youtube_id} />
        </div>
        <div className="shadow-xl p-5 border-2 mt-5 rounded-2xl overflow-y-auto h-96 mb-5">
          {episodes ? <p className="text-1xl font-bold mt-5">Episode</p> : null}
          <div className="gap-2 mt-2">
            {episodeAnime.data.map((data) => {
              return (
                <div key={data.id}>
                  <Link
                    href={`/anime/${id}/episodes/${data.mal_id}`}
                    className="cursor-pointer"
                  >
                    <div className="flex justify-between hover:bg-slate-600 hover:text-white mt-2 p-3 rounded-md">
                      <p className="font-bold">{data.mal_id}</p>
                      <p className="font-bold">{data.title}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailAnime;
