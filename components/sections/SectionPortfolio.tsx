import styles from '../../styles/scss/components/sections/Portfolio.module.scss'

import { Container, Row } from "reactstrap";
import Image from "next/legacy/image";

import Link from 'next/link';

export default function SectionWhatIDo(){
    return(
        
            <>
            <Row className="subcontent">
                <h4 className="subtitle">
                    <Image src="/images/icones/portfolio-color.png" layout='responsive' width={35} height={35} alt="Conheça meus trabalhos" />
                    <span>My portfolio</span>
                </h4>

                    <div className={styles.cards}>

                        <Link href="/ProjectAlexa" className={styles.card}>
                            <Image src='/images/alexa.jpg' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                <p>
                                Voice application, with the main objective of using Alexa devices as a means of learning.
                                </p>
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Alexa</li>
                                <li>Miro</li>
                            </ul>
                            <div className={styles.cardAction}>
                                <button className={styles.buttonAction}>Know the project</button>
                            </div>
                        </Link>
                        <Link href="/ProjectAda" className={styles.card}>
                            <Image src='/images/projetos/ada/thumb-ada.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Automated diabetes management, quickly, easily and reliably
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>XD</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Know the project</button>
                            </div>
                        </Link>
                        <Link href="/ProjectMagnifiCourier" className={styles.card}>
                            <Image src='/images/projetos/magnificourier/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Delivery app project proposal, with the requirement to encourage ecological sustainability
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe XD</li>
                                <li>Miro</li>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Know the project</button>
                            </div>
                        </Link>

                        <Link href="/ProjectB2B" className={styles.card}>
                            <Image src='/images/projetos/b2b/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Fitness fashion brand wholesale app project, focused on B2B with several implementation rules
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Wholesale Store</li>
                                <li>Figjam</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Know the project</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectRedesignFast" className={styles.card}>
                            <Image src='/images/projetos/fastcompras/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Institutional website redesign proposal, updating with the first UX studies
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe Photoshop</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Know the project</button>
                            </div>
                        </Link>
                        <Link href="/ProjectMedi" className={styles.card}>
                            <Image src='/images/projetos/medi/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Smarthome home control interface, focused on tablet screen.
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Illustrator</li>
                                <li>Visual Identity</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Know the project</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectEuroland" className={styles.card}>
                            <Image src='/images/projetos/euroland/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Institutional website design
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe XD</li>
                                <li>Illustrator</li>
                                <li>Visual Identity</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Know the project</button>
                            </div>
                        </Link>
                        
                    </div>
            </Row>

            <Row className="subcontent">
                <h4 className="subtitle">
                    <Image src="/images/icones/article-color.png" layout='responsive' width={35} height={35} alt="Conheça meus trabalhos" />
                    <span>Articles</span>
                </h4>
                <div className={styles.cards}>
                    <Link href="https://www.linkedin.com/pulse/o-boom-do-ux-mas-quem-%C3%A9-esse-profissional-milton-neto/" target='_blank' className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>The UX Designer boom, but who is this professional?</h6>
                            <p>The market search for the User Experience position is growing and notorious, and according to this demand, the number of professionals increases along with it...</p>
                        </div>
                        <div className={styles.cardAction}>
                        <button className={styles.buttonAction}>Read the full article</button>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/montando-portf%C3%B3lio-de-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>Assembling a UX Portfolio</h6>
                            <p>Every day we see more opportunities emerging for our profession, even in times of a pandemic we have vacancies and more vacancies being announced daily...</p>
                        </div>
                        <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Read the full article</button>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/o-encaixotamento-do-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>The UX boxing</h6>
                            <p>I've been working as a UX Lead for some time, leading teams and developing professionals who surprise me daily and often make me question...</p>
                        </div>
                        <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Read the full article</button>
                        </div>
                    </Link>
                    
                </div>
                
            </Row>
          </>
    )
}