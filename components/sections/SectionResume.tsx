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
                            <Image src='/images/logos/ovni.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h5 className={styles.JobPosition}>UX UI Consulting and mentoring</h5>
                                    <h5 className={styles.CompanyName}>OVNI Studio</h5>
                                    <span className="date">Nov 2023 - current</span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                            Worked as a UX/UI and Product Designer, on demand for partner companies, such as N49, Maria Gueixa, Innovea Hub Solutions, Zahl Investments and Uhuu.com.
                                <ul className={styles.tasks}>
                                    <li>Structuring of the creative design sector.</li>
                                    <li>Implemented agile methodologies and user-centered design practices.</li>
                                    <li>Developed app designs, digital marketing and e-commerce, and visual identity.</li>
                                </ul>
                            </ul>
                        </li>
                    </Col>
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/dbc.jfif' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX UI Analyst- Specialist</h4>
                                    <h5 className={styles.CompanyName}>DBC Company</h5>
                                    <span className="date">Feb 2022 - Oct 2023 </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>Responsible for the development and curation of the design system, with a 75% gain in project delivery time.</li>
                                <li>Development, documentation and curation of the RUBI DS design system</li>
                                <li>Developed functionalities and user journeys for applications</li>
                                <li>3d webshop design</li>
                                <li>Idealization of tools and background of brand applications</li>
                                <li>Created low and high fidelity prototyping.</li>
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
                                <li>Led design projects from start to finish, including user research, prototyping, wireframing, and visual design.</li>
                                <li>Conducted user research and developed internal platforms.</li>
                                <li>Analysis of user journeys, continuous improvement of legacy products, planning and development of new features and products</li>
                                <li>Developed navigable prototypes and performed usability testing.</li>
                                <li>Worked in the dedicated innovation lab.</li>
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
                            <li>Administrative leader of teams in 4 countries, with 17 employees.</li>
                            <li>Created and implemented design systems and structured the Chapter for a Design Ops team.</li>
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
                                <li>Technical leader in innovation projects for Alexa devices, reaching 1800 downloads in 7 days.</li>
                                <li>Team mentor and creator of style guides and design systems.</li>
                                <li>Planned and executed user interviews and usability tests.</li>
                                <li>Central interface and third-party suppliers manager</li>
                                <li>Analysis of user journeys, continuous improvement of legacy products, planning and development of new features and products.</li>
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
                </ul>
            </Row>
        </>
    )
}