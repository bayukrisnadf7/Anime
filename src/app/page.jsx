import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  return (
    <div>
      <Navbar />
      {/* Anime Top */}
      <section>
        <Header
          title={"Top Anime"}
          linkHref="/populer"
          linkTitle={"See More"}
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime News */}
      {/* <section>
        <Header
          title={"Anime News"}
          linkHref="/news"
          linkTitle={"See More"}
        />
        <AnimeList api={topAnime} />
      </section>   */}
    </div>
  );
};

export default Page;
