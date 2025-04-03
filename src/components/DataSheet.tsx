import { useState } from "react";
import Student from "./Student";
import { Student as StudentType} from "../types";

export default function DataSheet() {
    const [student, setStudent] = useState<StudentType>({} as StudentType);

    const getStudent= (args: {student: StudentType}) => {
        setStudent(args.student); 
    }

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div style={{ flexGrow: 2 }}>
                <Student getStudent={getStudent} student={student}/>
            </div>
			<div style={{ flexGrow: 2 }}></div>
			<div style={{ flexGrow: 1 }}></div>
		</div>
	);
}
