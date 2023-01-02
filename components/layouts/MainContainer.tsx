import Header from "./Header"
import Footer from "./Footer"

export default function MainContainer({children}){
    
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}