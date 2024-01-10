import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectAlexa(){
    return(
        <div>
        <div className={styles.header +" "+ styles.alexa} >
            <Container>
                <h2 className={styles.projectTitle}>Alexa's Educational Skill</h2>
            </Container>
        </div>

        <Container  className={styles.projectsBody}>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                    <label>Tools:</label>
                    <li>Figma</li>
                    <li>Alexa</li>
                    <li>Miro</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Voice Interface</li>
                    <li>Virtual Assistent</li>
                    <li>Alexa</li>
                    <li>Chatbot</li>
                    <li>Artificial Intelligence</li>
                    <li>Accessibility</li>
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                
                <h4 className={styles.sectionTitle}>Description</h4>
                <Col xxl="12">
                <p>Voice application, with the main objective of using Alexa as a means of learning, facilitating and covering even more the scope of the distance education experience.</p>
                <br/>
                    <Image src="/images/projetos/alexa/LogoPremioSelecao.png" width="295" height="141" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <br/>
                    <p>Finalist project of the Mobile Time Selection Award</p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
                <Col xxl="6" xs="12">
                    <h4 className={styles.sectionTitle}>Scenario</h4>
                    <p>Through a partnership with AWS, an educational institution brought the possibility of a marketing campaign, where new students would win an Alexa Echo Dot device. In the presentation of this, we raised the hypothesis of doing something that would make sense and add value to the gift.
                    <br/>
                    <strong>Then, we think about the possibility to create an Alexa's skill that would integrate it into the university's study environment.</strong>
                    </p>
                </Col>
                <Col xxl="6" xs="12">
                    <h4 className={styles.sectionTitle}>Challenge</h4>
                    <p>
                    Create for a tool still little explored by developers in Brazil, an innovative application that, according to Amazon itself, there is no previous case of something that resembles what we were planning.
                    <br/>
                    <strong>Also, going over device technical "unfeasibility" for features we were mapping.</strong>
                    </p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Limitations</h4>
                <Col xxl="12" xs="12" className={styles.SideBySide}>
                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-dev.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                        Lack of qualified devs
                    </div>

                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-bench.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                        No Benchmarks
                    </div>

                    <div className={styles.contentBox}>
                        <Image src="/images/projetos/alexa/desafio-ferramenta.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>  
                        Still underexplored tool
                    </div>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Accessibility</h4>
                <Col xxl="8" xs="12">
                    <p>
                    Echo devices have allowed us to explore functionality and benefit audiences that we didn't have before. This is the case for people with visual impairments and also with movement limitations. We realized the need to improve even in the development.</p>
                        <ul className={styles.sectionTopicList}>
                            <li>VOCABULARY</li>
                            <li>SYNONYMS</li>
                            <li>READING ADDITIONAL MATERIALS</li>
                            <li>IMAGES READINGS</li>
                            <li>COMPLETION OF TESTS</li>
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
                    We were able to include and count on the support of ACERGS (Association of the Blind People of Rio Grande do Sul) to further improve the project
                </div>
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Technical Concept</h4>
            
                <p>Prior to the design of the project, the applications (Android and IOS) of the institutions that would receive the Alexa skills already existed. They had been developed less than 01 year ago, therefore, under current and effective development parameters. Following this line of reasoning, we chose to reuse the applications' APIs to define the endpoints that would be our focus. Based on the technical possibilities of Alexa versus the existing endpoints, we first developed the POC and then the MVP.
                </p>
            
                <div className="quote">
                "We can say that: It would be possible to customize the functionalities of the institutions, within the pre-existing ones in the applications, being limited only to the technical dispositions of Alexa"
                </div>
            

                <h5 className={styles.sectionSubtitle}>Processes</h5>

                <h6 className={styles.sectionTopic}>Basic Idea</h6>
                <p>Create a conversational interface for interaction with the academic environment of the institution. Based on this idea, our process went through:</p>

                <ul className={styles.sectionTopicList}>
                    <li>Research of native features that could be incorporated into the skill (September 2020)</li>
                    <li>Definition of how to use these resources</li>
                    <li>POC's Product Design</li>
                    <li>Elaboration of the POC by the DEV team</li>
                    <li>Validation of deliveries by stakeholders</li>
                    <li>Test planning validation</li>
                    <li>MVP 1 release on January 30, 2021</li>
                    <li>Beginning of evolution to MVP 2</li>
                </ul>

                <div className={styles.breakline}></div>
                <Col xxl="4" xs="12">
                <h6 className={styles.sectionTopic}>POC Design Product</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Identify enrolled courses</li>
                        <li>Reproduction of classes</li>
                        <li>Advance to the next class</li>
                        <li>Return to previous class</li>
                        <li>Percentage and course completion</li>
                        <li>Inform registered personal data</li>
                        <li>Check communication notifications</li>
                        <li>FAQ Activation</li>
                        <li>Contact numbers</li>
                        <li>Password reset</li>
                    </ul>

                    <div className={styles.contentBox}>
                    We had 100% proof of the POC
                    </div>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>MVP2 pre-mapping</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Continue consumption on another device</li>
                        <li>Playback transfer between Echo devices</li>
                        <li>Class availability according to schedule</li>
                        <li>Existence and reading of complementary material</li>
                        <li>Playback speed change</li>
                        <li>Discipline quiz</li>
                        <li>Automated dates and deadlines</li>
                        <li>Favorite playback class moments</li>
                        <li>Verification of evaluation notes</li>
                        <li>Search by subject and teacher</li>
                    </ul>
                </Col>

                <Col xxl="4">
                    <h6 className={styles.sectionTopic}>In-person tests</h6>
                    <ul className={styles.sectionTopicList}>
                        <li><strong>Pre-mapping:</strong> submission of a digital form to map the tested personas.</li>
                        <li><strong>Individual tests:</strong> testers received guidance and tasks to be performed</li>
                        <li><strong>Group dynamics 1:</strong> the confrontation of individual ideas presented by users</li>
                        <li><strong>Group dynamics 2:</strong> exercise of valuing features raised by users</li>
                        <li><strong>Compilation of results:</strong> validation of collected data and presentation of results. Expansion of the digital survey to map more user personas of the institution</li>
                    </ul>
                </Col>

            <div className={styles.breakline}></div>
            
            <h6 className={styles.sectionTopic}>Test Planning Map</h6>
            <Image src="/images/projetos/alexa/test-plan.jpg" layout='responsive' width={400}  height={400} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            
            <div className={styles.breakline}></div>
            <h6 className={styles.sectionTopic}>RELEVANCE VS EFFORT Matrix</h6>
            <p>One of the most important test results was the priority matrix. Generated in dynamics, through exercises of interest and investment, combined with the technical effort of development.</p>
            <Image src="/images/projetos/alexa/matriz-RE.png" layout='responsive' width={400}  height={400} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>

            <div className={styles.breakline}></div>
            <h6 className={styles.sectionTopic}>Improved conversational intelligence</h6>
            <p>Creating a conversational interface is not an easy task. It is necessary to think about the tasks that the interface will do automatically, and improve the use of its intelligence. This goes for both virtual assistants and chatbots, and other cognitive technologies. A change of expression, can give more effectiveness, summarize a lot of a user's journey to their goal.</p>

            <div className={styles.breakline}></div>
            <Col xxl="6" xs="6">
                <Image src="/images/projetos/alexa/Screenshot_9.png" layout='responsive' width={280}  height={200} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Current Journey
            </Col>

            <Col xxl="6" xs="6">
                <Image src="/images/projetos/alexa/Screenshot_1.png" layout='responsive' width={280}  height={200} alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Enhanced Journey
            </Col>

            </Row>

            
                <h4 className={styles.sectionTitle}>My roles</h4>
                <p>I acted as UX Lead for the project. Responsible for skills ideation, product design, management, definition and review of user journeys, setting priorities, ideation, conducting tests and research, surveying and reporting results, support and interface of third-party vendors and research resources.</p>

                <Row className={styles.breakline}></Row>
                
                <h3 className="sectionTitle">
                    <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                    <span>See other of my works</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    )
}