import styles from '../../styles/scss/components/sections/HowTo.module.scss'
import { Container, Row, Col, Progress } from "reactstrap"
import Image from 'next/legacy/image';


export default function SectionHowTo(){
    return(
        <>
            <Row className="contentText">
                Trabalhar com design de experiências digitais, é muito mais do que fazer telas bonitas, muitas vezes nem envolve "fazer telas". Nosso trabalho é criar soluções para serviços online e offline, tendo como direcionamento, os desejos, necessidades e "dores" de usuários para tornar o produtos, serviço, etc, mais fáceis, familiares ou agradáveis de serem usados.
            </Row>
            <Row>
                <div className={styles.boxList}>
                    <div className={styles.box}>
                        <Image src="/images/icones/experiencias.png" width={150} height={150} alt="Conheça meus trabalhos" className={styles.boxIcon}/>
                        <h6 className="boxText">Experimentação</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/prototype.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Prototipagem</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/jornadas.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">User Journey</h6>
                    </div>
                
                    <div className={styles.box}>
                    <Image src="/images/icones/strategy.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Estratégias</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/architecture.png"    width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Storytelling</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/mentoria.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
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
                            <Image src='/images/logos/figma.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Figma</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/photoshop.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Adobe Photoshop</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/illustrator.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Illustrator</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/xd.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>XD</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/premiere.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Premiere</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/after.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>After Effects</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/notion.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Notion</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/miro.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Miro</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/zeplin.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Zeplin</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/invision.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Invision</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/sass.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Sass</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/bootstrap.jpg' width='30' height='30' alt="Universidade Unisul" />
                            <span>Bootstrap</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/react.svg' width='30' height='30' alt="Universidade Unisul" />
                            <span>React Js</span>
                        </li>
                        <li className={styles.verticalBoxItem}>
                            <Image src='/images/logos/next.png' width='30' height='30' alt="Universidade Unisul" />
                            <span>Next Js</span>
                        </li>
                        
                    </ul>
                </Col>

                <Col xxl="6">
                    <h4 className="subtitle">
                        <Image src='/images/icones/skills-color.png' width="35" height="35" alt="subTitleIcon"/>
                        <span>Skills</span>
                    </h4>
                    
                    <ul className={styles.skillBoxList}>
                        <li className={styles.skillBoxItem}>
                            <span>UX Design</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={90} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>UX Strategy</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={90} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>UI Design</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={85} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>UX Research</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={65} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Arquitetura de informação</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={70} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Storytelling</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={85} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Web Design</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={95} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Prototipação</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={80} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Gamificação</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={70} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Métodos ágeis</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={65} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Design Thinking</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={75} />
                        </li>
                        
                        
                    </ul>
                </Col>
                    
                <Row>
                    <div className="quote">
                        Às vezes em um projeto, precisamos exercitar uma visão mais macro. É como um jogo de tabuleiro "VOLTE DUAS CASAS" e tente enxergar o que pode estar faltando!
                    </div>
                </Row>
            </Row>
        </>
    )
}