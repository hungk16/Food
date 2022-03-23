import styles from "../styles/Facts.module.scss"

export const Facts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.facts}>
                    <div className={styles.fact__content}>
                        <h2>20</h2>
                        <h3>Restaurant</h3>
                    </div>

                    <div className={styles.fact__content}>
                        <h2>9</h2>
                        <h3>Years Experience</h3>
                    </div>

                    <div className={styles.fact__content}>
                        <h2>50+</h2>
                        <h3>Menu Dishes</h3>
                    </div>

                    <div className={styles.fact__content}>
                        <h2>250+</h2>
                        <h3>Happy Customers</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

