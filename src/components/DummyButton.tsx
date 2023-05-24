import { useRecoilValue } from "recoil";
import { userFamily } from "../state/atom";
import { useState } from "react";

const DummyButton = () => {
	const user = useRecoilValue(userFamily(10));
	const [flag, setFlag] = useState(false);
	console.log(user);
	return (
		<p>
			<button
				onClick={() => {
					setFlag((prev) => !prev);
				}}
			>
				Dummy Button
			</button>
		</p>
	);
};

export default DummyButton;
