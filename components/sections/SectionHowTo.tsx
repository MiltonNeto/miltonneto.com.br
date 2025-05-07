import styles from '../../styles/scss/components/sections/HowTo.module.scss'
import { Container, Row, Col, Progress } from "reactstrap"
import Image from 'next/legacy/image';


export default function SectionHowTo(){
    return(
        <>
            <Row className="contentText">
            Working with digital experience design is much more than making beautiful screens, many times it doesn't even involve "making screens". Our job is to create solutions for online and offline services, taking as direction, the desires, needs and "pains" of users to make the product, service, etc., easier, familiar or pleasant to use.
            </Row>
            <Row>
                <div className={styles.boxList}>
                    <div className={styles.box}>
                        <Image src="/images/icones/experiencias.png" width={150} height={150} alt="Conheça meus trabalhos" className={styles.boxIcon}/>
                        <h6 className="boxText">Experiencing</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/prototype.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Prototyping</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/jornadas.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">User Journey</h6>
                    </div>
                
                    <div className={styles.box}>
                    <Image src="/images/icones/strategy.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Strategies</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/architecture.png"    width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Storytelling</h6>
                    </div>
                    <div className={styles.box}>
                    <Image src="/images/icones/mentoria.png"   width={150} height={150} className={styles.boxIcon} alt="box Icon"/>
                        <h6 className="boxText">Mentoring</h6>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="quote">
                Working on innovation, making people's lives easier, conceptualizing, testing, not treating people just like numbers are part of our routine.
                </div>
            </Row>

            <Row className='subcontent'>
                <Col xxl="6">
                    <h4 className="subtitle">
                        <Image src="/images/icones/tools-color.png" width="35" height="35" alt="subTitleIcon"/>
                        <span>Tools</span>
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
                            <span>Information architecture</span>
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
                            <span>Prototyping</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={80} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Gamification</span>
                            <Progress barClassName={styles.progressColor} style={{ height: '3px'}} value={70} />
                        </li>
                        <li className={styles.skillBoxItem}>
                            <span>Agile Methods</span>
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
                    Sometimes in a project, we need to exercise a more macro vision. It's like a board game "TWO STEPS BACK" and try to see what might be missing!
                    </div>
                </Row>
            </Row>
        </>
    )
}