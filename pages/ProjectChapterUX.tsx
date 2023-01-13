import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from 'next/image';

export default function ProjectChapterUX(){
    return(
        <>
        <div className={styles.header +" "+ styles.UXChapter} >
            <Container>
                <h2 className={styles.projectTitle}>UX CHAPTER EVOLUTION</h2>
            </Container>
        </div>
        
        <Container>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                <label>Ferramentas:</label>
                <li>Figma</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Evolução de time</li>
                    <li>Liderança</li>
                    <li>Team Building</li>
                    <li>Product Design</li>
                </ul>
            </Col>
        </Row>

        <Row className={styles.sectionDivision}>
            <Col xxl="6">
                <h4 className={styles.sectionTitle}>Cenário</h4>
                <p>Nas minhas experiências profissionais passei por diversos desafios. E naturalmente a cada oportunidade crescemos e nos desenvolvemos mais um pouco, seja pessoal ou profissionalmente. Em uma dessas experiências, tive a oportunidade de ser o líder administrativo de um chapter de UX internacional.</p>
            </Col>
            <Col xxl="6">
                <h4 className={styles.sectionTitle}>Desafio</h4>
                <p>Adaptação a uma nova função, de um produto que eu nunca havia trabalhado, a um novo idioma que nunca havia estudado, liderando pessoas que conheciam muito mais do produto e da empresa do que eu. <strong>"POR ONDE COMEÇAR?"</strong>
                </p>
            </Col>
        </Row>

        <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Histórico</h4>
            <p>Quando me surgiu a oportunidade, foi de brilhar os olhos! Uma empresa global, um time global, financeiramente agressiva e com a possibilidade de desenvolver a equipe como fosse necessário. Saindo da primeira entrevista, onde nem mesmo sabia se passaria, me afundei em uma absoluta imersão de espanhol que até então era meu calcanhar de Aquiles. Depois de mais 4 entrevistas, fui aprovado!
            </p>
            <div className={styles.breakline}></div>
            <p>
            Durante os primeiros dias, já me perguntava o que eu estava fazendo ali, a frente de um chapter, falando uma língua, de certa forma desconhecida, atuando de uma forma que não era a que eu tinha me desenvolvido até então, <strong>NÃO SABIA COMO FAZER, E NEM SE QUER O QUE FAZER.</strong>
            </p>
            <div className={styles.breakline}></div>
            <p>
            Passado os primeiros momentos de tensão, entendi que tinha uma primeira pergunta que me ajudaria a dirigir meu trabalho dali em diante.
            </p>
            <div className={styles.breakline}></div>
            <p>
            <strong>QUAL MEU PRINCIPAL OBJETIVO COMO LÍDER DESSE CHAPTER?</strong>
            <div className={styles.techBox}>
            <strong>Ok, consegui definir um problema de forma genérica, agora como resolvê-lo ?</strong><br/>
            Eu sou um grande defensor da ideia que a experiência do usuário é algo que se aplica a tudo e a todos. Perfeito, partindo dessa definição, aplicando técnicas de UX a esse problema, devo encontrar uma solução.
            </div>
            </p>
        </Row>
        
        <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Conhecendo o usuário</h4>
            <p>Antes de entender o que se esperava da minha posição como líder do chapter, precisava primeiro definir quem eram os meus usuários, e qual o tipo de entrega eles esperavam. Assim, fazendo uma análise do cenário, por analogia montei as seguintes definições:</p>
            </Row>
        </Container>
        </>
    )
}