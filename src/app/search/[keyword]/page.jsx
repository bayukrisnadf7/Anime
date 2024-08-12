import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";

const Page = async ({ params}) => {
  const { keyword } = params
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return (
    <div>
      <Navbar />
      {/* Anime Top */}
      <section>
        <Header
          title={`Search ${keyword}`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
