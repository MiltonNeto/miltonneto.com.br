import styles from "../styles/scss/pages/ProjectPageUI.module.scss"

import { Container, Row, Col } from "reactstrap";

import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectRedesignFast(){
    return(
        <div>
        <div className={styles.header+" "+ styles.fastcompras} >
            <Container>
                <Row>
                    <Col xxl={{ offset: 2, size: 8}}  className={styles.toolsList}>
                    <p className={styles.subject}><strong>PORTFOLIO</strong> - User Interface</p>
                    <h1 className={styles.projectTitle}>Institutional Redesign Fastcompras Website</h1>
                    <p>Proposal for redesigning the institutional website, updating it with the first UX studies. Use of agile method techniques and user research, wireframes were not used to organize storytelling and information architecture</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <Container  className={styles.projectsBody}>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                    <label>Tools:</label>
                    <li>Photoshop</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Product Design</li>
                    <li>User Interviews</li>
                    <li>Visual identiy redesign</li>
                    <li>Review Design Patterns</li>
                    <li>Design system implementation</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/fastcompras/01.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/02.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/03.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/04.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/05.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/06.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/07.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/08.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/09.jpg" width="620" height="945" alt="Institutional redesign"/>
                    
                </div>
                </Col>
            </Row>




                <Row className={styles.breakline}></Row>
                
                <h3 className="sectionTitle">
                    <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                    <span>Veja outros trabalhos</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    )
}