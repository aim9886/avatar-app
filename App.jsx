import React from 'react'
import JSON from "./details.json"
import Detail from "./Detail"

const App = () => {
  return (
    <div>
      <Detail data={JSON}/>
    </div>
  )
}

export default App