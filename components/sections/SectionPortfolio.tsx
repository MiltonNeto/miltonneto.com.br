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
                                Aplicação de voz, com objetivo principal de utilizar a Alexa como meio de aprendizado.
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
                                Controle automatizado da diabetes, de forma rápida, fácil e confiável
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
                        {/*<Link href="/ProjectChapterUX" className={styles.card}>
                            <Image src='/images/projetos/chapter/thumb-chapter.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                             Projeto de estudo, entendimento e evolução de Chapter de design em de time de Design Ops
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        */}
                        <Link href="/ProjectMagnifiCourier" className={styles.card}>
                            <Image src='/images/projetos/magnificourier/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                             Proposta de projeto de app de entregas, com a exigência de incentivar sustentabilidade ecológica
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe XD</li>
                                <li>Entrevistas pessoais</li>
                                <li>Miro</li>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                <li>Identidade visual</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        <Link href="/ProjectRedesignFast" className={styles.card}>
                            <Image src='/images/projetos/fastcompras/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                             Proposta de redesign de site institucional, atualizando com os primeiros estudos de UX
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Adobe Photoshop</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Veja as telas</button>
                            </div>
                        </Link>
                        <Link href="/ProjectMedi" className={styles.card}>
                            <Image src='/images/projetos/medi/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                             Interface de controle de casa Smarthome, focado para tablet.
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Illustrator</li>
                                <li>Identidade visual</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Veja as telas</button>
                            </div>
                        </Link>
                        <Link href="/ProjectQB" className={styles.card}>
                            <Image src='/images/projetos/qb/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                             Aplicação de desenvolvimento de surveys de forma automatizada
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Photoshop</li>
                                <li>Prototyping</li>
                                <li>Workflow</li>
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Conheça o Projeto</button>
                            </div>
                        </Link>
                        <Link href="/ProjectPiscilovers" className={styles.card}>
                            <Image src='/images/projetos/piscilovers/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                            Design de interface de tela principal desenvolvido a partir de apanhado de ideias
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Illustrator</li>
                                <li>Identidade visual</li>                                
                            </ul>
                            <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Veja as telas</button>
                            </div>
                        </Link>
                        <Link href="/ProjectB2B" className={styles.card}>
                            <Image src='/images/projetos/b2b/thumb-mini.png' layout='responsive' width={410} height={271} alt="Imagem de projeto" className={styles.cardImage} />
                            <div className={styles.cardText}>
                             Projeto de app de atacado de marca de moda Fitness, focado em B2B com diversas regras de implementação
                            </div>
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Entrevistas pessoais</li>
                                <li>Figjam</li>
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
                            <p>A busca de mercado pela posição de User Experience é crescente e notória, e de acordo com essa procura, aumenta junto, o número de profissionais...</p>
                        </div>
                        <div className={styles.cardAction}>
                        <button className={styles.buttonAction}>Ler o artigo completo</button>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/montando-portf%C3%B3lio-de-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>Montando Portfólio de UX</h6>
                            <p>Cada dia mais vemos oportunidades surgindo para a nossa profissão, mesmo em tempos de pandemia temos diariamente vagas e mais vagas sendo anunciadas...</p>
                        </div>
                        <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Ler o artigo completo</button>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/o-encaixotamento-do-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>O encaixotamento do UX</h6>
                            <p>Há algum tempo atuo como UX Lead, estando a frente de equipes e desenvolvendo profissionais que me surpreendem diariamente e muitas vezes me fazem questionar...</p>
                        </div>
                        <div className={styles.cardAction}>
                            <button className={styles.buttonAction}>Ler o artigo completo</button>
                        </div>
                    </Link>
                    
                </div>
                
            </Row>
          </>
    )
}