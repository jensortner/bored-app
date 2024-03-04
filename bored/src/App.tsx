import { useState } from 'react'

import './App.css'
import GetBored from './GetBored'

function App() {
  const [newActivity, setNewActivity] = useState(0)

  return (
    <>
      <GetBored getNewActivity = {newActivity}/>
      <button onClick={ () => setNewActivity(newActivity+1)}>Suggest new activity</button>
    </>
      
  )
  
}

export default App
