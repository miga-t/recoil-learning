import { useRecoilState, useRecoilValue } from "recoil";
import { userFamily } from "../state/atom";
import { useEffect } from "react";

const UserComponent = ({ userId }: { userId: number }) => {
	const [user, setUser] = useRecoilState(userFamily(userId));
	console.log(`rendering <UserComponent/> ${userId}`);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			);
			const user = await response.json();
			setUser(user);
		};
		fetchData();
	}, []);

	return (
		<div style={{ border: "solid 2px #329eff" }}>
			{user ? (
				<>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</>
			) : (
				<p>No user data</p>
			)}
		</div>
	);
};

export default UserComponent;
