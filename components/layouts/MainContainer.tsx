import SideNav from './SideNav'
import Header from './Header'
import Footer from './Footer'

export default function MainContainer({children}){
    
    return(
        <>
        <SideNav/>
        <Header/>
            {children}
        <Footer/>
        </>
    )
}