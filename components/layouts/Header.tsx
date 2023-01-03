export default function Header(){
    return(
        <header>
            <div className="greetings">
                <h1>Oi, muito prazer. Eu sou Milton Neto!</h1>
                    <h2>Sou designer e mentor de experiências e interfaces, ou se preferir UX e UI
                        fique a vontade, aproveite esse nosso bate-papo.
                    </h2>
            </div>
            <nav>
                <img alt="main logo"/>
                <ul>
                    <li><a href="#ItsMe">Quem sou eu</a></li>
                    <li><a href="#WhatIDo">O que eu faço</a></li>
                    <li><a href="#HowTo">Como eu faço</a></li>
                    <li><a href="#Resume">Por onde eu passei</a></li>
                    <li><a href="#TalkToMe">Fale comigo</a></li>
                </ul>
            </nav>
        </header>
    )
}