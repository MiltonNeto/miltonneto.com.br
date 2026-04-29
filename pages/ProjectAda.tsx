import styles from '../styles/scss/pages/ProjectsPage.module.scss'
import Head from 'next/head';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'
export default function ProjectAda(){
    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        </Head>
        
        <div className={styles.header +" "+ styles.ada}>
            <div className={styles.headerOverlay}></div>
                <div className={styles.headerContent}>
                    <Container>
                        <span className={styles.caseLabel}>Projeto</span>

                        <h1 className={styles.projectTitle}>A.D.A.</h1>
                        <p className={styles.caseSubline}>
                                  Controle de diabetes não é só monitoramento, é tomada de decisão. O ADA foi projetado para tornar essas decisões mais rápidas, claras e seguras.
                        </p>
                        <div className={styles.caseMeta}>
                            <span>Product Design</span>
                            <span>UI Design</span>
                            <span>Assistente Virtual</span>
                            <span>Saúde Digital</span>
                        </div>
                        <p className={styles.caseContext}>
                                  O desafio não era apenas organizar dados, mas estruturar uma experiência capaz de reduzir incerteza em um contexto onde cada decisão impacta diretamente a saúde do usuário.
                        </p>
                    </Container>
                
                
                </div>
        </div>
        
        <Container  className={styles.projectsBody}>
            
        <Row className={styles.sectionDivision}>

        <h4 className={styles.sectionTitle}>Descrição</h4>
        <Col xxl='12'>
        <p>Controle automatizado do diabetes, de forma rápida, fácil e confiável. Funciona como um centro de informações e suporte para o controle da glicemia, alimentação, medicamentos e para garantir o seu bem-estar.</p>
        </Col>
        </Row>

        <Row className={styles.sectionDivision}>
            <Col xxl="6">
                <h4 className={styles.sectionTitle}>Desafio</h4>
                <p>Em geral, o controle da glicemia é feito manualmente. Isso leva em consideração o que o paciente considera apropriado ou não, podendo até gerar anotações incorretas para "burlar" a dieta e comer aquele doce em excesso.
                </p>
            </Col>
            <Col XXl="6">
                <h4 className={styles.sectionTitle}>Objetivos</h4>
                <p>A ADA serve como uma companheira para a pessoa com diabetes, uma assistente virtual que ajuda a tornar a rotina de controle da glicemia mais rápida, simples e segura, <strong>além de manter seus principais contatos informados sobre suas leituras e enviar notificações, se necessário.</strong>
                </p>
            </Col>
        </Row>
            
        
        <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Features</h4>
            <Col xxl="12" className={styles.SideBySide}>
            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon1.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Suporte automático multiplataforma para medidores de glicemia
            </div>
            
            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon2.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Funções emparelhadas com o smartwatch, como lembretes e alarmes.
            </div>

            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon3.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Função de emergência: notifica seus principais contatos, se necessário.
            </div>
            </Col>

        </Row>

        <Row className={styles.sectionDivision}>
            <Col xxl="8">
                <div className={styles.techBox}>
                    <p>A ADA utiliza a API dos principais dispositivos automatizados de monitoramento de glicose no sangue disponíveis no mercado para gerar relatórios de variação dos níveis de açúcar no sangue.
                    </p>
                </div>
                <div className="quote">
                    "Este aplicativo traz mais confiabilidade e segurança ao controle do diabetes. Ele realiza leituras automáticas com os principais dispositivos e notifica o usuário em casos de emergência. Vejo um grande potencial de benefícios para o usuário, além de uma alta probabilidade de adesão ao tratamento."<br />
                    <span className='quoteSignature'>
                    Opinião do avaliador do aplicativo
                    </span>
                </div>
            </Col>
            <Col xxl="4" xs="12">
            <Image src="/images/projetos/ada/screen-1.webp" width="380" height="450" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            </Col>

            <div className={styles.imageList}>
                <Image src="/images/projetos/ada/screen-2.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-3.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-4.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-5.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-6.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-7.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-8.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-9.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-10.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-11.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-12.webp" width="600" height="945" alt="A.D.A."/>
                <Image src="/images/projetos/ada/screen-13.webp" width="600" height="945" alt="A.D.A."/>
            
            </div>

            <Row className={styles.sectionDivision}></Row>
            
            <h3 className="sectionTitle">
                  <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                  <span>Veja outros de meus trabalhos</span>
              </h3>
            <SectionPortfolio />

        </Row>
        </Container>

        </>
    )
}