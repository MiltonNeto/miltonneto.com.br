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
                        <li>Experiências</li>
                        <li>Interface</li>
                        <li>Mentoria</li>
                    </ul>
            </Container>
        </header>

        <div className={styles.greetings}>
            <div className={styles.greetingsOverlay}>
            <Container>
                <h1 className={styles.mainLine}>Olá, prazer em conhecê-lo(a). Meu nome é Milton Neto!</h1>
                <h2 className={styles.subline}>Sou designer e mentor de experiências e interfaces digitais, ou, se preferir, designer de UX e UI. Agora, fique à vontade e aproveite nosso bate-papo.
                </h2>
            </Container>
            </div>
        </div>
        </>
    )
}