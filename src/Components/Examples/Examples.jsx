import TabButton from '../TabButton/TabButton.jsx';
import {CORE_CONCEPTS} from '../../data.js';
import { EXAMPLES } from '../../data.js';
import { useState } from 'react';

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
<section id='examples'>
    <h2>Examples</h2>
    <menu>
        {CORE_CONCEPTS.map(({title})=> 
            <TabButton key={title}
                onSelect ={()=> handleSelect (title)}
                isSelected = {selectedTopic === title} 
                >
                {title}
            </TabButton>
        )}
    </menu>
    {tabContent}
</section>
</>
}