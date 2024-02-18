import { useState } from 'react'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPup, setFeatPup] = useState()
  console.log(puppies)
  return (
    <>
      {puppies.map(puppy =><p key = {puppy.id} onClick={()=>setFeatPup(puppy)}> {puppy.name}</p>)}
      {featPup ?
      <div className="singlePuppyView">
        <h2>{featPup.name}</h2>
        <ul>
          <li>Age: {featPup.age}</li>
          <li>Email: {featPup.email}</li>
        </ul>
      </div>
      :
      <p>Please select a puppy!</p>
      }
    </>
  )
}

export default App
