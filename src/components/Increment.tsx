import { useRecoilCallback } from "recoil";
import { counterState } from "../state/atom";

const Increment = () => {
	console.log("rendering <Increment/>");
	const increment = useRecoilCallback(({ set }) => (value: number) => {
		set(counterState, (prev) => prev + value);
	});
	return (
		<p>
			<button onClick={() => increment(1)}>Increment</button>
		</p>
	);
};

export default Increment;
