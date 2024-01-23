import React from 'react'
import styles from './styles.module.css'
function Cards() {
    return (
        <div className={styles.cards}>
            <div className="container">
                <article className={styles.information}>
                    <span className={styles.tag}>Feature</span>
                    <h2 className={styles.title}>Never miss your important meetings</h2>
                    <p className={styles.info}>Elemenatary tracks all the events for the day as you scheduled and you will never have to worry.</p>

                </article>
            </div>
        </div>
    )
}

export default Cards