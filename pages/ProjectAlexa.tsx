import styles from '../styles/scss/pages/ProjectsPage.module.scss'
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'
import Head from 'next/head';
export default function ProjectAlexa(){
    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        </Head>
        <div>
        <div className={styles.header +" "+ styles.alexa} >
            <Container>
                <h2 className={styles.projectTitle}>Skill Educacional Alexa</h2>
            </Container>
        </div>

        <Container  className={styles.projectsBody}>
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
                    <li>Voice Interface</li>
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
                <p>Aplicação de voz, com o objetivo principal de usar a Alexa como meio de aprendizado, facilitando e ampliando ainda mais o escopo da experiência de educação a distância.</p>
                <br/>
                    <Image src="/images/projetos/alexa/LogoPremioSelecao.png" width="295" height="141" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <br/>
                    <p>Projeto finalista do prêmio Mobile Time Selection Award.</p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
                <Col xxl="6" xs="12">
                    <h4 className={styles.sectionTitle}>Cenário</h4>
                    <p>Por meio de uma parceria com a AWS, uma instituição de ensino viabilizou uma campanha de marketing na qual novos alunos ganhariam um dispositivo Alexa Echo Dot. Na apresentação dessa iniciativa, levantamos a hipótese de criar algo que fizesse sentido e agregasse valor ao presente.
                    <br/>
                    <strong>Em seguida, pensamos na possibilidade de criar uma funcionalidade para a Alexa que a integrasse ao ambiente de estudo da universidade.</strong>
                    </p>
                </Col>
                <Col xxl="6" xs="12">
                    <h4 className={styles.sectionTitle}>Desafio</h4>
                    <p>
                    Criar para uma ferramenta ainda pouco explorada por desenvolvedores no Brasil, um aplicativo inovador que, segundo a própria Amazon, não há precedente de algo semelhante ao que estávamos planejando.
                    <br/>
                    <strong>Além disso, analisamos a "inviabilidade" técnica dos dispositivos para os recursos que estávamos mapeando.</strong>
                    </p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Limitações</h4>
                <Col xxl="12" xs="12" className={styles.SideBySide}>
                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-dev.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                        Falta de desenvolvedores qualificados
                    </div>

                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-bench.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                        Sem Benchmarks
                    </div>

                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-ferramenta.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>  
                        Ferramenta ainda pouco explorada
                    </div>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Acessibilidade</h4>
                <Col xxl="8" xs="12">
                    <p>
                    Os dispositivos Echo nos permitiram explorar funcionalidades e beneficiar públicos que não alcançávamos antes. É o caso de pessoas com deficiência visual e também com limitações de movimento. Percebemos a necessidade de aprimorar o produto, inclusive durante o desenvolvimento.</p>
                        <ul className={styles.sectionTopicList}>
                            <li>VOCABULÁRIO</li>
                            <li>SINÔNIMOS</li>
                            <li>LEITURA DE MATERIAIS COMPLEMENTARES</li>
                            <li>LEITURA DE IMAGENS</li>
                            <li>REALIZAÇÃO DE PROVAS</li>
                        </ul>
                </Col>
                <Col xxl="4" xs="12">
                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/acessibilidade-top.png" width="160" height="160" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    </div>
                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/acessibilidade-bottom.png" width="160" height="160" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    </div>

                </Col>
            
                <div className="quote">
                    Conseguimos incluir e contar com o apoio da ACERGS (Associação dos Cegos do Rio Grande do Sul) para aprimorar ainda mais o projeto.
                </div>
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Conceito técnico</h4>
            
                <p>Antes do início do projeto, os aplicativos (Android e iOS) das instituições que receberiam as skills da Alexa já existiam. Eles haviam sido desenvolvidos há menos de um ano, portanto, sob parâmetros de desenvolvimento atuais e eficazes. Seguindo essa linha de raciocínio, optamos por reutilizar as APIs dos aplicativos para definir os endpoints que seriam nosso foco. Com base nas possibilidades técnicas da Alexa em comparação com os endpoints existentes, desenvolvemos primeiro a prova de conceito (POC) e, em seguida, o produto mínimo viável (MVP).
                </p>
            
                <div className="quote">
                "Podemos afirmar que seria possível personalizar as funcionalidades das instituições, dentro das já existentes nos aplicativos, limitando-se apenas às disposições técnicas da Alexa."
                </div>
            

                <h5 className={styles.sectionSubtitle}>Processos</h5>

                <h6 className={styles.sectionTopic}>Ideia Básica</h6>
                <p>Criar uma interface conversacional para interação com o ambiente acadêmico da instituição. Com base nessa ideia, nosso processo seguiu as seguintes etapas:</p>

                <ul className={styles.sectionTopicList}>
                    <li>Pesquisa sobre características nativas que poderiam ser incorporadas à habilidade (setembro de 2020)</li>
                    <li>Definição de como usar esses recursos</li>
                    <li>Design de produto da POC</li>
                    <li>Elaboração da POC pela equipe de desenvolvimento.</li>
                    <li>Validação das entregas pelas partes interessadas</li>
                    <li>Planejamento dos testes de validação</li>
                    <li>O lançamento do MVP 1 está previsto para 30 de janeiro de 2021.</li>
                    <li>Início da evolução para MVP 2</li>
                </ul>

                <div className={styles.breakline}></div>
                <Col xxl="4" xs="12">
                <h6 className={styles.sectionTopic}>Design de produto da POC</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Identificar os cursos matriculados</li>
                        <li>Reprodução de aulas</li>
                        <li>Avançar para a próxima aula</li>
                        <li>Retornar para a aula anterior</li>
                        <li>Percentual de conclusão do curso</li>
                        <li>Informar dados pessoais registrados</li>
                        <li>Verificar notificações de comunicação</li>
                        <li>Acesso ao FAQ</li>
                        <li>Números de contatos</li>
                        <li>Reset de senha</li>
                    </ul>

                    <div className={styles.contentBox}>
                    Tivemos 100% de aprovação da POC
                    </div>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Pre-mapeamento MVP2</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Continuar assistindo de outro dispositivo</li>
                        <li>Transferência de reprocução entre disposivos Echo</li>
                        <li>Disponibilização das aulas conforme o cronograma.</li>
                        <li>Leitura de material complementar</li>
                        <li>Mudança na velocidade de reprodução</li>
                        <li>Quiz da disciplina</li>
                        <li>Automatização de datas e prazos</li>
                        <li>Reprodução de momentos favoritados</li>
                        <li>Verificação das notas de avaliação</li>
                        <li>Pesquise por assunto e professor</li>
                    </ul>
                </Col>

                <Col xxl="4">
                    <h6 className={styles.sectionTopic}>Testes presenciais</h6>
                    <ul className={styles.sectionTopicList}>
                        <li><strong>Pre-mapeando:</strong> envio de um formulário digital para mapear as personas testadas.</li>
                        <li><strong>Testes Individuais:</strong> os testadores receberam orientações e tarefas a serem executadas.</li>
                        <li><strong>Dinâmicas de grupo 1:</strong> o confronto de ideias individuais apresentadas pelos usuários</li>
                        <li><strong>Dinâmicas de grupo 2:</strong> exercício de valoração de características levantadas pelos usuários</li>
                        <li><strong>Compilação dos resultados:</strong> validação dos dados coletados e apresentação dos resultados. Expansão da pesquisa digital para mapear mais perfis de usuários da instituição.</li>
                    </ul>
                </Col>

            <div className={styles.breakline}></div>
            
            <h6 className={styles.sectionTopic}>Mapa de planejamento de testes</h6>
            <Image src="/images/projetos/alexa/test-plan.jpg" layout='responsive' width={400}  height={400} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            
            <div className={styles.breakline}></div>
            <h6 className={styles.sectionTopic}>Matriz RELEVÂNCIA VS ESFORÇO</h6>
            <p>Um dos resultados mais importantes dos testes foi a matriz de prioridades. Ela foi gerada dinamicamente, por meio de exercícios de interesse e investimento, combinados com o esforço técnico de desenvolvimento.</p>
            <Image src="/images/projetos/alexa/matriz-RE.png" layout='responsive' width={400}  height={400} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>

            <div className={styles.breakline}></div>
            <h6 className={styles.sectionTopic}>Inteligência conversacional aprimorada</h6>
            <p>Criar uma interface conversacional não é tarefa fácil. É necessário pensar nas tarefas que a interface executará automaticamente e aprimorar o uso de sua inteligência. Isso vale tanto para assistentes virtuais e chatbots quanto para outras tecnologias cognitivas. Uma mudança na expressão facial pode aumentar a eficácia e resumir boa parte da jornada do usuário até atingir seu objetivo.</p>

            <div className={styles.breakline}></div>
            <Col xxl="6" xs="6">
                <Image src="/images/projetos/alexa/Screenshot_9.png" layout='responsive' width={280}  height={200} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Jornada Inicial
            </Col>

            <Col xxl="6" xs="6">
                <Image src="/images/projetos/alexa/Screenshot_1.png" layout='responsive' width={280}  height={200} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Jornada Aprimorada
            </Col>

            </Row>

            
                <h4 className={styles.sectionTitle}>Minhas responsabilidades</h4>
                <p>Atuei como Líder de UX do projeto. Fui responsável pela idealização de funcionalidades, design de produto, gestão, definição e revisão das jornadas do usuário, estabelecimento de prioridades, realização de testes e pesquisas, levantamento de dados e elaboração de relatórios de resultados, suporte e interface com fornecedores terceirizados e recursos de pesquisa.</p>

                <Row className={styles.breakline}></Row>
                
                <h3 className="sectionTitle">
                    <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                    <span>Veja outros de meus trabalhos</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    </>
    )
}