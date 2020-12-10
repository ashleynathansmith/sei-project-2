import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import TrackShow from './components/TrackShow'

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trackshow" component={TrackShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App