import styles from '../../styles/scss/components/sections/HowTo.module.scss'
import { Row, Col} from "react-bootstrap"
import Image from 'next/legacy/image';


export default function SectionHowTo(){
    return(
        <>
            <Row>
                <Col xs="12" xxl="12">
                    <h3 className="sectionTitle">
                        <span>Atuação</span>
                    </h3>
                    <div className={styles.boxList}>
                        <div className={styles.box}>
                            <h6 className="boxText">
                                <Image src="/images/icones/compass.svg" width="23" height="23" alt="Ícone de Bússola" className={styles.iconList}/>
                                <span>Direcionamento e definição de produto</span>
                            </h6>
                            <p>Apoio na definição de caminhos e construção de soluções, equilibrando necessidades de negócio, usuário e viabilidade técnica.</p>
                        </div>
                    
                        <div className={styles.box}>
                            <h6 className="boxText">
                                <Image src="/images/icones/puzzle.svg" width="23" height="23" alt="Ícone de Bússola" className={styles.iconList}/>
                                <span>Estruturação de Produto</span>
                            </h6>
                            <p>Organizo cenários complexos antes de partir para a solução, garantindo clareza sobre o que realmente precisa ser resolvido.</p>
                        </div>
                        <div className={styles.box}>
                            <h6 className="boxText">
                                <Image src="/images/icones/target.svg" width="23" height="23" alt="Ícone de Bússola" className={styles.iconList}/>
                                <span>Experiência do Usuário</span>
                            </h6>
                            <p>Desenho fluxos e interações que reduzem fricção e tornam o uso mais intuitivo e previsível.</p>
                        </div>
                        <div className={styles.box}>
                            <h6 className="boxText">
                                <Image src="/images/icones/layers.svg" width="23" height="23" alt="Ícone de Bússola" className={styles.iconList}/>
                                <span>Interface e Consistência</span>
                            </h6>
                            <p>Desenvolvo interfaces claras e consistentes, com foco em escalabilidade e manutenção ao longo do tempo.</p>
                        </div>
                        <div className={styles.box}>
                            <h6 className="boxText">
                                <Image src="/images/icones/users.svg" width="23" height="23" alt="Ícone de Bússola" className={styles.iconList}/>
                                <span>Colaboração com Times</span>
                            </h6>
                            <p>Atuo de forma próxima com produto e tecnologia, participando das decisões e garantindo alinhamento ao longo do processo.</p>
                        </div>
                    </div>
                </Col>
            </Row>

           {/* <Row className='subcontent'>
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
            </Row>*/}
        </>
    )
}