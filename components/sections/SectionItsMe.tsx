import styles from '../../styles/scss/components/sections/ItsMe.module.scss'

import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

export default function SectionItsMe(){
    return(
            <>
                <Row>
                    
                    <Col xs="12" xxl="3">
                        <h3 className="sectionTitle">
                            <Image src='/images/eu-mobile.png' width="100" height="100" alt='Oi, esse sou eu ' className={styles.contentImage}/>
                        <span>Who I am</span>
                    </h3>
                    </Col>
                    <Col xs="12" xxl="9" className={styles.contentText}>
                        <p>
                        Senior UX/UI Designer with over 9 years of experience in user-centered design and 18 years in UI Design, combining creativity and advanced technical skills to create innovative digital products. <br/>Experience in design systems, high-fidelity prototyping, information architecture, WCAG (accessibility), user research and usability testing.Highlighted in the creation of a skill for Alexa devices, nominated for the Claro Mobile Time 2021 award, and in-depth knowledge of tools such as Figma, Adobe XD, Sketch, HTML and CSS. Collaborated with cross-functional teams in agile environments to solve complex problems and improve the user experience.
                        <br/>
                        <br/>
                        Highlighted in the creation of a skill for Alexa devices, nominated for the Claro Mobile Time 2021 award, and in-depth knowledge of tools such as Figma, Adobe XD, Sketch, HTML and CSS. Collaborated with cross-functional teams in agile environments to solve complex problems and improve the user experience.
                        </p>                      
                        
                        <Col xs="12" xxl="12" className="quote">
                        "My goal is to evolve with each new delivery, that's why I say that my best work is always the next one."
                        </Col>
                    </Col>
                    
                    
                </Row>
            </>
    )
}