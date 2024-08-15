import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import Header from "@/components/AnimeList/header";

const Page = async ({ params}) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  );
  const searchAnime = await response.json();
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
