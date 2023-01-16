import SideNav from './SideNav'
import Footer from './Footer'
import StickyMenu from './StickyMenu'

export default function MainContainer({children}){
    
    return(
        <>
        <SideNav/>
            <main>
                <StickyMenu/>
                {children}
                <Footer/>
            </main>
        </>
    )
}