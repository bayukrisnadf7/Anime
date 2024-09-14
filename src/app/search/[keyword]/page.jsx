import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime?q=", `${decodeKeyword}`);
  return (
    <>
      <Navbar />
      <Header title={`Search ${decodeKeyword}`} />
      <AnimeList api={searchAnime} />
    </>
  );
};

export default Page;
