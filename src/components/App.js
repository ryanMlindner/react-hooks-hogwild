import React, { useState } from "react";
import Nav from "./Nav";
import SortMenu from "./SortMenu";
import PigCardsDisplay from "./PigCardsDisplay";

import hogs from "../porkers_data";

function App() {
	const [hogList , setHogs] = useState(hogs);
	const [greasedOnly, setGreased] = useState(false);

	function sortHogs() {
		const sortedList = hogList.sort((a,b) => {
			const formatA = a.name.toUpperCase();
			const formatB = b.name.toUpperCase();
			if (formatA < formatB) {return -1;}
			if (formatA > formatB) {return 1;}
			return 0;
		})
		setHogs(hogList => [...sortedList]);
	}

	function toggleGreased() {
		setGreased(greasedOnly => !greasedOnly);
	}
	
	function filterGreased() {
		return hogList.filter((hog) => hog.greased === true)
	}

	return (
		<div className="App">
			<Nav/>
			<SortMenu sortFunction={sortHogs} toggleGreased={toggleGreased}/>
			<PigCardsDisplay hogs={greasedOnly ? filterGreased() : hogList}/>
		</div>
	);
}

export default App;
