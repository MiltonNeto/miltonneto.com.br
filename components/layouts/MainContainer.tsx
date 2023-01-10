import Hero from "./Hero"
import Header from "./Header"
import Footer from "./Footer"

export default function MainContainer({children}){
    
    return(
        <>
            <Header />
            <Hero />
                {children}
            <Footer />
        </>
    )
}