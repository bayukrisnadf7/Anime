import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params}) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime?q=",`${decodeKeyword}`)
  return (
    <div>
      <Navbar />
      {/* Anime Top */}
      <section>
        <Header
          title={`Search ${decodeKeyword}`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
