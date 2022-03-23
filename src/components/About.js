import styles from "../styles/About.module.scss"
import bg1 from "../assets/bg1.jpg"
import restaurant from "../assets/restaurant.jpg"

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg1}>
                <img src={bg1} alt="bg1"/>
            </div>

            <div className={styles.restaurant}>
                <img src={restaurant} alt="restaurant"/>
                <div className={styles.about}>
                    <h2>Abouts Us</h2>
                    <h3>We Always Serve your Better</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio doloremque esse
                        maxime provident. A, autem distinctio ipsum, labore minima neque non odio officiis perspiciatis
                        placeat, porro qui rem ut.</p>
                </div>
            </div>
        </div>
    )
}
    
