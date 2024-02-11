import { ReactNode } from 'react'

interface Props{
    children?: ReactNode
}
import Footer from './Footer'
import StickyMenu from './StickyMenu'

export default function MainContainer({children, ... props}:Props){
    

    return(
        <>
            <main>
                <StickyMenu/>
                {children}
                <Footer/>
            </main>
        </>
    )
}