import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlA = 'http://localhost:9009/api/planets'
const urlB = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])

    useEffect(()=>{
    function people() {
     axios.get(urlB)
    .then(res =>  setPeople(res.data))
    .catch(err => console.log(err.message))
    }
    people()

    },[])

    useEffect(()=>{
      function planets() {
       axios.get(urlA)
      .then(res =>  setPlanets(res.data))
      .catch(err => console.log(err.message))
      }
      planets()
  
      },[])




      const profile = people.map((char) => {
       const home = planets.find((planet) => planet.id === char.homeworld)
       return {
        id: char.id,
        name: char.name,
        homeworld: {
          id: char.homeworld,
          name: home.name
         
        }
      };
      })
        console.log(profile)
        

      

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <h2>
      { profile.map(ppl => ( <Character key={ppl.id} name={ppl.name} id={ppl.id} homeworld={ppl.homeworld.name}/>))}
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
     
      </h2>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
