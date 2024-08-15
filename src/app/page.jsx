import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";

const Page = async () => {
  // SERVER COMPONENT
  // melakukan fetching data di env
  const responseTopAnime = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  );
  

  const topAnime = await responseTopAnime.json();

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
      <section>
        <Header
          title={"Anime News"}
          linkHref="/news"
          linkTitle={"See More"}
        />
        <AnimeList api={topAnime} />
      </section>  
    </div>
  );
};

export default Page;
