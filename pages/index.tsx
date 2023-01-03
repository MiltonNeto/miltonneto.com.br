import SectionItsMe from "../components/sections/SectionItsMe"
import SectionWhatIDo from "../components/sections/SectionWhatIDo"
import SectionHowTo from "../components/sections/SectionHowTo"
import SectionResume from "../components/sections/SectionResume"
import SectionTalkToMe from "../components/sections/SectionTalkToMe"

export default function Home() {  
  return (
    
        <div id="appBody">
            <main>
                <SectionItsMe/>
                <SectionWhatIDo/>
                <SectionHowTo/>
                <SectionResume/>
                <SectionTalkToMe/>
            </main>
        </div>

  )
}
