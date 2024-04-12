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
                    <Col xs="12" xxl={{ offset: 2, size: 7}} className={styles.contentText}>
                        <p>
                        Hi! I am Milton Neto, User experience designer, passionate about creating digital solutions that are intuitive, enjoyable and effective. With 8 years of experience in UX design and approximately 18 in user interface (UI), I have worked on large-scale projects for companies in a variety of sectors, including educational technology, investment and retail.<br />
                        <br />My approach is user-centered and data-driven. I believe that design should be inclusive and accessible to everyone, and I am always looking for ways to improve my skills and knowledge.
                        </p>                      
                        
                        <Col xs="12" xxl="12" className="quote">
                        "My goal is to evolve with each new delivery, that's why I say that my best work is always the next one."
                        </Col>
                    </Col>
                    
                    
                </Row>
            </>
    )
}