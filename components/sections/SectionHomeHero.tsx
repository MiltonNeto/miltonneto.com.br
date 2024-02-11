import styles from '../../styles/scss/pages/ProjectPageUI.module.scss'

import { Container, Row, Col } from "reactstrap";

export default function SectionHomeHero(){
    return(
            <>  
                <div className={styles.main}>
                    <Container>
                        <Row>
                            <Col xxl={{ offset: 2, size: 8}}  className={styles.homeToolsList}>
                            <p className={styles.subject}>Milton Neto</p>
                            <h1 className={styles.projectTitle}>Experience, Interface & Product Designer</h1>
                            </Col>
                        </Row>
                    </Container>    
                    <video src={require('../../public/images/main-hero.mp4')}autoPlay muted loop className={styles.homeBanner}/>                    
                </div>

            </>
    )
}