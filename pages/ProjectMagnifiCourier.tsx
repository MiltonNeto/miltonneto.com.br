import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from "next/legacy/image";
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectMagnifiCourier(){
    return(
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
                    <label>Tools:</label>
                    <li>Adobe XD</li>
                    <li>Miro</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Visual Identidy</li>
                    <li>Personal Interview</li>
                    <li>Ecological Sustainability</li>
                    <li>Delivery App</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                
                <Col xxl="6">
                <h4 className={styles.sectionTitle}>Description</h4>
                <p>Project proposal for a delivery app, with the requirement to encourage ecological sustainability.</p>
                <br/>
                <p>
                MagnifiCourier is an app that combines the solution and ease of the main urban mobility applications on the market, making life easier for users who need to transport small or large objects, offering eco-sustainable options.
                </p>
                </Col>
            
                <Col xxl="6" xs="12">         
                    <h4 className={styles.sectionTitle}>How it works</h4>
                    <p>Through a discount system, it encourages the use of bicycle couriers (deliveries), or even Shared Delivery (which reduces the frequency of the Courier in transit), taking several collections at the same time, through a route that the application itself outlines as being the most effective and least polluting.<br/>
                    In addition to other forms of incentives, such as the company's commitment to planting trees according to the use of the application.
                    </p>
                </Col>
            </Row>
            <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Users</h4>
                <Col xxl="12" xs="12">
                    <p>
                    Interviews were carried out with different user profiles, who answered some questions regarding the use of delivery services and how much easier this would be in their daily lives.
                    </p>
                    <div className="quote">
                    I highlight here, as an example, two people who participated in these surveys. And a third, who participated as a user of what would be the DRIVER version of MagnifiCourier.
                    </div>
                </Col>
                <br/>
                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                        <Image src="/images/projetos/magnificourier/persona-daniela.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                        
                        <p className={styles.personaQuote}>"...sometimes I lack some production material and I can't go out to get it, and at the same time I have deadlines for delivery. To the point that I can program myself, sometimes I need something more urgently. Unforeseen happen!"
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Name</label>
                                <br/>
                                Daniela
                            </li>
                            <li>
                                <label>Age</label>
                                <br/>
                                33 y.o.
                            </li>
                            <li> 
                                <label>Occupation</label>
                                <br/>  
                                    Self-employed professional
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Have you ever used a motoboy or delivery service?</li>
                                <li className={styles.personaAnswer}>Yes, certainly</li>
                            <li className={styles.personaQuestion}>Utilizaria entrega através de um aplicativo?</li>
                                <li className={styles.personaAnswer}>Would you use delivery through an app?</li>
                            <li className={styles.personaQuestion}>What would weigh most in choosing to use the app?</li>
                                <li className={styles.personaAnswer}>Have dynamism: agility, delivery options, quotes, clear and well-defined information (time and options for choosing the vehicle to be delivered) in real time and centralized in a single place</li>
                            <li className={styles.personaQuestion}>What do you expect to see in a delivery app?</li>
                                <li className={styles.personaAnswer}>Starting point, delivery point, types of delivery, confirmation of receipt, maybe it would be nice if you knew the size or weight of the package you were going to receive, there are things that you can't carry alone.</li>
                            <li className={styles.personaQuestion}>Would you accept the use of shared delivery in case this delivery takes a little longer to be carried out?</li>
                                <li className={styles.personaAnswer}>Yes, because the value would certainly be cheaper and, as I don't work with perishable products or live loads, I wouldn't be in such a hurry and could plan and wait.</li>

                            <li className={styles.personaQuestion}>Do you think it is possible for a company to be concerned about the environment by working with means of transport, which are polluting in general?</li>
                                <li className={styles.personaAnswer}>If it's possible, I can't imagine how, but I think it's very important for any company, whatever it is, to be concerned about the environment, to have internal measures, perhaps for selective collection or saving paper, any environmental preservation measure is well regarded.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                        <Image src="/images/projetos/magnificourier/persona-mauricio.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                        <p className={styles.personaQuote}>"Unfortunately, some documents still need to be physically signed, with this pandemic story, as much as this has speeded up the digitization of many services, a lot is still not possible"
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Name</label>
                                <br/>
                                Alex
                            </li>
                            <li>
                                <label>Age</label>
                                <br/>
                                43 y.o.
                            </li>
                            <li> 
                                <label>Occupation</label>
                                <br/>
                                Administrative manager
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Have you ever used a motoboy or delivery service?</li>
                                <li className={styles.personaAnswer}>Yes, more than I should</li>
                            <li className={styles.personaQuestion}>Would you use delivery through an app?</li>
                                <li className={styles.personaAnswer}>I already use several, mainly for food</li>
                            <li className={styles.personaQuestion}>What would weigh most in choosing to use the app?</li>
                                <li className={styles.personaAnswer}>No need to look for the lowest price and know the time my delivery will be made</li>
                            <li className={styles.personaQuestion}>What do you expect to see in a delivery app?</li>
                                <li className={styles.personaAnswer}>Cost, delivery forecast, delivery confirmation;</li>
                            <li className={styles.personaQuestion}>Would you accept the use of shared delivery in case this delivery takes a little longer to be carried out?</li>
                                <li className={styles.personaAnswer}>It would depend a lot on my urgency, sometimes I need a more urgent delivery, or with an appointment, today we already have online document services, but still some things need to be physically signed and these need to be faster.</li>
                                <li className={styles.personaQuestion}>Do you think it is possible for a company to be concerned about the environment by working with means of transport, which are polluting in general?</li>
                                    <li className={styles.personaAnswer}>It seems difficult, right? But I don't know, it would be important, here at the company we have solar energy, it's not much, but it's a start now, with vehicles it seems more utopian. Electric vehicles maybe.</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={styles.cardPersona}>
                    <Col xxl="3" className={styles.personaProfile}>
                    <Image src="/images/projetos/magnificourier/persona-rodrigo.png" width='200' height='200' alt="persona" className={styles.personaImage} />
                    <p className={styles.personaQuote}>"The more deliveries I can make, the more I earn, if I can save on gas and bike maintenance, even better. Being able to schedule more than one delivery at a time so it would be really cool, making a single route with multiple deliveries."
                        </p>

                        <ul className={styles.personaInfo}>
                            <li>
                                <label>Name</label>
                                <br/>
                                Rodrigo
                            </li>
                            <li>
                                <label>Age</label>
                                <br/>
                                39 y.o.
                            </li>
                            <li> 
                                <label>Occupation</label>
                                <br/>
                                Motoboy
                            </li>
                        </ul>
                    </Col>
                    <Col xxl="9" className={styles.personaSurvey}>
                        <ul>
                            <li className={styles.personaQuestion}>Would you use an app to receive delivery calls?</li>
                                <li className={styles.personaAnswer}>Yes, today most of the service comes via app</li>
                            <li className={styles.personaQuestion}>What would help you to choose to work by app?</li>
                                <li className={styles.personaAnswer}>Delivery volume, and earnings, the percentage of the application.</li>
                            <li className={styles.personaQuestion}>Would you stop making a motorcycle delivery to do it by bicycle?</li>
                                <li className={styles.personaAnswer}>If it wasn't a long distance and if it was financially worth it, even more so with today's fuel prices.</li>
                            <li className={styles.personaQuestion}>What do you expect to see in an type of app?</li>
                                <li className={styles.personaAnswer}>How much will I receive per delivery, package size, distance and a map.</li>
                            <li className={styles.personaQuestion}>Does a company with environmental responsibility make a difference when a professional works?</li>
                                <li className={styles.personaAnswer}>I think this is an issue that the user is most concerned about, who is going to hire, not the worker.</li>
                        </ul>
                    </Col>
                </Row>
                
                    <h4 className={styles.sectionTitle}>Main advantages of the App</h4>
                    <Col xxl="12" xs="12">
                        <p>
                        Considering the answers of our interviewees, we developed an app with the following advantages:
                        </p>
                        <ul className={styles.sectionTopicList}>
                            <li>Centralization of courier and freight services in a single application</li>
                            <li>Affordable values</li>
                            <li>Incentive to a sustainable delivery system through discounts</li>
                            <li>Delivery time forecast</li>
                            <li>Delivery route tracking</li>
                            <li>The company undertakes to plant a tree seedling in a reforestation area for each delivery made by bike carrier or shared delivery</li>
                            <li>Quick learning curve, as it is based on the main urban mobility apps on the market</li>
                        </ul>
                    </Col>
                    
            </Row>

            <Row className={styles.sectionDivision}>
                <h4 className={styles.sectionTitle}>Planning and Wireframes</h4>

                <p>
                Interviews with potential users and stakeholders generated the project backlog, with the aim of basing the creation on scrum methodology:
                </p>
                <br/>
                <br/>
            </Row>
            
            <h5 className={styles.sectionSubtitle}>User Version:</h5>          
            
            <Row className={styles.cardPlanning}>            
                <Col xxl="4" xs="12">
                <h6 className={styles.sectionTopic}>Sprint 1 (MVP):</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Origin registration</li>
                        <li>Destiny registration</li>
                        <li>Delivery method selection</li>
                        <li>Discount System for shared delivery or bike</li>
                        <li>Search shift record</li>
                        <li>Delivery shift record</li>
                        <li>Delivery confirmation</li>
                        <li>Courier rating</li>
                        <li>Plantation token</li>
                    </ul>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Sprint 2:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Packet size registration</li>
                        <li>Package weight registration</li>
                        <li>Vehicle filter by pack size</li>
                        <li>Order History</li>
                        <li>Plantation field map</li>                       
                    </ul>
                </Col>
                <Col xxl="4">
                   <h6 className={styles.sectionTopic}>Sprint 3:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Photo of proof of delivery</li>
                        <li>Route duplication</li>
                        <li>Return deliveries (with payment for example)</li>
                        <li>Farm Token Quest</li>
                        <li>Planted item health information</li>                        
                    </ul>
                </Col>
            </Row>

            <h5 className={styles.sectionSubtitle}>Courier Version</h5>          
            
            <Row className={styles.cardPlanning}>            
                <Col xxl="6" xs="12">
                <h6 className={styles.sectionTopic}>Sprint 1 (MVP):</h6>
                    <ul className={styles.sectionTopicList}>
                        <li>Order receiving (notification with order details)</li>
                        <li>Collection Accept (or not) </li>
                        <li>Amount to be received for delivery</li>
                        <li>Shared delivery list</li>
                        <li>Displacement lock</li>
                        <li>collection reminder</li>
                        <li>Collection carried out</li>
                        <li>Collection delivered</li>
                        <li>Sending Delivery Confirmation</li>
                    </ul>
                </Col>
                <Col xxl="6">
                   <h6 className={styles.sectionTopic}>Sprint 2:</h6>
                   <ul className={styles.sectionTopicList}>
                        <li>Delivery history with financial control</li>
                        <li>Digital wallet</li>
                        <li>Account value (total and commission)</li>
                        <li>Financial transfer</li>
                        <li>Configuration of available means of delivery</li>
                        <li>Service area setup</li>
                        <li>Availability time setting</li>
                        <li>Automated creation of shared delivery pickups</li>
                        <li>Intelligence allows pickup if it is en route to a delivery</li>
                        
                        
                    </ul>
                </Col>
            </Row>

            <Row>
                <h5 className={styles.sectionSubtitle}>Wireframes</h5>
                <p>
                The flow drawn in wireframes:
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
            <h4 className={styles.sectionTitle}>Visual Identity</h4>
                <Col xxl="12" xs="12">
                    <p>
                    The most important aspect within MagnifiCourier is its environmental responsibility, the company wants to make a difference for the planet, as well as for its users. Making people aware, through their services, that the planet needs attention and even the act of making a delivery, can make a difference in the final result, hoping that the butterfly effect will be effective in the smallest actions.
                    <br/>
                    <br/>
                    <strong>Identity brainstorm and construction of the concept of deliveries with environmental responsibility:</strong>
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
                    <strong>Identity creation process</strong>
                   <br/>
                   The most predominant colors that gave meaning to the ideas were shades of green and blue, and the items that were most present were leaves, map markers and clocks.<br />
                   The company intends to be friendly, reliable and dynamic, in addition to conveying an air of lightness due to its environmental bias. Therefore, the option for a thinner, more elegant and rounded typography, both for the logo and for the content
                </p>
                <Row className={styles.breakline}></Row>
                <Row>
                    <Col xxl='5' className={styles.compositionID}>
                        <h5 className={styles.separationSubtitle}>
                            <strong>Colors:</strong>
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
                            <strong>Typography</strong>    
                        </h5>
                        <div className={styles.galleryType}>
                            <label>Logotype: Poiret one</label>
                            <img src='/images/projetos/magnificourier/identidade/id13.png' alt="Imagem de projeto" className={styles.IDType} />
                            <label>Content: Quicksand  </label>
                        <img src='/images/projetos/magnificourier/identidade/id14.png' alt="Imagem de projeto" className={styles.IDType} />
                        </div>
                    </Col>
                </Row>
                <Row className={styles.breakline}></Row>
                <Row>
                    <Col xxl='7' className={styles.compositionID}>
                        <h5 className={styles.separationSubtitle}>
                            <strong>Items forming the Symbology:</strong>
                            
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
                            <strong>Identity proposal:</strong>
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
                <h4 className={styles.sectionTitle}>The Project</h4>
                    <p>
                    Now, with the proper introductions made, enough talking, you can recline your seat and enjoy some of the proposed screens of the project:

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

            <h4 className={styles.sectionTitle}>My roles</h4>
                <p>In this project, I had a practically authorial role, since the concept parameters were minimal. The project stakeholder pitch was:<br/>
                    <strong>We need a service app project that has an environmental preservation bias.</strong>
                    <br/><br/>
                    In this way, MagnifiCourier was an application where all Product Design practice was necessary, with public interest research, product ideation, creation and conceptualization of personas, research and development of interest curve studies, user flows, visual identity design, system design development, interface design, etc. Since I was the only product designer involved in the project, I was present in all stages until delivery to production.<br/><br/>
                    The current status of this project is that it could not be developed, as the company would not be able to afford the preservation of the suggested environmental area as a counterpart to using the app, even creating rules for planting, such as: "1 tree for every 10 uses of the Courier bike rack by just one user".
                </p>

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