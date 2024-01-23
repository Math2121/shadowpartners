import styles from './style.module.css'
function SearchBar() {
    return (
        <form className="container">
            <div className={styles.contentSearch}>
                <input
                    className={styles.inputSearch}
                    type="text"
                    id="search"
                    placeholder="Search something.." />
            </div>
        </form>
    )
}

export default SearchBar