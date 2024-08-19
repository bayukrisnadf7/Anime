import Link from "next/link";

const AnimeGenre = ({ api }) => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-xl font-bold mx-2 my-2">Anime Genres</h1>
      </div>
      <hr />
      <div className="flex flex-wrap grid grid-cols-3 mx-2 mt-1 mb-2">
        {api.data?.map((data) => {
          return (
            <div className="text-xs">
              <Link
                href={`/genre/${data.name}`}
                className="cursor-pointer hover:text-blue-500"
              >
                {data.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AnimeGenre;
