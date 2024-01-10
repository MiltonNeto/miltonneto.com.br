import { ReactNode } from 'react'

interface Props{
    children?: ReactNode
}
import SideNav from './SideNav'
import Footer from './Footer'
import StickyMenu from './StickyMenu'

export default function MainContainer({children, ... props}:Props){
    

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