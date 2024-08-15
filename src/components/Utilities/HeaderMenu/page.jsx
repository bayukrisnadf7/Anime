const HeaderMenu = ( props) => {
    const { title } = props
    return (
        <div>
            <h1 className="text-3xl px-5 mt-3 font-bold">{title}</h1>
        </div>
    )
}
export default HeaderMenu