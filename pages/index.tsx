import SectionItsMe from "../components/sections/SectionItsMe"
import SectionWhatIDo from "../components/sections/SectionWhatIDo"
import SectionHowTo from "../components/sections/SectionHowTo"
import SectionResume from "../components/sections/SectionResume"

export default function Home() {  
  return (
    
        <div id="appBody">
            <main>
                <SectionItsMe/>
                <SectionWhatIDo/>
                <SectionHowTo/>
                <SectionResume/>
            </main>
        </div>

  )
}
 