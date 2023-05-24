import { useState } from "react";

const UserGetButton = ({ setNum }: any) => {
	const [usernum, setUsernum] = useState(0);
	return (
		<p>
			<input
				type="number"
				value={usernum}
				onChange={(e: any) => {
					setUsernum(e.target.value);
				}}
			></input>
			<button
				onClick={() => {
					setNum(usernum);
				}}
			>
				UserGetButton
			</button>
		</p>
	);
};

export default UserGetButton;
