import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectMagnifiCourier(){
    return(
        <div>
        <div className={styles.header +" "+ styles.alexa} >
            <Container>
                <h2 className={styles.projectTitle}>MagnifiCourier</h2>
            </Container>
        </div>

        <Container  className={styles.projectsBody}>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                    <label>Ferramentas:</label>
                    <li>Adobe XD</li>
                    <li>Miro</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Identidade Visual</li>
                    <li>Entrevistas Pessoais</li>
                    <li>Sustentabilidade Ecológica</li>
                    <li>Delivery App</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                
                <Col xxl="6">
                <h4 className={styles.sectionTitle}>Descrição</h4>
                <p>Proposta de projeto para um app de entregas, com a exigência de incentivar sustentabilidade ecológica.</p>
                <br/>
                <p>
                    O MagnifiCourier é um app que alia a solução e a facilidade dos principais aplicativos de mobilidade urbana do mercado, facilitando a vida de usuários que necessitam de transporte de pequenos ou grandes objetos, oferecendo opções ecossustentáveis.
                </p>
                </Col>
            
                <Col xxl="6" xs="12">         
                    <h4 className={styles.sectionTitle}>Como funciona</h4>
                    <p>Através de um sistema de descontos, ele incentiva o uso de Couriers (entregadores) bicicleteiros, ou ainda a Entrega Compartilhada (que diminui a frequência do Courier em trânsito), levando diversas coletas ao mesmo tempo, através de uma rota que o próprio aplicativo traça como sendo a mais eficaz e menos poluente.<br/>
                    Além de outras formas de incentivo, como o compromisso da empresa, no plantio de árvores de acordo com o uso do aplicativo.
                    </p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Usuários</h4>
                <Col xxl="12" xs="12">
                    <p>
                        Foram realizadas entrevistas com diferentes perfis de usuários, que responderam às seguintes perguntas:
                    </p>
                    <ul className={styles.sectionTopicList}>
                        <li>Já utilizou serviço de motoboy ou entrega?</li>
                        <li>Utilizaria entrega através de um aplicativo?</li>
                        <li>O que mais pesaria na escolha utilizar do app?</li>
                        <li>O que se espera ver num app de entrega?</li>
                        <li>Aceitaria o uso de entrega compartilhada no caso de essa entrega demorar um pouco mais para ser realizada?</li>
                    </ul>
                    <div className="quote">
                        Destaco aqui, como exemplo, duas personas que participaram destas pesquisas. E uma terceira, que participou como usuário do que seria a versão DRIVER do MagnifiCourier.
                    </div>
                </Col>
                <br/>
                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                        <Image src="/images/projetos/magnificourier/persona-daniela.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                        
                        <p className={styles.personaQuote}>"...por vezes me falta algum material, de produção e não posso sair para buscar, e ao mesmo tempo tenho prazos para entrega. Ao poonto que consigo me programar, algumas vezes preciso de algo com mais urgência. Imprevistos acontecem!"
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Nome</label>
                                <br/>
                                Daniela
                            </li>
                            <li>
                                <label>Idade</label>
                                <br/>
                                33 anos
                            </li>
                            <li> 
                                <label>Ocupação</label>
                                <br/>
                                Profissional autônoma
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaAnswers}>
                        <ul className={styles.sectionTopicList}>
                            <li>Já utilizou serviço de motoboy ou entrega?</li>
                                <li>Sim, certamente</li>
                            <li>Utilizaria entrega através de um aplicativo?</li>
                                <li>Sim, pra mim facilitaria muito</li>
                            <li>O que mais pesaria na escolha utilizar do app?</li>
                                <li>Ter dinamismo: agilidade, opções de entrega, cotações, informações claras e bem definidas ( tempo e  opções de escolha de veículo a entregar) em tempo real e centralizadas em um único lugar</li>
                            <li>O que se espera ver num app de entrega?</li>
                                <li>Ponto de saída, Ponto de entrega, Peso, Dimensões, Tipos de entrega, Confirmação de recebimento</li>
                            <li>Aceitaria o uso de entrega compartilhada no caso de essa entrega demorar um pouco mais para ser realizada?</li>
                                <li>Sim, pois certamente o valor seria mais barato e, por não trabalhar com produtos perecíveis ou cargas vivas, não teria tanta pressa e poderia planejar e  aguardar.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                        <Image src="/images/projetos/magnificourier/persona-mauricio.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                        <p className={styles.personaQuote}>"...por vezes me falta algum material, de produção e não posso sair para buscar, e ao mesmo tempo tenho prazos para entrega. Ao poonto que consigo me programar, algumas vezes preciso de algo com mais urgência. Imprevistos acontecem!"
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Nome</label>
                                <br/>
                                Daniela
                            </li>
                            <li>
                                <label>Idade</label>
                                <br/>
                                33 anos
                            </li>
                            <li> 
                                <label>Ocupação</label>
                                <br/>
                                Profissional autônoma
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaAnswers}>
                        <ul className={styles.sectionTopicList}>
                            <li>Já utilizou serviço de motoboy ou entrega?</li>
                                <li>Sim, certamente</li>
                            <li>Utilizaria entrega através de um aplicativo?</li>
                                <li>Sim, pra mim facilitaria muito</li>
                            <li>O que mais pesaria na escolha utilizar do app?</li>
                                <li>Ter dinamismo: agilidade, opções de entrega, cotações, informações claras e bem definidas ( tempo e  opções de escolha de veículo a entregar) em tempo real e centralizadas em um único lugar</li>
                            <li>O que se espera ver num app de entrega?</li>
                                <li>Ponto de saída, Ponto de entrega, Peso, Dimensões, Tipos de entrega, Confirmação de recebimento</li>
                            <li>Aceitaria o uso de entrega compartilhada no caso de essa entrega demorar um pouco mais para ser realizada?</li>
                                <li>Sim, pois certamente o valor seria mais barato e, por não trabalhar com produtos perecíveis ou cargas vivas, não teria tanta pressa e poderia planejar e  aguardar.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                    <Image src="/images/projetos/magnificourier/persona-rodrigo.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                    <p className={styles.personaQuote}>"...por vezes me falta algum material, de produção e não posso sair para buscar, e ao mesmo tempo tenho prazos para entrega. Ao poonto que consigo me programar, algumas vezes preciso de algo com mais urgência. Imprevistos acontecem!"
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Nome</label>
                                <br/>
                                Daniela
                            </li>
                            <li>
                                <label>Idade</label>
                                <br/>
                                33 anos
                            </li>
                            <li> 
                                <label>Ocupação</label>
                                <br/>
                                Profissional autônoma
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaAnswers}>
                        <ul className={styles.sectionTopicList}>
                            <li>Já utilizou serviço de motoboy ou entrega?</li>
                                <li>Sim, certamente</li>
                            <li>Utilizaria entrega através de um aplicativo?</li>
                                <li>Sim, pra mim facilitaria muito</li>
                            <li>O que mais pesaria na escolha utilizar do app?</li>
                                <li>Ter dinamismo: agilidade, opções de entrega, cotações, informações claras e bem definidas ( tempo e  opções de escolha de veículo a entregar) em tempo real e centralizadas em um único lugar</li>
                            <li>O que se espera ver num app de entrega?</li>
                                <li>Ponto de saída, Ponto de entrega, Peso, Dimensões, Tipos de entrega, Confirmação de recebimento</li>
                            <li>Aceitaria o uso de entrega compartilhada no caso de essa entrega demorar um pouco mais para ser realizada?</li>
                                <li>Sim, pois certamente o valor seria mais barato e, por não trabalhar com produtos perecíveis ou cargas vivas, não teria tanta pressa e poderia planejar e  aguardar.</li>
                        </ul>
                    </Col>
                </Row>
            </Row>

            
                <Row className={styles.breakline}></Row>
                
                <h3 className="sectionTitle">
                    <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                    <span>Veja outros trabalhos</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    )
}