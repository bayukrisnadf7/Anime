import Link from "next/link"

const FooterTopAnime = () => {
    return (
        <div className="flex justify-center mb-2">
            <Link className="text-sm text-blue-500" href={"/populer"}>View all</Link>
        </div>
    )
}

export default FooterTopAnime