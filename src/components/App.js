import React from "react";
import Nav from "./Nav";
import PigCardsDisplay from "./PigCardsDisplay";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigCardsDisplay hogs={hogs}/>
		</div>
	);
}

export default App;
