import styles from '../../styles/scss/components/sections/HowTo.module.scss'
import { Container, Row, Col } from "reactstrap"
import Image from "next/image";

export default function SectionHowTo(){
    return(
        <Container>
            <section id="HowTo">
            <h3 className="sectionTitle">
                <Image src="/images/icones/writing-color.png" width="48" height="48" alt="Como eu faço" className='sectionTitleIcon'/>
                <span>Como eu faço</span>
            </h3>
            
            <Row className="contentText">
                Trabalhar com design de experiências digitais, é muito mais do que fazer telas bonitas, muitas vezes nem envolve "fazer telas". Nosso trabalho é criar soluções para serviços online e offline, tendo como direcionamento, os desejos, necessidades e "dores" de usuários para tornar o produtos, serviço, etc, mais fáceis, familiares ou agradáveis de serem usados.
            </Row>
            <Row>
                <div className={styles.boxList}>
                    <div className={styles.box}>
                        <Image src="/images/icones/experiencias.png" width="152" height="176" className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Experimentação</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/prototype.png" width="152" height="176" className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Prototipagem</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/jornadas.png" width="152" height="176" className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">User Journey</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/strategy.png" width="152" height="176" className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Estratégias</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/architecture.png" width="152" height="176" className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Storytelling</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/mentoria.png" width="152" height="176" className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Mentoria</h6>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="quote">
                    Trabalhar a inovação, facilitar a vida das pessoas, conceituar, testar, não tratar as pessoas somente como números são parte da nossa rotina.
                </div>
            </Row>

            <Row className='subcontent'>
                <Col xxl="6">
                    <h4 className="subtitle">
                        <Image src="/images/icones/tools-color.png" width="35" height="35" alt="subTitleIcon"/>
                        <span>Ferramentas</span>
                    </h4>
                    
                    <ul className={styles.verticalBoxList}>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Figma</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Adobe Photoshop</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Illustrator</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>XD</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Premiere</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>After Effects</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Notion</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Miro</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Zeplin</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Invision</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Sass</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Bootstrap</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>React Js</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="logo Tech"/>
                            <span>Next Js</span>
                        </li>
                        
                    </ul>
                </Col>

                <Col xxl="6">
                    <h4 className="subtitle">
                        <img src='/images/icones/skills-color.png' width="35" height="35" alt="subTitleIcon"/>
                        <span>Skills</span>
                    </h4>
                    <ul className={styles.verticalBoxList}>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>UX Design</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>UX Strategy</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>UI Design</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>UX Research</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>Arquitetura de informação</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>Storytelling</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>Web Design</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>Prototipação</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>Gamificação</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>Métodos ágeis</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <img alt="Tech Level"/>
                            <span>Design Thinking</span>
                        </li>
                        
                        
                    </ul>
                </Col>
                    
                <Row>
                    <div className="quote">
                        Às vezes em um projeto, precisamos exercitar uma visão mais macro. É como um jogo de tabuleiro "VOLTE DUAS CASAS" e tente enxergar o que pode estar faltando!
                    </div>
                </Row>
            </Row>
        </section>
    </Container>
    )
}