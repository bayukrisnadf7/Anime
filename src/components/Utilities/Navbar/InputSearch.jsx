"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search anime ..."
          className="md:p-2 p-2 mt-2 rounded"
          ref={searchRef}
        />
        <button onClick={handleSearch} className="absolute top-3.5 right-0">
          <MagnifyingGlass size={30} />
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
