import Link from "next/link";

const Seasons = ({ api }) => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold mx-2 my-2">Schedule</h1>
      </div>
      <hr />
      <div className="flex flex-col  mt-2 gap-1 mx-1">
        {api.data?.map((data) => {
          return (
            <>
              <div
                className="justify-between border mx-1 p-1 rounded-md"
              >
                <Link href={`/anime/${data.mal_id}`} className="cursor-pointer">
                  <h3 className="text-sm font-semibold w-full">
                    {data.title}
                  </h3>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;
