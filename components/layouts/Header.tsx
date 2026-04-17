import styles from '../../styles/scss/components/layouts/Header.module.scss'
import { Container } from 'reactstrap'

export default function Header(){
    return(
        <>

        <header className={styles.TopHeader}>
            <Container>
                
                    <div className={styles.siteTitle}>
                        <p>Milton Neto</p>
                    </div>
                
                    <ul className={styles.SubjectHeader}>
                        <li>Experience</li>
                        <li>Interface</li>
                        <li>Mentoring</li>
                    </ul>
            </Container>
        </header>

        <div className={styles.greetings}>
            <div className={styles.greetingsOverlay}>
            <Container>
                <h1 className={styles.mainLine}>Hi there, nice to meet you. I'm Milton Neto!</h1>
                <h2 className={styles.subline}>I'm a designer and mentor of digital experiences and interfaces, or if you prefer, UX and UI designer, now please, feel free and enjoy our chat.
                </h2>
            </Container>
            </div>
        </div>
        </>
    )
}