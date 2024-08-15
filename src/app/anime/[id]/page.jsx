import Navbar from "@/components/Utilities/Navbar";
import Image from "next/image";


const DetailAnime = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );

  const detailAnime = await response.json();
  return (
    <>
      <Navbar />
      <div className="">
        
      </div>
    </>
  );
};
export default DetailAnime;
