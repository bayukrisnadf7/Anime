import { getAnimeResponse } from "@/libs/api-libs";
import Navbar from "@/components/Utilities/Navbar";
const Page = ({ params })  => {
    const { names} = params
    const namesKeyword = decodeURI(names)

    // const genreAnime = getAnimeResponse(`anime/${namesKeyword}`)
    return (
        <div>
            <Navbar />
            {/* <div>
                {genreAnime.data?.map((data) => {
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
            </div> */}
        </div>
    )
}
export default Page