import React, {useState} from "react";

export default function PigCardsDisplay({ hogs }) {
  const [detailedHog, setDetailedHog] = useState("");

  function formatDetailedInfo(hog) {
    return (
      <div className="ui meta">
        <h3>Specialty: {hog.specialty}</h3>
        <h3>Weight: {hog.weight}</h3>
        <h3>Highest Medal Achieved: {hog["highest medal achieved"]}</h3>
        <h3>Greased: {hog.greased ? "Yes" : "No"}</h3>
      </div>
    )
  }

  function isDetailed(hog) {
    return (hog.name === detailedHog);
  }


  function handleClick(event) {
    setDetailedHog(event.target.id);
  }
  return (
    <div className="ui grid container">
    {hogs.map((hog) => {
      return (
      <div className="ui cards eight wide column" key={hog.name}>
        <div className="ui medium image">
          <img src={hog.image} alt="adorable pig" id={hog.name} onClick={handleClick}/>
        </div>
        <div className="ui content">
          <h4 className="ui header">{hog.name}</h4>
            {isDetailed(hog) ? formatDetailedInfo(hog) : <></>}
        </div>
      </div>
      );
    })}
    </div>
  )
}