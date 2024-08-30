"use client"
import AnimeList from "@/components/AnimeList"
import Navbar from "@/components/Utilities/Navbar"
import { useState, useEffect } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Pagination from "@/components/Utilities/Pagination"
import Header from "@/components/AnimeList/header"


const Page = () => {
    const [page, setPage] = useState(1)
    const [animes, setAnimes] = useState([])

    const fectData = async () => {
        const animes = await getAnimeResponse("anime", `page=${page}`)
        setAnimes(animes)
    }
    useEffect(() => {
        fectData()
    }, [page])

    return (
        <>
        <Navbar />
        <div className="mx-3">
        <Header title={"Anime List"} />
        <AnimeList api={animes} />
        <Pagination page={page} lastPage={animes.pagination?.last_visible_page} setPage={setPage} />
        </div>
        </>
    )
}
export default Page