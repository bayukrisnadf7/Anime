"use client"

import AnimeList from "@/components/AnimeList"
import Navbar from "@/components/Utilities/Navbar"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getNestedAnimeResponse } from "@/libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [recomAnime, setRecomAnime] = useState([])


    const fetchData = async () => {
        const recomeAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
        setRecomAnime(recomeAnime)
    }
    useEffect(() => {
        fetchData()
    },[page])
    console.log(recomAnime)
    return (
        <>
        <Navbar />
        <AnimeList api={recomAnime} />
        </> 
    )
}
export default Page