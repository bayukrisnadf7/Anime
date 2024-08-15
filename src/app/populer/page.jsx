"use client";
import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Utilities/Navbar";
import HeaderMenu from "@/components/Utilities/HeaderMenu/page";
import { useEffect, useState } from "react";
import Pagination from "@/components/Utilities/Pagination/page";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <Navbar />
      {/* Anime Top */}
      <section>
        <HeaderMenu title={`Top Anime Page`} />
        <AnimeList api={topAnime} />
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </div>
  );
};

export default Page;
