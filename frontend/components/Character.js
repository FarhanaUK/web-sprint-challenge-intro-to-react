import React, {useState} from 'react'






function Character({name, homeworld}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [renderHomeworld, setRenderHomeworld] = useState(false)
  const toggle = () => {
    setRenderHomeworld(!renderHomeworld)
  
  }
    


  return (
    <div onClick={toggle} className='character-card' >
      <h3 className='Character-name'>{name}</h3>
      {renderHomeworld &&
      <p>planet: 
        <span className='character-planet'> {homeworld}</span>
      </p>
}
    </div>
  )
}

export default Character
