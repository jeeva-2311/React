import User_input from "./util/User_input"
import Results from "./util/Results"

import { useState } from "react"

export default function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 1000, 
    annualInvestment: 1000,
    expectedReturn: 1, 
    duration: 1
  })

  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png" alt="logo" />
        <h1>React Investment Calculator</h1>
      </div>
      <User_input setInputValues = {setInputValues} inputValues={inputValues}/>
      <Results inputValues = {inputValues}/>
    </>
  )
}