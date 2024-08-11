const Navbar = () => {
    return(
        // jika ukuran di web maka menggunakan md : flex-row jika di mobile : flex-col
        <div className="bg-gray-800 w-full md:h-20 flex items-center justify-between p-4 md:flex-row flex-col">
            <h1 className="text-white text-3xl font-bold mx-5">AnimeTOP</h1>
            <input type="text" placeholder="Search anime ..." className="md:p-2 p-2 mt-2 rounded" />
        </div>
    )
}

export default Navbar