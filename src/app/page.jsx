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

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-5 mx-5">
        <div className="border-2 shadow-2xl w-1/6 h-max rounded">
          <HeaderTopAnime
            title={"Top Anime"}
          />
          <TopAnime api={topAnime} />
          <FooterTopAnime />
        </div>
        <div className="flex flex-col w-2/3 mx-5 p-5 border-2 shadow-xl rounded mb-5">
          {/* Anime Top */}
          <section className="">
            <Header
              title={"Latest release"}
              linkHref="/populer"
              linkTitle={"View all"}
            />
            <AnimeList api={anime} />
          </section>
          {/* Recommendation Anime */}
          <section>
            <Header
              title={"Recommendation Anime"}
              linkHref="/recomendations"
              linkTitle={"See More"}
            />
            <AnimeList api={recomendationAnime} />
          </section>
        </div>
        <div className="border-2 shadow-2xl w-1/4 h-max rounded">
          <AnimeGenre api={genreAnime} />
        </div>
      </div>
    </>
  );
};

export default Page;
