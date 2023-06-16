import React from "react";

export default function SortMenu({sortFunction, toggleGreased}) {
  return (
    <div>
      <button onClick={sortFunction}>Sort Alphabetically</button>
      <button onClick={toggleGreased}>Toggle Only Greased Hogs</button>
      <h1></h1>
    </div>
  )
}