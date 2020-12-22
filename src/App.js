import React, { useState, useEffect } from 'react'
import { Home, Loading, Privacy } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
      <Router>
        <Switch>
          <Route path="/impressum">
            <Privacy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      }
    </>
  );
}

export default App;
