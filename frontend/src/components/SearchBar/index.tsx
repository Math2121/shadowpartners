import { useContext, useState } from 'react';
import styles from './style.module.css'

import { searchData } from '../../services/requests/searchData';

import DataContext from '../../context/DataContext';
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const { setData } = useContext(DataContext);
    const handleSearch = async (value: string) => {
        console.log(value);
        setSearchTerm(value);

        const result = await searchData(searchTerm);
        setData(result?.data)


    };

    return (
        <form className="container">
            <div className={styles.contentSearch}>
                <input
                    className={styles.inputSearch}
                    type="text"
                    value={searchTerm}
                    id="search"
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search something.." />
            </div>
        </form>
    )
}

export default SearchBar