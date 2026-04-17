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
                    <span>Meu portfolio</span>
                </h4>

                    <div className={styles.cards}>

                        <Link href="/ProjectAlexa" className={styles.card}>
                            <Image src='/images/alexa.jpg' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                <p>
                                Aplicativo de voz, com o objetivo principal de usar a Alexa como meio de aprendizado.
                                </p>
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Alexa</li>
                                <li>Miro</li>
                            </ul>
                            <div className={styles.cardAction}>
                                <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        <Link href="/ProjectAda" className={styles.card}>
                            <Image src='/images/projetos/ada/thumb-ada.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Controle automatizado do diabetes, de forma rápida, fácil e confiável.
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>XD</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        <Link href="/ProjectMagnifiCourier" className={styles.card}>
                            <Image src='/images/projetos/magnificourier/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Proposta de projeto de aplicativo de entregas, com o requisito de promover a sustentabilidade ecológica.
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe XD</li>
                                <li>Miro</li>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>

                        <Link href="/ProjectB2B" className={styles.card}>
                            <Image src='/images/projetos/b2b/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Projeto de aplicativo atacadista para marca de moda fitness, focado em B2B com diversas regras de implementação.
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Wholesale Store</li>
                                <li>Figjam</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectRedesignFast" className={styles.card}>
                            <Image src='/images/projetos/fastcompras/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Proposta de reformulação do site institucional, atualizada com os primeiros estudos de UX.
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe Photoshop</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        <Link href="/ProjectMedi" className={styles.card}>
                            <Image src='/images/projetos/medi/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Interface de controle residencial inteligente, focada na tela do tablet.
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Illustrator</li>
                                <li>Visual Identity</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        
                        <Link href="/ProjectEuroland" className={styles.card}>
                            <Image src='/images/projetos/euroland/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                                Design de site institucional
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe XD</li>
                                <li>Illustrator</li>
                                <li>Visual Identity</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
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
                            <p>A busca por profissionais de Experiência do Usuário (UX) está crescendo e se tornando cada vez mais comum, e, acompanhando essa demanda, o número de profissionais aumenta.</p>
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