import { useEffect, useState } from 'react'
import LayoutContainer from './components/LayoutContainer'

function App() {

  const [colors, setColors] = useState([]);

  useEffect(() => {

    const arrayColors = [
      "bg-random1",
      "bg-random2",
      "bg-random3",
      "bg-random4",
      "bg-random5",
      "bg-random6",
      "bg-random7",
      "bg-random8",
    ];
  
    setColors(arrayColors);
    
  }, []);

  return (
    <>
    
      <LayoutContainer
        colors = {colors}

      />

    </>
  )
}

export default App
