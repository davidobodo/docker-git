import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);

	const [list, setList] = useState([]);
	const onFetch = async () => {
		try {
			const res = await axios.get("http://localhost:5050");
			console.log(res);

			setList(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		onFetch();
	}, []);

	return (
		<>
			<h1>The list</h1>
			<ol>
				{list.map((item, i) => {
					return <li key={item.id}>{item.name}</li>;
				})}
			</ol>
		</>
	);
}

export default App;
