import { Container, Row, Col } from "reactstrap";

export default function ProjectAlexa(){
    return(
        <>
        <div className="header">
            <Container>
                Skill Educacional Alexa
            </Container>
        </div>

        <Container>
            <Row>
            Ferramentas:
            Figma
            Alexa
            Miro
            </Row>
            <Row>
            Tags:
            Interface de voz
            Assistente Virtual
            Alexa
            Chatbot
            Inteligência Artificial
            Acessibilidade
            Product Design
            </Row>
            <h4>Descrição</h4>
            Skill com objetivo principal de utilizar a Alexa como meio de aprendizado, facilitando e abrangendo ainda mais o alcance da experiência de educação à distância.
            Projeto finalista do Prêmio Seleção Mobile Time Projeto finalista do Prêmio Seleção Mobile Time"
            
            <h4>Cenário</h4>
            Através de uma parceria com a AWS, uma instituição de ensino trouxe a possibilidade de uma campanha de marketing, onde novos alunos ganhariam um dispositivo Alexa Echo Dot. Na apresentação disto, levantamos a hipótese de fazer algo que fizesse sentido e agregasse valor ao brinde. Assim, surgiu a possibilidade de criarmos uma Skill que integrasse a Alexa ao ambiente de estudos da universidade.
            <h4>Desafio</h4>
            Criar para uma ferramenta ainda pouco explorada por desenvolvedores no Brasil, uma aplicação inovadora que, segundo a própria Amazon, não existe nenhum caso prévio de algo que se assemelhasse com o que estávamos planejando.

            Além disso, passar por cima de "inviabilidades" técnicas do dispositivo para features que estávamos mapeando.
            
            <h4>Limitações</h4>

            Falta de Devs qualificados

            Inexistência de Benchmarks

            Ferramenta ainda pouco explorada


            <h4>Acessibilidade</h4>
            Os dispositivos Echo, nos permitiram explorar funcionalidades e beneficiar públicos que não tínhamos anteriormente. É o caso de pessoas com deficiência visual e também com limitações de movimentos. Percebemos a necessidade de aprimorar ainda no desenvolvimento.
            VOCABULÁRIO
            SINÔNIMOS
            LEITURA DE MATERIAIS COMPLEMENTARES
            LEITURA DE IMAGENS
            REALIZAÇÃO DE PROVAS


            <Row>
                <div className="quote">
                    Conseguimos incluir e contar com o apoio da ACERGS (Associação de Cegos do Rio Grande do Sul) para melhorar ainda mais o projeto
                </div>
            </Row>

            <h4>Conceito Técnico</h4>
            Previamente à concepção do projeto, já existiam os aplicativos (Android e IOS) das instituições que iriam receber as skills Alexa. Eles haviam sido desenvolvidos a menos de 01 ano, portanto, sob parâmetros de desenvolvimentos atuais e efetivos. Seguindo essa linha de raciocínio, optamos por reutilizar as APIs dos aplicativos, para definirmos os endpoints que seriam nosso foco. Com base nas possibilidades técnicas das Alexa versus os endpoints já existentes é que desenvolvemos primeiramente a POC e posteriormente o MVP.
            <Row>
                <div className="quote">
                    "Podemos dizer que: Seria possível personalizar as funcionalidades das instituições, dentro das pré-existentes nos aplicativos, ficando limitados apenas às disposições técnicas da Alexa"
                </div>
            </Row>

            <h5>Processos</h5>

            <h6>Ideia Básica</h6>
            Criar uma interface conversacional para interação com o ambiente acadêmico da instituição. Partindo dessa ideia nosso processo passou por :

            Research de recursos nativos que pudessem ser incorporadas à skill (Setembro de 2020)
            Definição de forma de uso desses recursos
            Product Design da POC
            Elaboração da POC pelo time de DEV
            Validação das entregas pelos stakeholders
            Validação do planejamento de testes
            Lançamento do MVP 1 em 30 de Janeiro de 2021
            Início da evolução para MVP 2
            
            
            <h6>Design de produto na POC</h6>
            Identificar cursos matriculados
            Reprodução de aulas
            Avançar para a próxima aula
            Retornar a aula anterior
            Porcentagem e conclusão de curso
            Informar dados pessoais cadastrados
            Verificar notificações de comunicação
            Acionamento do FAQ
            Telefones de contato
            Reset de senha

            Tivemos 100% de comprovação da POC

            <h6>Mapeamento prévio MVP2</h6>
            Continuar consumo em outro dispositivo
            Transferência de reprodução entre dispositivos Echo
            Disponibilidade de aula conforme cronograma
            Existência e leitura de material complementar
            Mudança de velocidade de reprodução
            Quiz de disciplina
            Datas e prazos automatizados
            Favoritar momento de aula
            Verificação de notas
            Busca por assunto e professor
            
            <h6>Testes presenciais</h6>
            Pré-mapeamento: envio de formulário digital para mapear as personas testadas.
            Testes individuais: os testadores receberam orientações e tarefas a serem realizadas
            Dinâmica de grupo 1: o confronto de ideias individuais apresentadas pelos usuários
            Dinâmica de grupo 2: exercício de valoração das features levantadas pelos usuários
            Compilação dos resultados: validação dos dados levantados e apresentação de resultados. Ampliação da pesquisa digital para mapear mais personas de uso da instituição
            
            
            <h6>Mapa do Planejamento de testes</h6>

            <h6>Matriz RELEVÂNCIA VS ESFORÇO</h6>
            Um dos resultados mais importantes dos testes foi a matriz de prioridade. Gerada na dinâmica, através de exercícios de interesse e investimento, combinada com o esforço técnico de desenvolvimento.

            <h6>Aprimoramento da inteligência conversacional</h6>
            Criar uma interface de conversação não é uma tarefa das mais simples. É necessário pensar nas tarefas que a interface fará de forma automática, e aprimorar o uso da sua inteligência. Isso serve tanto para assistentes virtuais como para chatbots, e outras tecnologias cognitivas. Uma mudança de expressão, podem dar mais efetividade, resumir muito a jornada de um usuário até o seu objetivo.

            Jornada Atual

            Jornada Aprimorada


            <h4>Atuação</h4>
            Atuei como UX Lead do projeto. Responsável pela ideação das skills, pelo product design, gerenciamento, definição e revisão de jornadas de usuários, definição de prioridades, ideação, direção de testes e research, levantamento e relatorização de resultados, suporte e interface de fornecedor terceirizado e de recursos de pesquisa.
            </Container>
        </>
    )
}