import React from "react"
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
  const entries = data.map( (dataEntry) => {
    return (
      <Entry 
        key={dataEntry.id}
        {...dataEntry}
      />)
  });
  return (
    <div className="app">
      <Navbar />
      <div className="content-container">
        <section className="entries">
          {entries}
        </section>
      </div>
    </div>
  )
}