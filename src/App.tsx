import "./App.css";
import Hello from "./components/Hello";
import ClickPack from "./components/ClickPack";
import Increment from "./components/Increment";
import Double from "./components/Double";
import Reset from "./components/Reset";
import UserComponent from "./components/UserComponent";
import DummyButton from "./components/DummyButton";
import Alert from "./components/Alert";

function App() {
	console.log("rendering <App />");

	return (
		<>
			<Hello />
			{[...Array(5)].map((_, i) => (
				<ClickPack num={i} key={i} />
			))}
			<Increment />
			<Double />
			<Reset />
			<Alert />
			{[...Array(10)].map((_, i) => (
				<UserComponent userId={i + 1} key={i} />
			))}
			<DummyButton />
		</>
	);
}

export default App;
