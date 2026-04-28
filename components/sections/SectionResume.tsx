import styles from '../../styles/scss/components/sections/Resume.module.scss'
import { Row, Col } from "react-bootstrap";

export default function SectionResume(){
    return(
        <>
            <Row className="subcontent">
                <h4 className="subtitle">
                    <span>Experiência</span>
                </h4>
                <ul className={styles.resumeList}>
                <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                    <h5 className={styles.JobPosition}>Consultoria e mentoria em UX/UI Design</h5>
                                    <h5 className={styles.CompanyName}>Nexia Hub - Autônomo</h5>
                                    <span className={styles.date}>Nov 2023 - Atual</span>
                                </div>
                            </div>
                        </li>
                    </Col>
                    <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>Analista UX UI - Especialista</h4>
                                    <h5 className={styles.CompanyName}>DBC Company</h5>
                                    <span className={styles.date}>Fev 2022 - Out 2023</span>
                                </div>
                            </div>
                        </li>
                    </Col>
                    
                    <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                <h4 className={styles.JobPosition}>Lead UX Designer</h4>
                                    <h5 className={styles.CompanyName}>Dentsu World Services Brazil</h5>
                                    <span className={styles.date}>Ago 2021 - Fev 2022</span>
                                </div>
                            </div>
                        </li>
                    </Col>

                    <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>Lead UX Designer</h4>
                                    <h5 className={styles.CompanyName}>Getnet - PagoNxt Merchant Solutions</h5>
                                    <span className={styles.date}>Abr 2021 - Ago 2021</span>
                                </div>
                            </div>                            
                        </li>
                    </Col>

                    <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX designer Sênior | UX Lead</h4>
                                    <h5 className={styles.CompanyName}>UOL Edtech</h5>
                                    <span className={styles.date}>Fev 2020 - Mar 2021</span>
                                </div>
                            </div>
                        </li>
                    </Col>
                    <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                    <h5 className={styles.JobPosition}>Consultoria e mentoria em UX/UI Design</h5>
                                    <h5 className={styles.CompanyName}>Nexia Hub - Autônomo</h5>
                                    <span className={styles.date}>Jan 2018 - Fev 2020</span>
                                </div>
                            </div>
                        </li>
                    </Col>
    
                    <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX / UI designer | Marketing Supervisor</h4>
                                    <h5 className={styles.CompanyName}>L&S Group</h5>
                                    <span className={styles.date}>Jul 2015 - Jan 2018</span>
                                </div>
                            </div>
                        </li>
                    </Col>
                    
                    <Col xxl="12">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <div className={styles.boxRight}>
                                    <h4 className={styles.JobPosition}>UX / UI (Web Designer)</h4>
                                    <h5 className={styles.CompanyName}>Fastcompras</h5>
                                    <span className={styles.date}>Set 2009 - Jul 2015</span>
                                </div>
                            </div>
                        </li>
                    </Col>
                </ul>
            </Row>
        </>
    )
}