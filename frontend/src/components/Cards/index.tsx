import { useContext } from 'react'
import styles from './styles.module.css'
import DataContext from '../../context/DataContext';
function Cards() {
    const { data } = useContext(DataContext);
    console.log(data)
    return (
        <div className={styles.cards}>
            <div className="container">
                {data.map(card => (
                    <article className={styles.information}>
                        <span className={styles.tag}>Information</span>
                        <h2 className={styles.title}>Name: {card.name}</h2>
                        <p className={styles.info}>City: {card.name}</p>
                        <p className={styles.info}>Country: {card.country}</p>
                        <p className={styles.info}>Favorite Sport: {card.favorite_sport}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Cards