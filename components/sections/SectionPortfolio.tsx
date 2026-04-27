import styles from '../../styles/scss/components/sections/Portfolio.module.scss'
import { Row } from 'react-bootstrap';
import Image from "next/legacy/image";

import Link from 'next/link';

export default function SectionWhatIDo(){
    return(
        
            <>
            <Row className="subcontent">
                <h4 className="subtitle">
                    <Image src="/images/icones/portfolio-color.png" layout='responsive' width={35} height={35} alt="Conheça meus trabalhos" />
                    <span>Projetos</span>
                </h4>

                    <div className={styles.cards}>
                        <Link href="/ProjectMagnifiCourier" className={styles.card}>
                            <Image src='/images/projetos/magnificourier/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            App de entregas com foco em sustentabilidade
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Identidade Visual</li>
                                <li>Sustentabilidade</li>
                                <li>UX Research</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o projeto</button>
                            </div>
                        </Link>

                        <Link href="/ProjectAda" className={styles.card}>
                            <Image src='/images/projetos/ada/thumb-ada.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Plataforma de controle automatizado de diabetes
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Product Design</li>
                                <li>UI Design</li>
                                <li>Assistente Virtual</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o projeto</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectAlexa" className={styles.card}>
                            <Image src='/images/alexa.jpg' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                <p>
                                Skill educacional Alexa
                                </p>
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>UX Design</li>
                                <li>ChatBot</li>
                                <li>Acessibilidade</li>
                            </ul>
                            <div className={styles.cardAction}>
                                <button className={styles.buttonAction}>Conheça o projeto</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectB2B" className={styles.card}>
                            <Image src='/images/projetos/b2b/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            App B2B para atacado de moda fitness
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>E-commerce</li>
                                <li>B2b</li>
                                <li>Product Design</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o projeto</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectRedesignFast" className={styles.card}>
                            <Image src='/images/projetos/fastcompras/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Redesign de site institucional com foco em UX
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Design patterns</li>
                                <li>Design System</li>
                                <li>Marketing</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o projeto</button>
                            </div>
                        </Link>
                        <Link href="/ProjectMedi" className={styles.card}>
                            <Image src='/images/projetos/medi/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Interface para controle residencial inteligente
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Product Design</li>
                                <li>Interface Design</li>
                                <li>Inteligência Artificial</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o projeto</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectEuroland" className={styles.card}>
                            <Image src='/images/projetos/euroland/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Design de site institucional
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Identidade Visual</li>
                                <li>Marketing</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o projeto</button>
                            </div>
                        </Link>
                        
                    </div>
            </Row>

            <Row className="subcontent">
                <h4 className="subtitle">
                    <Image src="/images/icones/article-color.png" layout='responsive' width={35} height={35} alt="Conheça meus trabalhos" />
                    <span>Artigos</span>
                </h4>
                <div className={styles.cards}>
                    <Link href="https://www.linkedin.com/pulse/o-boom-do-ux-mas-quem-%C3%A9-esse-profissional-milton-neto/" target='_blank' className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>O boom do UX, mas quem é esse profissional?</h6>
                            <p>A busca por profissionais de Experiência do Usuário (UX) está crescendo e se tornando cada vez mais comum, e, acompanhando essa demanda, o número de profissionais aumenta...</p>
                        </div>
                        <div className={styles.cardAction}>
                        <button className={styles.buttonAction}>Leia o artigo</button>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/montando-portf%C3%B3lio-de-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>Montando Portfólio de UX</h6>
                            <p>A cada dia surgem mais oportunidades em nossa profissão, mesmo em tempos de pandemia, com vagas sendo anunciadas diariamente...</p>
                        </div>
                        <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Leia o artigo</button>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/o-encaixotamento-do-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>O encaixotamento do UX</h6>
                            <p>Trabalho como Líder de UX há algum tempo, liderando equipes e desenvolvendo profissionais que me surpreendem diariamente e frequentemente me fazem questionar...</p>
                        </div>
                        <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Leia o artigo</button>
                        </div>
                    </Link>
                    
                </div>
                
            </Row>
          </>
    )
}