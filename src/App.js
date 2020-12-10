import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import TrackShow from './components/TrackShow'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Trackshow" component={TrackShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
