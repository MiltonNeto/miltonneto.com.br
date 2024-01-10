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
                        I'm a designer and mentor of digital experiences and interfaces, or if you prefer UX and UI designer. I live in Canoas in Rio Grande do Sul, but I also work remotely to different parts of the world, such as Spain, Argentina, United States, and Portugal. Please sit back, make yourself comfortable and enjoy our chat.
                        </p>                      
                        
                        <Col xs="12" xxl="12" className="quote">
                        "My goal is to evolve with each new delivery, that's why I say that my best work is always the next one."
                        </Col>
                    </Col>
                    
                    
                </Row>
            </>
    )
}