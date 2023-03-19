import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from "next/legacy/image";
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectMagnifiCourier(){
    return(
        <div>
        <div className={styles.header +" "+ styles.magnificourier} >
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
                        Foram realizadas entrevistas com diferentes perfis de usuários, que responderam a algumas perguntas referente ao uso de serviços de entrega e o quanto isso facilitaria no seu cotidiano.
                    </p>
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
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Já utilizou serviço de motoboy ou entrega?</li>
                                <li className={styles.personaAnswer}>Sim, certamente</li>
                            <li className={styles.personaQuestion}>Utilizaria entrega através de um aplicativo?</li>
                                <li className={styles.personaAnswer}>Sim, pra mim facilitaria muito</li>
                            <li className={styles.personaQuestion}>O que mais pesaria na escolha utilizar do app?</li>
                                <li className={styles.personaAnswer}>Ter dinamismo: agilidade, opções de entrega, cotações, informações claras e bem definidas (tempo e  opções de escolha de veículo a entregar) em tempo real e centralizadas em um único lugar</li>
                            <li className={styles.personaQuestion}>O que se espera ver num app de entrega?</li>
                                <li className={styles.personaAnswer}>Ponto de saída, ponto de entrega, tipos de entrega, confirmação de recebimento, de repente seria legal se soubesse o tamanho ou o peso do pacote que fosse receber, tem coisas que não dá pra carregar sozinha.</li>
                            <li className={styles.personaQuestion}>Aceitaria o uso de entrega compartilhada no caso de essa entrega demorar um pouco mais para ser realizada?</li>
                                <li className={styles.personaAnswer}>Sim, pois certamente o valor seria mais barato e, por não trabalhar com produtos perecíveis ou cargas vivas, não teria tanta pressa e poderia planejar e  aguardar.</li>

                            <li className={styles.personaQuestion}>Acha que é possível uma empresa se preocupar com meio ambiente trabalhando com meios de transporte, que são poluentes de um modo geral?</li>
                                <li className={styles.personaAnswer}>Se é possível, não consigo imaginar como, mas acho muito importante uma empresa seja qual for, se preocupar com meio ambiente, ter medidas internas talvez de coleta seletiva ou economia de papel, qualquer medida de preservação ambiental é bem vista.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                        <Image src="/images/projetos/magnificourier/persona-mauricio.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                        <p className={styles.personaQuote}>"Infelizmente alguns documentos ainda precisam ser assinados fisicamente, com essa história de pandemia, por mais que isso tenha agilizado a digitalização de muitos serviços, muita coisa ainda não é possível"
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Nome</label>
                                <br/>
                                Alex
                            </li>
                            <li>
                                <label>Idade</label>
                                <br/>
                                43 anos
                            </li>
                            <li> 
                                <label>Ocupação</label>
                                <br/>
                                Gerente administrativo
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Já utilizou serviço de motoboy ou entrega?</li>
                                <li className={styles.personaAnswer}>Sim, mais do que deveria inclusive</li>
                            <li className={styles.personaQuestion}>Utilizaria entrega através de um aplicativo?</li>
                                <li className={styles.personaAnswer}>Já utilizo vários, de comida principalmente</li>
                            <li className={styles.personaQuestion}>O que mais pesaria na escolha utilizar do app?</li>
                                <li className={styles.personaAnswer}>Não precisar procurar o menor preço e saber o horário que minha entrega será feita</li>
                            <li className={styles.personaQuestion}>O que se espera ver num app de entrega?</li>
                                <li className={styles.personaAnswer}>Custo, Previsão de entrega, Confirmação de recebimento;</li>
                            <li className={styles.personaQuestion}>Aceitaria o uso de entrega compartilhada no caso de essa entrega demorar um pouco mais para ser realizada?</li>
                                <li className={styles.personaAnswer}>Dependeria muito da minha urgência, às vezes preciso de uma entrega mais urgente, ou com horário marcado, hoje já temos serviços de documentos online, mas ainda assim algumas coisas precisam ser assinadas fisicamente e essas precisam ser mais rápidas.</li>
                                <li className={styles.personaQuestion}>Acha que é possível uma empresa se preocupar com meio ambiente trabalhando com meios de transporte, que são poluentes de um modo geral?</li>
                                    <li className={styles.personaAnswer}>Parece difícil né. Mas sei lá, seria importante, aqui na empresa a gente tem energia solar, é pouco, mas é um começo agora, com veículos parece mais utópico. Veículos elétricos talvez.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                    <Image src="/images/projetos/magnificourier/persona-rodrigo.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                    <p className={styles.personaQuote}>"Quanto mais entregas eu puder fazer, mais eu ganho, se eu puder economizar na gasolina e na manutenção da moto, melhor ainda. Poder programar mais de uma entrega por vez então seria bem legal, fazer uma rota só com várias entregas."
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Nome</label>
                                <br/>
                                Rodrigo
                            </li>
                            <li>
                                <label>Idade</label>
                                <br/>
                                39 anos
                            </li>
                            <li> 
                                <label>Ocupação</label>
                                <br/>
                                Motoboy
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Você utilizaria um app para receber chamados de entrega?</li>
                                <li className={styles.personaAnswer}>Sim, hoje a maioria do serviço vem por app</li>
                            <li className={styles.personaQuestion}>O que pesaria pra escolher trabalhar por app?</li>
                                <li className={styles.personaAnswer}>Volume de entrega, e os ganhos, o percentual do aplicativo.</li>
                            <li className={styles.personaQuestion}>Deixaria de fazer uma entrega de moto para fazer de bicicleta?</li>
                                <li className={styles.personaAnswer}>Se não fosse uma distância grande e se valesse a pena financeiramente, ainda mais com o valor do combustível hoje.</li>
                            <li className={styles.personaQuestion}>O que espera ver num app desse tipo?</li>
                                <li className={styles.personaAnswer}>Quanto vou receber por corrida, tamanho do pacote, distância e um mapa.</li>
                            <li className={styles.personaQuestion}>Uma empresa com responsabilidade ambiental, faz diferença na hora do profissional trabalhar?</li>
                                <li className={styles.personaAnswer}>Acho que essa é uma questão que quem se preocupa mais é o usuário, quem vai contratar, não o trabalhador.</li>
                        </ul>
                    </Col>
                </Row>
                
                    <h4 className={styles.sectionTitle}>Principais vantagens do App</h4>
                    <Col xxl="12" xs="12">
                        <p>
                        Considerando as respostas dos nossos entrevistados desenvolvemos um app que apliquem-se as seguintes vantagens:
                        </p>
                        <ul className={styles.sectionTopicList}>
                            <li>Centralização de serviços de courier e freteiros em um só aplicativo</li>
                            <li>Valores acessíveis</li>
                            <li>Incentivo a um sistema de entregas sustentável por meio de descontos</li>
                            <li>Previsionamento de horário de entrega</li>
                            <li>companhamento da rota de entrega</li>
                            <li>A empresa se compromete a plantar uma muda de árvore em área de reflorestamento para cada entrega realizada por bicicleteiro ou entrega compartilhada</li>
                            <li>Curva de aprendizado rápida, pois ele é baseado nos principais apps de mobilidade urbana do mercado</li>
                        </ul>
                    </Col>
                    
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Planejamento e Wireframes</h4>

                <p>
                    As entrevistas com possíveis usuários e com os stakeholders gerou o backlog de projeto, com o intuito de basear a criação em metodologia scrum:
                </p>
                <br/>
                <br/>
            </Row>
            
            <h5 className={styles.sectionSubtitle}>Versão User</h5>          
            
            <Row className={styles.cardPlanning}>            
                <Col xxl="4" xs="12">
                <h6 className={styles.sectionTopic}>Sprint 1 (MVP):</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Registro de origem</li>
                        <li>Registro de destino</li>
                        <li>Seleção do meio de entrega</li>
                        <li>Desconto por entrega compartilhada ou bicicleta</li>
                        <li>Registro de deslocamento para busca</li>
                        <li>Registro de deslocamento para entrega</li>
                        <li>Confirmação de recebimento</li>
                        <li>Avaliação do entregador</li>
                        <li>Token de plantação</li>
                    </ul>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Sprint 2:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Cadastro do tamanho do pacote</li>
                        <li>Cadastro do peso do pacote</li>
                        <li>Filtro de veículo pelo tamanho do pacote</li>
                        <li>Histórico de pedidos</li>
                        <li>Mapa do campo de plantação</li>                       
                    </ul>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Sprint 3:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Foto do comprovante de entrega</li>
                        <li>Duplicação de rota</li>
                        <li>Entregas com retorno (com pagamento por exemplo)</li>
                        <li>Foto do comprovante de entrega</li>
                        <li>Busca do token de plantação</li>
                        <li>Informações de saúde do item plantado</li>                        
                    </ul>
                </Col>
            </Row>

            <h5 className={styles.sectionSubtitle}>Versão Driver</h5>          
            
            <Row className={styles.cardPlanning}>            
                <Col xxl="6" xs="12">
                <h6 className={styles.sectionTopic}>Sprint 1 (MVP):</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Recebimento de pedido ( notificação com detalhes do pedidos)</li>
                        <li>Aceite(ou não) de coleta</li>
                        <li>Valor que será recebido pela entrega</li>
                        <li>Lista de entregas compartilhadas</li>
                        <li>Bloqueio por deslocamento</li>
                        <li>Lembrete de coleta</li>
                        <li>Coleta realizada</li>
                        <li>Coleta entregue</li>
                        <li>Envio de confirmação de entrega</li>
                    </ul>
                </Col>
                <Col xxl="6">
                   <h6 className={styles.sectionTopic}>Sprint 2:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Histórico de entregas com controle financeiro</li>
                        <li>Carteira digital</li>
                        <li>Valor em conta(total e comissionamento)</li>
                        <li>Transferência financeira</li>
                        <li>Configuração de meios de entrega disponíveis</li>
                        <li>Configuração da área de atendimento</li>
                        <li>Configuração do horário de disponibilidade</li>
                        <li>Criação automatizada de recolhimento de entregas compartilhadas</li>
                        <li>Inteligência permite coleta se ela estiver na rota de uma entrega</li>
                        
                        
                    </ul>
                </Col>
            </Row>

            <Row>
                <h5 className={styles.sectionSubtitle}>Wireframes</h5>
                <p>
                    O fluxo desenhado em wireframes:
                </p>

                <Col xxl="12" className={styles.cardFlow}>
                    <img src='/images/projetos/magnificourier/fluxo/flow1.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow2.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow3.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow4.png' alt="Imagem de projeto" className={styles.flowImage} />
                </Col>
                <Col xxl="12" className={styles.cardFlow}>
                    <img src='/images/projetos/magnificourier/fluxo/flow5.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow6.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow7.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow8.png' alt="Imagem de projeto" className={styles.flowImage} />
                </Col>
                <Col xxl="12" className={styles.cardFlow}>
                    <img src='/images/projetos/magnificourier/fluxo/flow9.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow10.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow11.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow12.png' alt="Imagem de projeto" className={styles.flowImage} />
                </Col>
                <Col xxl="12" className={styles.cardFlow}>
                    <img src='/images/projetos/magnificourier/fluxo/flow13.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow14.png' alt="Imagem de projeto" className={styles.flowImage} />
                    <img src='/images/projetos/magnificourier/fluxo/flow15.png' alt="Imagem de projeto" className={styles.flowImage} />
                </Col>
            </Row>

            <Row className={styles.breakline}></Row>
            <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Identidade visual</h4>
                <Col xxl="12" xs="12">
                    <p>
                    O aspecto mais importante dentro da MagnifiCourier, é a sua responsabilidade ambiental, a empresa quer fazer a diferença para o planeta, assim como para seus usuários. Conscientizar através do seus serviços, que o planeta precisa de atenção e mesmo o ato de realizar uma entrega, pode fazer diferença no resultado final, torcendo para que efeito borboleta seja efetivo nas mínimas ações.
                    <br/>
                    <br/>
                    <strong>Brainstorm de identidade e construção do conceito de entregas com responsabilidade ambiental:</strong>
                    </p>
                    <div className={styles.galleryID}>
                        <img src='/images/projetos/magnificourier/identidade/id1.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id2.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id3.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id4.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id5.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id6.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id7.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id8.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id9.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id10.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id11.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id12.png' alt="Imagem de projeto" className={styles.IDImage} />
                    </div>
                </Col>
                <br/><br/>
                <p>
                    <strong>Processo de criação da identidade</strong>
                   <br/>
                   As cores mais preponderantes e deram sentido às ideias, foram tons de verde e azuis, e os itens que mais se fizeram presentes foram folhas, map markers e relógios.<br />
A empresa tem o intuito de ser amigável, confiável e dinâmica, além de passar um ar de leveza por conta do seu viés ambiental. Por isso, a opção por uma tipografia mais fina, elegante e arredondada , tanto para a logotipia como para o conteúdo
                </p>
                <Row className={styles.breakline}></Row>
                <Row>
                    <Col xxl='5' className={styles.compositionID}>
                        <h5 className={styles.separationSubtitle}>
                            <strong>Cores:</strong>
                        </h5>

                        <ul>
                            <li className={styles.compositionColor +" "+ styles.gray}> </li>
                            <li className={styles.compositionColor +" "+ styles.blue}> </li>
                            <li className={styles.compositionColor +" "+ styles.lightgreen}> </li>
                            <li className={styles.compositionColor +" "+ styles.darkgreen}> </li>
                        </ul>
                    </Col>
                    <Col xxl='7'>
                        <h5 className={styles.separationSubtitle}>
                            <strong>Tipografia</strong>    
                        </h5>
                        <div className={styles.galleryType}>
                            <label>Logotipo: Poiret one</label>
                            <img src='/images/projetos/magnificourier/identidade/id13.png' alt="Imagem de projeto" className={styles.IDType} />
                            <label>Conteúdo: Quicksand  </label>
                        <img src='/images/projetos/magnificourier/identidade/id14.png' alt="Imagem de projeto" className={styles.IDType} />
                        </div>
                    </Col>
                </Row>
                <Row className={styles.breakline}></Row>
                <Row>
                    <Col xxl='7' className={styles.compositionID}>
                        <h5 className={styles.separationSubtitle}>
                            <strong>Itens formadores da Simbologia:</strong>
                            
                        </h5>
                        <div className={styles.galleryID}>
                        <img src='/images/projetos/magnificourier/identidade/id1.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id12.png' alt="Imagem de projeto" className={styles.IDImage} />
                        <img src='/images/projetos/magnificourier/identidade/id11.png' alt="Imagem de projeto" className={styles.IDImage} />
                        </div>
                    </Col>
                </Row>
                <Row className={styles.breakline}></Row>
                <Row>
                    <Col xxl='12' className={styles.compositionID}>
                    <h5 className={styles.separationSubtitle}>
                            <strong>Proposta de identidade:</strong>
                        </h5>
                    </Col>
                </Row>
                <Row>
                    <Col xxl='5' className={styles.IDpurpose}>
                    <img src='/images/projetos/magnificourier/identidade/id15.png' alt="Imagem de projeto" className={styles.IDImage} />
                    </Col>
                    <Col xxl='7' className={styles.IDpurpose}>
                    <img src='/images/projetos/magnificourier/identidade/id16.png' alt="Imagem de projeto" className={styles.IDImage} />
                    <img src='/images/projetos/magnificourier/identidade/id17.png' alt="Imagem de projeto" className={styles.IDImage} />
                    <img src='/images/projetos/magnificourier/identidade/id18.png' alt="Imagem de projeto" className={styles.IDImage} />
                    </Col>
                    
                </Row>
            </Row>

            <Row className={styles.sectionDivision}>
                
                <Col xxl="8">
                <h4 className={styles.sectionTitle}>O Projeto</h4>
                    <p>
                        Agora, feitas as devidas apresentações, chega de falar, pode reclinar o seu assento e curtir algumas das telas propostas do projeto:

                    </p>
                </Col>
                <Col xxl="4">
                    <img src='/images/projetos/magnificourier/telas/main-screen.png' alt="Imagem de projeto" className={styles.projImage} />
                </Col>
                
            </Row>

            <div className={styles.imageList}>
                <img src="/images/projetos/magnificourier/telas/s1.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s2.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s3.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s4.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s5.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s6.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s7.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s8.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s9.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s10.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s11.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s12.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s13.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s14.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s15.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s16.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s17.png" width="470" height="945" alt="Tela Projeto Magnificourier"/>
                
                
            </div>

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