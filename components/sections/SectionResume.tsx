import styles from '../../styles/scss/components/sections/Resume.module.scss'

import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

export default function SectionResume(){
    return(
        <>
            <Row>
                <ul className={styles.resumeList}>
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/dbc.jfif' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX UI Analyst- Specialist</h4>
                                    <h5 className={styles.CompanyName}>DBC Company</h5>
                                    <span className="date">Feb 2022 - Current </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>Located on the Usaflex client</li>
                                <li>Development, documentation and curation of the RUBI DS design system</li>
                                <li>Creation and concepting of USA+ Design System</li>
                                <li>3d webshop design</li>
                                <li>Idealization of tools and background of brand applications</li>
                                <li>Design, operation and maintenance of e-commerce tools</li>
                            </ul>
                        </li>
                    </Col>
                    
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/dentsu.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                <h4 className={styles.JobPosition}>Lead UX Designer</h4>
                                    <h5 className={styles.CompanyName}>Dentsu World Services Brazil</h5>
                                    <span className="date">Aug 2021 - Dec 2022 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>Conducting interviews and tests with platform users</li>
                                <li>Development of high and low fidelity navigable prototypes (Figma, XD and Sketch)</li>
                                <li>Analysis of user journeys, continuous improvement of legacy products, planning and development of new features and products</li>
                                <li>Development of a strategy for serving international customers products</li>
                                <li>Working in the dedicated innovation laboratory</li>
                            </ul>
                        </li>
                    </Col>

                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/pagonxt.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>Lead UX Designer</h4>
                                    <h5 className={styles.CompanyName}>Getnet - PagoNxt Merchant Solutions</h5>
                                    <span className="date">Apr 2021 - Aug 2021 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            <li>UX Specialist, administrative UX, UI chapter lead</li>
                            <li>Tools management, team assembly and sizing</li>
                            <li>Design System development advisor</li>
                            </ul>
                        </li>
                    </Col>

                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/uol.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX designer Sênior | UX Lead</h4>
                                    <h5 className={styles.CompanyName}>UOL Edtech</h5>
                                    <span className="date">Fev 2020 - Mar 2021 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>UX Sênior, lead técnico do time de UX, UI</li>
                                <li>Organização e estruturação da equipe, ferramentas e fluxos de desenvolvimento</li>
                                <li>Desenvolvimento de protótipos de alta fidelidade</li>
                                <li>Interface central e gerenciamento dos fornecedores terceirizados</li>
                                <li>Análise de jornadas de usuários, melhoria contínua de produtos legados, planejamento e desenvolvimento de novas funcionalidades e produtos.</li>
                            </ul>
                        </li>
                    </Col>
                    
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/pmweb.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX UI Designer</h4>
                                    <h5 className={styles.CompanyName}>PMWeb</h5>
                                    <span className="date">Ago 2019 - Dez 2019 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>Análise quantitativa e desenvolvimento de soluções baseadas em métricas de conversão</li>
                                <li>Estudos de funis, réguas de relacionamento e micromomentos</li>
                                <li>Desenvolvimento, análise de resultados e documentação de testes de usabilidade e conversão</li>
                                <li>Condução e acompanhamento de testes com usuários para desenvolvimento de produtos</li>
                            </ul>
                        </li>
                    </Col>
                    
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/les.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX / UI designer | Supervisor de Marketing</h4>
                                    <h5 className={styles.CompanyName}>Grupo L&S</h5>
                                    <span className="date">Jun 2015 - Jan 2018</span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            <li>Reorganização de arquitetura de informação baseada em pesquisa e entrevistas com usuários</li>
                            <li>Redesign, montagem e automatização de produtos web</li>
                            <li>Direção de arte de comunicação digital</li>
                            <li>Supervisão do setor de Marketing</li>
                            </ul>
                        </li>
                    </Col>
                    
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/fastcompras.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX / UI (Web Designer)</h4>
                                    <h5 className={styles.CompanyName}>Fastcompras</h5>
                                    <span className="date">Set 2009 - Jun 2015 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            <li>Desenvolvimento de sites e lojas virtuais</li>
                            <li>Implementação e monitoria de célula de pesquisa e melhoria de ferramentas e processos</li>
                            <li>Seleção e treinamento</li>
                            <li>Membro da equipe de planejamento estratégico e liderança</li>
                            </ul>
                        </li>
                    </Col>
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/icones/freelance-color.png' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h5 className={styles.CompanyName}>Consultoria UX UI · Autônomo</h5>
                                    <span className="date">Desde 2018</span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            Atuei como UX/UI designer e diretor de arte, contratado como PJ em empresas como N49, Maria Gueixa, Innovea Hub Solutions, Zahl Investimentos e Uhuu.com. Responsável pela estruturação de setor de criação, gestão de projetos e equipes, evangelização de métodos ágeis e pelo de user design centered de apps, peças de marketing digital, lojas virtuais e outros
                            </ul>
                        </li>
                    </Col>
                </ul>
            </Row>
        </>
    )
}