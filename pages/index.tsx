import SectionItsMe from "../components/sections/SectionItsMe"
import SectionPortfolio from "../components/sections/SectionPortfolio"
import SectionHowTo from "../components/sections/SectionHowTo"
import SectionResume from "../components/sections/SectionResume"

export default function Home() {  
  return (
    
        <div id="appBody">
            <main>
                <SectionItsMe/>
                <SectionPortfolio/>
                <SectionHowTo/>
                <SectionResume/>
            </main>
        </div>

  )
}
 