import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";
import TopAnime from "@/components/TopAnime";
import HeaderTopAnime from "@/components/TopAnime/header";
import FooterTopAnime from "@/components/TopAnime/footer";
import AnimeGenre from "@/components/AnimeGenre";
import Seasons from "@/components/Schedules";

// Function to shuffle an array

const Page = async () => {
  // top anime
  const topAnime = await getAnimeResponse("top/anime", "limit=5");
  // anime
  const anime = await getAnimeResponse("anime", "limit=24");
  // rekomendation with random after reset page
  let recomendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendationAnime = reproduce(recomendationAnime, 6);
  // genre anime
  const genreAnime = await getAnimeResponse("genres/anime");
  // schedule
  const season = await getAnimeResponse("schedules", "limit=9");

  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col justify-center mt-5 mx-2">
        <div className="border-2 shadow-xl md:w-1/6 w-max h-max rounded-2xl mb-5">
          <HeaderTopAnime title={"Top Anime"} />
          <TopAnime api={topAnime} />
          <FooterTopAnime />
        </div>
        <div className="flex flex-col md:w-2/3 mx-3 p-5 border-2 shadow-xl rounded-2xl mb-5">
          {/* Recommendation Anime */}
          <section>
            <Header
              title={"Recommendation anime"}
              linkHref="/recomendations"
              linkTitle={"View all"}
            />
            <AnimeList api={recomendationAnime} />
          </section>
          {/* Anime Top */}
          <section className="">
            <Header
              title={"Latest release"}
              linkHref="/populer"
              linkTitle={"View all"}
            />
            <AnimeList api={anime} />
          </section>
        </div>
        <div className="md:w-1/3">
          <div className="border-2 shadow-sm h-max rounded-2xl">
            <Seasons api={season} />
          </div>
          <div className="border-2 shadow-sm h-max rounded-2xl mt-5">
            <AnimeGenre api={genreAnime} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
