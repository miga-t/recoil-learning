import React from "react";
import { useRecoilValue } from "recoil";
import { isCounterGreaterThanMil } from "../state/atom";

const Alert = () => {
	const flag = useRecoilValue(isCounterGreaterThanMil);
	const backgroundColor = flag ? "#FF6666" : "";
	const border = "solid 2px black";
	return <div style={{ backgroundColor, border }}>Alert</div>;
};

export default Alert;
