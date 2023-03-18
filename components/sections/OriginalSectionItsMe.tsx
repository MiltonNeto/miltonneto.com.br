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
                        <span>Quem sou eu</span>
                    </h3>
                    </Col>
                    <Col xs="12" xxl={{ offset: 2, size: 7}} className={styles.contentText}>
                        <p>
                            Sou designer e mentor de experiências e interfaces, ou se preferir UX e UI. Moro em Canoas no Rio Grande do Sul, mas trabalho remoto também para diversas partes do mundo, como Espanha, Argentina, Estados Unidos, e Portugal. Sente-se, fique a vontade e aproveite esse nosso bate-papo.
                        </p>                      

                    </Col>
                    <Col xs="12" xxl="12" className="quote">
                        "Evoluir a cada entrega é meu objetivo, por isso digo que meu melhor trabalho é sempre o próximo."
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
                            <Image src='/images/logos/mackenzie.jpg' width='30' height='30' alt="Universidade Unisul" />
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
                        <Image src='/images/icones/ES-Spain-Flag-icon.png' width='30' height='30' alt="Universidade Unisul" />
                                <div className='boxListRightSide'>
                                    <h5 className='itemName'>Espanhol</h5>
                                    <span>Intermediário-Avançado</span>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </>
    )
}