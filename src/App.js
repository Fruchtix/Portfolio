import React, { useState, useEffect } from 'react'
import { Home, Loading } from './pages'

function App() {
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false)
    }, 2000)
  }, [])

  return (
    <>
      {loaded ? <Loading /> :
      <Home />}
    </>
  );
}

export default App;
