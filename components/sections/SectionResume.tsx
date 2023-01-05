import { Container } from "reactstrap";

export default function SectionResume(){
    return(
        <Container>
            <section id="resume">
                <h3 className="sectionTitle">
                    <img alt="sectionIcon"/>
                    <span>Por onde eu já passei</span>
                </h3>
            
            
            <div className="row">
                <ul>
                    <li>
                        <div className="box">
                            <img alt="logo empresa"/>
                            <h5>Nome da empresa</h5>
                            <span className="date">Mês XXXX - Atual </span>
                        </div>
                        <div className="tasks">
                            * task 1
                            * task 2
                            * task 3
                            * task 4
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img alt="logo empresa"/>
                            <h5>Nome da empresa</h5>
                            <span className="date">Mês XXXX - Mês XXXX </span>
                        </div>
                        <div className="tasks">
                            * task 1
                            * task 2
                            * task 3
                            * task 4
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img alt="logo empresa"/>
                            <h5>Nome da empresa</h5>
                            <span className="date">Mês XXXX - Mês XXXX </span>
                        </div>
                        <div className="tasks">
                            * task 1
                            * task 2
                            * task 3
                            * task 4
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img alt="logo empresa"/>
                            <h5>Nome da empresa</h5>
                            <span className="date">Mês XXXX - Mês XXXX </span>
                        </div>
                        <div className="tasks">
                            * task 1
                            * task 2
                            * task 3
                            * task 4
                        </div>
                    </li>
                </ul>
            </div>

            </section>
        </Container>
    )
}