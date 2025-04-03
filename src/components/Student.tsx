import React from "react";
import { api } from "../api";

export default function Student() {
	const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			// Check if the Enter key is pressed
			console.log(`Enter key pressed with value: ${e.currentTarget.value}`); // Log the value of the input field

			const student = await (await api.get(`/api/students/${e.currentTarget.value}`)).data;
			console.log(student);
		}
	};

	return (
		<>
			<div className="block">
				<label>Reg # : </label>
				<input type="text" name="regno" onKeyDown={handleKeyDown} />
			</div>

		</>
	);
}
