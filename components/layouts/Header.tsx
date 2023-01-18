import styles from '../../styles/scss/components/layouts/Header.module.scss'
import { Container } from 'reactstrap'

export default function Header(){
    return(
        <div className={styles.greetings}>
            <div className={styles.greetingsOverlay}>
            <Container>
                <h1 className={styles.mainLine}>Oi, muito prazer. Eu sou Milton Neto!</h1>
                <h2 className={styles.subline}>Sou designer e mentor de experiências e interfaces, ou se preferir UX e UI<br/>
                    fique a vontade, aproveite esse nosso bate-papo.
                </h2>
            </Container>
            </div>
        </div>
    )
}