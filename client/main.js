import {Meteor} from "meteor/meteor"
import React, {Component} from "react"
import {render} from "react-dom"
import App from "../imports/ui/components/App"

Meteor.startup(() => {
  console.log("***** here ***** ")
  render(<App />, document.querySelector("#app"))
})

