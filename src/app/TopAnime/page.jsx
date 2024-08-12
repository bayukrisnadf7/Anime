import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";

const Page = async () => {
  // SERVER COMPONENT
  // melakukan fetching data di env
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );

  const topAnime = await response.json();

  return (
    <div>
      <Navbar />
      {/* Anime Top */}
      <section>
        <Header
          title={"Top Anime"}
          linkHref="/top/anime"
          linkTitle={"See More"}
        />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
