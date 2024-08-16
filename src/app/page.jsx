import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

// Function to shuffle an array


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  let recomendationAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recomendationAnime = reproduce(recomendationAnime, 6);

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
      {/* Recommendation Anime */}
      <section>
        <Header
          title={"Recommendation Anime"}
          linkHref="/news"
        />
        <AnimeList api={recomendationAnime} />
      </section>  
    </div>
  );
};

export default Page;
