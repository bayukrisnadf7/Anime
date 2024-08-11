import Link from "next/link";
import AnimeList from "./components/AnimeList";
import Navbar from "./components/Navbar";

const Home = async () => {
  // SERVER COMPONENT
  // melakukan fetching data di env
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  const anime = await respone.json();

  return (
    <div>
      <Navbar />
      <div className="mx-5 mt-5 flex justify-between items-center">
        <h1 className="text-dark text-3xl font-bold">Top Anime</h1>
        <Link href="/about" className="text-blue-500">See all</Link>
      </div>
      {/* grid ketika ukuran di web menggunakan md ketika responsive menggunakan sm dan ketika ditampilan mobile menggunakan default grid cols */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-5 mx-5 gap-10">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
