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
                                    <span className="date">Feb 2020 - Mar 2021 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>UX Sênior, UX UI team technical lead</li>
                                <li>Organization and structuring of the team, tools and development flows</li>
                                <li>High fidelity prototype development</li>
                                <li>Central interface and third-party suppliers manager</li>
                                <li>Analysis of user journeys, continuous improvement of legacy products, planning and development of new features and products.</li>
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
                                    <span className="date">Aug 2019 - Dec 2019 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>Quantitative analysis and development of solutions based on conversion metrics</li>
                                <li>Funnels studies, relationship rulers and micromoments</li>
                                <li>Development, analysis of results and documentation of usability and conversion tests</li>
                                <li>Conducting and monitoring user tests for product development</li>
                            </ul>
                        </li>
                    </Col>
                    
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/les.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX / UI designer | Marketing Supervisor</h4>
                                    <h5 className={styles.CompanyName}>L&S Group</h5>
                                    <span className="date">Jun 2015 - Jan 2018</span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            <li>Reorganization of information architecture based on user research and interviews</li>
                            <li>Redesign, assembly and automation of web products</li>
                            <li>Digital communication art direction</li>
                            <li>Supervision of the Marketing sector</li>
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
                                    <span className="date">Sep 2009 - Jun 2015 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            <li>Design and frontend development of websites and online stores</li>
                            <li>Implementation and monitoring of research cell and improvement of tools and processes</li>
                            <li>Selection and training</li>
                            <li>Member of the strategic planning and leadership team</li>
                            </ul>
                        </li>
                    </Col>
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/icones/freelance-color.png' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h5 className={styles.CompanyName}>UX UI Consulting and mentoring · Self Employed</h5>
                                    <span className="date">Since 2018</span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            I worked as a UX/UI designer and art director, hired as a JP in companies such as N49, Maria Gueixa, Innovea Hub Solutions, Zahl Investiments and Uhuu.com. Responsible for structuring the creative sector, managing projects and teams, evangelizing agile methods and user centered design of apps, digital marketing pieces, virtual stores and others
                            </ul>
                        </li>
                    </Col>
                </ul>
            </Row>
        </>
    )
}