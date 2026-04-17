import styles from '../../styles/scss/components/sections/HowTo.module.scss'
import { Container, Row, Col, Progress } from "reactstrap"
import Image from 'next/legacy/image';


export default function SectionHowTo(){
    return(
        <>
            <Row className="contentText">
            Trabalhar com design de experiência digital vai muito além de criar telas bonitas; muitas vezes, nem sequer envolve "criar telas". Nosso trabalho é criar soluções para serviços online e offline, guiados pelos desejos, necessidades e dificuldades dos usuários, para tornar o produto, serviço etc. mais fácil, familiar e agradável de usar.
            </Row>
            <Row>
                <div className={styles.boxList}>
                    <div className={styles.box}>
                        <Image src="/images/icones/experiencias.png" width={150} height={150} alt="Conheça meus trabalhos" className={styles.boxIcon}/>
                        <h6 className="boxText">Experiencing</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/prototype.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Prototipando</h6>
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
                Trabalhar com inovação, facilitar a vida das pessoas, conceber ideias, testar e não tratar as pessoas apenas como números faz parte da nossa rotina.
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
                        <span>Habilidades</span>
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
                            <span>IA para Design</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={70} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Arquitetura da informação</span>
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
                    Às vezes, em um projeto, precisamos exercer uma visão mais macro. É como um jogo de tabuleiro chamado "DOIS PASSOS PARA TRÁS", onde tentamos identificar o que pode estar faltando!
                    </div>
                </Row>
            </Row>
        </>
    )
}