import { atom, atomFamily, selector } from "recoil";

export const counterState = atom<number>({
	key: "counterState",
	default: 0,
});

export const isCounterGreaterThanMil = selector<boolean>({
	key: "isCounterGreaterThanMil",
	get: ({ get }) => {
		return get(counterState) > 1000000;
	},
});

// Define the types
type Geo = {
	lat: string;
	lng: string;
};

type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
};

type Company = {
	name: string;
	catchPhrase: string;
	bs: string;
};

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
};

// Define the atom
export const userState = atom<User | null>({
	key: "userState",
	default: null,
});

export const userFamily = atomFamily<User | null, number>({
	key: "userFamily",
	default: null,
});
