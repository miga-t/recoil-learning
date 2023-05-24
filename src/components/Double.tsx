import { useSetRecoilState } from "recoil";
import { counterState } from "../state/atom";

const Double = () => {
	console.log("rendering <Double />");

	const setDouble = useSetRecoilState(counterState);
	return (
		<p>
			<button
				onClick={() => {
					setDouble((prev) => prev * 2);
				}}
			>
				Double
			</button>
		</p>
	);
};

export default Double;
