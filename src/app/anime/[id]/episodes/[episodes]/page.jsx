import { getAnimeResponse } from "@/app/libs/api-libs";
import Navbar from "@/components/Utilities/Navbar";
const episodeAnime = async ({ params }) => {
  const { id, episodes } = params;
  const detailAnime = await getAnimeResponse(
    `anime/${id}/episodes/${episodes}`
  );
  console.log(detailAnime.data.url);
  return (
    <>
      <Navbar />
      <div className="shadow-2xl p-5 mx-5">
        <div className="text-center mt-5 text-3xl font-bold">
          <h1>{detailAnime.data.title}</h1>
        </div>
        <div className="mt-5">
          <p>Episode : {episodes}</p>
          <p className="text-1xl">
            {`Sinopsis : ${detailAnime.data.synopsis}`}
          </p>
        </div>
        {/* Menampilkan video */}
        <div className="mt-5">
          {detailAnime.data.url ? (
            <video width="100%" height="auto" controls>
              <source src={detailAnime.data?.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Video Tidak Tersedia</p>
          )}
        </div>
      </div>
    </>
  );
};
export default episodeAnime;
