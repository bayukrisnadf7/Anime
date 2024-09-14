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
  const topAnime = await getAnimeResponse("top/anime", "limit=4");
  // anime
  const anime = await getAnimeResponse("anime", "limit=10");
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
      <div className="flex md:flex-row flex-col mx-2 justify-center">
        <div className="shadow md:w-1/6 h-max rounded-2xl mb-5 mt-5">
          <HeaderTopAnime title={"Top Anime"} />
          <TopAnime api={topAnime} />
          <FooterTopAnime />
        </div>
        <div className="flex flex-col md:w-2/3 mx-3 p-5 rounded-2xl mb-5">
          
          {/* Animes */}
          <section className="">
            <Header
              title={"Latest release"}
              linkHref="/animes"
              linkTitle={"View all"}
            />
            <AnimeList api={anime} />
          </section>
          {/* Recommendation Anime */}
          <section>
            <Header
              title={"Recommendation anime"}
              linkHref="/recomendations"
              linkTitle={"View all"}
            />
            <AnimeList api={recomendationAnime} />
          </section>
        </div>
        {/* <div className="md:w-1/3">
          <div className="border-2 shadow-sm h-max rounded-2xl">
            <Seasons api={season} />
          </div>
          <div className="border-2 shadow-sm h-max rounded-2xl mt-5">
            <AnimeGenre api={genreAnime} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Page;
