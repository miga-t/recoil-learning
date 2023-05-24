import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "../state/atom";

const ClickPack = ({ num }: { num: number }) => {
	const [count, setCount] = useRecoilState(counterState);
	console.log(`rendering <ClickPack ${num}/>`);

	return (
		<p>
			<button
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			>
				{count}
			</button>
		</p>
	);
};

export default ClickPack;
