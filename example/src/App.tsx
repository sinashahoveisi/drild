import React from 'react'
import DrillD from 'drilld'

const App = () => {
  const data = {
    name: 'all',
    isParent: true,
    children: [
      {
        name: 'child1'
      },
      {
        name: 'child2'
      }
    ]
  }
  return <DrillD data={data} />
}

export default App
