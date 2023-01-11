import SideNav from './SideNav'
import Footer from './Footer'

export default function MainContainer({children}){
    
    return(
        <>
        <SideNav/>
            <main>
                {children}
                <Footer/>
            </main>
        </>
    )
}