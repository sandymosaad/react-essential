import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept/CoreConcept.jsx';
import TabButton from './Components/TabButton/TabButton.jsx';
import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js'
import {EXAMPLES} from './data.js'



function App() {
  const [selectedTopic, setSelectedTopic]= useState()
  // const [activeSelected, setActiveSelected]= useState(false)

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    // setActiveSelected(true)
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
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
              {CORE_CONCEPTS.map((conceptItem)=>
                  <CoreConcept key={conceptItem.title} { ...conceptItem } />
              )}
          </ul>
        </section>

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
              {/* <TabButton  onSelect ={()=> handleSelect ('Components')} isSelected = {selectedTopic === 'Components'} >Components</TabButton>
              <TabButton onSelect ={()=> handleSelect ('JSX')} isSelected = {selectedTopic === 'JSX'}>JSX</TabButton>
              <TabButton onSelect ={()=> handleSelect ('Props')} isSelected = {selectedTopic === 'Props'}>Props</TabButton>
              <TabButton onSelect ={()=> handleSelect ('State')} isSelected = {selectedTopic === 'State'}>State</TabButton> */}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
