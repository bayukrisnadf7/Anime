"use client";
import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { useEffect, useState } from "react";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <Navbar />
      {/* Anime Top */}
      <section>
        <HeaderMenu title={`Top Anime Page #${page}`} />
        <AnimeList api={topAnime} />
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </div>
  );
};

export default Page;
