import { useRecoilCallback } from "recoil";
import { counterState } from "../state/atom";

const Reset = () => {
	console.log("rendering <Reset />");
	const reset = useRecoilCallback(({ reset }) => () => {
		reset(counterState);
	});
	return (
		<p>
			<button onClick={reset}>Reset</button>
		</p>
	);
};

export default Reset;
