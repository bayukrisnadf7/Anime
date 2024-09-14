import InputSearch from "./InputSearch"

const Navbar = () => {
    return(
        // jika ukuran di web maka menggunakan md : flex-row jika di mobile : flex-col
        <div className="bg-color-primary w-full md:h-16 flex items-center justify-between p-4 md:flex-row flex-col">
            <h1 className="text-color-white text-xl font-bold mx-5">AnimeTOP</h1>
            <InputSearch />
            {/* <button className="bg-blue-500 text-white p-2 mx-5 mt-2 rounded" type="button">Login</button> */}
        </div>
    )
}

export default Navbar