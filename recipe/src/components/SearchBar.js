import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="search_bar">
            <input id="search_inp" type="text" placeholder="search all recipes" />
            <button id="search_btn">Search</button>
        </div>
    )
}

export default SearchBar