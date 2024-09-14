"use client"

import AnimeList from "@/components/AnimeList"
import Navbar from "@/components/Utilities/Navbar"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Header from "@/components/AnimeList/header"

const Page = () => {
    const [page, setPage] = useState(1)
    const [randomAnime, setRandomAnime] = useState([])

    const fetchData = async () => {
        const random = await getAnimeResponse("anime")
        setRandomAnime(random)
    }
    useEffect(() => {
        fetchData()
    },[page])
    return (
        <>
        <Navbar />
        <Header title={"Recomendations"} />
        <AnimeList api={randomAnime} />
        </> 
    )
}
export default Page