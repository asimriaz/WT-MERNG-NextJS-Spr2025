import Student from "./Student";

export default function DataSheet() {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div style={{ flexGrow: 2 }}>
                <Student />
            </div>
			<div style={{ flexGrow: 2 }}></div>
			<div style={{ flexGrow: 1 }}></div>
		</div>
	);
}
