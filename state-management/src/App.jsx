import { useState } from 'react';
import Fruits from './Fruits'
import FruitsCounter from './FruitsCounter'

function App() {

    const [fruits] = useState([
          {fruitName: 'apple', id: 1},
          {fruitName: 'apple', id: 2},
          {fruitName: 'plum', id: 3},
    ]);

  return (
    <>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </>
  )
}

export default App
