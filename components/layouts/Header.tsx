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
                        <li>Experiência</li>
                        <li>Interface</li>
                        <li>Mentoria</li>
                    </ul>
            </Container>
        </header>

        <div className={styles.greetings}>
            <div className={styles.greetingsOverlay}>
            <Container>
                <h1 className={styles.mainLine}>Olá, é muito bom te conhecer. Eu sou Milton Neto!</h1>
                <h2 className={styles.subline}>Designer e mentor de experiências e interfaces digitais, ou se preferir, UX UI designer,sinta-se a vontade e curta a nossa conversa.
                </h2>
            </Container>
            </div>
        </div>
        </>
    )
}