import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;
