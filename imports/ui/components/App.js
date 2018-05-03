import React, {Component} from "react"
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import Home from "./Home/Home"
import Test from "./Test/Test"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/test"> Test </Link>
          <main>
              <Route extact path="/" component={Home} />
              <Route  path="/test" component={Test} />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
