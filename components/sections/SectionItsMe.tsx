import styles from '../../styles/scss/components/sections/ItsMe.module.scss'

import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

export default function SectionItsMe(){
    return(
        <Container>
            <section id="ItsMe">
                <h3 className="sectionTitle">
                    <Image src="/images/icones/alien-color.png" width='48' height='48' alt="Quem sou eu na fila do pão?" className='sectionTitleIcon' />
                    <span>Quem sou eu</span>
                </h3>
                
                <Row>
                    <Col xxl="8" className={styles.contentText}>
                        <p>
                            Tenho 40 anos, sou designer de experiências e interfaces. Há aproximadamente 16 anos dedico meu trabalho à criação e desenvolvimento de produtos digitais.
                        </p>
                        <br />
                        <p>
                            Minha experiência se divide entre consultorias, agência digital e ambiente corporativo, criando, desenhando, participando do planejamento de negócios online desde o briefing até a publicação e a mensuração dos resultados, buscar a melhor experiência, independente de qual o objetivo do produto, facilitar a vida do usuário e tornar as coisas mais simples. Tenho um perfil muito analítico no desenvolvimento de soluções e procuro me aperfeiçoar e qualificar constantemente.
                        </p>
                        <div className="quote">
                            "Evoluir a cada entrega é meu objetivo, por isso digo que meu melhor trabalho é sempre o próximo."
                        </div>

                    </Col>
                    <Col xxl="4">
                        <Image src='/images/eu.jpg' width="550" height="412" alt='Oi, esse sou eu ' className={styles.contentImage} />
                    </Col>
                </Row>

                <Row className='subcontent'>
                    <Col xxl="6">
                        <h4 className="subtitle">
                            <Image src="/images/icones/graduate-color.png" width="35" height="35" alt='Formação Acadêmica'/>
                            <span>Formação acadêmica</span>
                        </h4>
                        
                        <ul className='boxList'>
                            <li className='boxListItem'>
                                <Image src='/images/logos/unisul.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className='boxListRightSide'>
                                    <h5 className='itemName'>Produção Multimídia</h5>
                                    <span className="date">Unisul - 2016 -- 2018</span><br/>
                                    <span className='educationLevel'>Superior</span>
                                </div>
                            </li>
                            <li className='boxListItem'>
                            <Image src='/images/logos/uniritter.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className='boxListRightSide'>
                                    <h5 className='itemName'>User Experience</h5>
                                    <span className="date">Uniritter - 2018 -- 2020</span><br/>
                                    <span className='educationLevel' >Pós-graduação(Especialização)</span>
                                </div>
                            </li>
                            <li className='boxListItem'>
                            <Image src='/images/logos/Mackenzie.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className='boxListRightSide'>
                                    <h5 className='itemName'>Neurociências e psicologia aplicada</h5>
                                    <span>Mackenzie - 2022 -- 2023</span><br/>
                                    <span className='educationLevel' >Pós-graduação(Especialização)</span>
                                </div>
                            </li>
                        </ul>
                    </Col>

                    <Col xxl="6">
                        <h4 className="subtitle">
                            <Image src='/images/icones/translator-color.png' width='35' height='35' alt="subTitleIcon"/>
                            <span>Idiomas</span>
                        </h4>
                        <ul className='boxList'>
                        <li className='boxListItem'>
                        <Image src='/images/icones/brasil.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className='boxListRightSide'>
                                    <h5 className='itemName'>Português</h5>
                                    <span >Nativo</span>
                                </div>
                            </li>
                        <li className='boxListItem'>
                        <Image src='/images/icones/usa.png' width='30' height='30' alt="Universidade Unisul" />
                                <div className='boxListRightSide'>
                                    <h5 className='itemName'>Inglês</h5>
                                    <span >Avançado</span>
                                </div>
                            </li>
                        <li className='boxListItem'>
                        <Image src='/images/icones/ES-Spain-flag-icon.png' width='30' height='30' alt="Universidade Unisul" />
                                <div className='boxListRightSide'>
                                    <h5 className='itemName'>Espanhol</h5>
                                    <span>Intermediário-Avançado</span>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                
            </section>
        </Container>
    )
}