import styles from '../styles/scss/pages/ProjectsPage.module.scss'
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/legacy/image";
import SectionPortfolio from '../components/sections/SectionPortfolio'
import Head from 'next/head';

export default function ProjectMagnifiCourier(){
    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        </Head>
        
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
                <p>Proposta de projeto para um aplicativo de entregas, com o requisito de promover a sustentabilidade ecológica.</p>
                <br/>
                <p>
                O MagnifiCourier é um aplicativo que combina a praticidade e a facilidade dos principais aplicativos de mobilidade urbana do mercado, simplificando a vida dos usuários que precisam transportar objetos pequenos ou grandes, oferecendo opções ecossustentáveis.
                </p>
                </Col>
            
                <Col xxl="6" xs="12">         
                    <h4 className={styles.sectionTitle}>Como funciona</h4>
                    <p>Por meio de um sistema de descontos, incentiva o uso de entregadores de bicicleta ou mesmo a Entrega Compartilhada (que reduz a frequência de deslocamento do entregador), realizando várias coletas simultaneamente, em uma rota que o próprio aplicativo indica como a mais eficiente e menos poluente.<br/>
                    Além de outras formas de incentivos, como o compromisso da empresa em plantar árvores de acordo com o uso do aplicativo.
                    </p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Usuários</h4>
                <Col xxl="12" xs="12">
                    <p>
                    Foram realizadas entrevistas com diferentes perfis de usuários, que responderam a algumas perguntas sobre o uso de serviços de entrega e o quanto isso facilitaria seu dia a dia.
                    </p>
                    <div className="quote">
                    Destaco aqui, a título de exemplo, duas pessoas que participaram nessas pesquisas. E uma terceira, que participou como usuária daquela que seria a versão DRIVER do MagnifiCourier.
                    </div>
                </Col>
                <br/>
                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                        <Image src="/images/projetos/magnificourier/persona-daniela.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                        
                        <p className={styles.personaQuote}>"...às vezes me falta algum material de produção e não consigo sair para comprá-lo, e ao mesmo tempo tenho prazos de entrega. A ponto de eu conseguir programar tudo sozinho, às vezes preciso de algo com mais urgência. Imprevistos acontecem!"
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
                                <label>Profissão</label>
                                <br/>  
                                    Profissional Autônoma
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Você já utilizou um serviço de motoboy ou de entregas?</li>
                                <li className={styles.personaAnswer}>Sim, certamente</li>
                            <li className={styles.personaQuestion}>Utilizaria entrega através de um aplicativo?</li>
                                <li className={styles.personaAnswer}>Não vejo porque não</li>
                            <li className={styles.personaQuestion}>Qual seria o fator mais importante na decisão de usar o aplicativo?</li>
                                <li className={styles.personaAnswer}>Tenha dinamismo: agilidade, opções de entrega, orçamentos, informações claras e bem definidas (prazo e opções para escolha do veículo a ser entregue) em tempo real e centralizadas em um único lugar.</li>
                            <li className={styles.personaQuestion}>O que você espera encontrar em um aplicativo de entregas?</li>
                                <li className={styles.personaAnswer}>Ponto de partida, ponto de entrega, tipos de entrega, confirmação de recebimento; talvez fosse bom saber o tamanho ou o peso do pacote que você vai receber, pois há coisas que você não pode carregar sozinho.</li>
                            <li className={styles.personaQuestion}>Você aceitaria o uso de entrega compartilhada caso a entrega demore um pouco mais para ser concluída?</li>
                                <li className={styles.personaAnswer}>Sim, porque o valor certamente seria menor e, como não trabalho com produtos perecíveis ou animais vivos, não teria tanta pressa e poderia planejar e esperar.</li>

                            <li className={styles.personaQuestion}>Você acha possível que uma empresa se preocupe com o meio ambiente ao trabalhar com meios de transporte que, de modo geral, são poluentes?</li>
                                <li className={styles.personaAnswer}>Se for possível, não consigo imaginar como, mas acho muito importante que qualquer empresa, seja qual for o ramo, se preocupe com o meio ambiente, que tenha medidas internas, talvez para coleta seletiva ou economia de papel; qualquer medida de preservação ambiental é bem-vinda.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                        <Image src="/images/projetos/magnificourier/persona-mauricio.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                        <p className={styles.personaQuote}>"Infelizmente, alguns documentos ainda precisam ser assinados fisicamente. Com a pandemia, embora muitos serviços tenham sido digitalizados, muita coisa ainda não é possível."
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
                                <label>Profissão</label>
                                <br/>
                                Gerente Administrativo
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Você já utilizou um serviço de motoboy ou de entregas?</li>
                                <li className={styles.personaAnswer}>Sim, mais do que deveria.</li>
                            <li className={styles.personaQuestion}>Você usaria um aplicativo de entrega?</li>
                                <li className={styles.personaAnswer}>Eu já uso vários, principalmente para comida.</li>
                            <li className={styles.personaQuestion}>Qual seria o fator mais importante na decisão de usar o aplicativo?</li>
                                <li className={styles.personaAnswer}>Não precisa procurar o menor preço e já sabe o horário da minha entrega.</li>
                            <li className={styles.personaQuestion}>O que você espera encontrar em um aplicativo de entregas?</li>
                                <li className={styles.personaAnswer}>Custo, previsão de entrega, confirmação de entrega;</li>
                            <li className={styles.personaQuestion}>Você aceitaria o uso de entrega compartilhada caso a entrega demore um pouco mais para ser concluída?</li>
                                <li className={styles.personaAnswer}>Dependeria muito da minha urgência; às vezes preciso de uma entrega mais urgente ou de um agendamento. Hoje em dia já existem serviços de documentos online, mas algumas coisas ainda precisam ser assinadas fisicamente, e essas precisam ser mais rápidas.</li>
                                <li className={styles.personaQuestion}>Você acha possível que uma empresa se preocupe com o meio ambiente ao trabalhar com meios de transporte que, de modo geral, são poluentes?</li>
                                    <li className={styles.personaAnswer}>Parece difícil, né? Mas não sei, seria importante. Aqui na empresa temos energia solar, não é muita coisa, mas já é um começo. Com veículos, parece mais utópico. Veículos elétricos, talvez.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                    <Image src="/images/projetos/magnificourier/persona-rodrigo.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                    <p className={styles.personaQuote}>"Quanto mais entregas eu fizer, mais eu ganho. Se eu puder economizar com gasolina e manutenção da moto, melhor ainda. Seria muito legal poder agendar mais de uma entrega por vez, fazer uma única rota com várias entregas."
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
                                <label>Profissão</label>
                                <br/>
                                Motoboy
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Você usaria um aplicativo para receber chamadas de entrega?</li>
                                <li className={styles.personaAnswer}>Sim, hoje em dia a maior parte do atendimento é feita por meio de aplicativos.</li>
                            <li className={styles.personaQuestion}>O que te ajudaria a optar por trabalhar por meio de um aplicativo?</li>
                                <li className={styles.personaAnswer}>Volume de entregas e ganhos, a porcentagem da aplicação.</li>
                            <li className={styles.personaQuestion}>Você deixaria de fazer entregas de motocicleta para fazê-las de bicicleta?</li>
                                <li className={styles.personaAnswer}>Se não fosse uma longa distância e se valesse a pena financeiramente, ainda mais com os preços atuais dos combustíveis.</li>
                            <li className={styles.personaQuestion}>O que você espera encontrar em um determinado tipo de aplicativo?</li>
                                <li className={styles.personaAnswer}>Qual será o valor da entrega, o tamanho do pacote, a distância e o mapa?</li>
                            <li className={styles.personaQuestion}>Uma empresa com responsabilidade ambiental faz diferença quando um profissional trabalha nela?</li>
                                <li className={styles.personaAnswer}>Penso que esta é uma questão que preocupa mais o utilizador, que está interessado em saber quem vai contratar, e não o trabalhador.</li>
                        </ul>
                    </Col>
                </Row>
                
                    <h4 className={styles.sectionTitle}>Principais vantagens do aplicativo</h4>
                    <Col xxl="12" xs="12">
                        <p>
                        Considerando as respostas dos nossos entrevistados, desenvolvemos um aplicativo com as seguintes vantagens:
                        </p>
                        <ul className={styles.sectionTopicList}>
                            <li>Centralização de serviços de entrega e frete em um único aplicativo</li>
                            <li>Valores acessíveis</li>
                            <li>Incentivo a um sistema de entrega sustentável por meio de descontos</li>
                            <li>Previsão de tempo de entrega</li>
                            <li>Rastreamento de rota de entrega</li>
                            <li>A empresa compromete-se a plantar uma muda de árvore em uma área de reflorestamento para cada entrega realizada por transportadora de bicicleta ou entrega compartilhada.</li>
                            <li>Curva de aprendizado rápida, pois é baseado nos principais aplicativos de mobilidade urbana do mercado.</li>
                        </ul>
                    </Col>
                    
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Planejamento e Wireframes</h4>

                <p>
                Entrevistas com potenciais usuários e partes interessadas geraram o backlog do projeto, com o objetivo de basear sua criação na metodologia Scrum:
                </p>
                <br/>
                <br/>
            </Row>
            
            <h5 className={styles.sectionSubtitle}>Versão de Usuário:</h5>          
            
            <Row className={styles.cardPlanning}>            
                <Col xxl="4" xs="12">
                <h6 className={styles.sectionTopic}>Sprint 1 (MVP):</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Registro de origem</li>
                        <li>Registro do destino</li>
                        <li>Seleção do método de entrega</li>
                        <li>Sistema de descontos para entregas compartilhadas ou de bicicleta.</li>
                        <li>Tempo previsto para busca</li>
                        <li>Tempo previsto para entrega</li>
                        <li>Confirmação de entrega</li>
                        <li>Avaliação do entregador</li>
                        <li>Token da Plantação</li>
                    </ul>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Sprint 2:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Registro de tamanho de pacote</li>
                        <li>Registro do peso do pacote</li>
                        <li>Filtro de veículos por tamanho da embalagem</li>
                        <li>Histórico de pedidos</li>
                        <li>Mapa do campo de plantação</li>                       
                    </ul>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Sprint 3:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Foto do comprovante de entrega</li>
                        <li>Duplicação de rota</li>
                        <li>Retorno do entregador (com pagamento, por exemplo)</li>
                        <li>Busca da árvore por token</li>
                        <li>Informações sobre a saúde da planta</li>
                    </ul>
                </Col>
            </Row>

            <h5 className={styles.sectionSubtitle}>Versãro do Driver</h5>          
            
            <Row className={styles.cardPlanning}>            
                <Col xxl="6" xs="12">
                <h6 className={styles.sectionTopic}>Sprint 1 (MVP):</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Recebimento do pedido (notificação com detalhes do pedido)</li>
                        <li>Aceitar ou não, a coleta</li>
                        <li>Valor a ser recebido para entrega</li>
                        <li>Lista de entrega compartilhada</li>
                        <li>Bloqueio de deslocamento</li>
                        <li>Lembrete de coleta</li>
                        <li>Coleta realizada</li>
                        <li>Coleta entregue</li>
                        <li>Envio da confirmação de entrega</li>
                    </ul>
                </Col>
                <Col xxl="6">
                   <h6 className={styles.sectionTopic}>Sprint 2:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Histórico de entregas com controle financeiro</li>
                        <li>Carteira digital</li>
                        <li>Valor da conta (total e comissão)</li>
                        <li>Transferência financeira</li>
                        <li>Configuração dos meios de entrega disponíveis</li>
                        <li>Configuração da área de serviço</li>
                        <li>Configuração de horário de disponibilidade</li>
                        <li>Criação automatizada de coletas de entrega compartilhadas</li>
                        <li>A inteligência permite a coleta se o produto estiver a caminho de uma entrega.</li>
                        
                        
                    </ul>
                </Col>
            </Row>

            <Row>
                <h5 className={styles.sectionSubtitle}>Wireframes</h5>
                <p>
                O fluxograma desenhado em wireframes:
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
            <h4 className={styles.sectionTitle}>Identidade Visual</h4>
                <Col xxl="12" xs="12">
                    <p>
                    O aspecto mais importante da MagnifiCourier é a sua responsabilidade ambiental. A empresa quer fazer a diferença para o planeta, assim como para os seus utilizadores. Através dos seus serviços, a MagnifiCourier sensibiliza as pessoas para a necessidade de cuidar do planeta e mostra que até o ato de fazer uma entrega pode fazer a diferença no resultado final, na esperança de que o efeito borboleta se manifeste nas mais pequenas ações.
                    <br/>
                    <br/>
                    <strong>Brainstorming de identidade e construção do conceito de entregas com responsabilidade ambiental:</strong>
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
                    <strong>Processo de criação de identidade</strong>
                   <br/>
                   As cores predominantes que davam significado às ideias eram tons de verde e azul, e os itens mais presentes eram folhas, marcadores de mapas e relógios.<br />
                   A empresa pretende ser amigável, confiável e dinâmica, além de transmitir uma sensação de leveza devido à sua preocupação com o meio ambiente. Portanto, optou-se por uma tipografia mais fina, elegante e arredondada, tanto para o logotipo quanto para o conteúdo.
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
                            <label>Logotipia: Poiret one</label>
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
                            <strong>Elementos que compõem a simbologia:</strong>
                            
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
                    Agora, feitas as devidas apresentações e encerrada a conversa, você pode reclinar sua cadeira e apreciar algumas das telas propostas para o projeto:

                    </p>
                </Col>
                <Col xxl="4">
                    <img src='/images/projetos/magnificourier/telas/main-screen.png' alt="Imagem de projeto" className={styles.projImage} />
                </Col>
                
            </Row>

            <div className={styles.imageList}>
                <img src="/images/projetos/magnificourier/telas/s1.png" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s2.png" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s3.png" alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s4.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s5.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s6.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s7.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s8.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s9.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s10.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s11.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s12.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s13.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s14.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s15.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s16.png"  alt="Tela Projeto Magnificourier"/>
                <img src="/images/projetos/magnificourier/telas/s17.png"  alt="Tela Projeto Magnificourier"/>
                
                
            </div>

            <Row className={styles.breakline}></Row>

            <h4 className={styles.sectionTitle}>Minhas responsabilidades</h4>
                <p>Neste projeto, tive um papel praticamente autoral, visto que os parâmetros conceituais eram mínimos. A apresentação do projeto às partes interessadas foi a seguinte:<br/>
                    <strong>Precisamos de um projeto de aplicativo de serviços que tenha uma abordagem voltada para a preservação ambiental.</strong>
                    <br/><br/>
                    Dessa forma, o MagnifiCourier foi um aplicativo onde toda a prática de Design de Produto foi necessária, com pesquisa de interesse público, ideação de produto, criação e conceitualização de personas, pesquisa e desenvolvimento de estudos de curvas de interesse, fluxos de usuários, design de identidade visual, desenvolvimento de design de sistema, design de interface, etc. Como eu era o único designer de produto envolvido no projeto, estive presente em todas as etapas até a entrega à produção.<br/><br/>
O status atual deste projeto é que ele não pôde ser desenvolvido, pois a empresa não teria condições de arcar com a preservação da área ambiental sugerida como contrapartida ao uso do aplicativo, mesmo criando regras para o plantio, como: "1 árvore para cada 10 usos do suporte de bicicletas Courier por apenas um usuário".
                </p>

                <Row className={styles.breakline}></Row>
                
                <h3 className="sectionTitle">
                    <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                    <span>Veja outros dos meus trabalhos</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    </>
    )
}