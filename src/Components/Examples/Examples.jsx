import TabButton from '../TabButton/TabButton.jsx';
import {CORE_CONCEPTS} from '../../data.js';
import { EXAMPLES } from '../../data.js';
import { useState } from 'react';
import Section from '../Section/Section.jsx';
import Taps from '../Taps/Taps.jsx';

export default function Examples (){
const [selectedTopic, setSelectedTopic]= useState()

function handleSelect(selectedButton){
setSelectedTopic(selectedButton)
}

let tabContent = <p>Please select a topic.</p>
if(selectedTopic){
    tabContent =(
    <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>   
        <pre>
            {EXAMPLES[selectedTopic].code}
        </pre>
    </div>
    )
}
return <>
<Section title={"Examples"} id='examples'>
    <Taps 
    buttons={ <>        
        {CORE_CONCEPTS.map(({title})=> 
            <TabButton key={title}
                onClick ={()=> handleSelect (title)}
                isSelected = {selectedTopic === title} 
                >
                {title}
            </TabButton>
        )}
        </>
    }>

    </Taps>
    
 
   
    {tabContent}
</Section>
</>
}