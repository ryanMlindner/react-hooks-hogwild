import React, {useState} from "react";

export default function PigCardsDisplay({ hogs }) {
  const [detailedHog, setDetailedHog] = useState("");

  function formatDetailedInfo(hog) {
    return (
      <div>
        {/*TODO format detailed info*/}
      </div>
    )
  }

  function isDetailed(hog) {
    return (hog === detailedHog);
  }

  console.log(hogs);
  return (
    <div>
    {hogs.map((hog) => {
      return (<div className="ui cards">
        <div className="image">
          <img src={hog.image}/>
        </div>
        <div className="content">
          <a className="header">{hog.name}</a>
            {/*TODO logic for displaying detailed info*/}
        </div>
      </div>
      );
    })}
    </div>
  )
}