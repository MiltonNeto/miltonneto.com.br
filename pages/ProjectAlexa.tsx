import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from 'next/image';

export default function ProjectAlexa(){
    return(
        <>
        <div className={styles.header +" "+ styles.alexa} >
            <Container>
                <h2 className={styles.projectTitle}>Skill Educacional Alexa</h2>
            </Container>
        </div>

        <Container>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                    <label>Ferramentas:</label>
                    <li>Figma</li>
                    <li>Alexa</li>
                    <li>Miro</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Interface de voz</li>
                    <li>Assistente Virtual</li>
                    <li>Alexa</li>
                    <li>Chatbot</li>
                    <li>Inteligência Artificial</li>
                    <li>Acessibilidade</li>
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                
                <h4 className={styles.sectionTitle}>Descrição</h4>
                <Col xxl="12">
                <p>Aplicação de voz, com objetivo principal de utilizar a Alexa como meio de aprendizado, facilitando e abrangendo ainda mais o alcance da experiência de educação à distância.</p>
                <br/>
                    <Image src="/images/projetos/alexa/LogoPremioSelecao.png" width="295" height="141" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <br/>
                    <p>Projeto finalista do Prêmio Seleção Mobile Time</p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
                <Col xxl="6">
                    <h4 className={styles.sectionTitle}>Cenário</h4>
                    <p>Através de uma parceria com a AWS, uma instituição de ensino trouxe a possibilidade de uma campanha de marketing, onde novos alunos ganhariam um dispositivo Alexa Echo Dot. Na apresentação disto, levantamos a hipótese de fazer algo que fizesse sentido e agregasse valor ao brinde.
                    <br/>
                    <strong> Assim, surgiu a possibilidade de criarmos uma Skill que integrasse a Alexa ao ambiente de estudos da universidade.</strong>
                    </p>
                </Col>
                <Col xxl="6">
                    <h4 className={styles.sectionTitle}>Desafio</h4>
                    <p>
                    Criar para uma ferramenta ainda pouco explorada por desenvolvedores no Brasil, uma aplicação inovadora que, segundo a própria Amazon, não existe nenhum caso prévio de algo que se assemelhasse com o que estávamos planejando.
                    <br/>
                    <strong>Além disso, passar por cima de "inviabilidades" técnicas do dispositivo para features que estávamos mapeando.</strong>
                    </p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Limitações</h4>
                <Col xxl="12" className={styles.SideBySide}>
                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-dev.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                        Falta de Devs qualificados
                    </div>

                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-bench.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                        Inexistência de Benchmarks
                    </div>

                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-ferramenta.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>  
                        Ferramenta ainda pouco explorada
                    </div>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Acessibilidade</h4>
                <Col xxl="8">
                    <p>
                    Os dispositivos Echo, nos permitiram explorar funcionalidades e beneficiar públicos que não tínhamos anteriormente. É o caso de pessoas com deficiência visual e também com limitações de movimentos. Percebemos a necessidade de aprimorar ainda no desenvolvimento.</p>
                        <ul className={styles.sectionTopicList}>
                            <li>VOCABULÁRIO</li>
                            <li>SINÔNIMOS</li>
                            <li>LEITURA DE MATERIAIS COMPLEMENTARES</li>
                            <li>LEITURA DE IMAGENS</li>
                            <li>REALIZAÇÃO DE PROVAS</li>
                        </ul>
                </Col>
                <Col xxl="4">
                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/acessibilidade-top.png" width="160" height="160" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    </div>
                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/acessibilidade-bottom.png" width="160" height="160" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    </div>

                </Col>
            
                <div className="quote">
                    Conseguimos incluir e contar com o apoio da ACERGS (Associação de Cegos do Rio Grande do Sul) para melhorar ainda mais o projeto
                </div>
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Conceito Técnico</h4>
            
                <p>Previamente à concepção do projeto, já existiam os aplicativos (Android e IOS) das instituições que iriam receber as skills Alexa. Eles haviam sido desenvolvidos a menos de 01 ano, portanto, sob parâmetros de desenvolvimentos atuais e efetivos. Seguindo essa linha de raciocínio, optamos por reutilizar as APIs dos aplicativos, para definirmos os endpoints que seriam nosso foco. Com base nas possibilidades técnicas das Alexa versus os endpoints já existentes é que desenvolvemos primeiramente a POC e posteriormente o MVP.
                </p>
            
                <div className="quote">
                    "Podemos dizer que: Seria possível personalizar as funcionalidades das instituições, dentro das pré-existentes nos aplicativos, ficando limitados apenas às disposições técnicas da Alexa"
                </div>
            

                <h5 className={styles.sectionSubtitle}>Processos</h5>

                <h6 className={styles.sectionTopic}>Ideia Básica</h6>
                <p>Criar uma interface conversacional para interação com o ambiente acadêmico da instituição. Partindo dessa ideia nosso processo passou por :</p>

                <ul className={styles.sectionTopicList}>
                    <li>Research de recursos nativos que pudessem ser incorporadas à skill (Setembro de 2020)</li>
                    <li>Definição de forma de uso desses recursos</li>
                    <li>Product Design da POC</li>
                    <li>Elaboração da POC pelo time de DEV</li>
                    <li>Validação das entregas pelos stakeholders</li>
                    <li>Validação do planejamento de testes</li>
                    <li>Lançamento do MVP 1 em 30 de Janeiro de 2021</li>
                    <li>Início da evolução para MVP 2</li>
                </ul>

                <div className={styles.breakline}></div>
                <Col xxl="4">
                <h6 className={styles.sectionTopic}>Design de produto na POC</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Identificar cursos matriculados</li>
                        <li>Reprodução de aulas</li>
                        <li>Avançar para a próxima aula</li>
                        <li>Retornar a aula anterior</li>
                        <li>Porcentagem e conclusão de curso</li>
                        <li>Informar dados pessoais cadastrados</li>
                        <li>Verificar notificações de comunicação</li>
                        <li>Acionamento do FAQ</li>
                        <li>Telefones de contato</li>
                        <li>Reset de senha</li>
                    </ul>

                    <div className={styles.contentBox}>
                        Tivemos 100% de comprovação da POC
                    </div>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Mapeamento prévio MVP2</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Continuar consumo em outro dispositivo</li>
                        <li>Transferência de reprodução entre dispositivos Echo</li>
                        <li>Disponibilidade de aula conforme cronograma</li>
                        <li>Existência e leitura de material complementar</li>
                        <li>Mudança de velocidade de reprodução</li>
                        <li>Quiz de disciplina</li>
                        <li>Datas e prazos automatizados</li>
                        <li>Favoritar momento de aula</li>
                        <li>Verificação de notas</li>
                        <li>Busca por assunto e professor</li>
                    </ul>
                </Col>

                <Col xxl="4">
                    <h6 className={styles.sectionTopic}>Testes presenciais</h6>
                    <ul className={styles.sectionTopicList}>
                        <li><strong>Pré-mapeamento:</strong> envio de formulário digital para mapear as personas testadas.</li>
                        <li><strong>Testes individuais:</strong> os testadores receberam orientações e tarefas a serem realizadas</li>
                        <li><strong>Dinâmica de grupo 1:</strong> o confronto de ideias individuais apresentadas pelos usuários</li>
                        <li><strong>Dinâmica de grupo 2:</strong> exercício de valoração das features levantadas pelos usuários</li>
                        <li><strong>Compilação dos resultados:</strong> validação dos dados levantados e apresentação de resultados. Ampliação da pesquisa digital para mapear mais personas de uso da instituição</li>
                    </ul>
                </Col>

            <div className={styles.breakline}></div>
            
            <h6 className={styles.sectionTopic}>Mapa do Planejamento de testes</h6>
            <Image src="/images/projetos/alexa/test-plan.jpg" width="1230" height="812" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            
            <div className={styles.breakline}></div>
            <h6 className={styles.sectionTopic}>Matriz RELEVÂNCIA VS ESFORÇO</h6>
            <p>Um dos resultados mais importantes dos testes foi a matriz de prioridade. Gerada na dinâmica, através de exercícios de interesse e investimento, combinada com o esforço técnico de desenvolvimento.</p>
            <Image src="/images/projetos/alexa/matriz-RE.png" width="1230" height="750" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>

            <div className={styles.breakline}></div>
            <h6 className={styles.sectionTopic}>Aprimoramento da inteligência conversacional</h6>
            <p>Criar uma interface de conversação não é uma tarefa das mais simples. É necessário pensar nas tarefas que a interface fará de forma automática, e aprimorar o uso da sua inteligência. Isso serve tanto para assistentes virtuais como para chatbots, e outras tecnologias cognitivas. Uma mudança de expressão, podem dar mais efetividade, resumir muito a jornada de um usuário até o seu objetivo.</p>

            <div className={styles.breakline}></div>
            <Col xxl="6">
                <Image src="/images/projetos/alexa/Screenshot_9.png" width="600" height="400" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Jornada Atual
            </Col>

            <Col xxl="6">
                <Image src="/images/projetos/alexa/Screenshot_1.png" width="600" height="400" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Jornada Aprimorada
            </Col>

            </Row>

            
                <h4 className={styles.sectionTitle}>Atuação</h4>
                <p>Atuei como UX Lead do projeto. Responsável pela ideação das skills, pelo product design, gerenciamento, definição e revisão de jornadas de usuários, definição de prioridades, ideação, direção de testes e research, levantamento e relatorização de resultados, suporte e interface de fornecedor terceirizado e de recursos de pesquisa.</p>
            
            </Container>
                <div className={styles.breakline}></div>
        </>
    )
}