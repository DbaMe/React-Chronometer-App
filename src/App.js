import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false);

	useEffect(() => {
		let interval = null;

		if (start) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [start]);
	return (
		<div className="App">
			<h1>React Chrono App</h1>

			<div className="ChronoApp">
				<div className="chrono">
					<h1>
						{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
						{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
						{("0" + ((time / 10) % 1000)).slice(-2)}
					</h1>
				</div>

				<div>
					<button onClick={() => setStart( true)}>START</button>
					<button onClick={() => setStart( false)}>STOP</button>
					<button
						onClick={() => {
							setTime(0);
							setStart(false);
						}}
					>
						RESET
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
