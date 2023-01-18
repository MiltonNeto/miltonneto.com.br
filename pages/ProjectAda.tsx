import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from 'next/image';

export default function ProjectAda(){
    return(
        <>
        <div className={styles.header +" "+ styles.ada}>
            <Container>
                <h2 className={styles.projectTitle}>A.D.A.</h2>
            </Container>
        </div>
        
        <Container>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                    <ul className={styles.bluePills}>
                        <label>Ferramentas:</label>
                        <li>Figma</li>
                        <li>Alexa</li> 
                        <li>Miro</li>
                    </ul>
                    <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Interface de voz</li>
                    <li>Assistente Virtual</li>
                    <li>Alexa</li>
                    <li>Chatbot</li> 
                    <li>Inteligência Artificial</li>
                    <li>Acessibilidade</li> 
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

        <Row className={styles.sectionDivision}>

        <h4 className={styles.sectionTitle}>Descrição</h4>
        <Col xxl='12'>
        <p>Controle automatizado da diabetes, de forma rápida, fácil e confiável. Funciona como uma central de informações e suporte para controle de glicemia, alimentação, medicamentos e garantir o seu bem-estar.</p>
        </Col>
        </Row>

        <Row className={styles.sectionDivision}>
            <Col xxl="6">
                <h4 className={styles.sectionTitle}>Desafio</h4>
                <p>De modo geral o controle da glicemia é realizado de forma manual. Estando sujeito ao que o paciente irá considerar que deve ou não ser dado como ponto de atenção, podendo até mesmo fazer apontamentos errados para poder "burlar" sua dieta e comer AQUELE docinho a mais.
                </p>
            </Col>
            <Col XXl="6">
                <h4 className={styles.sectionTitle}>Objetivo</h4>
                <p>A ADA serve como uma companhia para a pessoa portadora de diabetes, uma assistente virtual que ajuda a tornar a rotina de controle da glicemia mais rápida, leve e sem fraudes, <strong>além de manter seus principais contatos informados de suas leituras e enviando notificações se necessário.</strong>
                </p>
            </Col>
        </Row>
            
        
        <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Features</h4>
            <Col xxl="12" className={styles.SideBySide}>
            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon1.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Suporte automático multiplataforma para medidores de diabetes
            </div>
            
            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon2.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Funções pareadas com smartwatch, como lembretes e alarmes
            </div>

            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon3.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Função Emergência, avisa seus principais contatos se necessário
            </div>
            </Col>

        </Row>

        <Row className={styles.sectionDivision}>
            <Col xxl="8">
                <div className={styles.techBox}>
                    <p>A A.D.A. consome a API dos principais dispositivos de controle de glicemia automatizados do mercado para gerar relatórios de alteração de açúcar no sangue.
                    </p>
                </div>
                <div className="quote">
                    "Esse App traz mais confiabilidade e segurança no controle da diabetes. Fazendo leituras com os principais dispositivos de forma automática e avisando em casos de emergência. Vejo muito potencial de benefício ao usuário, além de um potencial de adesão muito alto"<br />
                    <span className='quoteSignature'>
                        Opinião do avaliador da aplicação
                    </span>
                </div>
            </Col>
            <Col xxl="4" xs="12">
            <img src="/images/projetos/ada/screen-1.webp" width="380" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            </Col>

            <div className={styles.imageList}>
                <img src="/images/projetos/ada/screen-2.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-3.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-4.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-5.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-6.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-7.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-8.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-9.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-10.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-11.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-12.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <img src="/images/projetos/ada/screen-13.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            
            </div>


        </Row>
        </Container>

        </>
    )
}