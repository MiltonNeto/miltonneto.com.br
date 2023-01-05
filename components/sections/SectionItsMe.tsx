import { Container } from "reactstrap";

export default function SectionItsMe(){
    return(
        <Container>
            <section id="ItsMe">
                <h3 className="sectionTitle"><img alt="sectionIcon"/><span>Quem sou eu</span></h3>
                
                <div className="row">
                    <div className="contentText">
                        <p>
                            Tenho 40 anos, sou designer de experiências e interfaces. Há aproximadamente 16 anos dedico meu trabalho à criação e desenvolvimento de produtos digitais.
                        </p>
                        <p>
                            Minha experiência se divide entre consultorias, agência digital e ambiente corporativo, criando, desenhando, participando do planejamento de negócios online desde o briefing até a publicação e a mensuração dos resultados, buscar a melhor experiência, independente de qual o objetivo do produto, facilitar a vida do usuário e tornar as coisas mais simples. Tenho um perfil muito analítico no desenvolvimento de soluções e procuro me aperfeiçoar e qualificar constantemente.
                        </p>
                        <div className="quote">
                            "Evoluir a cada entrega é meu objetivo, por isso digo que meu melhor trabalho é sempre o próximo."
                        </div>

                    </div>
                    <div className="contentImage">
                        <img alt="itsme foto"/>
                    </div>
                </div>

                <div className="row">
                    <div>
                        <h4 className="classSubtitle">
                            <img alt="subTitleIcon"/>
                            <span>Formação acadêmica</span>
                        </h4>
                        <ul>
                            <li>
                                <img alt="logo Instituição"/>
                                <h5>Produção Multimídia</h5>
                                <span className="date">Unisul - 2016 -- 2018</span>
                                <span >Superior</span>
                            </li>
                            <li>
                                <img alt="logo Instituição"/>
                                <h5>User Experience</h5>
                                <span className="date">Uniritter - 2018 -- 2020</span>
                                <span >Pós-graduação(Especialização)</span>
                            </li>
                            <li>
                                <img alt="logo Instituição"/>
                                <h5>Neurociências e psicologia aplicada</h5>
                                <span>Mackenzie - 2022 -- 2023</span>
                                <span >Pós-graduação(Especialização)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="classSubtitle">
                            <img alt="subTitleIcon"/>
                            <span>Idiomas</span>
                        </h4>
                        <ul>
                            <li>
                                <img alt="Bandeira"/>
                                <h5>Português</h5>
                                <span >Nativo</span>
                            </li>
                            <li>
                                <img alt="Bandeira"/>
                                <h5>Inglês</h5>
                                <span >Avançado</span>
                            </li>
                        </ul><li>
                                <img alt="Bandeira"/>
                                <h5>Espanhol</h5>
                                <span>Intermediário-Avançado</span>
                            </li>
                    </div>
                </div>
                
            </section>
        </Container>
    )
}