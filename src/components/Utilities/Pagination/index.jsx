const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    if (page >= lastPage) {
      return alert("Page not found");
    } else {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  };
  const handlePrevPage = () => {
    if (page <= 1) {
      return alert("Page not found");
    } else {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };
  return (
    <div className="flex justify-center gap-4 mb-5 mt-5">
      <button
        onClick={handlePrevPage}
        className="transition all hover:text-blue-500"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition all hover:text-blue-500"
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
