import { Container } from "reactstrap";

export default function Footer(){
    return(
        <div className="footer">
            <Container>
                <section id="TalkToMe">
                <h3 className="sectionTitle">
                    <img alt="sectionIcon"/><span>Fale comigo</span>
                </h3>
                
                <div className="row">
                    <div className="box">
                        <img alt="logo"/>
                            <h5>Linkedin</h5>
                        <span className="Description">Lead UX Designer na Dentsu World Services | Estudante de Neurociência e Psicologia Aplicada</span>    
                    </div>
                    <div className="box">
                        <img alt="logo"/>
                        <span className="Description">leonardi.milton@gmail.com</span>    
                    </div>
                    <div className="box">
                        <img alt="logo"/>
                        <span className="Description">+55 51 98528.5102</span>    
                    </div>
                </div>
                </section>
            </Container>
        </div>
    )
}